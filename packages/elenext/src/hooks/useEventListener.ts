import { watchEffect, Ref, onBeforeUnmount } from 'vue'

function useEventListener(
  target: Ref<HTMLElement | Window | null>,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): () => void {
  let prevEle: HTMLElement | Window | null = null
  const destroyWatcher = watchEffect(
    () => {
      target.value?.addEventListener(type, listener, options)
      if (prevEle) {
        prevEle.removeEventListener(type, listener)
      }
      prevEle = target?.value
    },
    { flush: 'post' }
  )
  const removeListener = (isDestroyWatcher = true) => {
    target.value?.removeEventListener(type, listener)
    if (isDestroyWatcher) {
      destroyWatcher()
    }
  }
  onBeforeUnmount(() => {
    removeListener(true)
  })
  return removeListener
}
export default useEventListener
