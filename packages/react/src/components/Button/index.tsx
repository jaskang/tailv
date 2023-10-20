import { useMemo, type HTMLAttributes } from 'react'
import type { JSX } from 'react'


import { LoadingIcon } from '../Icon/LoadingIcon'
import { style } from './style'
import type { Color } from '@/utils/colors'

 
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: Color
  variant?: 'default' | 'solid' | 'soft' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  pill?: boolean
  square?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean

  icon?: JSX.Element
}

export function Button(props: ButtonProps) {
  const {
    color = 'primary',
    variant = 'default',
    size = 'md',
    block = false,
    pill = false,
    square = false,
    circle = false,
    loading = false,
    disabled = false,

    icon,
    children,
  } = props
  const { css, vars } = useMemo(
    () => style({ variant, size, block, pill, square, circle, loading, disabled, color }),
    [variant, size, block, pill, square, circle, loading, disabled, color]
  )
  return ( 
    <button className={css} style={vars} type="button" disabled={disabled}>
      {(icon || loading) && (
        <i className="h-[1em] w-[1em] scale-125 [&_+_span]:ml-1.5 [&_svg]:h-full [&_svg]:w-full">
          {loading ? <LoadingIcon className="animate-spin" /> : icon}
        </i>
      )}
      {children && <span className="inline-flex items-center">{children}</span>}
    </button>
  )
}
