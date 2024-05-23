export type IListItemNormal = {
  label: string
  key?: string
  disabled?: boolean
  children?: IListItem[]
}

export type IListItemDivider = {
  type: 'divider'
}

export type IListItemGroup<T> = {
  type: 'group'
  label: string
  children: T[]
}

export type IListItem<T = any> = IListItemDivider | IListItemGroup<T> | T

export function isDividerItem<T extends object>(item: IListItem<T>): item is IListItemDivider {
  return 'type' in item && item.type === 'divider'
}

export function isGroupItem<T extends object>(item: IListItem<T>): item is IListItemGroup<T> {
  return 'type' in item && item.type === 'group'
}

export function isDataItem<T extends object>(item: IListItem<T>): item is T {
  return !isDividerItem(item) && !isGroupItem(item)
}
