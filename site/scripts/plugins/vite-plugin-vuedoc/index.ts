import { Plugin } from 'vite'
import path from 'path'
import MarkdownIt from 'markdown-it'

const docRule = /^\/@docs\/(.*?).md$/

interface VuedcoPluginOptions {
  docsPath?: (root: string) => string | undefined
  plugins?: any[]
}

export function createVuedcoPlugin(options: VuedcoPluginOptions): Plugin {
  const { docsPath, plugins = [] } = options
  return {
    resolvers: [
      {
        requestToFile(publicPath: string, root: string) {
          if (docRule.test(publicPath)) {
            console.log(`requestToFile:${publicPath}`)
            const docDir = docsPath?.(root) || root
            const docFilePath = publicPath.replace(docRule, '$1.md')
            return path.join(docDir, docFilePath)
          }
        },
        fileToRequest(filePath: string, root: string) {
          const docDir = docsPath?.(root) || root
          if (filePath.startsWith(docDir) && filePath.endsWith('.md')) {
            console.log(`requestToFile:${filePath}`)
            const reqPath = filePath.replace(docDir, '')
            return `/@docs/${reqPath}`
          }
        }
      }
    ],
    transforms: [
      {
        test(path, query) {
          return docRule.test(path)
        },
        // TODO: 目前使用需使用 vue.esm-bundler.js, 需改为 @vue/compiler-sfc 编译组件
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
                    template: ${JSON.stringify(`
                    <Preview>
                      ${str}
                      <template #source>{{${JSON.stringify(str)}}}</template>
                    </Preview>
                    `)}
                  });
                  `
                })
                return `<pre></pre><${id} />`
              }
              return ''
            }
          })
          md.use(require('markdown-it-container'), 'demo')
          const context = md.render(code)
          const docComponent = `
          import { createApp, defineComponent } from 'vue';
  
          ${demos.map(demo => demo.component).join('')}
            
          const __script = defineComponent({
            components: {
              ${demos.map(demo => demo.id).join(',')}
            },
            template: ${JSON.stringify(context)}
          });
          export default __script;`
          return docComponent
        }
      }
    ]
  }
}
