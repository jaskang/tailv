---
title: Button
wrapperClass: md-button
---

# Button 按钮

常用的操作按钮

## 按钮颜色

使用`color`属性来定义 Button 的颜色

`color`: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

```vue demo
<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button color="primary">主要按钮</el-button>
    <el-button color="success">成功按钮</el-button>
    <el-button color="info">信息按钮</el-button>
    <el-button color="warning">警告按钮</el-button>
    <el-button color="danger">危险按钮</el-button>
  </el-row>
</template>
```

## 按钮类型

使用`type`属性来定义 Button 的样式

`type` : 'round' | 'circle' | 'link'

::: tips link 类型的按钮没有颜色区分，需要此功能可使用 Link 组件

```vue demo
<template>
  <el-row align="middle">
    <el-button>默认按钮</el-button>
    <el-button color="primary">主要按钮</el-button>
    <el-button color="success">成功按钮</el-button>
    <el-button color="info">信息按钮</el-button>
    <el-button color="warning">警告按钮</el-button>
    <el-button color="danger">危险按钮</el-button>
  </el-row>
  <el-row align="middle">
    <el-button type="round">默认按钮</el-button>
    <el-button type="round" color="primary">主要按钮</el-button>
    <el-button type="round" color="success">成功按钮</el-button>
    <el-button type="round" color="info">信息按钮</el-button>
    <el-button type="round" color="warning">警告按钮</el-button>
    <el-button type="round" color="danger">危险按钮</el-button>
  </el-row>
  <el-row align="middle">
    <el-button type="circle">默</el-button>
    <el-button type="circle" color="primary">主</el-button>
    <el-button type="circle" color="success">成</el-button>
    <el-button type="circle" color="info">信</el-button>
    <el-button type="circle" color="warning">警</el-button>
    <el-button type="circle" color="danger">危</el-button>
  </el-row>
  <el-row align="middle">
    <el-button type="link">链接按钮</el-button>
  </el-row>
</template>
```

## 按钮尺寸

使用`zise`属性来定义 Button 的大小

`size`: 'large' | 'small'

```vue demo
<template>
  <el-row align="middle">
    <el-button color="primary" size="large">大型按钮</el-button>
    <el-button color="primary">默认按钮</el-button>
    <el-button color="primary" size="small">小型按钮</el-button>
  </el-row>
  <el-row align="middle">
    <el-button color="primary" type="round" size="large">大型按钮</el-button>
    <el-button color="primary" type="round">默认按钮</el-button>
    <el-button color="primary" type="round" size="small">小型按钮</el-button>
  </el-row>
</template>
```

## 禁用状态

使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```vue demo
<template>
  <el-row>
    <el-button disabled color="primary">主要按钮</el-button>
    <el-button disabled color="primary" type="round">主要按钮</el-button>
    <el-button disabled color="primary" type="circle">主</el-button>
    <el-button disabled color="primary" type="link">主要按钮</el-button>
  </el-row>
</template>
```

## 加载状态

使用`loading`属性来定义按钮是否处于加载中状态，它接受一个`Boolean`值。

```vue demo
<template>
  <el-button color="primary" :loading="true">加载中</el-button>
</template>
```

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置`icon`属性即可，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```vue demo
<template>
  <el-row>
    <el-button color="primary" icon="el-icon-edit" @click="testclick"></el-button>
    <el-button color="primary" icon="el-icon-share"></el-button>
    <el-button color="primary" icon="el-icon-delete"></el-button>
    <el-button color="primary" icon="el-icon-search">搜索</el-button>
    <el-button color="primary"> 上传<i class="el-icon-upload el-icon--right"></i> </el-button>
  </el-row>
</template>
<script>
export default {
  methods: {
    testclick() {
      alert('testclick111222')
    }
  }
}
</script>
```

## 按钮组

使用`button-group`组件来嵌套你的按钮

```vue demo
<template>
  <el-button-group>
    <el-button color="primary" icon="el-icon-arrow-left">上一页</el-button>
    <el-button color="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
  <el-button-group>
    <el-button color="primary" icon="el-icon-edit"></el-button>
    <el-button color="primary" icon="el-icon-share"></el-button>
    <el-button color="primary" icon="el-icon-delete"></el-button>
  </el-button-group>
</template>
```

## Attributes

| 参数        | 说明           | 类型                                                                         | 默认值  |
| ----------- | -------------- | ---------------------------------------------------------------------------- | ------- |
| color       | 类型           | 'default' / 'primary' / 'success' / 'warning' / 'danger' / 'info' / 'string' | default |
| size        | 尺寸           | 'large' / 'small'                                                            | —       |
| type        | 类型           | 'round' / 'circle'                                                           | -       |
| loading     | 是否加载中状态 | boolean                                                                      | false   |
| disabled    | 是否禁用状态   | boolean                                                                      | false   |
| native-type | 原生 type 属性 | 'button' / 'submit' / 'reset'                                                | button  |
| icon        | 图标类名       | string                                                                       | —       |
