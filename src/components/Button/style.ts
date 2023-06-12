import { classed, type VariantProps } from '@tw-classed/core'
import { computed, toValue, type MaybeRefOrGetter, toRef, type Ref } from 'vue'
import type { ButtonCssVars, ButtonProps } from '.'
import { useTheme, type ColorKey, type Theme, type Color } from '@/theme'
import { COLORS } from '@/theme'

type ButtonVariants = Omit<ButtonProps, 'variant'> & {
  variant: 'filled' | 'light' | 'outline' | 'link' | 'default'
}

const createBtnCls = classed('t-button', {
  base: `inline-flex text-center justify-center items-center  font-medium
  h-[--t-btn-h]
  bg-[--t-btn-bg] text-[--t-btn-text-color] border-[--t-btn-border-color] 
  focus:outline-none
  `.replace(/\s+/g, ' '),
  variants: {
    variant: {
      default: `shadow-sm border`,
      filled: `shadow-sm border-2`,
      light: `shadow-sm border-2`,
      outline: `shadow-sm border-2`,
      link: `border-2 decoration-2 underline-offset-2`,
    },
    size: {
      xs: '[--t-btn-h:calc(1.75rem+2px)] h-[--t-btn-h] text-xs/3 px-2',
      sm: '[--t-btn-h:calc(2rem+2px)] h-[--t-btn-h] text-xs/4 px-3',
      md: '[--t-btn-h:calc(2.25rem+2px)] h-[--t-btn-h] text-sm/5 px-4',
      lg: '[--t-btn-h:calc(2.5rem+2px)] h-[--t-btn-h] text-base/6 px-5',
      xl: '[--t-btn-h:calc(2.75rem+2px)] h-[--t-btn-h] text-base/7 px-6',
    },
    ring: {
      true: 'focus:ring-[--t-btn-ring-color] focus:ring-2 focus:ring-offset-2',
      false: 'focus-visible:ring-[--t-btn-ring-color] focus-visible:ring-2 focus-visible:ring-offset-2',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    square: {
      true: '!px-0 w-[--t-btn-h]',
    },
    block: {
      true: 'w-full',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: `cursor-pointer hover:bg-[--t-btn-bg-hover] hover:text-[--t-btn-text-color-hover] hover:border-[--t-btn-border-color-hover]`,
    },
  },
  compoundVariants: [
    {
      variant: 'link',
      disabled: false,
      class: 'hover:underline',
    },
  ],
})

const createCssVars = (vars: Partial<ButtonCssVars> = {}) => {
  const result: ButtonCssVars = {
    '--t-btn-text-color': vars['--t-btn-text-color'] || COLORS.slate[700],
    '--t-btn-text-color-hover': vars['--t-btn-text-color-hover'] || vars['--t-btn-text-color'] || COLORS.slate[700],
    '--t-btn-border-color': vars['--t-btn-border-color'] || COLORS.transparent,
    '--t-btn-border-color-hover':
      vars['--t-btn-border-color-hover'] || vars['--t-btn-border-color'] || COLORS.transparent,
    '--t-btn-bg': vars['--t-btn-bg'] || COLORS.white,
    '--t-btn-bg-hover': vars['--t-btn-bg-hover'] || vars['--t-btn-bg'] || COLORS.white,
    '--t-btn-ring-color': vars['--t-btn-ring-color'] || vars['--t-btn-bg'] || COLORS.indigo[500],
  }
  return result
}

const getBtnCssVars = (variant: ButtonVariants['variant'], color: ColorKey, primaryColor: ColorKey) => {
  switch (variant) {
    case 'filled':
      return createCssVars({
        '--t-btn-text-color': COLORS.white,
        '--t-btn-bg': COLORS[color][500],
        '--t-btn-border-color': COLORS.transparent,
        '--t-btn-bg-hover': COLORS[color][600],
        '--t-btn-ring-color': COLORS[color][500],
      })
    case 'light':
      return createCssVars({
        '--t-btn-text-color': COLORS[color][600],
        '--t-btn-bg': COLORS[color][100],
        '--t-btn-bg-hover': COLORS[color][200],
        '--t-btn-ring-color': COLORS[color][500],
      })
    case 'outline':
      return createCssVars({
        '--t-btn-text-color': COLORS[color][600],
        '--t-btn-bg': COLORS.white,
        '--t-btn-bg-hover': COLORS[color][100],
        '--t-btn-border-color': COLORS[color][500],
        '--t-btn-ring-color': COLORS[color][500],
      })
    case 'link':
      return createCssVars({
        '--t-btn-text-color': COLORS[color][600],
        '--t-btn-text-color-hover': COLORS[color][700],
        '--t-btn-bg': 'transparent',
        '--t-btn-ring-color': COLORS[color][500],
      })
    default:
      return createCssVars({
        '--t-btn-text-color': COLORS[color][600],
        '--t-btn-bg': COLORS.white,
        '--t-btn-bg-hover': COLORS[color][50],
        '--t-btn-border-color': COLORS[color][300],
        '--t-btn-ring-color': COLORS[primaryColor][500],
      })
  }
}

export function useStyle(variant: MaybeRefOrGetter<ButtonProps>) {
  const { getColorKey, colors } = useTheme()
  const variantRef = computed(() => {
    const orginVariant = { ...toValue(variant) }
    const _variant: ButtonVariants = {
      ...orginVariant,
      variant: orginVariant.variant || (orginVariant.color ? 'filled' : 'default'),
      color: orginVariant.color || 'gray',
      ring: orginVariant.variant === 'link' ? false : orginVariant.ring,
    }
    return _variant
  })
  return {
    cssVars: computed(() => {
      return getBtnCssVars(variantRef.value.variant, getColorKey(variantRef.value.color)!, getColorKey('primary')!)
    }),
    cls: computed(() => createBtnCls(variantRef.value)),
  }
}
