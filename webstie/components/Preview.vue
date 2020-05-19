<template>
  <div class="preview">
    <h1>{{ title }}</h1>
    <div class="preview__demo">
      <slot></slot>
    </div>
    <div v-if="showCode" class="preview__code">
      {{ description }}
      <pre><code class="language-markup"><slot name="template"></slot></code></pre>
      <pre><code class="language-typescript"><slot name="script"></slot></code></pre>
    </div>
    <div class="preview__footer" @click="toggleCode">显示代码</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Preview',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    template: {
      type: String,
      default: ''
    },
    script: {
      type: String,
      default: ''
    }
  },
  setup() {
    const state = reactive({
      showCode: false
    })
    const highlightAll = () => {
      setTimeout(() => {
        window.Prism.highlightAll()
      }, 0)
    }
    const toggleCode = () => {
      state.showCode = !state.showCode
      if (state.showCode) {
        highlightAll()
      }
    }
    return {
      ...toRefs(state),
      templateCode: '',
      scriptCode: '',
      toggleCode
    }
  }
})
</script>

<style lang="less">
.preview {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  &::hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  &__demo {
    padding: 20px;
  }
  &__code {
    padding: 20px;
  }
  &__footer {
    line-height: 30px;
    text-align: center;
  }
}
</style>
