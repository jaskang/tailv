## Pagination 分页

当数据量过多时，使用分页分解数据。

### 基础用法

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。

```vue demo
<template>
  <Row :gutter="[10, 10]">
    <Col :span="24">
      <span class="demonstration">页数较少时的效果</span>
    </Col>
    <Col :span="24">
      <Pagination :total="50"> </Pagination>
    </Col>
    <Col :span="24">
      <span class="demonstration">大于 7 页时的效果</span>
    </Col>
    <Col :span="24">
      <Pagination :total="1000"> </Pagination>
    </Col>
  </Row>
</template>
```

:::

### 设置每页条数

通过`page-size`属性可以设置每页条数

```vue demo
<template>
  <Pagination :page-size="20" :total="1000"> </Pagination>
</template>
```

### 附加功能

根据场景需要，可以添加其他功能模块。

此例是一个完整的用例，使用了`size-change`和`current-change`事件来处理页码大小和当前页变动时候触发的事件。`page-sizes`接受一个整型数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]`表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。

```vue demo
<template>
  <div class="block">
    <span class="demonstration">显示总数</span>
    <Pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    >
    </Pagination>
  </div>
  <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <Pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000"
    >
    </Pagination>
  </div>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <Pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </Pagination>
  </div>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <Pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </Pagination>
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
    <Pagination :hide-on-single-page="value" :total="5"> </Pagination>
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

### Attributes

| 参数                | 说明                                                                                                                  | 类型     | 可选值                                                            | 默认值                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- | -------------------------------------- |
| small               | 是否使用小型分页样式                                                                                                  | boolean  | —                                                                 | false                                  |
| background          | 是否为分页按钮添加背景色                                                                                              | boolean  | —                                                                 | false                                  |
| page-size           | 每页显示条目个数，支持 .sync 修饰符                                                                                   | number   | —                                                                 | 10                                     |
| total               | 总条目数                                                                                                              | number   | —                                                                 | —                                      |
| page-count          | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number   | —                                                                 | —                                      |
| pager-count         | 页码按钮的数量，当总页数超过该值时会折叠                                                                              | number   | 大于等于 5 且小于等于 21 的奇数                                   | 7                                      |
| current-page        | 当前页数，支持 .sync 修饰符                                                                                           | number   | —                                                                 | 1                                      |
| layout              | 组件布局，子组件名用逗号分隔                                                                                          | String   | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total' |
| page-sizes          | 每页显示个数选择器的选项设置                                                                                          | number[] | —                                                                 | [10, 20, 30, 40, 50, 100]              |
| popper-class        | 每页显示个数选择器的下拉框类名                                                                                        | string   | —                                                                 | —                                      |
| prev-text           | 替代图标显示的上一页文字                                                                                              | string   | —                                                                 | —                                      |
| next-text           | 替代图标显示的下一页文字                                                                                              | string   | —                                                                 | —                                      |
| disabled            | 是否禁用                                                                                                              | boolean  | —                                                                 | false                                  |
| hide-on-single-page | 只有一页时是否隐藏                                                                                                    | boolean  | —                                                                 | -                                      |

### Events

| 事件名称       | 说明                               | 回调参数 |
| -------------- | ---------------------------------- | -------- |
| size-change    | pageSize 改变时会触发              | 每页条数 |
| current-change | currentPage 改变时会触发           | 当前页   |
| prev-click     | 用户点击上一页按钮改变当前页后触发 | 当前页   |
| next-click     | 用户点击下一页按钮改变当前页后触发 | 当前页   |

### Slot

| name | 说明                                      |
| ---- | ----------------------------------------- |
| —    | 自定义内容，需要在 `layout` 中列出 `slot` |
