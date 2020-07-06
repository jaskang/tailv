import {
  defineComponent,
  watch,
  ref,
  reactive,
  Teleport,
  inject,
  Transition,
  InjectionKey,
  provide,
  computed,
  onMounted,
  onUnmounted
} from 'vue'
import { usePopper, PlacementType } from '../Popper'
import { MenuSymbol } from './Menu'

type SubMenuState = {
  deep: number
  items: symbol[]
}

export type SubMenuInjectData = {
  subMenuState: SubMenuState
  subMenuActions: {
    add: (id: symbol) => void
    remove: (id: symbol) => void
  }
}
export const SubMenuSymbol: InjectionKey<SubMenuInjectData> = Symbol('Submenu')

export default defineComponent({
  name: 'ElSubmenu',
  props: {
    disabled: { type: Boolean, default: false },
    popperClass: { type: String, default: '' }
  },
  setup(props, { slots, attrs, emit }) {
    const { menuState, menuActions } = inject(MenuSymbol) || {}
    const { subMenuState, subMenuActions } = inject(SubMenuSymbol) || {}

    if (!menuState || !menuActions) {
      throw new Error('ElSubmenu must insaid ElMenu')
    }
    const id = Symbol(`ElMenuItem`)

    const state = reactive<SubMenuState>({
      deep: subMenuState ? subMenuState?.deep + 1 : 0,
      items: []
    })
    const isActive = computed(() => menuState.activeId === id || state.items.indexOf(menuState.activeId) !== -1)
    const isOpen = computed(() => menuState.openedItems.indexOf(id) !== -1)

    const referenceRef = ref<HTMLElement>()

    const { teleportId } = usePopper(referenceRef, [`el-menu--${menuState.mode}`], {
      placement: state.deep === 0 ? 'bottom-start' : 'right-start',
      modifiers: [{ name: 'offset', options: { offset: state.deep === 0 ? [0, 0] : [0, 4] } }]
    })

    const handleClick = () => {
      if (
        (menuState.trigger === 'hover' && menuState.mode === 'horizontal') ||
        (menuState.collapse && menuState.mode === 'vertical') ||
        props.disabled
      ) {
        return
      }
      if (isOpen) {
        menuActions.close(id)
      } else {
        menuActions.open(id)
      }
    }

    const onMouseEnter = () => {
      if (
        (menuState.trigger === 'click' && menuState.mode === 'horizontal') ||
        (!menuState.collapse && menuState.mode === 'vertical') ||
        props.disabled
      ) {
        return
      }
      menuActions.open(id)
    }
    const onMouseLeave = () => {
      if (
        (menuState.trigger === 'click' && menuState.mode === 'horizontal') ||
        (!menuState.collapse && menuState.mode === 'vertical')
      ) {
        return
      }
      menuActions.close(id)
    }

    const handleTitleMouseenter = () => {
      if (menuState.mode === 'horizontal' && !menuState.backgroundColor) return
      // submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = root?.hoverBackground);
    }
    const handleTitleMouseleave = () => {
      if (menuState.mode === 'horizontal' && !menuState.backgroundColor) return
      referenceRef.value && (referenceRef.value.style.backgroundColor = menuState.backgroundColor || '')
    }

    onMounted(() => {
      menuActions.add(id)
    })
    onUnmounted(() => {
      menuActions.remove(id)
    })

    provide(SubMenuSymbol, {
      subMenuState: state,
      subMenuActions: {
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
        }
      }
    })

    return () => (
      <li
        class={{
          'el-submenu': true,
          'is-active': isActive,
          'is-opened': isOpen,
          'is-disabled': props.disabled
        }}
        role="menuitem"
        onClick={handleClick}
        onMouseenter={onMouseEnter}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        onMouseleave={onMouseLeave}
      >
        <div
          ref="referenceRef"
          class="el-submenu__title"
          // style={state.style}
          onClick={handleClick}
          onMouseenter={handleTitleMouseenter}
          onMouseleave={handleTitleMouseleave}
        >
          {slots.title?.()}
          <i
            class={[
              'el-submenu__icon-arrow'
              //  state.icon
            ]}
          ></i>
        </div>
        {menuState.isPopup ? (
          <Transition name={'el-zoom-in-top'}>
            <Teleport to={`#${teleportId}`}>
              <ul
                role="menu"
                class={[
                  'el-menu',
                  'el-menu--popup',
                  `el-menu--popup-${state.deep === 0 ? 'bottom-start' : 'right-start'}`
                ]}
                style={{ backgroundColor: menuState.backgroundColor, width: '200px' }}
              >
                {slots.default?.()}
              </ul>
            </Teleport>
          </Transition>
        ) : (
          <ul
            role="menu"
            v-show="state.isOpen"
            class="el-menu el-menu--inline"
            style={{ backgroundColor: menuState.backgroundColor }}
          >
            {slots.default?.()}
          </ul>
        )}
      </li>
    )
  }
})
