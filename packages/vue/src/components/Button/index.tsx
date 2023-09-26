import {
  type ComponentObjectPropsOptions,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import type { Color } from '@/theme/colors'
import { useColorVars } from '@/utils/style'

import { css, cx } from '../../../styled-system/css'
import { token } from '../../../styled-system/tokens'
import { LoadingIcon } from '../Icon'
import { style } from './style'

const props = {
  variant: {
    type: String as PropType<'default' | 'solid' | 'soft' | 'outline' | 'ghost' | 'link'>,
    default: 'default',
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  block: Boolean,
  pill: Boolean,
  square: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
} satisfies ComponentObjectPropsOptions

export type ButtonInnerProps = ExtractPropTypes<typeof props>
export type ButtonProps = ExtractPublicPropTypes<typeof props>

export const Button = defineComponent({
  name: 'ZButton',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    const cls = computed(() => style(props))
    return () => (
      <button class={cls.value} type="button" disabled={props.disabled} onClick={onClick}>
        {hasIcon.value && (
          <i class="z-btn_icon">
            {props.loading ? <LoadingIcon class="animate-spin" /> : slots.icon?.()}
          </i>
        )}
        {slots.default && <span class="z-btn_body">{slots.default()}</span>}
      </button>
    )
  },
})
