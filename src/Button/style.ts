import { tw } from '../utils/tw'

// 'primary' | 'success' | 'warning' | 'danger'

type ButtonCssVar = {
  '--btn-bg-color': string
  '--btn-text-color': string
  '--btn-border-color': string
  '--btn-bg-color-hover': string
  '--btn-text-color-hover': string
  '--btn-border-color-hover': string
}

export function createButtonVar(variant: 'default' | 'ghost' | 'secondary', color?: string): ButtonCssVar {
  if (variant === 'ghost') {
    if (color) {
      return {
        '--btn-bg-color': `var(--color-transparent)`,
        '--btn-text-color': `var(--color-${color}-600)`,
        '--btn-border-color': `var(--color-transparent)`,
        '--btn-bg-color-hover': `var(--color-${color}-200)`,
        '--btn-text-color-hover': `var(--btn-text-color)`,
        '--btn-border-color-hover': `var(--btn-border-color)`,
      }
    } else {
      return {
        '--btn-bg-color': `var(--color-transparent)`,
        '--btn-text-color': `var(--color-slate-700)`,
        '--btn-border-color': `var(--color-transparent)`,
        '--btn-bg-color-hover': `var(--color-slate-200)`,
        '--btn-text-color-hover': `var(--btn-text-color)`,
        '--btn-border-color-hover': `var(--btn-border-color)`,
      }
    }
  } else if (variant === 'secondary') {
    if (color) {
      return {
        '--btn-bg-color': `var(--color-${color}-100)`,
        '--btn-text-color': `var(--color-${color}-600)`,
        '--btn-border-color': `var(--color-transparent)`,
        '--btn-bg-color-hover': `var(--color-${color}-200)`,
        '--btn-text-color-hover': `var(--btn-text-color)`,
        '--btn-border-color-hover': `var(--btn-border-color)`,
      }
    } else {
      return {
        '--btn-bg-color': `var(--color-slate-100)`,
        '--btn-text-color': `var(--color-slate-700)`,
        '--btn-border-color': `var(--color-transparent)`,
        '--btn-bg-color-hover': `var(--color-slate-200)`,
        '--btn-text-color-hover': `var(--btn-text-color)`,
        '--btn-border-color-hover': `var(--btn-border-color)`,
      }
    }
  } else {
    if (color) {
      return {
        '--btn-bg-color': `var(--color-${color}-500)`,
        '--btn-text-color': `var(--color-white)`,
        '--btn-border-color': `var(--color-transparent)`,
        '--btn-bg-color-hover': `var(--color-${color}-600)`,
        '--btn-text-color-hover': `var(--btn-text-color)`,
        '--btn-border-color-hover': `var(--btn-border-color)`,
      }
    } else {
      return {
        '--btn-bg-color': `var(--color-white)`,
        '--btn-text-color': `var(--color-slate-700)`,
        '--btn-border-color': `var(--color-slate-300)`,
        '--btn-bg-color-hover': `var(--color-slate-50)`,
        '--btn-text-color-hover': `var(--btn-text-color)`,
        '--btn-border-color-hover': `var(--btn-border-color)`,
      }
    }
  }
}

export const createButtonCss = tw(
  `inline-flex appearance-none items-center justify-center border border-[--btn-border-color] bg-[--btn-bg-color] 
  text-sm font-medium text-[--btn-text-color] outline-[--btn-outline-color]
  transition-colors 
  focus-visible:outline
  focus-visible:outline-2 
  focus-visible:outline-offset-2 
  enabled:hover:border-[--btn-border-color-hover] 
  enabled:hover:bg-[--btn-bg-color-hover] 
  enabled:hover:text-[--btn-text-color-hover]
  `,
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
        false: 'cursor-pointer',
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
        default: 'shadow-sm',
        secondary: 'shadow-sm',
        ghost: '',
      },
    },
  }
)
