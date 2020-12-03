## Nav 布局容器

用于菜单的容器组件，方便快速搭建页面的基本结构：

### 常见页面布局

```vue demo
<template>
  <el-row :gutter="[40, 0]">
    <el-col flex="250px">
      <el-nav>
        <el-nav-item><i class="el-icon-location" />导航一</el-nav-item>
        <el-nav>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <el-nav-item-group title="分组一">
            <el-nav-item>导航三</el-nav-item>
            <el-nav-item>导航三</el-nav-item>
          </el-nav-item-group>
          <el-nav-item-group title="分组二">
            <el-nav-item>导航三</el-nav-item>
            <el-nav>
              <template #title>
                <span>导航二</span>
              </template>
              <el-nav-item><i class="el-icon-document" />导航三</el-nav-item>
              <el-nav-item><i class="el-icon-document" />导航三</el-nav-item>
              <el-nav-item><i class="el-icon-document" />导航三</el-nav-item>
            </el-nav>
          </el-nav-item-group>
        </el-nav>
        <el-nav-item><i class="el-icon-document" />导航三</el-nav-item>
        <el-nav-item><i class="el-icon-setting" />导航四</el-nav-item>
      </el-nav>
    </el-col>
    <el-col flex="250px">
      <el-nav background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-nav-item><i class="el-icon-location" />导航一</el-nav-item>
        <el-nav-item><i class="el-icon-menu" />导航二</el-nav-item>
        <el-nav-item><i class="el-icon-document" />导航三</el-nav-item>
        <el-nav-item><i class="el-icon-setting" />导航四</el-nav-item>
      </el-nav>
    </el-col>
  </el-row>
</template>
<style scoped></style>
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
