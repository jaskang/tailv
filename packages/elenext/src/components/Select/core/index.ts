import { InjectionKey, UnwrapRef } from 'vue'

export type SelectValue = string | string[]

export type OptionChildrenType = {
  value: string | number
  label?: string
  children?: OptionChildrenType[]
}
export type OptionType = {
  value: string | number
  label?: string
}

export type SelectDropdownState = {
  selected: Array<string | number>
  options: OptionType[]
  multiple: boolean
}

export const SELECTDROPDOWN_IJK: InjectionKey<UnwrapRef<SelectDropdownState>> = Symbol('SelectDropdown')
