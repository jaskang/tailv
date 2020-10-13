let __VITE_CSS__ = document.createElement("style");
__VITE_CSS__.innerHTML = "";
document.head.appendChild(__VITE_CSS__);
import {r as resolveComponent, o as openBlock, c as createBlock, a as createVNode, w as withCtx, F as Fragment, b as createTextVNode, d as defineComponent, e as createStaticVNode} from "./index.13133426.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("默认按钮ssdfsdf");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("主要按钮");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("成功按钮");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("信息按钮");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("警告按钮");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("危险按钮");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("圆角按钮");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("主要按钮");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("成功按钮");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("信息按钮");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("警告按钮");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("危险按钮");
function render(_ctx, _cache) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_row = resolveComponent("el-row");
  return openBlock(), createBlock(Fragment, null, [
    createVNode(_component_el_row, null, {
      default: withCtx(() => [
        createVNode(_component_el_button, null, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {type: "primary"}, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {type: "success"}, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {type: "info"}, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {type: "warning"}, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {type: "danger"}, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_el_row, null, {
      default: withCtx(() => [
        createVNode(_component_el_button, {shape: "round"}, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "primary",
          shape: "round"
        }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "success",
          shape: "round"
        }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "info",
          shape: "round"
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "warning",
          shape: "round"
        }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "danger",
          shape: "round"
        }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_el_row, null, {
      default: withCtx(() => [
        createVNode(_component_el_button, {
          icon: "el-icon-search",
          shape: "circle"
        }),
        createVNode(_component_el_button, {
          type: "primary",
          icon: "el-icon-edit",
          shape: "circle"
        }),
        createVNode(_component_el_button, {
          type: "success",
          icon: "el-icon-check",
          shape: "circle"
        }),
        createVNode(_component_el_button, {
          type: "info",
          icon: "el-icon-message",
          shape: "circle"
        }),
        createVNode(_component_el_button, {
          type: "warning",
          icon: "el-icon-star-off",
          shape: "circle"
        }),
        createVNode(_component_el_button, {
          type: "danger",
          icon: "el-icon-delete",
          shape: "circle"
        })
      ]),
      _: 1
    })
  ], 64);
}
const script = {};
script.render = render;
script.__file = "src/docs/Button.zh-CN.md/VueDocDemo0.vue";
var script$1 = {
  methods: {
    testclick() {
      alert("testclick");
    }
  }
};
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("搜索");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode(" 上传");
const _hoisted_3$1 = /* @__PURE__ */ createVNode("i", {class: "el-icon-upload el-icon--right"}, null, -1);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_row = resolveComponent("el-row");
  return openBlock(), createBlock(_component_el_row, null, {
    default: withCtx(() => [
      createVNode(_component_el_button, {
        type: "primary",
        icon: "el-icon-edit",
        onClick: $options.testclick
      }, null, 8, ["onClick"]),
      createVNode(_component_el_button, {
        type: "primary",
        icon: "el-icon-share"
      }),
      createVNode(_component_el_button, {
        type: "primary",
        icon: "el-icon-delete"
      }),
      createVNode(_component_el_button, {
        type: "primary",
        icon: "el-icon-search"
      }, {
        default: withCtx(() => [
          _hoisted_1$1
        ]),
        _: 1
      }),
      createVNode(_component_el_button, {type: "primary"}, {
        default: withCtx(() => [
          _hoisted_2$1,
          _hoisted_3$1
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
script$1.render = render$1;
script$1.__file = "src/docs/Button.zh-CN.md/VueDocDemo1.vue";
const script$2 = defineComponent({
  components: {
    VueDocDemo0: script,
    VueDocDemo1: script$1
  }
});
script$2.matter = {};
const _hoisted_1$2 = /* @__PURE__ */ createVNode("h2", null, "Button 按钮", -1);
const _hoisted_2$2 = /* @__PURE__ */ createVNode("p", null, "常用的操作按钮。", -1);
const _hoisted_3$2 = /* @__PURE__ */ createVNode("h3", null, "基础用法", -1);
const _hoisted_4$1 = /* @__PURE__ */ createVNode("p", null, "基础的按钮用法。", -1);
const _hoisted_5$1 = {class: "demo"};
const _hoisted_6$1 = /* @__PURE__ */ createVNode("p", null, [
  /* @__PURE__ */ createTextVNode("使用"),
  /* @__PURE__ */ createVNode("code", null, "type"),
  /* @__PURE__ */ createTextVNode("属性来定义 Button 的颜色。使用"),
  /* @__PURE__ */ createVNode("code", null, "shape"),
  /* @__PURE__ */ createTextVNode("属性来定义 Button 的样式。")
], -1);
const _hoisted_7$1 = /* @__PURE__ */ createVNode("pre", null, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createStaticVNode('<h3>禁用状态</h3><p>按钮不可用状态。</p><div class="demo"><pre><code class="language-html">&lt;el-row&gt;\n  &lt;el-button disabled&gt;默认按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;primary&quot;&gt;主要按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;success&quot;&gt;成功按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;info&quot;&gt;信息按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;warning&quot;&gt;警告按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;danger&quot;&gt;危险按钮&lt;/el-button&gt;\n&lt;/el-row&gt;\n\n&lt;el-row&gt;\n  &lt;el-button disabled shape=&quot;round&quot;&gt;圆角按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;primary&quot; shape=&quot;round&quot;&gt;主要按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;success&quot; shape=&quot;round&quot;&gt;成功按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;info&quot; shape=&quot;round&quot;&gt;信息按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;warning&quot; shape=&quot;round&quot;&gt;警告按钮&lt;/el-button&gt;\n  &lt;el-button disabled type=&quot;danger&quot; shape=&quot;round&quot;&gt;危险按钮&lt;/el-button&gt;\n&lt;/el-row&gt;\n</code></pre></div><h3>文字按钮</h3><p>没有边框和背景色的按钮。</p><div class="demo"><pre><code class="language-html">&lt;el-button type=&quot;text&quot;&gt;文字按钮&lt;/el-button&gt; &lt;el-button type=&quot;text&quot; disabled&gt;文字按钮&lt;/el-button&gt;\n</code></pre></div><h3>图标按钮</h3><p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>', 8);
const _hoisted_16 = {class: "demo"};
const _hoisted_17 = /* @__PURE__ */ createVNode("pre", null, null, -1);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<h3>按钮组</h3><p>以按钮组的方式出现，常用于多项类似操作。</p><div class="demo"><pre><code class="language-html">&lt;el-button-group&gt;\n  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-arrow-left&quot;&gt;上一页&lt;/el-button&gt;\n  &lt;el-button type=&quot;primary&quot;&gt;下一页&lt;i class=&quot;el-icon-arrow-right el-icon--right&quot;&gt;&lt;/i&gt;&lt;/el-button&gt;\n&lt;/el-button-group&gt;\n&lt;el-button-group&gt;\n  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-button&gt;\n  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-share&quot;&gt;&lt;/el-button&gt;\n  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-delete&quot;&gt;&lt;/el-button&gt;\n&lt;/el-button-group&gt;\n</code></pre></div><h3>加载中</h3><p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p><div class="demo"><p>要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。</p><pre><code class="language-html">&lt;el-button type=&quot;primary&quot; :loading=&quot;true&quot;&gt;加载中&lt;/el-button&gt;\n</code></pre></div><h3>不同尺寸</h3><p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p><div class="demo"><pre><code class="language-html">&lt;el-row&gt;\n  &lt;el-button&gt;默认按钮&lt;/el-button&gt;\n  &lt;el-button size=&quot;medium&quot;&gt;中等按钮&lt;/el-button&gt;\n  &lt;el-button size=&quot;small&quot;&gt;小型按钮&lt;/el-button&gt;\n  &lt;el-button size=&quot;mini&quot;&gt;超小按钮&lt;/el-button&gt;\n&lt;/el-row&gt;\n&lt;el-row&gt;\n  &lt;el-button type=&quot;primary&quot; shape=&quot;round&quot;&gt;默认按钮&lt;/el-button&gt;\n  &lt;el-button type=&quot;primary&quot; shape=&quot;round&quot; size=&quot;medium&quot;&gt;中等按钮&lt;/el-button&gt;\n  &lt;el-button type=&quot;primary&quot; shape=&quot;round&quot; size=&quot;small&quot;&gt;小型按钮&lt;/el-button&gt;\n  &lt;el-button type=&quot;primary&quot; shape=&quot;round&quot; size=&quot;mini&quot;&gt;超小按钮&lt;/el-button&gt;\n&lt;/el-row&gt;\n</code></pre></div><h3>Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning / danger / info / text</td><td>—</td></tr><tr><td>shape</td><td>是否朴素按钮</td><td>boolean</td><td>round / circle</td><td>-</td></tr><tr><td>loading</td><td>是否加载中状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autofocus</td><td>是否默认聚焦</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>native-type</td><td>原生 type 属性</td><td>string</td><td>button / submit / reset</td><td>button</td></tr></tbody></table>', 11);
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueDocDemo0 = resolveComponent("VueDocDemo0");
  const _component_VueDocDemo1 = resolveComponent("VueDocDemo1");
  return openBlock(), createBlock(Fragment, null, [
    _hoisted_1$2,
    _hoisted_2$2,
    _hoisted_3$2,
    _hoisted_4$1,
    createVNode("div", _hoisted_5$1, [
      _hoisted_6$1,
      _hoisted_7$1,
      createVNode(_component_VueDocDemo0)
    ]),
    _hoisted_8$1,
    createVNode("div", _hoisted_16, [
      _hoisted_17,
      createVNode(_component_VueDocDemo1)
    ]),
    _hoisted_18
  ], 64);
}
script$2.render = render$2;
script$2.__file = "src/docs/Button.zh-CN.md";
export default script$2;
