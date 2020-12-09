import { computed } from 'vue'
import { ClassValue, mergeClass } from '../../utils/tools'

const useMergeClass = (getter: () => ClassValue) => computed(() => mergeClass(getter()))

export default useMergeClass
