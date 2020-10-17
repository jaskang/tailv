import { mount } from '@vue/test-utils'
import { ElButton } from '../'

// const { mount } = require('@vue/test-utils')
// const { ElButton } = require('../')
test('default', async () => {
  const wrapper = mount({
    render() {
      return <ElButton type="primary"></ElButton>
    }
  })
  expect(wrapper.classes()).toContain('el-button-primary')
})

test('slots', async () => {
  const wrapper = mount({
    render() {
      return <ElButton type="primary">button text</ElButton>
    }
  })
  expect(wrapper.findComponent(ElButton).element.textContent).toContain('button text')
})

test('props size', async () => {
  const wrapper = mount({
    render() {
      return <ElButton size="small"></ElButton>
    }
  })
  expect(wrapper.find('.el-button-small').exists()).toBe(true)
})

test('props icon', async () => {
  const wrapper = mount({
    render() {
      return <ElButton icon="el-icon-search"></ElButton>
    }
  })
  expect(wrapper.find('.el-icon-search').exists()).toBe(true)
})

test('props nativeType', async () => {
  const wrapper = mount({
    render() {
      return <ElButton nativeType="submit"></ElButton>
    }
  })
  expect(wrapper.element.getAttribute('type')).toBe('submit')
})

test('props loading', async () => {
  const wrapper = mount({
    render() {
      return <ElButton loading></ElButton>
    }
  })
  expect(wrapper.find('.is-loading').exists()).toBe(true)
})

test('props disabled', async () => {
  const wrapper = mount({
    render() {
      return <ElButton disabled></ElButton>
    }
  })
  expect(wrapper.find('.is-disabled').exists()).toBe(true)
})

test('props autofocus', async () => {
  const wrapper = mount({
    render() {
      return <ElButton autofocus></ElButton>
    }
  })
  expect(wrapper.element.hasAttribute('autofocus')).toBe(true)
})

test('props shape', async () => {
  const wrapper = mount({
    render() {
      return <ElButton shape="round"></ElButton>
    }
  })
  expect(wrapper.find('.is-round').exists()).toBe(true)
})

test('props circle', async () => {
  const wrapper = mount({
    render() {
      return <ElButton shape="circle"></ElButton>
    }
  })
  expect(wrapper.find('.is-circle').exists()).toBe(true)
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
