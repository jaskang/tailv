import { InjectionKey, inject } from 'vue'

export const ElGlobalConfigSymbol: InjectionKey<{
  size?: 'medium' | 'small' | 'mini'
}> = Symbol()

export function useGlobal() {
  return inject(ElGlobalConfigSymbol, null)
}
