let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = "";document.head.appendChild(__VITE_CSS__);import { d as defineComponent } from './index.17ad1f53.js';

const Demo0 = {};
if (Demo0.methods) {
                      Demo0.methods.source = function () {
                        return "<el-row>\n  <el-button>默认按钮</el-button>\n  <el-button type=\"primary\">主要按钮</el-button>\n  <el-button type=\"success\">成功按钮</el-button>\n  <el-button type=\"info\">信息按钮</el-button>\n  <el-button type=\"warning\">警告按钮</el-button>\n  <el-button type=\"danger\">危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain>朴素按钮</el-button>\n  <el-button type=\"primary\" plain>主要按钮</el-button>\n  <el-button type=\"success\" plain>成功按钮</el-button>\n  <el-button type=\"info\" plain>信息按钮</el-button>\n  <el-button type=\"warning\" plain>警告按钮</el-button>\n  <el-button type=\"danger\" plain>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button round>圆角按钮</el-button>\n  <el-button type=\"primary\" round>主要按钮</el-button>\n  <el-button type=\"success\" round>成功按钮</el-button>\n  <el-button type=\"info\" round>信息按钮</el-button>\n  <el-button type=\"warning\" round>警告按钮</el-button>\n  <el-button type=\"danger\" round>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button icon=\"el-icon-search\" circle></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-edit\" circle></el-button>\n  <el-button type=\"success\" icon=\"el-icon-check\" circle></el-button>\n  <el-button type=\"info\" icon=\"el-icon-message\" circle></el-button>\n  <el-button type=\"warning\" icon=\"el-icon-star-off\" circle></el-button>\n  <el-button type=\"danger\" icon=\"el-icon-delete\" circle></el-button>\n</el-row>\n"
                      };
                    } else {
                      Demo0.methods = {
                        source() {
                          return "<el-row>\n  <el-button>默认按钮</el-button>\n  <el-button type=\"primary\">主要按钮</el-button>\n  <el-button type=\"success\">成功按钮</el-button>\n  <el-button type=\"info\">信息按钮</el-button>\n  <el-button type=\"warning\">警告按钮</el-button>\n  <el-button type=\"danger\">危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain>朴素按钮</el-button>\n  <el-button type=\"primary\" plain>主要按钮</el-button>\n  <el-button type=\"success\" plain>成功按钮</el-button>\n  <el-button type=\"info\" plain>信息按钮</el-button>\n  <el-button type=\"warning\" plain>警告按钮</el-button>\n  <el-button type=\"danger\" plain>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button round>圆角按钮</el-button>\n  <el-button type=\"primary\" round>主要按钮</el-button>\n  <el-button type=\"success\" round>成功按钮</el-button>\n  <el-button type=\"info\" round>信息按钮</el-button>\n  <el-button type=\"warning\" round>警告按钮</el-button>\n  <el-button type=\"danger\" round>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button icon=\"el-icon-search\" circle></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-edit\" circle></el-button>\n  <el-button type=\"success\" icon=\"el-icon-check\" circle></el-button>\n  <el-button type=\"info\" icon=\"el-icon-message\" circle></el-button>\n  <el-button type=\"warning\" icon=\"el-icon-star-off\" circle></el-button>\n  <el-button type=\"danger\" icon=\"el-icon-delete\" circle></el-button>\n</el-row>\n"
                        },
                      };
                    }
Demo0.template = "<Preview :source=\"source()\">\n                        <el-row>\n  <el-button>默认按钮</el-button>\n  <el-button type=\"primary\">主要按钮</el-button>\n  <el-button type=\"success\">成功按钮</el-button>\n  <el-button type=\"info\">信息按钮</el-button>\n  <el-button type=\"warning\">警告按钮</el-button>\n  <el-button type=\"danger\">危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain>朴素按钮</el-button>\n  <el-button type=\"primary\" plain>主要按钮</el-button>\n  <el-button type=\"success\" plain>成功按钮</el-button>\n  <el-button type=\"info\" plain>信息按钮</el-button>\n  <el-button type=\"warning\" plain>警告按钮</el-button>\n  <el-button type=\"danger\" plain>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button round>圆角按钮</el-button>\n  <el-button type=\"primary\" round>主要按钮</el-button>\n  <el-button type=\"success\" round>成功按钮</el-button>\n  <el-button type=\"info\" round>信息按钮</el-button>\n  <el-button type=\"warning\" round>警告按钮</el-button>\n  <el-button type=\"danger\" round>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button icon=\"el-icon-search\" circle></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-edit\" circle></el-button>\n  <el-button type=\"success\" icon=\"el-icon-check\" circle></el-button>\n  <el-button type=\"info\" icon=\"el-icon-message\" circle></el-button>\n  <el-button type=\"warning\" icon=\"el-icon-star-off\" circle></el-button>\n  <el-button type=\"danger\" icon=\"el-icon-delete\" circle></el-button>\n</el-row> \n                      </Preview>";
const Demo1 = {};
if (Demo1.methods) {
                      Demo1.methods.source = function () {
                        return "<el-row>\n  <el-button disabled>默认按钮</el-button>\n  <el-button type=\"primary\" disabled>主要按钮</el-button>\n  <el-button type=\"success\" disabled>成功按钮</el-button>\n  <el-button type=\"info\" disabled>信息按钮</el-button>\n  <el-button type=\"warning\" disabled>警告按钮</el-button>\n  <el-button type=\"danger\" disabled>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain disabled>朴素按钮</el-button>\n  <el-button type=\"primary\" plain disabled>主要按钮</el-button>\n  <el-button type=\"success\" plain disabled>成功按钮</el-button>\n  <el-button type=\"info\" plain disabled>信息按钮</el-button>\n  <el-button type=\"warning\" plain disabled>警告按钮</el-button>\n  <el-button type=\"danger\" plain disabled>危险按钮</el-button>\n</el-row>\n"
                      };
                    } else {
                      Demo1.methods = {
                        source() {
                          return "<el-row>\n  <el-button disabled>默认按钮</el-button>\n  <el-button type=\"primary\" disabled>主要按钮</el-button>\n  <el-button type=\"success\" disabled>成功按钮</el-button>\n  <el-button type=\"info\" disabled>信息按钮</el-button>\n  <el-button type=\"warning\" disabled>警告按钮</el-button>\n  <el-button type=\"danger\" disabled>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain disabled>朴素按钮</el-button>\n  <el-button type=\"primary\" plain disabled>主要按钮</el-button>\n  <el-button type=\"success\" plain disabled>成功按钮</el-button>\n  <el-button type=\"info\" plain disabled>信息按钮</el-button>\n  <el-button type=\"warning\" plain disabled>警告按钮</el-button>\n  <el-button type=\"danger\" plain disabled>危险按钮</el-button>\n</el-row>\n"
                        },
                      };
                    }
Demo1.template = "<Preview :source=\"source()\">\n                        <el-row>\n  <el-button disabled>默认按钮</el-button>\n  <el-button type=\"primary\" disabled>主要按钮</el-button>\n  <el-button type=\"success\" disabled>成功按钮</el-button>\n  <el-button type=\"info\" disabled>信息按钮</el-button>\n  <el-button type=\"warning\" disabled>警告按钮</el-button>\n  <el-button type=\"danger\" disabled>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain disabled>朴素按钮</el-button>\n  <el-button type=\"primary\" plain disabled>主要按钮</el-button>\n  <el-button type=\"success\" plain disabled>成功按钮</el-button>\n  <el-button type=\"info\" plain disabled>信息按钮</el-button>\n  <el-button type=\"warning\" plain disabled>警告按钮</el-button>\n  <el-button type=\"danger\" plain disabled>危险按钮</el-button>\n</el-row> \n                      </Preview>";
const Demo2 = {};
if (Demo2.methods) {
                      Demo2.methods.source = function () {
                        return "<el-button type=\"text\">文字按钮</el-button>\n<el-button type=\"text\" disabled>文字按钮</el-button>\n"
                      };
                    } else {
                      Demo2.methods = {
                        source() {
                          return "<el-button type=\"text\">文字按钮</el-button>\n<el-button type=\"text\" disabled>文字按钮</el-button>\n"
                        },
                      };
                    }
Demo2.template = "<Preview :source=\"source()\">\n                        <el-button type=\"text\">文字按钮</el-button>\n<el-button type=\"text\" disabled>文字按钮</el-button> \n                      </Preview>";
const Demo3 = {};
if (Demo3.methods) {
                      Demo3.methods.source = function () {
                        return "<el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button>\n<el-button type=\"primary\">\n  上传<i class=\"el-icon-upload el-icon--right\"></i>\n</el-button>\n"
                      };
                    } else {
                      Demo3.methods = {
                        source() {
                          return "<el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button>\n<el-button type=\"primary\">\n  上传<i class=\"el-icon-upload el-icon--right\"></i>\n</el-button>\n"
                        },
                      };
                    }
Demo3.template = "<Preview :source=\"source()\">\n                        <el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button>\n<el-button type=\"primary\">\n  上传<i class=\"el-icon-upload el-icon--right\"></i>\n</el-button> \n                      </Preview>";
const Demo4 = {};
if (Demo4.methods) {
                      Demo4.methods.source = function () {
                        return "<el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-arrow-left\">上一页</el-button>\n  <el-button type=\"primary\"\n    >下一页<i class=\"el-icon-arrow-right el-icon--right\"></i\n  ></el-button>\n</el-button-group>\n<el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n</el-button-group>\n"
                      };
                    } else {
                      Demo4.methods = {
                        source() {
                          return "<el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-arrow-left\">上一页</el-button>\n  <el-button type=\"primary\"\n    >下一页<i class=\"el-icon-arrow-right el-icon--right\"></i\n  ></el-button>\n</el-button-group>\n<el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n</el-button-group>\n"
                        },
                      };
                    }
Demo4.template = "<Preview :source=\"source()\">\n                        <el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-arrow-left\">上一页</el-button>\n  <el-button type=\"primary\"\n    >下一页<i class=\"el-icon-arrow-right el-icon--right\"></i\n  ></el-button>\n</el-button-group>\n<el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n</el-button-group> \n                      </Preview>";
const Demo5 = {};
if (Demo5.methods) {
                      Demo5.methods.source = function () {
                        return "<el-button type=\"primary\" :loading=\"true\">加载中</el-button>\n"
                      };
                    } else {
                      Demo5.methods = {
                        source() {
                          return "<el-button type=\"primary\" :loading=\"true\">加载中</el-button>\n"
                        },
                      };
                    }
Demo5.template = "<Preview :source=\"source()\">\n                        <el-button type=\"primary\" :loading=\"true\">加载中</el-button> \n                      </Preview>";
const Demo6 = {};
if (Demo6.methods) {
                      Demo6.methods.source = function () {
                        return "<el-row>\n  <el-button>默认按钮</el-button>\n  <el-button size=\"medium\">中等按钮</el-button>\n  <el-button size=\"small\">小型按钮</el-button>\n  <el-button size=\"mini\">超小按钮</el-button>\n</el-row>\n<el-row>\n  <el-button round>默认按钮</el-button>\n  <el-button size=\"medium\" round>中等按钮</el-button>\n  <el-button size=\"small\" round>小型按钮</el-button>\n  <el-button size=\"mini\" round>超小按钮</el-button>\n</el-row>\n"
                      };
                    } else {
                      Demo6.methods = {
                        source() {
                          return "<el-row>\n  <el-button>默认按钮</el-button>\n  <el-button size=\"medium\">中等按钮</el-button>\n  <el-button size=\"small\">小型按钮</el-button>\n  <el-button size=\"mini\">超小按钮</el-button>\n</el-row>\n<el-row>\n  <el-button round>默认按钮</el-button>\n  <el-button size=\"medium\" round>中等按钮</el-button>\n  <el-button size=\"small\" round>小型按钮</el-button>\n  <el-button size=\"mini\" round>超小按钮</el-button>\n</el-row>\n"
                        },
                      };
                    }
Demo6.template = "<Preview :source=\"source()\">\n                        <el-row>\n  <el-button>默认按钮</el-button>\n  <el-button size=\"medium\">中等按钮</el-button>\n  <el-button size=\"small\">小型按钮</el-button>\n  <el-button size=\"mini\">超小按钮</el-button>\n</el-row>\n<el-row>\n  <el-button round>默认按钮</el-button>\n  <el-button size=\"medium\" round>中等按钮</el-button>\n  <el-button size=\"small\" round>小型按钮</el-button>\n  <el-button size=\"mini\" round>超小按钮</el-button>\n</el-row> \n                      </Preview>";
            
          const __script = defineComponent({
            components: {
              Demo0,Demo1,Demo2,Demo3,Demo4,Demo5,Demo6
            },
            template: "<h2>Button 按钮</h2>\n<p>常用的操作按钮。</p>\n<h3>基础用法</h3>\n<p>基础的按钮用法。</p>\n<div class=\"demo\">\n<p>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p>\n<pre></pre><Demo0 />\n</div>\n<h3>禁用状态</h3>\n<p>按钮不可用状态。</p>\n<div class=\"demo\">\n<pre></pre><Demo1 />\n</div>\n<h3>文字按钮</h3>\n<p>没有边框和背景色的按钮。</p>\n<div class=\"demo\">\n<pre></pre><Demo2 />\n</div>\n<h3>图标按钮</h3>\n<p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>\n<div class=\"demo\">\n<pre></pre><Demo3 />\n</div>\n<h3>按钮组</h3>\n<p>以按钮组的方式出现，常用于多项类似操作。</p>\n<div class=\"demo\">\n<pre></pre><Demo4 />\n</div>\n<h3>加载中</h3>\n<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>\n<div class=\"demo\">\n<p>要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。</p>\n<pre></pre><Demo5 />\n</div>\n<h3>不同尺寸</h3>\n<p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>\n<div class=\"demo\">\n<pre></pre><Demo6 />\n</div>\n<h3>Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>string</td>\n<td>medium / small / mini</td>\n<td>—</td>\n</tr>\n<tr>\n<td>type</td>\n<td>类型</td>\n<td>string</td>\n<td>primary / success / warning / danger / info / text</td>\n<td>—</td>\n</tr>\n<tr>\n<td>plain</td>\n<td>是否朴素按钮</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>round</td>\n<td>是否圆角按钮</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>circle</td>\n<td>是否圆形按钮</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>是否加载中状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标类名</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>autofocus</td>\n<td>是否默认聚焦</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>native-type</td>\n<td>原生 type 属性</td>\n<td>string</td>\n<td>button / submit / reset</td>\n<td>button</td>\n</tr>\n</tbody>\n</table>\n"
          });

export default __script;
