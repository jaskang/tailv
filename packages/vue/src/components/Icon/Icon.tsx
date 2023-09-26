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
      <span role="img" class={['z-icon', props.spin ? 'z-animate-spin' : '']}>
        {slots.default?.()}
      </span>
    )
  },
})
