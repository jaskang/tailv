import { defineComponent, Fragment, onMounted, ref, type VNode, type VNodeProps } from 'vue'

export function getFirstChild(nodes: VNode[]): VNode | null {
  for (const child of nodes) {
    if (isObject(child)) {
      if (child.type === Comment) {
        continue
      }
      if (child.type === 'svg' || child.type === Text) {
        return h('span', child)
      }
      if (child.type === Fragment) {
        return getFirstChild(child.children as VNode[])
      }
      return child
    }
    return h('span', child)
  }

  return null
}

export function filterEmpty(children: VNode[] = []) {
  const res = []
  children.forEach(child => {
    if (Array.isArray(child)) {
      res.push(...child)
    } else if (child?.type === Fragment) {
      res.push(...filterEmpty(child.children))
    } else {
      res.push(child)
    }
  })
  return res.filter(c => !isEmptyElement(c))
}

export function cloneElement<T, U>(
  vnode: VNode<T, U> | VNode<T, U>[],
  nodeProps: VNodeProps = {},
  override = true,
  mergeRef = false
): VNode<T, U> {
  let ele = vnode
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0]
  }
  if (!ele) {
    return null
  }
  const node = cloneVNode(ele as VNode<T, U>, nodeProps as any, mergeRef)

  // cloneVNode内部是合并属性，这里改成覆盖属性
  node.props = (override ? { ...node.props, ...nodeProps } : node.props) as any
  warning(typeof node.props.class !== 'object', 'class must be string')
  return node
}
