import { mount } from '@vue/test-utils'
import { defineComponent, type VNode } from 'vue'

import { getRootNodes } from '@/utils/vnode'

const ElementSlot = defineComponent({
  name: 'ElementSlot',
  setup(_, { slots, expose }) {
    return () => {
      const children = slots.default?.() || []
      return children
    }
  },
})

describe('getRootElements', () => {
  it('element', () => {
    const wrapper = mount(
      defineComponent(props => () => (
        <ElementSlot>
          <div>Todo</div>
          <div>Todo</div>
        </ElementSlot>
      ))
    )
    const slot = wrapper.getComponent(ElementSlot)!.getCurrentComponent()!
    expect(getRootNodes(slot.vnode)).lengthOf(2)
  })
  it('element', () => {
    const wrapper = mount(
      defineComponent(props => () => (
        <ElementSlot>
          {/* <div>Todo</div> */}
          <div>Todo</div>
        </ElementSlot>
      ))
    )
    const slot = wrapper.getComponent(ElementSlot)!.getCurrentComponent()!
    expect(getRootNodes(slot.vnode)).lengthOf(1)
  })
  it('comp', () => {
    const comp = defineComponent({
      name: 'Comp',
      template: '<div class="comp">Todo</div><div class="comp">Todo</div><slot/>',
    })
    const comp1 = defineComponent({
      name: 'Comp1',
      template: '<div class="comp1">Todo</div>',
    })
    const wrapper = mount(
      defineComponent({
        components: { comp, comp1 },
        setup() {
          return () => (
            <ElementSlot>
              <comp1 />
              <comp>
                <div>Todo</div>
              </comp>
              <div>Todo</div>
            </ElementSlot>
          )
        },
      })
    )
    const slot = wrapper.getComponent(ElementSlot)!.getCurrentComponent()!
    expect(getRootNodes(slot.vnode)).lengthOf(5)
    expect(getRootNodes(slot.vnode).filter(n => n.nodeType === Node.ELEMENT_NODE)).lengthOf(5)
  })

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
    expect(getRootNodes(slot.vnode).filter(n => n.nodeType === Node.ELEMENT_NODE)).lengthOf(0)
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