<script lang="ts" setup>
import { Anchor, Menu } from 'tailv'

import { useSidebar } from '../composables/sidebar'

const { items, current } = useSidebar()
</script>

<template>
  <div class="">
    <Menu :items :current></Menu>
  </div>
</template>
