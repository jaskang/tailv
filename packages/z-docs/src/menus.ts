import { Component } from 'vue'
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
import Radio from './__docs__/Radio.zh-CN.md'
import Checkbox from './__docs__/Checkbox.zh-CN.md'
import Input from './__docs__/Input.zh-CN.md'
import Select from './__docs__/Select.zh-CN.md'

type MenuItemType = {
  name: string
  component: (() => Promise<Component>) | Component
}
type MenuType = {
  title: string
  items: MenuItemType[]
}

export default [
  {
    title: 'Basic',
    items: [
      { name: 'Grid', component: Grid },
      { name: 'Button', component: Button },
      { name: 'Layout', component: Layout },
      { name: 'Icon', component: Icon },
      { name: 'Link', component: Link },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Menu', component: Menu },
      { name: 'Breadcrumb', component: Breadcrumb },
    ],
  },
  {
    title: 'Form',
    items: [
      { name: 'Radio', component: Radio },
      { name: 'Checkbox', component: Checkbox },
      { name: 'Input', component: Input },
      { name: 'Select', component: Select },
    ],
  },
  {
    title: 'Data',
    items: [{ name: 'Pagination', component: Pagination }],
  },
  {
    title: 'Notice',
    items: [{ name: 'Alert', component: Alert }],
  },
  {
    title: 'Others',
    items: [
      { name: 'Tooltip', component: Tooltip },
      { name: 'Popover', component: Popover },
      { name: 'Popper', component: Popper },
    ],
  },
] as MenuType[]
