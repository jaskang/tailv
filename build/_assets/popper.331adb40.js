import { d as defineComponent, D as ElPopper, r as resolveComponent, c as createBlock, b as createVNode, w as withCtx, F as Fragment, o as openBlock, e as createTextVNode } from './index.403d26ed.js';
import { s as script$1 } from './Preview.8bbf9e9a.js';

var script = defineComponent({
  components: {
    Preview: script$1,
    ElPopper
  }
});

const _hoisted_1 = /*#__PURE__*/createVNode("h1", null, "ElPopper", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createTextVNode(" ElPopper 1 ");
const _hoisted_3 = /*#__PURE__*/createTextVNode(" ElPopper 2 ");
const _hoisted_4 = /*#__PURE__*/createVNode("div", null, "reference 2", -1 /* HOISTED */);
const _hoisted_5 = /*#__PURE__*/createVNode("div", null, " reference 1 ", -1 /* HOISTED */);

function render(_ctx, _cache) {
  const _component_ElPopper = resolveComponent("ElPopper");
  const _component_Preview = resolveComponent("Preview");

  return (openBlock(), createBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_Preview, null, {
      default: withCtx(() => [
        createVNode(_component_ElPopper, null, {
          reference: withCtx(() => [
            _hoisted_5
          ]),
          default: withCtx(() => [
            _hoisted_2,
            createVNode(_component_ElPopper, null, {
              reference: withCtx(() => [
                _hoisted_4
              ]),
              default: withCtx(() => [
                _hoisted_3
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

script.render = render;

export default script;
