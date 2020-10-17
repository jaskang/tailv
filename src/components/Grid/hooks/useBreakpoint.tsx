import { onMounted, onUnmounted, reactive } from 'vue'

export type Breakpoint = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ScreenMap = Partial<Record<Breakpoint, boolean>>

export const RESPONSIVE_ARRAY: Breakpoint[] = ['xl', 'lg', 'md', 'sm', 'xs']

export const RESPONSIVE_MAP: Partial<Record<Breakpoint, string>> = {
  xs: '(max-width: 767px)',
  sm: '(min-width: 768px)',
  md: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
  xl: '(min-width: 1400px)'
}
function useBreakpoint() {
  const keys = Object.keys(RESPONSIVE_MAP) as Breakpoint[]
  const screens = reactive<ScreenMap>({})
  const headlers = {} as {
    [prop: string]: {
      mql: MediaQueryList
      listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null
    }
  }
  onMounted(() => {
    keys.forEach(screen => {
      const matchMediaQuery = RESPONSIVE_MAP[screen]!
      const mql = window.matchMedia(matchMediaQuery)
      const listener = ({ matches }: { matches: boolean }) => {
        screens[screen] = matches
      }
      mql.addListener(listener)
      headlers[matchMediaQuery] = { mql, listener }
      listener(mql)
    })
  })
  onUnmounted(() => {
    keys.forEach(screen => {
      const matchMediaQuery = RESPONSIVE_MAP[screen]!
      const handler = headlers[matchMediaQuery]
      handler?.mql.removeListener(handler?.listener)
    })
  })
  return { screens }
}

export default useBreakpoint
