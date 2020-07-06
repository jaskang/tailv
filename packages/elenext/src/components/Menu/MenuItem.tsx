import { defineComponent, inject, onMounted, onUnmounted, computed } from 'vue'
import { MenuSymbol } from './Menu'

export default defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup(props, { slots, emit }) {
    const { menuState, menuActions } = inject(MenuSymbol) || {}
    if (!menuState || !menuActions) {
      throw new Error('ElMenuItem must insaid ElMenu')
    }
    const id = Symbol(`ElMenuItem`)

    const isActive = computed(() => menuState.items[menuState.activeIndex] === id)
    const handleClick = e => {
      emit('click', e)
    }
    const onMouseEnter = () => {}
    const onMouseLeave = () => {}

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
          'is-active': isActive.value,
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
