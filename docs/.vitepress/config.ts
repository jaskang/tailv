import { fileURLToPath } from 'node:url'

import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { defineConfig } from 'vitepress'

export default defineConfig({
  description: 'Vite & Vue powered static site generator.',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2022-present jaskang',
      message: 'Released under the MIT License.',
    },
    nav: [
      {
        activeMatch: '/components/',
        link: '/components/button',
        text: '组件',
      },
    ],
    sidebar: [
      {
        items: [
          { link: '/components/button', text: 'Button 按钮' },
          { link: '/components/icon', text: 'Icon 图标' },
        ],
        text: '基础组件',
      },
      {
        items: [{ link: '/components/flex', text: 'flex' }],
        text: '布局',
      },
      {
        items: [
          { link: '/components/popper', text: 'Popper' },
          { link: '/components/tooltip', text: 'Tooltip' },
          { link: '/components/popover', text: 'Popover' },
        ],
        text: '反馈',
      },
      {
        items: [
          { link: '/components/switch', text: 'Switch 输入框' },
          { link: '/components/input', text: 'Input 输入框' },
          { link: '/components/checkbox', text: 'Checkbox 多选框' },
          { link: '/components/radio', text: 'Radio 单选框' },
          { link: '/components/select', text: 'Select 选择框' },
        ],
        text: '表单输入',
      },
    ],
  },
  title: 'Elenext',
  vite: {
    plugins: [Inspect(), vueJsx(), MarkdownPreview()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
    server: {
      port: 8000,
    },
    ssr: { noExternal: ['vite-plugin-markdown-preview'] },
  },
})
