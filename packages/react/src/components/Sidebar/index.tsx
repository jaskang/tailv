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

export const Sidebar = ({ items }: SidebarProps) => {
  return (
    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
      {items.map(item => (
        <li key={item.key} className="block border-l pl-4 -ml-px border-transparent ">
          <p className="mb-8 font-semibold text-slate-900 dark:text-slate-200">
            {item.label}
          </p>
          {item.children && <Sidebar items={item.children} />}
        </li>
      ))}
    </ul>
  )
}
