import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfigWithTheme } from 'vitepress'
import { readFileSync } from 'node:fs'
import jsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

// import typography from '@tailwindcss/typography'
// import forms from '@tailwindcss/forms'
import { ThemeConfig } from './theme/theme'

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log('vitepress config', __dirname)
const baseCss = () => {
  const virtualModuleId = 'virtual:base.css'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'baseCss',
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return readFileSync(resolve(__dirname, './theme/base.css'), 'utf-8')
      }
    },
  }
}
// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  vite: {
    plugins: [
      jsx(),
      // baseCss(),
      tailwindcss(),
    ],
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
    headers: true,
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
          { key: 'Popover', link: '/components/popover' },
          { key: 'Tooltip', link: '/components/tooltip' },
        ],
      },
      {
        title: '表单',
        children: [
          { key: 'Checkbox', link: '/components/checkbox' },
          { key: 'Radio', link: '/components/radio' },
          { key: 'Input', link: '/components/input' },
          { key: 'Select', link: '/components/select' },
          { key: 'Popover', link: '/components/popover' },
          { key: 'Tooltip', link: '/components/tooltip' },
        ],
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
