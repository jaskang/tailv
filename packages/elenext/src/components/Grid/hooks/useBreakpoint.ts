import { onBeforeMount, reactive } from 'vue'

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

const screens = reactive<ScreenMap>({
  // lg: true
})

function useBreakpoint() {
  onBeforeMount(() => {
    if (Object.keys(screens).length < RESPONSIVE_ARRAY.length) {
      const keys = Object.keys(RESPONSIVE_MAP) as Breakpoint[]
      keys.forEach(screen => {
        const matchMediaQuery = RESPONSIVE_MAP[screen]!
        const mql = window.matchMedia(matchMediaQuery)
        const listener = (event: { matches: boolean }) => {
          const { matches } = event
          // console.log(event)
          screens[screen] = matches
        }
        mql.addEventListener('change', listener)
        // headlers[matchMediaQuery] = { mql, listener }
        listener(mql)
      })
    }
  })
  return screens
}

export default useBreakpoint
