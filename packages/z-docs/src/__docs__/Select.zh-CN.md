---
title: Select
wrapperClass: md-select
---

# Select

## 基础用法

```vue demo
<template>
  <e-select
    :options="[
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' }
    ]"
  ></e-select>
</template>
```

## 多选选择框

设置属性 `multiple` 使 `Select` 组件支持多选

```vue demo
<template>
  <e-select
    multiple
    :options="[
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' }
    ]"
  ></e-select>
</template>
```
