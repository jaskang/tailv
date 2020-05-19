import { d as defineComponent, m as script$7, a as script$5, c as createBlock, b as createVNode, w as withCtx, F as Fragment, r as resolveComponent, o as openBlock, e as createTextVNode } from './index.js';

var script = defineComponent({
  components: {
    ElIcon: script$7,
    ElButton: script$5
  }
});

const _hoisted_1 = /*#__PURE__*/createVNode("h1", null, "Icon 图标", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createVNode("h2", null, "使用方法", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createTextVNode("搜索");
const _hoisted_4 = /*#__PURE__*/createVNode("h2", null, "图标集合", -1 /* HOISTED */);

function render(_ctx, _cache) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createVNode(_component_el_icon, { name: "edit" }),
    createVNode(_component_el_icon, { name: "share" }),
    createVNode(_component_el_icon, { name: "delete" }),
    createVNode(_component_el_button, {
      type: "primary",
      icon: "el-icon-search"
    }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    _hoisted_4
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;

export default script;
