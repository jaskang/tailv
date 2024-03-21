import { IAnchorItem } from 'tailv'

export type NavItem = NavItemWithLink

export interface NavItemWithLink {
  label: string
  link: string
  children?: never
  activeMatch?: string
  target?: string
}

export interface NavItemChildren {
  label: string
  children: NavItemWithLink[]
}

type Sidebar = {
  title: string
  children: Array<IAnchorItem & { link: string }>
}

export type ThemeConfig = {
  nav: NavItem[]
  sidebar: Sidebar[] | Record<string, Sidebar[]>
}
