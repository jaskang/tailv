import { mount } from '@vue/test-utils'
import { Container, ElHeader, ElFooter, ElMain, ElAside } from '..'

describe('Container', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <Container></Container>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('props direction', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Container direction="horizontal">
            <ElHeader></ElHeader>
            <ElMain></ElMain>
          </Container>
        )
      }
    })
    expect(wrapper.classes()).toContain('is-horizontal')
  })

  test('auto horizontal', () => {
    const wrapper = mount({
      mounted() {},
      render() {
        return (
          <Container>
            <ElAside></ElAside>
            <ElMain></ElMain>
          </Container>
        )
      }
    })
    setTimeout(() => {
      expect(wrapper.classes()).toContain('is-horizontal')
    }, 0)
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
