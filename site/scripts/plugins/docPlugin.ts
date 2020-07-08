import { Plugin } from 'vite'
import path from 'path'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

const docPlugin: Plugin = {
  resolvers: [
    {
      requestToFile(publicPath: string, root: string) {
        if (publicPath.startsWith('/@docs/')) {
          console.log(`requestToFile:${publicPath}`)
          const docFilePath = publicPath.replace(
            /^\/\@docs\/(.*?)\//g,
            '$1/__docs__/'
          )
          return path.join(
            root,
            `../packages/elenext/src/components/${docFilePath}`
          )
        }
      },
      fileToRequest(filePath: string, root: string) {
        const relativeFilePath = path.relative(root, filePath)
        if (relativeFilePath.startsWith('../packages/elenext/src/components')) {
          const reqPath = relativeFilePath
            .replace('../packages/elenext/src/components/', '')
            .replace(/^(.*?)\/__docs__/g, '$1')
          return `/@docs/${reqPath}`
        }
      },
      alias(id: string) {
        // console.log(`alias:${id}`)
        if (id.startsWith('@docs')) {
          return id.replace('@docs', '/@docs')
        }
      }
    }
  ],
  transforms: [
    {
      test(path, query) {
        return path.startsWith('/@docs/') && path.endsWith('.md')
      },
      transform(code, isImport, isBuild, path, query) {
        const context = md.render(code)
        const docComponent = `
        import {defineComponent} from "/@modules/vue.js";
        const __script = defineComponent({
          template: ${JSON.stringify(context)}
        });
        export default __script;
        `
        return docComponent
      }
    }
  ]
}

export default docPlugin
