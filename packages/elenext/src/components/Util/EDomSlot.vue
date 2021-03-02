<template>
  <slot />
</template>
<script lang="ts">
import { App, defineComponent, getCurrentInstance, onMounted, watchEffect } from 'vue'
import vptypes from 'vptypes'

const EDomSlot = defineComponent({
  name: 'EDomSlot',
  props: {
    init: vptypes.func<(el: Element) => void>().isRequired,
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance()

    watchEffect(() => {
      console.log(instance)
    })
    onMounted(() => {
      const el = instance?.vnode.el as Element | Text | null
      switch (el?.nodeType) {
        case 1:
          props.init(el as Element)
          break
        case 3:
          if (!(el as Text).wholeText && el.nextElementSibling) {
            props.init(el.nextElementSibling)
          } else {
            console.warn('The first child in a slot#defalut is not an dom element.', el)
          }
          break
        default:
          // TODO: other type
          break
      }
    })
    return () => {
      return slots.default?.() || []
    }
  },
})

EDomSlot.install = (app: App): void => {
  app.component(EDomSlot.name, EDomSlot)
}

export default EDomSlot
</script>
