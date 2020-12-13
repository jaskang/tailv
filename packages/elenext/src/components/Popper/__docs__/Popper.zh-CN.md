## Popper

### 基础用法

```vue demo
<template>
  <Popper>
    <Button>top button</Button>
    <template #popper> 12312342 </template>
  </Popper>
  <Popper>
    text123213
    <template #popper> 12312342 </template>
  </Popper>
  <br />
  <Popper placement="left">
    <Button>left button</Button>
    <template #popper> 12312342 </template>
  </Popper>
  <br />
  <Popper placement="right">
    <Button>right button</Button>
    <template #popper> 12312342 </template>
  </Popper>
  <br />
  <Popper placement="bottom">
    <Button>bottom button</Button>
    <template #popper> 12312342 </template>
  </Popper>

  <Popper>
    <span>span</span>
    <template #popper> 12312342 </template>
  </Popper>
  <Popper>
    <Link><span>Link -> span</span></Link>
    <template #popper> 12312342 </template>
  </Popper>
  <Popper>
    <Button @click="tgShow"> button</Button>
    <template #popper> 12312342 </template>
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
