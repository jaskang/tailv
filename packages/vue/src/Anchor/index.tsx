import { type PropType, defineComponent } from 'vue'
import { createAnchorItemStyle, createAnchorStyle } from '@zonda/style'
import { computed } from 'vue'
import { useControllableValue } from '../utils/useControllableValue'

export type IAnchorItem = {
  key: string
  title?: string
  href?: string
  isGroup?: boolean
  children?: IAnchorItem[]
}

export type AnchorProps = {
  selectedKey?: string
  items: IAnchorItem[]
}

function calculateTranslateY(
  items: IAnchorItem[],
  key: string,
  isGroup = false,
  accumulatedHeight = 0
): number | undefined {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    let itemHeight = 2
    // 计算当前项的高度（基础高度 + 子项额外高度，根据是否是第一层来调整）
    if (isGroup && item.children) {
      itemHeight = i === 0 ? 2 : 4
    }

    // 如果找到了键，返回累积的高度
    if (item.key === key) {
      return accumulatedHeight // 直接返回累积的rem值
    }
    // 累加当前项的高度
    accumulatedHeight += itemHeight

    // 如果存在子项，递归搜索子项
    if (item.children) {
      const translateY = calculateTranslateY(item.children, key, false, accumulatedHeight)
      if (translateY !== undefined) {
        return translateY
      }
      // 如果子项中没有找到，累加子项的高度
      accumulatedHeight += item.children.reduce((total, child) => {
        return total + 2 // 子项没有额外高度
      }, 0)
    }
  }
  // 如果没有找到，返回undefined
  return undefined
}

const AnchorItems = defineComponent({
  name: 'ZAnchorItems',
  props: {
    selectedKey: String,
    items: {
      type: Array as PropType<IAnchorItem[]>,
      default: () => [],
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const { css, itemStyler } = createAnchorItemStyle()

    const onChange = (k: string) => emit('change', k)

    return () => (
      <>
        {props.items.map(item => (
          <div class={css} key={item.key}>
            <div
              class={itemStyler(item.key === props.selectedKey)}
              onClick={() => onChange(item.key)}
            >
              {item.title || item.key}
            </div>
            {item.children && item.children.length > 0 && (
              <AnchorItems
                items={item.children}
                selectedKey={props.selectedKey}
                onChange={onChange}
              />
            )}
          </div>
        ))}
      </>
    )
  },
})

export const Anchor = defineComponent({
  name: 'Anchor',
  props: {
    selectedKey: String,
    items: {
      type: Array as PropType<IAnchorItem[]>,
      default: () => [],
    },
    isGroup: Boolean,
  },
  emits: {
    'update:selectedKey': (val: string) => true,
    change: (val: string) => true,
  },
  setup(props, { emit }) {
    const [state, setState] = useControllableValue<string>(props, {
      valuePropName: 'selectedKey',
    })

    const offset = computed(() => calculateTranslateY(props.items, state.value, props.isGroup))

    const onChange = (val: string) => {
      setState(val)
      emit('change', val)
    }

    const { css, warper, cursor, group: groupCss, groupTitle } = createAnchorStyle()
    return () => (
      <div class={warper}>
        {props.isGroup ? (
          props.items.map(group => (
            <div class={groupCss}>
              <div class={groupTitle}>{group.title || group.key}</div>
              <div class={css}>
                <AnchorItems
                  items={group.children || []}
                  selectedKey={state.value}
                  onChange={onChange}
                />
              </div>
            </div>
          ))
        ) : (
          <div class={css}>
            <AnchorItems items={props.items} selectedKey={state.value} onChange={onChange} />
          </div>
        )}
        {typeof offset.value === 'number' && (
          <div class={cursor} style={{ transform: `translateY(${offset.value}rem)` }} />
        )}
      </div>
    )
  },
})

// const list = [
//   {
//     key: 'a',
//     children: [{ key: 'a-0' }, { key: 'a-1' }, { key: 'a-2' }, { key: 'a-3' }],
//   },
//   {
//     key: 'b',
//     children: [
//       { key: 'b-0', children: [{ key: 'b-0-0' }, { key: 'b-0-1' }, { key: 'b-0-2' }] },
//       { key: 'b-1', children: [{ key: 'b-1-0' }, { key: 'b-1-1' }, { key: 'b-1-2' }] },
//       { key: 'b-2', children: [{ key: 'b-2-0' }, { key: 'b-2-1' }, { key: 'b-2-2' }] },
//     ],
//   },
// ]

// console.log(findKeyOffset(list, 'a')) // [0]
// console.log(findKeyOffset(list, 'b')) // [1]
// console.log(findKeyOffset(list, 'a-0')) // [0,0]
// console.log(findKeyOffset(list, 'a-3')) // [0,3]
// console.log(findKeyOffset(list, 'b-2')) // [1,2]
// console.log(findKeyOffset(list, 'b-1-2')) // [1,1,2]
// console.log(findKeyOffset(list, 'b-2-0')) // [1,2,0]
