import { App, computed, CSSProperties, defineComponent, inject, ref } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { uniqueId } from '@/utils/uniqueId'
import { NAV_INJKEY, NAV_ITEM_PADDING } from './Nav'

const blockCls = getBlockCls('nav-item')

const Navitem = defineComponent({
  name: getCompName('NavItem'),
  props: { name: String },
  setup(props, { slots }) {
    const id = uniqueId('NavItem')
    const el = ref<HTMLDivElement>()
    const parent = inject(NAV_INJKEY)

    const isActive = computed(() => {
      return (parent?.state?.activeId || -1) === id
    })
    const itemStyle = computed<CSSProperties>(() => {
      return {
        color: isActive.value ? parent?.state.activeTextColor : parent?.state.textColor,
        backgroundColor: parent?.state.backgroundColor,
        paddingLeft: `${(parent?.state.padding || 0) + NAV_ITEM_PADDING}px`
      }
    })

    const onMouseenter = () => {
      if (parent?.state.hoverBackgroundColor) {
        el.value!.style.backgroundColor = parent.state.hoverBackgroundColor
      }
    }
    const onMouseleave = () => {
      if (parent?.state.backgroundColor) {
        el.value!.style.backgroundColor = parent.state.backgroundColor
      }
    }

    const onClickHandler = () => {
      parent?.action.select(id)
    }
    return () => (
      <div
        ref={el}
        class={[blockCls, { 'is-active': isActive.value }]}
        style={itemStyle.value}
        onClick={onClickHandler}
        onMouseenter={onMouseenter}
        onMouseleave={onMouseleave}
      >
        {slots.default?.()}
      </div>
    )
  }
})

Navitem.install = (app: App): void => {
  app.component(Navitem.name, Navitem)
}

export default Navitem
