import { InjectionKey } from 'vue'

export const layoutInjectKey: InjectionKey<{
  setAside: () => void
}> = Symbol('Layout')
