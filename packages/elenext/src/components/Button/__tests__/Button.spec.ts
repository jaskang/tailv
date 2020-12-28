import { mount } from '@vue/test-utils'
import { EButton } from '../'

// const { mount } = require('@vue/test-utils')
// const { EButton } = require('../')
test('default', async () => {
  const wrapper = mount(EButton, {
    props: { color: 'primary' }
  })
  expect(wrapper.classes()).toContain('el-button--primary')
})

test('slots', async () => {
  const wrapper = mount(EButton, {
    slots: {
      default: 'button text'
    }
  })
  expect(wrapper.findComponent(EButton).element.textContent).toContain('button text')
})

test('props size', async () => {
  const wrapper = mount(EButton, {
    props: {
      size: 'small'
    }
  })
  expect(wrapper.find('.el-button--small').exists()).toBe(true)
})

test('props icon', async () => {
  const wrapper = mount(EButton, {
    slots: {
      icon: '<i class="testicon"></i>'
    }
  })
  expect(wrapper.find('.testicon').exists()).toBe(true)
})

test('props nativeType', async () => {
  const wrapper = mount(EButton, {
    props: {
      nativeType: 'submit'
    }
  })
  expect(wrapper.element.getAttribute('type')).toBe('submit')
})

test('props loading', async () => {
  const wrapper = mount(EButton, {
    props: {
      loading: true
    }
  })
  expect(wrapper.find('.is-loading').exists()).toBe(true)
})

test('props disabled', async () => {
  const wrapper = mount(EButton, {
    props: {
      disabled: true
    }
  })
  expect(wrapper.find('.is-disabled').exists()).toBe(true)
})

test('props autofocus', async () => {
  const wrapper = mount(EButton, {
    attrs: {
      autofocus: true
    }
  })
  expect(wrapper.element.hasAttribute('autofocus')).toBe(true)
})

test('props shape', async () => {
  const wrapper = mount(EButton, {
    props: {
      type: 'round'
    }
  })
  expect(wrapper.find('.el-button--round').exists()).toBe(true)
})

test('props circle', async () => {
  const wrapper = mount(EButton, {
    props: {
      type: 'circle'
    }
  })
  expect(wrapper.find('.el-button--circle').exists()).toBe(true)
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
