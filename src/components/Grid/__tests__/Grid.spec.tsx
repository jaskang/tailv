import { mount } from '@vue/test-utils'
import { Row, Col } from '../'

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

test('Row create', () => {
  const wrapper = mount({
    render() {
      return <Row></Row>
    }
  })
  expect(wrapper.classes()).toContain('el-row')
})

test('Row gutter', () => {
  const wrapper = mount({
    render() {
      return <Row gutter={20}></Row>
    }
  })
  let rowElm = wrapper.vm.$el
  expect(rowElm.style.marginLeft).toEqual('-10px')
  expect(rowElm.style.marginRight).toEqual('-10px')
})

test('Row justify', () => {
  const wrapper = mount({
    render() {
      return <Row justify="end"></Row>
    }
  })
  expect(wrapper.classes()).toContain('el-row-end')
})
test('Row align', () => {
  const wrapper = mount({
    render() {
      return <Row align="bottom"></Row>
    }
  })
  expect(wrapper.classes()).toContain('el-row-bottom')
})

test('Row wrap', () => {
  const wrapper = mount({
    render() {
      return <Row wrap={false}></Row>
    }
  })
  expect(wrapper.classes()).toContain('el-row-no-wrap')
})
test('Col create', () => {
  const wrapper = mount({
    render() {
      return <Col></Col>
    }
  })
  expect(wrapper.classes()).toContain('el-col')
})

it('Col span', () => {
  const wrapper = mount({
    render() {
      return <Col span={12}></Col>
    }
  })
  expect(wrapper.classes()).toContain('el-col-12')
})
it('Col pull', () => {
  const wrapper = mount({
    render() {
      return <Col span={12} pull={3}></Col>
    }
  })
  expect(wrapper.classes()).toContain('el-col-pull-3')
})
it('Col push', () => {
  const wrapper = mount({
    render() {
      return <Col span={12} push={3}></Col>
    }
  })
  expect(wrapper.classes()).toContain('el-col-push-3')
})
it('Col gutter', () => {
  const wrapper = mount({
    render() {
      return (
        <Row gutter={20}>
          <Col span={12} ref="col"></Col>
        </Row>
      )
    }
  })

  const col = wrapper.getComponent({ name: Col.name })
  expect(col.vm.$el.style.paddingLeft === '10px').toBe(true)
  expect(col.vm.$el.style.paddingRight === '10px').toBe(true)
})
it('Col responsive', () => {
  const wrapper = mount({
    render() {
      return (
        <Row gutter={20}>
          <Col ref="col" sm={{ span: 4, offset: 2 }} md={8} lg={{ span: 6, offset: 3 }}></Col>
        </Row>
      )
    }
  })
  const col = wrapper.getComponent({ name: Col.name })

  expect(col.classes()).toContain('el-col-sm-4')
  expect(col.classes()).toContain('el-col-sm-offset-2')
  expect(col.classes()).toContain('el-col-lg-6')
  expect(col.classes()).toContain('el-col-lg-offset-3')
  expect(col.classes()).toContain('el-col-md-8')
})
