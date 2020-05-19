<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script lang="ts">
type ResultJson<T> = {
  code: string
  data: T
}
type UserInfoType = {
  name: string
  id: number
}
const userinfo: ResultJson<UserInfoType> = {
  code: '12',
  data: {
    name: 'sdf',
    id: 232
  }
}

type ListType<T = string> = Array<{
  id: number
  title: T
}>
const list: ResultJson<ListType<number>> = {
  code: 'sdfsd',
  data: [
    {
      id: 12,
      title: 2323
    }
  ]
}

import { inject, computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'ElContainer',
  componentName: 'ElContainer',
  props: {
    direction: String
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      return slots?.default
        ? slots.default().some(vnode:Slot => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag
            return tag === 'el-header' || tag === 'el-footer'
          })
        : false
    })
  }
})
</script>

<style>
</style>