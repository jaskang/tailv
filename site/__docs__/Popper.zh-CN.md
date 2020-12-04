## Popper

### 基础用法

```vue demo
<template>
  <Popper>
    <Button>top button</Button>
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
</template>
```
