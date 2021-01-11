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
import { prop } from '../../utils'

const EButton = defineComponent({
  name: 'EButton',
  components: {
    IconArrowClockwise
  },
  props: {
    color: prop.oneOf(['primary', 'success', 'info', 'warning', 'danger'] as const),
    type: prop.oneOf(['link', 'round', 'circle', 'plain'] as const),
    size: prop.oneOf(['large', 'small'] as const),
    nativeType: prop.oneOf(['button', 'submit', 'reset'] as const).def('button'),
    loading: prop.bool(),
    disabled: prop.bool()
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = computed(() =>
      mergeClass('el-button', [
        // link 类型不需要颜色
        props.color && props.type !== 'link' ? `el-button--${props.color}` : '',
        props.type ? `el-button--${props.type}` : '',
        props.size ? `el-button--${props.size}` : '',
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
      clickHandler,
      hasDefaultSlot: slots.default
    }
  }
})

EButton.install = (app: App): void => {
  app.component(EButton.name, EButton)
}

export default EButton
</script>
<style lang="scss"></style>
