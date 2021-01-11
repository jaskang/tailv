import { mount } from '@vue/test-utils'
import { IconArrowClockwise } from '@elenext/icons'

test('default', async () => {
  const wrapper = mount(IconArrowClockwise, {
    props: { spin: false }
  })
  expect(wrapper.find('.el-icon').classes()).toContain('el-icon-arrow-clockwise')
})

test('props spin', async () => {
  const wrapper = mount(IconArrowClockwise, {
    props: { spin: true }
  })
  expect(wrapper.find('.el-icon').classes()).toContain('el-icon-spin')
})
