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

function md5(str: string): string {
  return createHash('md5').update(str).digest('hex')
}

export default function remarkDemo(options = {}) {
  return (tree: Root, file: any) => {
    console.log(JSON.stringify(tree, null, 2))
    const id = file.path
    // const scriptNode = tree.children.find(n => n.type === 'html' && n.value.startsWith('<script'))
    const scriptImport: string[] = []
    visit(tree as Node, 'code', (node: Code, index: number, parent: Parent) => {
      const lang = (node.lang || '').split(':')[0]
      const meta = (node.meta || '').split(' ')

      const isDemo = meta.indexOf('demo') !== -1 && lang === 'vue'
      if (isDemo) {
        // console.log(node)
        // node.value
        const hash = md5(file.path).substr(0, 8)
        const name = `DemoBlock${hash}I${index}`
        const dir = path.dirname(id)
        scriptImport.push(`import ${name} from "${name}.vue";`)
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
    tree.children.push({
      type: 'html',
      value: `<script setup>\n${scriptImport.join('\n')}\n</script>`,
    })
  }
}

export function MditVuePreview(): Plugin {
  let envType: 'vite' | 'vitepress' | 'vuepress' = 'vite'

  return {
    name: 'mdit-vue-preview',
    enforce: 'pre',
    async configResolved(config) {
      const isVitepress = config.plugins.find(p => p.name === 'vitepress')
      const isVuepress = config.plugins.find(p => p.name === 'vuepress')
      envType = isVitepress ? 'vitepress' : isVuepress ? 'vuepress' : 'vite'
    },
    resolveId(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        return `${id}`
      }
    },
    async load(id) {
      console.log(id)
      if (CODE_VUE_REGEXP.test(id)) {
        const code = DemoBlockMap.get(id)
        return code
      }
      if (id.endsWith('.md')) {
        const file = await remark()
          .use(remarkDemo)
          .process(new VFile({ value: fs.readFileSync(id, 'utf8'), path: id }))
        console.log('load', id, file.toString())
        return file.toString()
      }
    },
  }
}
