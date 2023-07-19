import {
  type Component,
  createCommentVNode,
  createTextVNode,
  Fragment,
  isVNode,
  Static,
  type VNode,
  type VNodeArrayChildren,
} from 'vue'

interface IterationOptions {
  element?: boolean
  component?: boolean
  comment?: boolean
  text?: boolean
  static?: boolean
}

export const isComponent = (vnode: unknown): vnode is VNode & { type: Component } => {
  return getType(vnode) === 'component'
}

const isFragment = (vnode: unknown): vnode is (VNode & { type: typeof Fragment }) | VNodeArrayChildren => {
  return getType(vnode) === 'fragment'
}

const getType = (vnode: unknown) => {
  const typeofVNode = typeof vnode
  if (vnode == null || typeofVNode === 'boolean') return 'comment'
  else if (typeofVNode === 'string' || typeofVNode === 'number') return 'text'
  else if (Array.isArray(vnode)) return 'fragment'
  if (isVNode(vnode)) {
    const { type } = vnode
    const typeofType = typeof type

    if (typeofType === 'symbol') {
      if (type === Fragment) return 'fragment'
      else if (type === Text) return 'text'
      else if (type === Comment) return 'comment'
      else if (type === Static) return 'static'
    } else if (typeofType === 'string') {
      return 'element'
    } else if (typeofType === 'object' || typeofType === 'function') {
      return 'component'
    }
  }

  return undefined
}

const getText = (vnode: VNode | string | number): string | undefined => {
  if (typeof vnode === 'string') return vnode
  if (typeof vnode === 'number') return String(vnode)
  if (isVNode(vnode) && vnode.type === Text) return String(vnode.children)
  return undefined
}

const promoteToVNode = (
  node: VNode | string | number | boolean | null | undefined | void,
  options: IterationOptions
): VNode | null => {
  const type = getType(node)
  // In practice, we don't call this function for fragments, but TS gets unhappy if we don't handle it
  if (!type || type === 'fragment' || !options[type]) return null
  if (isVNode(node)) return node
  if (type === 'text') return createTextVNode(getText(node as string | number))
  return createCommentVNode()
}

const getFragmentChildren = (fragmentVNode: VNode | VNodeArrayChildren): VNodeArrayChildren => {
  if (Array.isArray(fragmentVNode)) return fragmentVNode
  const { children } = fragmentVNode
  if (Array.isArray(children)) return children
  console.warn('getFragmentChildren', `Unknown children for fragment: ${children}`)
  return []
}

export const findVNodeMatching = (
  children: VNodeArrayChildren,
  options: IterationOptions,
  matcher: (vnode: VNode) => boolean
): VNode | null => {
  for (const child of children) {
    if (isFragment(child)) {
      const fragmentChildren = findVNodeMatching(getFragmentChildren(child), options, matcher)
      if (fragmentChildren) return fragmentChildren
    } else {
      const vnode = promoteToVNode(child, options)
      if (vnode && matcher(vnode)) return vnode
    }
  }
  return null
}

export const extractSingleChild = (children: VNodeArrayChildren): VNode | null => {
  return findVNodeMatching(children, { element: true, component: true }, () => {
    return true
  })
}
