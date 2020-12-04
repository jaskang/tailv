import { mount } from '@vue/test-utils'
import { Button } from '../'

// const { mount } = require('@vue/test-utils')
// const { Button } = require('../')
test('default', async () => {
  const wrapper = mount({
    render() {
      return <Button color="primary"></Button>
    }
  })
  expect(wrapper.classes()).toContain('el-button-primary')
})

test('slots', async () => {
  const wrapper = mount({
    render() {
      return <Button color="primary">button text</Button>
    }
  })
  expect(wrapper.findComponent(Button).element.textContent).toContain('button text')
})

test('props size', async () => {
  const wrapper = mount({
    render() {
      return <Button size="small"></Button>
    }
  })
  expect(wrapper.find('.el-button-small').exists()).toBe(true)
})

test('props icon', async () => {
  const wrapper = mount({
    render() {
      return <Button icon="el-icon-search"></Button>
    }
  })
  expect(wrapper.find('.el-icon-search').exists()).toBe(true)
})

test('props nativeType', async () => {
  const wrapper = mount({
    render() {
      return <Button nativeType="submit"></Button>
    }
  })
  expect(wrapper.element.getAttribute('type')).toBe('submit')
})

test('props loading', async () => {
  const wrapper = mount({
    render() {
      return <Button loading></Button>
    }
  })
  expect(wrapper.find('.is-loading').exists()).toBe(true)
})

test('props disabled', async () => {
  const wrapper = mount({
    render() {
      return <Button disabled></Button>
    }
  })
  expect(wrapper.find('.is-disabled').exists()).toBe(true)
})

test('props autofocus', async () => {
  const wrapper = mount({
    render() {
      return <Button autofocus></Button>
    }
  })
  expect(wrapper.element.hasAttribute('autofocus')).toBe(true)
})

test('props shape', async () => {
  const wrapper = mount({
    render() {
      return <Button type="round"></Button>
    }
  })
  expect(wrapper.find('.is-round').exists()).toBe(true)
})

test('props circle', async () => {
  const wrapper = mount({
    render() {
      return <Button type="circle"></Button>
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
