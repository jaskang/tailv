import { mount } from '@vue/test-utils'
import { Link } from '../'

it('create', () => {
  const wrapper = mount(Link, {
    props: {
      color: 'primary'
    }
  })
  expect(wrapper.classes()).toContain('el-link--primary')
})
it('icon', () => {
  const wrapper = mount(Link, {
    props: {
      icon: 'el-icon-search'
    }
  })
  expect(wrapper.element.querySelector('.el-icon-search')).toBeDefined()
})
it('href', () => {
  const wrapper = mount(Link, {
    props: {
      href: 'https://element.eleme.io/'
    }
  })

  expect(wrapper.element.getAttribute('href')).toEqual('https://element.eleme.io/')
})
it('target', () => {
  const wrapper = mount(Link, {
    props: {
      href: 'https://element.eleme.io/'
    },
    attrs: {
      target: '_blank'
    }
  })
  expect(wrapper.element.getAttribute('target')).toEqual('_blank')
})
it('disabled', () => {
  const wrapper = mount(Link, {
    props: {
      disabled: true
    }
  })
  expect(wrapper.classes()).toContain('is-disabled')
})

it('click', async () => {
  let times = 0

  const wrapper = mount(Link, {
    props: {
      disabled: false
    }
  })
  await wrapper.find('.el-link').trigger('click')
  expect(times).toBe(1)
  await wrapper.setProps({ disabled: true })
  await wrapper.find('.el-link').trigger('click')
  expect(times).toBe(1)
})
