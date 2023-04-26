import { computed, type ComputedRef, type UnwrapRef, ref } from 'vue'

export function useControllable<T>(getter: ComputedRef<T | undefined>, setter?: (value: T) => void, defaultValue?: T) {
  const internalValue = ref(defaultValue)
  const isControlled = computed(() => getter.value !== undefined)

  return [
    computed(() => (isControlled.value ? getter.value : internalValue.value)),
    function (value: unknown) {
      if (isControlled.value) {
        return setter?.(value as T)
      } else {
        internalValue.value = value as UnwrapRef<T>
        return setter?.(value as T)
      }
    },
  ] as const
}
