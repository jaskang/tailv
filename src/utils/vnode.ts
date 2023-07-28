import { type Data, isArray, isFunction } from 'kotl'
import { cloneVNode, Fragment, type VNode } from 'vue'

interface IterationOptions {
  element?: boolean
  component?: boolean
  comment?: boolean
  text?: boolean
  static?: boolean
}

// https://github.com/vuejs/core/blob/master/packages/shared/src/shapeFlags.ts
const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
}

export const isTextNode = (vnode: VNode) => !!(vnode && vnode.shapeFlag & ShapeFlags.TEXT_CHILDREN)
export const isComponent = (vnode: VNode) => !!(vnode && vnode.shapeFlag & ShapeFlags.COMPONENT)
export const isElement = (vnode: VNode) => !!(vnode && vnode.shapeFlag & ShapeFlags.ELEMENT)
export const isSlot = (vnode: VNode) => !!(vnode && vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN)
export const isArrayChildren = (vnode: VNode) => !!(vnode && vnode.shapeFlag & ShapeFlags.ARRAY_CHILDREN)
export const isFragment = (vnode: VNode) => vnode && vnode.type === Fragment
export const isComment = (vnode: VNode) => vnode && vnode.type === Comment

function getChildrenArray(vnode: VNode): VNode[] | undefined {
  if (isArrayChildren(vnode)) return vnode.children as VNode[]
  if (isArray(vnode)) return vnode as VNode[]
  return undefined
}

export const getFirstElementFromVNode = (vn: VNode): HTMLElement | null => {
  if (isElement(vn)) {
    return vn.el as HTMLElement
  }
  if (isComponent(vn)) {
    if ((vn.el as Node)?.nodeType === 1) {
      return vn.el as HTMLElement
    }
    if (vn.component?.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree)
      if (ele) return ele
    }
  } else {
    const children = getChildrenArray(vn)
    return getFirstElementFromChildren(children)
  }
  return null
}
export const getFirstElementFromChildren = (children?: VNode[]): HTMLElement | null => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child)
      if (element) return element
    }
  }
  return null
}

export function getAllElements(children: VNode[] | undefined) {
  const result: VNode[] = []
  for (const item of children ?? []) {
    // vue 会渲染comment
    if (item.type === Comment) continue

    if (isTextNode(item) || isComponent(item) || isElement(item)) {
      result.push(item)
    } else if (Array.isArray(item)) {
      result.push(...getAllElements(item))
    } else if (isFragment(item)) {
      if (item.children && Array.isArray(item.children)) {
        result.push(...getAllElements(item.children as VNode[]))
      }
    }
  }

  return result
}

export const mergeFirstChild = (
  children: VNode[] | undefined,
  extraProps: Data | ((vnode?: VNode) => Data)
): boolean => {
  if (!children?.length) return false

  for (let i = 0; i < children.length; i++) {
    const vnode = children[i]
    if (isElement(vnode) || isComponent(vnode)) {
      const props = isFunction(extraProps) ? extraProps(vnode) : extraProps
      children[i] = cloneVNode(vnode, props, true)
      return true
    }
    const _children = getChildrenArray(vnode)
    if (_children && _children.length) {
      const result = mergeFirstChild(_children, extraProps)
      if (result) return result
    }
  }

  return false
}

export function getRootElements(children: VNode[] = []) {
  const result: VNode[] = []
  for (const item of children) {
    // vue 会渲染comment
    if (isComment(item)) continue

    if (isTextNode(item) || isComponent(item) || isElement(item)) {
      result.push(item)
    } else if (Array.isArray(item)) {
      result.push(...getRootElements(item))
    } else if (isFragment(item)) {
      if (item.children && Array.isArray(item.children)) {
        result.push(...getAllElements(item.children as VNode[]))
      }
    }
  }
  return result
}
