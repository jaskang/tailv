import { defineComponent, inject, InjectionKey } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import { uniqueId } from '../../utils/uniqueId'

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
  // data() {
  //   return {
  //     id: uniqueId('NavItem')
  //   }
  // },
  // computed: {
  //   isActive(): boolean {
  //     const parent = this.$parent as any
  //     return parent.$data.activeId === this.id
  //   }
  // },
  // methods: {
  //   onClickHandler(): void {
  //     const parent = this.$parent as any
  //     console.log(this.id)

  //     if (parent.$data.activeId) {
  //       parent.$data.activeId = this.id
  //     }
  //   }
  // },
  // render() {
  //   return (
  //     <div class={[blockCls, this.isActive ? 'is-active' : '']} onClick={this.onClickHandler}>
  //       {this.$slots.default?.()}
  //     </div>
  //   )
  // },
  setup(props, { slots, emit }) {
    const id = uniqueId('NavItem')
    const { state, select } = inject(NavInjKey, {})
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
