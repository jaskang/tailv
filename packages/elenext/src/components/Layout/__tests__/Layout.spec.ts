import { mount } from '@vue/test-utils'
import { ELayout, EHeader, EFooter, EMain, EAside } from '..'

describe('ELayout', () => {
  test('create', () => {
    const wrapper = mount(ELayout)
    expect(wrapper.element).not.toBeNull()
  })

  test('props direction', () => {
    const wrapper = mount({
      components: { ELayout, EHeader, EFooter, EAside, EMain },
      template: `<ELayout direction="horizontal">
        <EHeader></EHeader>
        <EMain></EMain>
      </ELayout>`
    })
    expect(wrapper.classes()).toContain('is-horizontal')
  })

  test('auto horizontal', () => {
    const wrapper = mount({
      components: { ELayout, EHeader, EFooter, EAside, EMain },
      template: `<ELayout>
        <EAside></EAside>
        <EMain></EMain>
      </ELayout>`
    })
    setTimeout(() => {
      expect(wrapper.classes()).toContain('is-horizontal')
    }, 0)
  })
})

describe('EHeader', () => {
  test('create', () => {
    const wrapper = mount(EHeader)
    expect(wrapper.element).not.toBeNull()
  })

  test('height', () => {
    const wrapper = mount(EHeader, {
      props: {
        height: '100px'
      }
    })
    expect(wrapper.vm.$el.style.height).toEqual('100px')
  })
})

describe('EFooter', () => {
  test('create', () => {
    const wrapper = mount(EFooter)
    expect(wrapper.element).not.toBeNull()
  })

  test('height', () => {
    const wrapper = mount(EFooter, {
      props: {
        height: '100px'
      }
    })
    expect(wrapper.vm.$el.style.height).toEqual('100px')
  })
})

describe('EMain', () => {
  test('create', () => {
    const wrapper = mount(EMain)
    expect(wrapper.element).not.toBeNull()
  })
})

describe('EAside', () => {
  test('create', () => {
    const wrapper = mount({
      components: { ELayout, EHeader, EFooter, EAside, EMain },
      template: `<ELayout>
        <EAside></EAside>
      </ELayout>`
    })
    expect(wrapper.findComponent('EAside')).not.toBeNull()
  })

  test('width', () => {
    const wrapper = mount({
      components: { ELayout, EHeader, EFooter, EAside, EMain },
      template: `<ELayout>
        <EAside width="200px"></EAside>
      </ELayout>`
    })
    expect(wrapper.findComponent('EAside').vm.$el.style.width).toEqual('200px')
  })
})
