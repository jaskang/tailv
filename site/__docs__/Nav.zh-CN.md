## Nav 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

### 常见页面布局

```vue
<template>
  <el-tile>
    <el-tile>
      <el-nav>
        <el-nav-item>123</el-nav-item>
        <el-nav-item>123</el-nav-item>
        <el-nav-item>123</el-nav-item>
        <el-nav-item>123</el-nav-item>
      </el-nav>
    </el-tile>
    <el-tile :span="2"></el-tile>
    <el-tile>
      <el-nav>
        <el-nav-item>123</el-nav-item>
        <el-nav-item>123</el-nav-item>
        <el-nav-item>123</el-nav-item>
        <el-nav-item>123</el-nav-item>
      </el-nav>
    </el-tile>
  </el-tile>
</template>
<style scoped>
.el-nav {
  border: 1px solid #ebebeb;
}
</style>
```

### Container Attributes

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                                 |
| --------- | ---------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Aside Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### Footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |
