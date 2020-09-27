import { onMounted, onUnmounted, reactive } from 'vue'

export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ScreenMap = Partial<Record<Breakpoint, boolean>>

export const responsiveArray: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']

export const responsiveMap: Partial<Record<Breakpoint, string>> = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
}
function useBreakpoint() {
  const keys = Object.keys(responsiveMap) as Breakpoint[]
  const screens = reactive<ScreenMap>({})
  const headlers = {} as {
    [prop: string]: {
      mql: MediaQueryList
      listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null
    }
  }
  onMounted(() => {
    keys.forEach(screen => {
      const matchMediaQuery = responsiveMap[screen]!
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
      const matchMediaQuery = responsiveMap[screen]!
      const handler = headlers[matchMediaQuery]
      handler?.mql.removeListener(handler?.listener)
    })
  })
  return { screens }
}

export default useBreakpoint
