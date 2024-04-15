import { type AnchorHeader, type IAnchorItem, useAnchor } from 'tailv'
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

export function usePageHeaders() {
  const { page } = useDataByTheme()
  const title = ref('On this page')
  const current = ref('')
  const headers = computed(() => headersToAnchorItems(page.value.headers))

  return {
    title,
    headers,
    current,
  }
}
