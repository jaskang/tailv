import { useData } from 'vitepress'
import { ThemeConfig } from './theme'

export function useDataByTheme() {
  return useData<ThemeConfig>()
}
