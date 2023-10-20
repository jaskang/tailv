import type { HTMLAttributes, ReactNode } from 'react'

type SidebarItem = {
  group: string
  children?: {
    key: string
    label: ReactNode
  }[]
}

interface SidebarProps extends HTMLAttributes<HTMLUListElement> {
  items: SidebarItem[]
}

export const DocSidebar = ({ items }: SidebarProps) => {
  return (
    <nav className=" relative lg:text-sm lg:leading-6">
      <ul className="">
        {items.map(item => (
          <li key={item.group} className="mt-12 lg:mt-8">
            <h5 className="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
              {item.group}
            </h5>
            <ul className="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2">
              {item.children?.map(child => (
                <li key={child.key}>
                  <a
                    href=""
                    className="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
