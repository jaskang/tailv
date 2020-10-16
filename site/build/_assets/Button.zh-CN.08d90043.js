let __VITE_CSS__ = document.createElement("style");
__VITE_CSS__.innerHTML = "";
document.head.appendChild(__VITE_CSS__);
import {r as resolveComponent, o as openBlock, c as createBlock, w as withCtx, a as createVNode, b as createTextVNode, d as defineComponent, e as ref, f as reactive, t as toRefs, g as toDisplayString, h as createStaticVNode} from "./index.0b34e360.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("button");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("primary button");
function render(_ctx, _cache) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_row = resolveComponent("el-row");
  return openBlock(), createBlock(_component_el_row, null, {
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
      })
    ]),
    _: 1
  });
}
const script = {};
script.render = render;
script.__file = "src/docs/Button.zh-CN.md/VUEDEMO_0.vue";
var script$1 = {
  methods: {
    testclick() {
      alert("testclick111222");
    }
  }
};
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
      })
    ]),
    _: 1
  });
}
script$1.render = render$1;
script$1.__file = "src/docs/Button.zh-CN.md/VUEDEMO_1.vue";
const script$2 = defineComponent({
  components: {
    VUEDEMO_0: script,
    VUEDEMO_1: script$1
  },
  setup(props) {
    const VUEDEMO_0Ref = ref();
    const VUEDEMO_1Ref = ref();
    const refs = [VUEDEMO_0Ref, VUEDEMO_1Ref];
    const state = reactive({
      VUEDEMO_0Height: 0,
      VUEDEMO_1Height: 0
    });
    const toggleCode = (index) => {
      var _a;
      const id = "VUEDEMO_" + index;
      console.log(id, refs);
      if (state[id + "Height"] === 0) {
        state[id + "Height"] = ((_a = refs[index].value) == null ? void 0 : _a.offsetHeight) || 0;
      } else {
        state[id + "Height"] = 0;
      }
    };
    return {
      toggleCode,
      ...toRefs(state),
      VUEDEMO_0Ref,
      VUEDEMO_1Ref
    };
  }
});
script$2.matter = {};
const _hoisted_1$1 = {class: "vuedoc"};
const _hoisted_2$1 = /* @__PURE__ */ createVNode("h1", null, "vite-plugin-vuedoc", -1);
const _hoisted_3 = /* @__PURE__ */ createVNode("p", null, "demo preview", -1);
const _hoisted_4 = /* @__PURE__ */ createVNode("h3", null, "Button", -1);
const _hoisted_5 = /* @__PURE__ */ createVNode("p", null, "description", -1);
const _hoisted_6 = /* @__PURE__ */ createVNode("blockquote", null, [
  /* @__PURE__ */ createVNode("p", null, "demo need vue code wrapped")
], -1);
const _hoisted_7 = /* @__PURE__ */ createVNode("pre", {style: {display: "none"}}, null, -1);
const _hoisted_8 = {class: "vuedoc-demo"};
const _hoisted_9 = {class: "vuedoc-demo__inner"};
const _hoisted_10 = {class: "vuedoc-demo__preview"};
const _hoisted_11 = {
  ref: "VUEDEMO_0Ref",
  class: "vuedoc-demo__sourceref"
};
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>primary button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre>', 1);
const _hoisted_13 = /* @__PURE__ */ createVNode("h3", null, "Icon Button", -1);
const _hoisted_14 = /* @__PURE__ */ createVNode("p", null, "description", -1);
const _hoisted_15 = /* @__PURE__ */ createVNode("blockquote", null, [
  /* @__PURE__ */ createVNode("p", null, "demo need vue code wrapped")
], -1);
const _hoisted_16 = /* @__PURE__ */ createVNode("pre", {style: {display: "none"}}, null, -1);
const _hoisted_17 = {class: "vuedoc-demo"};
const _hoisted_18 = {class: "vuedoc-demo__inner"};
const _hoisted_19 = {class: "vuedoc-demo__preview"};
const _hoisted_20 = {
  ref: "VUEDEMO_1Ref",
  class: "vuedoc-demo__sourceref"
};
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-edit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testclick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-share<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-delete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">testclick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;testclick111222&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre>', 1);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode("<h3>Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning / danger / info / text</td><td>—</td></tr></tbody></table>", 2);
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VUEDEMO_0 = resolveComponent("VUEDEMO_0");
  const _component_VUEDEMO_1 = resolveComponent("VUEDEMO_1");
  return openBlock(), createBlock("div", _hoisted_1$1, [
    _hoisted_2$1,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
    createVNode("div", _hoisted_8, [
      createVNode("div", _hoisted_9, [
        createVNode("div", _hoisted_10, [
          createVNode(_component_VUEDEMO_0)
        ]),
        createVNode("div", {
          style: {height: _ctx.VUEDEMO_0Height + "px"},
          class: "vuedoc-demo__source"
        }, [
          createVNode("div", _hoisted_11, [
            _hoisted_12
          ], 512)
        ], 4),
        createVNode("div", {
          class: "vuedoc-demo__footer",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.toggleCode(0))
        }, toDisplayString(_ctx.VUEDEMO_0Height > 0 ? "隐藏代码" : "显示代码"), 1)
      ])
    ]),
    _hoisted_13,
    _hoisted_14,
    _hoisted_15,
    _hoisted_16,
    createVNode("div", _hoisted_17, [
      createVNode("div", _hoisted_18, [
        createVNode("div", _hoisted_19, [
          createVNode(_component_VUEDEMO_1)
        ]),
        createVNode("div", {
          style: {height: _ctx.VUEDEMO_1Height + "px"},
          class: "vuedoc-demo__source"
        }, [
          createVNode("div", _hoisted_20, [
            _hoisted_21
          ], 512)
        ], 4),
        createVNode("div", {
          class: "vuedoc-demo__footer",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.toggleCode(1))
        }, toDisplayString(_ctx.VUEDEMO_1Height > 0 ? "隐藏代码" : "显示代码"), 1)
      ])
    ]),
    _hoisted_22
  ]);
}
script$2.render = render$2;
script$2.__file = "src/docs/Button.zh-CN.md";
export default script$2;
