import type { Prettify } from 'kotl'

export type ListItemType = {
  label: string
  disabled?: boolean
  children?: ListItem[]
}

export type ListItemDividerType = {
  type: 'divider'
}

export type ListItemGroupType = {
  type: 'group'
  label: string
  children: ListItem[]
}

export type ListItem = ListItemDividerType | ListItemGroupType | ListItemType
