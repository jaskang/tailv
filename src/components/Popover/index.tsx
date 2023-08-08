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

export type PopoverProps = ExtractPublicPropTypes<typeof props>

export const Popover = defineComponent({
  name: 'TPopover',
  props,
  inheritAttrs: false,
  slots: Object as SlotsType<{
    default?: () => VNode
    content?: () => VNode
  }>,
  setup(props, { slots, emit, attrs }) {
    return () => (
      <Popper trigger="click" arrow>
        {{
          default: () => slots.default?.(),
          content: () => (
            <div
              class="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-950"
              {...attrs}
            >
              {slots.content?.()}
            </div>
          ),
        }}
      </Popper>
    )
  },
})
