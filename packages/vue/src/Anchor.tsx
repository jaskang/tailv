import type { DomProps } from '@/utils'

import { useControllableValue } from 'ahooks'
import { clsx } from 'kotl'
import { useMemo } from 'react'

export type AnchorItem = {
  key: string
  title: string
  children?: AnchorItem[]
}

export interface AnchorProps {
  selectedKey?: string
  onChange?: (key: string) => void
  items: AnchorItem[]
}

const AnchorItems = ({ items, selectedKey, onChange }: Required<AnchorProps>) => {
  return items.map(item => (
    <div className="cursor-pointer px-4 py-1.5" key={item.key}>
      <div
        className={clsx([
          'relative mb-1 block overflow-hidden text-ellipsis whitespace-nowrap only:mb-0',
          item.key === selectedKey ? 'text-primary-500 font-medium' : 'text-gray-700',
        ])}
        onClick={() => onChange(item.key)}
      >
        {item.title}
      </div>
      {item.children && item.children.length > 0 && (
        <AnchorItems items={item.children} selectedKey={selectedKey} onChange={onChange} />
      )}
    </div>
  ))
}

export const Anchor = (props: AnchorProps) => {
  const [value, setValue] = useControllableValue<string>(props, {
    valuePropName: 'selectedKey',
  })
  const offset = useMemo(() => findKeyOffset(props.items, value), [props.items, value])
  const onChange = (key: string) => {
    setValue(key)
  }
  return (
    <div>
      <div className="before:content-[' '] relative ps-[2px] text-sm before:absolute before:start-0 before:top-0 before:h-full before:border-s-2 before:border-s-gray-100">
        {offset !== null && (
          <div
            className="bg-primary-500 absolute start-0 top-1 inline-block h-6 w-[2px] transition-transform"
            style={{
              transform: `translateY(${offset}rem)`,
            }}
          />
        )}
        <AnchorItems items={props.items} selectedKey={value} onChange={onChange} />
      </div>
    </div>
  )
}

export type AnchorGroupProps = DomProps<{
  selectedKey?: string
  onChange?: (key: string) => void
  items: {
    key?: string
    title: string
    children: AnchorItem[]
  }[]
}>

export const AnchorGroup = (props: AnchorGroupProps) => {
  const { items, className, style } = props
  const [value, setValue] = useControllableValue<string>(props, {
    valuePropName: 'selectedKey',
  })
  const onChange = (key: string) => {
    setValue(key)
  }
  return (
    <div className={clsx('z-anchor-group', className)} style={style}>
      {items.map(item => (
        <div className="mt-12 lg:mt-8" key={item.key || item.title}>
          <div className="mb-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
            {item.title}
          </div>
          <Anchor items={item.children} selectedKey={value} onChange={onChange} />
        </div>
      ))}
    </div>
  )
}
