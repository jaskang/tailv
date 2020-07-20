import { d as defineComponent } from './index.c3d2dc32.js';

const Demo0 = {
    data() {
      return {
        visible: false
      }
    }
  };
if (Demo0.methods) {
                      Demo0.methods.source = function () {
                        return "<el-popover\n  placement=\"top-start\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"hover\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n  <template #reference>\n    <el-button>hover 激活</el-button>\n  </template>\n</el-popover>\n\n<el-popover\n  placement=\"bottom\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"click\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n</el-popover>\n\n<el-popover\n  ref=\"popover\"\n  placement=\"right\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"focus\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n</el-popover>\n<template #reference>\n  <el-button>focus 激活</el-button>\n</template>\n<el-popover\n  placement=\"bottom\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"manual\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  v-model=\"visible\"\n>\n  <template #reference>\n    <el-button @click=\"visible = !visible\">手动激活</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      }\n    }\n  }\n</script>\n"
                      };
                    } else {
                      Demo0.methods = {
                        source() {
                          return "<el-popover\n  placement=\"top-start\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"hover\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n  <template #reference>\n    <el-button>hover 激活</el-button>\n  </template>\n</el-popover>\n\n<el-popover\n  placement=\"bottom\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"click\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n</el-popover>\n\n<el-popover\n  ref=\"popover\"\n  placement=\"right\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"focus\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n</el-popover>\n<template #reference>\n  <el-button>focus 激活</el-button>\n</template>\n<el-popover\n  placement=\"bottom\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"manual\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  v-model=\"visible\"\n>\n  <template #reference>\n    <el-button @click=\"visible = !visible\">手动激活</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      }\n    }\n  }\n</script>\n"
                        },
                      };
                    }
Demo0.template = "<Preview :source=\"source()\">\n                        <el-popover\n  placement=\"top-start\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"hover\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n  <template #reference>\n    <el-button>hover 激活</el-button>\n  </template>\n</el-popover>\n\n<el-popover\n  placement=\"bottom\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"click\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n</el-popover>\n\n<el-popover\n  ref=\"popover\"\n  placement=\"right\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"focus\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n>\n</el-popover>\n<template #reference>\n  <el-button>focus 激活</el-button>\n</template>\n<el-popover\n  placement=\"bottom\"\n  title=\"标题\"\n  width=\"200\"\n  trigger=\"manual\"\n  content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  v-model=\"visible\"\n>\n  <template #reference>\n    <el-button @click=\"visible = !visible\">手动激活</el-button>\n  </template>\n</el-popover> \n                      </Preview>";
const Demo1 = {
    data() {
      return {
        gridData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    }
  };
if (Demo1.methods) {
                      Demo1.methods.source = function () {
                        return "<el-popover placement=\"right\" width=\"400\" trigger=\"click\">\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"日期\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"姓名\"></el-table-column>\n    <el-table-column\n      width=\"300\"\n      property=\"address\"\n      label=\"地址\"\n    ></el-table-column>\n  </el-table>\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          }\n        ]\n      }\n    }\n  }\n</script>\n"
                      };
                    } else {
                      Demo1.methods = {
                        source() {
                          return "<el-popover placement=\"right\" width=\"400\" trigger=\"click\">\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"日期\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"姓名\"></el-table-column>\n    <el-table-column\n      width=\"300\"\n      property=\"address\"\n      label=\"地址\"\n    ></el-table-column>\n  </el-table>\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          }\n        ]\n      }\n    }\n  }\n</script>\n"
                        },
                      };
                    }
Demo1.template = "<Preview :source=\"source()\">\n                        <el-popover placement=\"right\" width=\"400\" trigger=\"click\">\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"日期\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"姓名\"></el-table-column>\n    <el-table-column\n      width=\"300\"\n      property=\"address\"\n      label=\"地址\"\n    ></el-table-column>\n  </el-table>\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n</el-popover> \n                      </Preview>";
const Demo2 = {
    data() {
      return {
        visible: false
      }
    }
  };
if (Demo2.methods) {
                      Demo2.methods.source = function () {
                        return "<el-popover placement=\"top\" width=\"160\" v-model=\"visible\">\n  <p>这是一段内容这是一段内容确定删除吗？</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">取消</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\"\n      >确定</el-button\n    >\n  </div>\n  <template #reference>\n    <el-button>删除</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      }\n    }\n  }\n</script>\n"
                      };
                    } else {
                      Demo2.methods = {
                        source() {
                          return "<el-popover placement=\"top\" width=\"160\" v-model=\"visible\">\n  <p>这是一段内容这是一段内容确定删除吗？</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">取消</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\"\n      >确定</el-button\n    >\n  </div>\n  <template #reference>\n    <el-button>删除</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      }\n    }\n  }\n</script>\n"
                        },
                      };
                    }
Demo2.template = "<Preview :source=\"source()\">\n                        <el-popover placement=\"top\" width=\"160\" v-model=\"visible\">\n  <p>这是一段内容这是一段内容确定删除吗？</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">取消</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\"\n      >确定</el-button\n    >\n  </div>\n  <template #reference>\n    <el-button>删除</el-button>\n  </template>\n</el-popover> \n                      </Preview>";
            
          const __script = defineComponent({
            components: {
              Demo0,Demo1,Demo2
            },
            template: "<h2>Popover 弹出框</h2>\n<h3>基础用法</h3>\n<p>Popover 的属性与 Tooltip 很类似，它们都是基于<code>Vue-popper</code>开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>\n<div class=\"demo\">\n<p><code>trigger</code>属性用于设置何时触发 Popover，支持四种触发方式：<code>hover</code>，<code>click</code>，<code>focus</code> 和 <code>manual</code>。对于触发 Popover 的元素，有两种写法：使用 <code>slot=&quot;reference&quot;</code> 的具名插槽，或使用自定义指令<code>v-popover</code>指向 Popover 的索引<code>ref</code>。</p>\n<pre></pre><Demo0 />\n</div>\n<h3>嵌套信息</h3>\n<p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>\n<div class=\"demo\">\n<p>利用分发取代<code>content</code>属性</p>\n<pre></pre><Demo1 />\n</div>\n<h3>嵌套操作</h3>\n<p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>\n<div class=\"demo\">\n<pre></pre><Demo2 />\n</div>\n<h3>Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>trigger</td>\n<td>触发方式</td>\n<td>String</td>\n<td>click/focus/hover/manual</td>\n<td>click</td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>content</td>\n<td>显示的内容，也可以通过 <code>slot</code> 传入 DOM</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>width</td>\n<td>宽度</td>\n<td>String, Number</td>\n<td>—</td>\n<td>最小宽度 150px</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>出现位置</td>\n<td>String</td>\n<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>\n<td>bottom</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Popover 是否可用</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>value / v-model</td>\n<td>状态是否可见</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>出现位置的偏移量</td>\n<td>Number</td>\n<td>—</td>\n<td>0</td>\n</tr>\n<tr>\n<td>transition</td>\n<td>定义渐变动画</td>\n<td>String</td>\n<td>—</td>\n<td>fade-in-linear</td>\n</tr>\n<tr>\n<td>visible-arrow</td>\n<td>是否显示 Tooltip 箭头，更多参数可见<a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a></td>\n<td>Boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>popper-options</td>\n<td><a href=\"https://popper.js.org/documentation.html\">popper.js</a> 的参数</td>\n<td>Object</td>\n<td>参考 <a href=\"https://popper.js.org/documentation.html\">popper.js</a> 文档</td>\n<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>\n</tr>\n<tr>\n<td>popper-class</td>\n<td>为 popper 添加类名</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>open-delay</td>\n<td>触发方式为 hover 时的显示延迟，单位为毫秒</td>\n<td>Number</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>close-delay</td>\n<td>触发方式为 hover 时的隐藏延迟，单位为毫秒</td>\n<td>number</td>\n<td>—</td>\n<td>200</td>\n</tr>\n<tr>\n<td>tabindex</td>\n<td>Popover 组件的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a></td>\n<td>number</td>\n<td>—</td>\n<td>0</td>\n</tr>\n</tbody>\n</table>\n<h3>Slot</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>—</td>\n<td>Popover 内嵌 HTML 文本</td>\n</tr>\n<tr>\n<td>reference</td>\n<td>触发 Popover 显示的 HTML 元素</td>\n</tr>\n</tbody>\n</table>\n<h3>Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>显示时触发</td>\n<td>—</td>\n</tr>\n<tr>\n<td>after-enter</td>\n<td>显示动画播放完毕后触发</td>\n<td>—</td>\n</tr>\n<tr>\n<td>hide</td>\n<td>隐藏时触发</td>\n<td>—</td>\n</tr>\n<tr>\n<td>after-leave</td>\n<td>隐藏动画播放完毕后触发</td>\n<td>—</td>\n</tr>\n</tbody>\n</table>\n"
          });

export default __script;
