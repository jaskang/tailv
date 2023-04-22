import { ref } from 'vue'
import type { ColorKey } from './colors'

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
  const getColor = (key?: ColorAlias): ColorKey | undefined => {
    return key ? theme.value.colors[key] : undefined
  }
  return { theme, getColor }
}
