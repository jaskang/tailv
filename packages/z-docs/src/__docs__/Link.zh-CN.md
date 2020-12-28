---
title: e-link
wrapperClass: md-link
---

# e-link 文字链接

文字超链接

## 基础用法

基础的文字链接用法。

```vue demo
<template>
  <e-row>
    <e-link>默认链接</e-link>
    <e-link color="primary">主要链接</e-link>
    <e-link color="success">成功链接</e-link>
    <e-link color="warning">警告链接</e-link>
    <e-link color="danger">危险链接</e-link>
    <e-link color="info">信息链接</e-link>
  </e-row>
</template>
```

## 禁用状态

文字链接不可用状态。

```vue demo
<template>
  <e-row>
    <e-link disabled>默认链接</e-link>
    <e-link color="primary" disabled>主要链接</e-link>
    <e-link color="success" disabled>成功链接</e-link>
    <e-link color="warning" disabled>警告链接</e-link>
    <e-link color="danger" disabled>危险链接</e-link>
    <e-link color="info" disabled>信息链接</e-link>
  </e-row>
</template>
```

## 下划线

文字链接下划线。

```vue demo
<template>
  <e-row>
    <e-link :underline="false">无下划线</e-link>
    <e-link>有下划线</e-link>
  </e-row>
</template>
```

## 图标

带图标的文字链接可增强辨识度。

```vue demo
<template>
  <e-row>
    <e-link icon="el-icon-edit">编辑</e-link>
    <e-link>查看<i class="el-icon-view el-icon--right"></i> </e-link>
  </e-row>
</template>
```

## Attributes

| 参数      | 说明           | 类型                                                              | 默认值  |
| --------- | -------------- | ----------------------------------------------------------------- | ------- |
| color     | 类型           | 'default' / 'primary' / 'success' / 'warning' / 'danger' / 'info' | default |
| underline | 是否下划线     | boolean                                                           | true    |
| disabled  | 是否禁用状态   | boolean                                                           | false   |
| href      | 原生 href 属性 | string                                                            | -       |
| icon      | 图标类名       | string                                                            | -       |
