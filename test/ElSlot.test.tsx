import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

import { Button, ElSlot } from '../src'

describe('ElSlot', () => {
  // 多个子节点
  it('with multi element', () => {
    const render = () =>
      mount(
        defineComponent({
          setup() {
            return () => (
              <ElSlot>
                <div>Todo</div>
                <div>Todo</div>
              </ElSlot>
            )
          },
        })
      )
    expect(() => render()).toThrowError('[ElSlot]: can only have one root element.')
  })

  // 多个子节点
  it('with multi Component', () => {
    const render = () =>
      mount(
        defineComponent({
          setup() {
            return () => (
              <ElSlot>
                <Button>Todo</Button>
                <Button>Todo</Button>
              </ElSlot>
            )
          },
        })
      )
    expect(() => render()).toThrowError('[ElSlot]: can only have one root element.')
  })

  it('with one Component', () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          return () => (
            <ElSlot>
              <Button>Todo</Button>
            </ElSlot>
          )
        },
      })
    )
    expect(wrapper.getComponent(ElSlot).element.tagName).toEqual('BUTTON')
  })
  it('with one element', () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          return () => (
            <ElSlot>
              <span>Todo</span>
            </ElSlot>
          )
        },
      })
    )
    expect(wrapper.getComponent(ElSlot).element.tagName).toEqual('SPAN')
  })
})
