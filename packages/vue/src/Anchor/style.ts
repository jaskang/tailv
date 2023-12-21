import { tw } from '../utils/tw'

const anchorItemCss = tw('relative py-1.5 block overflow-hidden text-ellipsis whitespace-nowrap', {
  variants: {
    disabled: {
      true: 'text-primary-500 font-medium',
      false: 'text-gray-700',
    },
  },
})

export function createAnchorItemStyle() {
  return {
    css: 'cursor-pointer pl-4',
    itemStyler: (disabled: boolean) => anchorItemCss({ disabled }),
  }
}

export function createAnchorStyle() {
  return {
    warper: 'relative',
    css: "before:content-[' '] relative ps-[2px] text-sm before:absolute before:start-0 before:top-0 before:h-full before:border-s-2 before:border-s-gray-100",
    cursor: 'bg-primary-500 absolute start-0 top-1 inline-block h-6 w-[2px] transition-transform z-10',
    group: 'mb-8',
    groupTitle: 'mb-3 text-sm font-semibold text-slate-900 dark:text-slate-200',
    itemWarper: 'cursor-pointer px-4 py-1.5',
  }
}
