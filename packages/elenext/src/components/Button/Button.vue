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

const cls = getBlockCls('Button')

const Button = defineComponent({
  name: getCompName('Button'),
  components: {
    IconArrowClockwise
  },
  props: {
    color: {
      type: String as PropType<'primary' | 'success' | 'info' | 'warning' | 'danger'>,
      default: undefined
    },
    type: {
      type: String as PropType<'link' | 'round' | 'circle' | 'plain'>,
      default: undefined
    },
    size: {
      type: String as PropType<'large' | 'small'>,
      default: undefined
    },
    nativeType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean }
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
