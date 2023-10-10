import { computed, inject, type InjectionKey, type Ref, toRef } from 'vue'

export type Config = {
  theme: {}
}

export const ConfigProviderKey = Symbol('ConfigProviderKey') as InjectionKey<Ref<Config>>

const PROVIDER_CONFIG: Config = {
  theme: {},
}

export function useConfig() {
  const config = inject(ConfigProviderKey, toRef(PROVIDER_CONFIG))
  const theme = computed(() => config.value.theme)
  return { theme }
}
