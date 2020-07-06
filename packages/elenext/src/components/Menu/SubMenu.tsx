import { defineComponent, watch, ref, reactive, Teleport, inject, Transition, InjectionKey, provide } from 'vue'
import { usePopper, PlacementType } from '../Popper'
import { MenuSymbol } from './Menu'

type SubMenuState = {
  deep: number
}

export type SubMenuInjectData = {
  subMenuState: SubMenuState
  subMenuActions: {}
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

    const state = reactive({
      id: Symbol(`ElMenuItem`),
      deep: subMenuState ? subMenuState?.deep + 1 : 0,
      isRoot: !!subMenuState,
      isActive: false,
      isOpen: false
    })

    provide(SubMenuSymbol, {
      subMenuState: {
        deep: state.deep
      },
      subMenuActions: {}
    })

    const referenceRef = ref<HTMLElement>()

    const { teleportId } = usePopper(referenceRef, [`el-menu--${menuState.mode}`], {
      placement: state.isRoot ? 'bottom-start' : 'right-start',
      modifiers: [{ name: 'offset', options: { offset: state.isRoot ? [0, 0] : [0, 4] } }]
    })

    const handleClick = () => {
      if (
        (menuState.trigger === 'hover' && menuState.mode === 'horizontal') ||
        (menuState.collapse && menuState.mode === 'vertical') ||
        props.disabled
      ) {
        return
      }
      if (state.isOpen) {
        menuActions.close(state.id)
      } else {
        menuActions.open(state.id)
      }
    }

    const handleMouseenter = () => {
      if (
        (menuState.trigger === 'click' && menuState.mode === 'horizontal') ||
        (!menuState.collapse && menuState.mode === 'vertical') ||
        props.disabled
      ) {
        return
      }
      menuActions.open(state.id)
    }
    const handleMouseleave = () => {
      if (
        (menuState.trigger === 'click' && menuState.mode === 'horizontal') ||
        (!menuState.collapse && menuState.mode === 'vertical')
      ) {
        return
      }
      menuActions.close(state.id)
    }

    const handleTitleMouseenter = () => {
      if (menuState.mode === 'horizontal' && !menuState.backgroundColor) return
      // submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = root?.hoverBackground);
    }
    const handleTitleMouseleave = () => {
      if (menuState.mode === 'horizontal' && !menuState.backgroundColor) return
      referenceRef.value && (referenceRef.value.style.backgroundColor = menuState.backgroundColor || '')
    }
    // return {
    //   data,
    //   state,
    //   isPopup: root.state.isPopup,
    //   handleClick,
    //   handleMouseenter,
    //   handleMouseleave,
    //   handleTitleMouseenter,
    //   handleTitleMouseleave,
    //   teleportId,
    //   referenceRef
    // }
    return () => (
      <li
        class={{
          'el-submenu': true,
          'is-active': state.isActive,
          'is-opened': state.isOpen,
          'is-disabled': props.disabled
        }}
        role="menuitem"
        onMouseenter={handleMouseenter}
        onMouseleave={handleMouseleave}
        onFocus={handleMouseenter}
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
                class={['el-menu', 'el-menu--popup', `el-menu--popup-${state.isRoot ? 'bottom-start' : 'right-start'}`]}
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
