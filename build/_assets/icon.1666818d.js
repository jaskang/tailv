import { d as defineComponent, x as script$7, a as script$5, r as resolveComponent, c as createBlock, b as createVNode, w as withCtx, y as renderList, F as Fragment, o as openBlock, _ as _toDisplayString, e as createTextVNode } from './index.d883ae59.js';

const icons = ["platform-eleme", "eleme", "delete-solid", "delete", "s-tools", "setting", "user-solid", "user", "phone", "phone-outline", "more", "more-outline", "star-on", "star-off", "s-goods", "goods", "warning", "warning-outline", "question", "info", "remove", "circle-plus", "success", "error", "zoom-in", "zoom-out", "remove-outline", "circle-plus-outline", "circle-check", "circle-close", "s-help", "help", "minus", "plus", "check", "close", "picture", "picture-outline", "picture-outline-round", "upload", "upload2", "download", "camera-solid", "camera", "video-camera-solid", "video-camera", "message-solid", "bell", "s-cooperation", "s-order", "s-platform", "s-fold", "s-unfold", "s-operation", "s-promotion", "s-home", "s-release", "s-ticket", "s-management", "s-open", "s-shop", "s-marketing", "s-flag", "s-comment", "s-finance", "s-claim", "s-custom", "s-opportunity", "s-data", "s-check", "s-grid", "menu", "share", "d-caret", "caret-left", "caret-right", "caret-bottom", "caret-top", "bottom-left", "bottom-right", "back", "right", "bottom", "top", "top-left", "top-right", "arrow-left", "arrow-right", "arrow-down", "arrow-up", "d-arrow-left", "d-arrow-right", "video-pause", "video-play", "refresh", "refresh-right", "refresh-left", "finished", "sort", "sort-up", "sort-down", "rank", "loading", "view", "c-scale-to-original", "date", "edit", "edit-outline", "folder", "folder-opened", "folder-add", "folder-remove", "folder-delete", "folder-checked", "tickets", "document-remove", "document-delete", "document-copy", "document-checked", "document", "document-add", "printer", "paperclip", "takeaway-box", "search", "monitor", "attract", "mobile", "scissors", "umbrella", "headset", "brush", "mouse", "coordinate", "magic-stick", "reading", "data-line", "data-board", "pie-chart", "data-analysis", "collection-tag", "film", "suitcase", "suitcase-1", "receiving", "collection", "files", "notebook-1", "notebook-2", "toilet-paper", "office-building", "school", "table-lamp", "house", "no-smoking", "smoking", "shopping-cart-full", "shopping-cart-1", "shopping-cart-2", "shopping-bag-1", "shopping-bag-2", "sold-out", "sell", "present", "box", "bank-card", "money", "coin", "wallet", "discount", "price-tag", "news", "guide", "male", "female", "thumb", "cpu", "link", "connection", "open", "turn-off", "set-up", "chat-round", "chat-line-round", "chat-square", "chat-dot-round", "chat-dot-square", "chat-line-square", "message", "postcard", "position", "turn-off-microphone", "microphone", "close-notification", "bangzhu", "time", "odometer", "crop", "aim", "switch-button", "full-screen", "copy-document", "mic", "stopwatch", "medal-1", "medal", "trophy", "trophy-1", "first-aid-kit", "discover", "place", "location", "location-outline", "location-information", "add-location", "delete-location", "map-location", "alarm-clock", "timer", "watch-1", "watch", "lock", "unlock", "key", "service", "mobile-phone", "bicycle", "truck", "ship", "basketball", "football", "soccer", "baseball", "wind-power", "light-rain", "lightning", "heavy-rain", "sunrise", "sunrise-1", "sunset", "sunny", "cloudy", "partly-cloudy", "cloudy-and-sunny", "moon", "moon-night", "dish", "dish-1", "food", "chicken", "fork-spoon", "knife-fork", "burger", "tableware", "sugar", "dessert", "ice-cream", "hot-water", "water-cup", "coffee-cup", "cold-drink", "goblet", "goblet-full", "goblet-square", "goblet-square-full", "refrigerator", "grape", "watermelon", "cherry", "apple", "pear", "orange", "coffee", "ice-tea", "ice-drink", "milk-tea", "potato-strips", "lollipop", "ice-cream-square", "ice-cream-round"];
var script = defineComponent({
  components: {
    ElIcon: script$7,
    ElButton: script$5
  },
  setup() {
    return {
      icons
    };
  }
});

const _hoisted_1 = { class: "demo-icon" };
const _hoisted_2 = /*#__PURE__*/createVNode("h1", null, "Icon 图标", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createVNode("h2", null, "使用方法", -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/createTextVNode("搜索");
const _hoisted_5 = /*#__PURE__*/createVNode("h2", null, "图标集合", -1 /* HOISTED */);
const _hoisted_6 = { class: "icon-list" };
const _hoisted_7 = { class: "icon-name" };

function render(_ctx, _cache) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_el_icon, { name: "edit" }),
    createVNode(_component_el_icon, { name: "share" }),
    createVNode(_component_el_icon, { name: "delete" }),
    createVNode(_component_el_button, {
      type: "primary",
      icon: "el-icon-search"
    }, {
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    _hoisted_5,
    createVNode("ul", _hoisted_6, [
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.icons, (name) => {
        return (openBlock(), createBlock("li", { key: name }, [
          createVNode("span", null, [
            createVNode("i", {
              class: 'el-icon-' + name
            }, null, 2 /* CLASS */),
            createVNode("span", _hoisted_7, _toDisplayString('el-icon-' + name), 1 /* TEXT */)
          ])
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = ".demo-icon i{color:#606266;margin:0 20px;font-size:1.5em;vertical-align:middle}.demo-icon ul.icon-list{overflow:hidden;list-style:none;padding:0!important;border:1px solid #eaeefb;border-radius:4px}.demo-icon .icon-list li{float:left;width:16.66%;text-align:center;height:120px;line-height:120px;color:#666;font-size:13px;border-right:1px solid #eee;border-bottom:1px solid #eee;margin-right:-1px;margin-bottom:-1px}.demo-icon .icon-list li:after{display:inline-block;content:\"\";height:100%;vertical-align:middle}.demo-icon .icon-list li span{display:inline-block;line-height:normal;vertical-align:middle;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;color:#99a9bf;transition:color .15s linear}.demo-icon .icon-list li i{display:block;font-size:32px;margin-bottom:15px;color:#606266;transition:color .15s linear}.demo-icon .icon-list li .icon-name{display:inline-block;padding:0 3px;height:1em}.demo-icon .icon-list li:hover i,.demo-icon .icon-list li:hover span{color:#5cb6ff}";document.head.appendChild(__VITE_CSS__);;

script.render = render;

export default script;
