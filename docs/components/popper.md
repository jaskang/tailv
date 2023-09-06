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
    <ZPopper trigger="click">
      <ZButton>click</ZButton>
      <template #content>
        1234 asdfasd asdfasdf asdfasdf asdf
        <br />
        <ZPopper trigger="click">
          <ZButton>popper</ZButton>
          <template #content>
            1234
            <ZPopper trigger="click">
              <ZButton>popper</ZButton>
              <template #content> 1234 </template>
            </ZPopper>
          </template>
        </ZPopper>
        asdf sdfasdf
      </template>
    </ZPopper>

    <ZPopper trigger="hover">
      <ZButton>hover</ZButton>
      <template #content>
        1234 asdfasd asdfasdf asdfasdf asdf
        <br />
        <ZPopper trigger="hover">
          <ZButton>popper</ZButton>
          <template #content>
            1234
            <ZPopper trigger="hover">
              <ZButton>popper</ZButton>
              <template #content> 1234 </template>
            </ZPopper>
          </template>
        </ZPopper>
        asdf sdfasdf
      </template>
    </ZPopper>
  </div>
</template>
```
