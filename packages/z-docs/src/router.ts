import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from './components/AppLayout.vue'

import Button from './__docs__/Button.zh-CN.md'
import Grid from './__docs__/Grid.zh-CN.md'
import Layout from './__docs__/Layout.zh-CN.md'
import Link from './__docs__/Link.zh-CN.md'
import Breadcrumb from './__docs__/Breadcrumb.zh-CN.md'
import Menu from './__docs__/Menu.zh-CN.md'
import Popper from './__docs__/Popper.zh-CN.md'
import Tooltip from './__docs__/Tooltip.zh-CN.md'
import Popover from './__docs__/Popover.zh-CN.md'
import Alert from './__docs__/Alert.zh-CN.md'
import Pagination from './__docs__/Pagination.zh-CN.md'
import Icon from './__docs__/Icon.zh-CN.md'
import Input from './__docs__/Input.zh-CN.md'
import Select from './__docs__/Select.zh-CN.md'

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Layout',
      component: AppLayout,
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
          path: '/menu',
          name: 'menu',
          component: Menu
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
        },
        {
          path: '/pagination',
          name: 'pagination',
          component: Pagination
        },
        {
          path: '/input',
          name: 'input',
          component: Input
        },
        {
          path: '/select',
          name: 'select',
          component: Select
        },
        {
          path: '/test',
          name: 'test',
          component: async () => import('./components/Test.vue')
        }
        // {
        //   path: '/menu',
        //   name: 'menu',
        //   component: async () => import('/@docs/Menu/__docs__/Menu.md')
        // },
      ]
    }
  ]
})
