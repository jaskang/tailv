import { computed, defineComponent, type ExtractPublicPropTypes, type PropType } from 'vue'

type FlexType = number | 'auto' | 'initial' | 'none'

const props = {
  flex: {
    type: [Number, String] as PropType<FlexType>,
    default: 'none',
  },
}

export type FlexItemProps = ExtractPublicPropTypes<typeof props>

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }
  return flex
}

export const FlexItem = defineComponent({
  name: 'ZFlexItem',
  props,
  setup(props, { slots }) {
    const style = computed(() => {
      const flex = parseFlex(props.flex)
      return {
        flex,
      }
    })
    return () => (
      <div class="z-flex-item" style={style.value}>
        {slots.default?.()}
      </div>
    )
  },
})
