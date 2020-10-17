import { InjectionKey, inject, reactive, computed, watch, onMounted, onBeforeUnmount, provide } from 'vue'
import Emitter from '../../utils/Emitter'

export interface MenuConfig {
  mode: 'horizontal' | 'vertical'
  trigger: 'click' | 'hover'
  collapse: boolean
  textColor: string
  activeTextColor: string
  backgroundColor: string
  isPopup: boolean
}

interface MenuData {
  id: symbol
  isOwnActive: boolean
  isOwnOpen: boolean
  isActive: boolean
  isOpen: boolean
  deep: number
  children: MenuData[]
}

interface MenuInject {
  parentData: MenuData
  parentActions: {
    addChild(item: MenuData): void
    removeChild(id: symbol): void
  }
}

export const MenuEmitterSymbol: InjectionKey<Emitter> = Symbol('MenuEmitter')
export const MenuDataSymbol: InjectionKey<MenuInject> = Symbol('MenuData')
export const MenuConfigSymbol: InjectionKey<MenuConfig> = Symbol('MenuConfig')

export function findMenuData(id: symbol, chlidren: MenuData[]): MenuData | null {
  for (const item of chlidren) {
    if (item.id === id) {
      return item
    }
    if (item.children && item.children.length > 0) {
      const ret = findMenuData(id, item.children)
      if (ret) {
        return ret
      }
    }
  }
  return null
}

export function recursiveMenus(chlidren: MenuData[], func: (item: MenuData) => void) {
  chlidren.forEach(item => {
    func(item)
    if (item.children && item.children.length > 0) {
      recursiveMenus(item.children, func)
    }
  })
}

export function useMenu(id: symbol, isRoot: boolean = false) {
  const { parentData, parentActions } = isRoot ? ({} as MenuInject) : inject(MenuDataSymbol) || {}
  const emitter = isRoot ? new Emitter() : inject(MenuEmitterSymbol)
  const config = inject(MenuConfigSymbol)
  const data = reactive<MenuData>({
    id: id,
    isOwnActive: false,
    isOwnOpen: false,
    isActive: false,
    isOpen: false,
    deep: parentData ? parentData.deep + 1 : 0,
    children: []
  })

  const isChildActive = computed(() => data.children.some(item => item.isActive))
  const isChildOpen = computed(() => data.children.some(item => item.isOpen))

  watch(
    () => {
      return data.isOwnActive || isChildActive.value || false
    },
    curr => (data.isActive = curr)
  )
  watch(
    () => {
      return data.isOwnOpen || isChildOpen.value || false
    },
    curr => (data.isOpen = curr)
  )

  onMounted(() => {
    parentActions?.addChild(data)
  })
  onBeforeUnmount(() => {
    parentActions?.removeChild(id)
  })

  provide(MenuDataSymbol, {
    parentData: data,
    parentActions: {
      addChild(item: MenuData) {
        if (data.children.indexOf(item) === -1) {
          data.children.push(item)
        }
      },
      removeChild(removeId: symbol) {
        const index = data.children.findIndex(item => item.id === removeId)
        if (index >= 0) {
          data.children.splice(index, 1)
        }
      }
    }
  })
  provide(MenuEmitterSymbol, emitter)
  // const actions = {
  //   toggleSelect(value: boolean) {
  //     data.isOwnActive = value
  //     if (data.children.length > 0) {
  //       data.isOwnOpen = value
  //     }
  //     if (value) {
  //     }
  //   },
  //   toggleOpen(value: boolean) {
  //     if (!value) {
  //       foreachChildren(data.children, item => (item.isOwnOpen = value))
  //     }
  //     data.isOwnOpen = value
  //   }
  // }

  return {
    data,
    config,
    emitter
  }
}
