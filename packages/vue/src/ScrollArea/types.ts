export type Direction = 'vertical' | 'horizontal'

export interface Sizes {
  content: {
    width: number
    height: number
  }
  viewport: {
    width: number
    height: number
  }
  scrollbar: {
    width: number
    height: number
    paddingStart: number
    paddingEnd: number
  }
}

export type ScrollType = 'auto' | 'always' | 'scroll' | 'hover'
