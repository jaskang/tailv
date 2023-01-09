<script setup lang="ts">
import { onMounted, ref, toRaw } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  meta: {
    type: String,
    required: true,
  },
})

const codeEl = ref<HTMLDivElement>()
const height = ref(0)
const copied = ref(false)
const toggleCode = () => {
  const targetHeight = codeEl.value ? codeEl.value.offsetHeight : 0
  height.value = height.value === 0 ? targetHeight : 0
}
const copyCode = () => {
  if (!copied.value) {
    try {
      navigator.clipboard.writeText(props.code)
    } catch (error) {}
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1000)
  }
}
onMounted(() => {
  console.log(codeEl.value!.offsetHeight)
})
</script>
<template>
  <div class="mdvue-demo">
    <div class="mdvue-demo__preview">
      <slot />
    </div>
    <div class="mdvue-demo__toolbar">
      <div class="mdvue-demo__btn mdvue-demo__btn-copy" @click="copyCode">
        <svg
          v-if="!copied"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="20"
          width="20"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="20"
          width="20"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"
          />
        </svg>
      </div>
      <div class="mdvue-demo__btn mdvue-demo__btn-code" @click="toggleCode">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="46"
            d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
          />
        </svg>
      </div>
    </div>
    <div
      class="mdvue-demo__code"
      :style="{
        height: height + 'px',
      }"
    >
      <div ref="codeEl">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>
<style>
.mdvue-demo {
  border-radius: 4px;
  overflow: hidden;
}
.mdvue-demo__preview {
  padding: 20px;
  border: 1px solid var(--vp-c-divider-light);
}
.mdvue-demo__toolbar {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid var(--vp-c-divider-light);
  /* background-color: rgb(248 250 252/ 1); */
  border-top: none;
}
.mdvue-demo__toolbar .mdvue-demo__btn {
  width: 38px;
  height: 100%;
  align-items: center;
  text-align: center;
  margin-left: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.mdvue-demo__toolbar .mdvue-demo__btn:hover {
  background-color: rgb(248 250 252 / 1);
}
.mdvue-demo__toolbar svg {
  width: 1rem;
  height: 1rem;
}
.mdvue-demo__toolbar {
}
.mdvue-demo__code div[class*='language-'] {
  margin: 0;
  border-radius: 0;
}

.mdvue-demo__code {
}
</style>
