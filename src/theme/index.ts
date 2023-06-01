import { computed, ref } from 'vue'
import { type ColorKey, COLORS, type ColorAlias, type ColorMap, type Color } from './colors'

export { COLORS, type ColorKey }

export type Theme = {
  colors: {
    [key in ColorAlias]: ColorKey
  }
}

export function useTheme() {
  const theme = ref<Theme>({
    colors: {
      primary: 'indigo',
      success: 'green',
      warning: 'amber',
      error: 'red',
    },
  })

  const aliasColors = computed(() =>
    (Object.keys(theme.value.colors) as ColorAlias[]).reduce((acc, alias) => {
      acc[alias] = COLORS[theme.value.colors[alias]]
      return acc
    }, {} as { [key in ColorAlias]: ColorMap })
  )

  const getColorKey = (color: Color) => {
    // @ts-ignore
    return (theme.value.colors[color] || color) as ColorKey
  }
  const colors = computed(() => {
    return {
      ...COLORS,
      ...aliasColors.value,
    }
  })
  return { colors, getColorKey }
}
