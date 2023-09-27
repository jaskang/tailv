import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
} from 'vue'

import { getSpace, type SizeType } from '@/theme/space'

const props = {
  alignItems: {
    type: String as PropType<'baseline' | 'start' | 'end' | 'center' | 'stretch'>,
    default: 'baseline',
  },
  justifyContent: {
    type: String as PropType<
      'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'
    >,
    default: 'normal',
  },
  wrap: Boolean,
  gap: {
    type: String as PropType<SizeType>,
    default: '0',
  },
}

export type FlexProps = ExtractPublicPropTypes<typeof props>

export const Flex = defineComponent({
  name: 'ZFlex',
  props,
  setup(props, { slots }) {
    return () => (
      <div
        class={['flex', props.wrap ? 'flex-wrap' : 'flex-nowrap']}
        style={{
          '--z-flex-gap': getSpace(props.gap),
          'align-items': props.alignItems,
          'justify-content': props.justifyContent,
          'flex-wrap': props.wrap ? 'wrap' : 'nowrap',
        }}
      >
        {slots.default?.()}
      </div>
    )
  },
})
