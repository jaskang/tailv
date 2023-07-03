<script lang="ts" setup>
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import { ref, watchPostEffect } from 'vue'

import VPSidebarItem from './VPSidebarItem.vue'

const { sidebarGroups, hasSidebar } = useSidebar()

const props = defineProps<{
  open: boolean
}>()

// a11y: focus Nav element when menu has opened
let navEl = ref<HTMLElement | null>(null)

function lockBodyScroll() {
  disableBodyScroll(navEl.value!, { reserveScrollBarGap: true })
}

function unlockBodyScroll() {
  clearAllBodyScrollLocks()
}

watchPostEffect(async () => {
  if (props.open) {
    lockBodyScroll()
    navEl.value?.focus()
  } else {
    unlockBodyScroll()
  }
})
</script>

<template>
  <aside v-if="hasSidebar" :class="{ open }" class="mt-5 flex-1 space-y-1 bg-white px-2" @click.stop>
    <nav class="outline-0" id="VPSidebarNav" tabindex="-1">
      <div v-for="item in sidebarGroups" :key="item.text" class="group">
        <VPSidebarItem :item="item" :depth="0" />
      </div>
    </nav>
  </aside>
</template>
