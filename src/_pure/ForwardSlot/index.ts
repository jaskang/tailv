import { cloneVNode, Comment, defineComponent, Fragment, mergeProps, type VNode } from 'vue'

function renderSlotFragments(children?: VNode[]): VNode[] {
  if (!children) return []
  return children.flatMap(child => {
    if (child.type === Fragment) return renderSlotFragments(child.children as VNode[])

    return [child]
  })
}

export const ForwardSlot = defineComponent({
  name: 'EForwardSlot',
  props: { single: Boolean },
  inheritAttrs: false,
  setup(props, { attrs, slots }) {
    return () => {
      if (!slots.default) return null

      const children = renderSlotFragments(slots.default())

      // single 模式下只能有一个子节点
      if (props.single && children.filter(child => child.type !== Comment).length > 1)
        throw new Error('EForwardSlot can only contain a single child')

      const firstNonCommentChildrenIndex = children.findIndex(child => child.type !== Comment)
      if (firstNonCommentChildrenIndex === -1) return children

      const firstNonCommentChildren = children[firstNonCommentChildrenIndex]!

      // remove props ref from being inferred
      delete firstNonCommentChildren.props?.ref

      const mergedProps = firstNonCommentChildren.props ? mergeProps(attrs, firstNonCommentChildren.props) : attrs
      // remove class to prevent duplicated
      if (attrs.class && firstNonCommentChildren.props?.class) delete firstNonCommentChildren.props.class
      const cloned = cloneVNode(firstNonCommentChildren, mergedProps)

      // Explicitly override props starting with `on`.
      // It seems cloneVNode from Vue doesn't like overriding `onXXX` props.
      // So we have to do it manually.
      for (const prop in mergedProps) {
        if (prop.startsWith('on')) {
          cloned.props ||= {}
          cloned.props[prop] = mergedProps[prop]
        }
      }

      if (children.length === 1) return cloned

      children[firstNonCommentChildrenIndex] = cloned
      return children
    }
  },
})
