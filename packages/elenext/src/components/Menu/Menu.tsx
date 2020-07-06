import { defineComponent, reactive, PropType, onMounted, provide, InjectionKey, toRefs, ToRefs } from 'vue'
import { injectCss } from 'src/utils'

import styles from './Menu.scss'

injectCss(styles, 'ElMenu')

type MenuState = {
  mode: 'horizontal' | 'vertical'
  trigger: 'click' | 'hover'
  collapse: boolean
  textColor: string
  activeTextColor: string
  backgroundColor: string
  isPopup: boolean
  activeId: symbol
  items: symbol[]
  openedItems: symbol[]
}

export type MenuInjectData = {
  menuState: MenuState
  menuActions: {
    add: (id: symbol) => void
    remove: (id: symbol) => void
    open: (id: symbol) => void
    close: (id: symbol) => void
    select: (id: symbol) => void
  }
}

export const MenuSymbol: InjectionKey<MenuInjectData> = Symbol('Menu')

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
    const state = reactive<MenuState>({
      mode: props.mode as 'horizontal' | 'vertical',
      trigger: props.trigger as 'click' | 'hover',
      collapse: props.collapse,
      textColor: props.textColor,
      activeTextColor: props.activeTextColor,
      backgroundColor: props.backgroundColor,
      isPopup: props.mode === 'horizontal' || !!(props.mode === 'vertical' && props.collapse),
      activeId: Symbol(),
      items: [],
      openedItems: []
    })

    onMounted(() => {
      setTimeout(() => {
        // state.backgroundColor = 'red';
      }, 5000)
    })

    provide(MenuSymbol, {
      menuState: state,
      menuActions: {
        add(id: symbol) {
          if (state.items.indexOf(id) === -1) {
            state.items.push(id)
          }
        },
        remove(id: symbol) {
          const menuIndex = state.items.indexOf(id)
          if (menuIndex >= 0) {
            state.items.splice(menuIndex, 1)
          }
        },
        open(id: symbol) {
          if (state.openedItems.indexOf(id) === -1) {
            state.openedItems.push(id)
          }
        },
        close(id: symbol) {
          const menuIndex = state.openedItems.indexOf(id)
          if (menuIndex >= 0) {
            state.openedItems.splice(menuIndex, 1)
          }
        },
        select(id: symbol) {
          state.activeId = id
        }
      }
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
