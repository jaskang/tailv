import type { InjectionKey, ComputedRef } from 'vue'

export const RadioGroupInjectKey: InjectionKey<{
  value: ComputedRef<unknown>
  select: (val: unknown) => void
}> = Symbol('CheckboxGroupInjectKey')
