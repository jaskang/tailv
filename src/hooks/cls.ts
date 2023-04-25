import { computed, toRef } from 'vue'

export const useCls = <T extends Record<string, string | boolean | undefined>>(base: string, variants: () => T) => {
  const clsRef = computed(() => {
    const cls = [base]
    const obj = variants()
    const keys = Object.keys(obj)
    for (const k of keys) {
      const val = obj[k]
      if (val) {
        typeof val === 'boolean' ? cls.push(`is-${k}`) : cls.push(`${base}-${val}`)
      }
    }
    return cls.join(' ')
  })

  return clsRef
}
