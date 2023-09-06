import { defineComponent, type ExtractPropTypes, type ExtractPublicPropTypes } from 'vue'

const props = {
  spin: Boolean,
}

export type IconProps = ExtractPublicPropTypes<typeof props>

export const Icon = defineComponent({
  name: 'ZIcon',
  props,
  setup(props, { slots }) {
    return () => (
      <span
        role="img"
        class={[
          'z-icon inline-flex w-[1em] items-center [&>svg]:block [&>svg]:h-full [&>svg]:w-full',
          props.spin ? 'animate-spin' : '',
        ]}
      >
        {slots.default?.()}
      </span>
    )
  },
})
