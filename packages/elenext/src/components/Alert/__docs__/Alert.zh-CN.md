---
title: Alert
wrapperClass: md-alert
---

# Alert 警告

用于页面中展示重要的提示信息。

## 基本用法

页面中的非浮层元素，不会自动消失。

Alert 组件提供四种类型，'success' | 'warning' | 'info' | 'error'，默认值为`info`。

通过设置`type`属性来改变类型，默认为`info`。

```vue demo
<template>
  <e-row :gutter="[10, 10]">
    <e-col :span="24">
      <e-alert title="成功提示的文案" />
    </e-col>
    <e-col :span="24">
      <e-alert title="成功提示的文案" type="success" />
    </e-col>
    <e-col :span="24">
      <e-alert title="消息提示的文案" type="info" />
    </e-col>
    <e-col :span="24">
      <e-alert title="警告提示的文案" type="warning" />
    </e-col>
    <e-col :span="24">
      <e-alert title="错误提示的文案" type="error" />
    </e-col>
  </e-row>
</template>
```

## 主题

Alert 组件提供了两个不同的主题：`light`和`dark`。

通过设置`effect`属性来改变主题，默认为`light`。

```vue demo
<template>
  <e-row :gutter="[10, 10]">
    <e-col :span="24">
      <e-alert title="成功提示的文案" type="success" effect="dark" />
    </e-col>
    <e-col :span="24">
      <e-alert title="消息提示的文案" type="info" effect="dark" />
    </e-col>
    <e-col :span="24">
      <e-alert title="警告提示的文案" type="warning" effect="dark" />
    </e-col>
    <e-col :span="24">
      <e-alert title="错误提示的文案" type="error" effect="dark" />
    </e-col>
    <e-col :span="24"> </e-col>
  </e-row>
</template>
```

## 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

在 e-alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。`closable`属性决定是否可关闭，接受`boolean`，默认为`true`。你可以设置`close-text`属性来代替右侧的关闭图标，注意：`close-text`必须为文本。设置`close`事件来设置关闭时的回调。

```vue demo
<template>
  <e-row :gutter="[10, 10]">
    <e-col :span="24">
      <e-alert title="不可关闭的 alert" type="success" :closable="false" />
    </e-col>
    <e-col :span="24">
      <e-alert title="自定义 close-text" type="info" close-text="知道了" />
    </e-col>
    <e-col :span="24">
      <e-alert title="设置了回调的 alert" type="warning" @close="hello" />
    </e-col>
  </e-row>
</template>
<script>
export default {
  methods: {
    hello() {
      alert('Hello World!')
    },
  },
}
</script>
```

## 带有 icon

表示某种状态时提升可读性。

通过设置 具名 slot `name` 显示自定义 Alert 的 icon，这能更有效地向用户展示你的显示意图。

```vue demo
<template>
  <e-row :gutter="[10, 10]">
    <e-col :span="24">
      <e-alert title="添加成功" type="success">
        <template #icon><IconPlus /></template>
      </e-alert>
    </e-col>
    <e-col :span="24">
      <e-alert title="删除了" type="error">
        <template #icon><IconTrash /></template>
      </e-alert>
    </e-col>
  </e-row>
</template>
```

## 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。

同样也可以使用默认 slot 来代替 description 属性

```vue demo
<template>
  <e-row :gutter="[10, 10]">
    <e-col :span="24">
      <e-alert
        title="带辅助性文字介绍"
        type="success"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      >
      </e-alert>
    </e-col>
    <e-col :span="24">
      <e-alert title="带辅助性文字介绍" type="warning">
        这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。
        黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰
      </e-alert>
    </e-col>
  </e-row>
</template>
```

## Alert Attributes

| 参数        | 说明                               | 类型    | 可选值                     | 默认值 |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| title       | 标题                               | string  | —                          | —      |
| type        | 主题                               | string  | success/warning/info/error | info   |
| description | 辅助性文字。也可通过默认 slot 传入 | string  | —                          | —      |
| closable    | 是否可关闭                         | boolean | —                          | true   |
| effect      | 选择提供的主题                     | string  | light/dark                 | light  |

## Alert Slot

| Name    | Description         |
| ------- | ------------------- |
| defalut | 同 description 属性 |
| title   | 标题的内容          |

## Alert Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭 alert 时触发的事件 | —        |
