import { type AnchorGroupProps } from '@zonda/react'

export type Config = {
  nav: AnchorGroupProps['items']
  sidebar: AnchorGroupProps['items']
}

export const config: Config = {
  nav: [],
  sidebar: [
    {
      title: '基础组件',
      children: [
        {
          key: '/docs/getting-started/installation',
          title: '按钮 Button',
        },
      ],
    },
    {
      title: 'Array',
      children: [
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
}
