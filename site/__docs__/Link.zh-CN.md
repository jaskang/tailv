---
title: Link
wrapperClass: md-link
---

# Link 文字链接

文字超链接

## 基础用法

基础的文字链接用法。

```vue demo
<template>
  <Row>
    <Link>默认链接</Link>
    <Link color="primary">主要链接</Link>
    <Link color="success">成功链接</Link>
    <Link color="warning">警告链接</Link>
    <Link color="danger">危险链接</Link>
    <Link color="info">信息链接</Link>
  </Row>
</template>
```

## 禁用状态

文字链接不可用状态。

```vue demo
<template>
  <Row>
    <Link disabled>默认链接</Link>
    <Link color="primary" disabled>主要链接</Link>
    <Link color="success" disabled>成功链接</Link>
    <Link color="warning" disabled>警告链接</Link>
    <Link color="danger" disabled>危险链接</Link>
    <Link color="info" disabled>信息链接</Link>
  </Row>
</template>
```

## 下划线

文字链接下划线。

```vue demo
<template>
  <Row>
    <Link :underline="false">无下划线</Link>
    <Link>有下划线</Link>
  </Row>
</template>
```

## 图标

带图标的文字链接可增强辨识度。

```vue demo
<template>
  <Row>
    <Link icon="el-icon-edit">编辑</Link>
    <Link>查看<i class="el-icon-view el-icon--right"></i> </Link>
  </Row>
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
