import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'

export type DemoType = {
  id: string
  code: string
}

export function createMarkdownRenderFn(isBuild = false) {
  const demos: DemoType[] = []
  const markdown = new MarkdownIt('default', {
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (code: string, lang: string) {
      if (lang === 'vue') {
        const id = `VueDocDemo${demos.length}`
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
    demos.splice(0, demos.length)
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
        console.log(`${path}/${demo.id}`)
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
    </script>
    `

    return { component: docComponent, demos: [...demos] }
  }
}
