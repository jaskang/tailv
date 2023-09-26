import { tw } from '@/utils/tw'

import type { ButtonInnerProps } from '.'

const css = tw(
  `z-btn appearance-none inline-flex items-center justify-center text-sm font-semibold rounded
  transition-colors
  focus:outline-none`,
  {
    variants: {
      variant: {
        default: ['shadow-sm border bg-white dark:bg-slate-900', ''],
        solid: ['shadow-sm text-white bg-primary-500 hover:bg-primary-600', ''],
        soft: ['shadow-sm text-primary-700 bg-primary-100 hover:bg-primary-200', ''],
        outline: [
          'text-primary-700 border-primary-500 hover:bg-primary-500 hover:text-white ring-primary-500 ring-1 ring-inset border',
          '',
        ],
        ghost: ['text-primary-700 hover:bg-primary-100', ''],
        link: ['text-primary-700 decoration-2 underline-offset-2 hover:underline ', ''],
      },
      size: {
        sm: ['h-8 px-2.5 py-1.5', ''],
        md: ['h-9 px-3 py-2', ''],
        lg: ['h-10 px-3.5 py-2.5', ''],
      },
      block: {
        true: ['w-full', ''],
      },
      pill: {
        true: ['rounded-full', ''],
      },
      square: {
        true: ['px-0 overflow-hidden', 'px-1.5 px-2 px-2.5 px-3 px-3.5'],
      },
    },
    compoundVariants: [
      { size: 'sm', square: true, class: 'w-8' },
      { size: 'md', square: true, class: 'w-9' },
      { size: 'lg', square: true, class: 'w-10' },
    ],
  }
)

export const style = (props: ButtonInnerProps) => {
  function colorStyle() {
    switch (props.variant) {
      case 'solid':
        return {
          color: 'white',
          bg: `${props.color}.500`,
          ringColor: `${props.color}.500`,
          _hover: {
            bg: `${props.color}.600`,
          },
        }
      case 'soft':
        return {
          color: `${props.color}.600`,
          bg: `${props.color}.100`,
          ringColor: `${props.color}.500`,
          _hover: {
            bg: `${props.color}.200`,
          },
        }
      case 'ghost':
        return {
          color: `${props.color}.600`,
          ringColor: `${props.color}.500`,
          _hover: {
            bg: `${props.color}.100`,
          },
        }
      case 'link':
        return {
          color: `${props.color}.600`,
          ringColor: `${props.color}.500`,
        }
      default:
        return {
          color: 'slate.700',
          bg: 'white',
          borderColor: 'slate.300',
          ringColor: 'primary.500',
          _hover: {
            bg: 'slate.50',
            borderColor: 'slate.300',
          },
        }
    }
  }

  const ret = css({
    variant: props.variant,
    size: props.size,
    block: props.block,
    pill: props.circle || props.pill,
    square: props.circle || props.square,
  })
  return ret
}
