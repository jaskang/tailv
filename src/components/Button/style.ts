import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import { useTheme } from '@/theme'
import type { PaletteColor, VarColor } from '@/theme/colors'
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
        default: ['border', ''],
        outline: ['border-[1.5px]', ''],
        solid: 'border-2',
        soft: 'border-2',
        plain: ['border-2', 'shadow-sm'],
        link: ['border-2 hover:underline hover:decoration-2 hover:underline-offset-2', 'shadow-sm'],
      },
      color: {
        primary: '',
        success: '',
        warning: '',
        error: '',
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
          'cursor-pointer focus:ring-2 focus:ring-[--t-btn-ring] focus:ring-offset-2 dark:focus:ring-offset-gray-900',
      },
    },
  }
)

function createStyle(variant: ButtonInnerProps['variant'], color: PaletteColor) {
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
        text: `${color}.500`,
        bg: `${color}.100`,
        border: `transparent`,
        textHover: `${color}.500`,
        bgHover: `${color}.200`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'plain':
      return cssVars({
        text: `${color}.500`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${color}.500`,
        bgHover: `${color}.100`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'link':
      return cssVars({
        text: `${color}.500`,
        bg: `transparent`,
        border: `transparent`,
        textHover: `${color}.500`,
        bgHover: `transparent`,
        borderHover: `transparent`,
        ring: `${color}.500`,
      })
    case 'outline':
      return cssVars({
        text: `${color}.500`,
        bg: 'white',
        border: `${color}.500`,
        textHover: 'white',
        bgHover: `${color}.500`,
        borderHover: `${color}.500`,
        ring: `${color}.500`,
      })
    default:
      return cssVars({
        text: `gray.700`,
        bg: 'white',
        border: `gray.300`,
        textHover: `gray.900`,
        bgHover: `gray.50`,
        borderHover: `gray.300`,
        ring: `${color}.500`,
      })
  }
}

export const useButtonStyle = (getter: MaybeRefOrGetter<ButtonInnerProps>) => {
  const { convertAliasColor } = useTheme()
  const result = computed(() => {
    const props = toValue(getter)
    return {
      class: createClass({
        variant: props.variant,
        color: props.color as 'primary',
        size: props.size,
        block: props.block,
        pill: props.pill || props.circle,
        square: props.square || props.circle,
        disabled: props.disabled,
      }),
      style: createStyle(props.variant, convertAliasColor(props.color)),
    }
  })
  return result
}
