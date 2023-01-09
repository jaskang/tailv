import fs from 'node:fs'
import { createHash } from 'node:crypto'
import { type Plugin, type ResolvedConfig, normalizePath } from 'vite'
import { visit, type Node } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toMarkdown } from 'mdast-util-to-markdown'
import { frontmatterFromMarkdown, frontmatterToMarkdown } from 'mdast-util-frontmatter'
import type { Code, Parent } from 'mdast'
import { relative } from 'node:path'

const CODE_VUE_REGEXP = /.md.DemoBlock[a-z0-9]{8}I\d{1,4}\.vue$/
const DemoBlockMap = new Map<string, string>()

function md5(str: string): string {
  return createHash('md5').update(str).digest('hex')
}

export function remarkDemoBlock(id: string, code: string) {
  const tree = fromMarkdown(code, {
    mdastExtensions: [
      frontmatterFromMarkdown(['yaml', 'toml']),
      // gfmFromMarkdown(),
      // mathFromMarkdown(),
      // directiveFromMarkdown,
    ],
  })

  // const scriptNode = tree.children.find(n => n.type === 'html' && n.value.startsWith('<script'))
  const blocks: Record<string, string> = {}

  visit(tree as Node, 'code', (node: Code, index: number, parent: Parent) => {
    const lang = (node.lang || '').split(':')[0]
    const meta = (node.meta || '').split(' ')

    const isDemo = meta.indexOf('demo') !== -1 && lang === 'vue'
    if (isDemo) {
      const hash = md5(id).substr(0, 8)
      const name = `DemoBlock${hash}I${index}`
      blocks[name] = node.value

      parent.children.splice(
        index,
        1,
        {
          type: 'html',
          value: `<MdvueDemo lang="${decodeURIComponent(
            node.lang || ''
          )}" meta="${decodeURIComponent(node.meta || '')}" code="${encodeURIComponent(
            node.value
          )}">\n<${name}/>\n<template #code>`,
        },
        node,
        {
          type: 'html',
          value: '</template></MdvueDemo>',
        }
      )
      return index + 3
    }
  })
  if (Object.keys(blocks).length > 0) {
    tree.children.push({
      type: 'html',
      value: `<script setup>\n${Object.keys(blocks)
        .map(k => `import ${k} from "${id}.${k}.vue";`)
        .join('\n')}\n</script>`,
    })
    const code = toMarkdown(tree, {
      extensions: [frontmatterToMarkdown(['yaml', 'toml'])],
    })
    return { code, blocks }
  }
  return { code, blocks }
}

export function MditVuePreview(): Plugin {
  let envType: 'vite' | 'vitepress' | 'vuepress' = 'vite'
  let vuePlugin: any = null
  let root = ''
  return {
    name: 'mdit-vue-preview',
    enforce: 'pre',
    configResolved(config) {
      root = config.root
      const isVitepress = config.plugins.find(p => p.name === 'vitepress')
      const isVuepress = config.plugins.find(p => p.name === 'vuepress')
      vuePlugin = config.plugins.find(p => p.name === 'vite:vue')
      envType = isVitepress ? 'vitepress' : isVuepress ? 'vuepress' : 'vite'
    },
    resolveId(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        console.log('resolveId', id)
        return `${id}`
      }
    },
    async load(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        const demoCode = DemoBlockMap.get(id)
        console.log('load', id, demoCode)
        return demoCode
      }
      if (id.endsWith('.md')) {
        const { code, blocks } = remarkDemoBlock(id, fs.readFileSync(id, 'utf8'))
        for (const k of Object.keys(blocks)) {
          const [filename] = id.split('.md', 1)
          const blockKey = `${filename}.${k}.vue`
          const blockId = '/' + relative(root, blockKey)
          console.log('DemoBlockMap.set', blockId, blocks[k])

          DemoBlockMap.set(blockId, blocks[k])
        }
        return code
      }
    },
    async handleHotUpdate(ctx) {
      const { file, server, timestamp } = ctx
      const { moduleGraph } = server
      server.moduleGraph
      if (file.endsWith('.md')) {
        const { blocks } = remarkDemoBlock(file, fs.readFileSync(file, 'utf8'))

        const updates: any[] = []
        for (const k of Object.keys(blocks)) {
          const [filename] = file.split('.md', 1)
          const blockKey = `${filename}.${k}.vue`
          const blockId = '/' + relative(root, blockKey)
          DemoBlockMap.set(blockId, blocks[k])

          const mod = moduleGraph.getModuleById(blockId)
          if (mod) {
            const ret = await vuePlugin.handleHotUpdate({
              file: blockId,
              timestamp: timestamp,
              modules: [mod],
              read: () => DemoBlockMap.get[blockId],
              server: server,
            })
            updates.push(...ret)
          }
        }
        if (updates.length > 0) {
          return updates.filter(Boolean)
        }
      }
    },
  }
}
