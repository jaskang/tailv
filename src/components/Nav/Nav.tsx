import { defineComponent, inject, InjectionKey, provide, reactive } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import CollapseTransition from '../Transition/CollapseTransition'

type NavState = {
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
    width: {
      type: String,
      default: '250px'
    }
  },
  setup(props, { slots }) {
    const parent = inject(NAV_INJKEY, null)
    const state = reactive<NavState>({
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
        <ul
          class={[blockCls]}
          style={{ paddingLeft: state.padding + 'px', width: props.width }}
          onSelect={onSelectHandler}
        >
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

export default Nav
