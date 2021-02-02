import { InjectionKey, Ref } from 'vue'
import { ParentProvide } from '../../../hooks/useParent'

export interface CheckboxGroupProvide {
  modelValue: Ref<Array<string | number>>
  disabled: Ref<boolean>
  change: (value: Array<string | number>) => void
}
export const CHECKBOXGROUP_IJK: InjectionKey<ParentProvide<CheckboxGroupProvide>> = Symbol('CheckboxGroup')
