import type { Component } from 'vue'

export type IListItemLink = string | { href: string; target: string }

export type IListItem = {
  key: string
  icon?: Component
  label?: string
  disable?: boolean
  link?: IListItemLink
  onClick?: (item: IListItem) => void
  children?: IListItem[]
}
