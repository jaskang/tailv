import { ComputedRef, computed } from 'vue'

export type ColorAlias = 'primary' | 'success' | 'warning' | 'error'

const COLORS = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const

export type ColorName = (typeof COLORS)[number]

export type ColorLv = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950'

export type CssVars<N extends string, T extends string> = {
  [k in `--${N}-${T}`]: string
}

export function createVars(name: string, getter: Record<string, string>) {
  return Object.entries(getter).reduce(
    (acc, [key, val]) => {
      const colorVal = val.startsWith('--') ? `var(${val})` : val
      acc[`--${name}-${key}`] = colorVal
      return acc
    },
    {} as Record<string, string>
  )
}

export function cvar(val: `${ColorName}${ColorLv}`) {
  return `--z-${val}`
}

export function useStyle<T extends Record<string, unknown>>(getter: () => T) {
  const val = computed(getter)
  return Object.keys(val.value).reduce(
    (acc, key: keyof T) => {
      acc[key] = computed(() => val.value[key])
      return acc
    },
    {} as {
      [K in keyof T]: ComputedRef<T[K]>
    }
  )
}

/**
 * 是否是灰度色
 * @param color
 * @returns
 */
export function isGrayscaleColor(color: string) {
  return ['white', 'slate', 'gray', 'zinc', 'neutral', 'stone'].includes(color)
}
