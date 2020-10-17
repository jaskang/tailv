import { mount } from '@vue/test-utils'
import { Alert } from '../'

const sleep = (time: number) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, time)
  )

test('create', async () => {
  const wrapper = mount({
    render() {
      return <Alert title="test" showIcon></Alert>
    }
  })

  const el = wrapper.find('.el-alert')
  expect(el.text()).toEqual('test')
  expect(el.classes()).toContain('el-alert--info')
})

test('type', async () => {
  const wrapper = mount({
    render() {
      return <Alert title="test" type="success" showIcon></Alert>
    }
  })

  const el = wrapper.find('.el-alert')
  expect(el.classes()).toContain('el-alert--success')
})

test('description', async () => {
  const wrapper = mount({
    render() {
      return <Alert title="test" description="Unbowed, Unbent, Unbroken" showIcon></Alert>
    }
  })
  expect(wrapper.element.querySelector('.el-alert__description')?.textContent).toEqual('Unbowed, Unbent, Unbroken')
})

test('theme', async () => {
  const wrapper = mount({
    render() {
      return <Alert title="test" effect="dark"></Alert>
    }
  })
  const el = wrapper.find('.el-alert')
  expect(el.classes()).toContain('is-dark')
})

test('title slot', async () => {
  const wrapper = mount({
    render() {
      return (
        <Alert
          title="test"
          description="Unbowed, Unbent, Unbroken"
          showIcon
          v-slots={{
            title: () => <span>foo</span>
          }}
        ></Alert>
      )
    }
  })
  expect(wrapper.element.querySelector('.el-alert__title')?.textContent).toEqual('foo')
})

test('click', async () => {
  const wrapper = mount({
    render() {
      return <Alert title="test" close-text="close"></Alert>
    }
  })
  const el = wrapper.find('.el-alert')
  wrapper.element.querySelector('.el-alert__closebtn')?.dispatchEvent(new Event('click'))
  await sleep(200)
  expect(el.attributes('style')).toEqual('display: none;')
})
