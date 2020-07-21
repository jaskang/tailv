import { Directive } from 'vue'

// 鼠标点击事件，click 不会监听右键
const defaultEvent = 'click'

const vClickAway: Directive = {
  beforeMount() {
    console.log('beforeMount')
  },
  mounted(el, { value }) {
    el.__el__vClickAway = (event: any) => {
      if (el.contains(event.target)) {
        return
      }
      value(event)
    }
    console.log(el)

    document.addEventListener(defaultEvent, el.__el__vClickAway)
  },
  beforeUnmount(el) {
    console.log(el)
    document.removeEventListener(defaultEvent, el.__el__vClickAway)
  }
}

export default vClickAway
