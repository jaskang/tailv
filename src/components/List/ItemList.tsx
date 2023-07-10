import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/controllable'
import { useTheme } from '@/theme'
import { type OptionItem, type OptionValue, toMultipleVal } from '@/utils/option'

const props = {
  value: [String, Number, Array] as PropType<OptionValue | Array<OptionValue>>,
  items: {
    type: Array as PropType<OptionItem[]>,
    default: () => [],
  },
  // 多选
  multiple: Boolean,
}

export type ItemListProps = ExtractPropTypes<typeof props>

export type ItemListPublicProps = ExtractPublicPropTypes<typeof props>

export type ItemListCssVars = {
  '--t-itemList-accent-color': string
}

export const ItemList = defineComponent({
  name: 'TItemList',
  props,
  emits: {
    'update:value': (val: Required<ItemListProps>['value']) => true,
    change: (val: Required<ItemListProps>['value']) => true,
  },
  slots: Object as SlotsType<{
    item: (props: { item: OptionItem; selected: boolean }) => VNode[]
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

    const cssVars = computed<ItemListCssVars>(() => ({
      '--t-itemList-accent-color': colors.value.primary[500],
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
    const isSelected = (item: OptionItem) => {
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
        {props.items.length > 0 ? (
          props.items.map(item =>
            slots.item ? (
              slots.item({ item, selected: isSelected(item) })
            ) : (
              <li
                class={[
                  'relative flex cursor-default select-none px-3 py-2 transition-colors ease-in-out',
                  item.disabled
                    ? 'font-normal text-gray-400'
                    : isSelected(item)
                    ? 'cursor-pointer font-semibold hover:text-white hover:bg-[--t-itemList-accent-color]'
                    : 'cursor-pointer font-normal text-gray-700 hover:text-white hover:bg-[--t-itemList-accent-color]',
                ]}
                onClick={() => itemClickHandler(item)}
              >
                <span class="flex-1 block truncate">{item.label} </span>
                {isSelected(item) && (
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </li>
            )
          )
        ) : (
          // TODO: no data
          <li>没有数据</li>
        )}
      </ul>
    )
  },
})
