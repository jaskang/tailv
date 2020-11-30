import { mount } from '@vue/test-utils'
import { Layout, Header, Footer, Main, Aside } from '..'

describe('Layout', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <Layout></Layout>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('props direction', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Layout direction="horizontal">
            <Header></Header>
            <Main></Main>
          </Layout>
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
          <Layout>
            <Aside></Aside>
            <Main></Main>
          </Layout>
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
        return <Header></Header>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('height', () => {
    const wrapper = mount({
      render() {
        return <Header height="100px"></Header>
      }
    })
    expect(wrapper.vm.$el.style.height).toEqual('100px')
  })
})

describe('Footer', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <Footer></Footer>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })

  test('height', () => {
    const wrapper = mount({
      render() {
        return <Footer height="100px"></Footer>
      }
    })
    expect(wrapper.vm.$el.style.height).toEqual('100px')
  })
})

describe('Main', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <Main></Main>
      }
    })
    expect(wrapper.element).not.toBeNull()
  })
})

describe('Aside', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return (
          <Layout>
            <Aside></Aside>
          </Layout>
        )
      }
    })
    expect(wrapper.findComponent('Aside')).not.toBeNull()
  })

  test('width', () => {
    const wrapper = mount({
      render() {
        return (
          <Layout>
            <Aside width="200px"></Aside>
          </Layout>
        )
      }
    })
    expect(wrapper.findComponent('Aside').vm.$el.style.width).toEqual('200px')
  })
})
