import { cloneVNode, defineComponent, Fragment, mergeProps, type VNode } from 'vue'

export function renderSlotFragments(children?: VNode[]): VNode[] {
  if (!children) return []
  return children.flatMap(child => {
    if (child.type === Fragment) return renderSlotFragments(child.children as VNode[])

    return [child]
  })
}

export const PrimitiveSlot = defineComponent({
  name: 'PrimitiveSlot',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default) return null
      const children = renderSlotFragments(slots.default())

      const [firstChildren, ...otherChildren] = children

      if (Object.keys(attrs).length > 0) {
        // remove props ref from being inferred
        delete firstChildren.props?.ref
        console.log('attrs', attrs)
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
