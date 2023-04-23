import { ref } from 'vue'
import { colors, type ColorKey } from './colors'

export type Theme = {
  colors: {
    primary: ColorKey
    success: ColorKey
    warning: ColorKey
    error: ColorKey
  }
}

export type ColorAlias = keyof Theme['colors']

export function useTheme() {
  const theme = ref<Theme>({
    colors: {
      primary: 'indigo',
      success: 'green',
      warning: 'amber',
      error: 'red',
    },
  })
  const getColor = (key?: ColorAlias | ColorKey): ColorKey | undefined => {
    if (key) {
      if (colors[key as ColorKey]) {
        return key as ColorKey
      }
      return theme.value.colors[key as ColorAlias]
    }
    return undefined
  }
  return { theme, getColor }
}
