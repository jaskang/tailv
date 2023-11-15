import type { AnchorOption } from './type'

// 查找当前 key 在 items 中的位置
export function findKeyOffset(items: AnchorOption[], key: string): number | null {
  let index = 0
  let group = 0
  function find(arr: AnchorOption[]) {
    for (let i = 0; i < arr.length; i++) {
      const { key: childKey, children } = arr[i]
      if (childKey === key) {
        return true
      }
      index++
      if (children && children.length > 0) {
        if (find(children)) {
          return true
        }
        group++
      }
    }
    return false
  }
  if (find(items)) {
    return index * 2 + group * 0.25
    // return index * 2
  }
  return null
}
