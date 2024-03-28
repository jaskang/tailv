import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import { defineConfigWithTheme, type MarkdownRenderer } from 'vitepress'
import { readFileSync } from 'node:fs'
import jsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

// import typography from '@tailwindcss/typography'
// import forms from '@tailwindcss/forms'
import { ThemeConfig } from './theme/theme'

function getHash(text: string): string {
  return createHash('sha256').update(text).digest('hex').substring(0, 8)
}

const demoBlocks = new Map<string, string>()
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log('vitepress config', __dirname)
const demo = () => {
  return {
    name: 'baseCss',
    resolveId(id: string) {
      if (id.startsWith('virtual:') && demoBlocks.has(id)) {
        return '\0' + id
      }
    },
    load(id: string) {
      if (id.startsWith('\0virtual:') && demoBlocks.has(id)) {
        return demoBlocks.get(id.replace('\0', ''))
      }
    },
  }
}

const fencePlugin = (md: MarkdownRenderer) => {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (tokens, idx, ...args) => {
    const setup = tokens[0]
    console.log(setup)
    const node = tokens[idx]
    const rawCode = fence(tokens, idx, ...args)
    const id = getHash(node.content)

    setup.content.replace(`</script>\n`, `import Demo${id} from 'virtual:Demo${id}' </script>\n`)
    demoBlocks.set(`Demo${id}`, node.content)
    return `<demo-${id}/> ${rawCode}`
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  vite: {
    plugins: [jsx(), demo(), tailwindcss()],
    resolve: {
      alias: [
        {
          find: /^tailv$/,
          replacement: resolve(__dirname, '../../vue/src'),
        },
        { find: '@', replacement: resolve(__dirname, '../../vue/src') },
        {
          find: /^.\/styles\/base\.css$/,
          // replacement: fileURLToPath(new URL('./theme/base.css', import.meta.url)),
          replacement: 'virtual:base.css',
        },
      ],
    },
    css: {
      transformer: 'lightningcss',
      // postcss: {
      // plugins: [
      // 'postcss-import': {},
      // 'tailwindcss/nesting': {},
      // autoprefixer({}) as any,
      // tailwindcss({
      //   darkMode: 'class',
      //   content: [
      //     './index.html',
      //     join(__dirname, '../../vue/src/**/*.{ts,tsx,vue}'),
      //     join(__dirname, '../../docs/*.{md,vue,ts}'),
      //     join(__dirname, '../../docs/components/**/*.{md,vue,ts}'),
      //     join(__dirname, '../../docs/.vitepress/theme/**/*.{md,vue,ts}'),
      //   ],
      //   theme: {
      //     extend: {
      //       colors: {
      //         primary: colors.indigo,
      //         success: colors.green,
      //         warning: colors.amber,
      //         danger: colors.red,
      //       },
      //       maxWidth: {
      //         '8xl': '90rem',
      //       },
      //       typography: theme => ({
      //         DEFAULT: {
      //           css: {
      //             maxWidth: 'none',
      //           },
      //         },
      //       }),
      //     },
      //   },
      //   plugins: [
      //     typography(),
      //     forms({
      //       strategy: 'base',
      //     }),
      //   ],
      //   blocklist: ['container'],
      // }),
      // ],
      // },
    },
  },
  markdown: {
    config(md) {
      md.use(fencePlugin)
    },
    // codeTransformers: [
    //   {
    //     preprocess(code, options) {
    //       this.__source__ = code
    //       console.log(code, options)
    //     },
    //     postprocess(html, options) {
    //       const isDemo = options.meta?.__raw?.split(' ').includes('demo')
    //       console.log(html, options, isDemo, this)
    //       return `${this.__source__}\n${html}`
    //     },
    //   },
    // ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { title: 'Home', link: '/', activeMatch: '/' },
      { title: 'Components', link: '/components/button', activeMatch: '/components/' },
    ],

    sidebar: [
      {
        title: '基础',
        children: [
          { key: 'Button', link: '/components/button' },
          { key: 'Anchor', link: '/components/anchor' },
          { key: 'ScrollArea', link: '/components/scroll-area' },
        ],
      },
      {
        title: '表单',
        children: [
          { key: 'Checkbox', link: '/components/checkbox' },
          { key: 'Radio', link: '/components/radio' },
          { key: 'Input', link: '/components/input' },
          { key: 'Select', link: '/components/select' },
          { key: 'Switch', link: '/components/switch' },
        ],
      },
      {
        title: '展示',
        children: [{ key: 'Menu', link: '/components/menu' }],
      },
      {
        title: '反馈',
        children: [
          { key: 'Popover', link: '/components/popover' },
          { key: 'Tooltip', link: '/components/tooltip' },
        ],
      },
    ],
  },
})
