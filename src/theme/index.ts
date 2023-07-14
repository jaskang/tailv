import { computed, inject, ref } from 'vue'

import { useConfig } from '@/components/ConfigProvider'

import { type AliasColorMap, type Color, type ColorAlias, type ColorKey, type ColorMap, COLORS } from './colors'

export { getSpace, type SizeType, type SpaceType } from './space'
export type { Color, ColorKey, ColorMap }

export { COLORS }

export type Theme = {
  alias: {
    [key in ColorAlias]: ColorKey
  }
}

export function useTheme() {
  const config = useConfig()
  const theme = computed(() => config.value.theme)

  const aliasColors = computed(() =>
    (['primary', 'success', 'warning', 'error'] as ColorAlias[]).reduce((acc, k) => {
      acc[k] = COLORS[theme.value.alias[k]]
      return acc
    }, {} as ColorMap)
  )

  const getColorKey = (alias?: string) => {
    if (!alias) return null
    if (Object.keys(COLORS).includes(alias)) {
      return alias as ColorKey
    } else {
      return (theme.value.alias[alias as ColorAlias] as ColorKey) || null
    }
  }

  const colors = computed(() => {
    return {
      ...COLORS,
      ...aliasColors.value,
    } as ColorMap
  })
  return { colors, getColorKey }
}
