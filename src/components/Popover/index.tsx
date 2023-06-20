import {
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
  computed,
  defineComponent,
  ref,
} from 'vue'
import { useTheme } from '@/color'

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
    icon: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const { colors } = useTheme()

    const { cssVars, cls } = useStyle(() => {
      return {
        ...props,
      }
    })

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => (
      <div style={cssVars.value} class={cls.value}>
        {slots.default?.()}
      </div>
    )
  },
})
