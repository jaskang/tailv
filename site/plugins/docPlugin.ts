import { Plugin } from 'vite'
import MagicString from 'magic-string'

export const jsPlugin: Plugin = {
  transforms: [
    {
      test(path, query) {
        return path.endsWith('.md')
      },
      transform(code, isImport, isBuild, path, query) {
        const s = new MagicString(code)

        const i = code.indexOf(`=`)
        const cur = code.substring(i + 2, i + 3)
        s.overwrite(i + 2, i + 3, String(Number(cur) + 1))
        // test source map by appending lines
        s.prepend(`\n\n\n`)

        return code
      }
    }
  ]
}
