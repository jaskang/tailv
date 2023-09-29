import { defineComponent, type ExtractPublicPropTypes, type PropType } from 'vue'

import { getSpace, type SizeType } from '@/theme/space'

const props = {
  alignItems: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline' | 'stretch'>,
  },
  justifyContent: {
    type: String as PropType<
      'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'
    >,
  },
  wrap: Boolean,
  gap: String as PropType<SizeType>,
}

export type FlexProps = ExtractPublicPropTypes<typeof props>

export const Flex = defineComponent({
  name: 'ZFlex',
  props,
  setup(props, { slots }) {
    return () => (
      <div
        class={[
          'z-flex',
          'flex',
          props.wrap ? 'flex-wrap' : 'flex-nowrap',
          props.alignItems &&
            {
              start: 'items-start',
              end: 'items-end',
              center: 'items-center',
              baseline: 'items-baseline',
              stretch: 'items-stretch',
            }[props.alignItems],
          props.justifyContent &&
            {
              normal: 'justify-normal',
              start: 'justify-start',
              end: 'justify-end',
              center: 'justify-center',
              between: 'justify-between',
              around: 'justify-around',
              evenly: 'justify-evenly',
              stretch: 'justify-stretch',
            }[props.justifyContent],
        ]}
        style={{
          gap: props.gap ? getSpace(props.gap) : undefined,
        }}
      >
        {slots.default?.()}
      </div>
    )
  },
})
