import type { Plugin, PluginOption, Update } from 'vite'
import fs from 'node:fs'
import { visit, type Node } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toMarkdown } from 'mdast-util-to-markdown'
import { frontmatterFromMarkdown, frontmatterToMarkdown } from 'mdast-util-frontmatter'
import { gfmFromMarkdown, gfmToMarkdown } from 'mdast-util-gfm'
import { mathFromMarkdown, mathToMarkdown } from 'mdast-util-math'
import { directiveFromMarkdown, directiveToMarkdown } from 'mdast-util-directive'
import type { Code, Parent } from 'mdast'
import { createHash } from 'node:crypto'

const CODE_VUE_REGEXP = /DemoBlock[a-z0-9]{8}I\d{1,4}\.vue$/
const DemoBlockMap = new Map<string, string>()
const FileBlockMap = new Map<string, string[]>()

function md5(str: string): string {
  return createHash('md5').update(str).digest('hex')
}

export default function remarkDemo(id: string, code: string) {
  const tree = fromMarkdown(code, {
    mdastExtensions: [
      frontmatterFromMarkdown(['yaml', 'toml']),
      gfmFromMarkdown(),
      mathFromMarkdown(),
      directiveFromMarkdown,
    ],
  })

  // const scriptNode = tree.children.find(n => n.type === 'html' && n.value.startsWith('<script'))
  const blocks: string[] = []
  FileBlockMap.set(id, blocks)

  visit(tree as Node, 'code', (node: Code, index: number, parent: Parent) => {
    const lang = (node.lang || '').split(':')[0]
    const meta = (node.meta || '').split(' ')

    const isDemo = meta.indexOf('demo') !== -1 && lang === 'vue'
    if (isDemo) {
      const hash = md5(id).substr(0, 8)
      const name = `DemoBlock${hash}I${index}`
      blocks.push(name)
      DemoBlockMap.set(`${name}.vue`, node.value)

      parent.children.splice(
        index,
        1,
        {
          type: 'html',
          value: `<MdvueDemo>\n<template #preview><${name}/></template>`,
        },
        node,
        {
          type: 'html',
          value: '</MdvueDemo>',
        }
      )
      return index + 3
    }
  })
  if (blocks.length > 0) {
    tree.children.push({
      type: 'html',
      value: `<script setup>\n${blocks
        .map(b => `import ${b} from "${b}.vue";`)
        .join('\n')}\n</script>`,
    })
    FileBlockMap.set(id, blocks)

    const out = toMarkdown(tree, {
      extensions: [
        frontmatterToMarkdown(['yaml', 'toml']),
        gfmToMarkdown(),
        mathToMarkdown(),
        directiveToMarkdown,
      ],
    })

    return out
  }
  return code
}

let vuePlugin: any = null
export function MditVuePreview(): Plugin {
  let envType: 'vite' | 'vitepress' | 'vuepress' = 'vite'

  return {
    name: 'mdit-vue-preview',
    enforce: 'pre',
    async configResolved(config) {
      const isVitepress = config.plugins.find(p => p.name === 'vitepress')
      const isVuepress = config.plugins.find(p => p.name === 'vuepress')
      vuePlugin = config.plugins.find(p => p.name === 'vite:vue')
      envType = isVitepress ? 'vitepress' : isVuepress ? 'vuepress' : 'vite'
    },
    resolveId(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        return `${id}`
      }
    },
    async load(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        const code = DemoBlockMap.get(id)
        return code
      }
      if (id.endsWith('.md')) {
        const file = remarkDemo(id, fs.readFileSync(id, 'utf8'))
        return file
      }
    },
    async handleHotUpdate(ctx) {
      const { file, server, timestamp } = ctx
      const { moduleGraph } = server
      if (file.endsWith('.md')) {
        remarkDemo(file, fs.readFileSync(file, 'utf8'))
        const blocks = FileBlockMap.get(file) || []
        if (blocks && blocks.length > 0) {
          const updates: any[] = []
          for (const name of blocks) {
            const id = `${name}.vue`
            const mod = moduleGraph.getModuleById(id)
            if (mod) {
              const ret = await vuePlugin.handleHotUpdate({
                file: id,
                timestamp: timestamp,
                modules: [mod],
                read: () => DemoBlockMap.get(`${name}.vue`),
                server: server,
              })
              updates.push(...ret)
            }
          }
          if (updates.length > 0) {
            return updates.filter(Boolean)
          }
        }
      }
    },
  }
}
