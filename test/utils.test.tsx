import { mount } from '@vue/test-utils'
import { defineComponent, getCurrentInstance, type VNode } from 'vue'

import { getRootElements, getRootNodes, isElement } from '@/utils/vnode'

describe('getRootElements', () => {
  const ElementSlot = defineComponent({
    name: 'ElementSlot',
    setup(_, { slots, expose }) {
      const vnodes: VNode[] = []
      const isntance = getCurrentInstance()
      expose({ vnodes, isntance })
      return () => {
        const children = slots.default?.() || []
        vnodes.push(...children)
        return children
      }
    },
  })
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
    const nodes = getRootNodes(slot.vnode)

    expect(nodes[0]).toBe(true)
    expect(nodes[1]).toBe(true)
  })
  it('comp', () => {
    const comp = defineComponent({
      name: 'Comp',
      template: '<div class="comp">Todo</div><slot/>',
    })
    const wrapper = mount(
      defineComponent({
        components: { comp },
        setup() {
          return () => (
            <ElementSlot>
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
    const nodes = getRootNodes(slot.vnode)
    expect(nodes[0]).toBe(true)
    expect(nodes[1]).toBe(true)
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
    const nodes = getRootNodes(slot.vnode)
    expect(nodes).lengthOf(4)
    expect(nodes[0]).toBe(true)
    expect(nodes[1]).toBe(true)
  })
})
