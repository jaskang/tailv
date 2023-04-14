import { defineConfig } from 'vitepress'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import Inspect from 'vite-plugin-inspect'
import { fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Elenext',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  vite: {
    server: {
      port: 8080,
    },
    plugins: [Inspect(), vueJsx(), MarkdownPreview(), UnoCSS()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
    ssr: { noExternal: ['vite-plugin-markdown-preview'] },
  },
  themeConfig: {
    nav: [
      {
        text: '组件',
        link: '/components/button',
        activeMatch: '/components/',
      },
    ],
    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Icon 图标', link: '/components/icon' },
        ],
      },
      {
        text: '表单输入',
        items: [
          { text: 'Switch 输入框', link: '/components/switch' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Checkbox 多选框', link: '/components/checkbox' },
          { text: 'Radio 单选框', link: '/components/radio' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present jaskang',
    },
  },
})
