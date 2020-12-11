<template>
  <a :class="classes" :href="disabled ? undefined : href" @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <span class="el-link--inner"><slot /></span>
  </a>
</template>

<script lang="ts">
import { App, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import { mergeClass } from '@elenext/shared'

const blockCls = getBlockCls('Link')
const Link = defineComponent({
  name: getCompName('Link'),
  emits: ['click'],
  props: {
    color: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
      default: 'default'
    },
    underline: { type: Boolean, default: true },
    disabled: Boolean,
    href: String,
    icon: String
  },
  setup(props, { emit, slots }) {
    const classes = computed(() =>
      mergeClass([
        blockCls,
        `${blockCls}--${props.color}`,
        {
          'is-disabled': !!props.disabled,
          'is-underline': !!props.underline && !props.disabled
        }
      ])
    )
    const handleClick = (event: MouseEvent) => {
      if (!props.disabled && !props.href) {
        emit('click', event)
      }
    }
    return { classes, handleClick }
  }
})

Link.install = (app: App): void => {
  app.component(Link.name, Link)
}

export default Link
</script>
