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
    children: Array<MenuState>
    activeId: number
    activePath: number[]
    openedSet: Set<number>
    methods: {
      select: (node: MenuState) => void
    }
  }
  path?: string
  type: MENU_TYPE
  uid: number
  uidPath: number[]
  deep: number
  isOpen: boolean
  isHover: boolean
  isActive: boolean
  isPopper: boolean
}

export const MENU_IJK: InjectionKey<UnwrapRef<MenuState>> = Symbol('Menu')
