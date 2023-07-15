import { tv } from 'tailwind-variants'
import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
} from 'vue'

import { type ColorKey } from '@/theme'
import { useColorVar } from '@/utils/style'

const props = {
  variant: {
    type: String as PropType<'solid' | 'outline'>,
    default: 'solid',
  },
  color: {
    type: String as PropType<ColorKey>,
    default: 'gray',
  },
  dot: Boolean,
  pill: Boolean,
}

export type BadgeProps = ExtractPropTypes<typeof props>

export type BadgePublicProps = ExtractPublicPropTypes<typeof props>

const createClass = tv({
  base: `inline-flex items-center rounded-md text-xs font-medium px-2 py-1 bg-[--t-badge-bg] text-[--t-badge-text]`,
  variants: {
    variant: {
      outline: 'ring-1 ring-inset ring-[--t-badge-border]',
      solid: '',
    },
    pill: {
      true: 'rounded-full',
    },
    dot: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      dot: true,
      class: 'bg-transparent text-gray-900 ring-gray-300',
    },
  ],
})

export const Badge = defineComponent({
  name: 'TBadge',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  setup(props, { slots, emit }) {
    const cssVars = useColorVar('t-badge', () => {
      return props.variant === 'solid'
        ? {
            text: `${props.color}.700`,
            bg: `${props.color}.100`,
            dot: `${props.color}.500`,
            border: `transparent`,
          }
        : {
            text: `${props.color}.700`,
            bg: `${props.color}.50`,
            dot: `${props.color}.500`,
            border: `${props.color}.300`,
          }
    })
    const cls = computed(() =>
      createClass({
        variant: props.variant,
        pill: props.pill,
        dot: props.dot,
      })
    )
    return () => (
      <div style={cssVars.value} class={cls.value}>
        {props.dot && (
          <svg class="h-[0.5em] w-[0.5em] mr-1.5 fill-[--t-badge-dot]" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx="3" cy="3" r="3" />
          </svg>
        )}
        {slots.default?.()}
      </div>
    )
  },
})
