<template>
  <button :disabled="disabled" :type="nativeType" :class="classes" @click="onClick">
    <IconArrowClockwise spin v-if="loading" />
    <slot name="icon" v-if="!loading" />
    <span><slot /></span>
  </button>
</template>

<script lang="ts">
import { App, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '@/config'
import { mergeCls } from '@/utils/tools'
import { IconArrowClockwise } from '@elenext/icons'
const cls = getBlockCls('Button')

const Button = defineComponent({
  name: getCompName('Button'),
  components: {
    IconArrowClockwise
  },
  emits: ['click'],
  props: {
    color: {
      type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
      default: 'default'
    },
    type: {
      type: String as PropType<'link' | 'round' | 'circle'>
    },
    size: {
      type: String as PropType<'large' | 'small'>
    },
    nativeType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean }
  },
  setup(props, { emit }) {
    const classes = computed(() =>
      mergeCls(cls, `${cls}-${props.color}`, [
        props.size ? `${cls}-${props.size}` : '',
        props.type ? `is-${props.type}` : '',
        {
          'is-loading': props.loading,
          'is-disabled': props.disabled
        }
      ])
    )
    const onClick = (e: MouseEvent) => {
      if (!props.disabled && !props.loading) {
        emit('click', e)
      }
    }
    return {
      classes,
      onClick
    }
  }
})

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button
</script>
