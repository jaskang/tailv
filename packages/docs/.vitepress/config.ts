import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import { defineConfigWithTheme, type MarkdownRenderer } from 'vitepress'
import { readFileSync } from 'node:fs'
import jsx from '@vitejs/plugin-vue-jsx'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import nesting from 'tailwindcss/nesting'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import atImport from 'postcss-import'
import forms from '@tailwindcss/forms'
import { tailwindcss as tailv } from '@tailv/preset'
import { ThemeConfig } from './theme/theme'
import { demo } from './plugins/demo'
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log('vitepress config', __dirname)

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  vite: {
    plugins: [jsx(), demo()],
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
      // transformer: 'lightningcss',
      postcss: {
        plugins: [
          atImport(),
          nesting,
          autoprefixer({}) as any,
          tailwindcss({
            darkMode: 'class',
            content: [
              './index.html',
              join(__dirname, '../../vue/src/**/*.{ts,tsx,vue}'),
              join(__dirname, '../../docs/*.{md,vue,ts}'),
              join(__dirname, '../../docs/components/**/*.{md,vue,ts}'),
              join(__dirname, '../../docs/.vitepress/theme/**/*.{md,vue,ts}'),
            ],
            theme: {
              extend: {
                maxWidth: {
                  '8xl': '90rem',
                },
                typography: theme => ({
                  DEFAULT: {
                    css: {
                      maxWidth: 'none',
                    },
                  },
                }),
              },
            },
            presets: [tailv],
            plugins: [typography()],
            blocklist: ['container'],
          }),
        ],
      },
    },
  },
  markdown: {
    // lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' },
    async shikiSetup(shiki) {
      await shiki.loadTheme('github-light', 'github-dark')
    },
    // async shikiSetup(shiki) {
    //   await shiki.loadTheme(...Object.keys(bundledThemes) as any)
    // },
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
