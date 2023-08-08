import { defineComponent, type ExtractPublicPropTypes, type SlotsType, type VNode } from 'vue'

const props = {}

export type InputGroupProps = ExtractPublicPropTypes<typeof props>

export const InputGroup = defineComponent({
  name: 'TInputGroup',
  props,
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots }) {
    return () => (
      <div class="t-input-group  flex items-center [&_>_*:first-child]:rounded-l-md [&_>_*:last-child]:rounded-r-md [&_>_*:not(:first-child)]:-ml-px [&_>_*]:rounded-none [:where(&)_>_*]:flex-1">
        {slots.default?.()}
      </div>
    )
  },
})
