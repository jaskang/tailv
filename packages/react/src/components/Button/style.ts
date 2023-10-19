import { createColorVars, } from '../../utils/style'
import { tw } from '../../utils/tw'


const css = tw(
  `z-btn appearance-none inline-flex items-center justify-center text-sm font-medium  transition-colors
  focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2`,
  {
    variants: {
      variant: {
        default: ['shadow-sm border', ''],
        solid: ['shadow-sm ', ''],
        soft: ['shadow-sm ', ''],
        outline: ['shadow-sm border', ''],
        ghost: ['', ''],
        link: ['decoration-2 underline-offset-2 enabled:hover:underline', ''],
      },
      size: {
        sm: ['h-8 px-2.5 py-1.5', ''],
        md: ['h-9 px-3 py-2', ''],
        lg: ['h-10 px-3.5 py-2.5', ''],
      },
      block: {
        true: 'w-full',
        false: '',
      },
      pill: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
      square: {
        true: ['px-0 overflow-hidden', 'px-1.5 px-2 px-2.5 px-3 px-3.5'],
        false: '',
      },
      disabled: {
        true: ['opacity-60 cursor-not-allowed', ''],
        false: '',
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
  const vars =
    props.variant === 'solid'
      ? createColorVars('z-btn', {
          outline: `${props.color}500`,
          text: 'white',
          bg: `${props.color}500`,
          border: `transparent`,
          bg_hover: `${props.color}600`,
        })
      : props.variant === 'soft'
      ? createColorVars('z-btn', {
          outline: `${props.color}500`,
          text: `${props.color}500`,
          bg: `${props.color}100`,
          border: `transparent`,
          bg_hover: `${props.color}200`,
        })
      : props.variant === 'outline'
      ? createColorVars('z-btn', {
          outline: `${props.color}500`,
          text: `${props.color}600`,
          bg: 'transparent',
          border: `${props.color}500`,
          bg_hover: `${props.color}200`,
        })
      : props.variant === 'ghost'
      ? createColorVars('z-btn', {
          outline: `${props.color}500`,
          text: `${props.color}600`,
          bg: `transparent`,
          border: `transparent`,
          bg_hover: `${props.color}100`,
        })
      : props.variant === 'link'
      ? createColorVars('z-btn', {
          outline: `${props.color}500`,
          text: `${props.color}600`,
          bg: `transparent`,
          border: `transparent`,
        })
      : createColorVars('z-btn', {
          outline: 'primary500',
          text: 'slate700',
          bg: 'white',
          border: 'slate300',
          bg_hover: 'slate50',
          border_hover: 'slate300',
        })

  const ret = css({
    variant: props.variant,
    size: props.size,
    block: props.block,
    pill: props.circle || props.pill,
    square: props.circle || props.square,
    disabled: props.disabled,
  })
  return { css: ret, vars: vars }
}
