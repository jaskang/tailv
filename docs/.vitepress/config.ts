import { defineConfig } from 'vitepress'
import Inspect from 'vite-plugin-inspect'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { MditVuePreview } from './md/plugin'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Elenext',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    // theme: 'github-light',
  },
  vite: {
    plugins: [MditVuePreview(), vueJsx(), Inspect()],
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
        text: '组件',
        items: [
          { text: 'button', link: '/components/button' },
          { text: 'checkbox', link: '/components/checkbox' },
          { text: 'radio', link: '/components/radio' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present jaskang',
    },
  },
})
