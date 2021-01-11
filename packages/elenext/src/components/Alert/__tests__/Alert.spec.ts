import { mount } from '@vue/test-utils'
import { EAlert } from '../'

// type: prop.oneOf(['success', 'warning', 'info', 'error'] as const).def('info'),
// effect: prop.oneOf(['light', 'dark'] as const).def('light'),
// title: prop.string(),
// description: prop.string(),
// closable: prop.bool().def(true)

test('create', async () => {
  const wrapper = mount(EAlert, {
    props: { title: 'title' }
  })
  expect(wrapper.find('.el-alert').classes()).toContain('el-alert')
})

test('props type', async () => {
  const wrapper = mount(EAlert, {
    props: {
      title: 'title',
      type: 'success'
    }
  })
  expect(wrapper.find('.el-alert').classes()).toContain('el-alert--success')
})

test('props effect', async () => {
  const wrapper = mount(EAlert, {
    props: {
      effect: 'dark'
    }
  })
  expect(wrapper.find('.el-alert').classes()).toContain('is-dark')
})

test('props title', async () => {
  const wrapper = mount(EAlert, {
    props: {
      title: 'test title'
    }
  })
  expect(wrapper.text()).toBe('test title')
})

test('props description', async () => {
  const wrapper = mount(EAlert, {
    props: {
      title: 'test title',
      description: 'description'
    }
  })
  expect(wrapper.find('.el-alert__description').text()).toBe('description')
})

test('props closable', async () => {
  const wrapper = mount(EAlert, {
    props: {
      title: 'test title',
      closable: true
    }
  })
  expect(wrapper.find('.el-alert__closebtn').isVisible()).toBe(true)
})

test('slots#default', async () => {
  const wrapper = mount(EAlert, {
    props: {
      title: 'test title'
    },
    slots: {
      default: 'description'
    }
  })
  expect(wrapper.find('.el-alert__description').text()).toBe('description')
})

test('event@close', async () => {
  const wrapper = mount(EAlert, {
    props: {
      title: 'test title',
      closable: true
    },
    slots: {
      default: 'description'
    }
  })
  wrapper.find('.el-alert__closebtn').trigger('click')
  expect(wrapper.emitted()).toHaveProperty('close')
})
