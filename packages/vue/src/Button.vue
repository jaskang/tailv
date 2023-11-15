<script setup lang="ts">
import { type PropType } from 'vue'
import { useStyle } from './utils/style'
import { createButtonStyle, type ColorName } from '@zonda/style'

defineOptions({ name: 'ZButton' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

// variant: "default" | "ghost" | "link" | "outline" | "soft" | "solid";
//     size: "sm" | "md" | "lg";
//     color: ColorName;
//     block: boolean;
//     disabled: boolean;
//     pill: boolean;
//     square: boolean;
const props = defineProps({
  variant: {
    type: String as PropType<'default' | 'ghost' | 'link' | 'outline' | 'soft' | 'solid'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String as PropType<ColorName>,
    default: 'primary',
  },
  pill: Boolean,
  square: Boolean,
  block: Boolean,
  disabled: Boolean,
})

const { className, style, icon } = useStyle(() =>
  createButtonStyle({
    variant: props.variant,
    size: props.size,
    color: props.color,
    pill: props.pill,
    square: props.square,
    block: props.block,
    disabled: props.disabled,
  })
)
</script>
<template>
  <button :class="className" :disabled="props.disabled" :style="style" type="button">
    {(icon || loading) && (
    <i :class="icon"> {loading ? <LoadingIcon className="animate-spin" /> : icon} </i>
    )} {children}
  </button>
</template>
