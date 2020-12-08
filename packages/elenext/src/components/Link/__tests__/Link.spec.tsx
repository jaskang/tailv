import { mount } from '@vue/test-utils'
import { Link } from '../'

it('create', () => {
  const wrapper = mount({
    render() {
      return <Link color="primary"></Link>
    }
  })
  expect(wrapper.classes()).toContain('el-link--primary')
})
it('icon', () => {
  const wrapper = mount({
    render() {
      return <Link icon="el-icon-search"></Link>
    }
  })
  expect(wrapper.element.querySelector('.el-icon-search')).toBeDefined()
})
it('href', () => {
  const wrapper = mount({
    render() {
      return <Link href="https://element.eleme.io/"></Link>
    }
  })
  expect(wrapper.element.getAttribute('href')).toEqual('https://element.eleme.io/')
})
it('target', () => {
  const wrapper = mount({
    render() {
      return (
        <Link href="https://element.eleme.io/" target="_blank">
          default
        </Link>
      )
    }
  })
  expect(wrapper.element.getAttribute('target')).toEqual('_blank')
})
it('disabled', () => {
  const wrapper = mount({
    render() {
      return <Link disabled>default</Link>
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
        <Link disabled={props.disabled} onClick={handleClick}>
          default
        </Link>
      )
    }
  })
  await wrapper.find('.el-link').trigger('click')
  expect(times).toBe(1)
  await wrapper.setProps({ disabled: true })
  await wrapper.find('.el-link').trigger('click')
  expect(times).toBe(1)
})
