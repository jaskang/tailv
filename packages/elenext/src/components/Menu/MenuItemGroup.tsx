import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElMenuItemGroup',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    // const { parent } = useElMenuContext()
    return () => (
      <li class="el-menu-item-group">
        <div class="el-menu-item-group__title" style={{ paddingLeft: 20 + 'px' }}>
          {slots.title ? slots.title() : props.title}
        </div>
        <ul>{slots.default?.()}</ul>
      </li>
    )
  }
})
