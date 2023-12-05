import { tw } from './utils/tw'

export const createRingInputStyle = tw(
  `flex items-center rounded-md text-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-inset`,
  {
    variants: {
      disabled: {
        false: 'cursor-pointer bg-white ring-gray-300',
        true: 'cursor-not-allowed bg-gray-50 text-gray-500 ring-gray-200',
      },
    },
  }
)
