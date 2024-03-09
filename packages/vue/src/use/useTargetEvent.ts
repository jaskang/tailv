import { useFocusWithin, useElementHover, useEventListener, type UseElementHoverOptions } from '@vueuse/core'
import { type Ref, watch, onMounted } from 'vue'

export function useFocusListener(el: Ref<HTMLElement | null | undefined>, callback: (val: boolean) => void) {
  onMounted(() => {
    const { focused } = useFocusWithin(el)
    watch(focused, val => callback(val))
  })
}
export function useHoverListener(
  el: Ref<EventTarget | null | undefined>,
  options: UseElementHoverOptions,
  callback: (val: boolean) => void
) {
  onMounted(() => {
    const isHovered = useElementHover(el, options)
    watch(isHovered, val => callback(val))
  })
}

export function useClickListener(el: Ref<EventTarget | null | undefined>, callback: (val: Event) => void) {
  onMounted(() => {
    useEventListener(el, 'click', e => {
      callback(e)
    })
  })
}
