import { computed } from 'vue'
import { mergeClass } from '@elenext/shared'

const useMergeClass = (getter: () => Parameters<typeof mergeClass>) => computed(() => mergeClass(getter()))

export default useMergeClass
