import { computed, inject, ref } from 'vue'
import { type ColorKey, COLORS, type ColorAlias, type Color, type AliasColorMap, type ColorMap } from './colors'
import { useConfig } from '@/components/ConfigProvider'

export { type SpaceType, type SizeType, getSpace } from './space'

export type { Color, ColorMap, ColorKey }

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

  const getColorKey = (color?: string) => {
    if (!color) return null
    if (Object.keys(COLORS).includes(color)) {
      return color as ColorKey
    } else {
      // @ts-expect-error
      return (theme.value.alias[color] as ColorKey) || null
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
