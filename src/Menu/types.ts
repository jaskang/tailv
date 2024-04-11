import type { Component } from 'vue'

export type MenuItemRawType = {
  type: never
  key: string
  label: string
  disabled?: boolean
  icon?: Component
  children?: MenuItemType[]
}

export type MenuItemTitleType = {
  type: 'title'
  label: string
}

export type MenuItemDividerType = {
  type: 'divider'
}

export type MenuItemType = MenuItemDividerType | MenuItemTitleType | MenuItemRawType

export function isDividerItem(item: MenuItemType): item is MenuItemDividerType {
  return item.type === 'divider'
}
export function isTitleItem(item: MenuItemType): item is MenuItemTitleType {
  return item.type === 'title'
}
export function isRawItem(item: MenuItemType): item is MenuItemRawType {
  return !isTitleItem(item) && !isDividerItem(item)
}
