import { InjectionKey, UnwrapRef } from 'vue'

export type SelectValue = string | string[]

export type OptionChildrenType = {
  value: any
  label?: string
  children?: OptionChildrenType[]
}
export type OptionType = {
  value: any
  label?: string
}

export type SelectDropdownState = {
  selected: Array<any>
  options: OptionType[]
  multiple: boolean
  methods: {
    onItemSelect: (value) => void
  }
}

export const SELECTDROPDOWN_IJK: InjectionKey<UnwrapRef<SelectDropdownState>> = Symbol('SelectDropdown')
