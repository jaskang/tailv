import { tw } from '@/utils'
import { tv } from 'tailwind-variants'

const style = tv({
  slots: {
    base: tw`e-switch relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full 
      border-2 border-solid border-transparent transition-colors
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`,
    thumb: tw`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`,
  },
  variants: {
    enabled: {
      true: {
        base: tw`bg-indigo-600 border-indigo-600`,
        thumb: tw`translate-x-5`,
      },
      false: {
        base: tw`bg-gray-200 border-gray-200`,
        thumb: tw`translate-x-0`,
      },
    },
    disabled: {
      true: {
        base: tw`pointer-events-none bg-gray-200 border-gray-200 cursor-not-allowed`,
      },
      false: {
        base: tw``,
      },
    },
  },
})

export default style
