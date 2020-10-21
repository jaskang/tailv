import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'

import Button from './__docs__/Button.zh-CN.md'
import Grid from './__docs__/Grid.zh-CN.md'
import Container from './__docs__/Container.zh-CN.md'
import Link from './__docs__/Link.zh-CN.md'
import Icon from './__docs__/Icon.zh-CN.md'
import Tile from './__docs__/Tile.zh-CN.md'
import Breadcrumb from './__docs__/Breadcrumb.zh-CN.md'
import Nav from './__docs__/Nav.zh-CN.md'
import Popper from './__docs__/Popper.zh-CN.md'
import Popover from './__docs__/Popover.zh-CN.md'

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
          component: Button
        },
        {
          path: '/grid',
          name: 'grid',
          component: Grid
        },
        {
          path: '/container',
          name: 'container',
          component: Container
        },
        {
          path: '/link',
          name: 'link',
          component: Link
        },
        {
          path: '/icon',
          name: 'icon',
          component: Icon
        },
        {
          path: '/tile',
          name: 'tile',
          component: Tile
        },
        {
          path: '/breadcrumb',
          name: 'breadcrumb',
          component: Breadcrumb
        },
        {
          path: '/nav',
          name: 'nav',
          component: Nav
        },
        {
          path: '/popper',
          name: 'popper',
          component: Popper
        },
        {
          path: '/popover',
          name: 'popover',
          component: Popover
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
        //   path: '/test',
        //   name: 'test',
        //   component: async () => import('./components/Test.vue')
        // }
      ]
    }
  ]
})
