import { computed, inject, type InjectionKey, type Ref, toRef } from 'vue'

import type { Color, ColorLv } from '@/theme/colors'
import { COLORS } from '@/theme/colors'

export type Config = {
  theme: {
    colors: {
      [key in Color]: { [key in ColorLv]: string }
    }
  }
}

export const ConfigProviderKey = Symbol('ConfigProviderKey') as InjectionKey<Ref<Config>>

const PROVIDER_CONFIG: Config = {
  theme: {
    colors: COLORS,
  },
}

export function useConfig() {
  const config = inject(ConfigProviderKey, toRef(PROVIDER_CONFIG))
  const theme = computed(() => config.value.theme)
  const colors = computed(() => config.value.theme.colors)
  return { theme, colors }
}
