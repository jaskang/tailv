# Link 文字链接

文字超链接

## 基础用法

基础的文字链接用法。

```vue demo
<template>
  <div>
    <el-link>默认链接</el-link>
    <el-link color="primary">主要链接</el-link>
    <el-link color="success">成功链接</el-link>
    <el-link color="warning">警告链接</el-link>
    <el-link color="danger">危险链接</el-link>
    <el-link color="info">信息链接</el-link>
  </div>
</template>
```

## 禁用状态

文字链接不可用状态。

```vue demo
<template>
  <div>
    <el-link disabled>默认链接</el-link>
    <el-link color="primary" disabled>主要链接</el-link>
    <el-link color="success" disabled>成功链接</el-link>
    <el-link color="warning" disabled>警告链接</el-link>
    <el-link color="danger" disabled>危险链接</el-link>
    <el-link color="info" disabled>信息链接</el-link>
  </div>
</template>
```

## 下划线

文字链接下划线。

```vue demo
<template>
  <div>
    <el-link :underline="false">无下划线</el-link>
    <el-link>有下划线</el-link>
  </div>
</template>
```

## 图标

带图标的文字链接可增强辨识度。

```vue demo
<template>
  <div>
    <el-link icon="el-icon-edit">编辑</el-link>
    <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
  </div>
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
