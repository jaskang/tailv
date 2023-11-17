import { createVars, cvar, type ColorName } from './utils/style'
import { tw } from './utils/tw'

const css = tw(
  `z-btn appearance-none inline-flex items-center justify-center text-sm font-medium  transition-colors
  focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2`,
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

export const createButtonStyle = (props: {
  variant: 'default' | 'ghost' | 'link' | 'outline' | 'soft' | 'solid'
  size: 'sm' | 'md' | 'lg'
  color: ColorName
  block: boolean
  disabled: boolean
  pill: boolean
  square: boolean
}) => {
  const vars =
    props.variant === 'solid'
      ? createVars('z-btn', {
          bg: cvar(`${props.color}500`),
          bg_hover: cvar(`${props.color}600`),
          border: `transparent`,
          outline: cvar(`${props.color}500`),
          text: 'white',
        })
      : props.variant === 'soft'
        ? createVars('z-btn', {
            bg: cvar(`${props.color}100`),
            bg_hover: cvar(`${props.color}200`),
            border: `transparent`,
            outline: cvar(`${props.color}500`),
            text: cvar(`${props.color}500`),
          })
        : props.variant === 'outline'
          ? createVars('z-btn', {
              bg: 'transparent',
              bg_hover: cvar(`${props.color}200`),
              border: cvar(`${props.color}500`),
              outline: cvar(`${props.color}500`),
              text: cvar(`${props.color}600`),
            })
          : props.variant === 'ghost'
            ? createVars('z-btn', {
                bg: `transparent`,
                bg_hover: cvar(`${props.color}100`),
                border: `transparent`,
                outline: cvar(`${props.color}500`),
                text: cvar(`${props.color}600`),
              })
            : props.variant === 'link'
              ? createVars('z-btn', {
                  bg: `transparent`,
                  border: `transparent`,
                  outline: cvar(`${props.color}500`),
                  text: cvar(`${props.color}600`),
                })
              : createVars('z-btn', {
                  bg: 'white',
                  bg_hover: cvar('gray50'),
                  border: cvar('gray300'),
                  border_hover: cvar('gray300'),
                  outline: cvar(`${props.color}500`),
                  text: cvar('gray700'),
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
    icon: 'h-[1em] w-[1em] scale-125 [&_+_*]:ml-1.5 [&_svg]:h-full [&_svg]:w-full',
  }
}
