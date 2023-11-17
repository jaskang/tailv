import {
  type PropType,
  defineComponent,
  type SlotsType,
  ComponentObjectPropsOptions,
  ExtractPublicPropTypes,
} from 'vue'
import { useStyle } from '../utils/style'
import { type ColorName, createButtonStyle } from '@zonda/style'

const props = {
  variant: {
    type: String as PropType<'default' | 'ghost' | 'link' | 'outline' | 'soft' | 'solid'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String as PropType<ColorName>,
    default: 'primary',
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
  emits: [],
  slots: {} as SlotsType<{
    default: any
    icon: any
  }>,
  setup(props, { emit, slots }) {
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
          <i class={icon.value}>
            {props.loading ? <LoadingIcon class="animate-spin" /> : slots.icon()}
          </i>
        )}
        {slots.default()}
      </button>
    )
  },
})
