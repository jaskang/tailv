export type AnchorOption = {
  key: string
  title: string
  children?: AnchorOption[]
}

export interface AnchorProps {
  selectedKey?: string
  options: AnchorOption[]
}

export type AnchorGroupProps = {
  selectedKey?: string
  groups: {
    key?: string
    title: string
    options: AnchorOption[]
  }[]
}
