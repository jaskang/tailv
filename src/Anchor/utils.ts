import type { IListItem } from '@/Base'
import type { IAnchorItem } from './types'

export function toListItem(items: IAnchorItem[]): IListItem[] {
  return items.map(({ id, title, link, children, ...others }) => ({
    key: id,
    label: title,
    link: link || `#${id}`,
    children: children ? toListItem(children) : undefined,
    ...others,
  }))
}

export function findAnchorItem(items: IAnchorItem[], id: string): IAnchorItem | undefined {
  for (const item of items) {
    if (item.id === id) return item
    if (item.children) {
      const result = findAnchorItem(item.children, id)
      if (result) return result
    }
  }
  return undefined
}

function flattenItems(items: IAnchorItem[]) {
  let flatList: IAnchorItem[] = []
  function traverse(items: IAnchorItem[]) {
    for (const item of items) {
      // 创建一个不包含 children 的对象副本
      flatList.push(item)
      // 如果存在子项，递归遍历子项
      if (item.children && item.children.length > 0) {
        traverse(item.children)
      }
    }
  }
  traverse(items)
  return flatList
}

// 找到 current 在 items 中的位置，每个 item 占 1rem ，有 children 需要递归展开
export const getItemOffset = (items: IAnchorItem[], id: string = '') => {
  if (!id) {
    return -1
  }
  const fullItems = flattenItems(items)
  console.log(fullItems)
  return fullItems.findIndex(item => item.id === id)
}
