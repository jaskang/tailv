## Layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`Layout`：外层容器。当子元素中包含 `Aside` 时，全部子元素会水平左右排列，否则会垂直上下排列。

`Header`：顶栏容器。

`Aside`：侧边栏容器。

`Main`：主要区域容器。

`Footer`：底栏容器。

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`Layout` 的子元素只能是后四者，后四者的父元素也只能是 `Layout`。

### 常见页面布局

```vue demo
<template>
  <el-layout>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-layout>
</template>
```

```vue demo
<template>
  <el-layout>
    <el-header>Header</el-header>
    <el-layout>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-layout>
  </el-layout>
</template>
```

```vue demo
<template>
  <el-layout>
    <el-aside width="200px">Aside</el-aside>
    <el-layout>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-layout>
  </el-layout>
</template>
```

### 实例

```vue demo
<template>
  <el-layout style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-nav width="200px" :default-openeds="['1', '3']">
        <el-nav index="1">
          <template #title> <i class="el-icon-message"></i>导航一 </template>
          <el-nav-item-group>
            <template #title>分组一</template>
            <el-nav-item index="1-1">选项1</el-nav-item>
            <el-nav-item index="1-2">选项2</el-nav-item>
          </el-nav-item-group>
          <el-nav-item-group title="分组2">
            <el-nav-item index="1-3">选项3</el-nav-item>
          </el-nav-item-group>
          <el-nav index="1-4">
            <template #title>选项4</template>
            <el-nav-item index="1-4-1">选项4-1</el-nav-item>
          </el-nav>
        </el-nav>
        <el-nav index="2">
          <template #title><i class="el-icon-menu"></i>导航二</template>
          <el-nav-item-group>
            <template #title>分组一</template>
            <el-nav-item index="2-1">选项1</el-nav-item>
            <el-nav-item index="2-2">选项2</el-nav-item>
          </el-nav-item-group>
          <el-nav-item-group title="分组2">
            <el-nav-item index="2-3">选项3</el-nav-item>
          </el-nav-item-group>
          <el-nav index="2-4">
            <template #title>选项4</template>
            <el-nav-item index="2-4-1">选项4-1</el-nav-item>
          </el-nav>
        </el-nav>
        <el-nav index="3">
          <template #title> <i class="el-icon-setting"></i>导航三 </template>
          <el-nav-item-group>
            <template #title>分组一</template>
            <el-nav-item index="3-1">选项1</el-nav-item>
            <el-nav-item index="3-2">选项2</el-nav-item>
          </el-nav-item-group>
          <el-nav-item-group title="分组2">
            <el-nav-item index="3-3">选项3</el-nav-item>
          </el-nav-item-group>
          <el-nav index="3-4">
            <template #title>选项4</template>
            <el-nav-item index="3-4-1">选项4-1</el-nav-item>
          </el-nav>
        </el-nav>
      </el-nav>
    </el-aside>

    <el-layout>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu #dropdown>
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-layout>
  </el-layout>
</template>
<style lang="less">
.vuedoc-demo {
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    /* text-align: center; */
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>

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

### Layout

| 参数      | 说明             | 类型   | 可选值                | 默认值                                             |
| --------- | ---------------- | ------ | --------------------- | -------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `Aside` 时为 horizontal 否则为 vertical |

### Header

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Aside

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 250px  |

### Footer

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |

### Main

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| -    | -    | -    | —      | -      |
