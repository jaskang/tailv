# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

适用广泛的基础用法。

在 Breadcrumb 中使用 BreadcrumbItem 标签表示从首页开始的每一级。Elenext 提供了一个 separator 属性，在 Breadcrumb 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/。

```vue demo
<template>
  <Breadcrumb separator="/">
    <BreadcrumbItem path="/">首页</BreadcrumbItem>
    <BreadcrumbItem><a href="/">活动管理</a></BreadcrumbItem>
    <BreadcrumbItem>活动列表</BreadcrumbItem>
    <BreadcrumbItem>活动详情</BreadcrumbItem>
  </Breadcrumb>
</template>
```

## 图标分隔符

通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效。

```vue demo
<template>
  <Breadcrumb separator-class="el-icon-arrow-right">
    <BreadcrumbItem path="/">首页</BreadcrumbItem>
    <BreadcrumbItem path="/layout">layout</BreadcrumbItem>
    <BreadcrumbItem path="/button">button</BreadcrumbItem>
    <BreadcrumbItem>活动详情</BreadcrumbItem>
  </Breadcrumb>
</template>
```
