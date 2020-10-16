import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/button',
          name: 'button',
          // component: async () => import('elenext/src/components/Button/__docs__/Button.zh-CN.md')
          component: async () => import('./__docs__/Button.zh-CN.md')
        },
        {
          path: '/grid',
          name: 'grid',
          component: async () => import('./__docs__/Grid.zh-CN.md')
        },
        {
          path: '/layout',
          name: 'layout',
          component: async () => import('./__docs__/Layout.zh-CN.md')
        },
        {
          path: '/link',
          name: 'link',
          component: async () => import('./__docs__/Link.zh-CN.md')
        },
        {
          path: '/icon',
          name: 'icon',
          component: async () => import('./__docs__/Icon.zh-CN.md')
        },
        {
          path: '/tile',
          name: 'tile',
          component: async () => import('./__docs__/Tile.zh-CN.md')
        }

        // {
        //   path: '/menu',
        //   name: 'menu',
        //   component: async () => import('/@docs/Menu/__docs__/Menu.md')
        // },
        // {
        //   path: '/alert',
        //   name: 'alert',
        //   component: async () => import('/@docs/Alert/__docs__/Alert.md')
        // },
        // {
        //   path: '/popover',
        //   name: 'popover',
        //   component: async () => import('/@docs/Popover/__docs__/Popover.md')
        // },
        // {
        //   path: '/test',
        //   name: 'test',
        //   component: async () => import('./components/Test.vue')
        // }
      ]
    }
  ]
})
