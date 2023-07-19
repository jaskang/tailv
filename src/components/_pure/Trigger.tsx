import { defineComponent, type ExtractPropTypes, type ExtractPublicPropTypes, type PropType, type SlotsType } from 'vue'

import { type ColorKey } from '@/theme'
import { useColorVar } from '@/utils/style'

const props = {
  color: {
    type: String as PropType<ColorKey>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export type TriggerProps = ExtractPropTypes<typeof props>

export type TriggerPublicProps = ExtractPublicPropTypes<typeof props>

export const Trigger = defineComponent({
  name: 'TTrigger',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number }
  }>,
  setup(props, { slots, emit }) {
    const cssVars = useColorVar('t-Trigger', {
      accent: 'primary.500',
      ring: 'primary.500',
    })

    return () => (
      <div style={cssVars.value} class="">
        {slots.default?.()}
      </div>
    )
  },
})
