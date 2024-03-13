import type { MaybeRef } from "vue"

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
      size
    }
  }
  return {
    ratio: 0,
    size: 0
  }
}

export function useAreaSize(el:MaybeRef<HTMLElement|undefined>){

const size = computed(() => {
  const thumbX= getThumbInfo(domSize.value.content.width, domSize.value.viewport.width)
  const thumbY= getThumbInfo(domSize.value.content.height, domSize.value.viewport.height)

  console.log('thumbX',thumbX)
  console.log('thumbY',thumbY)
  const offset = {
    x: scrollX.value * thumbX.ratio,
    y: scrollY.value * thumbY.ratio,
  }
  return {
    ratio:{
      x:thumbX.ratio,
      y:thumbY.ratio
    },
    thumb:{
      x:thumbX.thumb,
      y:thumbY.thumb
    },
    offset,
  }
})

  useResizeObserver(viewportEl, entries => {
    const entry = entries[0]
    const { width, height } = entry.contentRect
    const { scrollWidth,scrollHeight} = entry.target
    domSize.value.content = { width:scrollWidth, height:scrollHeight }
    domSize.value.viewport = { width, height }
    console.log('domSize', domSize.value)
  })
}