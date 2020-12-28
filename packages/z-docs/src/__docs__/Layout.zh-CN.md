---
title: e-layout
wrapperClass: md-layout
---

## e-layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`e-layout`：外层容器。当子元素中包含 `e-aside` 时，全部子元素会水平左右排列，否则会垂直上下排列。

`e-header`：顶栏容器。

`e-aside`：侧边栏容器。

`e-main`：主要区域容器。

`e-footer`：底栏容器。

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`e-layout` 的子元素只能是后四者，后四者的父元素也只能是 `e-layout`。

### 常见页面布局

```vue demo
<template>
  <e-layout>
    <e-header>e-header</e-header>
    <e-main>e-main</e-main>
    <e-footer>e-footer</e-footer>
  </e-layout>
</template>
```

```vue demo
<template>
  <e-layout>
    <e-header>e-header</e-header>
    <e-layout>
      <e-aside width="200px">e-aside</e-aside>
      <e-main>e-main</e-main>
    </e-layout>
  </e-layout>
</template>
```

```vue demo
<template>
  <e-layout>
    <e-aside width="200px">e-aside</e-aside>
    <e-layout>
      <e-header>e-header</e-header>
      <e-main>e-main</e-main>
      <e-footer>e-footer</e-footer>
    </e-layout>
  </e-layout>
</template>
```

### 实例

```vue demo
<template>
  <e-layout style="height: 500px; border: 1px solid #eee">
    <e-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <e-menu unique-opened mode="vertical">
        <e-menu-item><i class="el-icon-location" />导航一</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三导航三导航三导航三导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
        <e-sub-menu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <e-menu-item-group title="分组一">
            <e-menu-item>导航三</e-menu-item>
            <e-menu-item>导航三</e-menu-item>
          </e-menu-item-group>
          <e-menu-item-group title="分组二">
            <e-menu-item>导航三</e-menu-item>
            <e-sub-menu>
              <template #title>
                <span>导航二</span>
              </template>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
              <e-menu-item><i class="el-icon-document" />导航三</e-menu-item>
            </e-sub-menu>
          </e-menu-item-group>
        </e-sub-menu>
        <e-menu-item><i class="el-icon-setting" />导航四</e-menu-item>
      </e-menu>
    </e-aside>

    <e-layout>
      <e-header style="text-align: right; font-size: 12px">
        <Dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <Dropdowne-menu #dropdown>
            <Dropdown-item>查看</Dropdown-item>
            <Dropdown-item>新增</Dropdown-item>
            <Dropdown-item>删除</Dropdown-item>
          </Dropdowne-menu>
        </Dropdown>
        <span>王小虎</span>
      </e-header>

      <e-main>
        <Table :data="tableData">
          <TableColumn prop="date" label="日期" width="140"> </TableColumn>
          <TableColumn prop="name" label="姓名" width="120"> </TableColumn>
          <TableColumn prop="address" label="地址"> </TableColumn>
        </Table>
      </e-main>
    </e-layout>
  </e-layout>
</template>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
```

### e-layout

| 参数      | 说明             | 类型                  | 默认值                                               |
| --------- | ---------------- | --------------------- | ---------------------------------------------------- |
| direction | 子元素的排列方向 | horizontal / vertical | 子元素中有 `e-aside` 时为 horizontal 否则为 vertical |

### e-header

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| height | 顶栏高度 | string | 60px   |

### e-aside

| 参数  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| width | 侧边栏宽度 | string | 250px  |

### e-footer

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| height | 底栏高度 | string | 60px   |

### e-main

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | -    | -    | -      |
