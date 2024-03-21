import { AnchorItem } from 'tailv'

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
  children: Array<AnchorItem & { link: string }>
}

export interface Outline {
  /**
   * outline 中要显示的标题级别。
   * @default [2,3]
   */
  level?: [number, number]

  /**
   * 显示在 outline 上的标题。
   *
   * @default 'On this page'
   */
  label?: string
}

export type ThemeConfig = {
  outline?: Outline
  nav: NavItem[]
  sidebar: Sidebar[] | Record<string, Sidebar[]>
}
