import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import { type Placement, Popper, type TriggerType } from '../Popper'

const props = {
  trigger: { type: String as PropType<TriggerType>, default: 'hover' },
  placement: { type: String as PropType<Placement>, default: 'top' },
}

export type TooltipProps = ExtractPropTypes<typeof props>

export type TooltipPublicProps = ExtractPublicPropTypes<typeof props>

export const Tooltip = defineComponent({
  name: 'ZTooltip',
  props,
  slots: Object as SlotsType<{
    default?: () => VNode
    content?: () => VNode
  }>,
  setup(props, { slots }) {
    return () => (
      <Popper trigger={props.trigger} placement={props.placement}>
        {{
          default: () => slots.default?.(),
          content: () => (
            <div class="rounded-lg bg-white px-3 py-2 text-sm font-medium shadow-lg dark:border-gray-500/30 dark:bg-gray-950 dark:text-gray-200">
              {slots.content?.()}
            </div>
          ),
        }}
      </Popper>
    )
  },
})
