import { classed, type VariantProps } from '@tw-classed/core'
import { colors, type ColorKey, border } from '@/core/colors'
import { computed, toValue, type MaybeRefOrGetter, toRef } from 'vue'

export type ButtonCssVars = {
  '--t-btn-text-color': string
  '--t-btn-text-color-hover': string
  '--t-btn-border-color': string
  '--t-btn-border-color-hover': string
  '--t-btn-bg': string
  '--t-btn-bg-hover': string
  '--t-btn-ring-color': string
}

const createBtnVars = (vars: Partial<ButtonCssVars> = {}) => {
  const result: ButtonCssVars = {
    '--t-btn-text-color': vars['--t-btn-text-color'] || colors.gray[700],
    '--t-btn-text-color-hover': vars['--t-btn-text-color-hover'] || vars['--t-btn-text-color'] || colors.gray[700],
    '--t-btn-border-color': vars['--t-btn-border-color'] || colors.transparent,
    '--t-btn-border-color-hover':
      vars['--t-btn-border-color-hover'] || vars['--t-btn-border-color'] || colors.transparent,
    '--t-btn-bg': vars['--t-btn-bg'] || colors.white,
    '--t-btn-bg-hover': vars['--t-btn-bg-hover'] || vars['--t-btn-bg'] || colors.white,
    '--t-btn-ring-color': vars['--t-btn-ring-color'] || vars['--t-btn-bg'] || colors.indigo[500],
  }
  return result
}

export const getBtnVars = (variant: 'default' | 'link' | 'subtle', _color?: ColorKey) => {
  if (variant === 'link') {
    const color = _color || 'gray'
    return createBtnVars({
      '--t-btn-text-color': colors[color][600],
      '--t-btn-text-color-hover': colors[color][700],
      '--t-btn-bg': 'transparent',
    })
  } else if (variant === 'subtle') {
    const color = _color || 'gray'
    return createBtnVars({
      '--t-btn-text-color': colors[color][600],
      '--t-btn-bg': colors[color][100],
      '--t-btn-bg-hover': colors[color][200],
      '--t-btn-ring-color': colors[color][500],
    })
  } else {
    const color = _color
    return color
      ? createBtnVars({
          '--t-btn-text-color': colors.white,
          '--t-btn-bg': colors[color][500],
          '--t-btn-border-color': colors.transparent,
          '--t-btn-bg-hover': colors[color][600],
          '--t-btn-ring-color': colors[color][500],
        })
      : createBtnVars({
          '--t-btn-border-color': border.default,
          '--t-btn-bg-hover': colors.gray[50],
          '--t-btn-ring-color': colors.indigo[500],
        })
  }
}

export const createBtnCls = classed('t-button', {
  base: `inline-flex text-center justify-center items-center border font-medium
  h-[--t-btn-h]
  bg-[--t-btn-bg] text-[--t-btn-text-color] border-[--t-btn-border-color] 
  focus:outline-none
  `.replace(/\s+/g, ' '),
  variants: {
    variant: {
      default: `shadow-sm`,
      link: ``,
      subtle: `shadow-sm`,
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
})

export function useCls(variant: () => VariantProps<typeof createBtnCls>) {
  const variantRef = toRef(variant)
  return computed(() => createBtnCls(toValue(variantRef)))
}
