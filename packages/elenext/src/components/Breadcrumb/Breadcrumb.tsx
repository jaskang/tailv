import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'

const Breadcrumb = defineComponent({
  name: 'ElBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
    setup(prop, { attrs }) {
    //   const items = this.$el.querySelectorAll('.el-breadcrumb__item')
      const items = mount(Breadcrumb).findAll('.el-breadcrumb__item');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
    return (
      <div class="el-breadcrumb" aria-label="Breadcrumb" role="navigation">
        <slot></slot>
      </div>
    )
  }
})
