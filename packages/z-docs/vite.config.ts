import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createVueDocPlugin from 'vite-plugin-vuedoc'
import vitePluginSyncmd from './scripts/vitePluginSyncmd'

const config: UserConfig = {
  assetsDir: 'src/assets',
  optimizeDeps: {
    exclude: ['elenext']
    // link: ['optimize-linked']
  },
  alias: {},
  plugins: [
    vitePluginSyncmd(),
    createVueDocPlugin({
      highlight: {
        theme: 'one-light'
      }
    }),
    vue()
  ]
}

export default config
