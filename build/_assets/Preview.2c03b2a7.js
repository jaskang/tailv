import { d as defineComponent, f as ref, g as reactive, h as onMounted, t as toRefs, n as nextTick, c as createBlock, b as createVNode, _ as _toDisplayString, j as createCommentVNode, k as renderSlot, o as openBlock } from './index.48c3ecc7.js';

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
    const state = reactive({
      codeHeight: 0
    });
    const highlightAll = () => {
      nextTick(() => {
        window.Prism.highlightAll();
      });
    };
    const toggleCode = () => {
      var _a;
      if (state.codeHeight === 0) {
        state.codeHeight = (_a = codeRef.value) == null ? void 0 : _a.offsetHeight;
      } else {
        state.codeHeight = 0;
      }
    };
    onMounted(() => {
      highlightAll();
    });
    return {
      ...toRefs(state),
      codeRef,
      toggleCode
    };
  }
});

const _hoisted_1 = { class: "preview" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "preview__card" };
const _hoisted_4 = { class: "preview__demo" };
const _hoisted_5 = {
  ref: "codeRef",
  class: "preview__coderef"
};
const _hoisted_6 = {
  key: 0,
  class: "preview__comment"
};
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { class: "language-markup" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { class: "language-typescript" };

function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("h1", null, _toDisplayString(_ctx.title), 1 /* TEXT */),
    (_ctx.description)
      ? (openBlock(), createBlock("p", _hoisted_2, _toDisplayString(_ctx.description), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createVNode("div", _hoisted_3, [
      createVNode("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "default")
      ]),
      createVNode("div", {
        style: { height: `${_ctx.codeHeight}px` },
        class: "preview__code"
      }, [
        createVNode("div", _hoisted_5, [
          (_ctx.$slots.comment)
            ? (openBlock(), createBlock("div", _hoisted_6, [
                renderSlot(_ctx.$slots, "comment")
              ]))
            : createCommentVNode("v-if", true),
          (_ctx.$slots.template)
            ? (openBlock(), createBlock("pre", _hoisted_7, [
                createVNode("code", _hoisted_8, [
                  renderSlot(_ctx.$slots, "template")
                ])
              ]))
            : createCommentVNode("v-if", true),
          (_ctx.$slots.script)
            ? (openBlock(), createBlock("pre", _hoisted_9, [
                createVNode("code", _hoisted_10, [
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

;

script.render = render;

export { script as s };
