import { defineComponent, inject, onMounted, onUnmounted, computed } from 'vue'
import { MenuSymbol } from './Menu'
import { SubMenuSymbol } from './SubMenu'

export default defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup(props, { slots, emit }) {
    const { menuState, menuActions } = inject(MenuSymbol) || {}
    // const { subMenuState, subMenuActions } = inject(SubMenuSymbol) || {}
    if (!menuState || !menuActions) {
      throw new Error('ElMenuItem must insaid ElMenu')
    }
    const id = Symbol(`ElMenuItem`)

    const handleClick = () => {
      menuActions.select(id)
    }
    const onMouseEnter = () => {
      if (menuState.trigger == 'hover') {
        menuActions.open(id)
      }
    }
    const onMouseLeave = () => {
      if (menuState.trigger == 'hover') {
        menuActions.open(id)
      }
    }

    onMounted(() => {
      menuActions.add(id)
    })
    onUnmounted(() => {
      menuActions.remove(id)
    })
    return () => (
      <li
        role="menuitem"
        tabindex={-1}
        // style={state.style.value}
        class={{
          'el-menu-item': true,
          'is-active': menuState.activeId === id,
          'is-disabled': false
        }}
        onClick={handleClick}
        onMouseenter={onMouseEnter}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        onMouseleave={onMouseLeave}
      >
        {slots.default?.()}
        {slots.title?.()}
      </li>
    )
  }
})
