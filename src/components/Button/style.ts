import { tv } from 'tailwind-variants'
import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import { COLORS } from '@/theme'
import { type ColorKey, useTheme } from '@/theme'
import { type CssVars } from '@/utils/style'

import type { ButtonCssVars, ButtonProps } from '.'

type ButtonVariants = Omit<ButtonProps, 'variant'> & {
  variant: 'filled' | 'light' | 'link' | 'outline'
}

const cssVarKeys = [
  'bg',
  'bg-hover',
  'border-color',
  'border-color-hover',
  'text-color',
  'text-color-hover',
  'ring-color',
] as const

type BtnCssVars = CssVars<'t-btn', typeof cssVarKeys>

const createBtnCls = tv({
  base: `t-button inline-flex border text-center justify-center items-center font-medium
  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--t-btn-ring-color]
  bg-[--t-btn-bg] 
  text-[--t-btn-text-color] 
  border-[--t-btn-border-color] 
  hover:bg-[--t-btn-bg-hover] 
  hover:text-[--t-btn-text-color-hover] 
  hover:border-[--t-btn-border-color-hover] 
  ring-[--t-btn-ring-color]
  `,
  variants: {
    size: {
      xs: '[--t-btn-h:calc(1.75rem+2px)] h-[--t-btn-h] text-xs/3 px-2',
      sm: '[--t-btn-h:calc(2rem+2px)] h-[--t-btn-h] text-xs/4 px-3',
      md: '[--t-btn-h:calc(2.25rem+2px)] h-[--t-btn-h] text-sm/5 px-4',
      lg: '[--t-btn-h:calc(2.5rem+2px)] h-[--t-btn-h] text-base/6 px-5',
      xl: '[--t-btn-h:calc(2.75rem+2px)] h-[--t-btn-h] text-base/7 px-6',
    },
    block: {
      true: 'w-full',
    },
    ring: {
      // false: 'focus-visible:ring-2 focus-visible:ring-offset-2 dark:ring-offset-slate-900',
      // true: 'focus:ring-2 focus:ring-offset-2 dark:ring-offset-slate-900',
    },
    rounded: {
      false: 'rounded-md',
      true: 'rounded-full',
    },

    square: {
      true: 'px-0 w-[--t-btn-h]',
    },
    variant: {
      filled: `shadow-sm`,
      light: `shadow-sm`,
      link: 'decoration-2 underline-offset-2',
      outline: 'shadow-sm',
    },
    disabled: {
      false: `cursor-pointer`,
      true: 'cursor-not-allowed hover:bg-[--t-btn-bg] hover:text-[--t-btn-text-color] hover:border-[--t-btn-border-color] opacity-50',
    },
  },
  compoundVariants: [
    {
      class: 'hover:underline',
      disabled: false,
      variant: 'link',
    },
  ],
})

const createCssVars = (vars: Partial<ButtonCssVars> = {}) => {
  const result: BtnCssVars = {
    '--t-btn-bg': vars['--t-btn-bg'] || COLORS.white,
    '--t-btn-bg-hover': vars['--t-btn-bg-hover'] || `var(--t-btn-bg,${COLORS.white})`,
    '--t-btn-border-color': vars['--t-btn-border-color'] || COLORS.transparent,
    '--t-btn-border-color-hover':
      vars['--t-btn-border-color-hover'] || vars['--t-btn-border-color'] || COLORS.transparent,
    '--t-btn-text-color': vars['--t-btn-text-color'] || COLORS.slate[700],
    '--t-btn-text-color-hover': vars['--t-btn-text-color-hover'] || vars['--t-btn-text-color'] || COLORS.slate[700],
    '--t-btn-ring-color': vars['--t-btn-ring-color'] || vars['--t-btn-bg'] || COLORS.indigo[500],
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
        '--t-btn-text-color': COLORS.white,
        '--t-btn-ring-color': COLORS[color][500],
      })
    case 'light':
      return createCssVars({
        '--t-btn-bg': COLORS[color][100],
        '--t-btn-bg-hover': COLORS[color][200],
        '--t-btn-text-color': COLORS[color][600],
        '--t-btn-ring-color': COLORS[color][500],
      })
    case 'outline':
      return createCssVars({
        '--t-btn-text-color': COLORS[color][600],
        '--t-btn-bg': COLORS.white,
        '--t-btn-bg-hover': COLORS[color][50],
        '--t-btn-border-color': COLORS[color][300],
        '--t-btn-border-color-hover': COLORS[color][300],
        '--t-btn-ring-color': COLORS[color][500],
      })
    case 'link':
      return createCssVars({
        '--t-btn-bg': 'transparent',
        '--t-btn-text-color': COLORS[color][500],
        '--t-btn-text-color-hover': COLORS[color][600],
        '--t-btn-ring-color': COLORS[primaryColor][500],
      })
  }
}

export function useStyle(variant: MaybeRefOrGetter<ButtonProps>) {
  const { colors, getColorKey } = useTheme()
  const variantRef = computed(() => {
    const originVariant = { ...toValue(variant) }
    const _variant: ButtonVariants = {
      ...originVariant,
      color: originVariant.color,
      ring: originVariant.variant === 'link' ? false : originVariant.ring,
      variant: originVariant.variant,
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
