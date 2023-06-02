import {
  ref,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'
import { useTheme, type SizeType, getSpace } from '@/theme'

const props = {
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline' | 'stretch'>,
    default: 'start',
  },
  justify: {
    type: String as PropType<'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'>,
    default: 'start',
  },
  wrap: Boolean,
  gap: {
    type: String as PropType<SizeType>,
    default: '0',
  },
}

export type FlexProps = ExtractPropTypes<typeof props>

export type FlexPublicProps = ExtractPublicPropTypes<typeof props>

export const Flex = defineComponent({
  name: 'TFlex',
  props,
  setup(props, { slots, emit }) {
    return () => (
      <div
        style={{
          '--t-flex-gap': getSpace(props.gap),
        }}
        class={{
          't-flex flex': true,
          'items-start': props.align === 'start',
          'items-end': props.align === 'end',
          'items-center': props.align === 'center',
          'items-baseline': props.align === 'baseline',
          'items-stretch': props.align === 'stretch',

          'justify-normal': props.justify === 'normal',
          'justify-start': props.justify === 'start',
          'justify-end': props.justify === 'end',
          'justify-center': props.justify === 'center',
          'justify-between': props.justify === 'between',
          'justify-around': props.justify === 'around',
          'justify-evenly': props.justify === 'evenly',
          'justify-stretch': props.justify === 'stretch',

          'flex-wrap': props.wrap,
          'flex-nowrap': !props.wrap,
          'gap-[--t-flex-gap]': true,
        }}
      >
        {slots.default?.()}
      </div>
    )
  },
})
