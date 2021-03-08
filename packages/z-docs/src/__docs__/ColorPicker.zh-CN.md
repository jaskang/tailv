---
title: ColorPicker
wrapperClass: md-colorpicker
---

# EColorPicker 颜色选择框

## 基础用法

```vue demo
<template>
  <EColorPicker v-model="color" />
  {{ color }}
</template>
<script>
export default {
  data() {
    return {
      color: '#5d0404',
    }
  },
}
</script>
```
