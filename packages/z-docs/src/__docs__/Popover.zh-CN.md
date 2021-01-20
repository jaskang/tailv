---
title: Popover
wrapperClass: md-popover
---

# Popover 弹出框

## 基础用法

`trigger`属性用于设置何时触发 Popover，支持四种触发方式：`hover`，`click`，`focus` 和 `manual`。对于触发 Popover 的元素，有两种写法：使用 `slot="reference"` 的具名插槽，或使用自定义指令`v-popover`指向 Popover 的索引`ref`。

```vue demo
<template>
  <e-popover
    placement="top-start"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <e-button>hover 激活</e-button>
  </e-popover>

  <e-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <e-button>click 激活</e-button>
  </e-popover>

  <e-popover
    ref="popover"
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <input value="focus 激活" />
  </e-popover>
  <e-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible"
  >
    <e-button @click="click">手动激活</e-button>
  </e-popover>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    click() {
      this.visible = !this.visible
      console.log(this.visible)
    },
  },
}
</script>
```

## 嵌套信息

可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。

利用分发取代`content`属性

```vue demo
<template>
  <e-popover placement="right" width="400" trigger="click">
    <template #content>
      <e-table :data="gridData">
        <e-table-column width="150" property="date" label="日期"></e-table-column>
        <e-table-column width="100" property="name" label="姓名"></e-table-column>
        <e-table-column width="300" property="address" label="地址"></e-table-column>
      </e-table>
    </template>
    <e-button>click 激活</e-button>
  </e-popover>
</template>
<script>
export default {
  data() {
    return {
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
    }
  },
}
</script>
```

## 嵌套操作

当然，你还可以嵌套操作，这相比 Dialog 更为轻量：

```vue demo
<template>
  <e-popover placement="top" width="160" v-model="visible">
    <template #content>
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <e-row justify="end" style="margin-top: 10px;">
        <e-col>
          <e-button type="link" size="small" @click="visible = false">取消</e-button>
          <e-button color="primary" size="small" @click="visible = false">确定</e-button>
        </e-col>
      </e-row>
    </template>
    <e-button>删除</e-button>
  </e-popover>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
}
</script>
```

## Popover Props

| 参数        | 说明                                  | 类型                             | 默认值           |
| ----------- | ------------------------------------- | -------------------------------- | ---------------- |
| modelValue  | 状态是否可见                          | Boolean                          | false            |
| title       | 显示的标题                            | String                           | —                |
| content     | 显示的内容，也可以通过 `slot#content` | String                           | —                |
| popperClass | 为 Tooltip 的 popper 添加类名         | String                           | —                |
| placement   | Tooltip 的出现位置                    | PlacementType                    | 0                |
| trigger     | 触发方式                              | "click"/"hover"/"focus"/"manual" | 'click'          |
| transition  | 定义渐变动画                          | String                           | 'el-popper-fade' |
| width       | Popover 的宽度                        | String                           | -                |
