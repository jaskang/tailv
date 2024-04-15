import type { IListItem } from '@/Base'

export type IAnchorItem = {
  /**
   * 链接标题
   */
  title: string
  /**
   * 链接对应的 id
   */
  id: string
  /**
   * 锚点链接
   * 通常使用 `#${id}` 作为锚点
   */
  link: string
  /**
   * 该属性指定在何处显示链接的资源
   */
  target?: string
  /**
   * 子级
   */
  children?: IAnchorItem[]
}
