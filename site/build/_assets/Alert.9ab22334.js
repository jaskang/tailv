let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = "";document.head.appendChild(__VITE_CSS__);import { d as defineComponent } from './index.74198429.js';

const Demo0 = {};
if (Demo0.methods) {
                      Demo0.methods.source = function () {
                        return "<el-alert title=\"成功提示的文案\" type=\"success\"> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\"> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\"> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\"> </el-alert>\n"
                      };
                    } else {
                      Demo0.methods = {
                        source() {
                          return "<el-alert title=\"成功提示的文案\" type=\"success\"> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\"> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\"> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\"> </el-alert>\n"
                        },
                      };
                    }
Demo0.template = "<Preview :source=\"source()\">\n                        <el-alert title=\"成功提示的文案\" type=\"success\"> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\"> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\"> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\"> </el-alert> \n                      </Preview>";
const Demo1 = {};
if (Demo1.methods) {
                      Demo1.methods.source = function () {
                        return "<el-alert title=\"成功提示的文案\" type=\"success\" effect=\"dark\"> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" effect=\"dark\"> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" effect=\"dark\"> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" effect=\"dark\"> </el-alert>\n"
                      };
                    } else {
                      Demo1.methods = {
                        source() {
                          return "<el-alert title=\"成功提示的文案\" type=\"success\" effect=\"dark\"> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" effect=\"dark\"> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" effect=\"dark\"> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" effect=\"dark\"> </el-alert>\n"
                        },
                      };
                    }
Demo1.template = "<Preview :source=\"source()\">\n                        <el-alert title=\"成功提示的文案\" type=\"success\" effect=\"dark\"> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" effect=\"dark\"> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" effect=\"dark\"> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" effect=\"dark\"> </el-alert> \n                      </Preview>";
const Demo2 = {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  };
if (Demo2.methods) {
                      Demo2.methods.source = function () {
                        return "<el-alert title=\"不可关闭的 alert\" type=\"success\" :closable=\"false\"> </el-alert>\n<el-alert title=\"自定义 close-text\" type=\"info\" close-text=\"知道了\"> </el-alert>\n<el-alert title=\"设置了回调的 alert\" type=\"warning\" @close=\"hello\"> </el-alert>\n\n<script>\n  export default {\n    methods: {\n      hello() {\n        alert('Hello World!')\n      }\n    }\n  }\n</script>\n"
                      };
                    } else {
                      Demo2.methods = {
                        source() {
                          return "<el-alert title=\"不可关闭的 alert\" type=\"success\" :closable=\"false\"> </el-alert>\n<el-alert title=\"自定义 close-text\" type=\"info\" close-text=\"知道了\"> </el-alert>\n<el-alert title=\"设置了回调的 alert\" type=\"warning\" @close=\"hello\"> </el-alert>\n\n<script>\n  export default {\n    methods: {\n      hello() {\n        alert('Hello World!')\n      }\n    }\n  }\n</script>\n"
                        },
                      };
                    }
Demo2.template = "<Preview :source=\"source()\">\n                        <el-alert title=\"不可关闭的 alert\" type=\"success\" :closable=\"false\"> </el-alert>\n<el-alert title=\"自定义 close-text\" type=\"info\" close-text=\"知道了\"> </el-alert>\n<el-alert title=\"设置了回调的 alert\" type=\"warning\" @close=\"hello\"> </el-alert> \n                      </Preview>";
const Demo3 = {};
if (Demo3.methods) {
                      Demo3.methods.source = function () {
                        return "<el-alert title=\"成功提示的文案\" type=\"success\" show-icon> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" show-icon> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" show-icon> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" show-icon> </el-alert>\n"
                      };
                    } else {
                      Demo3.methods = {
                        source() {
                          return "<el-alert title=\"成功提示的文案\" type=\"success\" show-icon> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" show-icon> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" show-icon> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" show-icon> </el-alert>\n"
                        },
                      };
                    }
Demo3.template = "<Preview :source=\"source()\">\n                        <el-alert title=\"成功提示的文案\" type=\"success\" show-icon> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" show-icon> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" show-icon> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" show-icon> </el-alert> \n                      </Preview>";
const Demo4 = {};
if (Demo4.methods) {
                      Demo4.methods.source = function () {
                        return "<el-alert title=\"成功提示的文案\" type=\"success\" center show-icon> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" center show-icon> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" center show-icon> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" center show-icon> </el-alert>\n"
                      };
                    } else {
                      Demo4.methods = {
                        source() {
                          return "<el-alert title=\"成功提示的文案\" type=\"success\" center show-icon> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" center show-icon> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" center show-icon> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" center show-icon> </el-alert>\n"
                        },
                      };
                    }
Demo4.template = "<Preview :source=\"source()\">\n                        <el-alert title=\"成功提示的文案\" type=\"success\" center show-icon> </el-alert>\n<el-alert title=\"消息提示的文案\" type=\"info\" center show-icon> </el-alert>\n<el-alert title=\"警告提示的文案\" type=\"warning\" center show-icon> </el-alert>\n<el-alert title=\"错误提示的文案\" type=\"error\" center show-icon> </el-alert> \n                      </Preview>";
const Demo5 = {};
if (Demo5.methods) {
                      Demo5.methods.source = function () {
                        return "<el-alert\n  title=\"带辅助性文字介绍\"\n  type=\"success\"\n  description=\"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……\"\n>\n</el-alert>\n"
                      };
                    } else {
                      Demo5.methods = {
                        source() {
                          return "<el-alert\n  title=\"带辅助性文字介绍\"\n  type=\"success\"\n  description=\"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……\"\n>\n</el-alert>\n"
                        },
                      };
                    }
Demo5.template = "<Preview :source=\"source()\">\n                        <el-alert\n  title=\"带辅助性文字介绍\"\n  type=\"success\"\n  description=\"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……\"\n>\n</el-alert> \n                      </Preview>";
const Demo6 = {};
if (Demo6.methods) {
                      Demo6.methods.source = function () {
                        return "<el-alert\n  title=\"成功提示的文案\"\n  type=\"success\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"消息提示的文案\"\n  type=\"info\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"警告提示的文案\"\n  type=\"warning\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"错误提示的文案\"\n  type=\"error\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n"
                      };
                    } else {
                      Demo6.methods = {
                        source() {
                          return "<el-alert\n  title=\"成功提示的文案\"\n  type=\"success\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"消息提示的文案\"\n  type=\"info\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"警告提示的文案\"\n  type=\"warning\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"错误提示的文案\"\n  type=\"error\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n"
                        },
                      };
                    }
Demo6.template = "<Preview :source=\"source()\">\n                        <el-alert\n  title=\"成功提示的文案\"\n  type=\"success\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"消息提示的文案\"\n  type=\"info\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"警告提示的文案\"\n  type=\"warning\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert>\n<el-alert\n  title=\"错误提示的文案\"\n  type=\"error\"\n  description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n  show-icon\n>\n</el-alert> \n                      </Preview>";
            
          const __script = defineComponent({
            components: {
              Demo0,Demo1,Demo2,Demo3,Demo4,Demo5,Demo6
            },
            template: "<h2>Alert 警告</h2>\n<p>用于页面中展示重要的提示信息。</p>\n<h3>基本用法</h3>\n<p>页面中的非浮层元素，不会自动消失。</p>\n<div class=\"demo\">\n<p>Alert 组件提供四种主题，由<code>type</code>属性指定，默认值为<code>info</code>。</p>\n<pre></pre><Demo0 />\n</div>\n<h3>主题</h3>\n<p>Alert 组件提供了两个不同的主题：<code>light</code>和<code>dark</code>。</p>\n<div class=\"demo\">\n<p>通过设置<code>effect</code>属性来改变主题，默认为<code>light</code>。</p>\n<pre></pre><Demo1 />\n</div>\n<h3>自定义关闭按钮</h3>\n<p>自定义关闭按钮为文字或其他符号。</p>\n<div class=\"demo\">\n<p>在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。<code>closable</code>属性决定是否可关闭，接受<code>boolean</code>，默认为<code>true</code>。你可以设置<code>close-text</code>属性来代替右侧的关闭图标，注意：<code>close-text</code>必须为文本。设置<code>close</code>事件来设置关闭时的回调。</p>\n<pre></pre><Demo2 />\n</div>\n<h3>带有 icon</h3>\n<p>表示某种状态时提升可读性。</p>\n<div class=\"demo\">\n<p>通过设置<code>show-icon</code>属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p>\n<pre></pre><Demo3 />\n</div>\n<h3>文字居中</h3>\n<p>使用 <code>center</code> 属性让文字水平居中。</p>\n<div class=\"demo\">\n<pre></pre><Demo4 />\n</div>\n<h3>带有辅助性文字介绍</h3>\n<p>包含标题和内容，解释更详细的警告。</p>\n<div class=\"demo\">\n<p>除了必填的<code>title</code>属性外，你可以设置<code>description</code>属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。</p>\n<pre></pre><Demo5 />\n</div>\n<h3>带有 icon 和辅助性文字介绍</h3>\n<div class=\"demo\">\n<p>最后，这是一个同时具有 icon 和辅助性文字的样例。</p>\n<pre></pre><Demo6 />\n</div>\n<h3>Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>type</td>\n<td>主题</td>\n<td>string</td>\n<td>success/warning/info/error</td>\n<td>info</td>\n</tr>\n<tr>\n<td>description</td>\n<td>辅助性文字。也可通过默认 slot 传入</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否可关闭</td>\n<td>boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>center</td>\n<td>文字是否居中</td>\n<td>boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>close-text</td>\n<td>关闭按钮自定义文本</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>show-icon</td>\n<td>是否显示图标</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>effect</td>\n<td>选择提供的主题</td>\n<td>string</td>\n<td>light/dark</td>\n<td>light</td>\n</tr>\n</tbody>\n</table>\n<h3>Slot</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>description</td>\n<td>描述</td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题的内容</td>\n</tr>\n</tbody>\n</table>\n<h3>Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>close</td>\n<td>关闭 alert 时触发的事件</td>\n<td>—</td>\n</tr>\n</tbody>\n</table>\n"
          });

export default __script;
