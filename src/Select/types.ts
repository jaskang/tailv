import type { Prettify } from 'kotl'

import type { IListItemNormal } from '@/Base'

export type SelectOption = Prettify<
  {
    value: string | number
  } & Omit<IListItemNormal, 'children' | 'key'>
>
