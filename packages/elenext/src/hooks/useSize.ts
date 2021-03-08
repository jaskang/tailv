import { ref, Ref } from 'vue'
import useEventListener from './useEventListener'

type Size = { width: Ref<number>; height: Ref<number> }

const useSize = (target: Ref<HTMLElement | Window | null>): Size => {
  const width = ref(0)
  const height = ref(0)

  useEventListener(
    target,
    'resize',
    () => {
      width.value = window.innerWidth
      height.value = window.innerHeight
    },
    { passive: true }
  )

  return { width, height }
}

export default useSize
