import { App, computed, CSSProperties, defineComponent, inject, ref } from 'vue'
import { getBlockCls, getCompName } from '../../utils'
import { uniqueId } from '../../utils/uniqueId'
import { MENU_INJKEY, MENU_ITEM_PADDING } from './Menu'

const blockCls = getBlockCls('MenuItem')

const Menuitem = defineComponent({
  name: getCompName('MenuItem'),
  props: { name: String },
  setup(_props, { slots }) {
    const id = uniqueId('MenuItem')
    const el = ref<HTMLDivElement>()
    const parent = inject(MENU_INJKEY)

    const isActive = computed(() => {
      return (parent?.state?.activeId || -1) === id
    })
    const itemStyle = computed<CSSProperties>(() => {
      return {
        color: isActive.value ? parent?.state.activeTextColor : parent?.state.textColor,
        backgroundColor: parent?.state.backgroundColor,
        paddingLeft: `${(parent?.state.padding || 0) + MENU_ITEM_PADDING}px`
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

Menuitem.install = (app: App): void => {
  app.component(Menuitem.name, Menuitem)
}

export default Menuitem
