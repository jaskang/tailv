export type AnchorItem = {
  key: string
  title: string
  children?: AnchorItem[]
}

export interface AnchorProps {
  selectedKey?: string
  items: AnchorItem[]
}

export type AnchorGroupProps = {
  selectedKey?: string
  children: {
    key: string
    title: string
    children: AnchorItem[]
  }[]
}
