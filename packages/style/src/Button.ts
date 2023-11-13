import { createColorVars } from './utils/style'
import { tw } from './utils/tw'

const css = tw(
  `z-btn appearance-none inline-flex items-center justify-center text-sm font-medium  transition-colors
  focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2`,
  {
    compoundVariants: [
      { class: 'w-8', size: 'sm', square: true },
      { class: 'w-9', size: 'md', square: true },
      { class: 'w-10', size: 'lg', square: true },
    ],
    variants: {
      block: {
        false: '',
        true: 'w-full',
      },
      disabled: {
        false: '',
        true: ['opacity-60 cursor-not-allowed', ''],
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
        true: ['px-0 overflow-hidden', 'px-1.5 px-2 px-2.5 px-3 px-3.5'],
      },
      variant: {
        default: ['shadow-sm border', ''],
        ghost: ['', ''],
        link: ['decoration-2 underline-offset-2 enabled:hover:underline', ''],
        outline: ['shadow-sm border', ''],
        soft: ['shadow-sm ', ''],
        solid: ['shadow-sm ', ''],
      },
    },
  }
)

export const createBtnStyle = (props: ButtonInnerProps) => {
  const vars =
    props.variant === 'solid'
      ? createColorVars('z-btn', {
          bg: `${props.color}500`,
          bg_hover: `${props.color}600`,
          border: `transparent`,
          outline: `${props.color}500`,
          text: 'white',
        })
      : props.variant === 'soft'
      ? createColorVars('z-btn', {
          bg: `${props.color}100`,
          bg_hover: `${props.color}200`,
          border: `transparent`,
          outline: `${props.color}500`,
          text: `${props.color}500`,
        })
      : props.variant === 'outline'
      ? createColorVars('z-btn', {
          bg: 'transparent',
          bg_hover: `${props.color}200`,
          border: `${props.color}500`,
          outline: `${props.color}500`,
          text: `${props.color}600`,
        })
      : props.variant === 'ghost'
      ? createColorVars('z-btn', {
          bg: `transparent`,
          bg_hover: `${props.color}100`,
          border: `transparent`,
          outline: `${props.color}500`,
          text: `${props.color}600`,
        })
      : props.variant === 'link'
      ? createColorVars('z-btn', {
          bg: `transparent`,
          border: `transparent`,
          outline: `${props.color}500`,
          text: `${props.color}600`,
        })
      : createColorVars('z-btn', {
          bg: 'white',
          bg_hover: 'slate50',
          border: 'slate300',
          border_hover: 'slate300',
          outline: 'primary500',
          text: 'slate700',
        })

  const ret = css({
    block: props.block,
    disabled: props.disabled,
    pill: props.circle || props.pill,
    size: props.size,
    square: props.circle || props.square,
    variant: props.variant,
  })
  return { css: ret, vars: vars }
}
