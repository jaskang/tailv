import { type PropType, defineComponent } from 'vue'
import { createAnchorStyle } from '@zonda/style'
import { computed } from 'vue'
import { useControllableValue } from '../utils/useControllableValue'

export type IAnchorItem = {
  key: string
  title: string
  href?: string
  isGroup?: boolean
  children?: IAnchorItem[]
}

export type AnchorProps = {
  selectedKey?: string
  items: IAnchorItem[]
}

// 查找当前 key 在 items 中的位置
function findKeyOffset(items: IAnchorItem[], key: string): number | null {
  let index = 0
  let group = 0
  function find(arr: IAnchorItem[]) {
    for (let i = 0; i < arr.length; i++) {
      const { key: childKey, children } = arr[i]
      if (childKey === key) {
        return true
      }
      index++
      if (children && children.length > 0) {
        if (find(children)) {
          return true
        }
        group++
      }
    }
    return false
  }
  console.log('findKeyOffset')
  if (find(items)) {
    return index * 2 + group * 0.25
    // return index * 2
  }
  return null
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
          <>
            <div class={css} key="{item.key}">
              <div
                class={itemStyler(item.key === props.selectedKey)}
                onClick={() => onChange(item.key)}
              >
                {item.title}
              </div>
              {item.children && item.children.length > 0 && (
                <AnchorItems
                  items={item.children}
                  selectedKey={props.selectedKey}
                  onChange={onChange}
                />
              )}
            </div>
          </>
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
    'update:selectedKey': (val: string) => {},
    change: (val: string) => {},
  },
  setup(props, { emit }) {
    const [state, setState] = useControllableValue<string>(props, {
      valuePropName: 'selectedKey',
    })

    const offset = computed(() => findKeyOffset(props.items, state.value))

    const onChange = (val: string) => {
      setState(val)
      emit('change', val)
    }

    const { css, warper, cursor } = createAnchorStyle()
    return () => (
      <div class={warper}>
        <div class={css}>
          {typeof offset === 'number' && (
            <div class={cursor} style="{ transform: `translateY(${offset}rem)` }" />
          )}
          {props.isGroup ? (
            props.items.map(group => (
              <div class="z-anchor-group mt-12 lg:mt-8">
                <div class="mb-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
                  {group.title}
                </div>
                <AnchorItems
                  items={group.children || []}
                  selectedKey={state.value}
                  onChange={onChange}
                />
              </div>
            ))
          ) : (
            <AnchorItems items={props.items} selectedKey={state.value} onChange={onChange} />
          )}
        </div>
      </div>
    )
  },
})
