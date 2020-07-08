import { mount } from '@vue/test-utils'
import { ElButtonGroup } from '../'

// const { mount } = require('@vue/test-utils')
// const { ElButton } = require('../')
test('default', async () => {
  const wrapper = mount({
    render() {
      return (
        <ElButtonGroup
          style={{ width: '200px' }}
          class={'test'}
        ></ElButtonGroup>
      )
    }
  })
  expect(wrapper.classes()).toContain('test')
  expect(wrapper.attributes('style')).toBe('width: 200px;')
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
