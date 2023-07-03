import { computed, type MaybeRefOrGetter, ref, toValue, type UnwrapRef } from 'vue'

export function useControllable<T>(
  getter: MaybeRefOrGetter<T | undefined>,
  setter: (value: T) => void,
  defaultValue?: T
) {
  const propValue = computed(() => toValue(getter))

  const internalValue = ref(typeof propValue.value === 'undefined' ? defaultValue : propValue.value)

  return [
    computed(() => (typeof propValue.value === 'undefined' ? internalValue.value : propValue.value)),
    function (val: T) {
      if (typeof propValue.value === 'undefined') {
        internalValue.value = val as UnwrapRef<T>
        return setter(val as T)
      } else {
        return setter(val as T)
      }
    },
  ] as const
}
