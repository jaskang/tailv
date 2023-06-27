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
    content?: () => VNode
  }>,
  setup(props, { slots, emit }) {
    return () => (
      <Popper>
        {{
          default: () => slots.default?.(),
          content: () => (
            <div class="tooltip  inline-block rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 opacity-100 shadow-sm">
              {slots.content?.()}
            </div>
          ),
        }}
      </Popper>
    )
  },
})
