## Popper

### 基础用法

```vue demo
<template>
  <Popper>
    <template #content> 12312342 </template>
    <Button>top button</Button>
  </Popper>
  <Popper>
    <template #content> 12312342 </template>
    text123213
  </Popper>
  <br />
  <Popper placement="left">
    <template #content> 12312342 </template>
    <Button>left button</Button>
  </Popper>
  <br />
  <Popper placement="right">
    <Button>right button</Button>
    <template #content> 12312342 </template>
  </Popper>
  <br />
  <Popper placement="bottom">
    <Button>bottom button</Button>
    <template #content> 12312342 </template>
  </Popper>

  <Popper>
    <span>span</span>
    <template #content> 12312342 </template>
  </Popper>
  <Popper>
    <Link><span>Link -> span</span></Link>
    <template #content> 12312342 </template>
  </Popper>
  <Popper>
    <Button @click="tgShow"> button</Button>
    <template #content> 12312342 </template>
  </Popper>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    tgShow() {
      this.show = !this.show
    }
  }
}
</script>
```
