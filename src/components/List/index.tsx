import { classed } from '@tw-classed/core'
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

import { SelectorIcon } from '../Icon'

const props = {
  value: [String, Number, Array] as PropType<OptionValue | Array<OptionValue>>,
  options: {
    type: Array as PropType<OptionItem[]>,
    default: () => [],
  },
  // 多选
  multiple: Boolean,
}

export type ListProps = ExtractPropTypes<typeof props>

export type ListPublicProps = ExtractPublicPropTypes<typeof props>

export type ListCssVars = {
  '--t-list-accent-color': string
  '--t-list-ring-color': string
}

export const List = defineComponent({
  name: 'TList',
  props,
  emits: {
    'update:value': (val: Required<ListProps>['value']) => true,
    change: (val: Required<ListProps>['value']) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
  }>,
  setup(props, { slots, emit, attrs }) {
    const { colors } = useTheme()

    const [val, setVal] = useControllable(
      () => (props.multiple ? toMultipleVal(props.value) : props.value),
      val => {
        emit('update:value', val)
        emit('change', val)
      },
      props.multiple ? [] : undefined
    )

    const cssVars = computed<ListCssVars>(() => ({
      '--t-list-accent-color': colors.value.primary[500],
      '--t-list-ring-color': colors.value.primary[500],
    }))

    const itemClickHandler = (item: OptionItem) => {
      if (item.disabled) return
      if (props.multiple) {
        const set = new Set((val.value as any[]) || [])
        if (set.has(item.value)) {
          set.delete(item.value)
        } else {
          set.add(item.value)
        }
        setVal(Array.from(set))
      } else {
        setVal(item.value)
      }
    }
    const isActived = (item: OptionItem) => {
      if (props.multiple) {
        return (val.value as any[]).includes(item.value)
      }
      return item.value === val.value
    }
    return () => (
      <ul
        style={cssVars.value}
        class="w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none "
        tabindex="-1"
      >
        {props.options.length > 0 ? (
          props.options.map(item => (
            <li
              class={[
                'relative flex cursor-default select-none px-3 py-2 transition-colors ease-in-out',
                isActived(item)
                  ? 'bg-[--t-list-accent-color] font-semibold text-white'
                  : item.disabled
                  ? 'font-normal text-gray-400'
                  : 'font-normal text-gray-700 hover:bg-gray-100',
              ]}
              onClick={() => itemClickHandler(item)}
            >
              <span class="block truncate font-normal"> {item.label} </span>
            </li>
          ))
        ) : (
          <li>没有数据</li>
        )}
      </ul>
    )
  },
})
