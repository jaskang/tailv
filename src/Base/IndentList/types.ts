export type IIndentItem<T extends Record<string, any>> = T & {
  children?: IIndentItem<T>[]
}
