import { type Flat } from 'kotl'

import { type ColorVar } from './color'

export type StyleVars<N extends string, T extends string> = {
  [k in `--${N}-${T}`]: string
}

export type CssVars = {
  [key: string]: ColorVar | string
}

export function createStyleVar<N extends string, T extends CssVars>(name: N) {
  return (cssVars: Partial<T>) => {
    const result = Object.entries(cssVars).reduce(
      (acc, [key, value]) => {
        const colorVal = cvar(value)
        // @ts-expect-error
        acc[`--${name}-${key}`] = colorVal || value
        return acc
      },
      {} as Flat<StyleVars<N, Exclude<keyof T, number | symbol>>>
    )
    return result
  }
}

export function createColorVars(name: string, getter: Record<string, ColorVar>) {
  return Object.entries(getter).reduce(
    (acc, [key, val]) => {
      const colorVal = cvar(val)
      // @ts-ignore
      acc[`--${name}-${key}`] = colorVal || value
      return acc
    },
    {} as Record<string, string>
  )
}

export function cname(color: ColorVar) {
  return `--z-${color}`
}
export function cvar(color: ColorVar) {
  return `var(--z-${color})`
}
