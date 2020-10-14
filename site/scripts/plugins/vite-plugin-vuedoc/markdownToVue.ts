import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import { VUEDOC_DEMO_PREFIX } from './resolver'

const debug = require('debug')('vuedoc:md')

export type DemoType = {
  id: string
  code: string
}

export function createMarkdownRenderFn(isBuild = false) {
  let demos: DemoType[] = []
  const markdown = new MarkdownIt('default', {
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (code: string, lang: string) {
      if (lang === 'vue') {
        const id = `${VUEDOC_DEMO_PREFIX}${demos.length}`
        demos.push({
          id,
          code
        })
        return `<pre></pre><${id} />`
      }
      return ''
    }
  })
  markdown.use(require('markdown-it-container'), 'demo')
  markdown.use(require('markdown-it-container'), 'tip')

  return (src, path) => {
    const start = Date.now()

    demos = []
    const { content, data: frontmatter } = matter(src)
    const template = markdown.render(content, {})

    markdown.use(require('markdown-it-container'), 'demo')
    markdown.use(require('markdown-it-container'), 'tip')

    const docComponent = `
    <template>
      ${template}
    </template>
    <script>
    import { defineComponent } from 'vue';
    
    ${demos
      .map(demo => {
        return `import ${demo.id} from '${path}/${demo.id}${isBuild ? '.vue' : ''}';`
      })
      .join('\n')}

    const script = defineComponent({
      components: {
        ${demos.map(demo => demo.id).join(',')}
      }
    });
    script.matter = ${JSON.stringify(frontmatter)}
    export default script;
    
    ${isBuild ? '' : 'if (import.meta.hot) { import.meta.hot.accept(); }'}
    
    </script>
    `

    debug(`[render] ${path} in ${Date.now() - start}ms.`)

    const result = { component: docComponent, demos: [...demos] }
    return result
  }
}
