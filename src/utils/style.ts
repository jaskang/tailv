import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import type { Color, ColorPath } from '@/theme/colors'
import type { Flat } from '@/types'

export type CssVars<N extends string, T extends string> = Record<`--${N}-${T}`, string>

export function createCssVar<N extends string, T extends string>(name: N, cssVars: Record<T, string>) {
  const result = Object.entries(cssVars).reduce((acc, [key, value]) => {
    // @ts-ignore
    acc[`--${name}-${key}`] = value
    return acc
  }, {} as Flat<CssVars<N, T>>)
  return result
}

export function createColorVar<N extends string, T extends string>(name: N, cssVars: Record<T, Color>) {
  const result = Object.entries(cssVars).reduce((acc, [key, value]) => {
    // @ts-ignore
    acc[`--${name}-${key}`] = cvar(value)
    return acc
  }, {} as Flat<CssVars<N, T>>)
  return result
}

export function useColorVar<N extends string, T extends string>(name: N, getter: MaybeRefOrGetter<Record<T, Color>>) {
  return computed(() => createColorVar(name, toValue(getter)))
}

export function cvar(color: Color) {
  return `var(--t-c-${color.replace('.', '-')})`
}
