import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfigWithTheme } from 'vitepress'
import jsx from '@vitejs/plugin-vue-jsx'
import nesting from 'tailwindcss/nesting'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import atImport from 'postcss-import'
import VueDevTools from 'vite-plugin-vue-devtools'
import type { ThemeConfig } from './theme/theme'
import { demo } from './plugins/demo'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: 'My Awesome Project',
  // appearance: {
  //   valueDark: 'vscode-dark',
  //   valueLight: 'vscode-light',
  // },
  description: 'A VitePress Site',
  markdown: {
    // lineNumbers: true,
    codeTransformers: [
      {
        pre(node) {
          this.addClassToHast(node, 'not-prose')
        },
      },
    ],
    headers: true,
    theme: { light: 'github-light', dark: 'github-dark' },
    async shikiSetup(shiki) {
      await shiki.loadTheme('github-light', 'github-dark')
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { title: 'Home', link: '/', activeMatch: '/' },
      { title: 'Components', link: '/components/button', activeMatch: '/components/' },
    ],

    sidebar: {
      基础: [
        { title: 'Button', link: '/components/button' },
        { title: 'Anchor', link: '/components/anchor' },
        { title: 'ScrollArea', link: '/components/scroll-area' },
      ],
      表单: [
        { title: 'Checkbox', link: '/components/checkbox' },
        { title: 'Radio', link: '/components/radio' },
        { title: 'Input', link: '/components/input' },
        { title: 'Textarea', link: '/components/textarea' },
        { title: 'Select', link: '/components/select' },
        { title: 'Switch', link: '/components/switch' },
      ],
      展示: [
        { title: 'Menu', link: '/components/menu' },
        { title: 'Tab', link: '/components/tab' },
        { title: 'Avatar', link: '/components/avatar' },
        { title: 'Badge', link: '/components/badge' },
      ],
      反馈: [
        { title: 'Popover', link: '/components/popover' },
        { title: 'Tooltip', link: '/components/tooltip' },
      ],
    },
  },
  vite: {
    plugins: [jsx(), demo(), VueDevTools()],
    resolve: {
      alias: [
        { find: /^tailv$/, replacement: resolve(__dirname, '../../src') },
        { find: '@', replacement: resolve(__dirname, '../../src') },
      ],
    },
    css: {
      // transformer: 'lightningcss',
      postcss: {
        plugins: [
          atImport(),
          nesting,
          autoprefixer({}) as any,
          tailwindcss({ config: join(__dirname, '../../tailwind.config.js') }),
        ],
      },
    },
  },
})
