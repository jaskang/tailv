import path from 'path'
import type { UserConfig } from 'vite'
import vitePluginVuedoc from 'vite-plugin-vuedoc'
import vitePluginSyncmd from './script/vitePluginSyncmd'

const config: UserConfig = {
  outDir: 'build',
  minify: false,
  plugins: [vitePluginVuedoc(), vitePluginSyncmd()]
}

export default config
