import { tw } from '../utils/tw'

// 'primary' | 'success' | 'warning' | 'danger'

export const createButtonCss = tw(
  `inline-flex appearance-none items-center justify-center border border-solid text-sm font-medium  transition-colors
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`,
  {
    compoundVariants: [
      { size: 'sm', square: true, class: 'w-8' },
      { size: 'md', square: true, class: 'w-9' },
      { size: 'lg', square: true, class: 'w-10' },

      {
        variant: 'default',
        color: 'normal',
        class: ` border-gray-300 bg-white text-current enabled:hover:bg-gray-50`,
      },
      {
        variant: 'default',
        color: 'primary',
        class: `border-transparent bg-primary-500 text-white enabled:hover:bg-primary-600`,
      },
      {
        variant: 'default',
        color: 'success',
        class: `border-transparent bg-success-500 text-white  enabled:hover:bg-success-600`,
      },
      {
        variant: 'default',
        color: 'warning',
        class: `border-transparent bg-warning-500 text-white  enabled:hover:bg-warning-600`,
      },
      {
        variant: 'default',
        color: 'danger',
        class: `border-transparent bg-danger-500 text-white  enabled:hover:bg-danger-600`,
      },

      {
        variant: 'secondary',
        color: 'normal',
        class: `border-transparent bg-gray-100 text-current enabled:hover:bg-gray-200`,
      },
      {
        variant: 'secondary',
        color: 'primary',
        class: `border-transparent bg-primary-100 text-primary-600 enabled:hover:bg-primary-200`,
      },
      {
        variant: 'secondary',
        color: 'success',
        class: `border-transparent bg-success-100 text-success-600  enabled:hover:bg-success-200`,
      },
      {
        variant: 'secondary',
        color: 'warning',
        class: `border-transparent bg-warning-100 text-warning-600  enabled:hover:bg-warning-200`,
      },
      {
        variant: 'secondary',
        color: 'danger',
        class: `border-transparent bg-danger-100 text-danger-600  enabled:hover:bg-danger-200`,
      },

      {
        variant: 'ghost',
        color: 'normal',
        class: `border-transparent bg-transparent text-current enabled:hover:bg-gray-200`,
      },
      {
        variant: 'ghost',
        color: 'primary',
        class: `border-transparent bg-transparent text-primary-600 enabled:hover:bg-primary-200`,
      },
      {
        variant: 'ghost',
        color: 'success',
        class: `border-transparent bg-transparent text-success-600  enabled:hover:bg-success-200`,
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: `border-transparent bg-transparent text-warning-600  enabled:hover:bg-warning-200`,
      },
      {
        variant: 'ghost',
        color: 'danger',
        class: `border-transparent bg-transparent text-danger-600  enabled:hover:bg-danger-200`,
      },
    ],
    variants: {
      block: {
        false: '',
        true: 'w-full',
      },
      disabled: {
        false: '',
        true: 'cursor-not-allowed opacity-60',
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
        true: ['overflow-hidden px-0', 'px-2.5 px-3 px-3.5'],
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
