import { defineComponent, computed, h, provide } from 'vue'
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
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  setup(props, { slots }) {
    provide(ElRowSymbol, props.gutter)
    const style = computed(() => {
      if (props.gutter >= 0) {
        const px = `-${props.gutter / 2}px`
        return {
          marginLeft: px,
          marginRight: px
        }
      }
      return {}
    })
    return () => (
      <div
        class={[
          'el-row',
          props.justify !== 'start' ? `is-justify-${props.justify}` : '',
          props.align !== 'top' ? `is-align-${props.align}` : ''
        ]}
        style={style.value}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ElRow
