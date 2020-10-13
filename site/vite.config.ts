import type { UserConfig } from 'vite'
import vitePluginVuedoc from './scripts/plugins/vite-plugin-vuedoc'

const config: UserConfig = {
  outDir: 'build',
  alias: {},
  minify: false,
  plugins: [vitePluginVuedoc()]
}

export default config
