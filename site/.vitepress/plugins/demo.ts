import type { Html } from 'mdast'
import type { Plugin, ResolvedConfig } from 'vite'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { frontmatterFromMarkdown, frontmatterToMarkdown } from 'mdast-util-frontmatter'
import { toMarkdown } from 'mdast-util-to-markdown'
import { frontmatter } from 'micromark-extension-frontmatter'
import { createHash } from 'node:crypto'
import fs from 'node:fs'
import { relative } from 'node:path'
import { visit } from 'unist-util-visit'

const CODE_VUE_REGEXP = /.md.DemoI[a-zA-Z0-9]{8}\.vue$/
const DemoMap = new Map<string, string>()

function getHash(text: string): string {
  return createHash('sha256').update(text).digest('hex').substring(0, 8)
}

function praseMeta(meta: string = '') {
  return (meta || '').split(' ').reduce(
    (prev, item) => {
      const arr = item.split('=', 2) as [string, string]
      return { ...prev, [arr[0]]: arr[1] || true }
    },
    {} as Record<string, any>
  )
}
function remarkDemo(id: string, content: string) {
  const root = fromMarkdown(content, {
    extensions: [frontmatter(['yaml', 'toml'])],
    mdastExtensions: [frontmatterFromMarkdown(['yaml', 'toml'])],
  })

  const blocks: Record<string, string> = {}

  visit(root, 'code', (node, index, parent) => {
    const lang = (node.lang || '').split(':')[0]?.split('{')[0]
    const meta = praseMeta(node.meta || '')
    const demo = meta['demo']
    const isVueDemo = demo && lang === 'vue'
    if (isVueDemo) {
      const hash = getHash(node.value)
      const name = `DemoI${hash}`
      blocks[name] = node.value
      parent!.children.splice(index!, 1, {
        type: 'html',
        value: `
<DemoProxy lang="${encodeURIComponent(node.lang || '')}" meta="${encodeURIComponent(node.meta || '')}" code="${encodeURIComponent(node.value)}">
<${name}/>
<template #code>

\`\`\`${node.lang} ${node.meta}
${node.value}
\`\`\`

</template>
</DemoProxy>
`,
      })
      return index! + 1
    }
  })

  const setup = root.children.find(n => n.type === 'html' && n.value.startsWith('<script setup>')) as Html
  if (setup) {
    setup.value = setup.value.replace(
      /<script setup>/,
      `<script setup>
import DemoProxy from "virtual:demo-proxy";
${Object.keys(blocks)
  .map(k => `import ${k} from "${id}.${k}.vue";`)
  .join('\n')}`
    )
  } else {
    const i = root.children[0]?.type === 'yaml' ? 1 : 0
    root.children.splice(i, 0, {
      type: 'html',
      value: `<script setup>
import DemoProxy from "virtual:demo-proxy";
${Object.keys(blocks)
  .map(k => `import ${k} from "${id}.${k}.vue";`)
  .join('\n')} 
</script>`,
    })
  }
  const code = toMarkdown(root, { extensions: [frontmatterToMarkdown(['yaml', 'toml'])] })
  return { code, blocks }
}

const virtualDemoId = 'virtual:demo-proxy'
const resolvedVirtualDemoId = '\0' + virtualDemoId

export function demo(): Plugin {
  let config: ResolvedConfig
  let vuePlugin: any
  return {
    name: 'vite:markdown-demo',
    enforce: 'pre',
    async configResolved(cfg) {
      config = cfg
      vuePlugin = cfg.plugins.find(p => p.name === 'vite:vue')!
      // const isVitepress = cfg.plugins.find(p => p.name === 'vitepress')
      // envType = isVitepress ? 'vitepress' : 'vite'
    },
    resolveId(id) {
      if (id === virtualDemoId) {
        return resolvedVirtualDemoId
      }
      if (CODE_VUE_REGEXP.test(id)) {
        return id
      }
    },
    async load(id) {
      if (id === resolvedVirtualDemoId) {
        return `import { defineComponent, h, resolveComponent, computed } from 'vue'
export default defineComponent({
  props: {
    lang: { type: String, required: true },
    meta: { type: String, required: true },
    code: { type: String, required: true },
  },
  setup(props, { slots }) {
    const DemoWrapper = resolveComponent('DemoWrapper')
    return () =>
      h(
        DemoWrapper,
        {
          lang: decodeURIComponent(props.lang),
          meta: decodeURIComponent(props.meta),
          code: decodeURIComponent(props.code),
        },
        slots
      )
  },
})
`
      }

      if (CODE_VUE_REGEXP.test(id)) {
        const blockId = '/' + relative(config.root, id)
        const demoCode = DemoMap.get(id) || DemoMap.get(blockId)
        return demoCode
      }
      if (id.endsWith('.md')) {
        const { code, blocks } = remarkDemo(id, fs.readFileSync(id, 'utf8'))
        for (const k of Object.keys(blocks)) {
          const blockKey = `${id}.${k}.vue`
          const blockId = '/' + relative(config.root, blockKey)
          DemoMap.set(blockId, blocks[k]!)
        }
        return code
      }
    },
    async handleHotUpdate(ctx) {
      const { file, server, timestamp } = ctx
      const { moduleGraph } = server
      if (file.endsWith('.md')) {
        const { blocks } = remarkDemo(file, fs.readFileSync(file, 'utf8'))
        const updates: any[] = []
        for (const k of Object.keys(blocks)) {
          const blockKey = `${file}.${k}.vue`
          const blockId = '/' + relative(config.root, blockKey)
          DemoMap.set(blockId, blocks[k]!)

          const mod = moduleGraph.getModuleById(blockId)
          if (mod) {
            // console.log(mod)
            const ret = await vuePlugin.handleHotUpdate({
              file: blockId,
              timestamp: timestamp,
              modules: [mod],
              read: () => blocks[k],
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

export default demo
