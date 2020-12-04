import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Layout.vue'

import Button from './__docs__/Button.zh-CN.md'
import Grid from './__docs__/Grid.zh-CN.md'
import Layout from './__docs__/Layout.zh-CN.md'
import Link from './__docs__/Link.zh-CN.md'
import Icon from './__docs__/Icon.zh-CN.md'
import Breadcrumb from './__docs__/Breadcrumb.zh-CN.md'
import Nav from './__docs__/Nav.zh-CN.md'
import Popper from './__docs__/Popper.zh-CN.md'
import Tooltip from './__docs__/Tooltip.zh-CN.md'
import Popover from './__docs__/Popover.zh-CN.md'
import Alert from './__docs__/Alert.zh-CN.md'

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Layout',
      component: Main,
      redirect: '/grid',
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
          path: '/layout',
          name: 'layout',
          component: Layout
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
          path: '/tooltip',
          name: 'tooltip',
          component: Tooltip
        },
        {
          path: '/popover',
          name: 'popover',
          component: Popover
        },
        {
          path: '/alert',
          name: 'alert',
          component: Alert
        }

        // {
        //   path: '/menu',
        //   name: 'menu',
        //   component: async () => import('/@docs/Menu/__docs__/Menu.md')
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
