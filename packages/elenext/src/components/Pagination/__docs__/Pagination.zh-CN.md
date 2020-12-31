---
title: Pagination
wrapperClass: md-pagination
---

# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。

```vue demo
<template>
  <e-row :gutter="[10, 10]">
    <e-col :span="24">
      <span class="demonstration">页数较少时的效果</span>
    </e-col>
    <e-col :span="24">
      <e-pagination :total="50"> </e-pagination>
    </e-col>
    <e-col :span="24">
      <span class="demonstration">大于 7 页时的效果</span>
    </e-col>
    <e-col :span="24">
      <e-pagination :total="1000"> </e-pagination>
    </e-col>
  </e-row>
</template>
```

:::

## 设置每页条数

通过`page-size`属性可以设置每页条数

```vue demo
<template>
  <e-pagination :page-size="20" :total="1000"> </e-pagination>
</template>
```

## 附加功能

根据场景需要，可以添加其他功能模块。

`page-sizes`接受一个整型数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]`表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。

```vue demo
<template>
  <div class="block">
    <span class="demonstration">显示总数</span>
    <e-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    >
    </e-pagination>
  </div>
  <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <e-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000"
    >
    </e-pagination>
  </div>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <e-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </e-pagination>
  </div>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <e-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </e-pagination>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  }
}
</script>
```

### 当只有一页时隐藏分页

当只有一页时，通过设置 `hide-on-single-page` 属性来隐藏分页。

```vue demo
<template>
  <div>
    <el-switch v-model="value"> </el-switch>
    <e-pagination :hide-on-single-page="value" :total="5"> </e-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>
```

## Pagination Props

| 参数              | 说明                         | 类型     | 默认值            |
| ----------------- | ---------------------------- | -------- | ----------------- |
| current           | 当前页数                     | number   | 1                 |
| total             | 总条页数                     | number   | -                 |
| page-size         | 每页显示条数                 | number   | 10                |
| page-size-options | 每页显示条数选择器的选项设置 | number[] | [10, 20, 50, 100] |
| disabled          | 是否禁用                     | boolean  | false             |

### Events

| 事件名称 | 说明                             | 回调参数           |
| -------- | -------------------------------- | ------------------ |
| change   | current 和 pageSize 改变时会触发 | {current,pageSize} |
