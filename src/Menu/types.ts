import type { Component } from 'vue'

export type MenuItemRawType = {
  key: string
  label: string
  link?: string
  target?: string
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
  return 'type' in item && item.type === 'divider'
}
export function isTitleItem(item: MenuItemType): item is MenuItemTitleType {
  return 'type' in item && item.type === 'title'
}
export function isRawItem(item: MenuItemType): item is MenuItemRawType {
  return !isTitleItem(item) && !isDividerItem(item)
}
