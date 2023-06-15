import {
  Fragment,
  type InjectionKey,
  type Ref,
  type VNode,
  cloneVNode,
  defineComponent,
  h,
  inject,
  withDirectives,
} from 'vue'
import { isObject } from 'kotl'

export const POPPER_TRIGGER_TOKEN: InjectionKey<Ref> = Symbol('popper-trigger')

export function getFirstValidChild(nodes: VNode[]): VNode | null {
  for (const child of nodes) {
    if (isObject(child)) {
      if (child.type === Comment) {
        continue
      }
      if (child.type === 'svg' || child.type === Text) {
        return h('span', child)
      }
      if (child.type === Fragment) {
        return getFirstValidChild(child.children as VNode[])
      }
      return child
    }
    return h('span', child)
  }

  return null
}

// https://github.com/DevCloudFE/vue-devui/blob/dev/packages/devui-vue/devui/shared/components/popper-trigger/src/use-popper-trigger.ts
export default defineComponent({
  name: 'TPopperTrigger',
  setup(_, { slots, attrs }) {
    return () => {
      const defaultSlot = slots.default?.(attrs)
      const triggerRef = inject(POPPER_TRIGGER_TOKEN) as Ref<HTMLElement | null>

      if (!defaultSlot) {
        return null
      }

      const firstValidChild = getFirstValidChild(defaultSlot)

      if (!firstValidChild) {
        return null
      }

      return withDirectives(cloneVNode(firstValidChild, attrs), [
        [
          {
            mounted(el) {
              triggerRef.value = el
            },
            updated(el) {
              triggerRef.value = el
            },
            unmounted() {
              triggerRef.value = null
            },
          },
        ],
      ])
    }
  },
})
