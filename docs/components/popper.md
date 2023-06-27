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
    <TPopper trigger="click">
      <TButton>click</TButton>
      <template #content>
        1234 asdfasd asdfasdf asdfasdf asdf
        <br />
        <TPopper trigger="click">
          <TButton>popper</TButton>
          <template #content>
            1234
            <TPopper trigger="click">
              <TButton>popper</TButton>
              <template #content> 1234 </template>
            </TPopper>
          </template>
        </TPopper>
        asdf sdfasdf
      </template>
    </TPopper>

    <TPopper trigger="hover">
      <TButton>hover</TButton>
      <template #content>
        1234 asdfasd asdfasdf asdfasdf asdf
        <br />
        <TPopper trigger="hover">
          <TButton>popper</TButton>
          <template #content>
            1234
            <TPopper trigger="hover">
              <TButton>popper</TButton>
              <template #content> 1234 </template>
            </TPopper>
          </template>
        </TPopper>
        asdf sdfasdf
      </template>
    </TPopper>
  </div>
</template>
```
