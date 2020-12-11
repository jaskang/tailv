---
title: Layout
wrapperClass: md-layout
---

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
  <Layout>
    <Header>Header</Header>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Layout>
</template>
```

```vue demo
<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Aside width="200px">Aside</Aside>
      <Main>Main</Main>
    </Layout>
  </Layout>
</template>
```

```vue demo
<template>
  <Layout>
    <Aside width="200px">Aside</Aside>
    <Layout>
      <Header>Header</Header>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</template>
```

### 实例

```vue demo
<template>
  <Layout style="height: 500px; border: 1px solid #eee">
    <Aside width="200px" style="background-color: rgb(238, 241, 246)">
      <Menu width="200px" :default-openeds="['1', '3']">
        <Menu index="1">
          <template #title> <i class="el-icon-message"></i>导航一 </template>
          <MenuItemGroup>
            <template #title>分组一</template>
            <MenuItem index="1-1">选项1</MenuItem>
            <MenuItem index="1-2">选项2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <MenuItem index="1-3">选项3</MenuItem>
          </MenuItemGroup>
          <Menu index="1-4">
            <template #title>选项4</template>
            <MenuItem index="1-4-1">选项4-1</MenuItem>
          </Menu>
        </Menu>
        <Menu index="2">
          <template #title><i class="el-icon-menu"></i>导航二</template>
          <MenuItemGroup>
            <template #title>分组一</template>
            <MenuItem index="2-1">选项1</MenuItem>
            <MenuItem index="2-2">选项2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <MenuItem index="2-3">选项3</MenuItem>
          </MenuItemGroup>
          <Menu index="2-4">
            <template #title>选项4</template>
            <MenuItem index="2-4-1">选项4-1</MenuItem>
          </Menu>
        </Menu>
        <Menu index="3">
          <template #title> <i class="el-icon-setting"></i>导航三 </template>
          <MenuItemGroup>
            <template #title>分组一</template>
            <MenuItem index="3-1">选项1</MenuItem>
            <MenuItem index="3-2">选项2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <MenuItem index="3-3">选项3</MenuItem>
          </MenuItemGroup>
          <Menu index="3-4">
            <template #title>选项4</template>
            <MenuItem index="3-4-1">选项4-1</MenuItem>
          </Menu>
        </Menu>
      </Menu>
    </Aside>

    <Layout>
      <Header style="text-align: right; font-size: 12px">
        <Dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <DropdownMenu #dropdown>
            <Dropdown-item>查看</Dropdown-item>
            <Dropdown-item>新增</Dropdown-item>
            <Dropdown-item>删除</Dropdown-item>
          </DropdownMenu>
        </Dropdown>
        <span>王小虎</span>
      </Header>

      <Main>
        <Table :data="tableData">
          <TableColumn prop="date" label="日期" width="140"> </TableColumn>
          <TableColumn prop="name" label="姓名" width="120"> </TableColumn>
          <TableColumn prop="address" label="地址"> </TableColumn>
        </Table>
      </Main>
    </Layout>
  </Layout>
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

### Layout

| 参数      | 说明             | 类型                  | 默认值                                             |
| --------- | ---------------- | --------------------- | -------------------------------------------------- |
| direction | 子元素的排列方向 | horizontal / vertical | 子元素中有 `Aside` 时为 horizontal 否则为 vertical |

### Header

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| height | 顶栏高度 | string | 60px   |

### Aside

| 参数  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| width | 侧边栏宽度 | string | 250px  |

### Footer

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| height | 底栏高度 | string | 60px   |

### Main

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | -    | -    | -      |
