import { computed, type ComputedRef, ref, type UnwrapRef } from 'vue'

export function useControllable<T>(getter: () => T | undefined, setter?: (value: T) => void, defaultValue?: T) {
  const internalValue = ref(defaultValue)
  const isControlled = computed(() => getter() !== undefined)
  console.log('isControlled', isControlled.value)

  return [
    computed(() => (isControlled.value ? getter() : internalValue.value)),
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
