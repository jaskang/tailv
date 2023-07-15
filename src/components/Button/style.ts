import { tv } from 'tailwind-variants'
import { computed, type MaybeRefOrGetter, type Ref, toValue } from 'vue'

import { type ColorKey } from '@/theme'
import type { Color } from '@/theme/colors'
import { createCssVar, type CssVars, cvar } from '@/utils/style'

import type { ButtonProps } from '.'

type CssKey = 'text' | 'bg' | 'border' | 'textHover' | 'bgHover' | 'borderHover' | 'ring'

type ButtonCssVars = CssVars<'t-button', CssKey>

const createClass = tv({
  base: `t-button inline-flex border-2 rounded-md text-center justify-center items-center font-medium transition-all 
  focus:outline-none h-[--t-button-h]
  text-[--t-button-text] bg-[--t-button-bg] border-[--t-button-border]
  hover:text-[--t-button-textHover] hover:bg-[--t-button-bgHover] hover:border-[--t-button-borderHover]
  `,
  variants: {
    variant: {
      default: 'shadow-sm border',
      outline: 'shadow-sm',
      solid: 'shadow-sm',
      soft: 'shadow-sm',
      plain: '',
      link: 'hover:underline hover:decoration-2 hover:underline-offset-2',
    },
    color: {
      default: '',
      primary: '',
      success: '',
      warning: '',
      error: '',
    },
    size: {
      xs: '[--t-button-h:calc(1.75rem+2px)] text-xs/3 px-2',
      sm: '[--t-button-h:calc(2rem+2px)] text-xs/4 px-3',
      md: '[--t-button-h:calc(2.25rem+2px)] text-sm/5 px-4',
      lg: '[--t-button-h:calc(2.5rem+2px)] text-base/6 px-5',
      xl: '[--t-button-h:calc(2.75rem+2px)] text-base/7 px-6',
    },
    block: {
      true: 'w-full',
    },
    pill: {
      true: 'rounded-full',
    },
    square: {
      true: 'px-0 w-[--t-button-h]',
    },
    circle: {
      true: 'rounded-full px-0 w-[--t-button-h]',
    },
    disabled: {
      false:
        'cursor-pointer focus:ring-2 focus:ring-[--t-button-ring] focus:ring-offset-2 dark:focus:ring-offset-gray-900',
      true: 'cursor-not-allowed opacity-50 hover:-underline hover:text-[--t-button-text] hover:bg-[--t-button-bg] hover:border-[--t-button-border]',
    },
  },
  compoundVariants: [],
})

function cssVars(vars: Record<CssKey, Color>) {
  return createCssVar<'t-button', CssKey>(
    't-button',
    (Object.keys(vars) as CssKey[]).reduce((acc, key) => {
      acc[key] = cvar(vars[key])
      return acc
    }, {} as Record<CssKey, string>)
  )
}

function createStyle(variant: ButtonProps['variant'], colorKey: ColorKey) {
  switch (variant) {
    case 'solid':
      return cssVars({
        text: `white`,
        bg: `${colorKey}.500`,
        border: `transparent`,
        textHover: `white`,
        bgHover: `${colorKey}.600`,
        borderHover: `transparent`,
        ring: `${colorKey}.500`,
      })
    case 'soft':
      return cssVars({
        text: `${colorKey}.500`,
        bg: `${colorKey}.100`,
        border: `transparent`,
        textHover: `${colorKey}.500`,
        bgHover: `${colorKey}.200`,
        borderHover: `transparent`,
        ring: `${colorKey}.500`,
      })
    case 'plain':
      return cssVars({
        text: `${colorKey}.500`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${colorKey}.500`,
        bgHover: `${colorKey}.100`,
        borderHover: `transparent`,
        ring: `${colorKey}.500`,
      })
    case 'link':
      return cssVars({
        text: `${colorKey}.500`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${colorKey}.500`,
        bgHover: `transparent`,
        borderHover: `transparent`,
        ring: `${colorKey}.500`,
      })
    case 'outline':
      return cssVars({
        text: `${colorKey}.500`,
        bg: 'white',
        border: `${colorKey}.500`,
        textHover: 'white',
        bgHover: `${colorKey}.500`,
        borderHover: `${colorKey}.500`,
        ring: `${colorKey}.300`,
      })
    default:
      return cssVars({
        text: `gray.700`,
        bg: 'white',
        border: `gray.300`,
        textHover: `gray.900`,
        bgHover: `gray.50`,
        borderHover: `gray.300`,
        ring: `gray.500`,
      })
  }
}

export const useButtonStyle = (getter: MaybeRefOrGetter<ButtonProps>) => {
  const style = computed(() => {
    const props = toValue(getter)
    return createStyle(props.variant, props.color)
  })
  const cls = computed(() => {
    const props = toValue(getter)
    return createClass(props)
  })
  return [style, cls] as [Ref<ButtonCssVars>, Ref<string>]
}
