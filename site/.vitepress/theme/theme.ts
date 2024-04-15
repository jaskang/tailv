import { type IAnchorItem } from 'tailv'

export type NavItem = NavItemWithLink

export interface NavItemWithLink {
  title: string
  link: string
  activeMatch: string
  children?: never
  target?: string
}

export interface NavItemChildren {
  label: string
  children: NavItemWithLink[]
}

export interface Sidebar {
  title: string
  link: string
  children?: Array<Sidebar>
}

export type ThemeConfig = {
  nav: NavItem[]
  sidebar: Record<string, Sidebar[]>
}
