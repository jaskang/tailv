import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import { useTheme } from '@/theme'
import {
  ALIAS_COLOR_REGEXP,
  type Color,
  type CssVarColor,
  getColor,
  type SystemColor,
  type UserColor,
} from '@/theme/colors'
import type { Flat } from '@/types'

export type StyleVars<N extends string, T extends string> = {
  [k in `--${N}-${T}`]: string
}

export type ComponentVar = {
  [key: string]: Color | SystemColor | string
}

export function createStyleVar<N extends string, T extends ComponentVar>(name: N) {
  return (cssVars: T) => {
    const result = Object.entries(cssVars).reduce((acc, [key, value]) => {
      console.log('key', key, 'value', value)
      const colorVal = getColor(value as Color)
      // @ts-ignore
      acc[`--${name}-${key}`] = colorVal || value
      return acc
    }, {} as Flat<StyleVars<N, Exclude<keyof T, number | symbol>>>)
    return result
  }
}

export function useColorVars<N extends string, T extends { [key: string]: CssVarColor }>(
  name: N,
  getter: MaybeRefOrGetter<T>
) {
  const { getColorName } = useTheme()
  return computed(() =>
    Object.entries(toValue(getter)).reduce((acc, [key, val]) => {
      const value = val.replace(ALIAS_COLOR_REGEXP, (m, p1, p2) => `${getColorName(p1)}.${p2}`)
      const colorVal = getColor(value as Color)
      // @ts-ignore
      acc[`--${name}-${key}`] = colorVal || value
      return acc
    }, {} as Flat<StyleVars<N, Exclude<keyof T, number | symbol>>>)
  )
}
export function cvar(color: string) {
  return `var(#${color})`
}
