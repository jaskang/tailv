<script setup lang="ts">
import { type ComponentPublicInstance, Fragment, type VNode, cloneVNode, defineComponent, mergeProps } from 'vue'

defineOptions({ name: 'ElSlot' })
const emits = defineEmits<{ load: [el: Element] }>()

function renderSlotFragments(children?: VNode[]): VNode[] {
  if (!children) return []
  return children.flatMap(child => {
    if (child.type === Fragment) return renderSlotFragments(child.children as VNode[])

    return [child]
  })
}

const PrimitiveSlot = defineComponent({
  name: 'PrimitiveSlot',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default) return null
      const children = renderSlotFragments(slots.default())

      const [firstChildren, ...otherChildren] = children

      if (firstChildren && Object.keys(attrs).length > 0) {
        // remove props ref from being inferred
        delete firstChildren?.props?.ref
        const mergedProps = mergeProps(attrs, firstChildren.props ?? {})
        // remove class to prevent duplicated
        if (attrs.class && firstChildren.props?.class) delete firstChildren.props.class

        const cloned = cloneVNode(firstChildren, mergedProps)
        // Explicitly override props starting with `on`.
        // It seems cloneVNode from Vue doesn't like overriding `onXXX` props. So
        // we have to do it manually.
        for (const prop in mergedProps) {
          if (prop.startsWith('on')) {
            cloned.props ||= {}
            cloned.props[prop] = mergedProps[prop]
          }
        }

        return children.length === 1 ? cloned : [cloned, ...otherChildren]
      }

      return children
    }
  },
})

const forwardRef = (_ref: Element | ComponentPublicInstance | null) => {
  // $el could be text/comment for non-single root normal or text root, thus we retrieve the nextElementSibling
  // @ts-expect-error
  const el = ['#text', '#comment'].includes(_ref?.$el.nodeName)
    ? // @ts-expect-error
      _ref?.$el.nextElementSibling
    : // @ts-expect-error
      _ref?.$el || _ref

  emits('load', el)
}
</script>

<template>
  <PrimitiveSlot :ref="forwardRef">
    <slot />
  </PrimitiveSlot>
</template>
