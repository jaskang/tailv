import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import jsx from '@vitejs/plugin-vue-jsx'
const __dirname = dirname(fileURLToPath(import.meta.url))

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
          replacement: resolve(__dirname, '../../packages/vue/src'),
        },
        {
          find: /^.\/styles\/base\.css$/,
          // replacement: fileURLToPath(new URL('./theme/base.css', import.meta.url)),
          replacement: 'virtual:base.css',
        },
      ],
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
          { text: 'Checkbox', link: '/components/checkbox' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
