import { type AnchorHeader, type AnchorItem, useAnchor } from 'tailv'
import { computed, onMounted, ref } from 'vue'
import { useDataByTheme } from '../utils'

export function useOutline() {
  const container = ref<HTMLElement>()
  const { theme, page } = useDataByTheme()
  const title = ref(theme.value.outline?.label || 'On this page')
  const { headers, current } = useAnchor(container, {
    range: theme.value.outline?.level,
    offset: 135,
  })

  function headers2AnchorItems(headers: AnchorHeader[]): AnchorItem[] {
    return headers.map(header => ({
      key: header.id,
      label: header.title,
      link: header.link,
      children: header.children ? headers2AnchorItems(header.children) : undefined,
    }))
  }
  const items = computed(() => headers2AnchorItems(headers.value))
  onMounted(() => {
    container.value = document.querySelector<HTMLElement>('.vp-doc') || undefined
  })
  return {
    title,
    items,
    headers,
    current,
  }
}
