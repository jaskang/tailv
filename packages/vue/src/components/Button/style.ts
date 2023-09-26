import { css, cva } from '../../../styled-system/css'
import { token } from '../../../styled-system/tokens'
import type { SystemStyleObject } from '../../../styled-system/types'
import type { ButtonInnerProps, ButtonProps } from '.'

const variant = cva({
  base: {
    '--btn-size': token('spacing.row-md'),
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    height: 'var(--btn-size)',
  },
  variants: {
    variant: {
      default: {},
      solid: {},
      soft: {},
      outline: {},
      ghost: {},
      link: {},
    },
    block: {
      true: {
        display: 'flex',
        width: '100%',
      },
    },
    pill: {
      true: {
        rounded: 'full',
      },
    },
    square: {
      true: {
        width: 'var(--btn-size)',
        overflow: 'hidden',
      },
    },
  },
})
export const style = (props: ButtonInnerProps) => {
  function colorStyle(): SystemStyleObject {
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

  const ret = css(
    variant.raw({
      variant: props.variant,
      block: props.block,
      pill: props.circle || props.pill,
      square: props.circle || props.square,
    }),
    colorStyle()
  )
  return ret
}
