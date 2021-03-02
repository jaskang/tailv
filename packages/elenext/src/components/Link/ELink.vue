<template>
  <a :class="classes" :href="disabled ? undefined : href" @click="handleClick">
    <slot name="icon" />
    <span class="el-link--inner"><slot /></span>
  </a>
</template>

<script lang="ts">
import { App, computed, defineComponent } from 'vue'
import { mergeClass } from '@elenext/shared'
import vptypes from 'vptypes'

const ELink = defineComponent({
  name: 'ELink',
  props: {
    color: vptypes.oneOfString(['default', 'primary', 'success', 'warning', 'danger', 'info']).def('default'),
    noUnderline: vptypes.bool().def(false),
    disabled: vptypes.bool(),
    href: vptypes.string(),
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = computed(() =>
      mergeClass([
        'el-link',
        {
          'is-underline': !props.noUnderline && !props.disabled,
          'is-disabled': !!props.disabled,
        },
        `el-link--${props.color}`,
      ])
    )
    const handleClick = (event: MouseEvent) => {
      if (!props.disabled && !props.href) {
        emit('click', event)
      }
    }
    return { classes, handleClick }
  },
})

ELink.install = (app: App): void => {
  app.component(ELink.name, ELink)
}

export default ELink
</script>
