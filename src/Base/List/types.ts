type ListItem<T = {}> = {
  label: string
  disabled?: boolean
} & T

type ListItem = 