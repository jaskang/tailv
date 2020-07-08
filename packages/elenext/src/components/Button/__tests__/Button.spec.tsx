import { mount } from '@vue/test-utils'
import { ElButton } from '../'

// const { mount } = require('@vue/test-utils')
// const { ElButton } = require('../')

test('default', () => {
  const wrapper = mount({
    render() {
      return <ElButton type="primary"></ElButton>
    }
  })

  expect(wrapper.classes()).toContain('el-button--primary')
})

test('default slots', () => {
  const wrapper = mount({
    render() {
      return <ElButton type="primary">button text</ElButton>
    }
  })
  expect(wrapper.findComponent(ElButton).element.textContent).toContain('button text')
})

// type: { type: String, default: 'default', required: false },
//     size: { type: String, default: '', required: false },
//     icon: { type: String, default: '', required: false },
//     nativeType: { type: String, default: 'button' },
//     loading: { type: Boolean },
//     disabled: { type: Boolean },
//     plain: { type: Boolean },
//     autofocus: { type: Boolean },
//     round: { type: Boolean },
//     circle: { type: Boolean }
test('icon', () => {
  const wrapper = mount({
    render() {
      return <ElButton icon="el-icon-search"></ElButton>
    }
  })
  expect(wrapper.find('.el-icon-search').classes()).toContain('el-icon-search')
})
