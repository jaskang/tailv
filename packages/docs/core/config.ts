import { type IAnchorItem } from 'tailv'

export type Config = {
  nav: IAnchorItem[]
  sidebar: IAnchorItem[]
}

export default {
  nav: [],
  sidebar: [
    {
      key: '基础组件',
      children: [{ key: '/components/button', title: '按钮 Button' }],
    },
    {
      key: 'Form',
      children: [
        { key: '/components/checkbox', title: 'Checkbox' },
        { key: '/components/input', title: 'Input' },
        { key: '/components/anchor', title: 'Anchor' },
      ],
    },
  ],
} as Config
