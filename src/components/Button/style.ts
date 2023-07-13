import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: `t-button inline-flex border shadow-sm text-center justify-center items-center font-medium
  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 
  `,
  variants: {
    variant: {
      outlined: 'bg-white dark:bg-slate-900',
      solid: 'text-white border-transparent',
      soft: `border-transparent`,
      plain: `-shadow-sm border-transparent`,
      link: '-shadow-sm bg-transparent border-transparent underline decoration-2 underline-offset-2',
    },
    color: {
      default: 'focus-visible:outline-primary-500',
      primary: 'focus-visible:outline-primary-500',
      success: 'focus-visible:outline-success-500',
      warning: 'focus-visible:outline-warning-500',
      error: 'focus-visible:outline-error-500',
    },
    size: {
      xs: '[--t-btn-h:calc(1.75rem+2px)] h-[--t-btn-h] text-xs/3 px-2',
      sm: '[--t-btn-h:calc(2rem+2px)] h-[--t-btn-h] text-xs/4 px-3',
      md: '[--t-btn-h:calc(2.25rem+2px)] h-[--t-btn-h] text-sm/5 px-4',
      lg: '[--t-btn-h:calc(2.5rem+2px)] h-[--t-btn-h] text-base/6 px-5',
      xl: '[--t-btn-h:calc(2.75rem+2px)] h-[--t-btn-h] text-base/7 px-6',
    },
    block: {
      true: 'w-full',
    },
    rounded: {
      false: 'rounded-md',
      true: 'rounded-full',
    },
    square: {
      true: 'px-0 w-[--t-btn-h]',
    },
    disabled: {
      false: 'cursor-pointer',
      true: ' opacity-50 pointer-events-none',
    },
  },
  compoundVariants: [
    // outlined
    {
      variant: 'outlined',
      color: 'default',
      class: `text-gray-700 border-gray-300 hover:bg-gray-50  
        dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white dark:border-gray-700 dark:border-gray-600 `,
    },
    {
      variant: 'outlined',
      color: 'primary',
      class: `text-primary-500 border-primary-400 hover:bg-primary-100
      dark:text-primary-300 dark:hover:bg-primary-700 dark:hover:text-primary-200 dark:border-primary-600 dark:hover:border-primary-500`,
    },
    {
      variant: 'outlined',
      color: 'success',
      class: `text-success-500 border-success-400 hover:bg-success-100   
        dark:text-success-300 dark:hover:bg-success-700 dark:hover:text-success-200 dark:border-success-600 dark:hover:border-success-500`,
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: `text-warning-500 border-warning-400 hover:bg-warning-100   
        dark:text-warning-300 dark:hover:bg-warning-700 dark:hover:text-warning-200 dark:border-warning-600 dark:hover:border-warning-500`,
    },
    {
      variant: 'outlined',
      color: 'error',
      class: `text-error-500 border-error-400 hover:bg-error-100   
        dark:text-error-300 dark:hover:bg-error-700 dark:hover:text-error-200 dark:border-error-600 dark:hover:border-error-500`,
    },
    // solid
    {
      variant: 'solid',
      color: 'default',
      class: 'bg-gray-900 hover:bg-gray-700 dark:text-gray-700 dark:bg-gray-100 dark:hover:bg-white',
    },
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400',
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-success-500 hover:bg-success-600 dark:hover:bg-success-400',
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-warning-500 hover:bg-warning-600 dark:hover:bg-warning-400',
    },
    {
      variant: 'solid',
      color: 'error',
      class: 'bg-error-500 hover:bg-error-600 dark:hover:bg-error-400',
    },
    // soft
    {
      variant: 'soft',
      color: 'default',
      class: 'text-gray-700 bg-gray-100 hover:bg-gray-200',
    },
    {
      variant: 'soft',
      color: 'primary',
      class: 'text-primary-600 bg-primary-100 hover:bg-primary-200',
    },
    {
      variant: 'soft',
      color: 'success',
      class: 'text-success-600 bg-success-100 hover:bg-success-200',
    },
    {
      variant: 'soft',
      color: 'warning',
      class: 'text-warning-600 bg-warning-100 hover:bg-warning-200',
    },
    {
      variant: 'soft',
      color: 'error',
      class: 'text-error-600 bg-error-100 hover:bg-error-200',
    },
    // plain
    {
      variant: 'plain',
      color: 'default',
      class: 'text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:text-gray-400 dark:hover:bg-gray-700',
    },
    {
      variant: 'plain',
      color: 'primary',
      class: 'text-primary-500 hover:bg-primary-100 dark:hover:text-primary-400 dark:hover:bg-primary-100',
    },
    {
      variant: 'plain',
      color: 'success',
      class: 'text-success-500 hover:bg-success-100 dark:hover:text-success-400 dark:hover:bg-success-100',
    },
    {
      variant: 'plain',
      color: 'warning',
      class: 'text-warning-500 hover:bg-warning-100 dark:hover:text-warning-400 dark:hover:bg-warning-100',
    },
    {
      variant: 'plain',
      color: 'error',
      class: 'text-error-500 hover:bg-error-100 dark:hover:text-error-400 dark:hover:bg-error-100',
    },
    // link
    {
      variant: 'link',
      color: 'default',
      class: 'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
    },
    {
      variant: 'link',
      color: 'primary',
      class: 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
    },
    {
      variant: 'link',
      color: 'success',
      class: 'text-success-500 hover:text-success-600 dark:hover:text-success-400',
    },
    {
      variant: 'link',
      color: 'warning',
      class: 'text-warning-500 hover:text-warning-600 dark:hover:text-warning-400',
    },
    {
      variant: 'link',
      color: 'error',
      class: 'text-error-500 hover:text-error-600 dark:hover:text-error-400',
    },
  ],
})
