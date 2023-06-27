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
    default: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const { colors } = useTheme()

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => <Popper>{slots.default?.()}</Popper>
  },
})
