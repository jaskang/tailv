import { onMounted, onUnmounted, InjectionKey, provide, reactive, inject, watchEffect } from 'vue'
type IdType = string | symbol

type ItemType<T> = {
  add?: (item: T) => void
  remove?: (item: T) => void
  children: Array<T>
}
type UseChildrenInjection<T> = InjectionKey<ItemType<T>>

const useChildren = <T extends { id: IdType }>(
  key: UseChildrenInjection<T>,
  item: T,
  effect: (children: Array<T>) => void
) => {
  const { add, remove } = inject(key, {} as ItemType<T>)
  const state: Pick<ItemType<T>, 'children'> = reactive({
    children: []
  })

  onMounted(() => {
    add?.(item)
  })
  onUnmounted(() => {
    remove?.(item)
  })
  watchEffect(() => {
    effect(state.children)
  })
  provide(key, {
    add(item) {
      if (state.children.indexOf(item) === -1) {
        state.children.push(item)
      }
    },
    remove(item) {
      const index = state.children.indexOf(item)
      if (index >= 0) {
        state.children.splice(index, 1)
      }
    },
    children: state.children
  })
}

export default useChildren
