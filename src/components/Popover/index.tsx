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

import { Popper } from '../Popper'

const props = {
  color: {
    type: String as PropType<Color>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export type PopoverProps = ExtractPropTypes<typeof props>

export type PopoverPublicProps = ExtractPublicPropTypes<typeof props>

export type PopoverCssVars = {
  '--t-btn-text-color': string
  '--t-btn-border-color': string
  '--t-btn-bg': string
}

export const Popover = defineComponent({
  name: 'TPopover',
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
            <div class="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-950">
              {slots.content?.()}
            </div>
          ),
        }}
      </Popper>
    )
  },
})
