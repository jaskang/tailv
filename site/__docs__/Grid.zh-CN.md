---
title: Grid
wrapperClass: md-grid
---

# Grid 布局

基于 flex 的 24 分栏栅格化系统，迅速简便地创建布局。

## 基础栅格

使用单一分栏创建基础的栅格布局。

从堆叠到水平排列。  
使用单一的一组 `row` 和 `col` 栅格组件，就可以创建一个基本的栅格系统，所有列 `col` 必须放在 `row` 内。

```vue demo
<template>
  <el-row>
    <el-col :span="24"><div>col-24</div></el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><div>col-12</div></el-col>
    <el-col :span="12"><div>col-12</div></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div>col-8</div></el-col>
    <el-col :span="8"><div>col-8</div></el-col>
    <el-col :span="8"><div>col-8</div></el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
  </el-row>
</template>
```

## 区块间隔

分栏之间存在间隔。  
Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔， 默认间隔为 0。  
如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]  
如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: [32, 32], xl: [40, 40] }

```vue demo
<template>
  <el-row :gutter="16">
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
  </el-row>
  <br />
  <el-row :gutter="[30, 14]">
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
    <el-col :span="6"><div>col-6</div></el-col>
  </el-row>
</template>
```

## 左右偏移

支持偏移指定的栏数。

使用 `offset` 可以将列向右侧偏。例如，offset={6} 将元素向右侧偏移了 6 个列（col）的宽度。

```vue demo
<template>
  <el-row>
    <el-col :span="8"><div>col-8</div></el-col>
    <el-col :span="8" :offset="8"><div>col-8 offset-8</div></el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="6"><div>col-6 col-offset-6</div></el-col>
    <el-col :span="6" :offset="6"><div>col-6 col-offset-6</div></el-col>
  </el-row>
  <el-row>
    <el-col :span="12" :offset="6"><div>col-12 col-offset-6</div></el-col>
  </el-row>
</template>
```

## 栅格移动

通过使用 `push` 和 `pull` 类就可以很容易的改变列（col）的位置。  
向右移动: `push` 向左移动: `pull`

```vue demo
<template>
  <el-row>
    <el-col :span="18" :push="6"><div>col-18 col-push-6</div></el-col>
    <el-col :span="6" :pull="18"><div>col-6 col-pull-18</div></el-col>
  </el-row>
</template>
```

## 对齐方式

通过设置 `row` 的 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的横向对齐方式

通过设置 `row` 的 `align` 属性来指定 top, middle, bottom 其中的值来定义子元素的横向对齐方式

```vue demo
<template>
  <el-row justify="center" align="top" style="background:#F2F6FC;height:60px">
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
  </el-row>

  <el-row justify="space-around" align="middle" style="background:#F2F6FC;height:60px">
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
  </el-row>

  <el-row justify="space-between" align="bottom" style="background:#F2F6FC;height:60px">
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
    <el-col :span="4">
      <div>col-4</div>
    </el-col>
  </el-row>
</template>
```

## 栅格排序

通过 `order` 来改变 `col` 元素的排序。

```vue demo
<template>
  <el-row>
    <el-col :span="6" :order="4"><div>1 col-order-4</div></el-col>
    <el-col :span="6" :order="3"><div>2 col-order-3</div></el-col>
    <el-col :span="6" :order="2"><div>3 col-order-2</div></el-col>
    <el-col :span="6" :order="1"><div>4 col-order-1</div></el-col>
  </el-row>
</template>
```

## Flex 填充

Col 提供 flex 属性以支持填充

```vue demo
<template>
  <el-row>
    <el-col :flex="2"><div>2 / 5</div></el-col>
    <el-col :flex="3"><div>3 / 5</div></el-col>
  </el-row>
  <el-row>
    <el-col flex="100px"><div>100px</div></el-col>
    <el-col flex="auto"><div>Fill Rest</div></el-col>
  </el-row>
  <el-row>
    <el-col flex="1 1 200px"><div>1 1 200px</div></el-col>
    <el-col flex="0 1 300px"><div>0 1 300px</div></el-col>
  </el-row>

  <el-row :wrap="false">
    <el-col flex="none">
      <div style="padding: 0 16px">none</div>
    </el-col>
    <el-col flex="auto"><div>auto with no-wrap</div></el-col>
  </el-row>
</template>
```

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。

其中 xs="6" 相当于 xs="{ span: 6 }"

```vue demo
<template>
  <el-row>
    <el-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></el-col>
    <el-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4"><div>Col</div></el-col>
    <el-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></el-col>
  </el-row>
</template>
```

## useBreakpoint Hook

```vue demo
<template>
  <el-row>
    <el-col>
      <div style="background:#fff">Current break point:{{ screens }}</div>
    </el-col>
  </el-row>
</template>
<script>
import { useBreakpoint } from 'elenext'
export default {
  setup() {
    const screens = useBreakpoint()
    return { screens }
  }
}
</script>
```

## 例子

```vue demo
<template>
  <div style="margin-bottom: 40px">
    Horizontal Gutter (px):
    <label><input type="radio" name="x" :value="8" v-model="data.x" /> 8 </label>
    <label><input type="radio" name="x" :value="16" v-model="data.x" /> 16 </label>
    <label><input type="radio" name="x" :value="24" v-model="data.x" /> 24 </label>
    <label><input type="radio" name="x" :value="32" v-model="data.x" /> 32 </label>
    <label><input type="radio" name="x" :value="40" v-model="data.x" /> 40 </label>
    <br />
    Vertical Gutter (px):
    <label><input type="radio" name="y" :value="8" v-model="data.y" /> 8 </label>
    <label><input type="radio" name="y" :value="16" v-model="data.y" /> 16 </label>
    <label><input type="radio" name="y" :value="24" v-model="data.y" /> 24 </label>
    <label><input type="radio" name="y" :value="32" v-model="data.y" /> 32 </label>
    <label><input type="radio" name="y" :value="40" v-model="data.y" /> 40 </label>
    <br />
    Column Count:
    <label><input type="radio" name="total" :value="2" v-model="data.colTotal" /> 2 </label>
    <label><input type="radio" name="total" :value="4" v-model="data.colTotal" /> 4 </label>
    <label><input type="radio" name="total" :value="6" v-model="data.colTotal" /> 6 </label>
    <label><input type="radio" name="total" :value="8" v-model="data.colTotal" /> 8 </label>
    <label><input type="radio" name="total" :value="12" v-model="data.colTotal" /> 12 </label>
  </div>
  <el-row :gutter="[data.x, data.y]">
    <el-col v-for="i in data.colTotal" :span="24 / data.colTotal">
      <div>span:{{ 24 / data.colTotal }}</div>
    </el-col>
    <el-col v-for="i in data.colTotal" :span="24 / data.colTotal">
      <div>span:{{ 24 / data.colTotal }}</div>
    </el-col>
  </el-row>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const data = reactive({
      x: 8,
      y: 8,
      colTotal: 4
    })
    return {
      data
    }
  }
}
</script>
```

### Row

| props   | description               | type                                                  | default |
| ------- | ------------------------- | ----------------------------------------------------- | ------- |
| align   | flex 布局下的垂直排列方式 | 'top'/'middle'/'bottom'                               | top     |
| justify | flex 布局下的水平排列方式 | 'start'/'end'/'center'/'space-around'/'space-between' | start   |
| gutter  | 栅格间隔                  | number /object / array                                | 0       |
| wrap    | 自动换行                  | boolean                                               | true    |

### Col

| props  | description                            | type                                        | default |
| ------ | -------------------------------------- | ------------------------------------------- | ------- |
| flex   | flex 属性                              | string/number                               | -       |
| span   | 栅格占据的列数                         | number                                      | -       |
| push   | 栅格向右移动格数                       | number                                      | 0       |
| pull   | 栅格向左移动格数                       | number                                      | 0       |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number                                      | 0       |
| order  | 栅格顺序                               | number                                      | 0       |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —       |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —       |
| md     | `≥1024px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —       |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —       |
| xl     | `≥1400px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —       |
