import { type InjectionKey, type Ref, inject, provide, toRef } from 'vue'
import type { Theme } from '@/theme'

export type Config = {
  dark: boolean
  theme: Theme
}

export const configProviderKey = Symbol('TConfigProviderKey') as InjectionKey<Ref<Config>>

const DEFAULT_CONFIG: Config = {
  dark: false,
  theme: {
    alias: {
      error: 'red',
      primary: 'indigo',
      success: 'green',
      warning: 'amber',
    },
  },
}

export function useConfig() {
  const config = inject(configProviderKey, toRef(DEFAULT_CONFIG))
  return config
}
