import { useControllableValue } from 'ahooks'
import { clsx } from 'kotl'
import { useMemo, type ReactNode } from 'react'

export type AnchorItem = {
  key: string
  title: ReactNode
  children?: AnchorItem[]
}

export interface AnchorProps {
  value?: string
  onChange?: (key: string) => void
  items: AnchorItem[]
}

// 查找当前 key 在 items 中的位置
function findKeyOffset(items: AnchorItem[], key: string): number | null {
  let index = 0
  let group = 0
  function find(arr: AnchorItem[]) {
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
  if (find(items)) {
    return index * 2 + group * 0.25
    // return index * 2
  }
  return null
}

const AnchorItems = ({ items, value, onChange }: Required<AnchorProps>) => {
  return items.map(item => (
    <div className="cursor-pointer px-4 py-1.5" key={item.key}>
      <div
        className={clsx([
          'relative mb-1 block overflow-hidden text-ellipsis whitespace-nowrap only:mb-0',
          item.key === value ? 'text-primary-500 font-medium' : 'text-gray-700',
        ])}
        onClick={() => onChange(item.key)}
      >
        {item.title}
      </div>
      {item.children && item.children.length > 0 && (
        <AnchorItems items={item.children} value={value} onChange={onChange} />
      )}
    </div>
  ))
}

export const Anchor = (props: AnchorProps) => {
  const [value, setValue] = useControllableValue<string>(props)
  const offset = useMemo(() => findKeyOffset(props.items, value), [props.items, value])
  const onChange = (key: string) => {
    setValue(key)
  }
  return (
    <div>
      <div className="before:content-[' '] text-sm relative ps-[2px] before:absolute before:start-0 before:top-0 before:h-full before:border-s-2 before:border-s-gray-100">
        {offset !== null && (
          <div
            className="bg-primary-500 absolute start-0 top-1 inline-block h-6 w-[2px] transition-transform"
            style={{
              transform: `translateY(${offset}rem)`,
            }}
          />
        )}
        <AnchorItems items={props.items} value={value} onChange={onChange} />
      </div>
    </div>
  )
}
