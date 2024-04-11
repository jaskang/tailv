import { useRoute } from 'vitepress'
import { computed } from 'vue'

import { normalize, useDataByTheme } from '../utils'

export function useNavbar() {
  const { theme } = useDataByTheme()
  const route = useRoute()

  const items = computed(() => theme.value.nav)
  const current = computed(() => {
    const item = [...items.value].reverse().find(i => new RegExp(i.activeMatch).test(normalize(route.path)))
    return item?.link || ''
  })

  return {
    items,
    current,
  }
}
