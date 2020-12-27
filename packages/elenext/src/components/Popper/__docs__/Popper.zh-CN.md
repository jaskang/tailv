## Popper

Popper 是一个基础组件，不推荐直接使用。Popover、Tooltip、Menu 等组件都是基于 Popper 的能力实现的

### 基础 Popper

```vue demo
<template>
  <Popper>
    <template #content> 12312342 </template>
    <Button>top button</Button>
  </Popper>
  <Popper>
    <template #content> 12312342 </template>
    text123213
  </Popper>
  <br />
  <Popper placement="left">
    <template #content> 12312342 </template>
    <Button>left button</Button>
  </Popper>
  <br />
  <Popper placement="right">
    <Button>right button</Button>
    <template #content> 12312342 </template>
  </Popper>
  <br />
  <Popper placement="bottom">
    <Button>bottom button</Button>
    <template #content> 12312342 </template>
  </Popper>

  <Popper>
    <span>span</span>
    <template #content> 12312342 </template>
  </Popper>
  <Popper>
    <Button>button</Button>
    <template #content> 12312342 </template>
  </Popper>
  <Popper v-model="show">
    <Button @click="tgShow"> click -> tgShow</Button>
    <template #content> 12312342 </template>
  </Popper>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    tgShow() {
      this.show = !this.show
    }
  }
}
</script>
```

### Props

| 参数                 | 说明                                                         | 类型                             | 默认值            |
| -------------------- | ------------------------------------------------------------ | -------------------------------- | ----------------- |
| mode-value / v-model | 状态是否可见                                                 | Boolean                          | false             |
| popper-class         | 为 Popper 添加类名                                           | String                           | -                 |
| visible-arrow        | 是否显示 Popper 箭头，                                       | Boolean                          | true              |
| placement            | Popper 的出现位置                                            | [PlacementType](#placementtype)  | 'bottom'          |
| offset               | 出现位置的偏移量                                             | Number                           | 0                 |
| trigger              | 控制模式                                                     | 'click'/'hover'/'focus'/'manual' | 'hover'           |
| transition           | 定义渐变动画                                                 | String                           | el-fade-in-linear |
| background-color     | 背景颜色                                                     | String                           | -                 |
| reference            | 指定 reference 模式下的定位元素，popper 讲显示在定位元素周围 | String                           | -                 |

#### PlacementType

| 类型          | 值                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| PlacementType | top/top-start/top-end<br>bottom/bottom-start/bottom-end<br>left/left-start/left-end<br>right/right-start/right-end |

### Slots

| 插槽    | 说明                |
| ------- | ------------------- |
| content | popper 弹出体的内容 |
| -       | 原始                |
