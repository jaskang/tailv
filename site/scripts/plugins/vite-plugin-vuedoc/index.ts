import { Plugin } from 'vite'
import path from 'path'
import MarkdownIt from 'markdown-it'

const vuedocPlugin: Plugin = {
  resolvers: [
    {
      requestToFile(publicPath: string, root: string) {
        if (publicPath.startsWith('/@docs/')) {
          // console.log(`requestToFile:${publicPath}`)
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
        // console.log(`fileToRequest:${relativeFilePath}`)
        if (relativeFilePath.startsWith('../packages/elenext/src/components')) {
          const reqPath = relativeFilePath
            .replace('../packages/elenext/src/components/', '')
            .replace(/^(.*?)\/__docs__/g, '$1')
          return `/@docs/${reqPath}`
        }
      }
      // alias(id: string) {
      //   if (id.startsWith('@docs')) {
      //     return id.replace('@docs', '/@docs')
      //   }
      // }
    }
  ],
  transforms: [
    {
      test(path, query) {
        console.log()

        return path.endsWith('.md')
      },
      transform(code, isImport, isBuild, path, query) {
        const demos: {
          id: string
          component: string
        }[] = []
        const md = new MarkdownIt({
          html: true,
          linkify: true,
          typographer: true,
          highlight: function (str: string, lang: string) {
            if (lang === 'html') {
              const id = `Demo${demos.length}`
              demos.push({
                id: id,
                component: `
                const ${id} = defineComponent({
                  template: ${JSON.stringify(str)}
                });
                `
              })
              return `<${id}></${id}>`
            }
            return str
          }
        })
        const context = md.render(code)
        const docComponent = `
        import { createApp, defineComponent } from 'vue';

        ${demos
          .map(demo => {
            return demo.component
          })
          .join('')}
          
        const __script = defineComponent({
          components: {
            ${demos
              .map(demo => {
                return demo.id
              })
              .join(',')}
          },
          template: ${JSON.stringify(context)}
        });
        export default __script;`
        return docComponent
      }
    }
  ]
}

export default vuedocPlugin
