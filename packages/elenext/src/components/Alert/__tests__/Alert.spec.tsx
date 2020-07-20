import { mount } from '@vue/test-utils'
import { ElAlert } from '../'

const sleep = (time: number) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, time)
  )

test('create', async () => {
  const wrapper = mount({
    render() {
      return <ElAlert title="test" showIcon></ElAlert>
    }
  })
  expect(wrapper.text()).toEqual('test')
  expect(wrapper.classes()).toContain('el-alert--info')
})

test('type', async () => {
  const wrapper = mount({
    render() {
      return <ElAlert title="test" type="success" showIcon></ElAlert>
    }
  })
  expect(wrapper.classes()).toContain('el-alert--success')
})

test('description', async () => {
  const wrapper = mount({
    render() {
      return (
        <ElAlert
          title="test"
          description="Unbowed, Unbent, Unbroken"
          showIcon
        ></ElAlert>
      )
    }
  })
  expect(
    wrapper.element.querySelector('.el-alert__description')?.textContent
  ).toEqual('Unbowed, Unbent, Unbroken')
})

test('theme', async () => {
  const wrapper = mount({
    render() {
      return <ElAlert title="test" effect="dark"></ElAlert>
    }
  })
  expect(wrapper.classes()).toContain('is-dark')
})

test('title slot', async () => {
  const wrapper = mount({
    render() {
      return (
        <ElAlert
          title="test"
          description="Unbowed, Unbent, Unbroken"
          showIcon
          v-slots={{
            title: () => <span>foo</span>
          }}
        ></ElAlert>
      )
    }
  })
  expect(
    wrapper.element.querySelector('.el-alert__title')?.textContent
  ).toEqual('foo')
})

test('click', async () => {
  const wrapper = mount({
    render() {
      return <ElAlert title="test" close-text="close"></ElAlert>
    }
  })
  wrapper.element
    .querySelector('.el-alert__closebtn')
    ?.dispatchEvent(new Event('click'))
  await sleep(200)
  expect((wrapper.element as HTMLElement).style.display).toEqual('none')
})
