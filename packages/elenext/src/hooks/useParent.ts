import {
  onUnmounted,
  InjectionKey,
  provide,
  reactive,
  inject,
  ComponentInternalInstance,
  getCurrentInstance,
  computed
} from 'vue'

export type ParentProvide<T> = T & {
  insert(child: ComponentInternalInstance): void
  remove(child: ComponentInternalInstance): void
  children: ComponentInternalInstance[]
}

export const useChildren = <T extends Record<string, any>>(key: InjectionKey<ParentProvide<T>>, data: T) => {
  const children: ComponentInternalInstance[] = reactive([])
  provide(key, {
    ...data,
    children,
    insert: (child: ComponentInternalInstance) => {
      children.push(child)
    },
    remove: (child: ComponentInternalInstance) => {
      const index = children.indexOf(child)
      children.splice(index, 1)
    }
  })
}

export const useParent = <T>(key: InjectionKey<ParentProvide<T>>) => {
  const instance = getCurrentInstance()
  const parent = inject(key, null)
  const index = computed(() => parent?.children.indexOf(instance!))

  parent?.insert(instance!)
  onUnmounted(() => {
    parent?.remove(instance!)
  })

  return { parent, index }
}
