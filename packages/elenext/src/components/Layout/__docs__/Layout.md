## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

使用单一分栏创建基础的栅格布局。

:::demo
通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

```html
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
```

:::

### 分栏间隔

分栏之间存在间隔。

:::demo
Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

```html
<el-row gutter="50">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
```

:::

### 混合布局

通过基础的 1/12 分栏任意扩展组合形成较为复杂的混合布局。

:::demo

```html
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
</el-row>
```

:::

### 分栏偏移

支持偏移指定的栏数。

:::demo
通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

```html
<el-row>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3" offset="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="3" offset="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3" offset="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6" offset="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3" offset="mr"><div class="grid-content bg-purple">offset="mr"</div></el-col>
</el-row>
<el-row>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3" offset="ml"><div class="grid-content bg-purple">offset="ml"</div></el-col>
</el-row>
<el-row>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3" offset="mx"><div class="grid-content bg-purple">offset="mx"</div></el-col>
</el-row>
```

:::

### 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

:::demo
将 `type` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```html
<el-row>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row justify="center">
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row justify="flex-end">
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row justify="space-between">
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row justify="space-around">
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
</el-row>
```

:::

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

:::demo

```html
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple-light"></div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple-light"></div>
  </el-col>
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
| push   | 栅格向右移动格数                       | number                                      | —      | 0      |
| pull   | 栅格向左移动格数                       | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
