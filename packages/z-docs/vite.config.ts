import type { UserConfig } from 'vite'
import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'
import markdownItContainer from 'markdown-it-container'
import vitePluginSyncmd from './scripts/vitePluginSyncmd'

const containers = ['success', 'warning', 'info', 'error'].map(type => {
  return [
    markdownItContainer,
    type,
    {
      validate: function (params: string) {
        const str = params.trim()
        if (str === type || str.startsWith(`${type} `)) {
          return [str, str === type ? '' : str.substr(type.length + 1)]
        }
        return null
      },
      render: function (tokens: any[], idx: number) {
        const str = tokens[idx].info.trim()
        const m = [str, str === type ? '' : str.substr(type.length + 1)]
        if (tokens[idx].nesting === 1) {
          // opening tag
          return `<p><e-alert type="${type}" :closable="false" title="${m[1]}" >`
        } else {
          // closing tag
          return '</e-alert></p>'
        }
      },
    },
  ]
})

const config: UserConfig = {
  assetsInclude: ['src/assets'],
  alias: {},
  optimizeDeps: {
    include: ['vue', 'vue-router', '@elenext/icons'],
    exclude: ['elenext'],
  },
  plugins: [
    vitePluginSyncmd(),
    createPlugin({
      markdownIt: {
        plugins: [...containers],
      },
      highlight: {
        theme: 'one-dark',
      },
    }),
    vue({
      include: [...vueDocFiles],
    }),
  ],
}

export default config
