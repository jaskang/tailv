import { defineComponent, inject, InjectionKey } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { uniqueId } from '@/utils/uniqueId'

const blockCls = getBlockCls('nav-item')

export const NavInjKey: InjectionKey<{
  state?: Readonly<{
    activeId?: string
  }>
  select?(id: string): void
}> = Symbol('NavItem')

const Navitem = defineComponent({
  name: getCompName('NavItem'),
  props: { name: String },
  setup(props, { slots }) {
    const id = uniqueId('NavItem')
    const { state, select } = inject(NavInjKey) || {}
    const onClickHandler = () => {
      select?.(id)
    }
    return () => (
      <div class={[blockCls, state?.activeId === id ? 'is-active' : '']} onClick={onClickHandler}>
        {slots.default?.()}
      </div>
    )
  }
})

export default Navitem
