import type { Direction, Sizes } from './types'

function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value))
}

// https://github.com/tmcw-up-for-adoption/simple-linear-scale/blob/master/index.js
function linearScale(input: readonly [number, number], output: readonly [number, number]) {
  return (value: number) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0]
    const ratio = (output[1] - output[0]) / (input[1] - input[0])
    return output[0] + ratio * (value - input[0])
  }
}

export function getThumbSize(sizes: Sizes, direction: Direction) {
  const dir = direction === 'vertical' ? 'height' : 'width'
  const ratio = getThumbRatio(sizes.viewport[dir], sizes.content[dir])
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd
  const thumbSize = (sizes.scrollbar[dir] - scrollbarPadding) * ratio
  // minimum of 18 matches macOS minimum
  return Math.max(thumbSize, 18)
}

export function getThumbRatio(viewportSize: number, contentSize: number) {
  const ratio = viewportSize / contentSize
  return Number.isNaN(ratio) ? 0 : ratio
}

// Custom scroll handler to avoid scroll-linked effects
// https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
export function addUnlinkedScrollListener(node: HTMLElement, handler = () => {}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop }
  let rAF = 0
  ;(function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop }
    const isHorizontalScroll = prevPosition.left !== position.left
    const isVerticalScroll = prevPosition.top !== position.top
    if (isHorizontalScroll || isVerticalScroll) handler()
    prevPosition = position
    rAF = window.requestAnimationFrame(loop)
  })()
  return () => window.cancelAnimationFrame(rAF)
}

export function getThumbOffsetFromScroll(scrollPos: number, sizes: Sizes, direction: Direction) {
  const dir = direction === 'vertical' ? 'height' : 'width'
  const thumbSizePx = getThumbSize(sizes, direction)
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd
  const scrollbar = sizes.scrollbar[dir] - scrollbarPadding
  const maxScrollPos = sizes.content[dir] - sizes.viewport[dir]
  const maxThumbPos = scrollbar - thumbSizePx
  const scrollClampRange = [0, maxScrollPos]
  // const scrollClampRange = dir === 'ltr' ? [0, maxScrollPos] : [maxScrollPos * -1, 0]
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange as [number, number])
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos])
  return interpolate(scrollWithoutMomentum)
}

export function toInt(value?: string) {
  return value ? Number.parseInt(value, 10) : 0
}

export function getScrollPositionFromPointer(pointerPos: number, sizes: Sizes, direction: Direction) {
  const dir = direction === 'vertical' ? 'height' : 'width'
  const thumbSize = getThumbSize(sizes, direction)
  const minPointerPos = sizes.scrollbar.paddingStart
  const maxPointerPos = sizes.scrollbar[dir] - sizes.scrollbar.paddingEnd - thumbSize
  const maxScrollPos = sizes.content[dir] - sizes.viewport[dir]
  // const scrollRange = dir === 'ltr' ? [0, maxScrollPos] : [maxScrollPos * -1, 0]
  const interpolate = linearScale([minPointerPos, maxPointerPos], [0, maxScrollPos] as [number, number])
  return interpolate(pointerPos)
}

export function isScrollingWithinScrollbarBounds(scrollPos: number, maxScrollPos: number) {
  return scrollPos > 0 && scrollPos < maxScrollPos
}
