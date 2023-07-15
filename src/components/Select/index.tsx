import {
  cloneVNode,
  computed,
  defineComponent,
  type EmitsOptions,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  ref,
  type SlotsType,
  toRef,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/controllable'
import { useTheme } from '@/theme'
import { type OptionItem, type OptionValue, toMultipleVal } from '@/utils/option'
import { useColorVar } from '@/utils/style'

import { SelectorIcon } from '../Icon'
import { ItemList } from '../List/ItemList'
import { Popper } from '../Popper'

const props = {
  value: [String, Number, Array] as PropType<OptionValue | Array<OptionValue>>,
  placeholder: String,
  disabled: Boolean,
  multiple: Boolean,
  options: {
    type: Array as PropType<OptionItem[]>,
    default: () => [],
  },
}

export type SelectProps = ExtractPropTypes<typeof props>

export type SelectPublicProps = ExtractPublicPropTypes<typeof props>

export const Select = defineComponent({
  name: 'TSelect',
  props,
  emits: {
    'update:value': (_val: string | number | OptionValue[]) => true,
    change: (_val: string | number | OptionValue[]) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
  }>,
  setup(props, { slots, emit, attrs }) {
    const { colors } = useTheme()
    const popper = ref()

    const [val, setVal] = useControllable(
      () => (props.multiple ? toMultipleVal(props.value) : props.value),
      val => {
        emit('update:value', val)
        emit('change', val)
      }
    )

    const cssVars = useColorVar('t-select', {
      accent: 'primary.500',
      ring: 'primary.500',
    })

    const changeHandler = () => {
      popper.value?.close()
    }
    return () => (
      <Popper ref={popper} trigger="click" placement="bottom" width="full">
        {{
          default: () => (
            <button
              {...attrs}
              type="button"
              style={cssVars.value}
              class="relative h-[calc(theme(spacing.9)_+_2px)] w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 text-left text-sm text-gray-900 shadow-sm focus:border-[--t-select-ring] focus:outline-none focus:ring-1 focus:ring-[--t-select-ring] disabled:cursor-not-allowed"
            >
              <div class="truncate">{val.value}</div>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon class="scale-125" />
              </span>
            </button>
          ),
          content: () => (
            <ItemList
              value={val.value}
              onUpdate:value={setVal}
              onChange={changeHandler}
              items={props.options}
            ></ItemList>
          ),
        }}
      </Popper>
    )
  },
})
