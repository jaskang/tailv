import {
  ref,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
  cloneVNode,
} from 'vue'
import { useTheme } from '@/theme'
import { Input } from '../Input'

const props = {
  value: String,
  before: String,
  after: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  disabled: Boolean,
}

export type SelectProps = ExtractPropTypes<typeof props>

export type SelectPublicProps = ExtractPublicPropTypes<typeof props>

export type SelectCssVars = {
  '--t-select-ring-color': string
}

export const Select = defineComponent({
  name: 'TSelect',
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

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => <></>
  },
})
