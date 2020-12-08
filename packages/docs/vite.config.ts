import type { UserConfig } from 'vite'
import vitePluginVuedoc from 'vite-plugin-vuedoc'
import vitePluginSyncmd from './scripts/vitePluginSyncmd'

const config: UserConfig = {
  outDir: 'build',
  assetsDir: 'site/assets',
  optimizeDeps: {
    exclude: ['elenext', '@elenext/icons']
  },
  alias: {
    elenext: '/dist/elenext.esm.js'
  },
  plugins: [
    vitePluginSyncmd(),
    vitePluginVuedoc({
      prism: {
        theme: 'tomorrow'
      }
    })
  ]
}

export default config
