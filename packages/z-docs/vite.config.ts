import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createVueDocPlugin from 'vite-plugin-vuedoc'
import vitePluginSyncmd from './scripts/vitePluginSyncmd'

const config: UserConfig = {
  assetsInclude: ['src/assets'],
  optimizeDeps: {
    exclude: ['elenext']
  },
  plugins: [
    vitePluginSyncmd(),
    createVueDocPlugin({
      markdownIt: {
        plugins: []
      },
      highlight: {
        theme: 'one-dark'
      }
    }),
    vue()
  ]
}

export default config
