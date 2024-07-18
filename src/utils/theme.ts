export type ColorAlias = 'primary' | 'success' | 'warning' | 'danger'
export type ColorBuiltin =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'

export type ColorLvl = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950'

export type ColorName = ColorAlias | ColorBuiltin
export type Size = 'sm' | 'md' | 'lg'

export type Status = 'primary' | 'success' | 'warning' | 'danger'

export type InputValue = string | number

export function cvar(val: `${ColorName}-${ColorLvl}`) {
  return `var(--color-${val})`
}

// .rt-TextAreaInput::-webkit-scrollbar {
//   width: var(--space-3);
//   height: var(--space-3)
// }

// .rt-TextAreaInput::-webkit-scrollbar-thumb,.rt-TextAreaInput::-webkit-scrollbar-track {
//   background-clip: content-box;
//   border: var(--space-1) solid transparent;
//   border-radius: var(--space-3)
// }

// .rt-TextAreaInput::-webkit-scrollbar-track {
//   background-color: var(--gray-a3)
// }

// .rt-TextAreaInput::-webkit-scrollbar-thumb {
//   background-color: var(--gray-a8)
// }

// @media (hover: hover) {
//   :where(.rt-TextAreaInput:not(:disabled))::-webkit-scrollbar-thumb:hover {
//       background-color:var(--gray-a9)
//   }
// }
export const BUILTIN_CLASS = {
  scrollbar:
    '[&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-clip-content [&::-webkit-scrollbar-track]:border-4 [&::-webkit-scrollbar-track]:border-base-border [&::-webkit-scrollbar-track]:border-transparent [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-track]:bg-gray-200 dark:[&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar-thumb]:bg-clip-content [&::-webkit-scrollbar-thumb]:border-4  [&::-webkit-scrollbar-thumb]:border-base-border  [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-gray-500 hover:[&:not(:disabled)::-webkit-scrollbar-thumb]:bg-gray-800 dark:hover:[&:not(:disabled)::-webkit-scrollbar-thumb]:bg-gray-200',
  inputBorder: 'border-gray-200 focus:border-gray-200 dark:border-gray-700 dark:focus:border-gray-700',
  inputTransparentBorder: 'border-transparent focus:border-transparent',
  focusRing: 'ring-offset-white dark:ring-offset-gray-900 focus-visible:ring-1 focus-visible:ring-primary-500 ',
}
