import { useScroll } from '@vueuse/core'
import { onMounted, onUnmounted, onUpdated, ref, watchEffect, type Ref, type InjectionKey } from 'vue'

export const ANCHOR_INJECT_KEY = Symbol('ANCHOR_INJECT_KEY') as InjectionKey<{
  id: Ref<string>
}>

interface Header {
  level: number
  title: string
  /**
   * The slug of the header
   * Typically the `id` attr of the header anchor
   */
  slug: string
  /**
   * Link of the header
   * Typically using `#${slug}` as the anchor hash
   */
  link: string
  /**
   * The children of the header
   */
  children?: Header[]
}

type MenuItem = Omit<Header, 'slug' | 'children'> & {
  element: HTMLHeadElement
  children?: MenuItem[]
}

type Range = number | [number, number]
// cached list of anchor elements from resolveHeaders
const resolvedHeaders: { element: HTMLHeadElement; link: string }[] = []

function serializeHeader(h: Element): string {
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

function getHeaders(container: Element | undefined, range: Range) {
  if (!container) {
    return []
  }
  const headers = [...container.querySelectorAll(':where(h1,h2,h3,h4,h5,h6)')]
    .filter(el => el.id && el.hasChildNodes())
    .map(el => {
      const level = Number(el.tagName[1])
      return {
        element: el as HTMLHeadElement,
        title: serializeHeader(el),
        link: '#' + el.id,
        level,
      }
    })

  return resolveHeaders(headers, range)
}

export function useActiveAnchor(container: Ref<Element | undefined>, options: { range?: Range; offset?: number } = {}) {
  const { range = [2, 3], offset = 0 } = options
  const id = ref('')
  const headers = ref<MenuItem[]>([])

  function setActiveLink() {
    const scrollY = window.scrollY
    const innerHeight = window.innerHeight
    const offsetHeight = document.body.offsetHeight
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1

    // resolvedHeaders may be repositioned, hidden or fix positioned
    const items = getHeaders(container.value, range)
      .map(({ element, link }) => ({
        link,
        top: getAbsoluteTop(element),
      }))
      .filter(({ top }) => !Number.isNaN(top))
      .sort((a, b) => a.top - b.top)

    // no headers available for active link
    if (!items.length) {
      id.value = ''
      return
    }

    // page top
    if (scrollY < 1) {
      id.value = ''
      return
    }

    // page bottom - highlight last link
    if (isBottom) {
      id.value = items[items.length - 1].link
      return
    }

    // find the last header above the top of viewport
    let activeLink = ''
    for (const { link, top } of items) {
      if (top > scrollY + offset + 4) {
        break
      }
      activeLink = link
    }
    id.value = activeLink
  }
  onMounted(() => {
    id.value = location.hash
  })
  watchEffect(() => {
    console.log('headers', headers.value)
    console.log('id', id.value)
  })
  useScroll(window, {
    onScroll: setActiveLink,
  })
  return { id }
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
