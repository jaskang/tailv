import { type InjectionKey, type ComputedRef } from 'vue'

export const CheckboxGroupInjectKey: InjectionKey<{
  value: ComputedRef<unknown[]>
  add: (val: unknown) => void
  remove: (val: unknown) => void
}> = Symbol('CheckboxGroupInjectKey')
