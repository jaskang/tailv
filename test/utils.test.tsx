import { mount } from '@vue/test-utils'
import { defineComponent, type VNode } from 'vue'

import { getRootElements, isElement } from '@/utils/vnode'

describe('getRootElements', () => {
  const ElementSlot = defineComponent({
    name: 'ElementSlot',
    setup(_, { slots, expose }) {
      const vnodes: VNode[] = []
      expose({ vnodes })
      return () => {
        const children = getRootElements(slots.default?.())
        vnodes.push(...children)
        return children
      }
    },
  })
  // it('element', () => {
  //   const wrapper = mount(
  //     defineComponent(props => () => (
  //       <ElementSlot>
  //         <div>Todo</div>
  //         <div>Todo</div>
  //       </ElementSlot>
  //     ))
  //   )

  //   const exposed = wrapper.getComponent(ElementSlot)!.getCurrentComponent().exposed || {}

  //   expect(exposed.vnodes).lengthOf(2)
  //   expect(isElement(exposed.vnodes[0])).toBe(true)
  //   expect(isElement(exposed.vnodes[1])).toBe(true)
  // })
  it('comp', () => {
    const comp = defineComponent({
      name: 'Comp',
      template: '<div>Todo</div><div>Todo</div><slot/>',
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
    const exposed = wrapper.getComponent(ElementSlot)!.getCurrentComponent().exposed || {}
    console.log(wrapper.html())
    expect(exposed.vnodes).lengthOf(4)
    expect(isElement(exposed.vnodes[0])).toBe(true)
    expect(isElement(exposed.vnodes[1])).toBe(true)
  })
})
