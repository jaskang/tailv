# checkbox

```vue preview
<script setup>
import { ref, watchEffect } from 'vue'

const open = ref(false)

const openPopper = e => {
  open.value = !open.value
  console.log('openPopper', open.value)
}
</script>
<template>
  <div class="space-x-1">
    <ZPopover trigger="click">
      <ZButton>click</ZButton>
      <template #content> 1234 asdfasd asdfasdf asdfasdf asdf </template>
    </ZPopover>

    <ZPopover trigger="hover">
      <ZButton>click</ZButton>
      <template #content> 1234 asdfasd asdfasdf asdfasdf asdf </template>
    </ZPopover>
    <ZPopover trigger="click">
      <ZButton>click</ZButton>
      <template #content>
        <div class="p-4">1234 asdfasd asdfasdf asdfasdf asdf</div>
      </template>
    </ZPopover>
  </div>
</template>
```
