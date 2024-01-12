import {
  type PropType,
  defineComponent,
  type SlotsType,
  ComponentObjectPropsOptions,
  ExtractPublicPropTypes,
} from 'vue'
import { ColorName, useStyle } from '../utils/style'
import { createButtonStyle } from './style'
import { LoadingIcon } from '../Icon/LoadingIcon'

const props = {
  variant: {
    type: String as PropType<'default' | 'plain'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String as PropType<ColorName>,
  },
  pill: Boolean,
  square: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
} satisfies ComponentObjectPropsOptions

export type ButtonProps = ExtractPublicPropTypes<typeof props>

export const Button = defineComponent({
  name: 'ZButton',
  props: props,
  slots: Object as SlotsType<{
    default: any
    icon: any
  }>,
  setup(props, { slots }) {
    const { css, style, icon } = useStyle(() =>
      createButtonStyle({
        variant: props.variant,
        size: props.size,
        color: props.color,
        pill: props.pill,
        square: props.square,
        block: props.block,
        disabled: props.disabled,
      })
    )
    return () => (
      <button class={css.value} disabled={props.disabled} style={style.value} type="button">
        {(props.loading || slots.icon) && (
          <i class={icon.value}>{props.loading ? <LoadingIcon class="animate-spin" /> : slots.icon()}</i>
        )}
        {slots.default ? <span>{slots.default()}</span> : null}
      </button>
    )
  },
})
