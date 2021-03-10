import { computed, CSSProperties, Ref, ref, watchEffect } from 'vue'

export type Point = {
  x: number
  y: number
}
export type Size = {
  width: number
  height: number
}
export type DraggableOptions = {
  viewport?: boolean
  direction?: 'x' | 'y'
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
    style: Ref<CSSProperties>
    limits: Ref<RectLimit | undefined>
  }
] {
  const targetRef = ref<HTMLElement>()
  const handleRef = ref<HTMLElement>()

  const dragging = ref(false)
  const prev = ref<Point>({ x: 0, y: 0 })
  const delta = ref<Point>({ x: 0, y: 0 })
  const limits = ref<RectLimit | undefined>()
  const handleSize = ref<Size>({ width: 0, height: 0 })

  const style = computed<CSSProperties>(() => {
    const direction = options.direction
    const x = direction !== 'y' ? delta.value.x - handleSize.value.width / 2 : 0
    const y = direction !== 'x' ? delta.value.y - handleSize.value.height / 2 : 0
    return {
      transform: `translate3D(${x}px,${y}px,0)`,
    }
  })

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
    if (targetRef.value && handleRef.value) {
      const { width, height } = targetRef.value.getBoundingClientRect()
      const { width: handleWidth, height: handleHeight } = handleRef.value.getBoundingClientRect()
      handleSize.value = {
        width: handleWidth,
        height: handleHeight,
      }
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
  return [targetRef, handleRef, { dragging, delta, style, limits }]
}
