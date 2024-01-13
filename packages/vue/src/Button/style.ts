import { createVars, cvar, type ColorName, isGrayscaleColor } from '../utils/style'
import { tw } from '../utils/tw'

const css = tw(
  `appearance-none inline-flex items-center justify-center text-sm font-medium  transition-colors
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 `,
  {
    compoundVariants: [
      { size: 'sm', square: true, class: 'w-8' },
      { size: 'md', square: true, class: 'w-9' },
      { size: 'lg', square: true, class: 'w-10' },
    ],
    variants: {
      block: {
        false: '',
        true: 'w-full',
      },
      disabled: {
        false: '',
        true: 'opacity-60 cursor-not-allowed',
      },
      pill: {
        false: 'rounded-md',
        true: 'rounded-full',
      },
      size: {
        lg: ['h-10 px-3.5 py-2.5', ''],
        md: ['h-9 px-3 py-2', ''],
        sm: ['h-8 px-2.5 py-1.5', ''],
      },
      square: {
        false: '',
        true: ['px-0 overflow-hidden', 'px-2.5 px-3 px-3.5'],
      },
      variant: {
        default: `shadow-sm border border-[--z-btn-border] text-[--z-btn-text] bg-[--z-btn-bg]  enabled:hover:bg-[--z-btn-bg_hover]`,
        soft: `shadow-sm border border-transparent text-[--z-btn-text] bg-[--z-btn-bg]  enabled:hover:bg-[--z-btn-bg_hover]`,
        plain: `border border-transparent transition-colors duration-150 text-[--z-btn-text] bg-transparent enabled:hover:bg-[--z-btn-bg_hover]`,
      },
    },
  }
)

export const createButtonStyle = (props: {
  variant: 'default' | 'soft' | 'plain'
  size: 'sm' | 'md' | 'lg'
  color?: ColorName
  block: boolean
  disabled: boolean
  pill: boolean
  square: boolean
}) => {
  const isGrayscale = isGrayscaleColor(props.color || 'white')
  const vars =
    props.variant === 'plain'
      ? createVars('z-btn', {
          text: props.color ? cvar(`${props.color}${isGrayscale ? 700 : 500}`) : 'currentColor',
          bg_hover: props.color ? cvar(`${props.color}200`) : cvar('gray200'),
        })
      : props.variant === 'soft'
        ? createVars('z-btn', {
            bg: props.color ? cvar(`${props.color}100`) : cvar('gray100'),
            bg_hover: props.color ? cvar(`${props.color}200`) : cvar('gray200'),
            text: props.color ? cvar(`${props.color}${isGrayscale ? 700 : 500}`) : 'currentColor',
          })
        : createVars('z-btn', {
            bg: props.color ? cvar(`${props.color}${isGrayscale ? 700 : 500}`) : 'white',
            bg_hover: props.color ? cvar(`${props.color}600`) : cvar('gray50'),
            border: props.color ? 'transparent' : cvar('gray300'),
            text: props.color ? 'white' : 'currentColor',
          })

  const ret = css({
    block: props.block,
    disabled: props.disabled,
    pill: props.pill,
    size: props.size,
    square: props.square,
    variant: props.variant,
  })
  return {
    css: ret,
    style: vars,
    icon: 'h-[1em] w-[1em] [&_+_*]:ml-1.5 [&_svg]:h-full [&_svg]:w-full',
  }
}
