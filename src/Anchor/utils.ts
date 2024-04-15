import { computed, onMounted, ref, type Ref } from 'vue'
import type { IAnchorItem } from './types'
import { isClient, useScroll } from '@vueuse/core'

export function flattenItems(items: IAnchorItem[]) {
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
export const getAnchorOffset = (items: IAnchorItem[], id: string = '') => {
  if (!id) return -1
  const fullItems = flattenItems(items)
  return fullItems.findIndex(item => item.id === id)
}

export function useAnchor(
  headers: Ref<IAnchorItem[]>,
  options: { offset?: number; defaultValue?: string; container?: Ref<HTMLElement | undefined> } = {}
) {
  const { offset = 135, defaultValue = '' } = options
  const headerNodes = computed(() => {
    const items = flattenItems(headers.value)
    return items
      .map(item => {
        const el = document.getElementById(item.id)
        return {
          el,
          item,
        }
      })
      .filter(Boolean)
  })
  // const container = computed(() => toValue(options.container) || window)
  const current: Ref = ref('')

  function setActiveLink() {
    const activeIndex = headerNodes.value.findIndex(header => {
      return header.el ? header.el.getBoundingClientRect().top > offset : false
    })
    if (activeIndex == -1) {
      current.value = defaultValue || ''
    } else if (activeIndex == 0) {
      current.value = headerNodes.value[activeIndex].item.id
    } else {
      current.value = headerNodes.value[activeIndex - 1].item.id
    }
  }
  onMounted(() => {
    setActiveLink()
  })
  if (isClient) {
    useScroll(window, {
      onScroll: setActiveLink,
      throttle: 300,
    })
  }
  return { current, headers }
}
