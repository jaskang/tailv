// function setRootDomHook(vNodes: VNode[], ref: Ref<Element | null>): [vNodes: VNode[], hasEl: boolean] {
//   // TODO: 内置组件判断
//   // __isTeleport
//   // __isSuspense
//   // __isFragment
//   let hasEl = false
//   const newVNodes = vNodes.map(node => {
//     if (hasEl) {
//       return cloneVNode(node)
//     }
//     if (typeof node.type === 'string') {
//       hasEl = true
//       return cloneVNode(node, { ref: ref })
//     } else if (typeof node.type === 'object') {
//       // const nodeName = (node.type as Component).name
//       hasEl = true
//       return cloneVNode(node, {
//         ref: (arg: any) => {
//           ref.value = arg?.$el || null
//         },
//       })
//     } else if (typeof node.type === 'symbol') {
//       if (Array.isArray(node.dynamicChildren)) {
//         const dynamicIndexArray = node.dynamicChildren.map(child => (node.children as VNode[]).indexOf(child))
//         // @ts-ignore
//         const [_vnodes, _hasEl] = setRootDomHook(node.children, ref)
//         node.children = _vnodes
//         node.dynamicChildren = dynamicIndexArray.map(i => _vnodes[i])
//         hasEl = _hasEl
//         return cloneVNode(node)
//       }
//     }
//     return cloneVNode(node)
//   })
//   return [newVNodes, hasEl]
// }

// const getSlotChildrenText = children =>
//   children
//     .map(node => {
//       if (!node.children || typeof node.children === 'string') {
//         return node.children || ''
//       } else if (Array.isArray(node.children)) {
//         return getSlotChildrenText(node.children)
//       } else if (node.children.default) {
//         return getSlotChildrenText(node.children.default())
//       }
//     })
//     .join('')

//     const slotTexts = this.$slots.default && getSlotChildrenText(this.$slots.default()) || ''
// console.log(slotTexts)

export default {}
