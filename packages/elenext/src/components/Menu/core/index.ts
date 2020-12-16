import { ComputedRef, InjectionKey, Ref, UnwrapRef } from 'vue'

export const MENU_ITEM_PADDING = 20

export enum MENU_TYPE {
  ROOT,
  SUB,
  ITEM
}

export type MenuState = {
  root: {
    mode: 'vertical' | 'horizontal' | 'popper'
    textColor: string
    activeTextColor: string
    backgroundColor: string
    activeBackgroundColor: string
    // ====== 路径 ======
    activeId: number
    activePath: number[]
    openedSet: Set<number>
    methods: {
      select: (node: MenuState) => void
    }
  }
  type: MENU_TYPE
  uid: number
  uidPath: number[]
  deep: number
  isPopper: boolean
  isOpen: boolean
  isActive: boolean
}

export const MENU_IJK: InjectionKey<UnwrapRef<MenuState>> = Symbol('Menu')
