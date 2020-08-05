import { defineComponent, computed, h, provide, CSSProperties } from 'vue'
import { ElRowSymbol } from '../../provides'

// import './Row.scss'

const ElRow = defineComponent({
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 20
    },
    justify: {
      type: String,
      default: 'flex-start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  setup(props, { slots }) {
    provide(ElRowSymbol, props.gutter)
    const style = computed(() => {
      let ret: CSSProperties = {}
      if (props.gutter >= 0) {
        const px = `-${props.gutter / 2}px`
        ret = {
          marginLeft: px,
          marginRight: px
        }
      }
      if (props.justify) {
        ret = { ...ret, justifyContent: props.justify }
      }
      if (props.align) {
        ret = { ...ret, alignItems: props.align }
      }
      return ret
    })
    return () => (
      <div class={['el-row']} style={style.value}>
        {slots.default?.()}
      </div>
    )
  }
})

export default ElRow
