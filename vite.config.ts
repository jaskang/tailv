import type { UserConfig } from 'vite'
import { lessPlugin } from './scripts/plugins/lessplugin'
const config: UserConfig = {
  outDir: 'build',
  alias: {
    elenext:'/dist/elenext.esm.development.js',
    "@/index":'/dist/elenext.esm.development.js'
  },
  minify: false,
  plugins: [lessPlugin]
} 

export default config