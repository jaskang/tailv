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
      children: [
        {
          key: '/docs/getting-started/installation',
          title: '按钮 Button',
        },
      ],
    },
    {
      key: 'Array',
      children: [
        {
          key: '/docs/array/alphabetical',
          title: 'alphabetical',
        },
        {
          key: '/docs/array/boil',
          title: 'boil',
          children: [{ key: 'asdfasdf' }, { key: 'asdfasd23f' }, { key: 'asd2323fasd23f' }],
        },
        {
          key: '/docs/array/cluster',
          title: 'cluster',
        },
        {
          key: '/docs/array/counting',
          title: 'counting',
          children: [{ key: 'asd12fasdf' }, { key: 'as233dfasd23f' }, { key: 'asd232323fasd23f' }],
        },
        {
          key: '/docs/array/diff',
          title: 'diff',
        },
      ],
    },
  ],
} as Config
