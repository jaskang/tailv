import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type ObjectEmitsOptions,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import { type Color, useTheme } from '@/theme'
import type { ColorAlias } from '@/theme/colors'

import { LoadingIcon } from '../Icon'
import { useButtonStyle } from './style'

const props = {
  variant: {
    type: String as PropType<'default' | 'solid' | 'soft' | 'outlined' | 'plain' | 'link'>,
    default: 'default',
  },
  color: {
    type: String as PropType<ColorAlias>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  rounded: Boolean,
  square: Boolean,
  circle: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
}

export type ButtonProps = ExtractPropTypes<typeof props>

export type ButtonPublicProps = ExtractPublicPropTypes<typeof props>

export const Button = defineComponent({
  name: 'TButton',
  props,
  emits: {} as {
    click(payload: MouseEvent): void
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots, emit, attrs }) {
    const [style, cls] = useButtonStyle(() => props)

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => (
      <button style={style.value} class={cls.value} type="button" disabled={props.disabled} onClick={onClick}>
        {hasIcon.value && (
          <i class="t-btn-icon h-[1em] w-[1em] scale-125 [&+*]:ml-[0.5em] [&>svg]:!h-full [&>svg]:!w-full">
            {props.loading ? <LoadingIcon class="animate-spin" /> : slots.icon?.()}
          </i>
        )}
        {slots.default && <span class="t-btn_body flex items-center">{slots.default()}</span>}
      </button>
    )
  },
})
