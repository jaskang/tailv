import { computed, toRefs, reactive, type ComputedRef } from 'vue'

type FlatComputed<T> = {
  [K in keyof T]: ComputedRef<T[K]>
}

export function useStyle<T extends Record<string, unknown>>(getter: () => T) {
  const val = computed(getter)
  return Object.keys(val.value).reduce((acc, key: keyof T) => {
    acc[key] = computed(() => val.value[key])
    return acc
  }, {} as FlatComputed<T>)
}
