import { isIOS, noop } from '@vueuse/core'
import { isBrowser } from 'kotl'
import { onMounted, onUnmounted, type Ref, toValue } from 'vue'

type MouseHandler = (e: MouseEvent) => void
type ElementRef = Ref<HTMLElement | undefined>

const handlers: Array<{
  handler: MouseHandler
  ignores: ElementRef[]
}> = []

let listened = false
let _iOSWorkaround = false

const useClickOutsideEvent = () => {
  if (!isBrowser()) return

  // Fixes: https://github.com/vueuse/vueuse/issues/1520
  // How it works: https://stackoverflow.com/a/39712411
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true
    Array.from(window.document.body.children).forEach(el => el.addEventListener('click', noop))
  }

  const listener = (event: MouseEvent) => {
    handlers.forEach(({ ignores, handler }) => {
      const inside = ignores.some(item => {
        const el = toValue(item)
        const ret = el && (event.target === el || el.contains(event.target as Node))
        return !!ret
      })
      if (!inside) {
        try {
          handler(event)
        } catch (error) {
          console.error(error)
        }
      }
    })
  }

  onMounted(() => {
    if (!listened) {
      window.addEventListener('click', listener, { passive: true, capture: true })
      listened = true
    }
  })
  onUnmounted(() => {
    if (listened && handlers.length > 0) {
      window.removeEventListener('click', listener, { capture: true })
      listened = false
    }
  })
}

export function useClickOutside(ignores: Array<ElementRef>, handler: MouseHandler) {
  if (!isBrowser) return

  useClickOutsideEvent()

  onMounted(() => {
    handlers.unshift({ handler, ignores })
  })
  onUnmounted(() => {
    handlers.splice(
      handlers.findIndex(item => item.handler === handler),
      1
    )
  })
}
