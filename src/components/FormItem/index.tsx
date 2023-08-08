import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import { useTheme } from '@/theme'
import type { UserColor } from '@/theme/colors'
import { useColorVars } from '@/utils/style'

const props = {
  color: {
    type: String as PropType<UserColor>,
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
    const cssVars = useColorVars('t-form-item', () => {
      return {
        accent: 'primary.500',
        ring: 'primary.500',
      }
    })

    return () => (
      <div style={cssVars.value} class="">
        {slots.default?.()}
      </div>
    )
  },
})
