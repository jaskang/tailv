import { d as defineComponent, m as script$2, p as script$1$1, q as script$2$1, u as script$3, v as script$4, r as resolveComponent, c as createBlock, b as createVNode, w as withCtx, o as openBlock, e as createTextVNode, _ as _toDisplayString } from './index.f9e62f49.js';
import { s as script$1 } from './Preview.6ebac9db.js';

var script = defineComponent({
  components: {
    Preview: script$1,
    ElContainer: script$2,
    ElAside: script$1$1,
    ElFooter: script$2$1,
    ElHeader: script$3,
    ElMain: script$4
  }
});

const _hoisted_1 = { class: "demo-el-container" };
const _hoisted_2 = /*#__PURE__*/createVNode("h1", null, "ElContainer", -1);
const _hoisted_3 = /*#__PURE__*/createTextVNode("Header");
const _hoisted_4 = /*#__PURE__*/createTextVNode("Main");
const _hoisted_5 = /*#__PURE__*/createTextVNode("Header");
const _hoisted_6 = /*#__PURE__*/createTextVNode("Main");
const _hoisted_7 = /*#__PURE__*/createTextVNode("Footer");
const _hoisted_8 = /*#__PURE__*/createTextVNode("Aside");
const _hoisted_9 = /*#__PURE__*/createTextVNode("Main");
const _hoisted_10 = /*#__PURE__*/createTextVNode("Header");
const _hoisted_11 = /*#__PURE__*/createTextVNode("Aside");
const _hoisted_12 = /*#__PURE__*/createTextVNode("Main");
const _hoisted_13 = /*#__PURE__*/createTextVNode("Header");
const _hoisted_14 = /*#__PURE__*/createTextVNode("Aside");
const _hoisted_15 = /*#__PURE__*/createTextVNode("Main");
const _hoisted_16 = /*#__PURE__*/createTextVNode("Footer");
const _hoisted_17 = /*#__PURE__*/createTextVNode("Aside");
const _hoisted_18 = /*#__PURE__*/createTextVNode("Header");
const _hoisted_19 = /*#__PURE__*/createTextVNode("Main");
const _hoisted_20 = /*#__PURE__*/createTextVNode("Aside");
const _hoisted_21 = /*#__PURE__*/createTextVNode("Header");
const _hoisted_22 = /*#__PURE__*/createTextVNode("Main");
const _hoisted_23 = /*#__PURE__*/createTextVNode("Footer");
const _hoisted_24 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>

        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container direction="horizontal">
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container direction="horizontal">
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </el-container>

        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container direction="horizontal">
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
        `), 1 /* TEXT */);

function render(_ctx, _cache) {
  const _component_el_header = resolveComponent("el-header");
  const _component_el_main = resolveComponent("el-main");
  const _component_el_container = resolveComponent("el-container");
  const _component_el_footer = resolveComponent("el-footer");
  const _component_el_aside = resolveComponent("el-aside");
  const _component_Preview = resolveComponent("Preview");

  return (openBlock(), createBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_Preview, { title: "常见页面布局" }, {
      template: withCtx(() => [
        _hoisted_24
      ]),
      default: withCtx(() => [
        createVNode(_component_el_container, null, {
          default: withCtx(() => [
            createVNode(_component_el_header, null, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }),
            createVNode(_component_el_main, null, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_container, null, {
          default: withCtx(() => [
            createVNode(_component_el_header, null, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            }),
            createVNode(_component_el_main, null, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            }),
            createVNode(_component_el_footer, null, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_container, { direction: "horizontal" }, {
          default: withCtx(() => [
            createVNode(_component_el_aside, { width: "200px" }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 1
            }),
            createVNode(_component_el_main, null, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_container, null, {
          default: withCtx(() => [
            createVNode(_component_el_header, null, {
              default: withCtx(() => [
                _hoisted_10
              ]),
              _: 1
            }),
            createVNode(_component_el_container, { direction: "horizontal" }, {
              default: withCtx(() => [
                createVNode(_component_el_aside, { width: "200px" }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 1
                }),
                createVNode(_component_el_main, null, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_container, null, {
          default: withCtx(() => [
            createVNode(_component_el_header, null, {
              default: withCtx(() => [
                _hoisted_13
              ]),
              _: 1
            }),
            createVNode(_component_el_container, { direction: "horizontal" }, {
              default: withCtx(() => [
                createVNode(_component_el_aside, { width: "200px" }, {
                  default: withCtx(() => [
                    _hoisted_14
                  ]),
                  _: 1
                }),
                createVNode(_component_el_container, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_main, null, {
                      default: withCtx(() => [
                        _hoisted_15
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_footer, null, {
                      default: withCtx(() => [
                        _hoisted_16
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_container, { direction: "horizontal" }, {
          default: withCtx(() => [
            createVNode(_component_el_aside, { width: "200px" }, {
              default: withCtx(() => [
                _hoisted_17
              ]),
              _: 1
            }),
            createVNode(_component_el_container, null, {
              default: withCtx(() => [
                createVNode(_component_el_header, null, {
                  default: withCtx(() => [
                    _hoisted_18
                  ]),
                  _: 1
                }),
                createVNode(_component_el_main, null, {
                  default: withCtx(() => [
                    _hoisted_19
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_container, { direction: "horizontal" }, {
          default: withCtx(() => [
            createVNode(_component_el_aside, { width: "200px" }, {
              default: withCtx(() => [
                _hoisted_20
              ]),
              _: 1
            }),
            createVNode(_component_el_container, null, {
              default: withCtx(() => [
                createVNode(_component_el_header, null, {
                  default: withCtx(() => [
                    _hoisted_21
                  ]),
                  _: 1
                }),
                createVNode(_component_el_main, null, {
                  default: withCtx(() => [
                    _hoisted_22
                  ]),
                  _: 1
                }),
                createVNode(_component_el_footer, null, {
                  default: withCtx(() => [
                    _hoisted_23
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]))
}

let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = ".demo-el-container .el-footer,.demo-el-container .el-header{background-color:#b3c0d1;color:#333;text-align:center;line-height:60px}.demo-el-container .el-aside{background-color:#d3dce6;color:#333;text-align:center;line-height:200px}.demo-el-container .el-main{background-color:#e9eef3;color:#333;text-align:center;line-height:160px}.demo-el-container body>.el-container{margin-bottom:40px}.demo-el-container .el-container:nth-child(5) .el-aside,.demo-el-container .el-container:nth-child(6) .el-aside{line-height:260px}.demo-el-container .el-container:nth-child(7) .el-aside{line-height:320px}";document.head.appendChild(__VITE_CSS__);;

script.render = render;

export default script;
