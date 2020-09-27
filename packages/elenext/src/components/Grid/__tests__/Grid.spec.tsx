import { mount } from '@vue/test-utils'
import { ElRow, ElCol } from '../'

describe('Row', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <ElRow></ElRow>
      }
    })
    expect(wrapper.classes()).toContain('el-row')
  })

  test('gutter', () => {
    const wrapper = mount({
      render() {
        return <ElRow gutter={20}></ElRow>
      }
    })
    let rowElm = wrapper.vm.$el
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })
  test('type', () => {
    const wrapper = mount({
      render() {
        return <ElRow type="flex"></ElRow>
      }
    })
    expect(wrapper.classes()).toContain('el-row--flex')
  })
  test('justify', () => {
    const wrapper = mount({
      render() {
        return <ElRow justify="end"></ElRow>
      }
    })
    expect(wrapper.classes()).toContain('is-justify-end')
  })
  test('align', () => {
    const wrapper = mount({
      render() {
        return <ElRow align="bottom"></ElRow>
      }
    })
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})

describe('Col', () => {
  test('create', () => {
    const wrapper = mount({
      render() {
        return <ElCol></ElCol>
      }
    })
    expect(wrapper.classes()).toContain('el-col')
  })

  it('span', () => {
    const wrapper = mount({
      render() {
        return <ElCol span={12}></ElCol>
      }
    })
    expect(wrapper.classes()).toContain('el-col-12')
  })
  it('pull', () => {
    const wrapper = mount({
      render() {
        return <ElCol span={12} pull={3}></ElCol>
      }
    })
    expect(wrapper.classes()).toContain('el-col-pull-3')
  })
  it('push', () => {
    const wrapper = mount({
      render() {
        return <ElCol span={12} push={3}></ElCol>
      }
    })
    expect(wrapper.classes()).toContain('el-col-push-3')
  })
  it('gutter', () => {
    const wrapper = mount({
      render() {
        return (
          <ElRow gutter={20}>
            <ElCol span={12} ref="col"></ElCol>
          </ElRow>
        )
      }
    })

    let colElm = (wrapper.vm.$refs.col as any).$el
    expect(colElm.style.paddingLeft === '10px').toBe(true)
    expect(colElm.style.paddingRight === '10px').toBe(true)
  })
  it('responsive', () => {
    const wrapper = mount({
      render() {
        return (
          <ElRow gutter={20}>
            <ElCol ref="col" sm={{ span: 4, offset: 2 }} md={8} lg={{ span: 6, offset: 3 }}></ElCol>
          </ElRow>
        )
      }
    })
    let colElm = (wrapper.vm.$refs.col as any).$el
    expect(colElm.classList.contains('el-col-sm-4')).toBe(true)
    expect(colElm.classList.contains('el-col-sm-offset-2')).toBe(true)
    expect(colElm.classList.contains('el-col-lg-6')).toBe(true)
    expect(colElm.classList.contains('el-col-lg-offset-3')).toBe(true)
    expect(colElm.classList.contains('el-col-md-8')).toBe(true)
  })
})
