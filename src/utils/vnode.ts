import { isNil } from 'kotl'
import { cloneVNode, Fragment, type VNode, type VNodeArrayChildren } from 'vue'

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

export function getValidChildren(children?: VNode[]) {
  const result: VNode[] = []
  for (const item of children ?? []) {
    // vue 会渲染comment
    if (item.type === Comment) continue
    if (isComponent(item) || isElement(item)) {
      result.push(item)
    } else if (Array.isArray(item)) {
      result.push(...getValidChildren(item))
    } else if (isFragment(item)) {
      if (item.children && Array.isArray(item.children)) {
        result.push(...getValidChildren(item.children as VNode[]))
      }
    }
  }
  return result
}

/**
 * Returns a copy of only the valid default slot
 *
 * @param slots - the slots object from the component setup
 * @param componentName component display name for thrown errors
 * @returns A VNode clone of the default slot
 */
export function withSingleton(children: VNode[], componentName: string, extraProps?: Record<string, unknown>) {
  const validChildren = getValidChildren(children)
  if (validChildren.length > 1) {
    const errorMessage = `[${componentName}]: can only have one root element.`
    console.error(errorMessage)
    throw new SyntaxError(errorMessage)
  }
  if (Object.keys(extraProps ?? {}).length > 0) {
    return cloneVNode(validChildren[0], extraProps, true)
  }
  return validChildren[0]
}

export function getRootNodes(vnode: VNode): Node[] {
  if (vnode.shapeFlag & ShapeFlags.ELEMENT) {
    return [vnode.el as Node]
  } else if (vnode.shapeFlag & ShapeFlags.COMPONENT) {
    const { subTree } = vnode.component!
    return getRootNodes(subTree)
  } else if (vnode.shapeFlag & ShapeFlags.SUSPENSE) {
    return getRootNodes(vnode.suspense!.activeBranch!)
  } else if (vnode.shapeFlag & (ShapeFlags.TEXT_CHILDREN | ShapeFlags.TELEPORT)) {
    // static node optimization, subTree.children will be static string and will not help us
    const result = [vnode.el as Node]
    if (vnode.anchor) {
      let currentNode: Node | null = result[0].nextSibling
      while (currentNode && currentNode.previousSibling !== vnode.anchor) {
        result.push(currentNode)
        currentNode = currentNode.nextSibling
      }
    }
    return result
  } else if (vnode.shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
    const children = (vnode.children as unknown as VNodeArrayChildren).flat() as VNode[]

    return children.flatMap(vnode => getRootNodes(vnode)).filter(n => !isNil(n))
  }
  // Missing cases which do not need special handling:
  // ShapeFlags.SLOTS_CHILDREN comes with ShapeFlags.ELEMENT

  // Will hit this default when ShapeFlags is 0
  // This is the case for example for unresolved async component without loader
  return []
}
