import { tw } from './utils/tw'

const anchorItemCss = tw(
  'relative mb-1 block overflow-hidden text-ellipsis whitespace-nowrap only:mb-0',
  {
    variants: {
      disabled: {
        true: 'text-primary-500 font-medium',
        false: 'text-gray-700',
      },
    },
  }
)

export function createAnchorItemStyle() {
  return {
    css: 'cursor-pointer px-4 py-1.5',
    itemStyler: (disabled: boolean) => anchorItemCss({ disabled }),
  }
}

export function createAnchorStyle() {
  return {
    warper: '',
    css: "before:content-[' '] relative ps-[2px] text-sm before:absolute before:start-0 before:top-0 before:h-full before:border-s-2 before:border-s-gray-100",
    cursor: 'bg-primary-500 absolute start-0 top-1 inline-block h-6 w-[2px] transition-transform',
    itemWarper: 'cursor-pointer px-4 py-1.5',
    itemCreator: (disabled: boolean) => anchorItemCss({ disabled }),
  }
}
