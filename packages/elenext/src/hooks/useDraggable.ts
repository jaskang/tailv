import { Ref, ref, watchEffect } from 'vue'

export type Point = {
  x: number
  y: number
}

export type DraggableOptions = {
  viewport?: boolean
  onInit?: (limit: { width: number; height: number }) => Point | null
}

export type RectLimit = {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

function calcDelta({ x, y, limits }) {
  if (!limits) {
    return { x, y }
  }

  const { minX, maxX, minY, maxY } = limits

  return {
    x: Math.min(Math.max(x, minX), maxX),
    y: Math.min(Math.max(y, minY), maxY),
  }
}

export default function useDraggable(
  options: DraggableOptions
): [
  Ref<HTMLElement | undefined>,
  Ref<HTMLElement | undefined>,
  {
    dragging: Ref<boolean>
    delta: Ref<{ x: number; y: number }>
    limits: Ref<RectLimit | undefined>
  }
] {
  const targetRef = ref<HTMLElement>()
  const handleRef = ref<HTMLElement>()

  const dragging = ref(false)
  const prev = ref<Point>({ x: 0, y: 0 })
  const delta = ref<Point>({ x: 0, y: 0 })
  const limits: Ref<RectLimit | undefined> = ref()

  const startDragging = (event: TouchEvent) => {
    event.preventDefault()
    dragging.value = true
    if (options.viewport) {
      const { width, height } = targetRef.value!.getBoundingClientRect()
      limits.value = {
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
      }
    }
  }
  const reposition = (event: TouchEvent) => {
    if (dragging.value) {
      const source = (event.changedTouches && event.changedTouches[0]) || (event.touches && event.touches[0]) || event
      const { left, top } = targetRef.value!.getBoundingClientRect()

      const { clientX, clientY } = source
      const x = clientX - left
      const y = clientY - top

      const newDelta = calcDelta({
        x,
        y,
        limits: limits.value,
      })
      delta.value = newDelta

      return newDelta
    }
    return prev.value
  }

  const stopDragging = (event: TouchEvent) => {
    event.preventDefault()
    dragging.value = false
    const newDelta = reposition(event)
    prev.value = newDelta
  }
  watchEffect(() => {
    if (targetRef.value) {
      const { width, height } = targetRef.value.getBoundingClientRect()
      limits.value = {
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
      }
      const initPoint = options.onInit?.({ width, height })
      if (initPoint) {
        delta.value = initPoint
      }
    }
  })
  watchEffect(() => {
    if (handleRef.value) {
      const handle = handleRef.value
      handle.addEventListener('mousedown', startDragging)
      handle.addEventListener('touchstart', startDragging)
      return () => {
        handle.removeEventListener('mousedown', startDragging)
        handle.removeEventListener('touchstart', startDragging)
      }
    }
  })
  watchEffect(() => {
    if (targetRef.value) {
      document.addEventListener('mousemove', reposition, { passive: true })
      document.addEventListener('touchmove', reposition, { passive: true })
      document.addEventListener('mouseup', stopDragging)
      document.addEventListener('touchend', stopDragging)
      return () => {
        document.removeEventListener('mousemove', reposition)
        document.removeEventListener('touchmove', reposition)
        document.removeEventListener('mouseup', stopDragging)
        document.removeEventListener('touchend', stopDragging)
      }
    }
  })
  return [targetRef, handleRef, { dragging, delta, limits }]
}
