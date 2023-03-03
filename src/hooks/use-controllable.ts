import { computed, type ComputedRef, type UnwrapRef, ref } from 'vue'

export function useControllable<T>(
  controlledValue: ComputedRef<T | undefined>,
  onChange?: (value: T) => void,
  defaultValue?: ComputedRef<T>
) {
  const internalValue = ref(defaultValue?.value)
  const isControlled = computed(() => controlledValue.value !== undefined)

  return [
    computed(() => (isControlled.value ? controlledValue.value : internalValue.value)),
    function (value: unknown) {
      if (isControlled.value) {
        return onChange?.(value as T)
      } else {
        internalValue.value = value as UnwrapRef<T>
        return onChange?.(value as T)
      }
    },
  ] as const
}
