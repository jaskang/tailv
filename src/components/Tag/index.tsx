import { computed, defineComponent, type ExtractPropTypes, type ExtractPublicPropTypes, type PropType } from 'vue'

import { type ColorKey } from '@/theme'
import { clsVariants } from '@/utils/clst'
import { useColorVar } from '@/utils/style'

const props = {
  variant: {
    type: String as PropType<'solid' | 'outline'>,
    default: 'solid',
  },
  color: {
    type: String as PropType<ColorKey>,
  },
  closeable: Boolean,
  dot: Boolean,
  pill: Boolean,
}

export type TagProps = ExtractPropTypes<typeof props>

export type TagPublicProps = ExtractPublicPropTypes<typeof props>

const createClass = clsVariants(
  `inline-flex items-center text-xs font-medium px-2 py-1 bg-[--t-tag-bg] text-[--t-tag-text]`,
  {
    variants: {
      variant: {
        outline: 'ring-1 ring-inset ring-[--t-tag-border] dark:ring-gray-50',
        solid: 'shadow-sm',
      },
      pill: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
  }
)

export const Tag = defineComponent({
  name: 'TTag',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  setup(props, { slots, emit }) {
    const cssVars = useColorVar('t-tag', () => {
      return {
        text: props.color ? `${props.color}.700` : 'slate.700',
        bg: props.color ? `${props.color}.100` : 'white',
        dot: props.color ? `${props.color}.500` : 'slate.500',
        border: props.variant === 'solid' ? `transparent` : props.color ? `${props.color}.300` : 'gray.300',
        close: props.color ? `${props.color}.200` : 'slate.200',
      }
    })
    const cls = computed(() =>
      createClass({
        variant: props.variant,
        pill: props.pill,
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
        {props.closeable && (
          <button
            type="button"
            class={[
              'relative ml-0.5 -mr-1 h-4 w-4 ',
              outlineDot.value ? 'hover:bg-gray-200' : 'hover:bg-[--t-tag-close]',
              props.pill ? 'rounded-full' : 'rounded-sm',
            ]}
          >
            <svg
              viewBox="0 0 14 14"
              class={['h-4 w-4', outlineDot.value ? 'stroke-gray-700' : 'stroke-[--t-tag-text]']}
            >
              <path d="M4 4l6 6m0-6l-6 6" />
            </svg>
          </button>
        )}
      </div>
    )
  },
})
