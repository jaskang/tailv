import { mount } from '@vue/test-utils'
import { EBreadcrumb, EBreadcrumbItem } from '../'

// type: prop.oneOf(['success', 'warning', 'info', 'error'] as const).def('info'),
// effect: prop.oneOf(['light', 'dark'] as const).def('light'),
// title: prop.string(),
// description: prop.string(),
// closable: prop.bool().def(true)

test('create', async () => {
  const wrapper = mount(EBreadcrumb, {
    props: {},
    global: {
      components: {
        EBreadcrumbItem
      }
    },
    slots: {
      default: `
      <e-breadcrumb-item>1</e-breadcrumb-item>
      <e-breadcrumb-item>2</e-breadcrumb-item>
      `
    }
  })
  expect(wrapper.classes()).toContain('el-breadcrumb')
  expect(wrapper.find('.el-breadcrumb-item__separator').text()).toBe('/')
})

test('props separator', async () => {
  const wrapper = mount(EBreadcrumb, {
    props: { separator: '#' },
    global: {
      components: {
        EBreadcrumbItem
      }
    },
    slots: {
      default: `
      <e-breadcrumb-item>1</e-breadcrumb-item>
      <e-breadcrumb-item>2</e-breadcrumb-item>
      `
    }
  })
  expect(wrapper.find('.el-breadcrumb-item__separator').text()).toBe('#')
})
