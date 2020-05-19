<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script lang="ts">
import './ElIcon.less'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElIcon',
  props: { name: String }
})
</script>