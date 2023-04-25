import type { InjectionKey } from 'vue'

export const RadioGroupContext: InjectionKey<{
  value: string
}> = Symbol('RadioGroupContext')
