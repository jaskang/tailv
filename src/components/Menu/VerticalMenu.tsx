import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
} from 'vue'

import type { Color } from '@/theme/colors'

const props = {
  color: {
    type: String as PropType<Color>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export type VerticalMenuProps = ExtractPublicPropTypes<typeof props>

export type VerticalMenuCssVars = {
  '--z-btn-text-color': string
  '--z-btn-border-color': string
  '--z-btn-bg': string

  '--z-btn-text-color-hover': string
  '--z-btn-border-color-hover': string
  '--z-btn-bg-hover': string

  '--z-btn-ring-color': string
}

export const VerticalMenu = defineComponent({
  name: 'ZVerticalMenu',
  props,
  emits: {} as {
    click(payload: MouseEvent): void
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number }
    item: { data: number }
  }>,
  setup(props, { slots, emit }) {
    const { cssVars, cls } = useStyle(() => {
      return {
        ...props,
      }
    })

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => (
      <div style={cssVars.value} class={cls.value}>
        {slots.default?.()}
      </div>
    )
  },
})
