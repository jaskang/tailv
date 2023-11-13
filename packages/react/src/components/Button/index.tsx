import type { DomProps } from '@/utils'
import type { Color } from '@/utils/colors'

import { type ComponentProps, type ReactNode, useMemo } from 'react'

import { LoadingIcon } from '../Icon/LoadingIcon'
import { createBtnStyle } from './style'

export type ButtonProps = DomProps<{
  variant?: 'default' | 'ghost' | 'link' | 'outline' | 'soft' | 'solid'
  size?: 'lg' | 'md' | 'sm'
  color?: Color
  icon?: ReactNode
  block?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  pill?: boolean
  square?: boolean
}>

export function Button(props: ButtonProps) {
  const {
    block = false,
    circle = false,
    color = 'primary',
    disabled = false,
    icon,
    loading = false,
    pill = false,
    size = 'md',
    square = false,
    variant = 'default',

    children,
    className,
    style,
  } = props
  const { css, vars } = useMemo(
    () => createBtnStyle({ block, circle, color, disabled, loading, pill, size, square, variant }),
    [variant, size, block, pill, square, circle, loading, disabled, color]
  )
  return (
    <button className={`${css} ${className}`} disabled={disabled} style={vars} type="button">
      {(icon || loading) && (
        <i className="h-[1em] w-[1em] scale-125 [&_+_span]:ml-1.5 [&_svg]:h-full [&_svg]:w-full">
          {loading ? <LoadingIcon className="animate-spin" /> : icon}
        </i>
      )}
      {children && <span className="inline-flex items-center">{children}</span>}
    </button>
  )
}
