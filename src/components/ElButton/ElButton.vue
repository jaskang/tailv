<template>
  <button
    class="el-button"
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
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import './button.less';
import { ElFormSymbol, ElFormItemSymbol, useGlobal } from '../../provides/index';
import { inject, computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String
    },
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
    const elForm = inject(ElFormSymbol, null);
    const elFormItem = inject(ElFormItemSymbol, null);
    const elGlobalConfig = useGlobal();

    const buttonSize = computed(() => {
      return props.size || elFormItem?.elFormItemSize || elGlobalConfig?.size;
    });
    const buttonDisabled = computed(() => {
      return props.disabled || elForm?.disabled;
    });

    const handleClick = (evt: any) => {
      emit('click', evt);
    };
    return {
      handleClick,
      buttonSize,
      buttonDisabled
    };
  }
});
</script>
