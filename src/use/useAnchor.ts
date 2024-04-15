import type { IAnchorItem } from '@/Anchor'
import { useMutationObserver, useScroll, isClient } from '@vueuse/core'
import { computed, onMounted, ref, toValue, watchEffect, type Ref } from 'vue'

function getAbsoluteTop(element: HTMLElement): number {
  let offsetTop = 0
  while (element !== document.body) {
    if (element === null) {
      // child element is:
      // - not attached to the DOM (display: none)
      // - set to fixed position (not scrollable)
      // - body or html element (null offsetParent)
      return NaN
    }
    offsetTop += element.offsetTop
    element = element.offsetParent as HTMLElement
  }
  return offsetTop
}

export function useAnchor(
  headers: Ref<IAnchorItem[]>,
  options: { offset?: number; defaultValue?: string; container?: Ref<HTMLElement | undefined> } = {}
) {
  const { offset = 0, defaultValue = '' } = options
  const container = computed(() => toValue(options.container) || window)
  const current: Ref<IAnchorItem | null> = ref(null)

  function setActiveLink() {
    const scrollY = container.value.scrollY
    const innerHeight = window.innerHeight
    const offsetHeight = document.body.offsetHeight
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1

    if (!headers.value.length) {
      // no headers available for active link
      current.value = null
    } else if (scrollY < 1) {
      // page top
      current.value = null
    } else if (isBottom) {
      // page bottom - highlight last link
      current.value = headers.value[headers.value.length - 1]
    } else {
      // find the last header above the top of viewport
      let activeHeader = null
      for (const header of headers.value) {
        const el = document.querySelector<HTMLElement>(header.id)
        if (el) {
          const top = getAbsoluteTop(el)
          if (top > scrollY + offset) {
            activeHeader = header
            break
          }
        }
      }
      current.value = activeHeader
    }
  }
  onMounted(() => {
    setActiveLink()
    current.value = headers.value.find(h => h.link === window.location.hash) || null
  })
  if (isClient) {
    useScroll(window, {
      onScroll: setActiveLink,
    })
  }
  return { current, headers }
}
