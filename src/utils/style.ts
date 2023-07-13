import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import type { Flat } from '@/types'

export type CssVars<N extends string, T extends readonly string[]> = Record<`--${N}-${T[number]}`, string>

export function createCssVar<N extends string, T extends Record<string, string>>(name: N, cssVars: T) {
  const result = Object.entries(cssVars).reduce((acc, [key, value]) => {
    // @ts-ignore
    acc[`--${name}-${key}`] = value
    return acc
  }, {} as Flat<CssVars<N, T>>)
  return result
}

export function useCssVar<N extends string, T extends Record<string, string>>(name: N, getter: MaybeRefOrGetter<T>) {
  return computed(() => createCssVar(name, toValue(getter)))
}
