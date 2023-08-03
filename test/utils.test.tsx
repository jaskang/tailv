import { mount } from '@vue/test-utils'
import { defineComponent, getCurrentInstance, type VNode } from 'vue'

import { getRootElements, getRootNodes, isElement } from '@/utils/vnode'

const ElementSlot = defineComponent({
  name: 'ElementSlot',
  setup(_, { slots, expose }) {
    const vnodes: VNode[] = []
    expose({ vnodes })
    return () => {
      const children = slots.default?.() || []
      vnodes.push(...children)
      return children
    }
  },
})

describe('getRootElements', () => {
  // it('element', () => {
  //   const wrapper = mount(
  //     defineComponent(props => () => (
  //       <ElementSlot>
  //         <div>Todo</div>
  //         <div>Todo</div>
  //       </ElementSlot>
  //     ))
  //   )
  //   const slot = wrapper.getComponent(ElementSlot)!.getCurrentComponent()!
  //   const nodes = getRootNodes(slot.vnode)
  //   expect(nodes).lengthOf(2)
  // })

  // it('comp', () => {
  //   const comp = defineComponent({
  //     name: 'Comp',
  //     template: '<div class="comp">Todo</div><div class="comp">Todo</div><slot/>',
  //   })
  //   const comp1 = defineComponent({
  //     name: 'Comp1',
  //     template: '<div class="comp1">Todo</div>',
  //   })
  //   const wrapper = mount(
  //     defineComponent({
  //       components: { comp, comp1 },
  //       setup() {
  //         return () => (
  //           <ElementSlot>
  //             <comp1 />
  //             <comp>
  //               <div>Todo</div>
  //             </comp>
  //             <div>Todo</div>
  //           </ElementSlot>
  //         )
  //       },
  //     })
  //   )
  //   const slot = wrapper.getComponent(ElementSlot)!.getCurrentComponent()!
  //   const nodes = getRootNodes(slot.vnode)
  //   expect(nodes).lengthOf(5)
  // })

  it('comment', () => {
    const comp = defineComponent({
      name: 'Comp',
      template: '<!-- test -->test',
    })
    const wrapper = mount(
      defineComponent({
        components: { comp },
        setup() {
          return () => (
            <ElementSlot>
              <comp></comp>
            </ElementSlot>
          )
        },
      })
    )
    const slot = wrapper.getComponent(ElementSlot)!.getCurrentComponent()!
    const nodes = getRootNodes(slot.vnode).filter(n => n.nodeType === Node.ELEMENT_NODE)
    expect(nodes).lengthOf(0)
  })

  it('Teleport', () => {
    const comp = defineComponent({
      name: 'Comp',
      template: '<Teleport to="body"><div>A</div></Teleport>',
    })
    const wrapper = mount(
      defineComponent({
        components: { comp },
        setup() {
          return () => (
            <ElementSlot>
              <comp></comp>
            </ElementSlot>
          )
        },
      })
    )
    const slot = wrapper.getComponent(ElementSlot)!.getCurrentComponent()!
    const nodes = getRootNodes(slot.vnode).filter(n => n.nodeType === Node.ELEMENT_NODE)
    expect(nodes).lengthOf(0)
  })
})
