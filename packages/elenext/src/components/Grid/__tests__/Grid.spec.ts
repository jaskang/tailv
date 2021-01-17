import { mount } from '@vue/test-utils'
import { ERow, ECol } from '../'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})
describe('ERow', () => {
  test('ERow create', () => {
    const wrapper = mount(ERow)
    expect(wrapper.classes()).toContain('el-row')
  })

  test('ERow gutter', () => {
    const wrapper = mount(ERow, {
      props: {
        gutter: 20
      }
    })
    const rowElm = wrapper.vm.$el
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })

  test('ERow justify', () => {
    const wrapper = mount(ERow, {
      props: {
        justify: 'end'
      }
    })
    expect(wrapper.classes()).toContain('el-row--end')
  })
  test('ERow align', () => {
    const wrapper = mount(ERow, {
      props: {
        align: 'bottom'
      }
    })
    expect(wrapper.classes()).toContain('el-row--bottom')
  })

  test('ERow wrap', () => {
    const wrapper = mount(ERow, {
      props: {
        wrap: false
      }
    })
    expect(wrapper.classes()).toContain('el-row--no-wrap')
  })
})
describe('ECol', () => {
  test('ECol create', () => {
    const wrapper = mount(ECol)
    expect(wrapper.classes()).toContain('el-col')
  })

  it('ECol span', () => {
    const wrapper = mount(ECol, {
      props: {
        span: 12
      }
    })
    expect(wrapper.classes()).toContain('el-col-12')
  })
  it('ECol pull', () => {
    const wrapper = mount(ECol, {
      props: {
        span: 12,
        pull: 3
      }
    })
    expect(wrapper.classes()).toContain('el-col-pull-3')
  })
  it('ECol push', () => {
    const wrapper = mount(ECol, {
      props: {
        span: 12,
        push: 3
      }
    })
    expect(wrapper.classes()).toContain('el-col-push-3')
  })
  it('ECol gutter', () => {
    const wrapper = mount({
      components: { ERow, ECol },
      template: `<ERow :gutter="20"><ECol :span="12" ></ECol></ERow>`
    })
    const col = wrapper.getComponent(ECol)
    expect(col.vm.$el.style.paddingLeft === '10px').toBe(true)
    expect(col.vm.$el.style.paddingRight === '10px').toBe(true)
  })
  it('ECol responsive', () => {
    const wrapper = mount({
      components: { ERow, ECol },
      template: `<ERow :gutter="20"><ECol :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }"></ECol></ERow>`
    })
    const col = wrapper.getComponent({ name: ECol.name })

    expect(col.classes()).toContain('el-col-sm-4')
    expect(col.classes()).toContain('el-col-sm-offset-2')
    expect(col.classes()).toContain('el-col-lg-6')
    expect(col.classes()).toContain('el-col-lg-offset-3')
    expect(col.classes()).toContain('el-col-md-8')
  })
})
