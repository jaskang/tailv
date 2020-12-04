import type { UserConfig } from 'vite'
import vitePluginVuedoc from 'vite-plugin-vuedoc'
import vitePluginSyncmd from './scripts/vitePluginSyncmd'

const config: UserConfig = {
  outDir: 'build',
  minify: false,
  assetsDir: 'site/assets',
  alias: {
    elenext: '/dist/elenext.esm.js'
  },
  plugins: [
    vitePluginVuedoc({
      prism: {
        theme: 'tomorrow'
      }
    }),
    vitePluginSyncmd()
  ]
}

export default config
