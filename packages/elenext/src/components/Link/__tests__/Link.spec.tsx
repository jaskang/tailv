import { mount } from '@vue/test-utils'
import { ElLink } from '../'
import { reactive } from 'vue'
describe('Link', () => {
  it('create', () => {
    const wrapper = mount({
      render() {
        return <ElLink type="primary"></ElLink>
      }
    })
    expect(wrapper.classes()).toContain('el-link--primary')
  })
  it('icon', () => {
    const wrapper = mount({
      render() {
        return <ElLink icon="el-icon-search"></ElLink>
      }
    })
    expect(wrapper.element.querySelector('.el-icon-search')).toBeDefined()
  })
  it('href', () => {
    const wrapper = mount({
      render() {
        return <ElLink href="https://element.eleme.io/"></ElLink>
      }
    })
    expect(wrapper.element.getAttribute('href')).toEqual(
      'https://element.eleme.io/'
    )
  })
  it('target', () => {
    const wrapper = mount({
      render() {
        return (
          <ElLink href="https://element.eleme.io/" target="_blank">
            default
          </ElLink>
        )
      }
    })
    expect(wrapper.element.getAttribute('target')).toEqual('_blank')
  })
  it('disabled', () => {
    const wrapper = mount({
      render() {
        return <ElLink disabled>default</ElLink>
      }
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('click', async () => {
    let times = 0

    const wrapper = mount({
      props: {
        disabled: {
          type: Boolean
        }
      },
      setup(props) {
        const handleClick = () => {
          times++
        }
        return () => (
          <ElLink disabled={props.disabled} onClick={handleClick}>
            default
          </ElLink>
        )
      }
    })
    await wrapper.find('.el-link').trigger('click')
    expect(times).toBe(1)
    await wrapper.setProps({ disabled: true })
    await wrapper.find('.el-link').trigger('click')
    expect(times).toBe(1)
  })
})
