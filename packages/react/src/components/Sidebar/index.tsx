import type { HTMLAttributes, ReactNode } from 'react'

type SidebarItemType = {
  key: string
  label: ReactNode
  icon?: ReactNode
  disabled?: boolean
  children?: SidebarItemType[]
}

interface SidebarProps extends HTMLAttributes<HTMLUListElement> {
  items: SidebarItemType[]
}

export const DocSidebar = ({ items }: SidebarProps) => {
  return (
    <ul className="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2">
      {items.map(item => (
        <li key={item.key} className="-ml-px block border-l border-transparent pl-4 ">
          <p className="mb-8 font-semibold text-slate-900 dark:text-slate-200">{item.label}</p>
          {item.children && <Sidebar items={item.children} />}
        </li>
      ))}
    </ul>
  )
}
