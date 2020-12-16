<template>
  <button :disabled="disabled" :type="nativeType" :class="classes" @click="clickHandler">
    <IconArrowClockwise v-if="loading" spin />
    <slot v-if="!loading" name="icon" />
    <span><slot /></span>
  </button>
</template>

<script lang="ts">
import { App, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../utils'
import { mergeClass } from '@elenext/shared'
import { IconArrowClockwise } from '@elenext/icons'
import { propTypes } from '../../utils/PropTypes'

const cls = getBlockCls('Button')

const Button = defineComponent({
  name: getCompName('Button'),
  components: {
    IconArrowClockwise
  },
  props: {
    color: propTypes.oneOfString<'primary' | 'success' | 'info' | 'warning' | 'danger'>(),
    type: propTypes.oneOfString<'link' | 'round' | 'circle' | 'plain'>(),
    size: propTypes.oneOfString<'large' | 'small'>(),
    nativeType: propTypes.oneOfString<'button' | 'submit' | 'reset'>('button'),
    loading: propTypes.boolean(),
    disabled: propTypes.boolean()
  },
  emits: ['click'],
  setup(props, { emit }) {
    const classes = computed(() =>
      mergeClass(cls, [
        // link 类型不需要颜色
        props.color && props.type !== 'link' ? `${cls}--${props.color}` : '',
        props.type ? `${cls}--${props.type}` : '',
        props.size ? `${cls}--${props.size}` : '',
        {
          'is-loading': props.loading,
          'is-disabled': props.disabled
        }
      ])
    )
    const clickHandler = (e: MouseEvent) => {
      if (!props.disabled && !props.loading) {
        emit('click', e)
      }
    }
    return {
      classes,
      clickHandler
    }
  }
})

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button
</script>
