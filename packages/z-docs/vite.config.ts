import type { UserConfig } from 'vite'
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
      prism: {
        theme: 'tomorrow'
      }
    })
  ]
}

export default config
