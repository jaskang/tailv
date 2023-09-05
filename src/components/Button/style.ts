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
  `t-button inline-flex rounded-md shadow-sm text-center justify-center items-center font-medium transition-all 
  focus:outline-none h-[--t-btn-h]
  text-[--t-btn-text] bg-[--t-btn-bg] border-[--t-btn-border]
  hover:text-[--t-btn-textHover] hover:bg-[--t-btn-bgHover] hover:border-[--t-btn-borderHover]
  `,
  {
    variants: {
      variant: {
        // return cssVars({
        //   text: `gray.700`,
        //   bg: 'white',
        //   border: `gray.300`,
        //   textHover: `gray.700`,
        //   bgHover: `gray.50`,
        //   borderHover: `gray.300`,
        //   ring: `${color}.500`,
        // })
        default: [
          'border text-gray-700 bg-white border-gray-300 hover:bg-gray-50 dark:text-white dark:border-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700',
          'text-[--t-btn-text] bg-[--t-btn-bg] border-[--t-btn-border] hover:text-[--t-btn-textHover] hover:bg-[--t-btn-bgHover] hover:border-[--t-btn-borderHover]',
        ],
        solid: 'border-2',
        soft: 'border-2',
        plain: ['border-2', 'shadow-sm'],
        link: ['border-2 hover:underline hover:decoration-2 hover:underline-offset-2', 'shadow-sm'],
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
        true: ['px-0 w-[--t-btn-h]', 'px-2 px-3 px-4 px-5 px-6'],
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50 hover:-underline hover:text-[--t-btn-text] hover:bg-[--t-btn-bg] hover:border-[--t-btn-border]',
        false:
          'cursor-pointer focus:ring-2 focus:ring-[--t-btn-ring] focus:ring-offset-2 dark:ring-offset-gray-900',
      },
    },
  }
)

function createStyle(variant: ButtonInnerProps['variant'], color: PaletteColor) {
  const isGrayScale = GRAYSCALE_COLORS.includes(color)
  const colorLv = isGrayScale ? '700' : '600'
  switch (variant) {
    case 'solid':
      return cssVars({
        text: `white`,
        bg: `${color}.500`,
        border: `transparent`,
        textHover: `white`,
        bgHover: `${color}.600`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'soft':
      return cssVars({
        text: `${color}.${colorLv}`,
        bg: `${color}.100`,
        border: `transparent`,
        textHover: `${color}.${colorLv}`,
        bgHover: `${color}.200`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'plain':
      return cssVars({
        text: `${color}.${colorLv}`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${color}.${colorLv}`,
        bgHover: `${color}.200`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'link':
      return cssVars({
        text: `${color}.${colorLv}`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${color}.${colorLv}`,
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
