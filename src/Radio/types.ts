import type { InjectionKey, ComputedRef, Ref } from 'vue'

export const RadioGroupInjectKey: InjectionKey<{
  size: Ref<'sm' | 'md' | 'lg'>
  value: ComputedRef<unknown>
  select: (val: unknown) => void
}> = Symbol('CheckboxGroupInjectKey')
