import { d as defineComponent, E as ElMenu, z as ElMenuItem, r as resolveComponent, c as createBlock, o as openBlock, w as withCtx, b as createVNode, e as createTextVNode, _ as _toDisplayString } from './index.c7be9c13.js';
import { s as script$1 } from './common.8e381961.js';

var script = defineComponent({
  components: {
    Preview: script$1,
    ElMenu,
    ElMenuItem
  },
  setup(props, {attrs, slots, emit}) {
    return {};
  }
});

const _hoisted_1 = /*#__PURE__*/createTextVNode("处理中心");
const _hoisted_2 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_3 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_4 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_5 = /*#__PURE__*/createTextVNode("消息中心");
const _hoisted_6 = /*#__PURE__*/createVNode("a", {
  href: "https://elenext.now.sh/",
  target: "_blank"
}, "elenext", -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/createTextVNode("处理中心");
const _hoisted_8 = /*#__PURE__*/createTextVNode("我的工作台");
const _hoisted_9 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_10 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_11 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_12 = /*#__PURE__*/createTextVNode("消息中心");
const _hoisted_13 = /*#__PURE__*/createVNode("a", {
  href: "https://www.ele.me",
  target: "_blank"
}, "订单管理", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      `), 1 /* TEXT */);

function render(_ctx, _cache) {
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_Preview = resolveComponent("Preview");

  return (openBlock(), createBlock(_component_Preview, { title: "顶栏" }, {
    template: withCtx(() => [
      _hoisted_14
    ]),
    default: withCtx(() => [
      createVNode(_component_el_menu, {
        class: "el-menu-demo",
        mode: "horizontal",
        onSelect: _cache[1] || (_cache[1] = $event => (_ctx.handleSelect($event)))
      }, {
        default: withCtx(() => [
          createVNode(_component_el_menu_item, { index: "1" }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "2-1" }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "2-2" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "2-3" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "4" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_el_menu, {
        class: "el-menu-demo",
        mode: "horizontal",
        "background-color": "#545c64",
        "text-color": "#fff",
        "active-text-color": "#ffd04b",
        onSelect: _cache[2] || (_cache[2] = $event => (_ctx.handleSelect($event)))
      }, {
        title: withCtx(() => [
          _hoisted_8
        ]),
        default: withCtx(() => [
          createVNode(_component_el_menu_item, { index: "1" }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "2-1" }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "2-2" }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "2-3" }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "4" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }))
}

script.render = render;

export default script;
