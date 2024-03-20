export type NavItem = NavItemWithLink

export interface NavItemWithLink {
  text: string
  link: string
  items?: never
  activeMatch?: string
  target?: string
}

export interface NavItemChildren {
  text: string
  items: NavItemWithLink[]
}

export type Sidebar = SidebarItem[] | Record<string, SidebarItem[]>

export type SidebarItem = {
  text: string
  link: string
  items?: SidebarItem[]
  target?: string
}

export type ThemeConfig = {
  nav: NavItem[]
  sidebar: Sidebar
}
