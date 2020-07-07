import {
  defineComponent,
  reactive,
  PropType,
  onMounted,
  provide,
  InjectionKey,
  toRefs,
  ToRefs,
  inject,
  watch,
  onBeforeUnmount
} from 'vue'
import { injectCss } from 'src/utils'

import styles from './Menu.scss'

injectCss(styles, 'ElMenu')

interface MenuConfig {
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
  key: string
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

export const MenuDataSymbol: InjectionKey<MenuInject> = Symbol('MenuData')
export const MenuConfigSymbol: InjectionKey<MenuConfig> = Symbol('MenuConfig')

export function useMenu({ id, key }: { id: symbol; key?: string }) {
  const { parentData, parentActions } = inject(MenuDataSymbol) || {}
  const config = inject(MenuConfigSymbol)

  const state = reactive({
    isOwnActive: false,
    isOwnOpen: false
  })

  const data = reactive<MenuData>({
    id: id,
    key: key || '',
    isActive: false,
    isOpen: false,
    deep: parentData ? parentData.deep + 1 : 0,
    children: []
  })

  watch(
    () => {
      const childIsActive = data.children.some(item => item.isActive)
      return state.isOwnActive || childIsActive || false
    },
    curr => (data.isActive = curr)
  )
  watch(
    () => {
      const childIsOpen = data.children.some(item => item.isOpen)
      return state.isOwnOpen || childIsOpen || false
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

  const actions = {
    toggleSelect(value: boolean) {
      state.isOwnActive = value
      if (data.children.length > 0) {
        state.isOwnOpen = value
      }
    },
    toggleOpen(value: boolean) {
      state.isOwnOpen = value
    }
  }

  return {
    data,
    config,
    actions
  }
}

export default defineComponent({
  name: 'ElMenu',
  props: {
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'hover'
    },
    collapse: { type: Boolean, default: false },
    textColor: { type: String, default: '' },
    activeTextColor: { type: String, default: '' },
    backgroundColor: { type: String, default: '' }
  },
  setup(props, { attrs, slots }) {
    const state = reactive<MenuConfig>({
      mode: props.mode as 'horizontal' | 'vertical',
      trigger: props.trigger as 'click' | 'hover',
      collapse: props.collapse,
      textColor: props.textColor,
      activeTextColor: props.activeTextColor,
      backgroundColor: props.backgroundColor,
      isPopup: props.mode === 'horizontal' || !!(props.mode === 'vertical' && props.collapse)
    })
    useMenu({ id: Symbol('ElMenu') })
    provide(MenuConfigSymbol, state)
    onMounted(() => {
      setTimeout(() => {
        // state.backgroundColor = 'red';
      }, 5000)
    })

    return () => (
      <ul
        role="menubar"
        // key={+collapse}
        style={{ backgroundColor: props.backgroundColor || '' }}
        class={{
          'el-menu': true,
          'el-menu--horizontal': props.mode === 'horizontal',
          'el-menu--collapse': props.collapse
        }}
      >
        {slots.default?.()}
      </ul>
    )
  }
})
