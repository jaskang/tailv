# e-breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

适用广泛的基础用法。

在 e-breadcrumb 中使用 e-breadcrumb-item 标签表示从首页开始的每一级。Elenext 提供了一个 separator 属性，在 e-breadcrumb 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/。

```vue demo
<template>
  <e-breadcrumb separator="/">
    <e-breadcrumb-item path="/">首页</e-breadcrumb-item>
    <e-breadcrumb-item><a href="/">活动管理</a></e-breadcrumb-item>
    <e-breadcrumb-item>活动列表</e-breadcrumb-item>
    <e-breadcrumb-item>活动详情</e-breadcrumb-item>
  </e-breadcrumb>
</template>
```

## 图标分隔符

通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效。

```vue demo
<template>
  <e-breadcrumb separator-class="el-icon-arrow-right">
    <e-breadcrumb-item path="/">首页</e-breadcrumb-item>
    <e-breadcrumb-item path="/layout">layout</e-breadcrumb-item>
    <e-breadcrumb-item path="/button">button</e-breadcrumb-item>
    <e-breadcrumb-item>活动详情</e-breadcrumb-item>
  </e-breadcrumb>
</template>
```
