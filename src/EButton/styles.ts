import { tw } from '@/utils'
import { tv } from 'tailwind-variants'

const styles = tv({
  base: tw`e-btn inline-flex items-center justify-center text-center font-medium border border-solid border-transparent 
    focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-slate-900
    [&_svg]:w-[1em] [&_svg]:h-[1em] [&_svg]:scale-125 [&_svg+span]:ms-[0.4em]
  `,
  variants: {
    color: {
      default: tw`border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-slate-300`,
      primary: tw`text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500`,
      success: tw`text-white bg-green-500 hover:bg-green-600 focus:ring-green-500 `,
      warning: tw`text-white bg-amber-500 hover:bg-amber-600 focus:ring-amber-500 `,
      error: tw`text-white bg-red-500 hover:bg-red-600 focus:ring-red-500 `,
    },
    size: {
      // 30px / w-7 + 2px
      xs: tw`px-2.5 py-1.5 text-xs h-[calc(theme('height.7')_+_2px)]`,
      // 34px / w-8 + 2px
      sm: tw`px-3 py-2 text-sm leading-4 h-[calc(theme('height.8')_+_2px)]`,
      // 38px / w-9 + 2px
      md: tw`px-4 py-2 text-sm h-[calc(theme('height.9')_+_2px)]`,
      // 42px / w-10 + 2px
      lg: tw`px-4 py-2 text-base h-[calc(theme('height.10')_+_2px)]`,
      // 50px / w-12 + 2px
      xl: tw`px-6 py-3 text-base h-[calc(theme('height.12')_+_2px)]`,
    },
    variant: {
      default: tw`shadow-sm`,
      subtle: tw`shadow-sm`,
      link: tw`bg-transparent border-transparent underline underline-offset-2 hover:bg-transparent`,
    },
    rounded: {
      true: tw`rounded-full`,
      false: tw`rounded-md`,
    },
    square: {
      true: tw`px-0 justify-center overflow-hidden whitespace-nowrap`,
      false: tw``,
    },
    block: {
      true: tw`w-full`,
      false: tw``,
    },
    // type: {
    //   round: tw`rounded-full`,
    //   circle: tw`rounded-full px-0 box-content justify-center overflow-hidden`,
    //   link: tw`shadow-none underline-offset-2 border-transparent bg-transparent hover:underline hover:bg-transparent`,
    // },
    disabled: {
      true: tw`opacity-50 cursor-not-allowed pointer-events-none hover:no-underline`,
      false: tw`cursor-pointer`,
    },
  },
  compoundVariants: [
    { square: true, size: 'xs', class: tw`w-[calc(theme('width.7')_+_2px)]` },
    { square: true, size: 'sm', class: tw`w-[calc(theme('width.8')_+_2px)]` },
    { square: true, size: 'md', class: tw`w-[calc(theme('width.9')_+_2px)]` },
    { square: true, size: 'lg', class: tw`w-[calc(theme('width.10')_+_2px)]` },
    { square: true, size: 'xl', class: tw`w-[calc(theme('width.12')_+_2px)]` },
    { variant: 'link', color: 'default', class: tw`text-slate-700 hover:text-slate-700` },
    { variant: 'link', color: 'primary', class: tw`text-indigo-600 hover:text-indigo-700` },
    { variant: 'link', color: 'success', class: tw`text-green-600 hover:text-green-700` },
    { variant: 'link', color: 'warning', class: tw`text-amber-600 hover:text-amber-700` },
    { variant: 'link', color: 'error', class: tw`text-red-600 hover:text-red-700` },
    {
      variant: 'subtle',
      color: 'default',
      class: tw`text-slate-600 border-transparent bg-slate-100 hover:bg-slate-200`,
    },
    {
      variant: 'subtle',
      color: 'primary',
      class: tw`text-indigo-600  bg-indigo-100 hover:bg-indigo-200`,
    },
    {
      variant: 'subtle',
      color: 'success',
      class: tw`text-green-600  bg-green-100 hover:bg-green-200`,
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: tw`text-amber-600  bg-amber-100 hover:bg-amber-200`,
    },
    { variant: 'subtle', color: 'error', class: tw`text-red-600  bg-red-100 hover:bg-red-200` },
  ],
})

export default styles
