import { App, cloneVNode, defineComponent, ref, Ref, VNode, watchEffect } from 'vue'

function setRootDomHook(vnodes: VNode[], ref: Ref<Element>): [vNodes: VNode[], hasEl: boolean] {
  // __isTeleport
  // __isSuspense
  // __isFragment
  let hasEl: boolean = false
  const newVNodes = vnodes.map(node => {
    if (hasEl) {
      return node
    }
    if (typeof node.type === 'string') {
      hasEl = true
      return cloneVNode(node, { ref: ref })
    } else if (typeof node.type === 'object') {
      // const nodeName = (node.type as Component).name
      hasEl = true
      return cloneVNode(node, {
        ref: (arg: any) => {
          ref.value = arg.$el
        }
      })
    } else if (typeof node.type === 'symbol') {
      if (Array.isArray(node.children)) {
        // @ts-ignore
        const [_vnodes, _hasEl] = setRootDomHook(node.children, ref)
        hasEl = _hasEl
        node.children = _vnodes
        // return cloneVNode(node, { children: _vnodes })
      }
      return node
    }
    return node
  })
  return [newVNodes, hasEl]
}

const WrapSlot = defineComponent({
  name: 'WrapSlot',
  emits: ['root-init'],
  setup(props, { slots }) {
    const elRef = ref(null)
    watchEffect(() => {
      console.log(elRef.value)
    })
    return () => {
      const defaults = slots.default ? slots.default() : []
      const [vNodes] = setRootDomHook(defaults, elRef)
      return vNodes
    }
  }
})

WrapSlot.install = (app: App): void => {
  app.component(WrapSlot.name, WrapSlot)
}

export default WrapSlot
