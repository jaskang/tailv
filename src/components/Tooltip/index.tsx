import {
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  Teleport,
  type VNode,
  computed,
  defineComponent,
  ref,
} from 'vue'
import { Popper } from '../Popper'
import { useFloating } from '@floating-ui/vue'

const props = {
  to: {
    type: String,
    default: 'body',
  },
}

export type TooltipProps = ExtractPropTypes<typeof props>

export type TooltipPublicProps = ExtractPublicPropTypes<typeof props>

export const Tooltip = defineComponent({
  name: 'TTooltip',
  props,
  slots: Object as SlotsType<{
    default?: () => VNode
    popper?: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const open = ref(false)
    return () => (
      <>
        <Popper open={open.value}>{slots.popper?.()}</Popper>
      </>
    )
  },
})
