import { Component, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import useClassNames from '../../hooks/useClassNames'

const blockCls = getBlockCls('tile')

const Tile = defineComponent({
  name: getCompName('Tile'),
  props: {
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    },
    span: {
      type: [Number, String] as PropType<number | string>,
      required: false
    }
  },
  setup(props, { slots, attrs }) {
    const classes = useClassNames(() => ({
      [blockCls]: true,
      [`is-vertical`]: props.mode === 'vertical'
    }))
    const styles = computed(() => {
      if (props.span) {
        if (typeof props.span === 'number') {
          return {
            flex: 'none',
            width: `${(props.span / 24) * 100}%`
          }
        } else {
          return {
            flex: 'none',
            width: props.span
          }
        }
      }
      return {}
    })

    return () => {
      const children = slots.default?.()
      const isParent = children?.every(child => (child.type as Component)!.name === getCompName('Tile'))
      return (
        <div class={[classes.value, isParent ? 'is-parent' : '']} style={styles.value}>
          {children}
        </div>
      )
    }
  }
})

export default Tile
