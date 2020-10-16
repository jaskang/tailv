import { mount } from '@vue/test-utils'
import { ElContainer, ElHeader, ElFooter, ElMain, ElAside } from '..'

describe('Container', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <ElContainer></ElContainer>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('vertical', () => {
    const wrapper = mount({
      render() {
        return (
          <ElContainer direction="vertical">
            <ElHeader></ElHeader>
            <ElFooter></ElFooter>
          </ElContainer>
        )
      }
    })
    expect(wrapper.classes()).toContain('is-vertical')
  })
})

describe('Header', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <ElHeader></ElHeader>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('height', () => {
    const wrapper = mount({
      render() {
        return <ElHeader height="100px"></ElHeader>
      }
    })
    expect(wrapper.vm.$el.style.height).toEqual('100px')
  })
})

describe('Footer', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <ElFooter></ElFooter>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('height', () => {
    const wrapper = mount({
      render() {
        return <ElFooter height="100px"></ElFooter>
      }
    })
    expect(wrapper.vm.$el.style.height).toEqual('100px')
  })
})

describe('Main', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <ElMain></ElMain>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })
})

describe('Aside', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <ElAside></ElAside>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('width', () => {
    const wrapper = mount({
      render() {
        return <ElAside width="200px"></ElAside>
      }
    })
    expect(wrapper.vm.$el.style.width).toEqual('200px')
  })
})
