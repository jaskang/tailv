import { mount } from '@vue/test-utils'
import { defineComponent, type VNode } from 'vue'

import { getRootElements, isComponent, isElement } from '@/utils/vnode'

let vnodes: VNode[] = []
const ElementSlot = defineComponent((props, { slots }) => {
  return () => {
    const children = slots.default?.()
    vnodes = getRootElements(children)
    return children
  }
})
describe('utils', () => {
  it('creates a todo', () => {
    const wrapper = mount(
      defineComponent(props => () => (
        <ElementSlot>
          <div>Todo</div>
          <div>Todo</div>
        </ElementSlot>
      ))
    )
    expect(vnodes).lengthOf(2)
    expect(isElement(vnodes[0])).toBe(true)
  })
})
