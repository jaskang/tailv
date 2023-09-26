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
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
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
    const cssVars = useColorVars('z-btn', () => {
      switch (props.variant) {
        case 'solid':
          return {
            'text-color': 'white',
            'bg-color': `${props.color}.500`,
            'bg-color-hover': `${props.color}.600`,
            'outline-color': `${props.color}.500`,
          }
        case 'soft':
          return {
            'text-color': `${props.color}.600`,
            'bg-color': `${props.color}.100`,
            'bg-color-hover': `${props.color}.200`,
            'outline-color': `${props.color}.500`,
          }
        case 'plain':
          return {
            'text-color': `${props.color}.600`,
            'bg-color-hover': `${props.color}.100`,
            'outline-color': `${props.color}.500`,
          }
        case 'link':
          return {
            'text-color': `${props.color}.600`,
            'outline-color': `${props.color}.500`,
          }
        default:
          return {
            'text-color': 'slate.700',
            'bg-color': 'white',
            'bg-color-hover': 'slate.50',
            'border-color': 'slate.300',
            'border-color-hover': 'slate.300',
            'outline-color': 'primary.500',
          }
      }
    })

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    const cls = computed(() => style(props))
    return () => (
      <button
        style={{
          '--btn-size': {
            xs: token.var('spacing.row-xs'),
            sm: token.var('spacing.row-sm'),
            md: token.var('spacing.row-md'),
            lg: token.var('spacing.row-lg'),
            xl: token.var('spacing.row-xl'),
          }[props.size],
        }}
        class={cx(
          cls.value,
          css({
            color: `${props.color}.500`,
          })
        )}
        type="button"
        disabled={props.disabled}
        onClick={onClick}
      >
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
