import { InjectionKey } from 'vue'

export const MENU_ITEM_PADDING = 20

export type MenuState = {
  rootState: {
    mode: 'vertical' | 'horizontal' | 'popper'
    textColor: string
    activeTextColor: string
    backgroundColor: string
    activeBackgroundColor: string
    activeUid: number
    activeUidPath: number[]
    openedUids: number[]
  }
  uid: number
  uidPath: number[]
  isOpen: boolean
  deep: number
  children: MenuState[]
}

export const MENU_IJK: InjectionKey<{
  readonly state: MenuState
  action: {
    select: (node: MenuState, childrenVisible?: boolean) => void
    add: (node: MenuState) => void
    remove: (node: MenuState) => void
  }
}> = Symbol('Menu')
