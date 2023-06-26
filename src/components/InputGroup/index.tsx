import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { useTheme } from '@/theme'

const props = {}

export type InputGroupProps = ExtractPropTypes<typeof props>

export type InputGroupPublicProps = ExtractPublicPropTypes<typeof props>

export type InputGroupCssVars = {
  '--t-inputgroup-ring-color': string
}

export const InputGroup = defineComponent({
  name: 'TInputGroup',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots, emit }) {
    return () => (
      <div class="t-input-group  flex items-center [&_>_*:first-child]:rounded-l-md [&_>_*:last-child]:rounded-r-md [&_>_*:not(:first-child)]:-ml-px [&_>_*]:rounded-none [:where(&)_>_*]:flex-1">
        {slots.default?.()}
      </div>
    )
  },
})
