<template>
  <a :class="classes" :href="disabled ? undefined : href" @click="handleClick">
    <i v-if="icon" :class="icon" />
    <span class="el-link--inner"><slot /></span>
  </a>
</template>

<script lang="ts">
import { App, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../utils'
import { mergeClass } from '@elenext/shared'

const blockCls = getBlockCls('Link')
const Link = defineComponent({
  name: getCompName('Link'),
  props: {
    color: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
      default: 'default'
    },
    underline: { type: Boolean, default: true },
    disabled: Boolean,
    href: { type: String as PropType<string>, default: undefined },
    icon: { type: String as PropType<string>, default: undefined }
  },
  emits: ['click'],
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
