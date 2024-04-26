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
