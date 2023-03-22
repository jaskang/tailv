import { tv } from 'tailwind-variants'

const style = tv({
  base: 'inline-flex items-center font-medium rounded-md border border-solid  border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    color: {
      default: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500',
      primary: 'text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500',
      success: 'text-white bg-green-500 hover:bg-green-700 focus:ring-green-500',
      warning: 'text-white bg-amber-500 hover:bg-amber-700 focus:ring-amber-500',
      error: 'text-white bg-red-500 hover:bg-red-700 focus:ring-red-500',
    },
    size: {
      xs: 'px-2.5 py-1.5 text-xs', // 30px / w-7 + 2px
      sm: 'px-3 py-2 text-sm leading-4 ', // 34px / w-8 + 2px
      md: 'px-4 py-2 text-sm', // 38px / w-9 + 2px
      lg: 'px-4 py-2 text-base ', // 42px / w-10 + 2px
      xl: 'px-6 py-3 text-base', // 50px / w-12 + 2px
    },
    type: {
      round: 'rounded-full',
      circle: 'rounded-full px-0 box-content justify-center overflow-hidden',
      link: 'shadow-none underline-offset-2 border-transparent bg-transparent hover:underline hover:bg-transparent',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed  hover:no-underline',
    },
    inGroup: {
      true: 'rounded-none -ml-px first:ml-0 first:rounded-l-md first last:rounded-r-md focus:ring-1 focus:ring-offset-0 focus:border-indigo-500 focus:z-10',
    },
  },
  compoundVariants: [
    { type: 'circle', size: 'xs', class: 'w-7' },
    { type: 'circle', size: 'sm', class: 'w-8' },
    { type: 'circle', size: 'md', class: 'w-9' },
    { type: 'circle', size: 'lg', class: 'w-10' },
    { type: 'circle', size: 'xl', class: 'w-12' },
    { type: 'link', color: 'default', class: 'text-gray-700 hover:text-gray-700' },
    { type: 'link', color: 'primary', class: 'text-indigo-600 hover:text-indigo-700' },
    { type: 'link', color: 'success', class: 'text-green-600 hover:text-green-700' },
    { type: 'link', color: 'warning', class: 'text-amber-600 hover:text-amber-700' },
    { type: 'link', color: 'error', class: 'text-red-600 hover:text-red-700' },
  ],
})

export default style
