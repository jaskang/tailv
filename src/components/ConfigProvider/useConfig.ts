import type { Theme } from '@/theme'
import { inject, provide, type InjectionKey, type Ref, toRef } from 'vue'

export type Config = {
  dark: boolean
  theme: Theme
}

export const configProviderKey = Symbol('TConfigProviderKey') as InjectionKey<Ref<Config>>

const DEFAULT_CONFIG: Config = {
  dark: false,
  theme: {
    alias: {
      primary: 'indigo',
      success: 'green',
      warning: 'amber',
      error: 'red',
    },
  },
}

export function useConfig() {
  const config = inject(configProviderKey, toRef(DEFAULT_CONFIG))
  return config
}
