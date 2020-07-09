import { d as defineComponent } from './index.3bc71503.js';

const Demo0 = defineComponent({
                  template: "<el-row>\n  <el-button>默认按钮</el-button>\n  <el-button type=\"primary\">主要按钮</el-button>\n  <el-button type=\"success\">成功按钮</el-button>\n  <el-button type=\"info\">信息按钮</el-button>\n  <el-button type=\"warning\">警告按钮</el-button>\n  <el-button type=\"danger\">危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain>朴素按钮</el-button>\n  <el-button type=\"primary\" plain>主要按钮</el-button>\n  <el-button type=\"success\" plain>成功按钮</el-button>\n  <el-button type=\"info\" plain>信息按钮</el-button>\n  <el-button type=\"warning\" plain>警告按钮</el-button>\n  <el-button type=\"danger\" plain>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button round>圆角按钮</el-button>\n  <el-button type=\"primary\" round>主要按钮</el-button>\n  <el-button type=\"success\" round>成功按钮</el-button>\n  <el-button type=\"info\" round>信息按钮</el-button>\n  <el-button type=\"warning\" round>警告按钮</el-button>\n  <el-button type=\"danger\" round>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button icon=\"el-icon-search\" circle></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-edit\" circle></el-button>\n  <el-button type=\"success\" icon=\"el-icon-check\" circle></el-button>\n  <el-button type=\"info\" icon=\"el-icon-message\" circle></el-button>\n  <el-button type=\"warning\" icon=\"el-icon-star-off\" circle></el-button>\n  <el-button type=\"danger\" icon=\"el-icon-delete\" circle></el-button>\n</el-row>\n"
                });
                
                const Demo1 = defineComponent({
                  template: "<el-row>\n  <el-button disabled>默认按钮</el-button>\n  <el-button type=\"primary\" disabled>主要按钮</el-button>\n  <el-button type=\"success\" disabled>成功按钮</el-button>\n  <el-button type=\"info\" disabled>信息按钮</el-button>\n  <el-button type=\"warning\" disabled>警告按钮</el-button>\n  <el-button type=\"danger\" disabled>危险按钮</el-button>\n</el-row>\n\n<el-row>\n  <el-button plain disabled>朴素按钮</el-button>\n  <el-button type=\"primary\" plain disabled>主要按钮</el-button>\n  <el-button type=\"success\" plain disabled>成功按钮</el-button>\n  <el-button type=\"info\" plain disabled>信息按钮</el-button>\n  <el-button type=\"warning\" plain disabled>警告按钮</el-button>\n  <el-button type=\"danger\" plain disabled>危险按钮</el-button>\n</el-row>\n"
                });
                
                const Demo2 = defineComponent({
                  template: "<el-button type=\"text\">文字按钮</el-button>\n<el-button type=\"text\" disabled>文字按钮</el-button>\n"
                });
                
                const Demo3 = defineComponent({
                  template: "<el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n<el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button>\n<el-button type=\"primary\"\n  >上传<i class=\"el-icon-upload el-icon--right\"></i\n></el-button>\n"
                });
                
                const Demo4 = defineComponent({
                  template: "<el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-arrow-left\">上一页</el-button>\n  <el-button type=\"primary\"\n    >下一页<i class=\"el-icon-arrow-right el-icon--right\"></i\n  ></el-button>\n</el-button-group>\n<el-button-group>\n  <el-button type=\"primary\" icon=\"el-icon-edit\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-share\"></el-button>\n  <el-button type=\"primary\" icon=\"el-icon-delete\"></el-button>\n</el-button-group>\n"
                });
                
                const Demo5 = defineComponent({
                  template: "<el-button type=\"primary\" :loading=\"true\">加载中</el-button>\n"
                });
                
                const Demo6 = defineComponent({
                  template: "<el-row>\n  <el-button>默认按钮</el-button>\n  <el-button size=\"medium\">中等按钮</el-button>\n  <el-button size=\"small\">小型按钮</el-button>\n  <el-button size=\"mini\">超小按钮</el-button>\n</el-row>\n<el-row>\n  <el-button round>默认按钮</el-button>\n  <el-button size=\"medium\" round>中等按钮</el-button>\n  <el-button size=\"small\" round>小型按钮</el-button>\n  <el-button size=\"mini\" round>超小按钮</el-button>\n</el-row>\n"
                });
                
          
        const __script = defineComponent({
          components: {
            Demo0,Demo1,Demo2,Demo3,Demo4,Demo5,Demo6
          },
          template: "<h2>Button 按钮</h2>\n<p>常用的操作按钮。</p>\n<h3>基础用法</h3>\n<p>基础的按钮用法。</p>\n<p>:::demo 使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p>\n<pre><code class=\"language-html\"><Demo0></Demo0></code></pre>\n<p>:::</p>\n<h3>禁用状态</h3>\n<p>按钮不可用状态。</p>\n<p>:::demo 你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>\n<pre><code class=\"language-html\"><Demo1></Demo1></code></pre>\n<p>:::</p>\n<h3>文字按钮</h3>\n<p>没有边框和背景色的按钮。</p>\n<p>:::demo</p>\n<pre><code class=\"language-html\"><Demo2></Demo2></code></pre>\n<p>:::</p>\n<h3>图标按钮</h3>\n<p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>\n<p>:::demo 设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可以使用自定义图标。</p>\n<pre><code class=\"language-html\"><Demo3></Demo3></code></pre>\n<p>:::</p>\n<h3>按钮组</h3>\n<p>以按钮组的方式出现，常用于多项类似操作。</p>\n<p>:::demo 使用<code>&lt;el-button-group&gt;</code>标签来嵌套你的按钮。</p>\n<pre><code class=\"language-html\"><Demo4></Demo4></code></pre>\n<p>:::</p>\n<h3>加载中</h3>\n<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>\n<p>:::demo 要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。</p>\n<pre><code class=\"language-html\"><Demo5></Demo5></code></pre>\n<p>:::</p>\n<h3>不同尺寸</h3>\n<p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>\n<p>:::demo 额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>\n<pre><code class=\"language-html\"><Demo6></Demo6></code></pre>\n<p>:::</p>\n<h3>Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>string</td>\n<td>medium / small / mini</td>\n<td>—</td>\n</tr>\n<tr>\n<td>type</td>\n<td>类型</td>\n<td>string</td>\n<td>primary / success / warning / danger / info / text</td>\n<td>—</td>\n</tr>\n<tr>\n<td>plain</td>\n<td>是否朴素按钮</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>round</td>\n<td>是否圆角按钮</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>circle</td>\n<td>是否圆形按钮</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>是否加载中状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标类名</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>autofocus</td>\n<td>是否默认聚焦</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>native-type</td>\n<td>原生 type 属性</td>\n<td>string</td>\n<td>button / submit / reset</td>\n<td>button</td>\n</tr>\n</tbody>\n</table>\n"
        });

export default __script;
