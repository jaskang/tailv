import path from 'path'
import slash from 'slash'
import fs from 'fs-extra'
import { createMarkdownRenderFn, DemoType } from './markdownToVue'
import { Plugin } from 'rollup'
import { VUEDOC_DEMO_RE } from './resolver'

const cacheDemos: Map<string, { component: any; demos: DemoType[] }> = new Map()

export function createVuedocBuildPlugin(): Plugin {
  const markdownToVue = createMarkdownRenderFn(true)
  return {
    name: 'vuedoc',
    resolveId(id) {
      if (VUEDOC_DEMO_RE.test(id)) {
        return id
      }
      return null
    },
    async load(id) {
      if (VUEDOC_DEMO_RE.test(id) && id.indexOf('?vue') === -1) {
        const [, filepath, demoid] = VUEDOC_DEMO_RE.exec(id)
        const md = cacheDemos.get(filepath) || { component: '', demos: [] }
        const demo = md.demos.find(item => item.id === demoid)
        return demo.code
      } else if (id.endsWith('.md')) {
        const content = await fs.readFile(id, 'utf-8')
        const { component, demos } = markdownToVue(content, id)
        cacheDemos.set(id, { component, demos })
        return component
      }
      return null
    }
  }
}