<script setup lang="ts">
import { type ExtractPublicPropTypes, type PropType, ref, watch } from 'vue'

defineOptions({ name: 'Avatar' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ fallback?(_: {}): any }>()
const props = defineProps({
  src: String,
  name: String,
  size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
  rounded: Boolean,
  border: Boolean,
})

export type AvatarProps = ExtractPublicPropTypes<typeof props>

const showFallback = ref(false)

watch(
  () => props.src,
  () => {
    showFallback.value = false
  }
)
</script>
<template>
  <div
    class="relative flex shrink-0 items-center justify-center overflow-hidden"
    :class="[
      props.rounded ? 'rounded-full' : 'rounded-md',
      props.border ? 'border-line border border-2' : '',
      {
        sm: `h-7 w-7`,
        md: `h-9 w-9`,
        lg: `h-11 w-11`,
      }[props.size],
    ]"
  >
    <slot v-if="showFallback || !src" name="fallback">
      <div class="bg-input flex h-full w-full items-center justify-center text-center">
        <span v-if="name">{{ name }}</span>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-7 w-7 bg-transparent"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </slot>

    <img
      v-else
      :src="src"
      class="block h-full w-full object-cover select-none"
      :class="[props.rounded ? 'rounded-full' : 'rounded', props.border ? 'border-2 border-transparent' : '']"
      alt="avatar"
      @error="showFallback = true"
    />
  </div>
</template>
