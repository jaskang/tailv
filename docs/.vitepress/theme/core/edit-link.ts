import { useData } from 'vitepress'
import { computed } from 'vue'

export function useEditLink() {
  const { theme, page } = useData()
  return computed(() => {
    const { text = 'Edit this page', pattern = '' } = theme.value.editLink || {}
    let url
    if (typeof pattern === 'function') {
      url = pattern(page.value)
    } else {
      url = pattern.replace(/:path/g, page.value.filePath)
    }
    return { url, text }
  })
}
