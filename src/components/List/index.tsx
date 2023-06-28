import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { useTheme } from '@/theme'

const props = {
  color: {
    type: String as PropType<Color>,
  },
  loading: Boolean,
  disabled: Boolean,
}

export type ListProps = ExtractPropTypes<typeof props>

export type ListPublicProps = ExtractPublicPropTypes<typeof props>

export type ListCssVars = {
  '--t-btn-text-color': string
  '--t-btn-border-color': string
  '--t-btn-bg': string

  '--t-btn-text-color-hover': string
  '--t-btn-border-color-hover': string
  '--t-btn-bg-hover': string

  '--t-btn-ring-color': string
}

export const List = defineComponent({
  name: 'TList',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
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
