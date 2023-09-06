import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import { useTheme } from '@/theme'
import { GRAYSCALE_COLORS, type PaletteColor, type VarColor } from '@/theme/colors'
import { clsVariants } from '@/utils/clst'
import { createStyleVar } from '@/utils/style'

import type { ButtonInnerProps } from '.'

type ButtonCssVars = {
  text: VarColor
  bg: VarColor
  border: VarColor
  textHover: VarColor
  bgHover: VarColor
  borderHover: VarColor
  ring: VarColor
}

const cssVars = createStyleVar<'t-btn', ButtonCssVars>('t-btn')

const createClass = clsVariants(
  `t-button inline-flex rounded-md text-center justify-center items-center font-medium transition-colors 
  h-[--t-btn-h]
  text-[--t-btn-text] bg-[--t-btn-bg] border-[--t-btn-border]
  hover:enabled:text-[--t-btn-textHover] hover:enabled:bg-[--t-btn-bgHover] hover:enabled:border-[--t-btn-borderHover]
  focus:outline-none focus:enabled:ring-2 focus:enabled:ring-offset-2 focus:enabled:ring-[--t-btn-ring] dark:ring-offset-slate-900
  `,
  {
    variants: {
      variant: {
        default: [
          `border shadow-sm text-gray-700 bg-white border-gray-300 hover:enabled:bg-slate-50 dark:text-white dark:border-gray-700 dark:bg-slate-900 dark:hover:enabled:bg-slate-800`,
          `text-[--t-btn-text] bg-[--t-btn-bg] border-[--t-btn-border]
        hover:enabled:text-[--t-btn-textHover] hover:enabled:bg-[--t-btn-bgHover] hover:enabled:border-[--t-btn-borderHover]`,
        ],
        solid: 'border-2 shadow-sm',
        soft: 'border-2 shadow-sm',
        plain: 'border-2',
        link: 'border-2 hover:enabled:underline hover:enabled:decoration-2 hover:enabled:underline-offset-4',
      },
      size: {
        xs: '[--t-btn-h:calc(1.75rem+2px)] text-xs/3 px-2',
        sm: '[--t-btn-h:calc(2rem+2px)] text-xs/4 px-3',
        md: '[--t-btn-h:calc(2.25rem+2px)] text-sm/5 px-4',
        lg: '[--t-btn-h:calc(2.5rem+2px)] text-base/6 px-5',
        xl: '[--t-btn-h:calc(2.75rem+2px)] text-base/7 px-6',
      },
      block: {
        true: 'w-full',
        false: '',
      },
      pill: {
        true: 'rounded-full',
        false: '',
      },
      square: {
        true: ['w-[--t-btn-h] px-0', 'px-2 px-3 px-4 px-5 px-6'],
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },
    },
  }
)

function createStyle(variant: ButtonInnerProps['variant'], color: PaletteColor) {
  const isGrayScale = GRAYSCALE_COLORS.includes(color)
  switch (variant) {
    case 'solid':
      return cssVars({
        text: `white`,
        bg: `${color}.${isGrayScale ? 900 : 500}`,
        border: `transparent`,
        textHover: `white`,
        bgHover: `${color}.${isGrayScale ? 800 : 600}`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'soft':
      return cssVars({
        text: `${color}.${isGrayScale ? 700 : 600}`,
        bg: `${color}.${isGrayScale ? 200 : 100}`,
        border: `transparent`,
        textHover: `${color}.${isGrayScale ? 700 : 600}`,
        bgHover: `${color}.${isGrayScale ? 300 : 200}`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'plain':
      return cssVars({
        text: `${color}.${isGrayScale ? 700 : 600}`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${color}.${isGrayScale ? 700 : 600}`,
        bgHover: `${color}.${isGrayScale ? 300 : 200}`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'link':
      return cssVars({
        text: `${color}.${isGrayScale ? 700 : 600}`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${color}.${isGrayScale ? 700 : 600}`,
        bgHover: `transparent`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    default:
      return cssVars({
        ring: `${color}.500`,
      })
  }
}

export const useButtonStyle = (getter: MaybeRefOrGetter<ButtonInnerProps>) => {
  const { convertAliasColor } = useTheme()
  const result = computed(() => {
    const props = toValue(getter)
    const variant = ['solid', 'soft', 'plain', 'link'].includes(props.variant)
      ? props.variant
      : 'default'
    const color = variant === 'default' ? 'primary' : props.color
    return {
      class: createClass({
        variant: variant,
        size: props.size,
        block: props.block,
        pill: props.pill || props.circle,
        square: props.square || props.circle,
        disabled: props.disabled,
      }),
      style: createStyle(props.variant, convertAliasColor(color)),
    }
  })
  return result
}
