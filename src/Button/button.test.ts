import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import CheckIcon from '../Icon/CheckIcon.vue'
import Loading from '../Icon/Loading.vue'
import Button from './index.vue'

describe('Button', () => {
  test('slots: default', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'content' },
    })
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toContain('content')
  })

  test('slots: icon', async () => {
    const wrapper = mount(Button, {
      slots: {
        icon: () => h(CheckIcon),
      },
    })
    expect(wrapper.findComponent(CheckIcon).element.tagName).toBe('svg')
  })

  test('props: disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  test('props: variant', async () => {
    const wrapper = mount(Button, {
      props: { variant: 'outline' },
      slots: { default: 'content' },
    })
    const el = wrapper.element as HTMLButtonElement
    expect(el.className.split(' ').includes('border-primary-border')).toBe(true)
  })

  test('props: color', async () => {
    let wrapper = mount(Button, {
      props: { color: 'success', variant: 'solid' },
    })
    expect(wrapper.classes().includes('bg-success-solid')).toBe(true)

    wrapper = mount(Button, {
      props: { color: 'success' },
    })
    expect(wrapper.classes().includes('bg-success-solid')).toBe(false)
  })

  test('props: size', async () => {
    const wrapper = mount(Button, {
      props: { size: 'lg' },
    })
    expect(wrapper.classes()).toContain('h-11')
  })

  test('props: pill', async () => {
    const wrapper = mount(Button, {
      props: { pill: true },
    })
    expect(wrapper.classes()).toContain('rounded-full')
  })

  test('props: square', async () => {
    const wrapper = mount(Button, {
      props: { square: true },
      slots: { default: 'content' },
    })
    expect(wrapper.classes()).toContain('h-9')
    expect(wrapper.classes()).toContain('w-9')
  })

  test('props: block', async () => {
    const wrapper = mount(Button, {
      props: { block: true },
      slots: { default: 'content' },
    })
    expect(wrapper.classes()).toContain('w-full')
  })

  test('props: loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.findComponent(Loading).exists()).toBe(true)
  })

  test('emits: click', async () => {
    const clickHandler = vi.fn()
    const wrapper = mount(Button, {
      slots: { default: 'content' },
      attrs: { onClick: clickHandler },
    })
    await wrapper.trigger('click')
    expect(clickHandler).toBeCalledTimes(1)
  })
})
