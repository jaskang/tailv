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
  const getColorKey = (key: ColorAlias | ColorKey = 'primary'): ColorKey => {
    if (colors[key as ColorKey]) {
      return key as ColorKey
    }
    return theme.value.colors[key as ColorAlias] || theme.value.colors.primary
  }
  const getColor = (key: ColorAlias | ColorKey = 'primary') => {
    return colors[getColorKey(key)]
  }
  return { theme, getColorKey, getColor }
}
