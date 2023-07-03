<script lang="ts" setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'
import { computed } from 'vue'

const props = defineProps<{
  tag?: string
  href?: string
  noIcon?: boolean
  target?: string
  rel?: string
}>()

const tag = computed(() => (props.tag ?? props.href ? 'a' : 'span'))
const isExternal = computed(() => props.href && EXTERNAL_URL_RE.test(props.href))
</script>

<template>
  <component
    :is="tag"
    class="VPLink"
    :class="{ link: href }"
    :href="href ? normalizeLink(href) : undefined"
    :target="target || (isExternal ? '_blank' : undefined)"
    :rel="rel || (isExternal ? 'noreferrer' : undefined)"
  >
    <slot />
    <ArrowUpRightIcon v-if="isExternal && !noIcon" class="-mt-[1px] ml-1 h-3 w-3" />
  </component>
</template>
