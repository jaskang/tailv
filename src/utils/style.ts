import type { Flat } from 'kotl'
import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import { useTheme } from '@/theme'
import {
  ALIAS_COLOR_REGEXP,
  getColorValue,
  type SystemColor,
  type UserColorPath,
  type VarColor,
} from '@/theme/colors'

export type StyleVars<N extends string, T extends string> = {
  [k in `--${N}-${T}`]: string
}

export type CssVars = {
  [key: string]: UserColorPath | SystemColor | string
}

export function createStyleVar<N extends string, T extends CssVars>(name: N) {
  return (cssVars: Partial<T>) => {
    const result = Object.entries(cssVars).reduce(
      (acc, [key, value]) => {
        const colorVal = getColorValue(value)
        // @ts-ignore
        acc[`--${name}-${key}`] = colorVal || value
        return acc
      },
      {} as Flat<StyleVars<N, Exclude<keyof T, number | symbol>>>
    )
    return result
  }
}

export function useColorVars<N extends string, T extends { [key: string]: VarColor }>(
  name: N,
  getter: MaybeRefOrGetter<T>
) {
  const { convertAliasColor } = useTheme()
  return computed(() =>
    Object.entries(toValue(getter)).reduce(
      (acc, [key, val]) => {
        const value = val.replace(
          ALIAS_COLOR_REGEXP,
          (m, p1, p2) => `${convertAliasColor(p1)}.${p2}`
        )
        const colorVal = getColorValue(value)
        // @ts-ignore
        acc[`--${name}-${key}`] = colorVal || value
        return acc
      },
      {} as Flat<StyleVars<N, Exclude<keyof T, number | symbol>>>
    )
  )
}
