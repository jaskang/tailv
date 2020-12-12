import { App, defineComponent, inject, InjectionKey, PropType, provide, reactive } from 'vue'
import { getBlockCls, getCompName } from '../../utils'
import { mixColor } from '@elenext/shared'
import CollapseTransition from '../Transition/CollapseTransition.vue'
import { IconChevronDown } from '@elenext/icons'
type MenuState = {
  textColor: string
  activeTextColor: string
  backgroundColor: string
  hoverBackgroundColor: string
  activeId: string
  children: any[]
  activePath: string[]
  isOpen: boolean
  isRoot: boolean
  padding: number
}

export const MENU_INJKEY: InjectionKey<{
  readonly state: MenuState
  action: {
    select: (id: string) => void
  }
}> = Symbol('Menu')

export const MENU_ITEM_PADDING = 20

const blockCls = getBlockCls('Menu')
const Menu = defineComponent({
  name: getCompName('Menu'),
  props: {
    mode: {
      type: String as PropType<'vertical' | 'horizontal' | 'popper'>,
      default: 'horizontal'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    activeTextColor: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const parent = inject(MENU_INJKEY, null)
    const state = reactive<MenuState>({
      textColor: parent?.state.textColor || props.textColor,
      activeTextColor: parent?.state.activeTextColor || props.activeTextColor,
      backgroundColor: parent?.state.backgroundColor || props.backgroundColor,
      hoverBackgroundColor:
        parent?.state.backgroundColor || props.backgroundColor
          ? mixColor(parent?.state.backgroundColor || props.backgroundColor, 0.2)
          : '',
      activeId: '',
      children: [],
      activePath: [],
      isOpen: false,
      isRoot: !Boolean(parent),
      padding: parent ? parent.state.padding + MENU_ITEM_PADDING : 0
    })
    const onSelectHandler = () => {
      if (!state.isRoot) {
        state.isOpen = !state.isOpen
      }
    }

    provide(MENU_INJKEY, {
      state,
      action: {
        select: (id: string) => {
          state.activeId = id
        }
      }
    })

    return () =>
      state.isRoot ? (
        <ul class={[blockCls]} style={{ paddingLeft: state.padding + 'px' }} onSelect={onSelectHandler}>
          {slots.default?.()}
        </ul>
      ) : (
        <li class={{ [`${blockCls}-inner`]: true, 'is-opened': state.isOpen }}>
          <div
            class={[`${blockCls}-inner__title`]}
            style={{ paddingLeft: state.padding + 'px' }}
            onClick={onSelectHandler}
          >
            {slots.title?.()}
            <span class={`${blockCls}-inner__icon-arrow`}>
              <IconChevronDown />
            </span>
          </div>
          <CollapseTransition>
            <ul v-show={state.isOpen} class={blockCls}>
              {slots.default?.()}
            </ul>
          </CollapseTransition>
        </li>
      )
  }
})

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}

export default Menu
