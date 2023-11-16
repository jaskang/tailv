export type IAnchorItem = {
  key: string
  title: string
  href?: string
  isGroup?: boolean
  children?: IAnchorItem[]
}

export type AnchorProps = {
  selectedKey?: string
  items: IAnchorItem[]
}
