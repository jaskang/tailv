<template>
  <a :class="classes" :href="disabled ? undefined : href" @click="handleClick">
    <i v-if="icon" :class="icon" />
    <span class="el-link--inner"><slot /></span>
  </a>
</template>

<script lang="ts">
import { App, computed, defineComponent, PropType } from 'vue'
import { mergeClass } from '@elenext/shared'
import { propTypes } from '../../utils/PropTypes'

const ELink = defineComponent({
  name: 'ELink',
  props: {
    color: propTypes.oneOfString<'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>('default'),
    underline: propTypes.boolean(true),
    disabled: propTypes.boolean(),
    href: propTypes.string(),
    icon: propTypes.string()
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = computed(() =>
      mergeClass([
        'el-link',
        `el-link--${props.color}`,
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

ELink.install = (app: App): void => {
  app.component(ELink.name, ELink)
}

export default ELink
</script>
