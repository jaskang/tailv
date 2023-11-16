import { type IAnchorGroup } from '@zonda/vue'

export type Config = {
  nav: IAnchorGroup[]
  sidebar: IAnchorGroup[]
}

export default {
  nav: [],
  sidebar: [
    {
      title: '基础组件',
      items: [
        {
          key: '/docs/getting-started/installation',
          title: '按钮 Button',
        },
      ],
    },
    {
      title: 'Array',
      items: [
        {
          key: '/docs/array/alphabetical',
          title: 'alphabetical',
        },
        {
          key: '/docs/array/boil',
          title: 'boil',
        },
        {
          key: '/docs/array/cluster',
          title: 'cluster',
        },
        {
          key: '/docs/array/counting',
          title: 'counting',
        },
        {
          key: '/docs/array/diff',
          title: 'diff',
        },
      ],
    },
  ],
} as Config
