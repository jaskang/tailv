import type { CSSProperties, ReactNode } from 'react'

export type DomProps<T> = T & {
  children?: ReactNode
  style?: CSSProperties
  className?: string
}
