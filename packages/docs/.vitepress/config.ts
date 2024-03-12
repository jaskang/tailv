import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import jsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import colors from 'tailwindcss/colors'

import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

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
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  vite: {
    plugins: [jsx(), baseCss()],
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
      postcss: {
        plugins: [
          // 'postcss-import': {},
          // 'tailwindcss/nesting': {},
          autoprefixer({}) as any,
          tailwindcss({
            darkMode: 'class',
            content: [
              './index.html',
              join(__dirname, '../../vue/src/**/*.{ts,tsx,vue}'),
              join(__dirname, '../../docs/*.{md,mdx}'),
              join(__dirname, '../../docs/components/**/*.{md,mdx}'),
              join(__dirname, '../../docs/.vitepress/theme/**/*.{md,mdx}'),
            ],
            theme: {
              extend: {
                colors: {
                  primary: colors.indigo,
                  success: colors.green,
                  warning: colors.amber,
                  danger: colors.red,
                },
              },
            },
            plugins: [
              typography(),
              forms({
                strategy: 'base',
              }),
            ],
            blocklist: ['container'],
          }),
        ],
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
    ],

    sidebar: [
      {
        text: 'components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Anchor', link: '/components/anchor' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Radio', link: '/components/radio' },
          { text: 'Input', link: '/components/input' },
          { text: 'Select', link: '/components/select' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Tooltip', link: '/components/tooltip' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
