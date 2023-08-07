import { inject, type InjectionKey, type Ref, toRef } from 'vue'

import type { Theme } from '@/theme'

export type Config = {
  theme: Theme
}

export const configProviderKey = Symbol('TConfigProviderKey') as InjectionKey<Ref<Config>>

const PROVIDER_CONFIG: Config = {
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
  const config = inject(configProviderKey, toRef(PROVIDER_CONFIG))
  return config
}
