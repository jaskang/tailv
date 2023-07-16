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
  close: Boolean,
  dot: Boolean,
  pill: Boolean,
}

export type TagProps = ExtractPropTypes<typeof props>

export type TagPublicProps = ExtractPublicPropTypes<typeof props>

const createClass = tv({
  base: `inline-flex items-center rounded-md text-xs font-medium px-2 py-1 bg-[--t-tag-bg] text-[--t-tag-text]`,
  variants: {
    variant: {
      outline: 'ring-1 ring-inset ring-[--t-tag-border]',
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

export const Tag = defineComponent({
  name: 'TTag',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  setup(props, { slots, emit }) {
    const cssVars = useColorVar('t-tag', () => {
      return props.variant === 'solid'
        ? {
            text: `${props.color}.700`,
            bg: `${props.color}.100`,
            dot: `${props.color}.500`,
            border: `transparent`,
            close: `${props.color}.200`,
          }
        : {
            text: `${props.color}.700`,
            bg: `${props.color}.50`,
            dot: `${props.color}.500`,
            border: `${props.color}.300`,
            close: `${props.color}.200`,
          }
    })
    const cls = computed(() =>
      createClass({
        variant: props.variant,
        pill: props.pill,
        dot: props.dot,
      })
    )

    const outlineDot = computed(() => props.variant === 'outline' && props.dot)
    return () => (
      <div style={cssVars.value} class={`${cls.value} group`}>
        {props.dot && (
          <svg class="h-[0.5em] w-[0.5em] mr-1.5 fill-[--t-tag-dot]" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx="3" cy="3" r="3" />
          </svg>
        )}
        {slots.default?.()}
        <button
          type="button"
          class={[
            'relative ml-0.5 -mr-1 h-4 w-4 ',
            outlineDot.value ? 'hover:bg-gray-200' : 'hover:bg-[--t-tag-close]',
            props.pill ? 'rounded-full' : 'rounded-sm',
          ]}
        >
          <svg viewBox="0 0 14 14" class={['h-4 w-4', outlineDot.value ? 'stroke-gray-700' : 'stroke-[--t-tag-text]']}>
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
        </button>
      </div>
    )
  },
})
