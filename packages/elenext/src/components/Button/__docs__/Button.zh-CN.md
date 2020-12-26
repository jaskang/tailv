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
  <Row>
    <Col>
      <Button>默认按钮</Button>
      <Button color="primary">主要按钮</Button>
      <Button color="success">成功按钮</Button>
      <Button color="info">信息按钮</Button>
      <Button color="warning">警告按钮</Button>
      <Button color="danger">危险按钮</Button>
    </Col>
  </Row>
</template>
```

## 按钮类型

使用`type`属性来定义 Button 的样式

`type` : 'round' | 'circle' | 'link' | 'plain'

::: tips link 类型的按钮没有颜色区分，需要此功能可使用 Link 组件

```vue demo
<template>
  <Row align="middle">
    <Col>
      <Button>默认按钮</Button>
      <Button color="primary">主要颜色</Button>
      <Button color="success">成功颜色</Button>
      <Button color="info">信息颜色</Button>
      <Button color="warning">警告颜色</Button>
      <Button color="danger">危险颜色</Button>
    </Col>
  </Row>
  <Row align="middle">
    <Col>
      <Button type="plain">plain 按钮</Button>
      <Button type="plain" color="primary">主要颜色</Button>
      <Button type="plain" color="success">成功颜色</Button>
      <Button type="plain" color="info">信息颜色</Button>
      <Button type="plain" color="warning">警告颜色</Button>
      <Button type="plain" color="danger">危险颜色</Button>
    </Col>
  </Row>
  <Row align="middle">
    <Col>
      <Button type="round">round 按钮</Button>
      <Button type="round" color="primary">主要颜色</Button>
      <Button type="round" color="success">成功颜色</Button>
      <Button type="round" color="info">信息颜色</Button>
      <Button type="round" color="warning">警告颜色</Button>
      <Button type="round" color="danger">危险颜色</Button>
    </Col>
  </Row>
  <Row align="middle">
    <Col>
      <Button type="circle">圆</Button>
      <Button type="circle" color="primary">主</Button>
      <Button type="circle" color="success">成</Button>
      <Button type="circle" color="info">信</Button>
      <Button type="circle" color="warning">警</Button>
      <Button type="circle" color="danger">危</Button>
    </Col>
  </Row>
  <Row align="middle">
    <Col>
      <Button type="link">链接按钮</Button>
    </Col>
  </Row>
</template>
```

## 按钮尺寸

使用`zise`属性来定义 Button 的大小

`size`: 'large' | 'small'

```vue demo
<template>
  <Row align="middle">
    <Col>
      <Button size="large">大型按钮</Button>
      <Button color="primary">默认按钮</Button>
      <Button color="danger" size="small">小型按钮</Button>
    </Col>
  </Row>
  <Row align="middle">
    <Col>
      <Button type="round" size="large">大型按钮</Button>
      <Button color="primary" type="round">默认按钮</Button>
      <Button color="danger" type="round" size="small">小型按钮</Button>
    </Col>
  </Row>
  <Row align="middle">
    <Col>
      <Button type="circle" size="large">P</Button>
      <Button color="primary" type="circle">S</Button>
      <Button color="danger" type="circle" size="small">D</Button>
    </Col>
  </Row>
  <Row align="middle">
    <Col>
      <Button type="link" size="large">大型按钮</Button>
      <Button color="primary" type="link">默认按钮</Button>
      <Button color="danger" type="link" size="small">小型按钮</Button>
    </Col>
  </Row>
</template>
```

## 禁用状态

使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```vue demo
<template>
  <Row>
    <Col>
      <Button disabled>默认按钮</Button>
      <Button disabled type="round">默认按钮</Button>
      <Button disabled type="plain">默认按钮</Button>
      <Button disabled type="circle">默</Button>
      <Button disabled type="link">默认按钮</Button>
    </Col>
  </Row>
  <Row>
    <Col>
      <Button disabled color="primary">主要按钮</Button>
      <Button disabled color="primary" type="round">主要按钮</Button>
      <Button disabled color="primary" type="plain">主要按钮</Button>
      <Button disabled color="primary" type="circle">主</Button>
      <Button disabled color="primary" type="link">主要按钮</Button>
    </Col>
  </Row>
</template>
```

## 加载状态

使用`loading`属性来定义按钮是否处于加载中状态，它接受一个`Boolean`值。

```vue demo
<template>
  <Row>
    <Col>
      <Button color="primary" :loading="true">加载中</Button>
    </Col>
  </Row>
</template>
```

## 图标

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置 `icon` slot

```vue demo
<template>
  <Row>
    <Col>
      <Button color="primary" @click="testclick">
        <template #icon><IconPlusCircle /></template>
      </Button>
      <Button color="primary">
        <template #icon><IconDashCircle /></template>
      </Button>
      <Button color="primary">
        <template #icon><IconSearch /></template>
      </Button>
      <Button color="primary">
        <template #icon><IconPencil /></template>
      </Button>
      <Button color="primary">
        <template #icon><IconSearch /></template>IconSearch
      </Button>
      <Button color="primary">
        <template #icon><IconUpload /></template>IconUpload
      </Button>
    </Col>
  </Row>
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

使用`button-group`组件来嵌套你的按钮

```vue demo
<template>
  <Button-group>
    <Button color="primary">
      <template #icon><IconChevronLeft /></template>上一页
    </Button>
    <Button color="primary"> 下一页 <IconChevronRight /> </Button>
  </Button-group>
  <Button-group>
    <Button color="primary">
      <template #icon><IconPlus /></template>
    </Button>
    <Button color="primary">
      <template #icon><IconPencil /></template>
    </Button>
    <Button color="primary">
      <template #icon><IconTrash /></template>
    </Button>
    <Button color="primary">
      <template #icon><IconDash /></template>
    </Button>
  </Button-group>
</template>
```

## Attributes

| 参数        | 说明           | 类型                                                             | 默认值 |
| ----------- | -------------- | ---------------------------------------------------------------- | ------ |
| color       | 类型           | 'primary' / 'success' / 'warning' / 'danger' / 'info' / 'string' | -      |
| size        | 尺寸           | 'large' / 'small'                                                | -      |
| type        | 类型           | 'round' / 'circle' / 'link' / 'plain'                            | -      |
| loading     | 是否加载中状态 | boolean                                                          | false  |
| disabled    | 是否禁用状态   | boolean                                                          | false  |
| native-type | 原生 type 属性 | 'button' / 'submit' / 'reset'                                    | button |
