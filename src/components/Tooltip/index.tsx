import { useFloating } from '@floating-ui/vue'
import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  ref,
  type SlotsType,
  Teleport,
  type VNode,
} from 'vue'

import { Popper } from '../Popper'

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
        <Popper open={open.value}>
          {{
            default: slots.default,
            content: () => <></>,
          }}
        </Popper>
      </>
    )
  },
})
