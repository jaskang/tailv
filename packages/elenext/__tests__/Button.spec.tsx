import { mount } from '@vue/test-utils'
import { ElButton } from '../'

// const { mount } = require('@vue/test-utils')
// const { ElButton } = require('../')

test('default', () => {
  const wrapper = mount(ElButton, {
    props: {
      type: 'primary'
    }
  })

  expect(wrapper.classes()).toContain('el-button--primary')
})

test('icon', () => {
  const wrapper = mount({
    render() {
      return <ElButton icon="el-icon-search"></ElButton>
    }
  })
  expect(wrapper.find('.el-icon-search').classes()).toContain('el-icon-search')
})
