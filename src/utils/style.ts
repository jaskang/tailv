import { computed, type MaybeRefOrGetter, toValue } from 'vue'

import type { ColorPath, ColorSimpleName } from '@/theme/colors'
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

export function useCssVar<N extends string, T extends string>(name: N, getter: MaybeRefOrGetter<Record<T, string>>) {
  return computed(() => createCssVar(name, toValue(getter)))
}

export function cvar(color: ColorPath | ColorSimpleName) {
  return `var(--tw-color-${color.replace('.', '-')})`
}
