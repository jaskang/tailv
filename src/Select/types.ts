import type { IListItemNormal } from '@/Base'
import type { Prettify } from 'kotl'

export type SelectOption = Prettify<
  {
    value: string | number
  } & Omit<IListItemNormal, 'children' | 'key'>
>
