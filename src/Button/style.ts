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
        class: ` border-slate-300 bg-white text-current enabled:hover:bg-slate-50`,
      },
      {
        variant: 'default',
        color: 'primary',
        class: `bg-primary-500 enabled:hover:bg-primary-600 border-transparent text-white`,
      },
      {
        variant: 'default',
        color: 'success',
        class: `bg-success-500 enabled:hover:bg-success-600 border-transparent  text-white`,
      },
      {
        variant: 'default',
        color: 'warning',
        class: `bg-warning-500 enabled:hover:bg-warning-600 border-transparent  text-white`,
      },
      {
        variant: 'default',
        color: 'danger',
        class: `bg-danger-500 enabled:hover:bg-danger-600 border-transparent  text-white`,
      },

      {
        variant: 'secondary',
        color: 'normal',
        class: `border-transparent bg-slate-100 text-current enabled:hover:bg-slate-200`,
      },
      {
        variant: 'secondary',
        color: 'primary',
        class: `bg-primary-100 text-primary-600 enabled:hover:bg-primary-200 border-transparent`,
      },
      {
        variant: 'secondary',
        color: 'success',
        class: `bg-success-100 text-success-600 enabled:hover:bg-success-200  border-transparent`,
      },
      {
        variant: 'secondary',
        color: 'warning',
        class: `bg-warning-100 text-warning-600 enabled:hover:bg-warning-200  border-transparent`,
      },
      {
        variant: 'secondary',
        color: 'danger',
        class: `bg-danger-100 text-danger-600 enabled:hover:bg-danger-200  border-transparent`,
      },

      {
        variant: 'ghost',
        color: 'normal',
        class: `border-transparent bg-transparent text-current enabled:hover:bg-slate-200`,
      },
      {
        variant: 'ghost',
        color: 'primary',
        class: `text-primary-600 enabled:hover:bg-primary-200 border-transparent bg-transparent`,
      },
      {
        variant: 'ghost',
        color: 'success',
        class: `text-success-600 enabled:hover:bg-success-200 border-transparent  bg-transparent`,
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: `text-warning-600 enabled:hover:bg-warning-200 border-transparent  bg-transparent`,
      },
      {
        variant: 'ghost',
        color: 'danger',
        class: `text-danger-600 enabled:hover:bg-danger-200 border-transparent  bg-transparent`,
      },
    ],
    variants: {
      block: {
        false: '',
        true: 'w-full',
      },
      disabled: {
        false: 'cursor-pointer',
        true: 'cursor-not-allowed opacity-60',
      },
      pill: {
        false: 'rounded-md',
        true: 'rounded-full',
      },
      size: {
        lg: ['h-10 py-2.5 px-3.5', ''],
        md: ['h-9 py-2 px-3', ''],
        sm: ['h-8 py-1.5 px-2.5', ''],
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
