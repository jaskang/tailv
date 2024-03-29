import fs from 'node:fs'
import path, { dirname } from 'node:path'

import type { Plugin, ResolvedConfig } from 'vite'

import { createHash } from 'node:crypto'

import { fromMarkdown } from 'mdast-util-from-markdown'
import { toMarkdown } from 'mdast-util-to-markdown'
import { visit } from 'unist-util-visit'
import type { Html } from 'mdast'

const CODE_VUE_REGEXP = /.md.DemoI[a-zA-Z0-9]{8}\.vue$/
const DemoMap = new Map<string, string>()

function getHash(text: string): string {
  return createHash('sha256').update(text).digest('hex').substring(0, 8)
}

function praseMeta(meta?: string | null) {
  const metaArr = (meta || '').split(' ')
  const ret: Record<string, string | boolean> = {}
  for (const m of metaArr) {
    const [key, val] = m.split('=', 2)
    ret[key] = val || true
  }
  return ret
}
function remarkDemo(id: string, content: string) {
  const root = fromMarkdown(content)

  const blocks: Record<string, string> = {}

  visit(root, 'code', (node, index, parent) => {
    const lang = (node.lang || '').split(':')[0]
    const meta = praseMeta(node.meta)
    const demo = meta['demo']
    const isVueDemo = demo && lang === 'vue'
    if (isVueDemo) {
      const hash = getHash(node.value)
      const name = `DemoI${hash}`
      blocks[name] = node.value
      parent!.children.splice(index!, 1, {
        type: 'html',
        value: `
<DemoWrapper lang="${decodeURIComponent(node.lang || '')}" meta="${decodeURIComponent(node.meta || '')}" code="${encodeURIComponent(node.value)}">
  <${name}/>
</DemoWrapper>`,
      })
      return index! + 1
    }
  })

  const setup = root.children.find(n => n.type === 'html' && n.value.startsWith('<script setup>')) as Html
  if (setup) {
    setup.value = setup.value.replace(
      /<script setup>/,
      `<script setup>\n${Object.keys(blocks)
        .map(k => `import ${k} from "${id}.${k}.vue";`)
        .join('\n')}`
    )
  } else {
    root.children.unshift({
      type: 'html',
      value: '<script setup>\n' + "import { ref } from 'vue'\n" + '\n' + 'const count = ref(0)\n' + '</script>',
    })
  }

  const code = toMarkdown(root)
  return { code, blocks }
}

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
      if (CODE_VUE_REGEXP.test(id)) {
        return id
      }
    },
    async load(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        const blockId = '/' + path.relative(config.root, id)
        const demoCode = DemoMap.get(id) || DemoMap.get(blockId)
        return demoCode
      }
      if (id.endsWith('.md')) {
        const { code, blocks } = remarkDemo(id, fs.readFileSync(id, 'utf8'))
        console.log(code)
        for (const k of Object.keys(blocks)) {
          const blockKey = `${id}.${k}.vue`
          const blockId = '/' + path.relative(config.root, blockKey)
          DemoMap.set(blockId, blocks[k])
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
          const blockId = '/' + path.relative(config.root, blockKey)
          DemoMap.set(blockId, blocks[k])

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
