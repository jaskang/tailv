// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/color.js

export type ColorLv =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950'

export type SystemColor = 'inherit' | 'transparent' | 'current' | 'black' | 'white'

export type AliasColor = 'primary' | 'success' | 'warning' | 'error'

export type PaletteColor =
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

export type Color = AliasColor | PaletteColor

export type ColorPath = `${Color}${ColorLv}`

export type ColorVar = SystemColor | ColorPath
