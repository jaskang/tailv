import type { MaybeRef } from 'vue'

export function getThumbInfo(contentSize: number, viewportSize: number, thumbMinSize = 18) {
  if (contentSize && viewportSize && contentSize > viewportSize) {
    let ratio = viewportSize / contentSize
    let size = ratio * viewportSize
    if (size < thumbMinSize) {
      size = thumbMinSize
      ratio = (viewportSize - thumbMinSize) / (contentSize - viewportSize)
    }
    return {
      ratio,
      size,
    }
  }
  return {
    ratio: 0,
    size: 0,
  }
}
