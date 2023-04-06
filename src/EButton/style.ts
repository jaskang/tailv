import { tw } from '@/utils'
import { tv } from 'tailwind-variants'

const btnStyles = tv({
  base: tw`inline-flex items-center justify-center text-center font-medium border border-solid border-transparent 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:cursor-not-allowed`,
  variants: {
    color: {
      default: tw`border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500`,
      primary: tw`text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500`,
      success: tw`text-white bg-green-500 hover:bg-green-700 focus:ring-green-500`,
      warning: tw`text-white bg-amber-500 hover:bg-amber-700 focus:ring-amber-500`,
      error: tw`text-white bg-red-500 hover:bg-red-700 focus:ring-red-500`,
    },
    size: {
      // 30px / w-7 + 2px
      xs: tw`px-2.5 py-1.5 text-xs`,
      // 34px / w-8 + 2px
      sm: tw`px-3 py-2 text-sm leading-4 `,
      // 38px / w-9 + 2px
      md: tw`px-4 py-2 text-sm`,
      // 42px / w-10 + 2px
      lg: tw`px-4 py-2 text-base `,
      // 50px / w-12 + 2px
      xl: tw`px-6 py-3 text-base`,
    },
    variant: {
      subtle: tw`text-sm`,
      text: tw`bg-transparent border-none`,
    },
    rounded: {
      true: tw`rounded-full`,
      false: tw`rounded-md`,
    },
    block: {
      true: tw`w-full`,
      false: tw``,
    },
    type: {
      round: tw`rounded-full`,
      circle: tw`rounded-full px-0 box-content justify-center overflow-hidden`,
      link: tw`shadow-none underline-offset-2 border-transparent bg-transparent hover:underline hover:bg-transparent`,
    },
    disabled: {
      true: tw`opacity-50 cursor-not-allowed  hover:no-underline`,
    },
    inGroup: {
      true: tw`rounded-none -ml-px first:ml-0 first:rounded-l-md first last:rounded-r-md focus:ring-1 focus:ring-offset-0 focus:border-indigo-500 focus:z-10`,
    },
  },
  compoundVariants: [
    { type: 'circle', size: 'xs', class: tw`w-7` },
    { type: 'circle', size: 'sm', class: tw`w-8` },
    { type: 'circle', size: 'md', class: tw`w-9` },
    { type: 'circle', size: 'lg', class: tw`w-10` },
    { type: 'circle', size: 'xl', class: tw`w-12` },
    { type: 'link', color: 'default', class: tw`text-gray-700 hover:text-gray-700` },
    { type: 'link', color: 'primary', class: tw`text-indigo-600 hover:text-indigo-700` },
    { type: 'link', color: 'success', class: tw`text-green-600 hover:text-green-700` },
    { type: 'link', color: 'warning', class: tw`text-amber-600 hover:text-amber-700` },
    { type: 'link', color: 'error', class: tw`text-red-600 hover:text-red-700` },
  ],
})

export default btnStyles
