import { defineComponent, provide, reactive } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import { NavInjKey } from './NavItem'

const blockCls = getBlockCls('Nav')

const Nav = defineComponent({
  name: getCompName('Nav'),
  props: {},
  setup(props, { slots }) {
    const state = reactive({
      activeId: ''
    })
    const onSelectHandler = () => {
      console.log(onSelectHandler)
    }
    provide(NavInjKey, {
      state,
      select(id) {
        state.activeId = id
      }
    })
    return () => (
      <div class={[blockCls]} onSelect={onSelectHandler}>
        {slots.default?.()}
      </div>
    )
  }
})

export default Nav
