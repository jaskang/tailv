import { type Placement } from '@floating-ui/vue'
import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import { Popper } from '../Popper'
import type { TriggerType } from '../Popper/trigger'

const props = {
  trigger: { type: String as PropType<TriggerType>, default: 'hover' },
  placement: { type: String as PropType<Placement>, default: 'top' },
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
  setup(props, { slots }) {
    return () => (
      <Popper trigger={props.trigger} placement={props.placement} hold={false}>
        {{
          default: () => slots.default?.(),
          content: () => (
            <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm dark:border-gray-500/30 dark:bg-gray-900 dark:text-gray-200">
              {slots.content?.()}
            </div>
          ),
        }}
      </Popper>
    )
  },
})
