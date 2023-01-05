import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Elenext',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  markdown: {
    config(md) {},
  },
  vite: {
    plugins: [],
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
