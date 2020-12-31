## Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

### 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```vue demo
<template>
  <e-row>
    <e-col flex="100px" style="text-align:right;"></e-col>
    <e-col flex="200px" style="text-align:center;">
      <e-tooltip content="Top Left 提示文字" placement="top-start">
        <e-button>上左</e-button>
      </e-tooltip>
      <e-tooltip content="Top Center 提示文字" placement="top">
        <e-button>上边</e-button>
      </e-tooltip>
      <e-tooltip content="Top Right 提示文字" placement="top-end">
        <e-button>上右</e-button>
      </e-tooltip>
    </e-col>
    <e-col flex="100px" style="text-align:left;"></e-col>
  </e-row>
  <e-row>
    <e-col flex="100px" style="text-align:right;">
      <e-tooltip content="Left Top 提示文字" placement="left-start">
        <e-button>左上</e-button>
      </e-tooltip>
      <br />
      <e-tooltip content="Left Center 提示文字" placement="left">
        <e-button>左边</e-button>
      </e-tooltip>
      <br />
      <e-tooltip content="Left Bottom 提示文字" placement="left-end">
        <e-button>左下</e-button>
      </e-tooltip>
    </e-col>
    <e-col flex="200px" style="text-align:center;"></e-col>
    <e-col flex="100px" style="text-align:left;">
      <e-tooltip content="Right Top 提示文字" placement="right-start">
        <e-button>右上</e-button>
      </e-tooltip>
      <br />
      <e-tooltip content="Right Center 提示文字" placement="right">
        <e-button>右边</e-button>
      </e-tooltip>
      <br />
      <e-tooltip content="Right Bottom 提示文字" placement="right-end">
        <e-button>右下</e-button>
      </e-tooltip>
    </e-col>
  </e-row>
  <e-row>
    <e-col flex="100px" style="text-align:right;"></e-col>
    <e-col flex="200px" style="text-align:center;">
      <e-tooltip content="Bottom Left 提示文字" placement="bottom-start">
        <e-button>下左</e-button>
      </e-tooltip>
      <e-tooltip content="Bottom Center 提示文字" placement="bottom">
        <e-button>下边</e-button>
      </e-tooltip>
      <e-tooltip content="Bottom Right 提示文字" placement="bottom-end">
        <e-button>下右</e-button>
      </e-tooltip>
    </e-col>
    <e-col flex="100px" style="text-align:left;"></e-col>
  </e-row>
</template>
<style lang="scss" scoped></style>
```

### 颜色

通过设置`background-color`属性来改变颜色，默认为黑色。

```vue demo
<template>
  <e-tooltip content="Top center" placement="top">
    <e-button>Default</e-button>
  </e-tooltip>
  <e-tooltip background-color="#409eff" content="Bottom center" placement="top">
    <e-button>color-primary</e-button>
  </e-tooltip>
  <e-tooltip background-color="#67c23a" content="Bottom center" placement="top">
    <e-button>color-success</e-button>
  </e-tooltip>
  <e-tooltip background-color="#e6a23c" content="Bottom center" placement="top">
    <e-button>color-warning</e-button>
  </e-tooltip>
  <e-tooltip background-color="#f56c6c" content="Bottom center" placement="top">
    <e-button>color-danger</e-button>
  </e-tooltip>
  <e-tooltip background-color="#909399" content="Bottom center" placement="top">
    <e-button>color-info</e-button>
  </e-tooltip>
</template>
```

### 更多 Content

展示多行文本或者是设置文本内容的格式

用具名 slot 分发`content`，替代`Tooltip`中的`content`属性。

```vue demo
<template>
  <e-tooltip placement="top">
    <template #content>
      <div>多行信息<br />第二行信息</div>
    </template>
    <e-button>Top center</e-button>
  </e-tooltip>
</template>
```

## Tooltip Props

| 参数            | 说明                                  | 类型                             | 默认值           |
| --------------- | ------------------------------------- | -------------------------------- | ---------------- |
| modelValue      | 状态是否可见                          | Boolean                          | false            |
| content         | 显示的内容，也可以通过 `slot#content` | String                           | —                |
| popperClass     | 为 Tooltip 的 popper 添加类名         | String                           | —                |
| offset          | 出现位置的偏移量                      | Number                           | 0                |
| backgroundColor | 背景颜色                              | String                           | -                |
| placement       | Tooltip 的出现位置                    | Number                           | 0                |
| trigger         | 触发方式                              | "click"/"hover"/"focus"/"manual" | 'hover'          |
| transition      | 定义渐变动画                          | String                           | 'el-popper-fade' |
