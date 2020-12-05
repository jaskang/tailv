---
title: Grid
wrapperClass: md-icon
---

## Icon 图标

@elenext/icons 提供了一套 1k+ 的图标集合, 图标 svg 源文件源于 [bootstrap-icons](https://github.com/twbs/icons)

### 使用方法

`spin` 属性能够使图标旋转

```vue demo
<template>
  <Row>
    <Col>
      <Button color="primary"><IconChevronDown /></Button>
      <Button color="primary"><IconArrowClockwise spin /></Button>
    </Col>
  </Row>
</template>
<script>
import { IconChevronDown, IconArrowClockwise } from '@elenext/icons'
export default {
  components: { IconChevronDown, IconArrowClockwise }
}
</script>
```

### 图标集合
