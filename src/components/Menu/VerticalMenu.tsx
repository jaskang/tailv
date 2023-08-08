import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
} from 'vue'

import { useTheme } from '@/theme'
import type { UserColor } from '@/theme/colors'

const props = {
  color: {
    type: String as PropType<UserColor>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export type VerticalMenuProps = ExtractPublicPropTypes<typeof props>

export type VerticalMenuCssVars = {
  '--t-btn-text-color': string
  '--t-btn-border-color': string
  '--t-btn-bg': string

  '--t-btn-text-color-hover': string
  '--t-btn-border-color-hover': string
  '--t-btn-bg-hover': string

  '--t-btn-ring-color': string
}

export const VerticalMenu = defineComponent({
  name: 'TVerticalMenu',
  props,
  emits: {} as {
    click(payload: MouseEvent): void
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number }
    item: { data: number }
  }>,
  setup(props, { slots, emit }) {
    const { colors } = useTheme()

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
