import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Button from './index.vue'

describe('Button', () => {
  test('default', async () => {
    const wrapper = mount(Button, {
      props: {},
      slots: { default: 'Hello world' },
    })
    const el = wrapper.element as HTMLButtonElement

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')

    expect(el.className.split(' ').includes('bg-input-background')).toBe(true)
  })

  test('variant', async () => {
    const wrapper = mount(Button, {
      props: { variant: 'outline' },
      slots: { default: 'Hello world' },
    })
    const el = wrapper.element as HTMLButtonElement
    expect(el.className.split(' ').includes('border-primary-border')).toBe(true)
  })
})
