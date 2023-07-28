import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

describe('utils', () => {
  it('creates a todo', () => {
    const wrapper = mount(
      defineComponent(() => {
        return () => {
          return <div></div>
        }
      })
    )
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    wrapper.get('[data-test="new-todo"]').setValue('New todo')
    wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })
})
