<template>
  <transition name="el-alert-fade">
    <div class="el-alert" :class="[`el-alert--${type}`, 'is-' + effect]" v-show="state.visible" role="alert">
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
        <p v-if="$slots.default || description" class="el-alert__description">
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
import { App, defineComponent, reactive } from 'vue'
import {
  IconInfoCircleFill,
  IconExclamationCircleFill,
  IconCheckCircleFill,
  IconXCircleFill,
  IconX
} from '@elenext/icons'
import { propTypes } from 'src/utils/PropTypes'

const Alert = defineComponent({
  name: 'Alert',
  components: {
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconInfoCircleFill,
    IconXCircleFill,
    IconX
  },
  props: {
    type: propTypes.oneOfString<'success' | 'warning' | 'info' | 'error'>('info'),
    effect: propTypes.oneOfString<'light' | 'dark'>('light'),
    title: propTypes.string(),
    description: propTypes.string(),
    closable: propTypes.boolean(true)
  },
  emits: ['close'],
  setup(props, { attrs, slots, emit }) {
    const state = reactive({
      visible: true
    })
    const closeHandler = (e: MouseEvent) => {
      emit('close', e)
      state.visible = false
    }
    return {
      state,
      closeHandler
    }
  }
})
Alert.install = (app: App): void => {
  app.component(Alert.name, Alert)
}
export default Alert
</script>
