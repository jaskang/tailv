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
  <Row>
    <Button>默认按钮</Button>
    <Button color="primary">主要按钮</Button>
    <Button color="success">成功按钮</Button>
    <Button color="info">信息按钮</Button>
    <Button color="warning">警告按钮</Button>
    <Button color="danger">危险按钮</Button>
  </Row>
</template>
```

## 按钮类型

使用`type`属性来定义 Button 的样式

`type` : 'round' | 'circle' | 'link'

::: tips link 类型的按钮没有颜色区分，需要此功能可使用 Link 组件

```vue demo
<template>
  <Row align="middle">
    <Button>默认按钮</Button>
    <Button color="primary">主要按钮</Button>
    <Button color="success">成功按钮</Button>
    <Button color="info">信息按钮</Button>
    <Button color="warning">警告按钮</Button>
    <Button color="danger">危险按钮</Button>
  </Row>
  <Row align="middle">
    <Button type="round">默认按钮</Button>
    <Button type="round" color="primary">主要按钮</Button>
    <Button type="round" color="success">成功按钮</Button>
    <Button type="round" color="info">信息按钮</Button>
    <Button type="round" color="warning">警告按钮</Button>
    <Button type="round" color="danger">危险按钮</Button>
  </Row>
  <Row align="middle">
    <Button type="circle">默</Button>
    <Button type="circle" color="primary">主</Button>
    <Button type="circle" color="success">成</Button>
    <Button type="circle" color="info">信</Button>
    <Button type="circle" color="warning">警</Button>
    <Button type="circle" color="danger">危</Button>
  </Row>
  <Row align="middle">
    <Button type="link">链接按钮</Button>
  </Row>
</template>
```

## 按钮尺寸

使用`zise`属性来定义 Button 的大小

`size`: 'large' | 'small'

```vue demo
<template>
  <Row align="middle">
    <Button color="primary" size="large">大型按钮</Button>
    <Button color="primary">默认按钮</Button>
    <Button color="primary" size="small">小型按钮</Button>
  </Row>
  <Row align="middle">
    <Button color="primary" type="round" size="large">大型按钮</Button>
    <Button color="primary" type="round">默认按钮</Button>
    <Button color="primary" type="round" size="small">小型按钮</Button>
  </Row>
</template>
```

## 禁用状态

使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```vue demo
<template>
  <Row>
    <Button disabled color="primary">主要按钮</Button>
    <Button disabled color="primary" type="round">主要按钮</Button>
    <Button disabled color="primary" type="circle">主</Button>
    <Button disabled color="primary" type="link">主要按钮</Button>
  </Row>
</template>
```

## 加载状态

使用`loading`属性来定义按钮是否处于加载中状态，它接受一个`Boolean`值。

```vue demo
<template>
  <Button color="primary" :loading="true">加载中</Button>
</template>
```

## 图标

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置 `icon` slot

```vue demo
<template>
  <Row>
    <Button color="primary" @click="testclick">
      <template #icon><IconPlusSquare /></template>
      IconPlusSquare
    </Button>
    <Button color="primary">
      <template #icon> <IconTrash /></template>IconTrash
    </Button>
    <Button color="primary">
      <template #icon><IconPencilSquare /></template>IconPencilSquare
    </Button>
    <Button color="primary">
      <template #icon><IconSearch /></template>IconSearch
    </Button>
    <Button color="primary"> <template #icon></template> 上传<i class="el-icon-upload el-icon--right"></i> </Button>
  </Row>
</template>
<script>
import { defineComponent } from 'vue'
import { IconPlusSquare, IconTrash, IconPencilSquare, IconSearch } from '@elenext/icons'
export default defineComponent({
  components: {
    IconPlusSquare,
    IconTrash,
    IconPencilSquare,
    IconSearch
  },
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

使用`button-group`组件来嵌套你的按钮

```vue demo
<template>
  <Button-group>
    <Button color="primary" icon="el-icon-arrow-left">上一页</Button>
    <Button color="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></Button>
  </Button-group>
  <Button-group>
    <Button color="primary" icon="el-icon-edit"></Button>
    <Button color="primary" icon="el-icon-share"></Button>
    <Button color="primary" icon="el-icon-delete"></Button>
  </Button-group>
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
