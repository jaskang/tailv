import { computed, ref, type UnwrapRef, getCurrentInstance } from 'vue'

interface Options<T> {
  defaultValue?: T
  defaultValuePropName?: string
  valuePropName?: string
  trigger?: string
  onChange?: (val: T) => void
}

type Props = Record<string, any>

export function useModelValue<T>(props: Props = {}, options: Options<T> = {}) {
  const { defaultValue, defaultValuePropName = 'defaultValue', valuePropName = 'value', onChange } = options
  const trigger = options.trigger || `update:${valuePropName}`

  const ctx = getCurrentInstance()
  const isControlled = computed(() => props[valuePropName] !== undefined)

  const initialValue = ref(isControlled.value ? props[valuePropName] : props[defaultValuePropName] || defaultValue)

  const state = computed<T>(() => (isControlled.value ? props[valuePropName] : initialValue.value))

  return [
    state,
    function (val: unknown) {
      initialValue.value = val as UnwrapRef<T>
      ctx?.emit(trigger, val)
      onChange?.(val as T)
      // if (isControlled.value) {
      // } else {
      //   ctx?.emit(trigger, value)
      //   onChange?.(value as T)
      // }
    },
  ] as const
}
