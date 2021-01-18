<template>
  <transition name="el-alert-fade">
    <div
      v-show="state.visible"
      class="el-alert"
      :class="[`el-alert--${type}`, hasDescription ? 'is-large' : '', 'is-' + effect]"
      role="alert"
    >
      <div v-if="$slots.icon || type" class="el-alert__icon">
        <slot name="icon">
          <IconCheckCircleFill v-if="type === 'success'" />
          <IconExclamationCircleFill v-if="type === 'warning'" />
          <IconInfoCircleFill v-if="type === 'info'" />
          <IconXCircleFill v-if="type === 'error'" />
        </slot>
      </div>
      <div class="el-alert__content">
        <span v-if="title || $slots.title" class="el-alert__title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="hasDescription" class="el-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <span v-show="closable" class="el-alert__closebtn" @click="closeHandler">
          <IconX />
        </span>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { App, computed, defineComponent, reactive } from 'vue'
import {
  IconInfoCircleFill,
  IconExclamationCircleFill,
  IconCheckCircleFill,
  IconXCircleFill,
  IconX,
} from '@elenext/icons'
import { prop } from '../../utils'

const EAlert = defineComponent({
  name: 'EAlert',
  components: {
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconInfoCircleFill,
    IconXCircleFill,
    IconX,
  },
  props: {
    type: prop.oneOf(['success', 'warning', 'info', 'error'] as const).def(),
    effect: prop.oneOf(['light', 'dark'] as const).def('light'),
    title: prop.string(),
    description: prop.string(),
    closable: prop.bool().def(true),
  },
  emits: ['close'],
  setup(props, { slots, emit }) {
    const state = reactive({
      visible: true,
    })
    const hasDescription = computed(() => {
      return slots.default || props.description
    })
    const closeHandler = (e: MouseEvent) => {
      emit('close', e)
      state.visible = false
    }
    return {
      state,
      hasDescription,
      closeHandler,
    }
  },
})
EAlert.install = (app: App): void => {
  app.component(EAlert.name, EAlert)
}
export default EAlert
</script>
