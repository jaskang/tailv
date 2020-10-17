# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

适用广泛的基础用法。

在 el-breadcrumb 中使用 el-breadcrumb-item 标签表示从首页开始的每一级。Element 提供了一个 separator 属性，在 el-breadcrumb 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/。

```vue
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>
```

## 图标分隔符

通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效。

```vue
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>
```
