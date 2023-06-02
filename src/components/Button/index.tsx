import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'
import LoadingIcon from '../svgs/LoadingIcon.vue'
import { useStyle } from './style'
import { useTheme, type Color } from '@/theme'

const props = {
  variant: {
    type: String as PropType<'solid' | 'soft' | 'outline' | 'link' | 'subtle'>,
    default: 'solid',
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  color: {
    type: String as PropType<Color>,
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
  '--t-btn-border-color': string
  '--t-btn-bg': string

  '--t-btn-text-color-hover': string
  '--t-btn-border-color-hover': string
  '--t-btn-bg-hover': string

  '--t-btn-ring-color': string
}

export const Button = defineComponent({
  name: 'TButton',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
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
    return () => (
      <button style={cssVars.value} class={cls.value} type="button" disabled={props.disabled} onClick={onClick}>
        {hasIcon.value && (
          <i class="t-btn-icon h-[1em] w-[1em] scale-125 [&+*]:ml-[0.5em] [&>svg]:!h-full [&>svg]:!w-full">
            {props.loading ? <LoadingIcon class="animate-spin" /> : slots.icon?.()}
          </i>
        )}
        {slots.default && <span class="t-btn_body">{slots.default()}</span>}
      </button>
    )
  },
})
