import type { ComputedRef, InjectionKey } from 'vue'

export interface RadioGroupContext {
  props: ComputedRef<{
    value: any
    name: string
    disabled: boolean
  }>
  onRadioChange: (e: any) => void
}
