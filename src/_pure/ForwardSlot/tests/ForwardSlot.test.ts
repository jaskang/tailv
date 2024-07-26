import { defineComponent, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ForwardSlot from '../index'

describe('ForwardSlot', () => {
  test('slot ref element', async () => {
    const slotRef = ref()
    const wrapper = mount(
      defineComponent({
        template: '<ForwardSlot ref="slotRef" class="text-green"><span class="bg-red">test</span></ForwardSlot>',
        components: { ForwardSlot },
        setup() {
          return { slotRef }
        },
      }),
      {}
    )
    expect(slotRef.value.$el.tagName).toBe('SPAN')
    expect(wrapper.html()).toBe('<span class="text-green bg-red">test</span>')
  })
})
