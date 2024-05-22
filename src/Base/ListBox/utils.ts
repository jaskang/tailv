import type { Prettify } from 'kotl'

export type IListItemNormal = {
  label: string
  key?: string
  disabled?: boolean
  children?: IListItem[]
}

export type IListItemDivider = {
  type: 'divider'
}

export type IListItemGroup = {
  type: 'group'
  label: string
  children: IListItemNormal[]
}

export type IListItem<T = any> = IListItemDivider | IListItemGroup | T

export function isDividerItem(item: IListItem): item is IListItemDivider {
  return 'type' in item && item.type === 'divider'
}

export function isGroupItem(item: IListItem): item is IListItemGroup {
  return 'type' in item && item.type === 'group'
}

export function isDataItem(item: IListItem): item is IListItemNormal {
  return !isDividerItem(item) && !isGroupItem(item)
}
