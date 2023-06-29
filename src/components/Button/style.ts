import { classed } from '@tw-classed/core'
import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import { COLORS } from '@/theme'
import { type ColorKey, useTheme } from '@/theme'

import type { ButtonCssVars, ButtonProps } from '.'

type ButtonVariants = Omit<ButtonProps, 'variant'> & {
  variant: 'default' | 'filled' | 'light' | 'link' | 'outline'
}

const createBtnCls = classed('t-button', {
  base: `inline-flex text-center justify-center items-center  font-medium
  h-[--t-btn-h]
  bg-[--t-btn-bg] text-[--t-btn-text-color] border-[--t-btn-border-color] 
  focus:outline-none
  `.replace(/\s+/g, ' '),
  compoundVariants: [
    {
      class: 'hover:underline',
      disabled: false,
      variant: 'link',
    },
  ],
  variants: {
    block: {
      true: 'w-full',
    },
    disabled: {
      false: `cursor-pointer hover:bg-[--t-btn-bg-hover] hover:text-[--t-btn-text-color-hover] hover:border-[--t-btn-border-color-hover]`,
      true: 'cursor-not-allowed opacity-50',
    },
    ring: {
      false:
        'focus-visible:ring-[--t-btn-ring-color] focus-visible:ring-2 focus-visible:ring-offset-2 dark:ring-offset-slate-900',
      true: 'focus:ring-[--t-btn-ring-color] focus:ring-2 focus:ring-offset-2 dark:ring-offset-slate-900',
    },
    rounded: {
      false: 'rounded-md',
      true: 'rounded-full',
    },
    size: {
      xs: '[--t-btn-h:calc(1.75rem+2px)] h-[--t-btn-h] text-xs/3 px-2',
      sm: '[--t-btn-h:calc(2rem+2px)] h-[--t-btn-h] text-xs/4 px-3',
      md: '[--t-btn-h:calc(2.25rem+2px)] h-[--t-btn-h] text-sm/5 px-4',
      lg: '[--t-btn-h:calc(2.5rem+2px)] h-[--t-btn-h] text-base/6 px-5',
      xl: '[--t-btn-h:calc(2.75rem+2px)] h-[--t-btn-h] text-base/7 px-6',
    },
    square: {
      true: '!px-0 w-[--t-btn-h]',
    },
    variant: {
      default: `shadow-sm border`,
      filled: `shadow-sm border`,
      light: `shadow-sm border`,
      link: `border decoration-2 underline-offset-2`,
      outline: `shadow-sm border`,
    },
  },
})

const createCssVars = (vars: Partial<ButtonCssVars> = {}) => {
  const result: ButtonCssVars = {
    '--t-btn-bg': vars['--t-btn-bg'] || COLORS.white,
    '--t-btn-bg-hover': vars['--t-btn-bg-hover'] || vars['--t-btn-bg'] || COLORS.white,
    '--t-btn-border-color': vars['--t-btn-border-color'] || COLORS.transparent,
    '--t-btn-border-color-hover':
      vars['--t-btn-border-color-hover'] || vars['--t-btn-border-color'] || COLORS.transparent,
    '--t-btn-ring-color': vars['--t-btn-ring-color'] || vars['--t-btn-bg'] || COLORS.indigo[500],
    '--t-btn-text-color': vars['--t-btn-text-color'] || COLORS.slate[700],
    '--t-btn-text-color-hover': vars['--t-btn-text-color-hover'] || vars['--t-btn-text-color'] || COLORS.slate[700],
  }
  return result
}

const getBtnCssVars = (variant: ButtonVariants['variant'], color: ColorKey, primaryColor: ColorKey) => {
  switch (variant) {
    case 'filled':
      return createCssVars({
        '--t-btn-bg': COLORS[color][500],
        '--t-btn-bg-hover': COLORS[color][600],
        '--t-btn-border-color': COLORS.transparent,
        '--t-btn-ring-color': COLORS[color][500],
        '--t-btn-text-color': COLORS.white,
      })
    case 'light':
      return createCssVars({
        '--t-btn-bg': COLORS[color][100],
        '--t-btn-bg-hover': COLORS[color][200],
        '--t-btn-ring-color': COLORS[color][500],
        '--t-btn-text-color': COLORS[color][600],
      })
    case 'outline':
      return createCssVars({
        '--t-btn-bg': COLORS.white,
        '--t-btn-bg-hover': COLORS[color][50],
        '--t-btn-border-color': COLORS[color][300],
        '--t-btn-ring-color': COLORS[color][500],
        '--t-btn-text-color': COLORS[color][600],
      })
    case 'link':
      return createCssVars({
        '--t-btn-bg': 'transparent',
        '--t-btn-ring-color': COLORS[color][500],
        '--t-btn-text-color': COLORS[color][600],
        '--t-btn-text-color-hover': COLORS[color][700],
      })
    default:
      return createCssVars({
        '--t-btn-bg': COLORS.white,
        '--t-btn-bg-hover': COLORS[color][50],
        '--t-btn-border-color': COLORS[color][300],
        '--t-btn-ring-color': COLORS[primaryColor][500],
        '--t-btn-text-color': COLORS[color][600],
      })
  }
}

export function useStyle(variant: MaybeRefOrGetter<ButtonProps>) {
  const { colors, getColorKey } = useTheme()
  const variantRef = computed(() => {
    const orginVariant = { ...toValue(variant) }
    const _variant: ButtonVariants = {
      ...orginVariant,
      color: orginVariant.color || 'gray',
      ring: orginVariant.variant === 'link' ? false : orginVariant.ring,
      variant: orginVariant.variant || (orginVariant.color ? 'filled' : 'default'),
    }
    return _variant
  })
  return {
    cls: computed(() => createBtnCls(variantRef.value)),
    cssVars: computed(() => {
      return getBtnCssVars(variantRef.value.variant, getColorKey(variantRef.value.color)!, getColorKey('primary')!)
    }),
  }
}
