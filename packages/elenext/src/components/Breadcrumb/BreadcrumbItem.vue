<template>
  <span :class="blockCls">
    <span :class="[`${blockCls}__inner`, to ? 'is-link' : '']" role="link" @click="clickHandler">
      <slot />
    </span>
    <span :class="`${blockCls}__separator`" v-text="separator" />
  </span>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, computed, App } from 'vue'
import { getBlockCls, getCompName } from '../../utils'

const blockCls = getBlockCls('BreadcrumbItem')
const BreadcrumbItem = defineComponent({
  name: getCompName('BreadcrumbItem'),
  props: {
    to: {
      type: Object,
      default: () => {
        return null
      }
    },
    replace: Boolean
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance()

    const separator = computed<string>(() => instance?.parent?.props.separator as string)

    const clickHandler = (event: MouseEvent) => {
      const { to } = props
      const $router = (instance as any)?.ctx?.$router
      if (!to || !$router) return
      props.replace ? $router.replace(to) : $router.push(to)
    }
    return {
      blockCls,
      separator,
      clickHandler
    }
  }
})

BreadcrumbItem.install = (app: App): void => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem
</script>
