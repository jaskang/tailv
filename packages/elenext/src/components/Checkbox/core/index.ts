import { InjectionKey, Ref } from 'vue'
import { ParentProvide } from '../../../hooks/useParent'

export interface CheckboxGroupProvide {
  modelValue: Ref<any>
  disabled: Ref<boolean>
  change: (value: any) => void
}
export const CHECKBOXGROUP_IJK: InjectionKey<ParentProvide<CheckboxGroupProvide>> = Symbol('CheckboxGroup')
