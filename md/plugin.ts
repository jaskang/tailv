import type { Plugin, PluginOption, Update } from 'vite'

const CODE_VUE_REGEXP = /MditVue[a-z0-9]{8}I\d{1,4}\.vue$/

export function MditVuePreview(vueBlockMap: Map<string, string>): Plugin {
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
    load(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        const code = vueBlockMap.get(id)
        return code
      }
    },
  }
}
