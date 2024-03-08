import { ColorAlias } from '../utils/style'
import { tw } from '../utils/tw'

// 'primary' | 'success' | 'warning' | 'danger'

export const createButtonCss = tw(
  `appearance-none border border-solid inline-flex items-center justify-center text-sm font-medium  transition-colors
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`,
  {
    compoundVariants: [
      { size: 'sm', square: true, class: 'w-8' },
      { size: 'md', square: true, class: 'w-9' },
      { size: 'lg', square: true, class: 'w-10' },

      {
        variant: 'default',
        color: 'normal',
        class: /*tw:*/ `border-gray-300 text-current bg-white enabled:hover:bg-gray-50`,
      },
      {
        variant: 'default',
        color: 'primary',
        class: /*tw:*/ `border-transparent text-white bg-primary-500 enabled:hover:bg-primary-600`,
      },
      {
        variant: 'default',
        color: 'success',
        class: /*tw:*/ `border-transparent text-white bg-success-500  enabled:hover:bg-success-600`,
      },
      {
        variant: 'default',
        color: 'warning',
        class: /*tw:*/ `border-transparent text-white bg-warning-500  enabled:hover:bg-warning-600`,
      },
      {
        variant: 'default',
        color: 'danger',
        class: /*tw:*/ `border-transparent text-white bg-danger-500  enabled:hover:bg-danger-600`,
      },

      {
        variant: 'secondary',
        color: 'normal',
        class: /*tw:*/ `border-transparent text-current bg-gray-100 enabled:hover:bg-gray-200`,
      },
      {
        variant: 'secondary',
        color: 'primary',
        class: /*tw:*/ `border-transparent text-primary-600 bg-primary-100 enabled:hover:bg-primary-200`,
      },
      {
        variant: 'secondary',
        color: 'success',
        class: /*tw:*/ `border-transparent text-success-600 bg-success-100  enabled:hover:bg-success-200`,
      },
      {
        variant: 'secondary',
        color: 'warning',
        class: /*tw:*/ `border-transparent text-warning-600 bg-warning-100  enabled:hover:bg-warning-200`,
      },
      {
        variant: 'secondary',
        color: 'danger',
        class: /*tw:*/ `border-transparent text-danger-600 bg-danger-100  enabled:hover:bg-danger-200`,
      },

      {
        variant: 'ghost',
        color: 'normal',
        class: /*tw:*/ `border-transparent text-current bg-transparent enabled:hover:bg-gray-200`,
      },
      {
        variant: 'ghost',
        color: 'primary',
        class: /*tw:*/ `border-transparent text-primary-600 bg-transparent enabled:hover:bg-primary-200`,
      },
      {
        variant: 'ghost',
        color: 'success',
        class: /*tw:*/ `border-transparent text-success-600 bg-transparent  enabled:hover:bg-success-200`,
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: /*tw:*/ `border-transparent text-warning-600 bg-transparent  enabled:hover:bg-warning-200`,
      },
      {
        variant: 'ghost',
        color: 'danger',
        class: /*tw:*/ `border-transparent text-danger-600 bg-transparent  enabled:hover:bg-danger-200`,
      },
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
        default: `shadow-sm  `,
        secondary: `shadow-sm  `,
        ghost: ``,
      },
      color: {
        normal: '',
        primary: '',
        success: '',
        warning: '',
        danger: '',
      },
    },
  }
)

export const createButtonStyle = (props: {
  variant: 'default' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  color?: ColorAlias
  block: boolean
  disabled: boolean
  pill: boolean
  square: boolean
}) => {
  const ret = css({
    block: props.block,
    disabled: props.disabled,
    pill: props.pill,
    size: props.size,
    square: props.square,
    variant: props.variant,
    color: props.color || 'normal',
  })
  return ret
}
