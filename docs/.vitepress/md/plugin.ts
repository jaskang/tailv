import type { Plugin, PluginOption, Update } from 'vite'
import fs from 'node:fs'
import { remark } from 'remark'
import { visit, type Node } from 'unist-util-visit'
import type { Code, Parent, Root } from 'mdast'
import path from 'node:path'
import { VFile } from 'vfile'
import { createHash } from 'node:crypto'

const CODE_VUE_REGEXP = /DemoBlock[a-z0-9]{8}I\d{1,4}\.vue$/
const DemoBlockMap = new Map<string, string>()
const FileBlockMap = new Map<string, string[]>()

function md5(str: string): string {
  return createHash('md5').update(str).digest('hex')
}

export default function remarkDemo(options = {}) {
  return (tree: Root, file: any) => {
    // console.log(JSON.stringify(tree, null, 2))
    const id = file.path
    // const scriptNode = tree.children.find(n => n.type === 'html' && n.value.startsWith('<script'))
    const blocks: string[] = []
    FileBlockMap.set(id, blocks)

    visit(tree as Node, 'code', (node: Code, index: number, parent: Parent) => {
      const lang = (node.lang || '').split(':')[0]
      const meta = (node.meta || '').split(' ')

      const isDemo = meta.indexOf('demo') !== -1 && lang === 'vue'
      if (isDemo) {
        // console.log(node)
        // node.value
        const hash = md5(file.path).substr(0, 8)
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
    }
  }
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
      console.log('vuePlugin', vuePlugin)

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
        const file = await remark()
          .use(remarkDemo)
          .process(new VFile({ value: fs.readFileSync(id, 'utf8'), path: id }))
        return file.toString()
      }
    },
    async handleHotUpdate(ctx) {
      const { file, server, timestamp } = ctx
      const { moduleGraph } = server
      if (file.endsWith('.md')) {
        await remark()
          .use(remarkDemo)
          .process(new VFile({ value: fs.readFileSync(file, 'utf8'), path: file }))
        const blocks = FileBlockMap.get(file) || []
        if (blocks && blocks.length > 0) {
          const updates: any[] = []
          for (const name of blocks) {
            const id = `${name}.vue`
            const mod = moduleGraph.getModuleById(id)
            if (mod) {
              console.log('handleHotUpdate', id, DemoBlockMap.get(`${name}.vue`))
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
