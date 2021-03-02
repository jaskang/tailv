<template>
  <button :disabled="disabled" :type="nativeType" :class="classes" @click="clickHandler">
    <IconArrowClockwise v-if="loading" spin />
    <slot v-if="!loading" name="icon" />
    <span v-if="hasDefaultSlot"><slot /></span>
  </button>
</template>

<script lang="ts">
import { App, computed, defineComponent } from 'vue'
import { mergeClass } from '@elenext/shared'
import { IconArrowClockwise } from '@elenext/icons'
import vptypes from 'vptypes'

const EButton = defineComponent({
  name: 'EButton',
  components: {
    IconArrowClockwise,
  },
  props: {
    color: vptypes.oneOfString(['primary', 'success', 'info', 'warning', 'danger']),
    type: vptypes.oneOfString(['link', 'round', 'circle', 'plain']),
    size: vptypes.oneOfString(['large', 'small']),
    nativeType: vptypes.oneOfString(['button', 'submit', 'reset']).def('button'),
    loading: vptypes.bool(),
    disabled: vptypes.bool(),
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = computed(() =>
      mergeClass('el-button', [
        // link 类型不需要颜色
        props.type ? `el-button--${props.type}` : '',
        props.color && props.type !== 'link' ? `el-button--${props.color}` : '',
        props.size ? `el-button--${props.size}` : '',
        {
          'is-loading': props.loading,
          'is-disabled': props.disabled,
        },
      ])
    )
    const clickHandler = (e: MouseEvent) => {
      if (!props.disabled && !props.loading) {
        emit('click', e)
      }
    }
    return {
      classes,
      clickHandler,
      hasDefaultSlot: slots.default,
    }
  },
})

EButton.install = (app: App): void => {
  app.component(EButton.name, EButton)
}

export default EButton
</script>
