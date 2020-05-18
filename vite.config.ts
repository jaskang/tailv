import type { UserConfig } from 'vite'

const config: UserConfig = {
  outDir: 'build',
  alias: {
    elenext:'/dist/elenext.esm.development.js',
    "@/index":'/dist/elenext.esm.development.js'
  },
  minify: false
}

export default config