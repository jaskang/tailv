import { computed } from 'vue'
import { normalizeClass } from '../utils/dom'

const useClassNames = <T>(getter: (ctx?: any) => T) => computed(() => normalizeClass(getter()))

export default useClassNames
