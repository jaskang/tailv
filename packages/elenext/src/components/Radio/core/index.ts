import { InjectionKey, Ref } from 'vue'
import { ParentProvide } from '../../../hooks/useParent'

export interface RadioGroupProvide {
  modelValue: Ref<any>
  disabled: Ref<boolean>
  change: (value: any) => void
}
export const RADIOGROUP_IJK: InjectionKey<ParentProvide<RadioGroupProvide>> = Symbol('ERadioGroup')
