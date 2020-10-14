<template>
  <div class="preview">
    <div class="preview__card">
      <div class="preview__demo">
        <slot></slot>
      </div>
      <div :style="{ height: `${codeHeight}px` }" class="preview__code">
        <div ref="codeRef" class="preview__coderef">
          <pre><code class="language-markup" v-text="source"></code></pre>
        </div>
      </div>
      <div class="preview__footer" @click="toggleCode">
        {{ codeHeight > 0 ? '隐藏代码' : '显示代码' }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted, nextTick } from 'vue'

export default defineComponent({
  name: 'Preview',
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const codeRef = ref<HTMLDivElement>()
    const state = reactive({
      codeHeight: 0
    })
    const highlightAll = () => {
      nextTick(() => {
        window.Prism.highlightAll()
      })
    }
    const toggleCode = () => {
      if (state.codeHeight === 0) {
        state.codeHeight = codeRef.value?.offsetHeight || 0
      } else {
        state.codeHeight = 0
      }
    }
    onMounted(() => {
      highlightAll()
    })
    return {
      ...toRefs(state),
      codeRef,
      toggleCode
    }
  }
})
</script>

<style lang="less">
.preview {
  text-align: left;
  &__title {
    font-size: 18px;
    margin: 30px 0 20px 0;
  }
  &__card {
    // border: 1px solid #ebebeb;
    // border-radius: 3px;
    // transition: 0.2s;

    // &:hover {
    //   box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    //     0 2px 4px 0 rgba(232, 237, 250, 0.5);
    // }
  }
  &__demo {
    padding: 20px;
    background-color: #fff;
  }
  &__code {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    // transition: height 0.3s;
  }
  &__coderef {
    overflow: hidden;
    > pre {
      padding: 20px 0;
    }
  }
  &__comment {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px 10px 0 10px;
    background-color: #fff;
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }
  &__footer {
    border-top: 1px solid #eaeefb;
    height: 44px;
    line-height: 43px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }
  }
}
</style>
