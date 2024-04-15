import { type IAnchorItem, useAnchor } from 'tailv'
import { computed, onMounted, ref } from 'vue'
import { useDataByTheme } from '../utils'
import type { Header } from 'vitepress'

function headersToAnchorItems(headers: Header[]): IAnchorItem[] {
  return headers.map(header => ({
    id: header.slug,
    title: header.title,
    link: header.link,
    children: header.children ? headersToAnchorItems(header.children) : undefined,
  }))
}

export function useOutline() {
  const { page } = useDataByTheme()
  const title = ref('On this page')
  const headers = computed(() => headersToAnchorItems(page.value.headers))
  const { current } = useAnchor(headers, {})

  return {
    title,
    headers,
    current,
  }
}
