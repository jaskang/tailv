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
          component: async () => import('./docs/Button.zh-CN.md')
          // component: async () => import('./../../packages/elenext/src/components/Button/__docs__/Button.zh-CN.md')
        }
        // {
        //   path: '/link',
        //   name: 'link',
        //   component: async () => import('/@docs/Link/__docs__/Link.md')
        // },
        // {
        //   path: '/grid',
        //   name: 'grid',
        //   component: async () => import('/@docs/Grid/__docs__/Grid.md')
        // },
        // {
        //   path: '/layout',
        //   name: 'layout',
        //   component: async () => import('/@docs/Layout/__docs__/Layout.md')
        // },
        // {
        //   path: '/tile',
        //   name: 'tile',
        //   component: async () => import('/@docs/Tile/__docs__/Tile.md')
        // },
        // {
        //   path: '/icon',
        //   name: 'icon',
        //   component: async () => import('/@docs/Icon/__docs__/Icon.md')
        // },
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
