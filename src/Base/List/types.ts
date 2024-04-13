import type { Component } from 'vue'

export type IListItem = {
  key: string
  icon?: Component
  label?: string
  disable?: boolean
  link?: string
  target?: string
  children?: IListItem[]
}
