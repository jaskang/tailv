## e-popper

e-popper 是一个基础组件，不推荐直接使用。Popover、Tooltip、Menu 等组件都是基于 e-popper 的能力实现的

### 基础 e-popper

```vue demo
<template>
  <e-popper>
    <template #content> 12312342 </template>
    <e-button>top button</e-button>
  </e-popper>
  <e-popper>
    <template #content> 12312342 </template>
    text123213
  </e-popper>
  <br />
  <e-popper placement="left">
    <template #content> 12312342 </template>
    <e-button>left button</e-button>
  </e-popper>
  <br />
  <e-popper placement="right">
    <e-button>right button</e-button>
    <template #content> 12312342 </template>
  </e-popper>
  <br />
  <e-popper placement="bottom">
    <e-button>bottom button</e-button>
    <template #content> 12312342 </template>
  </e-popper>

  <e-popper>
    <span>span</span>
    <template #content> 12312342 </template>
  </e-popper>
  <e-popper>
    <e-button>button</e-button>
    <template #content> 12312342 </template>
  </e-popper>
  <e-popper v-model="show">
    <e-button @click="tgShow"> click -> tgShow</e-button>
    <template #content> 12312342 </template>
  </e-popper>
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
| popper-class         | 为 e-popper 添加类名                                         | String                           | -                 |
| visible-arrow        | 是否显示 e-popper 箭头，                                     | Boolean                          | true              |
| placement            | e-popper 的出现位置                                          | [PlacementType](#placementtype)  | 'bottom'          |
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
