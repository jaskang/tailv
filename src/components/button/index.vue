<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'

export default defineComponent({
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  setup(props, { emit }) {
    // TODO: import provider(elForm & elFormItem)
    const elForm = inject<any>('elForm', null)
    const elFormItem = inject<any>('elFormItem', null)
    const _elFormItemSize = computed(() => {
      return elFormItem?.elFormItemSize
    })
    const buttonSize = computed(() => {
      // TODO 全局$ELEMENT
      const $ELEMENT: { size?: number } = {}
      return props.size || _elFormItemSize || ($ELEMENT || {}).size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || (elForm || {}).disabled
    })
    const handleClick = (evt: Object) => {
      emit('click', evt)
    }
    return {
      buttonSize,
      buttonDisabled,
      handleClick
    }
  }
})
</script>

<style lang="less">
.test {
}
</style>