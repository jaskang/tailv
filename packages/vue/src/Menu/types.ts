import type { Component } from 'vue'

export type MenuItemType = {
  type: never
  key: string
  label: string
  disabled?: boolean
  icon?: Component
  children?: MenuItem[]
}

export type MenuItemGroupType = {
  type: 'group'
  label: string
  children: MenuItem[]
}

export type MenuItemDividerType = {
  type: 'divider'
}

export type MenuItem = MenuItemDividerType | MenuItemGroupType | MenuItemType

export function isDividerItem(item: MenuItem): item is MenuItemDividerType {
  return item.type === 'divider'
}
export function isGroupItem(item: MenuItem): item is MenuItemGroupType {
  return item.type === 'group'
}
export function isMenuItem(item: MenuItem): item is MenuItemType {
  return !isGroupItem(item) && !isDividerItem(item)
}
