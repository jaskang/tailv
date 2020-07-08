import { defineComponent } from 'vue'
import { useMenu } from './hooks'
import { uniqueId } from '../../utils/uniqueId'

const ElMenuItem = defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup(props, { slots, emit }) {
    const id = Symbol(`ElMenuItem-${uniqueId()}`)
    const { data, config, emitter } = useMenu(id)

    const handleClick = () => {
      emitter?.emit('select', id)
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

export default ElMenuItem
