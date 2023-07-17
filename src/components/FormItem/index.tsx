import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import { type ColorKey } from '@/theme'
import { useColorVar } from '@/utils/style'

const props = {
  color: {
    type: String as PropType<ColorKey>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export type FormItemProps = ExtractPropTypes<typeof props>

export type FormItemPublicProps = ExtractPublicPropTypes<typeof props>

export const FormItem = defineComponent({
  name: 'TFormItem',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default?: () => VNode[]
  }>,
  setup(props, { slots, emit }) {
    const cssVars = useColorVar('t-form-item', {
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
