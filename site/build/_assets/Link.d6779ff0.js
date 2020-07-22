let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = "";document.head.appendChild(__VITE_CSS__);import { d as defineComponent } from './index.17ad1f53.js';

const Demo0 = {};
if (Demo0.methods) {
                      Demo0.methods.source = function () {
                        return "<div>\n  <el-link href=\"https://element.eleme.io\" target=\"_blank\">默认链接</el-link>\n  <el-link type=\"primary\">主要链接</el-link>\n  <el-link type=\"success\">成功链接</el-link>\n  <el-link type=\"warning\">警告链接</el-link>\n  <el-link type=\"danger\">危险链接</el-link>\n  <el-link type=\"info\">信息链接</el-link>\n</div>\n"
                      };
                    } else {
                      Demo0.methods = {
                        source() {
                          return "<div>\n  <el-link href=\"https://element.eleme.io\" target=\"_blank\">默认链接</el-link>\n  <el-link type=\"primary\">主要链接</el-link>\n  <el-link type=\"success\">成功链接</el-link>\n  <el-link type=\"warning\">警告链接</el-link>\n  <el-link type=\"danger\">危险链接</el-link>\n  <el-link type=\"info\">信息链接</el-link>\n</div>\n"
                        },
                      };
                    }
Demo0.template = "<Preview :source=\"source()\">\n                        <div>\n  <el-link href=\"https://element.eleme.io\" target=\"_blank\">默认链接</el-link>\n  <el-link type=\"primary\">主要链接</el-link>\n  <el-link type=\"success\">成功链接</el-link>\n  <el-link type=\"warning\">警告链接</el-link>\n  <el-link type=\"danger\">危险链接</el-link>\n  <el-link type=\"info\">信息链接</el-link>\n</div> \n                      </Preview>";
const Demo1 = {};
if (Demo1.methods) {
                      Demo1.methods.source = function () {
                        return "<div>\n  <el-link disabled>默认链接</el-link>\n  <el-link type=\"primary\" disabled>主要链接</el-link>\n  <el-link type=\"success\" disabled>成功链接</el-link>\n  <el-link type=\"warning\" disabled>警告链接</el-link>\n  <el-link type=\"danger\" disabled>危险链接</el-link>\n  <el-link type=\"info\" disabled>信息链接</el-link>\n</div>\n"
                      };
                    } else {
                      Demo1.methods = {
                        source() {
                          return "<div>\n  <el-link disabled>默认链接</el-link>\n  <el-link type=\"primary\" disabled>主要链接</el-link>\n  <el-link type=\"success\" disabled>成功链接</el-link>\n  <el-link type=\"warning\" disabled>警告链接</el-link>\n  <el-link type=\"danger\" disabled>危险链接</el-link>\n  <el-link type=\"info\" disabled>信息链接</el-link>\n</div>\n"
                        },
                      };
                    }
Demo1.template = "<Preview :source=\"source()\">\n                        <div>\n  <el-link disabled>默认链接</el-link>\n  <el-link type=\"primary\" disabled>主要链接</el-link>\n  <el-link type=\"success\" disabled>成功链接</el-link>\n  <el-link type=\"warning\" disabled>警告链接</el-link>\n  <el-link type=\"danger\" disabled>危险链接</el-link>\n  <el-link type=\"info\" disabled>信息链接</el-link>\n</div> \n                      </Preview>";
const Demo2 = {};
if (Demo2.methods) {
                      Demo2.methods.source = function () {
                        return "<div>\n  <el-link :underline=\"false\">无下划线</el-link>\n  <el-link>有下划线</el-link>\n</div>\n"
                      };
                    } else {
                      Demo2.methods = {
                        source() {
                          return "<div>\n  <el-link :underline=\"false\">无下划线</el-link>\n  <el-link>有下划线</el-link>\n</div>\n"
                        },
                      };
                    }
Demo2.template = "<Preview :source=\"source()\">\n                        <div>\n  <el-link :underline=\"false\">无下划线</el-link>\n  <el-link>有下划线</el-link>\n</div> \n                      </Preview>";
const Demo3 = {};
if (Demo3.methods) {
                      Demo3.methods.source = function () {
                        return "<div>\n  <el-link icon=\"el-icon-edit\">编辑</el-link>\n  <el-link>查看<i class=\"el-icon-view el-icon--right\"></i> </el-link>\n</div>\n"
                      };
                    } else {
                      Demo3.methods = {
                        source() {
                          return "<div>\n  <el-link icon=\"el-icon-edit\">编辑</el-link>\n  <el-link>查看<i class=\"el-icon-view el-icon--right\"></i> </el-link>\n</div>\n"
                        },
                      };
                    }
Demo3.template = "<Preview :source=\"source()\">\n                        <div>\n  <el-link icon=\"el-icon-edit\">编辑</el-link>\n  <el-link>查看<i class=\"el-icon-view el-icon--right\"></i> </el-link>\n</div> \n                      </Preview>";
            
          const __script = defineComponent({
            components: {
              Demo0,Demo1,Demo2,Demo3
            },
            template: "<h2>Link 文字链接</h2>\n<p>文字超链接</p>\n<h3>基础用法</h3>\n<p>基础的文字链接用法。</p>\n<div class=\"demo\">\n<pre></pre><Demo0 />\n</div>\n<h3>禁用状态</h3>\n<p>文字链接不可用状态。</p>\n<div class=\"demo\">\n<pre></pre><Demo1 />\n</div>\n<h3>下划线</h3>\n<p>文字链接下划线。</p>\n<div class=\"demo\">\n<pre></pre><Demo2 />\n</div>\n<h3>图标</h3>\n<p>带图标的文字链接可增强辨识度。</p>\n<div class=\"demo\">\n<pre></pre><Demo3 />\n</div>\n<h3>Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>类型</td>\n<td>string</td>\n<td>primary / success / warning / danger / info</td>\n<td>default</td>\n</tr>\n<tr>\n<td>underline</td>\n<td>是否下划线</td>\n<td>boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>href</td>\n<td>原生 href 属性</td>\n<td>string</td>\n<td>—</td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标类名</td>\n<td>string</td>\n<td>—</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n"
          });

export default __script;
