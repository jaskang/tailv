import { d as defineComponent, i as index, l as index$1, E as ElMenu, z as ElMenuItem, A as script$8, B as ElMenuItemGroup, r as resolveComponent, c as createBlock, b as createVNode, w as withCtx, F as Fragment, o as openBlock, e as createTextVNode, _ as _toDisplayString } from './index.f9e62f49.js';
import { s as script$1 } from './Preview.6ebac9db.js';

var script = defineComponent({
  components: {
    Preview: script$1,
    ElRow: index,
    ElCol: index$1,
    ElMenu,
    ElMenuItem,
    ElSubmenu: script$8,
    ElMenuItemGroup
  },
  setup(props, {attrs, slots, emit}) {
    return {};
  }
});

const _hoisted_1 = /*#__PURE__*/createTextVNode("处理中心");
const _hoisted_2 = /*#__PURE__*/createTextVNode("我的工作台");
const _hoisted_3 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_4 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_5 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_6 = /*#__PURE__*/createTextVNode("选项4");
const _hoisted_7 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_8 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_9 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_10 = /*#__PURE__*/createTextVNode("消息中心");
const _hoisted_11 = /*#__PURE__*/createVNode("a", {
  href: "https://www.ele.me",
  target: "_blank"
}, "订单管理", -1);
const _hoisted_12 = /*#__PURE__*/createVNode("div", { class: "line" }, null, -1);
const _hoisted_13 = /*#__PURE__*/createTextVNode("处理中心");
const _hoisted_14 = /*#__PURE__*/createTextVNode("我的工作台");
const _hoisted_15 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_16 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_17 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_18 = /*#__PURE__*/createTextVNode("选项4");
const _hoisted_19 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_20 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_21 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_22 = /*#__PURE__*/createTextVNode("消息中心");
const _hoisted_23 = /*#__PURE__*/createVNode("a", {
  href: "https://www.ele.me",
  target: "_blank"
}, "订单管理", -1);
const _hoisted_24 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template #title>我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template #title>我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      `), 1 /* TEXT */);
const _hoisted_25 = /*#__PURE__*/createVNode("h5", null, "默认颜色", -1);
const _hoisted_26 = /*#__PURE__*/createVNode("i", { class: "el-icon-location" }, null, -1);
const _hoisted_27 = /*#__PURE__*/createVNode("span", null, "导航一", -1);
const _hoisted_28 = /*#__PURE__*/createTextVNode("分组一");
const _hoisted_29 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_30 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_31 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_32 = /*#__PURE__*/createTextVNode("选项4");
const _hoisted_33 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_34 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_35 = /*#__PURE__*/createVNode("span", null, "导航二", -1);
const _hoisted_36 = /*#__PURE__*/createVNode("i", { class: "el-icon-document" }, null, -1);
const _hoisted_37 = /*#__PURE__*/createVNode("span", null, "导航三", -1);
const _hoisted_38 = /*#__PURE__*/createVNode("i", { class: "el-icon-setting" }, null, -1);
const _hoisted_39 = /*#__PURE__*/createVNode("span", null, "导航四", -1);
const _hoisted_40 = /*#__PURE__*/createVNode("h5", null, "自定义颜色", -1);
const _hoisted_41 = /*#__PURE__*/createVNode("i", { class: "el-icon-location" }, null, -1);
const _hoisted_42 = /*#__PURE__*/createVNode("span", null, "导航一", -1);
const _hoisted_43 = /*#__PURE__*/createTextVNode("分组一");
const _hoisted_44 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_45 = /*#__PURE__*/createTextVNode("选项2");
const _hoisted_46 = /*#__PURE__*/createTextVNode("选项3");
const _hoisted_47 = /*#__PURE__*/createTextVNode("选项4");
const _hoisted_48 = /*#__PURE__*/createTextVNode("选项1");
const _hoisted_49 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_50 = /*#__PURE__*/createVNode("span", null, "导航二", -1);
const _hoisted_51 = /*#__PURE__*/createVNode("i", { class: "el-icon-document" }, null, -1);
const _hoisted_52 = /*#__PURE__*/createVNode("span", null, "导航三", -1);
const _hoisted_53 = /*#__PURE__*/createVNode("i", { class: "el-icon-setting" }, null, -1);
const _hoisted_54 = /*#__PURE__*/createVNode("span", null, "导航四", -1);

function render(_ctx, _cache) {
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_submenu = resolveComponent("el-submenu");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_Preview = resolveComponent("Preview");
  const _component_el_menu_item_group = resolveComponent("el-menu-item-group");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");

  return (openBlock(), createBlock(Fragment, null, [
    createVNode(_component_Preview, { title: "顶栏" }, {
      template: withCtx(() => [
        _hoisted_24
      ]),
      default: withCtx(() => [
        createVNode(_component_el_menu, {
          class: "el-menu-demo",
          mode: "horizontal"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_menu_item, { index: "1" }, {
              default: withCtx(() => [
                _hoisted_1
              ]),
              _: 1
            }),
            createVNode(_component_el_submenu, { index: "2" }, {
              title: withCtx(() => [
                _hoisted_2
              ]),
              default: withCtx(() => [
                createVNode(_component_el_menu_item, { index: "2-1" }, {
                  default: withCtx(() => [
                    _hoisted_3
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item, { index: "2-2" }, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item, { index: "2-3" }, {
                  default: withCtx(() => [
                    _hoisted_5
                  ]),
                  _: 1
                }),
                createVNode(_component_el_submenu, { index: "2-4" }, {
                  title: withCtx(() => [
                    _hoisted_6
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "2-4-2" }, {
                      default: withCtx(() => [
                        _hoisted_8
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "2-4-3" }, {
                      default: withCtx(() => [
                        _hoisted_9
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_10
              ]),
              _: 1
            }),
            createVNode(_component_el_menu_item, { index: "4" }, {
              default: withCtx(() => [
                _hoisted_11
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_12,
        createVNode(_component_el_menu, {
          class: "el-menu-demo",
          mode: "horizontal",
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_menu_item, { index: "1" }, {
              default: withCtx(() => [
                _hoisted_13
              ]),
              _: 1
            }),
            createVNode(_component_el_submenu, { index: "2" }, {
              title: withCtx(() => [
                _hoisted_14
              ]),
              default: withCtx(() => [
                createVNode(_component_el_menu_item, { index: "2-1" }, {
                  default: withCtx(() => [
                    _hoisted_15
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item, { index: "2-2" }, {
                  default: withCtx(() => [
                    _hoisted_16
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item, { index: "2-3" }, {
                  default: withCtx(() => [
                    _hoisted_17
                  ]),
                  _: 1
                }),
                createVNode(_component_el_submenu, { index: "2-4" }, {
                  title: withCtx(() => [
                    _hoisted_18
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                      default: withCtx(() => [
                        _hoisted_19
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "2-4-2" }, {
                      default: withCtx(() => [
                        _hoisted_20
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "2-4-3" }, {
                      default: withCtx(() => [
                        _hoisted_21
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_22
              ]),
              _: 1
            }),
            createVNode(_component_el_menu_item, { index: "4" }, {
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
    }),
    createVNode(_component_Preview, null, {
      default: withCtx(() => [
        createVNode(_component_el_row, { class: "tac" }, {
          default: withCtx(() => [
            createVNode(_component_el_col, { span: 12 }, {
              default: withCtx(() => [
                _hoisted_25,
                createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_submenu, { index: "1" }, {
                      title: withCtx(() => [
                        _hoisted_26,
                        _hoisted_27
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_el_menu_item_group, null, {
                          title: withCtx(() => [
                            _hoisted_28
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "1-1" }, {
                              default: withCtx(() => [
                                _hoisted_29
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "1-2" }, {
                              default: withCtx(() => [
                                _hoisted_30
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_menu_item_group, { title: "分组2" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "1-3" }, {
                              default: withCtx(() => [
                                _hoisted_31
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_submenu, { index: "1-4" }, {
                          title: withCtx(() => [
                            _hoisted_32
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                              default: withCtx(() => [
                                _hoisted_33
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "2" }, {
                      title: withCtx(() => [
                        _hoisted_35
                      ]),
                      default: withCtx(() => [
                        _hoisted_34
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      title: withCtx(() => [
                        _hoisted_37
                      ]),
                      default: withCtx(() => [
                        _hoisted_36
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "4" }, {
                      title: withCtx(() => [
                        _hoisted_39
                      ]),
                      default: withCtx(() => [
                        _hoisted_38
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_col, { span: 12 }, {
              default: withCtx(() => [
                _hoisted_40,
                createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  "background-color": "#545c64",
                  "text-color": "#fff",
                  "active-text-color": "#ffd04b"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_submenu, { index: "1" }, {
                      title: withCtx(() => [
                        _hoisted_41,
                        _hoisted_42
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_el_menu_item_group, null, {
                          title: withCtx(() => [
                            _hoisted_43
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "1-1" }, {
                              default: withCtx(() => [
                                _hoisted_44
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "1-2" }, {
                              default: withCtx(() => [
                                _hoisted_45
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_menu_item_group, { title: "分组2" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "1-3" }, {
                              default: withCtx(() => [
                                _hoisted_46
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_submenu, { index: "1-4" }, {
                          title: withCtx(() => [
                            _hoisted_47
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                              default: withCtx(() => [
                                _hoisted_48
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "2" }, {
                      title: withCtx(() => [
                        _hoisted_50
                      ]),
                      default: withCtx(() => [
                        _hoisted_49
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      title: withCtx(() => [
                        _hoisted_52
                      ]),
                      default: withCtx(() => [
                        _hoisted_51
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "4" }, {
                      title: withCtx(() => [
                        _hoisted_54
                      ]),
                      default: withCtx(() => [
                        _hoisted_53
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
      ]),
      _: 1
    })
  ], 64 /* STABLE_FRAGMENT */))
}

let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = ".el-menu-vertical-demo{width:200px;min-height:400px}";document.head.appendChild(__VITE_CSS__);;

script.render = render;

export default script;
