import { computed } from 'vue'

import { useConfig } from '@/components/ConfigProvider'

import { type AliasColor, type ColorName, type PaletteColor, type UserColor } from './colors'

export type Theme = {
  alias: {
    [key in AliasColor]: PaletteColor
  }
}

export function useTheme() {
  const config = useConfig()
  const theme = computed(() => config.value.theme)
  const getColorName = (color: UserColor) => {
    // @ts-ignore
    return (theme.value.alias[color] || color) as PaletteColor
  }
  return { getColorName }
}
