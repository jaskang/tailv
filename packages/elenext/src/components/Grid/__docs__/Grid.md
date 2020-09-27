## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

使用单一分栏创建基础的栅格布局。

:::demo
通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

```html
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
```

:::

### 分栏间隔

分栏之间存在间隔。

:::demo
Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

```html
<el-row :gutter="16">
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
</el-row>
<br />
<el-row :gutter="[16,24]">
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
  <el-col :span="6"><div>Column</div></el-col>
</el-row>
```

:::

### 分栏偏移

支持偏移指定的栏数。

:::demo
通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

```html
<el-row>
  <el-col :span="8"><div>col-8</div></el-col>
  <el-col :span="8" :offset="8"><div>col-8</div></el-col>
</el-row>
<el-row>
  <el-col :span="6" :offset="6"><div>col-6 col-offset-6</div></el-col>
  <el-col :span="6" :offset="6"><div>col-6 col-offset-6</div></el-col>
</el-row>
<el-row>
  <el-col :span="12" :offset="6"><div>col-12 col-offset-6</div></el-col>
</el-row>
```

:::

### 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

:::demo
将 `type` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```html
<el-row justify="center" align="top">
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

<el-row justify="space-around" align="middle">
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

<el-row justify="space-between" align="bottom">
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
```

:::

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

:::demo

```html
<el-row>
  <el-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></el-col>
  <el-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4"><div>Col</div></el-col>
  <el-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></el-col>
</el-row>
```

:::

### Row Attributes

| 参数    | 说明                      | 类型   | 可选值                                      | 默认值     |
| ------- | ------------------------- | ------ | ------------------------------------------- | ---------- |
| gutter  | 栅格间隔                  | number | —                                           | 20         |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | flex-start |
| align   | flex 布局下的垂直排列方式 | string | top/middle/bottom                           | top        |

### Col Attributes

| 参数   | 说明                                   | 类型                                        | 可选值 | 默认值 |
| ------ | -------------------------------------- | ------------------------------------------- | ------ | ------ |
| span   | 栅格占据的列数                         | number                                      | —      | 12     |
| offset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
