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
      markdownPlugins: []
    }),
    vitePluginSyncmd()
  ]
}

export default config
