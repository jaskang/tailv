import { InjectionKey, Ref } from 'vue'
import { ParentProvide } from '../../../hooks/useParent'

export interface RadioGroupProvide {
  modelValue: Ref<string | number>
  disabled: Ref<boolean>
  change: (value: string | number) => void
}
export const RADIOGROUP_IJK: InjectionKey<ParentProvide<RadioGroupProvide>> = Symbol('ERadioGroup')
