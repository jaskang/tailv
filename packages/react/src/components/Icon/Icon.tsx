import type { FC, SVGAttributes } from 'react'
import { defineComponent, type ExtractPropTypes, type ExtractPublicPropTypes } from 'vue'

const props = {
  spin: Boolean,
}

export type IconProps = ExtractPublicPropTypes<typeof props>

export const Icon: FC<SVGAttributes<SVGElement>> = ({children,...props})=>{
  <
}

export const Icon = defineComponent({
  name: 'ZIcon',
  props,
  setup(props, { slots }) {
    return () => (
      <span
        role="img"
        className={[
          'inline-flex h-[1em] w-[1em] items-center [&>svg]:h-full [&>svg]:w-full',
          props.spin ? 'animate-spin' : '',
        ]}
      >
        {slots.default?.()}
      </span>
    )
  },
})
