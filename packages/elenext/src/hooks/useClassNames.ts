import { computed } from 'vue'
import { ClassValue, mergeCls } from '@/utils/tools'

const useMergeClass = (getter: () => ClassValue) => computed(() => mergeCls(getter()))

export default useMergeClass
