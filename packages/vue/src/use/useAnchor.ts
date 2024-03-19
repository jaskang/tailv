import { useMutationObserver, useScroll } from '@vueuse/core'
import { onMounted, onUnmounted, onUpdated, ref, watchEffect, type Ref, type InjectionKey } from 'vue'

type AnchorHeader = {
  id: string
  level: number
  title: string
  link: string
  element: HTMLElement
  top: number
  children?: AnchorHeader[]
}

type AnchorRange = number | [number, number]

function getHeaderText(h: Element): string {
  let ret = ''
  for (const node of h.childNodes) {
    if (node.nodeType === 3) {
      ret += node.textContent
    }
    // if (node.nodeType === 1) {
    //   if (
    //     (node as Element).classList.contains('VPBadge') ||
    //     (node as Element).classList.contains('header-anchor') ||
    //     (node as Element).classList.contains('ignore-header')
    //   ) {
    //     continue
    //   }
    //   ret += node.textContent
    // } else if (node.nodeType === 3) {
    //   ret += node.textContent
    // }
  }
  return ret.trim()
}

function resolveHeaders(headers: MenuItem[], range: Range): MenuItem[] {
  const [high, low]: [number, number] = typeof range === 'number' ? [range, range] : range

  headers = headers.filter(h => h.level >= high && h.level <= low)
  // clear previous caches
  resolvedHeaders.length = 0
  // update global header list for active link rendering
  for (const { element, link } of headers) {
    resolvedHeaders.push({ element, link })
  }

  const ret: MenuItem[] = []
  outer: for (let i = 0; i < headers.length; i++) {
    const cur = headers[i]
    if (i === 0) {
      ret.push(cur)
    } else {
      for (let j = i - 1; j >= 0; j--) {
        const prev = headers[j]
        if (prev.level < cur.level) {
          ;(prev.children || (prev.children = [])).push(cur)
          continue outer
        }
      }
      ret.push(cur)
    }
  }

  return ret
}

function getHeaders(range: AnchorRange, container?: Element): AnchorHeader[] {
  if (!container) {
    return []
  }
  const [high, low]: [number, number] = typeof range === 'number' ? [range, range] : range

  const headers = [...container.querySelectorAll(':where(h1,h2,h3,h4,h5,h6)')]
    .filter(el => {
      const level = Number(el.tagName[1])
      return el.id && el.hasChildNodes() && level >= high && level <= low
    })
    .map(el => {
      const element = el as HTMLElement
      const level = Number(el.tagName[1])
      return {
        level,
        id: el.id,
        link: '#' + el.id,
        title: getHeaderText(el),
        top: getAbsoluteTop(element),
        element,
      }
    })
    .sort((a, b) => a.top - b.top)

  return headers
}

export function useActiveAnchor(
  container: Ref<HTMLElement | undefined>,
  options: { range?: AnchorRange; offset?: number } = {}
) {
  const { range = [2, 3], offset = 0 } = options
  const current = ref<AnchorHeader | null>(null)
  const headers = ref<AnchorHeader[]>([])

  useMutationObserver(container, () => (headers.value = getHeaders(range, container.value)), { childList: true })

  function setActiveLink() {
    const scrollY = window.scrollY
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
        if (header.top > scrollY + offset + 4) {
          break
        }
        activeHeader = header
      }
      current.value = activeHeader
    }
  }
  onMounted(() => {
    headers.value = getHeaders(range, container.value)
    current.value = location.hash
  })
  watchEffect(() => {
    console.log('headers', headers.value)
    console.log('id', id.value)
  })
  useScroll(window, {
    onScroll: setActiveLink,
  })
  return { current, headers }
}

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
