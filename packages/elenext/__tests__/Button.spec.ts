import { mount } from '@vue/test-utils'
import { ElButton } from '../'

test('displays context', async () => {
  const wrapper = mount(ElButton, {
    slots: {
      default: 'Hello world'
    }
  })
  await wrapper.setProps({ loading: true })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
