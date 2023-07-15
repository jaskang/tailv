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

  const colors = computed(() => COLORS)
  return { colors }
}
