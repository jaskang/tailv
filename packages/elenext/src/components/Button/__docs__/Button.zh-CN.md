---
title: Button
wrapperClass: md-button
---

# Button 按钮

常用的操作按钮

## 按钮颜色 11222

使用`color`属性来定义 Button 的颜色

`color`: 'primary' | 'success' | 'info' | 'warning' | 'danger'

```vue demo
<template>
  <e-row>
    <e-col>
      <e-button>默认按钮</e-button>
      <e-button color="primary">主要按钮</e-button>
      <e-button color="success">成功按钮</e-button>
      <e-button color="info">信息按钮</e-button>
      <e-button color="warning">警告按钮</e-button>
      <e-button color="danger">危险按钮</e-button>
    </e-col>
  </e-row>
</template>
```

## 按钮类型

使用`type`属性来定义 Button 的样式

`type` : 'round' | 'circle' | 'link' | 'plain'

::: info link 类型的按钮没有颜色区分，需要此功能可使用 Link 组件
:::

```vue demo
<template>
  <e-row align="middle">
    <e-col>
      <e-button>默认按钮</e-button>
      <e-button color="primary">主要颜色</e-button>
      <e-button color="success">成功颜色</e-button>
      <e-button color="info">信息颜色</e-button>
      <e-button color="warning">警告颜色</e-button>
      <e-button color="danger">危险颜色</e-button>
    </e-col>
  </e-row>
  <e-row align="middle">
    <e-col>
      <e-button type="plain">plain 按钮</e-button>
      <e-button type="plain" color="primary">主要颜色</e-button>
      <e-button type="plain" color="success">成功颜色</e-button>
      <e-button type="plain" color="info">信息颜色</e-button>
      <e-button type="plain" color="warning">警告颜色</e-button>
      <e-button type="plain" color="danger">危险颜色</e-button>
    </e-col>
  </e-row>
  <e-row align="middle">
    <e-col>
      <e-button type="round">round 按钮</e-button>
      <e-button type="round" color="primary">主要颜色</e-button>
      <e-button type="round" color="success">成功颜色</e-button>
      <e-button type="round" color="info">信息颜色</e-button>
      <e-button type="round" color="warning">警告颜色</e-button>
      <e-button type="round" color="danger">危险颜色</e-button>
    </e-col>
  </e-row>
  <e-row align="middle">
    <e-col>
      <e-button type="circle">圆</e-button>
      <e-button type="circle" color="primary">主</e-button>
      <e-button type="circle" color="success">成</e-button>
      <e-button type="circle" color="info">信</e-button>
      <e-button type="circle" color="warning">警</e-button>
      <e-button type="circle" color="danger">危</e-button>
    </e-col>
  </e-row>
  <e-row align="middle">
    <e-col>
      <e-button type="link">链接按钮</e-button>
    </e-col>
  </e-row>
</template>
```

## 按钮尺寸

使用`zise`属性来定义 Button 的大小

`size`: 'large' | 'small'

```vue demo
<template>
  <e-row align="middle">
    <e-col>
      <e-button size="large">大型按钮</e-button>
      <e-button color="primary">默认按钮</e-button>
      <e-button color="danger" size="small">小型按钮</e-button>
    </e-col>
  </e-row>
  <e-row align="middle">
    <e-col>
      <e-button type="round" size="large">大型按钮</e-button>
      <e-button color="primary" type="round">默认按钮</e-button>
      <e-button color="danger" type="round" size="small">小型按钮</e-button>
    </e-col>
  </e-row>
  <e-row align="middle">
    <e-col>
      <e-button type="circle" size="large">P</e-button>
      <e-button color="primary" type="circle">S</e-button>
      <e-button color="danger" type="circle" size="small">D</e-button>
    </e-col>
  </e-row>
  <e-row align="middle">
    <e-col>
      <e-button type="link" size="large">大型按钮</e-button>
      <e-button color="primary" type="link">默认按钮</e-button>
      <e-button color="danger" type="link" size="small">小型按钮</e-button>
    </e-col>
  </e-row>
</template>
```

## 禁用状态

使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```vue demo
<template>
  <e-row>
    <e-col>
      <e-button disabled>默认按钮</e-button>
      <e-button disabled type="round">默认按钮</e-button>
      <e-button disabled type="plain">默认按钮</e-button>
      <e-button disabled type="circle">默</e-button>
      <e-button disabled type="link">默认按钮</e-button>
    </e-col>
  </e-row>
  <e-row>
    <e-col>
      <e-button disabled color="primary">主要按钮</e-button>
      <e-button disabled color="primary" type="round">主要按钮</e-button>
      <e-button disabled color="primary" type="plain">主要按钮</e-button>
      <e-button disabled color="primary" type="circle">主</e-button>
      <e-button disabled color="primary" type="link">主要按钮</e-button>
    </e-col>
  </e-row>
</template>
```

## 加载状态

使用`loading`属性来定义按钮是否处于加载中状态，它接受一个`Boolean`值。

```vue demo
<template>
  <e-row>
    <e-col>
      <e-button color="primary" :loading="true">加载中</e-button>
    </e-col>
  </e-row>
</template>
```

## 图标

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置 `icon` slot

```vue demo
<template>
  <e-row>
    <e-col>
      <e-button color="primary" @click="testclick">
        <template #icon><IconPlusCircle /></template>
      </e-button>
      <e-button color="primary">
        <template #icon><IconDashCircle /></template>
      </e-button>
      <e-button color="primary">
        <template #icon><IconSearch /></template>
      </e-button>
      <e-button color="primary">
        <template #icon><IconPencil /></template>
      </e-button>
      <e-button color="primary">
        <template #icon><IconSearch /></template>IconSearch
      </e-button>
      <e-button color="primary">
        <template #icon><IconUpload /></template>IconUpload
      </e-button>
    </e-col>
  </e-row>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const testclick = () => {
      alert('testclick111222')
    }
    return {
      testclick
    }
  }
})
</script>
```

## 按钮组

使用`ButtonGroup`组件来嵌套你的按钮

```vue demo
<template>
  <e-button-group>
    <e-button color="primary">
      <template #icon><IconChevronLeft /></template>上一页
    </e-button>
    <e-button color="primary"> 下一页 <IconChevronRight /> </e-button>
  </e-button-group>
  <e-button-group>
    <e-button color="primary">
      <template #icon><IconPlus /></template>
    </e-button>
    <e-button color="primary">
      <template #icon><IconPencil /></template>
    </e-button>
    <e-button color="primary">
      <template #icon><IconTrash /></template>
    </e-button>
    <e-button color="primary">
      <template #icon><IconDash /></template>
    </e-button>
  </e-button-group>
</template>
```

## Button Props

| 参数        | 说明           | 类型                                                             | 默认值 |
| ----------- | -------------- | ---------------------------------------------------------------- | ------ |
| color       | 类型           | 'primary' / 'success' / 'warning' / 'danger' / 'info' / 'string' | -      |
| size        | 尺寸           | 'large' / 'small'                                                | -      |
| type        | 类型           | 'round' / 'circle' / 'link' / 'plain'                            | -      |
| loading     | 是否加载中状态 | boolean                                                          | false  |
| disabled    | 是否禁用状态   | boolean                                                          | false  |
| native-type | 原生 type 属性 | 'button' / 'submit' / 'reset'                                    | button |
