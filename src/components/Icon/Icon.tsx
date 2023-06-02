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
import { useTheme } from '@/theme'

const props = {
  spin: Boolean,
}

export type IconProps = ExtractPropTypes<typeof props>

export type IconPublicProps = ExtractPublicPropTypes<typeof props>

export const Icon = defineComponent({
  name: 'TIcon',
  props,
  setup(props, { slots }) {
    return () => (
      <span
        role="img"
        class={[
          't-icon inline-flex w-[1em] items-center [&>svg]:block [&>svg]:h-full [&>svg]:w-full',
          props.spin ? 'animate-spin' : '',
        ]}
      >
        {slots.default?.()}
      </span>
    )
  },
})
