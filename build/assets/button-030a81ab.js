import { d as defineComponent, r as ref, a as reactive, o as onMounted, t as toRefs, c as createBlock, b as createVNode, _ as _toDisplayString, e as renderSlot, f as createCommentVNode, g as openBlock, i as index, s as script$6, h as script$5, j as resolveComponent, w as withCtx, F as Fragment, k as createTextVNode } from './index.js';

var script = defineComponent({
  name: "Preview",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  setup() {
    const codeRef = ref(null);
    let fullHeight = 0;
    const state = reactive({
      codeHeight: 0
    });
    const highlightAll = () => {
      setTimeout(() => {
        window.Prism.highlightAll();
      }, 0);
    };
    const toggleCode = () => {
      if (state.codeHeight === 0) {
        state.codeHeight = fullHeight;
      } else {
        state.codeHeight = 0;
      }
      if (state.codeHeight >= 0) {
        highlightAll();
      }
    };
    onMounted(() => {
      fullHeight = codeRef.value.offsetHeight;
    });
    return {
      ...toRefs(state),
      codeRef,
      toggleCode
    };
  }
});

const _hoisted_1 = { class: "preview" };
const _hoisted_2 = { class: "preview__card" };
const _hoisted_3 = { class: "preview__demo" };
const _hoisted_4 = { ref: "codeRef" };
const _hoisted_5 = {
  key: 0,
  class: "preview__description"
};
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { class: "language-markup" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { class: "language-typescript" };

function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("h1", null, _toDisplayString(_ctx.title), 1 /* TEXT */),
    createVNode("div", _hoisted_2, [
      createVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "default")
      ]),
      createVNode("div", {
        style: { height: `${_ctx.codeHeight}px` },
        class: "preview__code"
      }, [
        createVNode("div", _hoisted_4, [
          (_ctx.description)
            ? (openBlock(), createBlock("div", _hoisted_5, _toDisplayString(_ctx.description), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          (_ctx.$slots.template)
            ? (openBlock(), createBlock("pre", _hoisted_6, [
                createVNode("code", _hoisted_7, [
                  renderSlot(_ctx.$slots, "template")
                ])
              ]))
            : createCommentVNode("v-if", true),
          (_ctx.$slots.script)
            ? (openBlock(), createBlock("pre", _hoisted_8, [
                createVNode("code", _hoisted_9, [
                  renderSlot(_ctx.$slots, "script")
                ])
              ]))
            : createCommentVNode("v-if", true)
        ], 512 /* NEED_PATCH */)
      ], 4 /* STYLE */),
      createVNode("div", {
        class: "preview__footer",
        onClick: _cache[1] || (_cache[1] = $event => (_ctx.toggleCode($event)))
      }, _toDisplayString(_ctx.codeHeight > 0 ? '隐藏代码' : '显示代码'), 1 /* TEXT */)
    ])
  ]))
}

script.render = render;

var script$1 = defineComponent({
  components: {
    Preview: script,
    ElRow: index,
    ElButtonGroup: script$6,
    ElButton: script$5
  }
});

const _hoisted_1$1 = /*#__PURE__*/createVNode("h1", null, "ElButton", -1 /* HOISTED */);
const _hoisted_2$1 = /*#__PURE__*/createTextVNode("默认按钮");
const _hoisted_3$1 = /*#__PURE__*/createTextVNode("主要按钮");
const _hoisted_4$1 = /*#__PURE__*/createTextVNode("成功按钮");
const _hoisted_5$1 = /*#__PURE__*/createTextVNode("信息按钮");
const _hoisted_6$1 = /*#__PURE__*/createTextVNode("警告按钮");
const _hoisted_7$1 = /*#__PURE__*/createTextVNode("危险按钮");
const _hoisted_8$1 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <ElButton>默认按钮</ElButton>
      <ElButton type="primary">主要按钮</ElButton>
      <ElButton type="success">成功按钮</ElButton>
      <ElButton type="info">信息按钮</ElButton>
      <ElButton type="warning">警告按钮</ElButton>
      <ElButton type="danger">危险按钮</ElButton>
      `), 1 /* TEXT */);
const _hoisted_9$1 = /*#__PURE__*/createTextVNode("朴素按钮");
const _hoisted_10 = /*#__PURE__*/createTextVNode("主要按钮");
const _hoisted_11 = /*#__PURE__*/createTextVNode("成功按钮");
const _hoisted_12 = /*#__PURE__*/createTextVNode("信息按钮");
const _hoisted_13 = /*#__PURE__*/createTextVNode("警告按钮");
const _hoisted_14 = /*#__PURE__*/createTextVNode("危险按钮");
const _hoisted_15 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
      `), 1 /* TEXT */);
const _hoisted_16 = /*#__PURE__*/createTextVNode("圆角按钮");
const _hoisted_17 = /*#__PURE__*/createTextVNode("主要按钮");
const _hoisted_18 = /*#__PURE__*/createTextVNode("成功按钮");
const _hoisted_19 = /*#__PURE__*/createTextVNode("信息按钮");
const _hoisted_20 = /*#__PURE__*/createTextVNode("警告按钮");
const _hoisted_21 = /*#__PURE__*/createTextVNode("危险按钮");
const _hoisted_22 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
      `), 1 /* TEXT */);
const _hoisted_23 = /*#__PURE__*/createTextVNode("搜索");
const _hoisted_24 = /*#__PURE__*/createTextVNode("上传");
const _hoisted_25 = /*#__PURE__*/createVNode("i", { class: "el-icon-upload el-icon--right" }, null, -1 /* HOISTED */);
const _hoisted_26 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      `), 1 /* TEXT */);
const _hoisted_27 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
      `), 1 /* TEXT */);
const _hoisted_28 = /*#__PURE__*/createTextVNode("文字按钮");
const _hoisted_29 = /*#__PURE__*/createTextVNode("文字按钮");
const _hoisted_30 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
      `), 1 /* TEXT */);
const _hoisted_31 = /*#__PURE__*/createTextVNode("默认按钮");
const _hoisted_32 = /*#__PURE__*/createTextVNode("主要按钮");
const _hoisted_33 = /*#__PURE__*/createTextVNode("成功按钮");
const _hoisted_34 = /*#__PURE__*/createTextVNode("信息按钮");
const _hoisted_35 = /*#__PURE__*/createTextVNode("警告按钮");
const _hoisted_36 = /*#__PURE__*/createTextVNode("危险按钮");
const _hoisted_37 = /*#__PURE__*/createTextVNode("朴素按钮");
const _hoisted_38 = /*#__PURE__*/createTextVNode("主要按钮");
const _hoisted_39 = /*#__PURE__*/createTextVNode("成功按钮");
const _hoisted_40 = /*#__PURE__*/createTextVNode("信息按钮");
const _hoisted_41 = /*#__PURE__*/createTextVNode("警告按钮");
const _hoisted_42 = /*#__PURE__*/createTextVNode("危险按钮");
const _hoisted_43 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-row>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button plain disabled>朴素按钮</el-button>
        <el-button type="primary" plain disabled>主要按钮</el-button>
        <el-button type="success" plain disabled>成功按钮</el-button>
        <el-button type="info" plain disabled>信息按钮</el-button>
        <el-button type="warning" plain disabled>警告按钮</el-button>
        <el-button type="danger" plain disabled>危险按钮</el-button>
      </el-row>
      `), 1 /* TEXT */);
const _hoisted_44 = /*#__PURE__*/createTextVNode("上一页");
const _hoisted_45 = /*#__PURE__*/createTextVNode("下一页");
const _hoisted_46 = /*#__PURE__*/createVNode("i", { class: "el-icon-arrow-right el-icon--right" }, null, -1 /* HOISTED */);
const _hoisted_47 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      `), 1 /* TEXT */);
const _hoisted_48 = /*#__PURE__*/createTextVNode("加载中");
const _hoisted_49 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-button type="primary" :loading="true">加载中</el-button>
      `), 1 /* TEXT */);
const _hoisted_50 = /*#__PURE__*/createTextVNode("默认按钮");
const _hoisted_51 = /*#__PURE__*/createTextVNode("中等按钮");
const _hoisted_52 = /*#__PURE__*/createTextVNode("小型按钮");
const _hoisted_53 = /*#__PURE__*/createTextVNode("超小按钮");
const _hoisted_54 = /*#__PURE__*/createTextVNode("默认按钮");
const _hoisted_55 = /*#__PURE__*/createTextVNode("中等按钮");
const _hoisted_56 = /*#__PURE__*/createTextVNode("小型按钮");
const _hoisted_57 = /*#__PURE__*/createTextVNode("超小按钮");
const _hoisted_58 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
      </el-row>
      <el-row>
        <el-button round>默认按钮</el-button>
        <el-button size="medium" round>中等按钮</el-button>
        <el-button size="small" round>小型按钮</el-button>
        <el-button size="mini" round>超小按钮</el-button>
      </el-row>
      `), 1 /* TEXT */);

function render$1(_ctx, _cache) {
  const _component_ElButton = resolveComponent("ElButton");
  const _component_Preview = resolveComponent("Preview");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_button_group = resolveComponent("el-button-group");

  return (openBlock(), createBlock(Fragment, null, [
    _hoisted_1$1,
    createVNode(_component_Preview, { title: "默认按钮" }, {
      template: withCtx(() => [
        _hoisted_8$1
      ]),
      default: withCtx(() => [
        createVNode(_component_ElButton, null, {
          default: withCtx(() => [
            _hoisted_2$1
          ]),
          _: 1
        }),
        createVNode(_component_ElButton, { type: "primary" }, {
          default: withCtx(() => [
            _hoisted_3$1
          ]),
          _: 1
        }),
        createVNode(_component_ElButton, { type: "success" }, {
          default: withCtx(() => [
            _hoisted_4$1
          ]),
          _: 1
        }),
        createVNode(_component_ElButton, { type: "info" }, {
          default: withCtx(() => [
            _hoisted_5$1
          ]),
          _: 1
        }),
        createVNode(_component_ElButton, { type: "warning" }, {
          default: withCtx(() => [
            _hoisted_6$1
          ]),
          _: 1
        }),
        createVNode(_component_ElButton, { type: "danger" }, {
          default: withCtx(() => [
            _hoisted_7$1
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "朴素按钮" }, {
      template: withCtx(() => [
        _hoisted_15
      ]),
      default: withCtx(() => [
        createVNode(_component_el_button, { plain: "" }, {
          default: withCtx(() => [
            _hoisted_9$1
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "primary",
          plain: ""
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "success",
          plain: ""
        }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "info",
          plain: ""
        }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "warning",
          plain: ""
        }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "danger",
          plain: ""
        }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "朴素按钮" }, {
      template: withCtx(() => [
        _hoisted_22
      ]),
      default: withCtx(() => [
        createVNode(_component_el_button, { round: "" }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "primary",
          round: ""
        }, {
          default: withCtx(() => [
            _hoisted_17
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "success",
          round: ""
        }, {
          default: withCtx(() => [
            _hoisted_18
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "info",
          round: ""
        }, {
          default: withCtx(() => [
            _hoisted_19
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "warning",
          round: ""
        }, {
          default: withCtx(() => [
            _hoisted_20
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "danger",
          round: ""
        }, {
          default: withCtx(() => [
            _hoisted_21
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "图标按钮" }, {
      template: withCtx(() => [
        _hoisted_26
      ]),
      default: withCtx(() => [
        createVNode(_component_el_button, {
          type: "primary",
          icon: "el-icon-edit"
        }),
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
            _hoisted_23
          ]),
          _: 1
        }),
        createVNode(_component_el_button, { type: "primary" }, {
          default: withCtx(() => [
            _hoisted_24,
            _hoisted_25
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "圆形按钮" }, {
      template: withCtx(() => [
        _hoisted_27
      ]),
      default: withCtx(() => [
        createVNode(_component_el_button, {
          icon: "el-icon-search",
          circle: ""
        }),
        createVNode(_component_el_button, {
          type: "primary",
          icon: "el-icon-edit",
          circle: ""
        }),
        createVNode(_component_el_button, {
          type: "success",
          icon: "el-icon-check",
          circle: ""
        }),
        createVNode(_component_el_button, {
          type: "info",
          icon: "el-icon-message",
          circle: ""
        }),
        createVNode(_component_el_button, {
          type: "warning",
          icon: "el-icon-star-off",
          circle: ""
        }),
        createVNode(_component_el_button, {
          type: "danger",
          icon: "el-icon-delete",
          circle: ""
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "文字按钮" }, {
      template: withCtx(() => [
        _hoisted_30
      ]),
      default: withCtx(() => [
        createVNode(_component_el_button, { type: "text" }, {
          default: withCtx(() => [
            _hoisted_28
          ]),
          _: 1
        }),
        createVNode(_component_el_button, {
          type: "text",
          disabled: ""
        }, {
          default: withCtx(() => [
            _hoisted_29
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "禁用状态" }, {
      template: withCtx(() => [
        _hoisted_43
      ]),
      default: withCtx(() => [
        createVNode(_component_el_row, null, {
          default: withCtx(() => [
            createVNode(_component_el_button, { disabled: "" }, {
              default: withCtx(() => [
                _hoisted_31
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "primary",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_32
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "success",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_33
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "info",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_34
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "warning",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_35
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "danger",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_36
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_row, null, {
          default: withCtx(() => [
            createVNode(_component_el_button, {
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_37
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "primary",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_38
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "success",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_39
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "info",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_40
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "warning",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_41
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "danger",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_42
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "按钮组" }, {
      template: withCtx(() => [
        _hoisted_47
      ]),
      default: withCtx(() => [
        createVNode(_component_el_button_group, null, {
          default: withCtx(() => [
            createVNode(_component_el_button, {
              type: "primary",
              icon: "el-icon-arrow-left"
            }, {
              default: withCtx(() => [
                _hoisted_44
              ]),
              _: 1
            }),
            createVNode(_component_el_button, { type: "primary" }, {
              default: withCtx(() => [
                _hoisted_45,
                _hoisted_46
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_button_group, null, {
          default: withCtx(() => [
            createVNode(_component_el_button, {
              type: "primary",
              icon: "el-icon-edit"
            }),
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
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "加载中" }, {
      template: withCtx(() => [
        _hoisted_49
      ]),
      default: withCtx(() => [
        createVNode(_component_el_button, {
          type: "primary",
          loading: true
        }, {
          default: withCtx(() => [
            _hoisted_48
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_Preview, { title: "不同尺寸" }, {
      template: withCtx(() => [
        _hoisted_58
      ]),
      default: withCtx(() => [
        createVNode(_component_el_row, null, {
          default: withCtx(() => [
            createVNode(_component_el_button, null, {
              default: withCtx(() => [
                _hoisted_50
              ]),
              _: 1
            }),
            createVNode(_component_el_button, { size: "medium" }, {
              default: withCtx(() => [
                _hoisted_51
              ]),
              _: 1
            }),
            createVNode(_component_el_button, { size: "small" }, {
              default: withCtx(() => [
                _hoisted_52
              ]),
              _: 1
            }),
            createVNode(_component_el_button, { size: "mini" }, {
              default: withCtx(() => [
                _hoisted_53
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_row, null, {
          default: withCtx(() => [
            createVNode(_component_el_button, { round: "" }, {
              default: withCtx(() => [
                _hoisted_54
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              size: "medium",
              round: ""
            }, {
              default: withCtx(() => [
                _hoisted_55
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              size: "small",
              round: ""
            }, {
              default: withCtx(() => [
                _hoisted_56
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              size: "mini",
              round: ""
            }, {
              default: withCtx(() => [
                _hoisted_57
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

script$1.render = render$1;

export default script$1;
