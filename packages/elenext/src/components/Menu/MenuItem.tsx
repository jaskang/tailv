import { defineComponent } from 'vue'
import { useMenu } from './Menu'

export default defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup(props, { slots, emit }) {
    const id = Symbol(`ElMenuItem`)
    const { data, config, actions } = useMenu({ id })

    const handleClick = () => {
      actions?.toggleSelect(!data.isActive)
    }

    return () => (
      <li
        role="menuitem"
        tabindex={-1}
        // style={state.style.value}
        class={{
          'el-menu-item': true,
          'is-active': data.isActive,
          'is-disabled': false
        }}
        onClick={handleClick}
      >
        {slots.default?.()}
        {slots.title?.()}
      </li>
    )
  }
})
