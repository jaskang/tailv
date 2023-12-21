import { type IAnchorItem } from '@zonda/vue'

export type Config = {
  nav: IAnchorItem[]
  sidebar: IAnchorItem[]
}

export default {
  nav: [],
  sidebar: [
    {
      key: '基础组件',
      children: [{ key: '/components/Button', title: '按钮 Button' }],
    },
    {
      key: 'Form',
      children: [
        { key: '/components/Input', title: 'Input' },
        { key: '/components/Anchor', title: 'Anchor' },
      ],
    },
  ],
} as Config
