import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'
import { useStyle } from './style'
import { useTheme } from '@/theme'

const props = {
  variant: {
    type: String as PropType<'solid' | 'soft' | 'outline' | 'link' | 'subtle'>,
    default: 'solid',
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error' | ColorKey>,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  ring: {
    type: Boolean,
    default: true,
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

export type ButtonCssVars = {
  '--t-btn-text-color': string
  '--t-btn-text-color-hover': string
  '--t-btn-border-color': string
  '--t-btn-border-color-hover': string
  '--t-btn-bg': string
  '--t-btn-bg-hover': string
  '--t-btn-ring-color': string
}

export const Button = defineComponent({
  name: 'TButton',
  props,
  emits: {
    click: (payload: MouseEvent) => {},
  },
  slots: Object as SlotsType<{
    default: () => VNode
    item: { data: number }
  }>,
  setup(props, { slots, emit }) {
    const { getColorKey } = useTheme()

    const { cssVars, cls } = useStyle(() => {
      return {
        ...props,
        rounded: props.rounded || props.circle,
        square: props.square || props.circle,
      }
    })

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
  },
})
