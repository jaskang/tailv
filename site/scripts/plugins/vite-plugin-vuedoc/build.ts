import path from 'path'
import slash from 'slash'
import fs from 'fs-extra'
import { createMarkdownRenderFn, DemoType } from './markdownToVue'
import { Plugin } from 'rollup'

const cacheDemos: Map<string, { component: any; demos: DemoType[] }> = new Map()

const demoPathReg = /(.*?\.md)\/(VueDocDemo\d+)/

export function createVuedocBuildPlugin(): Plugin {
  const markdownToVue = createMarkdownRenderFn(true)
  return {
    name: 'vuedoc',
    resolveId(id) {
      if (demoPathReg.test(id)) {
        const [, filepath, demoid] = demoPathReg.exec(id)
        console.log('resolveId:', id)
        return id
      }
      return null
    },
    async load(id) {
      if (demoPathReg.test(id) && id.indexOf('?vue') === -1) {
        const [, filepath, demoid] = demoPathReg.exec(id)
        const md = cacheDemos.get(filepath) || { component: '', demos: [] }
        const demo = md.demos.find(item => item.id === demoid)
        console.error(`${demoid}:`, id)
        return demo.code
      } else if (id.endsWith('.md')) {
        const content = await fs.readFile(id, 'utf-8')
        const { component, demos } = markdownToVue(content, id)
        console.error('id', id)
        cacheDemos.set(id, { component, demos })
        return component
      }
      return null
    }
  }
}
