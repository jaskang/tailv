import { App, defineComponent, inject, InjectionKey, provide, reactive } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { mixColor } from '@/utils/tools'
import CollapseTransition from '../Transition/CollapseTransition'

type NavState = {
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

const blockCls = getBlockCls('Nav')

export const NAV_INJKEY: InjectionKey<{
  readonly state: NavState
  action: {
    select: (id: string) => void
  }
}> = Symbol('Nav')

export const NAV_ITEM_PADDING = 20

const Nav = defineComponent({
  name: getCompName('Nav'),
  props: {
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
    const parent = inject(NAV_INJKEY, null)
    const state = reactive<NavState>({
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
      padding: parent ? parent.state.padding + NAV_ITEM_PADDING : 0
    })
    const onSelectHandler = () => {
      if (!state.isRoot) {
        state.isOpen = !state.isOpen
      }
    }

    provide(NAV_INJKEY, {
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
        <li
          class={[
            `${blockCls}-inner`,
            {
              'is-opened': state.isOpen
            }
          ]}
        >
          <div
            class={[`${blockCls}-inner__title`]}
            style={{ paddingLeft: state.padding + 'px' }}
            onClick={onSelectHandler}
          >
            {slots.title?.()}
            <i class={[`${blockCls}-inner__icon-arrow`, `el-icon-arrow-down`]}></i>
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

Nav.install = (app: App): void => {
  app.component(Nav.name, Nav)
}

export default Nav
