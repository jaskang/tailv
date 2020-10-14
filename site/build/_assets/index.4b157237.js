;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var prism = createCommonjsModule(function(module) {
  var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function(u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, C = {manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: {encode: function e2(n2) {
      return n2 instanceof _ ? new _(n2.type, e2(n2.content), n2.alias) : Array.isArray(n2) ? n2.map(e2) : n2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e2) {
      return Object.prototype.toString.call(e2).slice(8, -1);
    }, objId: function(e2) {
      return e2.__id || Object.defineProperty(e2, "__id", {value: ++n}), e2.__id;
    }, clone: function t2(e2, r2) {
      var a, n2, l2 = C.util.type(e2);
      switch (r2 = r2 || {}, l2) {
        case "Object":
          if (n2 = C.util.objId(e2), r2[n2])
            return r2[n2];
          for (var i in (a = {}, r2[n2] = a, e2))
            e2.hasOwnProperty(i) && (a[i] = t2(e2[i], r2));
          return a;
        case "Array":
          return n2 = C.util.objId(e2), r2[n2] ? r2[n2] : (a = [], r2[n2] = a, e2.forEach(function(e3, n3) {
            a[n3] = t2(e3, r2);
          }), a);
        default:
          return e2;
      }
    }, getLanguage: function(e2) {
      for (; e2 && !c.test(e2.className); )
        e2 = e2.parentElement;
      return e2 ? (e2.className.match(c) || [, "none"])[1].toLowerCase() : "none";
    }, currentScript: function() {
      if ("undefined" == typeof document)
        return null;
      if ("currentScript" in document)
        return document.currentScript;
      try {
        throw new Error();
      } catch (e2) {
        var n2 = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e2.stack) || [])[1];
        if (n2) {
          var t2 = document.getElementsByTagName("script");
          for (var r2 in t2)
            if (t2[r2].src == n2)
              return t2[r2];
        }
        return null;
      }
    }}, languages: {extend: function(e2, n2) {
      var t2 = C.util.clone(C.languages[e2]);
      for (var r2 in n2)
        t2[r2] = n2[r2];
      return t2;
    }, insertBefore: function(t2, e2, n2, r2) {
      var a = (r2 = r2 || C.languages)[t2], l2 = {};
      for (var i in a)
        if (a.hasOwnProperty(i)) {
          if (i == e2)
            for (var o in n2)
              n2.hasOwnProperty(o) && (l2[o] = n2[o]);
          n2.hasOwnProperty(i) || (l2[i] = a[i]);
        }
      var s = r2[t2];
      return r2[t2] = l2, C.languages.DFS(C.languages, function(e3, n3) {
        n3 === s && e3 != t2 && (this[e3] = l2);
      }), l2;
    }, DFS: function e2(n2, t2, r2, a) {
      a = a || {};
      var l2 = C.util.objId;
      for (var i in n2)
        if (n2.hasOwnProperty(i)) {
          t2.call(n2, i, n2[i], r2 || i);
          var o = n2[i], s = C.util.type(o);
          "Object" !== s || a[l2(o)] ? "Array" !== s || a[l2(o)] || (a[l2(o)] = true, e2(o, t2, i, a)) : (a[l2(o)] = true, e2(o, t2, null, a));
        }
    }}, plugins: {}, highlightAll: function(e2, n2) {
      C.highlightAllUnder(document, e2, n2);
    }, highlightAllUnder: function(e2, n2, t2) {
      var r2 = {callback: t2, container: e2, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};
      C.hooks.run("before-highlightall", r2), r2.elements = Array.prototype.slice.apply(r2.container.querySelectorAll(r2.selector)), C.hooks.run("before-all-elements-highlight", r2);
      for (var a, l2 = 0; a = r2.elements[l2++]; )
        C.highlightElement(a, true === n2, r2.callback);
    }, highlightElement: function(e2, n2, t2) {
      var r2 = C.util.getLanguage(e2), a = C.languages[r2];
      e2.className = e2.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r2;
      var l2 = e2.parentNode;
      l2 && "pre" === l2.nodeName.toLowerCase() && (l2.className = l2.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r2);
      var i = {element: e2, language: r2, grammar: a, code: e2.textContent};
      function o(e3) {
        i.highlightedCode = e3, C.hooks.run("before-insert", i), i.element.innerHTML = i.highlightedCode, C.hooks.run("after-highlight", i), C.hooks.run("complete", i), t2 && t2.call(i.element);
      }
      if (C.hooks.run("before-sanity-check", i), !i.code)
        return C.hooks.run("complete", i), void (t2 && t2.call(i.element));
      if (C.hooks.run("before-highlight", i), i.grammar)
        if (n2 && u.Worker) {
          var s = new Worker(C.filename);
          s.onmessage = function(e3) {
            o(e3.data);
          }, s.postMessage(JSON.stringify({language: i.language, code: i.code, immediateClose: true}));
        } else
          o(C.highlight(i.code, i.grammar, i.language));
      else
        o(C.util.encode(i.code));
    }, highlight: function(e2, n2, t2) {
      var r2 = {code: e2, grammar: n2, language: t2};
      return C.hooks.run("before-tokenize", r2), r2.tokens = C.tokenize(r2.code, r2.grammar), C.hooks.run("after-tokenize", r2), _.stringify(C.util.encode(r2.tokens), r2.language);
    }, tokenize: function(e2, n2) {
      var t2 = n2.rest;
      if (t2) {
        for (var r2 in t2)
          n2[r2] = t2[r2];
        delete n2.rest;
      }
      var a = new l();
      return M(a, a.head, e2), function e3(n3, t3, r3, a2, l2, i, o) {
        for (var s in r3)
          if (r3.hasOwnProperty(s) && r3[s]) {
            var u2 = r3[s];
            u2 = Array.isArray(u2) ? u2 : [u2];
            for (var c2 = 0; c2 < u2.length; ++c2) {
              if (o && o == s + "," + c2)
                return;
              var g = u2[c2], f = g.inside, h2 = !!g.lookbehind, d = !!g.greedy, v = 0, p2 = g.alias;
              if (d && !g.pattern.global) {
                var m = g.pattern.toString().match(/[imsuy]*$/)[0];
                g.pattern = RegExp(g.pattern.source, m + "g");
              }
              g = g.pattern || g;
              for (var y = a2.next, k = l2; y !== t3.tail; k += y.value.length, y = y.next) {
                var b = y.value;
                if (t3.length > n3.length)
                  return;
                if (!(b instanceof _)) {
                  var x = 1;
                  if (d && y != t3.tail.prev) {
                    g.lastIndex = k;
                    var w = g.exec(n3);
                    if (!w)
                      break;
                    var A = w.index + (h2 && w[1] ? w[1].length : 0), P = w.index + w[0].length, S = k;
                    for (S += y.value.length; S <= A; )
                      y = y.next, S += y.value.length;
                    if (S -= y.value.length, k = S, y.value instanceof _)
                      continue;
                    for (var O = y; O !== t3.tail && (S < P || "string" == typeof O.value && !O.prev.value.greedy); O = O.next)
                      x++, S += O.value.length;
                    x--, b = n3.slice(k, S), w.index -= k;
                  } else {
                    g.lastIndex = 0;
                    var w = g.exec(b);
                  }
                  if (w) {
                    h2 && (v = w[1] ? w[1].length : 0);
                    var A = w.index + v, w = w[0].slice(v), P = A + w.length, E = b.slice(0, A), N = b.slice(P), j = y.prev;
                    E && (j = M(t3, j, E), k += E.length), W(t3, j, x);
                    var L = new _(s, f ? C.tokenize(w, f) : w, p2, w, d);
                    if (y = M(t3, j, L), N && M(t3, y, N), 1 < x && e3(n3, t3, r3, y.prev, k, true, s + "," + c2), i)
                      break;
                  } else if (i)
                    break;
                }
              }
            }
          }
      }(e2, a, n2, a.head, 0), function(e3) {
        var n3 = [], t3 = e3.head.next;
        for (; t3 !== e3.tail; )
          n3.push(t3.value), t3 = t3.next;
        return n3;
      }(a);
    }, hooks: {all: {}, add: function(e2, n2) {
      var t2 = C.hooks.all;
      t2[e2] = t2[e2] || [], t2[e2].push(n2);
    }, run: function(e2, n2) {
      var t2 = C.hooks.all[e2];
      if (t2 && t2.length)
        for (var r2, a = 0; r2 = t2[a++]; )
          r2(n2);
    }}, Token: _};
    function _(e2, n2, t2, r2, a) {
      this.type = e2, this.content = n2, this.alias = t2, this.length = 0 | (r2 || "").length, this.greedy = !!a;
    }
    function l() {
      var e2 = {value: null, prev: null, next: null}, n2 = {value: null, prev: e2, next: null};
      e2.next = n2, this.head = e2, this.tail = n2, this.length = 0;
    }
    function M(e2, n2, t2) {
      var r2 = n2.next, a = {value: t2, prev: n2, next: r2};
      return n2.next = a, r2.prev = a, e2.length++, a;
    }
    function W(e2, n2, t2) {
      for (var r2 = n2.next, a = 0; a < t2 && r2 !== e2.tail; a++)
        r2 = r2.next;
      (n2.next = r2).prev = n2, e2.length -= a;
    }
    if (u.Prism = C, _.stringify = function n2(e2, t2) {
      if ("string" == typeof e2)
        return e2;
      if (Array.isArray(e2)) {
        var r2 = "";
        return e2.forEach(function(e3) {
          r2 += n2(e3, t2);
        }), r2;
      }
      var a = {type: e2.type, content: n2(e2.content, t2), tag: "span", classes: ["token", e2.type], attributes: {}, language: t2}, l2 = e2.alias;
      l2 && (Array.isArray(l2) ? Array.prototype.push.apply(a.classes, l2) : a.classes.push(l2)), C.hooks.run("wrap", a);
      var i = "";
      for (var o in a.attributes)
        i += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
      return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + i + ">" + a.content + "</" + a.tag + ">";
    }, !u.document)
      return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message", function(e2) {
        var n2 = JSON.parse(e2.data), t2 = n2.language, r2 = n2.code, a = n2.immediateClose;
        u.postMessage(C.highlight(r2, C.languages[t2], t2)), a && u.close();
      }, false)), C;
    var e = C.util.currentScript();
    function t() {
      C.manual || C.highlightAll();
    }
    if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = true)), !C.manual) {
      var r = document.readyState;
      "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16);
    }
    return C;
  }(_self);
  module.exports && (module.exports = Prism), "undefined" != typeof commonjsGlobal && (commonjsGlobal.Prism = Prism);
  Prism.languages.markup = {comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: {pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: {"internal-subset": {pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null}, string: {pattern: /"[^"]*"|'[^']*'/, greedy: true}, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/}}, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: {pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: {tag: {pattern: /^<\/?[^\s>\/]+/, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}}, "attr-value": {pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: {punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]}}, punctuation: /\/?>/, "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}}}, entity: [{pattern: /&[\da-z]{1,8};/i, alias: "named-entity"}, /&#x?[\da-f]{1,8};/i]}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {value: function(a, e) {
    var s = {};
    s["language-" + e] = {pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[e]}, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {"included-cdata": {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s}};
    n["language-" + e] = {pattern: /[\s\S]+/, inside: Prism.languages[e]};
    var t = {};
    t[a] = {pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
      return a;
    }), "i"), lookbehind: true, greedy: true, inside: n}, Prism.languages.insertBefore("markup", "cdata", t);
  }}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
  !function(s) {
    var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    s.languages.css = {comment: /\/\*[\s\S]*?\*\//, atrule: {pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: {rule: /^@[\w-]+/, "selector-function-argument": {pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: true, alias: "selector"}}}, url: {pattern: RegExp("url\\((?:" + e.source + "|[^\n\r()]*)\\)", "i"), greedy: true, inside: {function: /^url/i, punctuation: /^\(|\)$/}}, selector: RegExp(`[^{}\\s](?:[^{};"']|` + e.source + ")*?(?=\\s*\\{)"), string: {pattern: e, greedy: true}, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/}, s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {"style-attr": {pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: {"attr-name": {pattern: /^\s*style/i, inside: t.tag.inside}, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": {pattern: /.+/i, inside: s.languages.css}}, alias: "language-css"}}, t.tag));
  }(Prism);
  Prism.languages.clike = {comment: [{pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true}, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true}], string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true}, "class-name": {pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: {punctuation: /[.\\]/}}, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/};
  Prism.languages.javascript = Prism.languages.extend("clike", {"class-name": [Prism.languages.clike["class-name"], {pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true}], keyword: [{pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true}, {pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true}], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {regex: {pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: true, greedy: true}, "function-variable": {pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function"}, parameter: [{pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript}, {pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript}, {pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript}, {pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript}], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/}), Prism.languages.insertBefore("javascript", "string", {"template-string": {pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: true, inside: {"template-punctuation": {pattern: /^`|`$/, alias: "string"}, interpolation: {pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: true, inside: {"interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"}, rest: Prism.languages.javascript}}, string: /[\s\S]+/}}}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
  !function(e) {
    e.languages.typescript = e.languages.extend("javascript", {"class-name": {pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: true, greedy: true, inside: null}, keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}), delete e.languages.typescript.parameter;
    var n = e.languages.extend("typescript", {});
    delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", {"generic-function": {pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: true, inside: {function: /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/, generic: {pattern: /<[\s\S]+/, alias: "class-name", inside: n}}}}), e.languages.ts = e.languages.typescript;
  }(Prism);
  !function() {
    var i = Object.assign || function(e2, n) {
      for (var t in n)
        n.hasOwnProperty(t) && (e2[t] = n[t]);
      return e2;
    };
    function e(e2) {
      this.defaults = i({}, e2);
    }
    function l(e2) {
      for (var n = 0, t = 0; t < e2.length; ++t)
        e2.charCodeAt(t) == "	".charCodeAt(0) && (n += 3);
      return e2.length + n;
    }
    e.prototype = {setDefaults: function(e2) {
      this.defaults = i(this.defaults, e2);
    }, normalize: function(e2, n) {
      for (var t in n = i(this.defaults, n)) {
        var r = t.replace(/-(\w)/g, function(e3, n2) {
          return n2.toUpperCase();
        });
        "normalize" !== t && "setDefaults" !== r && n[t] && this[r] && (e2 = this[r].call(this, e2, n[t]));
      }
      return e2;
    }, leftTrim: function(e2) {
      return e2.replace(/^\s+/, "");
    }, rightTrim: function(e2) {
      return e2.replace(/\s+$/, "");
    }, tabsToSpaces: function(e2, n) {
      return n = 0 | n || 4, e2.replace(/\t/g, new Array(++n).join(" "));
    }, spacesToTabs: function(e2, n) {
      return n = 0 | n || 4, e2.replace(RegExp(" {" + n + "}", "g"), "	");
    }, removeTrailing: function(e2) {
      return e2.replace(/\s*?$/gm, "");
    }, removeInitialLineFeed: function(e2) {
      return e2.replace(/^(?:\r?\n|\r)/, "");
    }, removeIndent: function(e2) {
      var n = e2.match(/^[^\S\n\r]*(?=\S)/gm);
      return n && n[0].length ? (n.sort(function(e3, n2) {
        return e3.length - n2.length;
      }), n[0].length ? e2.replace(RegExp("^" + n[0], "gm"), "") : e2) : e2;
    }, indent: function(e2, n) {
      return e2.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("	") + "$&");
    }, breakLines: function(e2, n) {
      n = true === n ? 80 : 0 | n || 80;
      for (var t = e2.split("\n"), r = 0; r < t.length; ++r)
        if (!(l(t[r]) <= n)) {
          for (var i2 = t[r].split(/(\s+)/g), o = 0, a = 0; a < i2.length; ++a) {
            var s = l(i2[a]);
            n < (o += s) && (i2[a] = "\n" + i2[a], o = s);
          }
          t[r] = i2.join("");
        }
      return t.join("\n");
    }}, module.exports && (module.exports = e), "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e({"remove-trailing": true, "remove-indent": true, "left-trim": true, "right-trim": true}), Prism.hooks.add("before-sanity-check", function(e2) {
      var n = Prism.plugins.NormalizeWhitespace;
      if (!e2.settings || false !== e2.settings["whitespace-normalization"])
        if (e2.element && e2.element.parentNode || !e2.code) {
          var t = e2.element.parentNode, r = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;
          if (e2.code && t && "pre" === t.nodeName.toLowerCase() && !r.test(t.className) && !r.test(e2.element.className)) {
            for (var i2 = t.childNodes, o = "", a = "", s = false, l2 = 0; l2 < i2.length; ++l2) {
              var c = i2[l2];
              c == e2.element ? s = true : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, t.removeChild(c), --l2);
            }
            if (e2.element.children.length && Prism.plugins.KeepMarkup) {
              var u = o + e2.element.innerHTML + a;
              e2.element.innerHTML = n.normalize(u, e2.settings), e2.code = e2.element.textContent;
            } else
              e2.code = o + e2.code + a, e2.code = n.normalize(e2.code, e2.settings);
          }
        } else
          e2.code = n.normalize(e2.code, e2.settings);
    }));
  }();
});
;
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      res += normalizeClass(value[i]) + " ";
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap("key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const targetMap = new WeakMap();
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
function isEffect(fn) {
  return fn && fn._isEffect === true;
}
function effect(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
    fn = fn.raw;
  }
  const effect2 = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect2();
  }
  return effect2;
}
function stop(effect2) {
  if (effect2.active) {
    cleanup(effect2);
    if (effect2.options.onStop) {
      effect2.options.onStop();
    }
    effect2.active = false;
  }
}
let uid = 0;
function createReactiveEffect(fn, options) {
  const effect2 = function reactiveEffect() {
    if (!effect2.active) {
      return options.scheduler ? void 0 : fn();
    }
    if (!effectStack.includes(effect2)) {
      cleanup(effect2);
      try {
        enableTracking();
        effectStack.push(effect2);
        activeEffect = effect2;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect2.id = uid++;
  effect2._isEffect = true;
  effect2.active = true;
  effect2.raw = fn;
  effect2.deps = [];
  effect2.options = options;
  return effect2;
}
function cleanup(effect2) {
  const {deps} = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect2);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!shouldTrack || activeEffect === void 0) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = new Set());
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const effects = new Set();
  const add2 = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect2) => {
        if (effect2 !== activeEffect || effect2.options.allowRecurse) {
          effects.add(effect2);
        }
      });
    }
  };
  if (type === "clear") {
    depsMap.forEach(add2);
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        add2(dep);
      }
    });
  } else {
    if (key !== void 0) {
      add2(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          add2(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          add2(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const run = (effect2) => {
    if (effect2.options.scheduler) {
      effect2.options.scheduler(effect2);
    } else {
      effect2();
    }
  };
  effects.forEach(run);
}
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = {};
["includes", "indexOf", "lastIndexOf"].forEach((key) => {
  const method = Array.prototype[key];
  arrayInstrumentations[key] = function(...args) {
    const arr = toRaw(this);
    for (let i = 0, l = this.length; i < l; i++) {
      track(arr, "get", i + "");
    }
    const res = method.apply(arr, args);
    if (res === -1 || res === false) {
      return method.apply(arr, args.map(toRaw));
    } else {
      return res;
    }
  };
});
["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
  const method = Array.prototype[key];
  arrayInstrumentations[key] = function(...args) {
    pauseTracking();
    const res = method.apply(this, args);
    enableTracking();
    return res;
  };
});
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? readonlyMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    const keyIsSymbol = isSymbol(key);
    if (keyIsSymbol ? builtInSymbols.has(key) : key === `__proto__` || key === `__v_isRef`) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    const oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const {has: has2} = getProto(rawTarget);
  const wrap = isReadonly2 ? toReadonly : isShallow ? toShallow : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  const result = target.add(value);
  if (!hadKey) {
    trigger(target, "add", value, value);
  }
  return result;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const {has: has2, get: get2} = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  const result = target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return result;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const {has: has2, get: get2} = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isReadonly2 ? toReadonly : isShallow ? toShallow : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isReadonly2 ? toReadonly : isShallow ? toShallow : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const {value, done} = innerIterator.next();
        return done ? {value, done} : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
const mutableInstrumentations = {
  get(key) {
    return get$1(this, key);
  },
  get size() {
    return size(this);
  },
  has: has$1,
  add,
  set: set$1,
  delete: deleteEntry,
  clear,
  forEach: createForEach(false, false)
};
const shallowInstrumentations = {
  get(key) {
    return get$1(this, key, false, true);
  },
  get size() {
    return size(this);
  },
  has: has$1,
  add,
  set: set$1,
  delete: deleteEntry,
  clear,
  forEach: createForEach(false, true)
};
const readonlyInstrumentations = {
  get(key) {
    return get$1(this, key, true);
  },
  get size() {
    return size(this, true);
  },
  has(key) {
    return has$1.call(this, key, true);
  },
  add: createReadonlyMethod("add"),
  set: createReadonlyMethod("set"),
  delete: createReadonlyMethod("delete"),
  clear: createReadonlyMethod("clear"),
  forEach: createForEach(true, false)
};
const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
iteratorMethods.forEach((method) => {
  mutableInstrumentations[method] = createIterableMethod(method, false, false);
  readonlyInstrumentations[method] = createIterableMethod(method, true, false);
  shallowInstrumentations[method] = createIterableMethod(method, false, true);
});
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, false)
};
const reactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (target && target["__v_isReadonly"]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const proxyMap = isReadonly2 ? readonlyMap : reactiveMap;
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"]) || observed;
}
const convert = (val) => isObject(val) ? reactive(val) : val;
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value);
}
function shallowRef(value) {
  return createRef(value, true);
}
class RefImpl {
  constructor(_rawValue, _shallow = false) {
    this._rawValue = _rawValue;
    this._shallow = _shallow;
    this.__v_isRef = true;
    this._value = _shallow ? _rawValue : convert(_rawValue);
  }
  get value() {
    track(toRaw(this), "get", "value");
    return this._value;
  }
  set value(newVal) {
    if (hasChanged(toRaw(newVal), this._rawValue)) {
      this._rawValue = newVal;
      this._value = this._shallow ? newVal : convert(newVal);
      trigger(toRaw(this), "set", "value", newVal);
    }
  }
}
function createRef(rawValue, shallow = false) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key) {
    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }
  get value() {
    return this._object[this._key];
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key) {
  return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2) {
    this._setter = _setter;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: () => {
        if (!this._dirty) {
          this._dirty = true;
          trigger(toRaw(this), "set", "value");
        }
      }
    });
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    if (this._dirty) {
      this._value = this.effect();
      this._dirty = false;
    }
    track(toRaw(this), "get", "value");
    return this._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed(getterOrOptions) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  return new ComputedRefImpl(getter, setter, isFunction(getterOrOptions) || !getterOrOptions.set);
}
const stack = [];
function warn(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({vnode}) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({vnode, recurseCount}) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo)) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(fn) : p2;
}
function queueJob(job) {
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    queue.push(job);
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > -1) {
    queue[i] = null;
  }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen, parentJob);
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen);
  queue.sort((a, b) => getId(a) - getId(b));
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        if (false) {
          checkRecursiveUpdates(seen, job);
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      throw new Error(`Maximum recursive updates exceeded. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
    } else {
      seen.set(fn, count + 1);
    }
  }
}
function emit(instance, event, ...args) {
  const props = instance.vnode.props || EMPTY_OBJ;
  let handlerName = `on${capitalize(event)}`;
  let handler = props[handlerName];
  if (!handler && event.startsWith("update:")) {
    handlerName = `on${capitalize(hyphenate(event))}`;
    handler = props[handlerName];
  }
  if (!handler) {
    handler = props[handlerName + `Once`];
    if (!instance.emitted) {
      (instance.emitted = {})[handlerName] = true;
    } else if (instance.emitted[handlerName]) {
      return;
    }
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const appId = appContext.app ? appContext.app._uid : -1;
  const cache = comp.__emits || (comp.__emits = {});
  const cached = cache[appId];
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      hasExtends = true;
      extend(normalized, normalizeEmitsOptions(raw2, appContext, true));
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    return cache[appId] = null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  return cache[appId] = normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.replace(/Once$/, "");
  return hasOwn(options, key[2].toLowerCase() + key.slice(3)) || hasOwn(options, key.slice(2));
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  currentRenderingInstance = instance;
}
let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render: render2, renderCache, data, setupState, ctx} = instance;
  let result;
  currentRenderingInstance = instance;
  try {
    let fallthroughAttrs;
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render2.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render3 = Component;
      if (false) {
        markAttrsAccessed();
      }
      result = normalizeVNode(render3.length > 1 ? render3(props, {attrs, slots, emit: emit2}) : render3(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
    let root = result;
    let setRoot = void 0;
    if (false) {
      ;
      [root, setRoot] = getChildRoot(result);
    }
    if (Component.inheritAttrs !== false && fallthroughAttrs) {
      const keys = Object.keys(fallthroughAttrs);
      const {shapeFlag} = root;
      if (keys.length) {
        if (shapeFlag & 1 || shapeFlag & 6) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }
          root = cloneVNode(root, fallthroughAttrs);
        } else if (false) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i = 0, l = allAttrs.length; i < l; i++) {
            const key = allAttrs[i];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
          }
          if (eventAttrs.length) {
            warn(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
          }
        }
      }
    }
    if (vnode.dirs) {
      if (false) {
        warn(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
      }
      root.dirs = vnode.dirs;
    }
    if (vnode.transition) {
      if (false) {
        warn(`Component inside <Transition> renders non-element root node that cannot be animated.`);
      }
      root.transition = vnode.transition;
    }
    if (false) {
      setRoot(root);
    } else {
      result = root;
    }
  } catch (err) {
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  currentRenderingInstance = null;
  return result;
}
const getChildRoot = (vnode) => {
  if (vnode.type !== Fragment) {
    return [vnode, void 0];
  }
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren);
  if (!childRoot) {
    return [vnode, void 0];
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicIndex > -1) {
      dynamicChildren[dynamicIndex] = updatedRoot;
    } else if (dynamicChildren && updatedRoot.patchFlag > 0) {
      dynamicChildren.push(updatedRoot);
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
  const filtered = children.filter((child) => {
    return !(isVNode(child) && child.type === Comment && child.children !== "v-if");
  });
  return filtered.length === 1 && isVNode(filtered[0]) ? filtered[0] : null;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & 6 || vnode.shapeFlag & 1 || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const {props: prevProps, children: prevChildren, component} = prevVNode;
  const {props: nextProps, children: nextChildren, patchFlag} = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag > 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({vnode, parent}, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function normalizeSuspenseChildren(vnode) {
  const {shapeFlag, children} = vnode;
  let content;
  let fallback;
  if (shapeFlag & 32) {
    content = normalizeSuspenseSlot(children.default);
    fallback = normalizeSuspenseSlot(children.fallback);
  } else {
    content = normalizeSuspenseSlot(children);
    fallback = normalizeVNode(null);
  }
  return {
    content,
    fallback
  };
}
function normalizeSuspenseSlot(s) {
  if (isFunction(s)) {
    s = s();
  }
  if (isArray(s)) {
    const singleChild = filterSingleRoot(s);
    s = singleChild;
  }
  return normalizeVNode(s);
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
let isRenderingCompiledSlot = 0;
const setCompiledSlotRendering = (n) => isRenderingCompiledSlot += n;
function renderSlot(slots, name, props = {}, fallback) {
  let slot = slots[name];
  isRenderingCompiledSlot++;
  const rendered = (openBlock(), createBlock(Fragment, {key: props.key}, slot ? slot(props) : fallback ? fallback() : [], slots._ === 1 ? 64 : -2));
  isRenderingCompiledSlot--;
  return rendered;
}
function withCtx(fn, ctx = currentRenderingInstance) {
  if (!ctx)
    return fn;
  const renderFnWithContext = (...args) => {
    if (!isRenderingCompiledSlot) {
      openBlock(true);
    }
    const owner = currentRenderingInstance;
    setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(owner);
    if (!isRenderingCompiledSlot) {
      closeBlock();
    }
    return res;
  };
  renderFnWithContext._c = true;
  return renderFnWithContext;
}
let currentScopeId = null;
const scopeIdStack = [];
function pushScopeId(id2) {
  scopeIdStack.push(currentScopeId = id2);
}
function popScopeId() {
  scopeIdStack.pop();
  currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
function withScopeId(id2) {
  return (fn) => withCtx(function() {
    pushScopeId(id2);
    const res = fn.apply(this, arguments);
    popScopeId();
    return res;
  });
}
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
    const {mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: {insert, querySelector, createText, createComment}} = internals;
    const disabled = isTeleportDisabled(n2.props);
    const {shapeFlag, children} = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target) {
        insert(targetAnchor, target);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, optimized);
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (n2.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG);
        if (n2.shapeFlag & 16) {
          const oldChildren = n1.children;
          const children2 = n2.children;
          for (let i = 0; i < children2.length; i++) {
            if (!children2[i].el) {
              children2[i].el = oldChildren[i].el;
            }
          }
        }
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          }
        } else if (wasDisabled) {
          moveTeleport(n2, target, targetAnchor, internals, 1);
        }
      }
    }
  },
  remove(vnode, {r: remove2, o: {remove: hostRemove}}) {
    const {shapeFlag, children, anchor} = vnode;
    hostRemove(anchor);
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        remove2(children[i]);
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, {o: {insert}, m: move}, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const {el, anchor, shapeFlag, children, props} = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, {o: {nextSibling, parentNode, querySelector}}, hydrateChildren) {
  const target = vnode.target = resolveTarget(vnode.props, querySelector);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
      }
      target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
const COMPONENTS = "components";
function resolveComponent(name) {
  return resolveAsset(COMPONENTS, name) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveAsset(type, name, warnMissing = true) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = Component.displayName || Component.name;
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true);
  vnode.dynamicChildren = currentBlock || EMPTY_ARR;
  closeBlock();
  if (currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({key}) => key != null ? key : null;
const normalizeRef = ({ref: ref2}) => {
  return ref2 != null ? isArray(ref2) ? ref2 : {i: currentRenderingInstance, r: ref2} : null;
};
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    if (isProxy(props) || InternalObjectKey in props) {
      props = extend({}, props);
    }
    let {class: klass, style} = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  const vnode = {
    __v_isVNode: true,
    ["__v_skip"]: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    children: null,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  normalizeChildren(vnode, children);
  if (shapeFlag & 128) {
    const {content, fallback} = normalizeSuspenseChildren(vnode);
    vnode.ssContent = content;
    vnode.ssFallback = fallback;
  }
  if (!isBlockNode && currentBlock && (patchFlag > 0 || shapeFlag & 6) && patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const {props, ref: ref2, patchFlag} = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  return {
    __v_isVNode: true,
    ["__v_skip"]: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    children: vnode.children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(Fragment, null, child);
  } else if (typeof child === "object") {
    return child.el === null ? child : cloneVNode(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const {shapeFlag} = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & 1 || shapeFlag & 64) {
      const slot = children.default;
      if (slot) {
        slot._c && setCompiledSlotRendering(1);
        normalizeChildren(vnode, slot());
        slot._c && setCompiledSlotRendering(-1);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.vnode.patchFlag & 1024) {
          children._ = 2;
          vnode.patchFlag |= 1024;
        } else {
          children._ = 1;
        }
      }
    }
  } else if (isFunction(children)) {
    children = {default: children, _ctx: currentRenderingInstance};
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = extend({}, args[0]);
  for (let i = 1; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (existing !== incoming) {
          ret[key] = existing ? [].concat(existing, toMerge[key]) : incoming;
        }
      } else {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  setFullProps(instance, rawProps, props, attrs);
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {props, attrs, vnode: {patchFlag}} = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        const key = propsToUpdate[i];
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            attrs[key] = value;
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
          }
        } else {
          attrs[key] = value;
        }
      }
    }
  } else {
    setFullProps(instance, rawProps, props, attrs);
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawProps || EMPTY_OBJ, key, void 0, instance);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key)) {
          delete attrs[key];
        }
      }
    }
  }
  trigger(instance, "set", "$attrs");
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  if (rawProps) {
    for (const key in rawProps) {
      const value = rawProps[key];
      if (isReservedProp(key)) {
        continue;
      }
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        props[camelKey] = value;
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        attrs[key] = value;
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key], instance);
    }
  }
}
function resolvePropValue(options, props, key, value, instance) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        setCurrentInstance(instance);
        value = defaultValue(props);
        setCurrentInstance(null);
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const appId = appContext.app ? appContext.app._uid : -1;
  const cache = comp.__props || (comp.__props = {});
  const cached = cache[appId];
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    return cache[appId] = EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? {type: opt} : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  return cache[appId] = [normalized, needCastKeys];
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    for (let i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      setCurrentInstance(null);
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
const onErrorCaptured = (hook, target = currentInstance) => {
  injectHook("ec", hook, target);
};
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, {slots}) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const rawProps = toRaw(props);
      const {mode} = rawProps;
      const child = children[0];
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const {getTransitionKey} = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out") {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const {leavingVNodes} = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const {appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled} = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        hook(el, done);
        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        onLeave(el, done);
        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } else if (keepComment || child.type !== Comment) {
      ret.push(child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => withCtx((props) => {
  return normalizeSlotValue(rawSlot(props));
}, ctx);
const normalizeObjectSlots = (rawSlots, slots) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = children;
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children) => {
  const {vnode, slots} = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {default: 1};
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    const hook = binding.dir[name];
    if (hook) {
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
    }
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      isCustomElement: NO,
      errorHandler: void 0,
      warnHandler: void 0
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null)
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = new Set();
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        }
        return app2;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app2;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          return vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render2(null, app2._container);
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app2;
      }
    };
    return app2;
  };
}
const prodEffectOptions = {
  scheduler: queueJob,
  allowRecurse: true
};
const queuePostRenderEffect = queueEffectWithSuspense;
const setRef = (rawRef, oldRawRef, parentComponent, parentSuspense, vnode) => {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentComponent, parentSuspense, vnode));
    return;
  }
  let value;
  if (!vnode) {
    value = null;
  } else {
    if (vnode.shapeFlag & 4) {
      value = vnode.component.proxy;
    } else {
      value = vnode.el;
    }
  }
  const {i: owner, r: ref2} = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isString(ref2)) {
    const doSet = () => {
      refs[ref2] = value;
      if (hasOwn(setupState, ref2)) {
        setupState[ref2] = value;
      }
    };
    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if (isRef(ref2)) {
    const doSet = () => {
      ref2.value = value;
    };
    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if (isFunction(ref2)) {
    callWithErrorHandling(ref2, parentComponent, 12, [
      value,
      refs
    ]);
  }
};
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const {insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, forcePatchProp: hostForcePatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent} = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const {type, ref: ref2, shapeFlag} = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentComponent, parentSuspense, n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    let el;
    let vnodeHook;
    const {type, props, shapeFlag, transition, scopeId, patchFlag, dirs} = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", optimized || !!vnode.dynamicChildren);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (!isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, scopeId, vnode, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, scopeId, vnode, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (parentComponent) {
      const treeOwnerId = parentComponent.type.__scopeId;
      if (treeOwnerId && treeOwnerId !== scopeId) {
        hostSetScopeId(el, treeOwnerId + "-s");
      }
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, start2 = 0) => {
    for (let i = start2; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, optimized) => {
    const el = n2.el = n1.el;
    let {patchFlag, dynamicChildren, dirs} = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 6 || oldVNode.shapeFlag & 64 ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let {patchFlag, dynamicChildren} = n2;
    if (patchFlag > 0) {
      optimized = true;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    setupComponent(instance);
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    instance.update = effect(function componentEffect() {
      if (!instance.isMounted) {
        let vnodeHook;
        const {el, props} = initialVNode;
        const {bm, m, parent} = instance;
        if (bm) {
          invokeArrayFns(bm);
        }
        if (vnodeHook = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        const subTree = instance.subTree = renderComponentRoot(instance);
        if (el && hydrateNode) {
          hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
        } else {
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (vnodeHook = props && props.onVnodeMounted) {
          queuePostRenderEffect(() => {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }, parentSuspense);
        }
        const {a} = instance;
        if (a && initialVNode.shapeFlag & 256) {
          queuePostRenderEffect(a, parentSuspense);
        }
        instance.isMounted = true;
      } else {
        let {next, bu, u, parent, vnode} = instance;
        let originNext = next;
        let vnodeHook;
        if (next) {
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        next.el = vnode.el;
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (instance.refs !== EMPTY_OBJ) {
          instance.refs = {};
        }
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }, parentSuspense);
        }
      }
    }, prodEffectOptions);
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children);
    flushPreFlushCbs(void 0, instance.update);
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const {patchFlag, shapeFlag} = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const {el, type, transition, children, shapeFlag} = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const {leave, delayLeave, afterLeave} = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false) => {
    const {type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs} = vnode;
    if (ref2 != null && parentComponent) {
      setRef(ref2, null, parentComponent, parentSuspense, null);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    let vnodeHook;
    if (vnodeHook = props && props.onVnodeBeforeUnmount) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense);
      } else if (shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, internals);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const {type, el, anchor, transition} = vnode;
    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const {leave, delayLeave} = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end2) => {
    let next;
    while (cur !== end2) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end2);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const {bum, effects, update, subTree, um} = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    if (effects) {
      for (let i = 0; i < effects.length; i++) {
        stop(effects[i]);
      }
    }
    if (update) {
      stop(update);
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, start2 = 0) => {
    for (let i = start2; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const traverseStaticChildren = (n1, n2, shallow = false) => {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        const c2 = ch2[i] = cloneIfMounted(ch2[i]);
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
      }
    }
  };
  const render2 = (vnode, container) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = (u + v) / 2 | 0;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, {immediate, deep, flush, onTrack, onTrigger} = EMPTY_OBJ, instance = currentInstance) {
  let getter;
  const isRefSource = isRef(source);
  if (isRefSource) {
    getter = () => source.value;
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup2) {
          cleanup2();
        }
        return callWithErrorHandling(source, instance, 3, [onInvalidate]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup2;
  const onInvalidate = (fn) => {
    cleanup2 = runner.options.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let oldValue = isArray(source) ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!runner.active) {
      return;
    }
    if (cb) {
      const newValue = runner();
      if (deep || isRefSource || hasChanged(newValue, oldValue)) {
        if (cleanup2) {
          cleanup2();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onInvalidate
        ]);
        oldValue = newValue;
      }
    } else {
      runner();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        job();
      }
    };
  }
  const runner = effect(getter, {
    lazy: true,
    onTrack,
    onTrigger,
    scheduler
  });
  recordInstanceBoundEffect(runner);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = runner();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(runner, instance && instance.suspense);
  } else {
    runner();
  }
  return () => {
    stop(runner);
    if (instance) {
      remove(instance.effects, runner);
    }
  };
}
function instanceWatch(source, cb, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? () => publicThis[source] : source.bind(publicThis);
  return doWatch(getter, cb.bind(publicThis), options, this);
}
function traverse(value, seen = new Set()) {
  if (!isObject(value) || seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isMap(value)) {
    value.forEach((_, key) => {
      traverse(value.get(key), seen);
    });
  } else if (isSet(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.provides;
    if (key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
  }
}
let isInBeforeCreate = false;
function applyOptions(instance, options, deferredData = [], deferredWatch = [], asMixin = false) {
  const {
    mixins,
    extends: extendsOptions,
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    components,
    directives,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured
  } = options;
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  const globalMixins = instance.appContext.mixins;
  if (asMixin && render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (!asMixin) {
    isInBeforeCreate = true;
    callSyncHook("beforeCreate", options, publicThis, globalMixins);
    isInBeforeCreate = false;
    applyMixins(instance, globalMixins, deferredData, deferredWatch);
  }
  if (extendsOptions) {
    applyOptions(instance, extendsOptions, deferredData, deferredWatch, true);
  }
  if (mixins) {
    applyMixins(instance, mixins, deferredData, deferredWatch);
  }
  if (injectOptions) {
    if (isArray(injectOptions)) {
      for (let i = 0; i < injectOptions.length; i++) {
        const key = injectOptions[i];
        ctx[key] = inject(key);
      }
    } else {
      for (const key in injectOptions) {
        const opt = injectOptions[key];
        if (isObject(opt)) {
          ctx[key] = inject(opt.from || key, opt.default, true);
        } else {
          ctx[key] = inject(opt);
        }
      }
    }
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        ctx[key] = methodHandler.bind(publicThis);
      }
    }
  }
  if (!asMixin) {
    if (deferredData.length) {
      deferredData.forEach((dataFn) => resolveData(instance, dataFn, publicThis));
    }
    if (dataOptions) {
      resolveData(instance, dataOptions, publicThis);
    }
  } else if (dataOptions) {
    deferredData.push(dataOptions);
  }
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed$1({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    deferredWatch.push(watchOptions);
  }
  if (!asMixin && deferredWatch.length) {
    deferredWatch.forEach((watchOptions2) => {
      for (const key in watchOptions2) {
        createWatcher(watchOptions2[key], ctx, publicThis, key);
      }
    });
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    for (const key in provides) {
      provide(key, provides[key]);
    }
  }
  if (asMixin) {
    if (components) {
      extend(instance.components || (instance.components = extend({}, instance.type.components)), components);
    }
    if (directives) {
      extend(instance.directives || (instance.directives = extend({}, instance.type.directives)), directives);
    }
  }
  if (!asMixin) {
    callSyncHook("created", options, publicThis, globalMixins);
  }
  if (beforeMount) {
    onBeforeMount(beforeMount.bind(publicThis));
  }
  if (mounted) {
    onMounted(mounted.bind(publicThis));
  }
  if (beforeUpdate) {
    onBeforeUpdate(beforeUpdate.bind(publicThis));
  }
  if (updated) {
    onUpdated(updated.bind(publicThis));
  }
  if (activated) {
    onActivated(activated.bind(publicThis));
  }
  if (deactivated) {
    onDeactivated(deactivated.bind(publicThis));
  }
  if (errorCaptured) {
    onErrorCaptured(errorCaptured.bind(publicThis));
  }
  if (renderTracked) {
    onRenderTracked(renderTracked.bind(publicThis));
  }
  if (renderTriggered) {
    onRenderTriggered(renderTriggered.bind(publicThis));
  }
  if (beforeUnmount) {
    onBeforeUnmount(beforeUnmount.bind(publicThis));
  }
  if (unmounted) {
    onUnmounted(unmounted.bind(publicThis));
  }
}
function callSyncHook(name, options, ctx, globalMixins) {
  callHookFromMixins(name, globalMixins, ctx);
  const {extends: base, mixins} = options;
  if (base) {
    callHookFromExtends(name, base, ctx);
  }
  if (mixins) {
    callHookFromMixins(name, mixins, ctx);
  }
  const selfHook = options[name];
  if (selfHook) {
    selfHook.call(ctx);
  }
}
function callHookFromExtends(name, base, ctx) {
  if (base.extends) {
    callHookFromExtends(name, base.extends, ctx);
  }
  const baseHook = base[name];
  if (baseHook) {
    baseHook.call(ctx);
  }
}
function callHookFromMixins(name, mixins, ctx) {
  for (let i = 0; i < mixins.length; i++) {
    const chainedMixins = mixins[i].mixins;
    if (chainedMixins) {
      callHookFromMixins(name, chainedMixins, ctx);
    }
    const fn = mixins[i][name];
    if (fn) {
      fn.call(ctx);
    }
  }
}
function applyMixins(instance, mixins, deferredData, deferredWatch) {
  for (let i = 0; i < mixins.length; i++) {
    applyOptions(instance, mixins[i], deferredData, deferredWatch, true);
  }
}
function resolveData(instance, dataFn, publicThis) {
  const data = dataFn.call(publicThis, publicThis);
  if (!isObject(data))
    ;
  else if (instance.data === EMPTY_OBJ) {
    instance.data = reactive(data);
  } else {
    extend(instance.data, data);
  }
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  }
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function resolveMergedOptions(instance) {
  const raw = instance.type;
  const {__merged, mixins, extends: extendsOptions} = raw;
  if (__merged)
    return __merged;
  const globalMixins = instance.appContext.mixins;
  if (!globalMixins.length && !mixins && !extendsOptions)
    return raw;
  const options = {};
  globalMixins.forEach((m) => mergeOptions(options, m, instance));
  mergeOptions(options, raw, instance);
  return raw.__merged = options;
}
function mergeOptions(to, from, instance) {
  const strats = instance.appContext.config.optionMergeStrategies;
  const {mixins, extends: extendsOptions} = from;
  extendsOptions && mergeOptions(to, extendsOptions, instance);
  mixins && mixins.forEach((m) => mergeOptions(to, m, instance));
  for (const key in from) {
    if (strats && hasOwn(strats, key)) {
      to[key] = strats[key](to[key], from[key], instance.proxy, key);
    } else {
      to[key] = from[key];
    }
  }
}
const publicPropertiesMap = extend(Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => i.props,
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
  $refs: (i) => i.refs,
  $parent: (i) => i.parent && i.parent.proxy,
  $root: (i) => i.root && i.root.proxy,
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => () => queueJob(i.update),
  $nextTick: () => nextTick,
  $watch: (i) => instanceWatch.bind(i)
});
const PublicInstanceProxyHandlers = {
  get({_: instance}, key) {
    const {ctx, setupState, data, props, accessCache, type, appContext} = instance;
    if (key === "__v_skip") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 0:
            return setupState[key];
          case 1:
            return data[key];
          case 3:
            return ctx[key];
          case 2:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 0;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 1;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 2;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 3;
        return ctx[key];
      } else if (!isInBeforeCreate) {
        accessCache[key] = 4;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 3;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      return globalProperties[key];
    }
  },
  set({_: instance}, key, value) {
    const {data, setupState, ctx} = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
    } else if (key in instance.props) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({_: {data, setupState, accessCache, ctx, appContext, propsOptions}}, key) {
    let normalizedProps;
    return accessCache[key] !== void 0 || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  }
};
const RuntimeCompiledPublicInstanceProxyHandlers = extend({}, PublicInstanceProxyHandlers, {
  get(target, key) {
    if (key === Symbol.unscopables) {
      return;
    }
    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has(_, key) {
    const has2 = key[0] !== "_" && !isGloballyWhitelisted(key);
    return has2;
  }
});
const emptyAppContext = createAppContext();
let uid$1$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    update: null,
    render: null,
    proxy: null,
    withProxy: null,
    effects: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null
  };
  {
    instance.ctx = {_: instance};
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
};
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const {props, children, shapeFlag} = instance.vnode;
  const isStateful = shapeFlag & 4;
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = {};
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const {setup} = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    currentInstance = instance;
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    currentInstance = null;
    if (isPromise(setupResult)) {
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult);
    }
  } else {
    finishComponentSetup(instance);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    instance.render = setupResult;
  } else if (isObject(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  }
  finishComponentSetup(instance);
}
function finishComponentSetup(instance, isSSR) {
  const Component = instance.type;
  if (!instance.render) {
    instance.render = Component.render || NOOP;
    if (instance.render._rc) {
      instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  }
  {
    currentInstance = instance;
    applyOptions(instance, Component);
    currentInstance = null;
  }
}
function createSetupContext(instance) {
  {
    return {
      attrs: instance.attrs,
      slots: instance.slots,
      emit: instance.emit
    };
  }
}
function recordInstanceBoundEffect(effect2) {
  if (currentInstance) {
    (currentInstance.effects || (currentInstance.effects = [])).push(effect2);
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function formatComponentName(instance, Component, isRoot = false) {
  let name = isFunction(Component) ? Component.displayName || Component.name : Component.name;
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.vue$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
function computed$1(getterOrOptions) {
  const c = computed(getterOrOptions);
  recordInstanceBoundEffect(c.effect);
  return c;
}
function defineComponent(options) {
  return isFunction(options) ? {setup: options, name: options.name} : options;
}
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
function renderList(source, renderItem) {
  let ret;
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, renderItem);
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
const version = "3.0.0";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
let tempContainer;
let tempSVGContainer;
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is) => isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {is} : void 0),
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id2) {
    el.setAttribute(id2, "");
  },
  cloneNode(el) {
    return el.cloneNode(true);
  },
  insertStaticContent(content, parent, anchor, isSVG) {
    const temp = isSVG ? tempSVGContainer || (tempSVGContainer = doc.createElementNS(svgNS, "svg")) : tempContainer || (tempContainer = doc.createElement("div"));
    temp.innerHTML = content;
    const first = temp.firstChild;
    let node = first;
    let last = node;
    while (node) {
      last = node;
      nodeOps.insert(node, parent, anchor);
      node = temp.firstChild;
    }
    return [first, last];
  }
};
function patchClass(el, value, isSVG) {
  if (value == null) {
    value = "";
  }
  if (isSVG) {
    el.setAttribute("class", value);
  } else {
    const transitionClasses = el._vtc;
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  if (!next) {
    el.removeAttribute("style");
  } else if (isString(next)) {
    if (prev !== next) {
      style.cssText = next;
    }
  } else {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS") {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue) {
      el.value = newValue;
    }
    return;
  }
  if (value === "" && typeof el[key] === "boolean") {
    el[key] = true;
  } else if (value == null && typeof el[key] === "string") {
    el[key] = "";
    el.removeAttribute(key);
  } else {
    try {
      el[key] = value;
    } catch (e) {
    }
  }
}
let _getNow = Date.now;
if (typeof document !== "undefined" && _getNow() > document.createEvent("Event").timeStamp) {
  _getNow = () => performance.now();
}
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [name.slice(2).toLowerCase(), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    const timeStamp = e.timeStamp || _getNow();
    if (timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === "value";
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  switch (key) {
    case "class":
      patchClass(el, nextValue, isSVG);
      break;
    case "style":
      patchStyle(el, prevValue, nextValue);
      break;
    default:
      if (isOn(key)) {
        if (!isModelListener(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        if (key === "true-value") {
          el._trueValue = nextValue;
        } else if (key === "false-value") {
          el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
      }
      break;
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable") {
    return false;
  }
  if (key === "form" && typeof value === "string") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, {slots}) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
function resolveTransitionProps(rawProps) {
  let {name = "v", type, css = true, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to`} = rawProps;
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (!css) {
    return baseProps;
  }
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled} = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      hook && hook(el, resolve2);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!(hook && hook.length > 1)) {
          if (enterDuration) {
            setTimeout(resolve2, enterDuration);
          } else {
            whenTransitionEnds(el, type, resolve2);
          }
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      onBeforeEnter && onBeforeEnter(el);
      addTransitionClass(el, enterActiveClass);
      addTransitionClass(el, enterFromClass);
    },
    onBeforeAppear(el) {
      onBeforeAppear && onBeforeAppear(el);
      addTransitionClass(el, appearActiveClass);
      addTransitionClass(el, appearFromClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveActiveClass);
      addTransitionClass(el, leaveFromClass);
      nextFrame(() => {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!(onLeave && onLeave.length > 1)) {
          if (leaveDuration) {
            setTimeout(resolve2, leaveDuration);
          } else {
            whenTransitionEnds(el, type, resolve2);
          }
        }
      });
      onLeave && onLeave(el, resolve2);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      onEnterCancelled && onEnterCancelled(el);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      onAppearCancelled && onAppearCancelled(el);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      onLeaveCancelled && onLeaveCancelled(el);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const {_vtc} = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
function whenTransitionEnds(el, expectedType, cb) {
  const {type, timeout, propCount} = getTransitionInfo(el, expectedType);
  if (!type) {
    return cb();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end2 = () => {
    el.removeEventListener(endEvent, onEnd);
    cb();
  };
  const onEnd = (e) => {
    if (e.target === el) {
      if (++ended >= propCount) {
        end2();
      }
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end2();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
const vShow = {
  beforeMount(el, {value}, {transition}) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, {value}, {transition}) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, {value, oldValue}, {transition}) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, {value}) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = extend({patchProp, forcePatchProp}, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app2 = ensureRenderer().createApp(...args);
  const {mount} = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app2._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container);
    container.removeAttribute("v-cloak");
    container.setAttribute("data-v-app", "");
    return proxy;
  };
  return app2;
};
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
/*!
  * vue-router v4.0.0-beta.13
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = PolySymbol("rvlm");
const viewDepthKey = PolySymbol("rvd");
const routerKey = PolySymbol("r");
const routeLocationKey = PolySymbol("rl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
let noop = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash2 = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash2 = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash2,
    path,
    query,
    hash: hash2
  };
}
function stringifyURL(stringifyQuery2, location2) {
  let query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || pathname.toLowerCase().indexOf(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  let aLastIndex = a.matched.length - 1;
  let bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (let key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset2) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset2.behavior,
    left: elRect.left - docRect.left - (offset2.left || 0),
    top: elRect.top - docRect.top - (offset2.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    let positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const {pathname, search, hash: hash2} = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let pathFromHash = hash2.slice(1);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash2;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({state}) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const {history: history2} = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, {scroll: computeScrollPosition()}), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const {history: history2, location: location2} = window;
  let currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  let historyState = {value: history2.state};
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? base.slice(hashIndex) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, {position: historyState.value.position});
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), {position: currentState.position + 1}, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  let score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const {value, repeatable, optional, regexp} = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const {value, repeatable, optional} = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (path.endsWith("/"))
                path = path.slice(0, -1);
              else
                avoidDuplicatedSlash = true;
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  return bScore.length - aScore.length;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
          customRe = "";
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = new Map();
  globalOptions = mergeOptions$1({strict: false, end: true, sensitive: false}, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    let isRootAdd = !originalRecord;
    let mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions$1(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      let {path} = normalizedRecord;
      if (parent && path[0] !== "/") {
        let parentPath = parent.record.path;
        let connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        let children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      let index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0)
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return {addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher};
}
function paramsFromLocation(params, keys) {
  let newParams = {};
  for (let key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: [],
    updateGuards: [],
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : {default: record.component}
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (let name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions$1(defaults, partialOptions) {
  let options = {};
  for (let key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i];
    let eqPos = searchParam.indexOf("=");
    let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    if (search.length)
      search += "&";
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0)
        search += key;
      continue;
    }
    let values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    for (let i = 0; i < values.length; i++) {
      search += (i ? "&" : "") + key;
      if (values[i] != null)
        search += "=" + values[i];
    }
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (let key in query) {
    let value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers = [];
  function add2(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset2() {
    handlers = [];
  }
  return {
    add: add2,
    list: () => handlers,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        let options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        {
          componentPromise = componentPromise.catch(console.error);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const guard = resolvedComponent[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed$1(() => router2.resolve(unref(props.to)));
  const activeRecordIndex = computed$1(() => {
    let {matched} = route.value;
    let {length} = matched;
    const routeMatched = matched[length - 1];
    let currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    let index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    let parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed$1(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed$1(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e))
      return router2[unref(props.replace) ? "replace" : "push"](unref(props.to));
    return Promise.resolve();
  }
  return {
    route,
    href: computed$1(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  setup(props, {slots, attrs}) {
    const link = reactive(useLink(props));
    const {options} = inject(routerKey);
    const elClass = computed$1(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", assign({
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        onClick: link.navigate,
        href: link.href
      }, attrs, {
        class: elClass.value
      }), children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (let key in inner) {
    let innerValue = inner[key];
    let outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
let getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = defineComponent({
  name: "RouterView",
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  setup(props, {attrs, slots}) {
    const injectedRoute = inject(routeLocationKey);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed$1(() => (props.route || injectedRoute).matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && instance === oldInstance) {
          to.leaveGuards = from.leaveGuards;
          to.updateGuards = from.updateGuards;
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, {flush: "post"});
    return () => {
      const route = props.route || injectedRoute;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return slots.default ? slots.default({Component: ViewComponent, route}) : null;
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return slots.default ? slots.default({Component: component, route}) : component;
    };
  }
});
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  let parseQuery$1 = options.parseQuery || parseQuery;
  let stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  let {scrollBehavior} = options;
  let routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    let recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      let locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      let matchedRoute2 = matcher.resolve({path: locationNormalized.path}, currentLocation);
      let href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash2 = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash2),
      path: matchedRoute.path
    }));
    let href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      hash: hash2,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? {path: to} : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), {replace: true}));
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const lastMatched = targetLocation.matched[targetLocation.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const {redirect} = lastMatched;
      let newTargetLocation = locationAsObject(typeof redirect === "function" ? redirect(targetLocation) : redirect);
      return pushWithRedirect(assign({
        query: targetLocation.query,
        hash: targetLocation.hash,
        params: targetLocation.params
      }, newTargetLocation, {
        state: data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    }
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, {to: toLocation, from});
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => {
      if (isNavigationFailure(error, 4 | 8 | 2)) {
        return error;
      }
      return triggerError(error);
    }).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(assign(locationAsObject(failure2.to), {
            state: data,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      for (const guard of record.leaveGuards) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        for (const guard of record.updateGuards) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && from.matched.indexOf(record) < 0) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          if (info.delta)
            routerHistory.go(-info.delta, false);
          pushWithRedirect(error.to, toLocation).catch(noop);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure && info.delta)
          routerHistory.go(-info.delta, false);
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error) {
    markAsReady(error);
    errorHandlers.list().forEach((handler) => handler(error));
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (ready)
      return;
    ready = true;
    setupListeners();
    readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
    readyHandlers.reset();
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    let scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch(triggerError);
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = new Set();
  const router2 = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app2) {
      const router3 = this;
      app2.component("RouterLink", RouterLink);
      app2.component("RouterView", RouterView);
      app2.config.globalProperties.$router = router3;
      Object.defineProperty(app2.config.globalProperties, "$route", {
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (let key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed$1(() => currentRoute.value[key]);
      }
      app2.provide(routerKey, router3);
      app2.provide(routeLocationKey, reactive(reactiveRoute));
      let unmountApp = app2.unmount;
      installedApps.add(app2);
      app2.unmount = function() {
        installedApps.delete(app2);
        if (installedApps.size < 1) {
          removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp.call(this, arguments);
      };
    }
  };
  return router2;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.indexOf(recordFrom) < 0)
        leavingRecords.push(recordFrom);
      else
        updatingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (from.matched.indexOf(recordTo) < 0)
        enteringRecords.push(recordTo);
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
var menus2 = [
  {
    title: "Basic",
    items: ["grid", "layout", "tile", "icon", "button", "link"]
  },
  {
    title: "Navigation",
    items: ["menu"]
  },
  {
    title: "Notice",
    items: ["alert"]
  },
  {
    title: "Others",
    items: ["popover", ""]
  }
];
var script = defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
});
var _imports_0 = "/_assets/logo.378e4005.png";
const _withId = /* @__PURE__ */ withScopeId("data-v-469af010");
pushScopeId("data-v-469af010");
const _hoisted_1 = {class: "hello"};
const _hoisted_2 = /* @__PURE__ */ createVNode("img", {
  style: {width: "80px", height: "80px"},
  alt: "Vue logo",
  src: _imports_0
}, null, -1);
popScopeId();
const render = /* @__PURE__ */ _withId(function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode("h1", null, toDisplayString(_ctx.msg), 1)
  ]);
});
;
script.render = render;
script.__scopeId = "data-v-469af010";
script.__file = "src/components/HelloWorld.vue";
var script$1 = defineComponent({
  components: {
    HelloWorld: script
  },
  setup() {
    const router2 = useRouter();
    const push = (e) => {
      router2.push(e);
    };
    return {
      push,
      menus: menus2
    };
  }
});
const _hoisted_1$1 = {class: "demo-layout"};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HelloWorld = resolveComponent("HelloWorld");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_menu_item_group = resolveComponent("el-menu-item-group");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_ElAside = resolveComponent("ElAside");
  const _component_router_view = resolveComponent("router-view");
  const _component_ElMain = resolveComponent("ElMain");
  const _component_ElContainer = resolveComponent("ElContainer");
  return openBlock(), createBlock("div", _hoisted_1$1, [
    createVNode(_component_ElContainer, {direction: "horizontal"}, {
      default: withCtx(() => [
        createVNode(_component_ElAside, {class: "demo-aside"}, {
          default: withCtx(() => [
            createVNode(_component_HelloWorld, {msg: "Hello Elenext UI23"}),
            createVNode(_component_el_menu, null, {
              default: withCtx(() => [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.menus, (menu) => {
                  return openBlock(), createBlock(_component_el_menu_item_group, {
                    key: menu.title
                  }, {
                    title: withCtx(() => [
                      createTextVNode(toDisplayString(menu.title), 1)
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(menu.items, (item) => {
                        return openBlock(), createBlock(_component_el_menu_item, {
                          onClick: ($event) => _ctx.push({name: item})
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 256))
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ElMain, {class: "demo-content"}, {
          default: withCtx(() => [
            createVNode(_component_router_view)
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
;
script$1.render = render$1;
script$1.__file = "src/components/Layout.vue";
const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    {path: "/home", redirect: "/"},
    {
      path: "/",
      name: "Layout",
      component: script$1,
      children: [
        {
          path: "/button",
          name: "button",
          component: async () => import("./Button.zh-CN.8ad88186.js")
        }
      ]
    }
  ]
});
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
function getWindow(node) {
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }
  return node;
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return (isElement(element) ? element.ownerDocument : element.document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || element.host || getDocumentElement(element);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === "body";
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  var offsetParent = element.offsetParent;
  if (offsetParent) {
    var html = getDocumentElement(offsetParent);
    if (getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && getComputedStyle(html).position !== "static") {
      return html;
    }
  }
  return offsetParent;
}
function getContainingBlock(element) {
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.willChange && css.willChange !== "auto") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static") {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve2) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve2(fn());
        });
      });
    }
    return pending;
  };
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function contains(parent, child) {
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host);
  if (parent.contains(child)) {
    return true;
  } else if (isShadow) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(options2) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn === "function") {
            state = fn({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve2) {
          instance.forceUpdate();
          resolve2(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$1(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$1,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsets(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive;
  var _roundOffsets = roundOffsets(offsets), x = _roundOffsets.x, y = _roundOffsets.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
    }
    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref3) {
  var state = _ref3.state, options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false
    })));
  }
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign(Object.assign({}, rects), {}, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash$1 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash$1[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min = popperOffsets2[mainAxis] + overflow[mainSide];
    var max = popperOffsets2[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset2, tether ? Math.max(max, tetherMax) : max);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var _preventedOffset = within(_min, _offset, _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min, center, max);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$3(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element, _options$padding = options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements))
  };
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function createCommonjsModule$1(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire$1(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire$1() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var _extends_1 = createCommonjsModule$1(function(module) {
  function _extends() {
    module.exports = _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  module.exports = _extends;
});
function createEl(id2, cls) {
  var el = document.createElement("div");
  el.id = id2;
  if (cls) {
    el.className = cls;
  }
  document.body.appendChild(el);
  return el;
}
function removeEl(el) {
  if (el.parentNode)
    el.parentNode.removeChild(el);
}
function normalizeClass$1(value) {
  var res = "";
  if (typeof value === "string") {
    res = value;
  } else if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      res += normalizeClass$1(value[i]) + " ";
    }
  } else if (value !== null && typeof value === "object") {
    for (var name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function hasClass(el, cls) {
  if (!el || !cls)
    return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}
function addClass(el, cls) {
  if (!el)
    return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
var trim = function trim2(str) {
  return (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
var config = {
  prefixCls: "el"
};
function getCompName(name) {
  return config.prefixCls.charAt(0).toUpperCase() + config.prefixCls.slice(1) + name;
}
function getBlockCls(block) {
  return config.prefixCls + "-" + block;
}
var RESPONSIVE_ARRAY = ["xl", "lg", "md", "sm", "xs"];
var RESPONSIVE_MAP = {
  xs: "(max-width: 767px)",
  sm: "(min-width: 768px)",
  md: "(min-width: 992px)",
  lg: "(min-width: 1200px)",
  xl: "(min-width: 1400px)"
};
function useBreakpoint() {
  var keys = Object.keys(RESPONSIVE_MAP);
  var screens = reactive({});
  var headlers = {};
  onMounted(function() {
    keys.forEach(function(screen) {
      var matchMediaQuery = RESPONSIVE_MAP[screen];
      var mql = window.matchMedia(matchMediaQuery);
      var listener = function listener2(_ref) {
        var matches = _ref.matches;
        screens[screen] = matches;
      };
      mql.addListener(listener);
      headlers[matchMediaQuery] = {
        mql,
        listener
      };
      listener(mql);
    });
  });
  onUnmounted(function() {
    keys.forEach(function(screen) {
      var matchMediaQuery = RESPONSIVE_MAP[screen];
      var handler = headlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
  });
  return {
    screens
  };
}
var RowInjectKey = Symbol("Row");
var blockCls = getBlockCls("row");
var Row = defineComponent({
  name: getCompName("Row"),
  props: {
    gutter: {
      type: [Number, Array, Object],
      default: 0
    },
    align: {
      type: String,
      default: "top"
    },
    justify: {
      type: String,
      default: "start"
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useBreakpoint = useBreakpoint(), screens = _useBreakpoint.screens;
    var gutter = computed$1(function() {
      var propGutter = props.gutter;
      var getTuple = function getTuple2(arg) {
        if (Array.isArray(arg)) {
          return arg;
        } else {
          return [arg, arg];
        }
      };
      var results = [0, 0];
      if (typeof propGutter === "object" && !Array.isArray(propGutter)) {
        for (var i = 0; i < RESPONSIVE_ARRAY.length; i++) {
          var breakpoint = RESPONSIVE_ARRAY[i];
          if (screens[breakpoint] && propGutter[breakpoint] !== void 0) {
            results = getTuple(propGutter[breakpoint]);
            break;
          }
        }
      } else {
        results = getTuple(propGutter);
      }
      console.log("gutter", results);
      return results;
    });
    var classes = computed$1(function() {
      var _ref2;
      return normalizeClass$1([blockCls, (_ref2 = {}, _ref2[blockCls + "-" + props.justify] = props.justify, _ref2[blockCls + "-" + props.align] = props.align, _ref2)]);
    });
    var style = computed$1(function() {
      var _gutter$value = gutter.value, x = _gutter$value[0], y = _gutter$value[1];
      var ret = _extends_1({}, x > 0 ? {
        marginLeft: x / -2 + "px",
        marginRight: x / -2 + "px"
      } : {}, y > 0 ? {
        marginTop: y / -2 + "px",
        marginBottom: y / -2 + "px"
      } : {});
      return ret;
    });
    provide(RowInjectKey, {
      gutter
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        class: classes.value,
        style: style.value
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
function parseFlex(flex) {
  if (typeof flex === "number") {
    return flex + " " + flex + " auto";
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 " + flex;
  }
  return flex;
}
var defalutPropItem = {
  type: [Number, String],
  default: void 0
};
var sizePropItem = {
  type: [Number, Object],
  required: false
};
var blockCls$1 = getBlockCls("col");
var Col = defineComponent({
  name: getCompName("Col"),
  props: {
    span: defalutPropItem,
    order: defalutPropItem,
    offset: defalutPropItem,
    push: defalutPropItem,
    pull: defalutPropItem,
    xs: sizePropItem,
    sm: sizePropItem,
    md: sizePropItem,
    lg: sizePropItem,
    xl: sizePropItem,
    flex: {
      type: [Number, String],
      required: false
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _inject = inject(RowInjectKey, {
      gutter: ref([0, 0])
    }), gutter = _inject.gutter;
    var classes = computed$1(function() {
      var _ref2;
      var sizeObjs = [];
      RESPONSIVE_ARRAY.reverse().forEach(function(size2) {
        var sizeProps = {};
        var propSize = props[size2];
        if (typeof propSize !== "undefined") {
          var _sizeObjs$push;
          if (typeof propSize === "number") {
            sizeProps = {
              span: propSize
            };
          } else {
            sizeProps = propSize || {};
          }
          sizeObjs.push((_sizeObjs$push = {}, _sizeObjs$push[blockCls$1 + "-" + size2 + "-" + sizeProps.span] = sizeProps.span !== void 0, _sizeObjs$push[blockCls$1 + "-" + size2 + "-order-" + sizeProps.order] = sizeProps.order || sizeProps.order === 0, _sizeObjs$push[blockCls$1 + "-" + size2 + "-offset-" + sizeProps.offset] = sizeProps.offset || sizeProps.offset === 0, _sizeObjs$push[blockCls$1 + "-" + size2 + "-push-" + sizeProps.push] = sizeProps.push || sizeProps.push === 0, _sizeObjs$push[blockCls$1 + "-" + size2 + "-pull-" + sizeProps.pull] = sizeProps.pull || sizeProps.pull === 0, _sizeObjs$push));
        }
      });
      var ret = normalizeClass$1([blockCls$1, (_ref2 = {}, _ref2[blockCls$1 + "-" + props.span] = props.span, _ref2[blockCls$1 + "-order-" + props.order] = props.order, _ref2[blockCls$1 + "-offset-" + props.offset] = props.offset, _ref2[blockCls$1 + "-push-" + props.push] = props.push, _ref2[blockCls$1 + "-pull-" + props.pull] = props.pull, _ref2)].concat(sizeObjs));
      return ret;
    });
    var styles = computed$1(function() {
      var ret = {};
      var _gutter$value = gutter.value, x = _gutter$value[0], y = _gutter$value[1];
      ret = _extends_1({}, x > 0 ? {
        paddingLeft: x / 2 + "px",
        paddingRight: x / 2 + "px"
      } : {}, y > 0 ? {
        paddingTop: y / 2 + "px",
        paddingBottom: y / 2 + "px"
      } : {});
      if (props.flex) {
        ret.flex = parseFlex(props.flex);
      }
      return ret;
    });
    return function() {
      var _slots$default;
      return createVNode("div", {
        class: classes.value,
        style: styles.value
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var useClassNames = function useClassNames2(getter) {
  return computed$1(function() {
    return normalizeClass$1(getter());
  });
};
var blockCls$2 = getBlockCls("tile");
var Tile = defineComponent({
  name: getCompName("Tile"),
  props: {
    mode: {
      type: String,
      default: "horizontal"
    },
    span: {
      type: [Number, String],
      required: false
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var classes = useClassNames(function() {
      var _ref2;
      return _ref2 = {}, _ref2[blockCls$2] = true, _ref2["is-vertical"] = props.mode === "vertical", _ref2;
    });
    var styles = computed$1(function() {
      if (props.span) {
        if (typeof props.span === "number") {
          return {
            flex: "none",
            width: props.span / 24 * 100 + "%"
          };
        } else {
          return {
            flex: "none",
            width: props.span
          };
        }
      }
      return {};
    });
    return function() {
      var _slots$default;
      var children = (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var isParent = children === null || children === void 0 ? void 0 : children.every(function(child) {
        return child.type.name === getCompName("Tile");
      });
      return createVNode("div", {
        class: [classes.value, isParent ? "is-parent" : ""],
        style: styles.value
      }, [children]);
    };
  }
});
var ElHeader = defineComponent({
  name: "ElHeader",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    return function() {
      var _slots$default;
      return createVNode("header", {
        class: "el-header",
        style: {
          height: props.height
        }
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var ElFooter = defineComponent({
  name: "ElFooter",
  componentName: "ElFooter",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    return function() {
      var _slots$default;
      return createVNode("footer", mergeProps(attrs, {
        class: "el-footer",
        style: {
          height: props.height
        }
      }), [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var ElAside = defineComponent({
  name: "ElAside",
  props: {
    width: {
      type: String,
      default: "250px"
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    return function() {
      var _slots$default;
      return createVNode("aside", mergeProps(attrs, {
        class: "el-aside",
        style: {
          width: props.width
        }
      }), [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var ElMain = defineComponent({
  name: "ElMain",
  setup: function setup(_, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    return function() {
      var _slots$default;
      return createVNode("main", mergeProps(attrs, {
        class: "el-main"
      }), [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var Container = defineComponent({
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function() {
      var _slots$default;
      return createVNode("section", {
        class: {
          "el-container": true,
          "is-vertical": props.direction === "vertical"
        }
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var ElGlobalConfigSymbol = Symbol();
function useGlobal() {
  return inject(ElGlobalConfigSymbol, null);
}
var ElFormSymbol = Symbol();
var ElFormItemSymbol = Symbol();
var Button = defineComponent({
  name: "ElButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    shape: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    icon: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  setup: function setup(props, _ref) {
    var emit2 = _ref.emit, attrs = _ref.attrs, slots = _ref.slots;
    var elForm = inject(ElFormSymbol, null);
    var elFormItem = inject(ElFormItemSymbol, null);
    var elGlobalConfig = useGlobal();
    var buttonSize = computed$1(function() {
      return props.size || (elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize) || (elGlobalConfig === null || elGlobalConfig === void 0 ? void 0 : elGlobalConfig.size);
    });
    var buttonDisabled = computed$1(function() {
      return props.disabled || (elForm === null || elForm === void 0 ? void 0 : elForm.disabled);
    });
    return function() {
      var _slots$default;
      return createVNode("button", mergeProps(attrs, {
        disabled: buttonDisabled.value || props.loading,
        type: props.nativeType,
        class: ["el-button", "el-button-" + props.type, buttonSize.value ? "el-button-" + buttonSize.value : "", props.shape ? "is-" + props.shape : "", {
          "is-disabled": buttonDisabled.value,
          "is-loading": props.loading
        }]
      }), [props.loading && createVNode("i", {
        class: "el-icon-loading"
      }, null), props.icon && !props.loading && createVNode("i", {
        class: props.icon
      }, null), createVNode("span", null, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});
var ButtonGroup = defineComponent({
  name: "ElButtonGroup",
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    return function() {
      var _slots$default;
      return createVNode("div", mergeProps(attrs, {
        class: "el-button-group"
      }), [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var Link = defineComponent({
  name: "ElLink",
  inheritAttrs: false,
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "default"
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  setup: function setup(props, _ref) {
    var emit2 = _ref.emit, slots = _ref.slots, attrs = _ref.attrs;
    var handleClick = function handleClick2(event) {
      if (!props.disabled) {
        if (!props.href) {
          emit2("click", event);
        }
      }
    };
    return function() {
      var _slots$default;
      return createVNode("a", mergeProps(_extends_1({}, attrs, {
        onClick: handleClick
      }), {
        class: ["el-link", props.type ? "el-link--" + props.type : "", props.disabled && "is-disabled", props.underline && !props.disabled && "is-underline"],
        href: props.disabled ? void 0 : props.href
      }), [props.icon && createVNode("i", {
        class: props.icon
      }, null), createVNode("span", {
        class: "el-link--inner"
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});
var Icon = defineComponent({
  name: "ElIcon",
  props: {
    name: String
  },
  setup: function setup(props) {
    return function() {
      return createVNode("i", {
        class: "el-icon-" + props.name
      }, null);
    };
  }
});
const transformOn = (obj) => {
  const result = {};
  Object.keys(obj).forEach((evt) => {
    result[`on${evt[0].toUpperCase()}${evt.substr(1)}`] = obj[evt];
  });
  return result;
};
var babelHelperVueTransformOn = transformOn;
var id = 0;
var PREFIX = Math.ceil(Math.random() * 8999 + 1e3).toString();
function uniqueId(prefix) {
  var nextId = "" + PREFIX + ++id;
  return prefix ? "" + prefix + nextId : nextId;
}
var useChildren = function useChildren2(key, item, effect2) {
  var _inject = inject(key, {}), add2 = _inject.add, remove2 = _inject.remove;
  var state = reactive({
    children: []
  });
  onMounted(function() {
    add2 === null || add2 === void 0 ? void 0 : add2(item);
  });
  onUnmounted(function() {
    remove2 === null || remove2 === void 0 ? void 0 : remove2(item);
  });
  watch(function() {
    return state.children;
  }, function(children) {
    console.log(children);
    effect2(state.children);
  }, {
    deep: true
  });
  provide(key, {
    add: function add3(item2) {
      if (state.children.indexOf(item2) === -1) {
        state.children.push(item2);
      }
    },
    remove: function remove3(item2) {
      var index = state.children.indexOf(item2);
      if (index >= 0) {
        state.children.splice(index, 1);
      }
    },
    children: state.children
  });
  return {
    children: state.children
  };
};
var popperInject = Symbol("popper");
function usePopper(popperClass, popperOptions) {
  var _ref = popperOptions || {}, _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? "bottom" : _ref$placement, _ref$modifiers = _ref.modifiers, modifiers = _ref$modifiers === void 0 ? [] : _ref$modifiers, _ref$strategy = _ref.strategy, strategy = _ref$strategy === void 0 ? "absolute" : _ref$strategy;
  var id2 = uniqueId("el-popper");
  var popperEl = createEl(id2, normalizeClass$1(["el-popper", popperClass]));
  var popper2 = ref();
  var referenceEl = null;
  var setReferenceEl = function setReferenceEl2(el) {
    if (referenceEl === el) {
      return;
    }
    if (popper2.value) {
      popper2.value.destroy();
    }
    popper2.value = createPopper(el, popperEl, {
      placement,
      modifiers,
      strategy
    });
  };
  var state = reactive({
    focus: false,
    visible: false,
    childrenVisible: false
  });
  var realVisible = computed$1(function() {
    return state.visible || state.focus || state.childrenVisible;
  });
  var provideData = reactive({
    id: id2,
    visible: realVisible
  });
  useChildren(popperInject, provideData, function(children) {
    state.childrenVisible = children.some(function(item) {
      return item.visible;
    });
    console.log(id2 + ":" + state.childrenVisible);
    console.log(children);
  });
  watchEffect(function() {
    if (realVisible.value) {
      var _popper$value;
      (_popper$value = popper2.value) === null || _popper$value === void 0 ? void 0 : _popper$value.update().then(function() {
        popperEl.setAttribute("data-show", "");
      });
    } else {
      popperEl.removeAttribute("data-show");
    }
  });
  var events = [["mouseenter", function() {
    return state.focus = true;
  }], ["mouseleave", function() {
    return state.focus = false;
  }]];
  onMounted(function() {
    events.forEach(function(event) {
      popperEl.addEventListener(event[0], event[1]);
    });
  });
  onUnmounted(function() {
    if (popper2.value) {
      popper2.value.destroy();
      popper2.value = void 0;
    }
    events.forEach(function(event) {
      popperEl.removeEventListener(event[0], event[1]);
    });
    removeEl(popperEl);
  });
  return {
    popper: popper2,
    popperEl,
    setReferenceEl,
    state
  };
}
var defaultEvent = "click";
function useClickAway(onClickAway, target, eventName) {
  if (eventName === void 0) {
    eventName = defaultEvent;
  }
  var handler = function handler2(event) {
    if (!target || target.contains(event.target)) {
      return;
    }
    onClickAway(event);
  };
  watchEffect(function(onInvalidate) {
    document.addEventListener(eventName, handler);
    onInvalidate(function() {
      document.removeEventListener(eventName, handler);
    });
  });
}
var PopperInner = defineComponent({
  props: {
    setRootEl: {
      type: Function,
      required: true
    }
  },
  setup: function setup(_ref, _ref2) {
    var setRootEl = _ref.setRootEl;
    var slots = _ref2.slots;
    onMounted(function() {
      var instance = getCurrentInstance();
      var node = instance.vnode.el;
      while (node && !node.tagName) {
        node = node.nextSibling;
      }
      setRootEl(node);
    });
    return function() {
      return slots["default"] ? slots["default"]() : createVNode("span", null, null);
    };
  }
});
var Popper = defineComponent({
  name: "ElPopper",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ""
    },
    trigger: {
      type: String,
      default: "click"
    },
    placement: {
      type: String,
      default: "top"
    },
    modifiers: {
      type: Array,
      default: []
    },
    strategy: {
      type: String,
      default: "bottom"
    }
  },
  setup: function setup(props, _ref3) {
    var attrs = _ref3.attrs, slots = _ref3.slots, emit2 = _ref3.emit;
    var _usePopper = usePopper(props.popperClass, {
      placement: props.placement,
      modifiers: props.modifiers,
      strategy: props.strategy
    }), popperState = _usePopper.state, popperEl = _usePopper.popperEl, setReferenceEl = _usePopper.setReferenceEl;
    var state = reactive({
      focusPopper: false,
      visible: props.modelValue
    });
    var setVisible = function setVisible2(visible) {
      if (popperState.focus && visible === false)
        ;
      else {
        state.visible = visible;
        emit2("update:modelValue", visible);
      }
    };
    watchEffect(function() {
      popperState.visible = state.visible;
    });
    watch(function() {
      return props.modelValue;
    }, function(value) {
      state.visible = value;
    });
    var setRootEl = function setRootEl2(el) {
      if (!el) {
        throw new Error("reference root dom required");
      }
      setReferenceEl(el);
      if (props.trigger === "click") {
        el.addEventListener("click", function() {
          setVisible(!state.visible);
        });
        useClickAway(function() {
          setVisible(false);
        }, el);
      } else if (props.trigger === "hover") {
        el.addEventListener("mouseenter", function() {
          setVisible(true);
        });
        el.addEventListener("mouseleave", function() {
          setVisible(false);
        });
      } else if (props.trigger === "focus") {
        el.addEventListener("focus", function() {
          setVisible(true);
        });
        el.addEventListener("blur", function() {
          setVisible(false);
        });
      }
    };
    return function() {
      var _slots$popper, _slots$default;
      return createVNode(Fragment, null, [createVNode(Teleport, {
        to: "#" + popperEl.id
      }, {
        default: function _default() {
          return [(_slots$popper = slots.popper) === null || _slots$popper === void 0 ? void 0 : _slots$popper.call(slots)];
        }
      }), createVNode(PopperInner, {
        setRootEl
      }, {
        default: function _default() {
          return [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      })]);
    };
  }
});
var Popover = defineComponent({
  name: "ElPopver",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: "click"
    },
    popperClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, emit2 = _ref.emit;
    var onUpdate = function onUpdate2(value) {
      emit2("update:modelValue", value);
    };
    return function() {
      return createVNode(Popper, mergeProps(babelHelperVueTransformOn({
        "update:modelValue": onUpdate
      }), {
        popperClass: normalizeClass$1(["el-popover", "el-popper", props.popperClass, props.content && "el-popover--plain"]),
        trigger: props.trigger,
        modelValue: props.modelValue
      }), {
        popper: function popper2() {
          return createVNode("div", {
            ref: "popper",
            style: {
              width: props.width + "px"
            },
            role: "tooltip",
            id: "tooltipId"
          }, [props.title && createVNode("div", {
            class: "el-popover__title"
          }, [props.title]), slots.popper ? slots.popper() : props.content]);
        },
        default: slots["default"]
      });
    };
  }
});
var Emitter = /* @__PURE__ */ function() {
  function Emitter2(prefix) {
    if (prefix === void 0) {
      prefix = uniqueId();
    }
    this.prefix = "";
    this.events = new Map();
    this.prefix = prefix;
  }
  var _proto = Emitter2.prototype;
  _proto.on = function on(type, handler) {
    var name = this.prefix + "-" + type;
    var handlers = this.events.get(name);
    var added = handlers && handlers.push(handler);
    if (!added) {
      this.events.set(name, [handler]);
    }
  };
  _proto.off = function off(type, handler) {
    var name = this.prefix + "-" + type;
    var handlers = this.events.get(name);
    if (handlers) {
      handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    }
  };
  _proto.emit = function emit2(type) {
    for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }
    var name = this.prefix + "-" + type;
    (this.events.get(name) || []).slice().map(function(handler) {
      handler.apply(void 0, arg);
    });
  };
  return Emitter2;
}();
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {done: true};
        return {done: false, value: o[i++]};
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var MenuEmitterSymbol = Symbol("MenuEmitter");
var MenuDataSymbol = Symbol("MenuData");
var MenuConfigSymbol = Symbol("MenuConfig");
function findMenuData(id2, chlidren) {
  for (var _iterator = _createForOfIteratorHelperLoose(chlidren), _step; !(_step = _iterator()).done; ) {
    var item = _step.value;
    if (item.id === id2) {
      return item;
    }
    if (item.children && item.children.length > 0) {
      var ret = findMenuData(id2, item.children);
      if (ret) {
        return ret;
      }
    }
  }
  return null;
}
function recursiveMenus(chlidren, func) {
  chlidren.forEach(function(item) {
    func(item);
    if (item.children && item.children.length > 0) {
      recursiveMenus(item.children, func);
    }
  });
}
function useMenu(id2, isRoot) {
  if (isRoot === void 0) {
    isRoot = false;
  }
  var _ref = isRoot ? {} : inject(MenuDataSymbol) || {}, parentData = _ref.parentData, parentActions = _ref.parentActions;
  var emitter = isRoot ? new Emitter() : inject(MenuEmitterSymbol);
  var config2 = inject(MenuConfigSymbol);
  var data = reactive({
    id: id2,
    isOwnActive: false,
    isOwnOpen: false,
    isActive: false,
    isOpen: false,
    deep: parentData ? parentData.deep + 1 : 0,
    children: []
  });
  var isChildActive = computed$1(function() {
    return data.children.some(function(item) {
      return item.isActive;
    });
  });
  var isChildOpen = computed$1(function() {
    return data.children.some(function(item) {
      return item.isOpen;
    });
  });
  watch(function() {
    return data.isOwnActive || isChildActive.value || false;
  }, function(curr) {
    return data.isActive = curr;
  });
  watch(function() {
    return data.isOwnOpen || isChildOpen.value || false;
  }, function(curr) {
    return data.isOpen = curr;
  });
  onMounted(function() {
    parentActions === null || parentActions === void 0 ? void 0 : parentActions.addChild(data);
  });
  onBeforeUnmount(function() {
    parentActions === null || parentActions === void 0 ? void 0 : parentActions.removeChild(id2);
  });
  provide(MenuDataSymbol, {
    parentData: data,
    parentActions: {
      addChild: function addChild(item) {
        if (data.children.indexOf(item) === -1) {
          data.children.push(item);
        }
      },
      removeChild: function removeChild(removeId) {
        var index = data.children.findIndex(function(item) {
          return item.id === removeId;
        });
        if (index >= 0) {
          data.children.splice(index, 1);
        }
      }
    }
  });
  provide(MenuEmitterSymbol, emitter);
  return {
    data,
    config: config2,
    emitter
  };
}
var ElMenu = defineComponent({
  name: "ElMenu",
  props: {
    mode: {
      type: String,
      default: "vertical"
    },
    trigger: {
      type: String,
      default: "hover"
    },
    collapse: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: ""
    },
    activeTextColor: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var id2 = Symbol("ElMenu");
    var config2 = reactive({
      mode: props.mode,
      trigger: props.trigger,
      collapse: props.collapse,
      textColor: props.textColor,
      activeTextColor: props.activeTextColor,
      backgroundColor: props.backgroundColor,
      isPopup: props.mode === "horizontal" || !!(props.mode === "vertical" && props.collapse)
    });
    provide(MenuConfigSymbol, config2);
    var _useMenu = useMenu(id2, true), data = _useMenu.data, emitter = _useMenu.emitter;
    emitter.on("select", function(id3) {
      recursiveMenus(data.children, function(item) {
        item.isOwnActive = item.id === id3;
      });
    });
    emitter.on("open", function(id3) {
      var targetMenu = findMenuData(id3, data.children);
      if (targetMenu) {
        targetMenu.isOwnOpen = true;
      }
    });
    emitter.on("close", function(id3) {
      var targetMenu = findMenuData(id3, data.children);
      if (targetMenu) {
        recursiveMenus(targetMenu.children, function(item) {
          item.isOwnOpen = false;
        });
        targetMenu.isOwnOpen = false;
      }
    });
    onMounted(function() {
      setTimeout(function() {
      }, 5e3);
    });
    return function() {
      var _slots$default;
      return createVNode("ul", {
        role: "menubar",
        style: {
          backgroundColor: props.backgroundColor || ""
        },
        class: {
          "el-menu": true,
          "el-menu--horizontal": props.mode === "horizontal",
          "el-menu--collapse": props.collapse
        }
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var ElMenuItem = defineComponent({
  name: "ElMenuItem",
  props: {},
  setup: function setup(props, _ref) {
    var slots = _ref.slots, emit2 = _ref.emit;
    var id2 = Symbol("ElMenuItem-" + uniqueId());
    var _useMenu = useMenu(id2), data = _useMenu.data, emitter = _useMenu.emitter;
    var handleClick = function handleClick2() {
      emitter === null || emitter === void 0 ? void 0 : emitter.emit("select", id2);
    };
    return function() {
      var _slots$default, _slots$title;
      return createVNode("li", {
        role: "menuitem",
        tabindex: -1,
        class: {
          "el-menu-item": true,
          "is-active": data.isActive,
          "is-disabled": false
        },
        onClick: handleClick
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)]);
    };
  }
});
var CollapseTransitionProps = {
  onBeforeEnter: function onBeforeEnter(_el) {
    var el = _el;
    addClass(el, "collapse-transition");
    if (!el.dataset) {
      el.dataset = {};
    }
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.style.height = "0";
    el.style.paddingTop = "0";
    el.style.paddingBottom = "0";
  },
  onEnter: function onEnter(_el) {
    var el = _el;
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + "px";
      el.style.paddingTop = el.dataset.oldPaddingTop || "";
      el.style.paddingBottom = el.dataset.oldPaddingBottom || "";
    } else {
      el.style.height = "";
      el.style.paddingTop = el.dataset.oldPaddingTop || "";
      el.style.paddingBottom = el.dataset.oldPaddingBottom || "";
    }
    el.style.overflow = "hidden";
  },
  onAfterEnter: function onAfterEnter(_el) {
    var el = _el;
    removeClass(el, "collapse-transition");
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow || "";
  },
  onBeforeLeave: function onBeforeLeave(_el) {
    var el = _el;
    if (!el.dataset) {
      el.dataset = {};
    }
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = el.scrollHeight + "px";
    el.style.overflow = "hidden";
  },
  onLeave: function onLeave(_el) {
    var el = _el;
    if (el.scrollHeight !== 0) {
      addClass(el, "collapse-transition");
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    }
  },
  onAfterLeave: function onAfterLeave(_el) {
    var el = _el;
    removeClass(el, "collapse-transition");
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow || "";
    el.style.paddingTop = el.dataset.oldPaddingTop || "";
    el.style.paddingBottom = el.dataset.oldPaddingBottom || "";
  }
};
var CollapseTransition = defineComponent({
  name: "ElCollapseTransition",
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    return function() {
      var _slots$default;
      return createVNode(Transition, mergeProps(attrs, CollapseTransitionProps), {
        default: function _default() {
          return [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});
var Submenu = defineComponent({
  name: "ElSubmenu",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit2 = _ref.emit;
    var id2 = Symbol("ElSubmenu-" + uniqueId());
    var _useMenu = useMenu(id2), data = _useMenu.data, config2 = _useMenu.config, emitter = _useMenu.emitter;
    var handleClick = function handleClick2() {
      if (data.isOpen) {
        emitter === null || emitter === void 0 ? void 0 : emitter.emit("close", id2);
      } else {
        emitter === null || emitter === void 0 ? void 0 : emitter.emit("open", id2);
      }
    };
    var handleTitleMouseenter = function handleTitleMouseenter2() {
      if ((config2 === null || config2 === void 0 ? void 0 : config2.mode) === "horizontal" && !(config2 === null || config2 === void 0 ? void 0 : config2.backgroundColor))
        return;
    };
    var handleTitleMouseleave = function handleTitleMouseleave2() {
      if ((config2 === null || config2 === void 0 ? void 0 : config2.mode) === "horizontal" && !(config2 === null || config2 === void 0 ? void 0 : config2.backgroundColor))
        return;
    };
    return function() {
      var _slots$title, _slots$default2;
      var Title = createVNode("div", {
        class: "el-submenu__title",
        onClick: handleClick,
        onMouseenter: handleTitleMouseenter,
        onMouseleave: handleTitleMouseleave
      }, [(_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots), createVNode("i", {
        class: ["el-submenu__icon-arrow", "el-icon-arrow-down"]
      }, null)]);
      return (config2 === null || config2 === void 0 ? void 0 : config2.isPopup) ? createVNode("li", {
        class: {
          "el-submenu": true,
          "is-active": data.isActive,
          "is-opened": data.isOpen,
          "is-disabled": props.disabled
        },
        role: "menuitem"
      }, [createVNode(Popper, {
        placement: data.deep === 0 ? "bottom-start" : "right-start"
      }, {
        popper: function popper2() {
          var _slots$default;
          return createVNode("ul", {
            role: "menu",
            class: ["el-menu", "el-menu--popup", "el-menu--popup-" + (data.deep === 0 ? "bottom-start" : "right-start")],
            style: {
              backgroundColor: config2 === null || config2 === void 0 ? void 0 : config2.backgroundColor,
              width: "200px"
            }
          }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
        },
        default: function _default() {
          return Title;
        }
      })]) : createVNode("li", {
        class: {
          "el-submenu": true,
          "is-active": data.isActive,
          "is-opened": data.isOpen,
          "is-disabled": props.disabled
        },
        role: "menuitem"
      }, [Title, createVNode(CollapseTransition, null, {
        default: function _default() {
          return [data.isOpen && createVNode("ul", {
            role: "menu",
            class: "el-menu el-menu--inline",
            style: {
              backgroundColor: config2 === null || config2 === void 0 ? void 0 : config2.backgroundColor
            }
          }, [(_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)])];
        }
      })]);
    };
  }
});
var ElMenuItemGroup = defineComponent({
  name: "ElMenuItemGroup",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function() {
      var _slots$default;
      return createVNode("li", {
        class: "el-menu-item-group"
      }, [createVNode("div", {
        class: "el-menu-item-group__title",
        style: {
          paddingLeft: 20 + "px"
        }
      }, [slots.title ? slots.title() : props.title]), createVNode("ul", null, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});
var TYPE_CLASSES_MAP = {
  success: "el-icon-success",
  warning: "el-icon-warning",
  error: "el-icon-error"
};
var Alert = defineComponent({
  name: "ElAlert",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: "light"
    }
  },
  setup: function setup(props, _ref) {
    var emit2 = _ref.emit, attrs = _ref.attrs, slots = _ref.slots;
    var data = reactive({
      visible: true
    });
    var typeClass = computed$1(function() {
      return "el-alert--" + props.type;
    });
    var iconClass = computed$1(function() {
      return TYPE_CLASSES_MAP[props.type] || "el-icon-info";
    });
    var isBigIcon = computed$1(function() {
      return props.description || slots["default"] ? "is-big" : "";
    });
    var isBoldTitle = computed$1(function() {
      return props.description || slots["default"] ? "is-bold" : "";
    });
    var close = function close2() {
      data.visible = false;
      emit2("close");
    };
    return function() {
      var _slots$title, _slots$default;
      return createVNode(Transition, {
        name: "el-alert-fade"
      }, {
        default: function _default() {
          return [withDirectives(createVNode("div", {
            class: ["el-alert", typeClass.value, props.center ? "is-center" : "", "is-" + props.effect],
            role: "alert"
          }, [props.showIcon && createVNode("i", {
            class: ["el-alert__icon", iconClass.value, isBigIcon.value]
          }, null), createVNode("div", {
            class: "el-alert__content"
          }, [(slots.title || props.title) && createVNode("span", {
            class: ["el-alert__title", isBoldTitle.value]
          }, [((_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) || props.title]), slots["default"] && !props.description && createVNode("p", {
            class: "el-alert__description"
          }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), props.description && !slots["default"] && createVNode("p", {
            class: "el-alert__description"
          }, [props.description]), withDirectives(createVNode("i", {
            class: {
              "el-alert__closebtn": true,
              "is-customed": props.closeText !== "",
              "el-icon-close": props.closeText === ""
            },
            onClick: close
          }, [props.closeText]), [[vShow, props.closable]])])]), [[vShow, data.visible]])];
        }
      });
    };
  }
});
function injectCss(css, id2) {
  if (!document.head.querySelector("#" + id2)) {
    var node = document.createElement("style");
    node.textContent = css;
    node.type = "text/css";
    node.id = id2;
    document.head.appendChild(node);
  }
}
var css_248z = '*,:after,:before{box-sizing:border-box}html{font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;font-size:14px;font-weight:400;line-height:40px;-webkit-text-size-adjust:100%;background:#fff;color:#606266}body{margin:0}a:active,a:hover{outline:none}a{color:#606266;text-decoration:none;cursor:pointer}a:hover{color:#409eff;text-decoration:underline}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;-webkit-text-decoration-style:dotted}b,strong{font-weight:bolder}:not(pre)>code,:not(pre)>kbd,:not(pre)>samp{font-family:Consolas,monaco,monospace;font-size:12px;color:#f56c6c;white-space:nowrap}em{color:#f56c6c}ins{text-decoration:none}ins,mark{background:#ffd}q{font-style:italic}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}audio,canvas,iframe,img,svg,video{vertical-align:middle}canvas,img,video{max-width:100%;height:auto;box-sizing:border-box}@supports (display:block){svg{max-width:100%;height:auto;box-sizing:border-box}}svg:not(:root){overflow:hidden}img:not([src]){min-width:1px;visibility:hidden}iframe{border:0}address,dl,fieldset,figure,ol,p,pre,ul{margin:0 0 20px}*+address,*+dl,*+fieldset,*+figure,*+ol,*+p,*+pre,*+ul{margin-top:20px}.uk-h1,.uk-h2,.uk-h3,.uk-h4,.uk-h5,.uk-h6,.uk-heading-2xlarge,.uk-heading-large,.uk-heading-medium,.uk-heading-small,.uk-heading-xlarge,h1,h2,h3,h4,h5,h6{margin:0 0 20px;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;font-weight:400;color:#409eff;text-transform:none}*+.uk-h1,*+.uk-h2,*+.uk-h3,*+.uk-h4,*+.uk-h5,*+.uk-h6,*+.uk-heading-2xlarge,*+.uk-heading-large,*+.uk-heading-medium,*+.uk-heading-small,*+.uk-heading-xlarge,*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:40px}.uk-h1,h1{font-size:32px;line-height:1.4}.uk-h2,h2{font-size:20px;line-height:1.4}.uk-h3,h3{font-size:18px;line-height:1.4}.uk-h4,h4{font-size:16px;line-height:1.4}.uk-h5,h5{font-size:14px;line-height:1.4}.uk-h6,h6{font-size:12px;line-height:1.4}ol,ul{padding-left:30px}ol>li>ol,ol>li>ul,ul>li>ol,ul>li>ul{margin:0}dt{font-weight:700}dd{margin-left:0}.uk-hr,hr{overflow:visible;text-align:inherit;margin:0 0 20px;border:0;border-top:1px solid #e5e5e5}*+.uk-hr,*+hr{margin-top:20px}address{font-style:normal}blockquote{margin:0 0 20px;font-size:16px;font-style:italic}*+blockquote{margin-top:20px}blockquote p:last-of-type{margin-bottom:0}blockquote footer{margin-top:10px;font-size:12px}pre{font-size:12px;-moz-tab-size:4;-o-tab-size:4;tab-size:4;overflow:auto}pre,pre code{font-family:Consolas,monaco,monospace}::-moz-selection{background:#39f;color:#fff;text-shadow:none}::selection{background:#39f;color:#fff;text-shadow:none}details,main{display:block}summary{display:list-item}template{display:none}@font-face{font-family:element-icons;src:url(../fonts/element-icons.woff) format("woff"),url(../fonts/element-icons.ttf) format("truetype");font-weight:400;font-display:auto;font-style:normal}[class*=" el-icon-"],[class^=el-icon-]{font-family:element-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;vertical-align:baseline;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.el-icon-ice-cream-round:before{content:"\\e6a0"}.el-icon-ice-cream-square:before{content:"\\e6a3"}.el-icon-lollipop:before{content:"\\e6a4"}.el-icon-potato-strips:before{content:"\\e6a5"}.el-icon-milk-tea:before{content:"\\e6a6"}.el-icon-ice-drink:before{content:"\\e6a7"}.el-icon-ice-tea:before{content:"\\e6a9"}.el-icon-coffee:before{content:"\\e6aa"}.el-icon-orange:before{content:"\\e6ab"}.el-icon-pear:before{content:"\\e6ac"}.el-icon-apple:before{content:"\\e6ad"}.el-icon-cherry:before{content:"\\e6ae"}.el-icon-watermelon:before{content:"\\e6af"}.el-icon-grape:before{content:"\\e6b0"}.el-icon-refrigerator:before{content:"\\e6b1"}.el-icon-goblet-square-full:before{content:"\\e6b2"}.el-icon-goblet-square:before{content:"\\e6b3"}.el-icon-goblet-full:before{content:"\\e6b4"}.el-icon-goblet:before{content:"\\e6b5"}.el-icon-cold-drink:before{content:"\\e6b6"}.el-icon-coffee-cup:before{content:"\\e6b8"}.el-icon-water-cup:before{content:"\\e6b9"}.el-icon-hot-water:before{content:"\\e6ba"}.el-icon-ice-cream:before{content:"\\e6bb"}.el-icon-dessert:before{content:"\\e6bc"}.el-icon-sugar:before{content:"\\e6bd"}.el-icon-tableware:before{content:"\\e6be"}.el-icon-burger:before{content:"\\e6bf"}.el-icon-knife-fork:before{content:"\\e6c1"}.el-icon-fork-spoon:before{content:"\\e6c2"}.el-icon-chicken:before{content:"\\e6c3"}.el-icon-food:before{content:"\\e6c4"}.el-icon-dish-1:before{content:"\\e6c5"}.el-icon-dish:before{content:"\\e6c6"}.el-icon-moon-night:before{content:"\\e6ee"}.el-icon-moon:before{content:"\\e6f0"}.el-icon-cloudy-and-sunny:before{content:"\\e6f1"}.el-icon-partly-cloudy:before{content:"\\e6f2"}.el-icon-cloudy:before{content:"\\e6f3"}.el-icon-sunny:before{content:"\\e6f6"}.el-icon-sunset:before{content:"\\e6f7"}.el-icon-sunrise-1:before{content:"\\e6f8"}.el-icon-sunrise:before{content:"\\e6f9"}.el-icon-heavy-rain:before{content:"\\e6fa"}.el-icon-lightning:before{content:"\\e6fb"}.el-icon-light-rain:before{content:"\\e6fc"}.el-icon-wind-power:before{content:"\\e6fd"}.el-icon-baseball:before{content:"\\e712"}.el-icon-soccer:before{content:"\\e713"}.el-icon-football:before{content:"\\e715"}.el-icon-basketball:before{content:"\\e716"}.el-icon-ship:before{content:"\\e73f"}.el-icon-truck:before{content:"\\e740"}.el-icon-bicycle:before{content:"\\e741"}.el-icon-mobile-phone:before{content:"\\e6d3"}.el-icon-service:before{content:"\\e6d4"}.el-icon-key:before{content:"\\e6e2"}.el-icon-unlock:before{content:"\\e6e4"}.el-icon-lock:before{content:"\\e6e5"}.el-icon-watch:before{content:"\\e6fe"}.el-icon-watch-1:before{content:"\\e6ff"}.el-icon-timer:before{content:"\\e702"}.el-icon-alarm-clock:before{content:"\\e703"}.el-icon-map-location:before{content:"\\e704"}.el-icon-delete-location:before{content:"\\e705"}.el-icon-add-location:before{content:"\\e706"}.el-icon-location-information:before{content:"\\e707"}.el-icon-location-outline:before{content:"\\e708"}.el-icon-location:before{content:"\\e79e"}.el-icon-place:before{content:"\\e709"}.el-icon-discover:before{content:"\\e70a"}.el-icon-first-aid-kit:before{content:"\\e70b"}.el-icon-trophy-1:before{content:"\\e70c"}.el-icon-trophy:before{content:"\\e70d"}.el-icon-medal:before{content:"\\e70e"}.el-icon-medal-1:before{content:"\\e70f"}.el-icon-stopwatch:before{content:"\\e710"}.el-icon-mic:before{content:"\\e711"}.el-icon-copy-document:before{content:"\\e718"}.el-icon-full-screen:before{content:"\\e719"}.el-icon-switch-button:before{content:"\\e71b"}.el-icon-aim:before{content:"\\e71c"}.el-icon-crop:before{content:"\\e71d"}.el-icon-odometer:before{content:"\\e71e"}.el-icon-time:before{content:"\\e71f"}.el-icon-bangzhu:before{content:"\\e724"}.el-icon-close-notification:before{content:"\\e726"}.el-icon-microphone:before{content:"\\e727"}.el-icon-turn-off-microphone:before{content:"\\e728"}.el-icon-position:before{content:"\\e729"}.el-icon-postcard:before{content:"\\e72a"}.el-icon-message:before{content:"\\e72b"}.el-icon-chat-line-square:before{content:"\\e72d"}.el-icon-chat-dot-square:before{content:"\\e72e"}.el-icon-chat-dot-round:before{content:"\\e72f"}.el-icon-chat-square:before{content:"\\e730"}.el-icon-chat-line-round:before{content:"\\e731"}.el-icon-chat-round:before{content:"\\e732"}.el-icon-set-up:before{content:"\\e733"}.el-icon-turn-off:before{content:"\\e734"}.el-icon-open:before{content:"\\e735"}.el-icon-connection:before{content:"\\e736"}.el-icon-link:before{content:"\\e737"}.el-icon-cpu:before{content:"\\e738"}.el-icon-thumb:before{content:"\\e739"}.el-icon-female:before{content:"\\e73a"}.el-icon-male:before{content:"\\e73b"}.el-icon-guide:before{content:"\\e73c"}.el-icon-news:before{content:"\\e73e"}.el-icon-price-tag:before{content:"\\e744"}.el-icon-discount:before{content:"\\e745"}.el-icon-wallet:before{content:"\\e747"}.el-icon-coin:before{content:"\\e748"}.el-icon-money:before{content:"\\e749"}.el-icon-bank-card:before{content:"\\e74a"}.el-icon-box:before{content:"\\e74b"}.el-icon-present:before{content:"\\e74c"}.el-icon-sell:before{content:"\\e6d5"}.el-icon-sold-out:before{content:"\\e6d6"}.el-icon-shopping-bag-2:before{content:"\\e74d"}.el-icon-shopping-bag-1:before{content:"\\e74e"}.el-icon-shopping-cart-2:before{content:"\\e74f"}.el-icon-shopping-cart-1:before{content:"\\e750"}.el-icon-shopping-cart-full:before{content:"\\e751"}.el-icon-smoking:before{content:"\\e752"}.el-icon-no-smoking:before{content:"\\e753"}.el-icon-house:before{content:"\\e754"}.el-icon-table-lamp:before{content:"\\e755"}.el-icon-school:before{content:"\\e756"}.el-icon-office-building:before{content:"\\e757"}.el-icon-toilet-paper:before{content:"\\e758"}.el-icon-notebook-2:before{content:"\\e759"}.el-icon-notebook-1:before{content:"\\e75a"}.el-icon-files:before{content:"\\e75b"}.el-icon-collection:before{content:"\\e75c"}.el-icon-receiving:before{content:"\\e75d"}.el-icon-suitcase-1:before{content:"\\e760"}.el-icon-suitcase:before{content:"\\e761"}.el-icon-film:before{content:"\\e763"}.el-icon-collection-tag:before{content:"\\e765"}.el-icon-data-analysis:before{content:"\\e766"}.el-icon-pie-chart:before{content:"\\e767"}.el-icon-data-board:before{content:"\\e768"}.el-icon-data-line:before{content:"\\e76d"}.el-icon-reading:before{content:"\\e769"}.el-icon-magic-stick:before{content:"\\e76a"}.el-icon-coordinate:before{content:"\\e76b"}.el-icon-mouse:before{content:"\\e76c"}.el-icon-brush:before{content:"\\e76e"}.el-icon-headset:before{content:"\\e76f"}.el-icon-umbrella:before{content:"\\e770"}.el-icon-scissors:before{content:"\\e771"}.el-icon-mobile:before{content:"\\e773"}.el-icon-attract:before{content:"\\e774"}.el-icon-monitor:before{content:"\\e775"}.el-icon-search:before{content:"\\e778"}.el-icon-takeaway-box:before{content:"\\e77a"}.el-icon-paperclip:before{content:"\\e77d"}.el-icon-printer:before{content:"\\e77e"}.el-icon-document-add:before{content:"\\e782"}.el-icon-document:before{content:"\\e785"}.el-icon-document-checked:before{content:"\\e786"}.el-icon-document-copy:before{content:"\\e787"}.el-icon-document-delete:before{content:"\\e788"}.el-icon-document-remove:before{content:"\\e789"}.el-icon-tickets:before{content:"\\e78b"}.el-icon-folder-checked:before{content:"\\e77f"}.el-icon-folder-delete:before{content:"\\e780"}.el-icon-folder-remove:before{content:"\\e781"}.el-icon-folder-add:before{content:"\\e783"}.el-icon-folder-opened:before{content:"\\e784"}.el-icon-folder:before{content:"\\e78a"}.el-icon-edit-outline:before{content:"\\e764"}.el-icon-edit:before{content:"\\e78c"}.el-icon-date:before{content:"\\e78e"}.el-icon-c-scale-to-original:before{content:"\\e7c6"}.el-icon-view:before{content:"\\e6ce"}.el-icon-loading:before{content:"\\e6cf"}.el-icon-rank:before{content:"\\e6d1"}.el-icon-sort-down:before{content:"\\e7c4"}.el-icon-sort-up:before{content:"\\e7c5"}.el-icon-sort:before{content:"\\e6d2"}.el-icon-finished:before{content:"\\e6cd"}.el-icon-refresh-left:before{content:"\\e6c7"}.el-icon-refresh-right:before{content:"\\e6c8"}.el-icon-refresh:before{content:"\\e6d0"}.el-icon-video-play:before{content:"\\e7c0"}.el-icon-video-pause:before{content:"\\e7c1"}.el-icon-d-arrow-right:before{content:"\\e6dc"}.el-icon-d-arrow-left:before{content:"\\e6dd"}.el-icon-arrow-up:before{content:"\\e6e1"}.el-icon-arrow-down:before{content:"\\e6df"}.el-icon-arrow-right:before{content:"\\e6e0"}.el-icon-arrow-left:before{content:"\\e6de"}.el-icon-top-right:before{content:"\\e6e7"}.el-icon-top-left:before{content:"\\e6e8"}.el-icon-top:before{content:"\\e6e6"}.el-icon-bottom:before{content:"\\e6eb"}.el-icon-right:before{content:"\\e6e9"}.el-icon-back:before{content:"\\e6ea"}.el-icon-bottom-right:before{content:"\\e6ec"}.el-icon-bottom-left:before{content:"\\e6ed"}.el-icon-caret-top:before{content:"\\e78f"}.el-icon-caret-bottom:before{content:"\\e790"}.el-icon-caret-right:before{content:"\\e791"}.el-icon-caret-left:before{content:"\\e792"}.el-icon-d-caret:before{content:"\\e79a"}.el-icon-share:before{content:"\\e793"}.el-icon-menu:before{content:"\\e798"}.el-icon-s-grid:before{content:"\\e7a6"}.el-icon-s-check:before{content:"\\e7a7"}.el-icon-s-data:before{content:"\\e7a8"}.el-icon-s-opportunity:before{content:"\\e7aa"}.el-icon-s-custom:before{content:"\\e7ab"}.el-icon-s-claim:before{content:"\\e7ad"}.el-icon-s-finance:before{content:"\\e7ae"}.el-icon-s-comment:before{content:"\\e7af"}.el-icon-s-flag:before{content:"\\e7b0"}.el-icon-s-marketing:before{content:"\\e7b1"}.el-icon-s-shop:before{content:"\\e7b4"}.el-icon-s-open:before{content:"\\e7b5"}.el-icon-s-management:before{content:"\\e7b6"}.el-icon-s-ticket:before{content:"\\e7b7"}.el-icon-s-release:before{content:"\\e7b8"}.el-icon-s-home:before{content:"\\e7b9"}.el-icon-s-promotion:before{content:"\\e7ba"}.el-icon-s-operation:before{content:"\\e7bb"}.el-icon-s-unfold:before{content:"\\e7bc"}.el-icon-s-fold:before{content:"\\e7a9"}.el-icon-s-platform:before{content:"\\e7bd"}.el-icon-s-order:before{content:"\\e7be"}.el-icon-s-cooperation:before{content:"\\e7bf"}.el-icon-bell:before{content:"\\e725"}.el-icon-message-solid:before{content:"\\e799"}.el-icon-video-camera:before{content:"\\e772"}.el-icon-video-camera-solid:before{content:"\\e796"}.el-icon-camera:before{content:"\\e779"}.el-icon-camera-solid:before{content:"\\e79b"}.el-icon-download:before{content:"\\e77c"}.el-icon-upload2:before{content:"\\e77b"}.el-icon-upload:before{content:"\\e7c3"}.el-icon-picture-outline-round:before{content:"\\e75f"}.el-icon-picture-outline:before{content:"\\e75e"}.el-icon-picture:before{content:"\\e79f"}.el-icon-close:before{content:"\\e6db"}.el-icon-check:before{content:"\\e6da"}.el-icon-plus:before{content:"\\e6d9"}.el-icon-minus:before{content:"\\e6d8"}.el-icon-help:before{content:"\\e73d"}.el-icon-s-help:before{content:"\\e7b3"}.el-icon-circle-close:before{content:"\\e78d"}.el-icon-circle-check:before{content:"\\e720"}.el-icon-circle-plus-outline:before{content:"\\e723"}.el-icon-remove-outline:before{content:"\\e722"}.el-icon-zoom-out:before{content:"\\e776"}.el-icon-zoom-in:before{content:"\\e777"}.el-icon-error:before{content:"\\e79d"}.el-icon-success:before{content:"\\e79c"}.el-icon-circle-plus:before{content:"\\e7a0"}.el-icon-remove:before{content:"\\e7a2"}.el-icon-info:before{content:"\\e7a1"}.el-icon-question:before{content:"\\e7a4"}.el-icon-warning-outline:before{content:"\\e6c9"}.el-icon-warning:before{content:"\\e7a3"}.el-icon-goods:before{content:"\\e7c2"}.el-icon-s-goods:before{content:"\\e7b2"}.el-icon-star-off:before{content:"\\e717"}.el-icon-star-on:before{content:"\\e797"}.el-icon-more-outline:before{content:"\\e6cc"}.el-icon-more:before{content:"\\e794"}.el-icon-phone-outline:before{content:"\\e6cb"}.el-icon-phone:before{content:"\\e795"}.el-icon-user:before{content:"\\e6e3"}.el-icon-user-solid:before{content:"\\e7a5"}.el-icon-setting:before{content:"\\e6ca"}.el-icon-s-tools:before{content:"\\e7ac"}.el-icon-delete:before{content:"\\e6d7"}.el-icon-delete-solid:before{content:"\\e7c9"}.el-icon-eleme:before{content:"\\e7c7"}.el-icon-platform-eleme:before{content:"\\e7ca"}.el-icon-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@-webkit-keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.el-link{display:inline-flex;flex-direction:row;align-items:center;justify-content:center;vertical-align:middle;position:relative;outline:none;cursor:pointer;padding:0}.el-link,.el-link:hover{text-decoration:none}.el-link.is-underline{text-decoration:underline}.el-link.is-disabled{cursor:not-allowed}.el-link [class*=el-icon-]+span{margin-left:5px}.el-link.el-link--default{color:#606266}.el-link.el-link--default:hover{color:#409eff}.el-link.el-link--default:after{border-color:#409eff}.el-link.el-link--default.is-disabled{color:#c0c4cc}.el-link.el-link--primary{color:#409eff}.el-link.el-link--primary:hover{color:#66b1ff}.el-link.el-link--primary:after{border-color:#409eff}.el-link.el-link--primary.is-disabled{color:#a0cfff}.el-link.el-link--primary.is-underline:hover:after{border-color:#409eff}.el-link.el-link--success{color:#67c23a}.el-link.el-link--success:hover{color:#85ce61}.el-link.el-link--success:after{border-color:#67c23a}.el-link.el-link--success.is-disabled{color:#b3e19d}.el-link.el-link--success.is-underline:hover:after{border-color:#67c23a}.el-link.el-link--danger{color:#f56c6c}.el-link.el-link--danger:hover{color:#f78989}.el-link.el-link--danger:after{border-color:#f56c6c}.el-link.el-link--danger.is-disabled{color:#fab6b6}.el-link.el-link--danger.is-underline:hover:after{border-color:#f56c6c}.el-link.el-link--warning{color:#e6a23c}.el-link.el-link--warning:hover{color:#ebb563}.el-link.el-link--warning:after{border-color:#e6a23c}.el-link.el-link--warning.is-disabled{color:#f3d19e}.el-link.el-link--warning.is-underline:hover:after{border-color:#e6a23c}.el-link.el-link--info{color:#909399}.el-link.el-link--info:hover{color:#a6a9ad}.el-link.el-link--info:after{border-color:#909399}.el-link.el-link--info.is-disabled{color:#c8c9cc}.el-link.el-link--info.is-underline:hover:after{border-color:#909399}.el-button{margin:0;border:none;overflow:visible;font:inherit;color:inherit;text-transform:none;-webkit-appearance:none;display:inline-block;box-sizing:border-box;vertical-align:middle;text-align:center;text-decoration:none;cursor:pointer;border-radius:4px;padding:0 20px;font-size:14px;line-height:38px}.el-button::-moz-focus-inner{border:0;padding:0}.el-button:hover{text-decoration:none}.el-button:focus{outline:none}.el-button.is-disabled,.el-button:disabled{cursor:not-allowed}.el-button.is-round{border-radius:20px}.el-button.is-circle{border-radius:50%;padding:0 12px}.el-button-default{color:#606266;background:#fff;border:1px solid #e5e5e5}.el-button-default:focus,.el-button-default:hover{color:#606266;background:#fff;border-color:#eaeaea}.el-button-default.is-active,.el-button-default:active{color:#606266;background:#e6e6e6;border-color:#cecece}.el-button-default.is-disabled,.el-button-default.is-disabled:active,.el-button-default.is-disabled:focus,.el-button-default.is-disabled:hover,.el-button-default:disabled,.el-button-default:disabled:active,.el-button-default:disabled:focus,.el-button-default:disabled:hover{color:#c0c4cc;background-color:#fff;border-color:#f2f2f2}.el-button-primary{color:#fff;background:#409eff;border:1px solid #409eff}.el-button-primary:focus,.el-button-primary:hover{color:#fff;background:#66b1ff;border-color:#66b1ff}.el-button-primary.is-active,.el-button-primary:active{color:#fff;background:#3a8ee6;border-color:#3a8ee6}.el-button-primary.is-disabled,.el-button-primary.is-disabled:active,.el-button-primary.is-disabled:focus,.el-button-primary.is-disabled:hover,.el-button-primary:disabled,.el-button-primary:disabled:active,.el-button-primary:disabled:focus,.el-button-primary:disabled:hover{color:#fff;background-color:#a0cfff;border-color:#a0cfff}.el-button-success{color:#fff;background:#67c23a;border:1px solid #67c23a}.el-button-success:focus,.el-button-success:hover{color:#fff;background:#85ce61;border-color:#85ce61}.el-button-success.is-active,.el-button-success:active{color:#fff;background:#5daf34;border-color:#5daf34}.el-button-success.is-disabled,.el-button-success.is-disabled:active,.el-button-success.is-disabled:focus,.el-button-success.is-disabled:hover,.el-button-success:disabled,.el-button-success:disabled:active,.el-button-success:disabled:focus,.el-button-success:disabled:hover{color:#fff;background-color:#b3e19d;border-color:#b3e19d}.el-button-info{color:#fff;background:#909399;border:1px solid #909399}.el-button-info:focus,.el-button-info:hover{color:#fff;background:#a6a9ad;border-color:#a6a9ad}.el-button-info.is-active,.el-button-info:active{color:#fff;background:#82848a;border-color:#82848a}.el-button-info.is-disabled,.el-button-info.is-disabled:active,.el-button-info.is-disabled:focus,.el-button-info.is-disabled:hover,.el-button-info:disabled,.el-button-info:disabled:active,.el-button-info:disabled:focus,.el-button-info:disabled:hover{color:#fff;background-color:#c8c9cc;border-color:#c8c9cc}.el-button-warning{color:#fff;background:#e6a23c;border:1px solid #e6a23c}.el-button-warning:focus,.el-button-warning:hover{color:#fff;background:#ebb563;border-color:#ebb563}.el-button-warning.is-active,.el-button-warning:active{color:#fff;background:#cf9236;border-color:#cf9236}.el-button-warning.is-disabled,.el-button-warning.is-disabled:active,.el-button-warning.is-disabled:focus,.el-button-warning.is-disabled:hover,.el-button-warning:disabled,.el-button-warning:disabled:active,.el-button-warning:disabled:focus,.el-button-warning:disabled:hover{color:#fff;background-color:#f3d19e;border-color:#f3d19e}.el-button-danger{color:#fff;background:#f56c6c;border:1px solid #f56c6c}.el-button-danger:focus,.el-button-danger:hover{color:#fff;background:#f78989;border-color:#f78989}.el-button-danger.is-active,.el-button-danger:active{color:#fff;background:#dd6161;border-color:#dd6161}.el-button-danger.is-disabled,.el-button-danger.is-disabled:active,.el-button-danger.is-disabled:focus,.el-button-danger.is-disabled:hover,.el-button-danger:disabled,.el-button-danger:disabled:active,.el-button-danger:disabled:focus,.el-button-danger:disabled:hover{color:#fff;background-color:#fab6b6;border-color:#fab6b6}.el-button-medium{font-size:14px;padding:0 20px;line-height:34px}.el-button-medium.is-round{border-radius:18px}.el-button-medium.is-circle{border-radius:50%;padding:0 10px}.el-button-small{font-size:12px;padding:0 15px;line-height:30px}.el-button-small.is-round{border-radius:16px}.el-button-small.is-circle{border-radius:50%;padding:0 9px}.el-button-mini{font-size:12px;padding:0 15px;line-height:26px}.el-button-mini.is-round{border-radius:14px}.el-button-mini.is-circle{border-radius:50%;padding:0 7px}.el-button-text{padding:0;background:none;line-height:40px;color:#409eff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.el-button-text:focus,.el-button-text:hover{color:#66b1ff;text-decoration:underline}.el-button-text:active{color:#409eff}.el-button-text:disabled{color:#a0cfff;text-decoration:none}.el-button-group{display:inline-flex;vertical-align:middle;position:relative}.el-button-group>.el-button:first-child{border-top-right-radius:0;border-bottom-right-radius:0;border-right-color:hsla(0,0%,100%,.5)}.el-button-group>.el-button:last-child{border-top-left-radius:0;border-bottom-left-radius:0;border-left-color:hsla(0,0%,100%,.5)}.el-button-group>.el-button:not(:first-child):not(:last-child){border-radius:0;border-left-color:hsla(0,0%,100%,.5);border-right-color:hsla(0,0%,100%,.5)}.el-button-group>.el-button:not(:last-child){margin-right:-1px}.el-row{flex-flow:row wrap}.el-row,.el-row:after,.el-row:before{display:flex}.el-row-start{justify-content:flex-start}.el-row-center{justify-content:center}.el-row-end{justify-content:flex-end}.el-row-space-between{justify-content:space-between}.el-row-space-around{justify-content:space-around}.el-row-top{align-items:flex-start}.el-row-middle{align-items:center}.el-row-bottom{align-items:flex-end}.el-col{position:relative;max-width:100%;min-height:1px}.el-col-24{display:block;flex:0 0 100%;max-width:100%}.el-col-push-24{left:100%}.el-col-pull-24{right:100%}.el-col-offset-24{margin-left:100%}.el-col-order-24{order:24}.el-col-23{display:block;flex:0 0 95.83333333%;max-width:95.83333333%}.el-col-push-23{left:95.83333333%}.el-col-pull-23{right:95.83333333%}.el-col-offset-23{margin-left:95.83333333%}.el-col-order-23{order:23}.el-col-22{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.el-col-push-22{left:91.66666667%}.el-col-pull-22{right:91.66666667%}.el-col-offset-22{margin-left:91.66666667%}.el-col-order-22{order:22}.el-col-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-push-21{left:87.5%}.el-col-pull-21{right:87.5%}.el-col-offset-21{margin-left:87.5%}.el-col-order-21{order:21}.el-col-20{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.el-col-push-20{left:83.33333333%}.el-col-pull-20{right:83.33333333%}.el-col-offset-20{margin-left:83.33333333%}.el-col-order-20{order:20}.el-col-19{display:block;flex:0 0 79.16666667%;max-width:79.16666667%}.el-col-push-19{left:79.16666667%}.el-col-pull-19{right:79.16666667%}.el-col-offset-19{margin-left:79.16666667%}.el-col-order-19{order:19}.el-col-18{display:block;flex:0 0 75%;max-width:75%}.el-col-push-18{left:75%}.el-col-pull-18{right:75%}.el-col-offset-18{margin-left:75%}.el-col-order-18{order:18}.el-col-17{display:block;flex:0 0 70.83333333%;max-width:70.83333333%}.el-col-push-17{left:70.83333333%}.el-col-pull-17{right:70.83333333%}.el-col-offset-17{margin-left:70.83333333%}.el-col-order-17{order:17}.el-col-16{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.el-col-push-16{left:66.66666667%}.el-col-pull-16{right:66.66666667%}.el-col-offset-16{margin-left:66.66666667%}.el-col-order-16{order:16}.el-col-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-push-15{left:62.5%}.el-col-pull-15{right:62.5%}.el-col-offset-15{margin-left:62.5%}.el-col-order-15{order:15}.el-col-14{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.el-col-push-14{left:58.33333333%}.el-col-pull-14{right:58.33333333%}.el-col-offset-14{margin-left:58.33333333%}.el-col-order-14{order:14}.el-col-13{display:block;flex:0 0 54.16666667%;max-width:54.16666667%}.el-col-push-13{left:54.16666667%}.el-col-pull-13{right:54.16666667%}.el-col-offset-13{margin-left:54.16666667%}.el-col-order-13{order:13}.el-col-12{display:block;flex:0 0 50%;max-width:50%}.el-col-push-12{left:50%}.el-col-pull-12{right:50%}.el-col-offset-12{margin-left:50%}.el-col-order-12{order:12}.el-col-11{display:block;flex:0 0 45.83333333%;max-width:45.83333333%}.el-col-push-11{left:45.83333333%}.el-col-pull-11{right:45.83333333%}.el-col-offset-11{margin-left:45.83333333%}.el-col-order-11{order:11}.el-col-10{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.el-col-push-10{left:41.66666667%}.el-col-pull-10{right:41.66666667%}.el-col-offset-10{margin-left:41.66666667%}.el-col-order-10{order:10}.el-col-9{display:block;flex:0 0 37.5%;max-width:37.5%}.el-col-push-9{left:37.5%}.el-col-pull-9{right:37.5%}.el-col-offset-9{margin-left:37.5%}.el-col-order-9{order:9}.el-col-8{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.el-col-push-8{left:33.33333333%}.el-col-pull-8{right:33.33333333%}.el-col-offset-8{margin-left:33.33333333%}.el-col-order-8{order:8}.el-col-7{display:block;flex:0 0 29.16666667%;max-width:29.16666667%}.el-col-push-7{left:29.16666667%}.el-col-pull-7{right:29.16666667%}.el-col-offset-7{margin-left:29.16666667%}.el-col-order-7{order:7}.el-col-6{display:block;flex:0 0 25%;max-width:25%}.el-col-push-6{left:25%}.el-col-pull-6{right:25%}.el-col-offset-6{margin-left:25%}.el-col-order-6{order:6}.el-col-5{display:block;flex:0 0 20.83333333%;max-width:20.83333333%}.el-col-push-5{left:20.83333333%}.el-col-pull-5{right:20.83333333%}.el-col-offset-5{margin-left:20.83333333%}.el-col-order-5{order:5}.el-col-4{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.el-col-push-4{left:16.66666667%}.el-col-pull-4{right:16.66666667%}.el-col-offset-4{margin-left:16.66666667%}.el-col-order-4{order:4}.el-col-3{display:block;flex:0 0 12.5%;max-width:12.5%}.el-col-push-3{left:12.5%}.el-col-pull-3{right:12.5%}.el-col-offset-3{margin-left:12.5%}.el-col-order-3{order:3}.el-col-2{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.el-col-push-2{left:8.33333333%}.el-col-pull-2{right:8.33333333%}.el-col-offset-2{margin-left:8.33333333%}.el-col-order-2{order:2}.el-col-1{display:block;flex:0 0 4.16666667%;max-width:4.16666667%}.el-col-push-1{left:4.16666667%}.el-col-pull-1{right:4.16666667%}.el-col-offset-1{margin-left:4.16666667%}.el-col-order-1{order:1}.el-col-0{display:none}.el-col-push-0{left:auto}.el-col-pull-0{right:auto}.el-col-offset-0{margin-left:0}.el-col-order-0{order:0}@media (max-width:767px){.el-col-xs-24{display:block;flex:0 0 100%;max-width:100%}.el-col-xs-push-24{left:100%}.el-col-xs-pull-24{right:100%}.el-col-xs-offset-24{margin-left:100%}.el-col-xs-order-24{order:24}.el-col-xs-23{display:block;flex:0 0 95.83333333%;max-width:95.83333333%}.el-col-xs-push-23{left:95.83333333%}.el-col-xs-pull-23{right:95.83333333%}.el-col-xs-offset-23{margin-left:95.83333333%}.el-col-xs-order-23{order:23}.el-col-xs-22{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.el-col-xs-push-22{left:91.66666667%}.el-col-xs-pull-22{right:91.66666667%}.el-col-xs-offset-22{margin-left:91.66666667%}.el-col-xs-order-22{order:22}.el-col-xs-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-xs-push-21{left:87.5%}.el-col-xs-pull-21{right:87.5%}.el-col-xs-offset-21{margin-left:87.5%}.el-col-xs-order-21{order:21}.el-col-xs-20{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.el-col-xs-push-20{left:83.33333333%}.el-col-xs-pull-20{right:83.33333333%}.el-col-xs-offset-20{margin-left:83.33333333%}.el-col-xs-order-20{order:20}.el-col-xs-19{display:block;flex:0 0 79.16666667%;max-width:79.16666667%}.el-col-xs-push-19{left:79.16666667%}.el-col-xs-pull-19{right:79.16666667%}.el-col-xs-offset-19{margin-left:79.16666667%}.el-col-xs-order-19{order:19}.el-col-xs-18{display:block;flex:0 0 75%;max-width:75%}.el-col-xs-push-18{left:75%}.el-col-xs-pull-18{right:75%}.el-col-xs-offset-18{margin-left:75%}.el-col-xs-order-18{order:18}.el-col-xs-17{display:block;flex:0 0 70.83333333%;max-width:70.83333333%}.el-col-xs-push-17{left:70.83333333%}.el-col-xs-pull-17{right:70.83333333%}.el-col-xs-offset-17{margin-left:70.83333333%}.el-col-xs-order-17{order:17}.el-col-xs-16{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.el-col-xs-push-16{left:66.66666667%}.el-col-xs-pull-16{right:66.66666667%}.el-col-xs-offset-16{margin-left:66.66666667%}.el-col-xs-order-16{order:16}.el-col-xs-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-xs-push-15{left:62.5%}.el-col-xs-pull-15{right:62.5%}.el-col-xs-offset-15{margin-left:62.5%}.el-col-xs-order-15{order:15}.el-col-xs-14{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.el-col-xs-push-14{left:58.33333333%}.el-col-xs-pull-14{right:58.33333333%}.el-col-xs-offset-14{margin-left:58.33333333%}.el-col-xs-order-14{order:14}.el-col-xs-13{display:block;flex:0 0 54.16666667%;max-width:54.16666667%}.el-col-xs-push-13{left:54.16666667%}.el-col-xs-pull-13{right:54.16666667%}.el-col-xs-offset-13{margin-left:54.16666667%}.el-col-xs-order-13{order:13}.el-col-xs-12{display:block;flex:0 0 50%;max-width:50%}.el-col-xs-push-12{left:50%}.el-col-xs-pull-12{right:50%}.el-col-xs-offset-12{margin-left:50%}.el-col-xs-order-12{order:12}.el-col-xs-11{display:block;flex:0 0 45.83333333%;max-width:45.83333333%}.el-col-xs-push-11{left:45.83333333%}.el-col-xs-pull-11{right:45.83333333%}.el-col-xs-offset-11{margin-left:45.83333333%}.el-col-xs-order-11{order:11}.el-col-xs-10{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.el-col-xs-push-10{left:41.66666667%}.el-col-xs-pull-10{right:41.66666667%}.el-col-xs-offset-10{margin-left:41.66666667%}.el-col-xs-order-10{order:10}.el-col-xs-9{display:block;flex:0 0 37.5%;max-width:37.5%}.el-col-xs-push-9{left:37.5%}.el-col-xs-pull-9{right:37.5%}.el-col-xs-offset-9{margin-left:37.5%}.el-col-xs-order-9{order:9}.el-col-xs-8{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.el-col-xs-push-8{left:33.33333333%}.el-col-xs-pull-8{right:33.33333333%}.el-col-xs-offset-8{margin-left:33.33333333%}.el-col-xs-order-8{order:8}.el-col-xs-7{display:block;flex:0 0 29.16666667%;max-width:29.16666667%}.el-col-xs-push-7{left:29.16666667%}.el-col-xs-pull-7{right:29.16666667%}.el-col-xs-offset-7{margin-left:29.16666667%}.el-col-xs-order-7{order:7}.el-col-xs-6{display:block;flex:0 0 25%;max-width:25%}.el-col-xs-push-6{left:25%}.el-col-xs-pull-6{right:25%}.el-col-xs-offset-6{margin-left:25%}.el-col-xs-order-6{order:6}.el-col-xs-5{display:block;flex:0 0 20.83333333%;max-width:20.83333333%}.el-col-xs-push-5{left:20.83333333%}.el-col-xs-pull-5{right:20.83333333%}.el-col-xs-offset-5{margin-left:20.83333333%}.el-col-xs-order-5{order:5}.el-col-xs-4{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.el-col-xs-push-4{left:16.66666667%}.el-col-xs-pull-4{right:16.66666667%}.el-col-xs-offset-4{margin-left:16.66666667%}.el-col-xs-order-4{order:4}.el-col-xs-3{display:block;flex:0 0 12.5%;max-width:12.5%}.el-col-xs-push-3{left:12.5%}.el-col-xs-pull-3{right:12.5%}.el-col-xs-offset-3{margin-left:12.5%}.el-col-xs-order-3{order:3}.el-col-xs-2{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.el-col-xs-push-2{left:8.33333333%}.el-col-xs-pull-2{right:8.33333333%}.el-col-xs-offset-2{margin-left:8.33333333%}.el-col-xs-order-2{order:2}.el-col-xs-1{display:block;flex:0 0 4.16666667%;max-width:4.16666667%}.el-col-xs-push-1{left:4.16666667%}.el-col-xs-pull-1{right:4.16666667%}.el-col-xs-offset-1{margin-left:4.16666667%}.el-col-xs-order-1{order:1}.el-col-xs-0{display:none}.el-col-push-0{left:auto}.el-col-pull-0{right:auto}.el-col-xs-push-0{left:auto}.el-col-xs-pull-0{right:auto}.el-col-xs-offset-0{margin-left:0}.el-col-xs-order-0{order:0}}@media (min-width:768px){.el-col-sm-24{display:block;flex:0 0 100%;max-width:100%}.el-col-sm-push-24{left:100%}.el-col-sm-pull-24{right:100%}.el-col-sm-offset-24{margin-left:100%}.el-col-sm-order-24{order:24}.el-col-sm-23{display:block;flex:0 0 95.83333333%;max-width:95.83333333%}.el-col-sm-push-23{left:95.83333333%}.el-col-sm-pull-23{right:95.83333333%}.el-col-sm-offset-23{margin-left:95.83333333%}.el-col-sm-order-23{order:23}.el-col-sm-22{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.el-col-sm-push-22{left:91.66666667%}.el-col-sm-pull-22{right:91.66666667%}.el-col-sm-offset-22{margin-left:91.66666667%}.el-col-sm-order-22{order:22}.el-col-sm-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-sm-push-21{left:87.5%}.el-col-sm-pull-21{right:87.5%}.el-col-sm-offset-21{margin-left:87.5%}.el-col-sm-order-21{order:21}.el-col-sm-20{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.el-col-sm-push-20{left:83.33333333%}.el-col-sm-pull-20{right:83.33333333%}.el-col-sm-offset-20{margin-left:83.33333333%}.el-col-sm-order-20{order:20}.el-col-sm-19{display:block;flex:0 0 79.16666667%;max-width:79.16666667%}.el-col-sm-push-19{left:79.16666667%}.el-col-sm-pull-19{right:79.16666667%}.el-col-sm-offset-19{margin-left:79.16666667%}.el-col-sm-order-19{order:19}.el-col-sm-18{display:block;flex:0 0 75%;max-width:75%}.el-col-sm-push-18{left:75%}.el-col-sm-pull-18{right:75%}.el-col-sm-offset-18{margin-left:75%}.el-col-sm-order-18{order:18}.el-col-sm-17{display:block;flex:0 0 70.83333333%;max-width:70.83333333%}.el-col-sm-push-17{left:70.83333333%}.el-col-sm-pull-17{right:70.83333333%}.el-col-sm-offset-17{margin-left:70.83333333%}.el-col-sm-order-17{order:17}.el-col-sm-16{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.el-col-sm-push-16{left:66.66666667%}.el-col-sm-pull-16{right:66.66666667%}.el-col-sm-offset-16{margin-left:66.66666667%}.el-col-sm-order-16{order:16}.el-col-sm-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-sm-push-15{left:62.5%}.el-col-sm-pull-15{right:62.5%}.el-col-sm-offset-15{margin-left:62.5%}.el-col-sm-order-15{order:15}.el-col-sm-14{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.el-col-sm-push-14{left:58.33333333%}.el-col-sm-pull-14{right:58.33333333%}.el-col-sm-offset-14{margin-left:58.33333333%}.el-col-sm-order-14{order:14}.el-col-sm-13{display:block;flex:0 0 54.16666667%;max-width:54.16666667%}.el-col-sm-push-13{left:54.16666667%}.el-col-sm-pull-13{right:54.16666667%}.el-col-sm-offset-13{margin-left:54.16666667%}.el-col-sm-order-13{order:13}.el-col-sm-12{display:block;flex:0 0 50%;max-width:50%}.el-col-sm-push-12{left:50%}.el-col-sm-pull-12{right:50%}.el-col-sm-offset-12{margin-left:50%}.el-col-sm-order-12{order:12}.el-col-sm-11{display:block;flex:0 0 45.83333333%;max-width:45.83333333%}.el-col-sm-push-11{left:45.83333333%}.el-col-sm-pull-11{right:45.83333333%}.el-col-sm-offset-11{margin-left:45.83333333%}.el-col-sm-order-11{order:11}.el-col-sm-10{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.el-col-sm-push-10{left:41.66666667%}.el-col-sm-pull-10{right:41.66666667%}.el-col-sm-offset-10{margin-left:41.66666667%}.el-col-sm-order-10{order:10}.el-col-sm-9{display:block;flex:0 0 37.5%;max-width:37.5%}.el-col-sm-push-9{left:37.5%}.el-col-sm-pull-9{right:37.5%}.el-col-sm-offset-9{margin-left:37.5%}.el-col-sm-order-9{order:9}.el-col-sm-8{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.el-col-sm-push-8{left:33.33333333%}.el-col-sm-pull-8{right:33.33333333%}.el-col-sm-offset-8{margin-left:33.33333333%}.el-col-sm-order-8{order:8}.el-col-sm-7{display:block;flex:0 0 29.16666667%;max-width:29.16666667%}.el-col-sm-push-7{left:29.16666667%}.el-col-sm-pull-7{right:29.16666667%}.el-col-sm-offset-7{margin-left:29.16666667%}.el-col-sm-order-7{order:7}.el-col-sm-6{display:block;flex:0 0 25%;max-width:25%}.el-col-sm-push-6{left:25%}.el-col-sm-pull-6{right:25%}.el-col-sm-offset-6{margin-left:25%}.el-col-sm-order-6{order:6}.el-col-sm-5{display:block;flex:0 0 20.83333333%;max-width:20.83333333%}.el-col-sm-push-5{left:20.83333333%}.el-col-sm-pull-5{right:20.83333333%}.el-col-sm-offset-5{margin-left:20.83333333%}.el-col-sm-order-5{order:5}.el-col-sm-4{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.el-col-sm-push-4{left:16.66666667%}.el-col-sm-pull-4{right:16.66666667%}.el-col-sm-offset-4{margin-left:16.66666667%}.el-col-sm-order-4{order:4}.el-col-sm-3{display:block;flex:0 0 12.5%;max-width:12.5%}.el-col-sm-push-3{left:12.5%}.el-col-sm-pull-3{right:12.5%}.el-col-sm-offset-3{margin-left:12.5%}.el-col-sm-order-3{order:3}.el-col-sm-2{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.el-col-sm-push-2{left:8.33333333%}.el-col-sm-pull-2{right:8.33333333%}.el-col-sm-offset-2{margin-left:8.33333333%}.el-col-sm-order-2{order:2}.el-col-sm-1{display:block;flex:0 0 4.16666667%;max-width:4.16666667%}.el-col-sm-push-1{left:4.16666667%}.el-col-sm-pull-1{right:4.16666667%}.el-col-sm-offset-1{margin-left:4.16666667%}.el-col-sm-order-1{order:1}.el-col-sm-0{display:none}.el-col-push-0{left:auto}.el-col-pull-0{right:auto}.el-col-sm-push-0{left:auto}.el-col-sm-pull-0{right:auto}.el-col-sm-offset-0{margin-left:0}.el-col-sm-order-0{order:0}}@media (min-width:992px){.el-col-md-24{display:block;flex:0 0 100%;max-width:100%}.el-col-md-push-24{left:100%}.el-col-md-pull-24{right:100%}.el-col-md-offset-24{margin-left:100%}.el-col-md-order-24{order:24}.el-col-md-23{display:block;flex:0 0 95.83333333%;max-width:95.83333333%}.el-col-md-push-23{left:95.83333333%}.el-col-md-pull-23{right:95.83333333%}.el-col-md-offset-23{margin-left:95.83333333%}.el-col-md-order-23{order:23}.el-col-md-22{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.el-col-md-push-22{left:91.66666667%}.el-col-md-pull-22{right:91.66666667%}.el-col-md-offset-22{margin-left:91.66666667%}.el-col-md-order-22{order:22}.el-col-md-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-md-push-21{left:87.5%}.el-col-md-pull-21{right:87.5%}.el-col-md-offset-21{margin-left:87.5%}.el-col-md-order-21{order:21}.el-col-md-20{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.el-col-md-push-20{left:83.33333333%}.el-col-md-pull-20{right:83.33333333%}.el-col-md-offset-20{margin-left:83.33333333%}.el-col-md-order-20{order:20}.el-col-md-19{display:block;flex:0 0 79.16666667%;max-width:79.16666667%}.el-col-md-push-19{left:79.16666667%}.el-col-md-pull-19{right:79.16666667%}.el-col-md-offset-19{margin-left:79.16666667%}.el-col-md-order-19{order:19}.el-col-md-18{display:block;flex:0 0 75%;max-width:75%}.el-col-md-push-18{left:75%}.el-col-md-pull-18{right:75%}.el-col-md-offset-18{margin-left:75%}.el-col-md-order-18{order:18}.el-col-md-17{display:block;flex:0 0 70.83333333%;max-width:70.83333333%}.el-col-md-push-17{left:70.83333333%}.el-col-md-pull-17{right:70.83333333%}.el-col-md-offset-17{margin-left:70.83333333%}.el-col-md-order-17{order:17}.el-col-md-16{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.el-col-md-push-16{left:66.66666667%}.el-col-md-pull-16{right:66.66666667%}.el-col-md-offset-16{margin-left:66.66666667%}.el-col-md-order-16{order:16}.el-col-md-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-md-push-15{left:62.5%}.el-col-md-pull-15{right:62.5%}.el-col-md-offset-15{margin-left:62.5%}.el-col-md-order-15{order:15}.el-col-md-14{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.el-col-md-push-14{left:58.33333333%}.el-col-md-pull-14{right:58.33333333%}.el-col-md-offset-14{margin-left:58.33333333%}.el-col-md-order-14{order:14}.el-col-md-13{display:block;flex:0 0 54.16666667%;max-width:54.16666667%}.el-col-md-push-13{left:54.16666667%}.el-col-md-pull-13{right:54.16666667%}.el-col-md-offset-13{margin-left:54.16666667%}.el-col-md-order-13{order:13}.el-col-md-12{display:block;flex:0 0 50%;max-width:50%}.el-col-md-push-12{left:50%}.el-col-md-pull-12{right:50%}.el-col-md-offset-12{margin-left:50%}.el-col-md-order-12{order:12}.el-col-md-11{display:block;flex:0 0 45.83333333%;max-width:45.83333333%}.el-col-md-push-11{left:45.83333333%}.el-col-md-pull-11{right:45.83333333%}.el-col-md-offset-11{margin-left:45.83333333%}.el-col-md-order-11{order:11}.el-col-md-10{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.el-col-md-push-10{left:41.66666667%}.el-col-md-pull-10{right:41.66666667%}.el-col-md-offset-10{margin-left:41.66666667%}.el-col-md-order-10{order:10}.el-col-md-9{display:block;flex:0 0 37.5%;max-width:37.5%}.el-col-md-push-9{left:37.5%}.el-col-md-pull-9{right:37.5%}.el-col-md-offset-9{margin-left:37.5%}.el-col-md-order-9{order:9}.el-col-md-8{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.el-col-md-push-8{left:33.33333333%}.el-col-md-pull-8{right:33.33333333%}.el-col-md-offset-8{margin-left:33.33333333%}.el-col-md-order-8{order:8}.el-col-md-7{display:block;flex:0 0 29.16666667%;max-width:29.16666667%}.el-col-md-push-7{left:29.16666667%}.el-col-md-pull-7{right:29.16666667%}.el-col-md-offset-7{margin-left:29.16666667%}.el-col-md-order-7{order:7}.el-col-md-6{display:block;flex:0 0 25%;max-width:25%}.el-col-md-push-6{left:25%}.el-col-md-pull-6{right:25%}.el-col-md-offset-6{margin-left:25%}.el-col-md-order-6{order:6}.el-col-md-5{display:block;flex:0 0 20.83333333%;max-width:20.83333333%}.el-col-md-push-5{left:20.83333333%}.el-col-md-pull-5{right:20.83333333%}.el-col-md-offset-5{margin-left:20.83333333%}.el-col-md-order-5{order:5}.el-col-md-4{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.el-col-md-push-4{left:16.66666667%}.el-col-md-pull-4{right:16.66666667%}.el-col-md-offset-4{margin-left:16.66666667%}.el-col-md-order-4{order:4}.el-col-md-3{display:block;flex:0 0 12.5%;max-width:12.5%}.el-col-md-push-3{left:12.5%}.el-col-md-pull-3{right:12.5%}.el-col-md-offset-3{margin-left:12.5%}.el-col-md-order-3{order:3}.el-col-md-2{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.el-col-md-push-2{left:8.33333333%}.el-col-md-pull-2{right:8.33333333%}.el-col-md-offset-2{margin-left:8.33333333%}.el-col-md-order-2{order:2}.el-col-md-1{display:block;flex:0 0 4.16666667%;max-width:4.16666667%}.el-col-md-push-1{left:4.16666667%}.el-col-md-pull-1{right:4.16666667%}.el-col-md-offset-1{margin-left:4.16666667%}.el-col-md-order-1{order:1}.el-col-md-0{display:none}.el-col-push-0{left:auto}.el-col-pull-0{right:auto}.el-col-md-push-0{left:auto}.el-col-md-pull-0{right:auto}.el-col-md-offset-0{margin-left:0}.el-col-md-order-0{order:0}}@media (min-width:1200px){.el-col-lg-24{display:block;flex:0 0 100%;max-width:100%}.el-col-lg-push-24{left:100%}.el-col-lg-pull-24{right:100%}.el-col-lg-offset-24{margin-left:100%}.el-col-lg-order-24{order:24}.el-col-lg-23{display:block;flex:0 0 95.83333333%;max-width:95.83333333%}.el-col-lg-push-23{left:95.83333333%}.el-col-lg-pull-23{right:95.83333333%}.el-col-lg-offset-23{margin-left:95.83333333%}.el-col-lg-order-23{order:23}.el-col-lg-22{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.el-col-lg-push-22{left:91.66666667%}.el-col-lg-pull-22{right:91.66666667%}.el-col-lg-offset-22{margin-left:91.66666667%}.el-col-lg-order-22{order:22}.el-col-lg-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-lg-push-21{left:87.5%}.el-col-lg-pull-21{right:87.5%}.el-col-lg-offset-21{margin-left:87.5%}.el-col-lg-order-21{order:21}.el-col-lg-20{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.el-col-lg-push-20{left:83.33333333%}.el-col-lg-pull-20{right:83.33333333%}.el-col-lg-offset-20{margin-left:83.33333333%}.el-col-lg-order-20{order:20}.el-col-lg-19{display:block;flex:0 0 79.16666667%;max-width:79.16666667%}.el-col-lg-push-19{left:79.16666667%}.el-col-lg-pull-19{right:79.16666667%}.el-col-lg-offset-19{margin-left:79.16666667%}.el-col-lg-order-19{order:19}.el-col-lg-18{display:block;flex:0 0 75%;max-width:75%}.el-col-lg-push-18{left:75%}.el-col-lg-pull-18{right:75%}.el-col-lg-offset-18{margin-left:75%}.el-col-lg-order-18{order:18}.el-col-lg-17{display:block;flex:0 0 70.83333333%;max-width:70.83333333%}.el-col-lg-push-17{left:70.83333333%}.el-col-lg-pull-17{right:70.83333333%}.el-col-lg-offset-17{margin-left:70.83333333%}.el-col-lg-order-17{order:17}.el-col-lg-16{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.el-col-lg-push-16{left:66.66666667%}.el-col-lg-pull-16{right:66.66666667%}.el-col-lg-offset-16{margin-left:66.66666667%}.el-col-lg-order-16{order:16}.el-col-lg-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-lg-push-15{left:62.5%}.el-col-lg-pull-15{right:62.5%}.el-col-lg-offset-15{margin-left:62.5%}.el-col-lg-order-15{order:15}.el-col-lg-14{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.el-col-lg-push-14{left:58.33333333%}.el-col-lg-pull-14{right:58.33333333%}.el-col-lg-offset-14{margin-left:58.33333333%}.el-col-lg-order-14{order:14}.el-col-lg-13{display:block;flex:0 0 54.16666667%;max-width:54.16666667%}.el-col-lg-push-13{left:54.16666667%}.el-col-lg-pull-13{right:54.16666667%}.el-col-lg-offset-13{margin-left:54.16666667%}.el-col-lg-order-13{order:13}.el-col-lg-12{display:block;flex:0 0 50%;max-width:50%}.el-col-lg-push-12{left:50%}.el-col-lg-pull-12{right:50%}.el-col-lg-offset-12{margin-left:50%}.el-col-lg-order-12{order:12}.el-col-lg-11{display:block;flex:0 0 45.83333333%;max-width:45.83333333%}.el-col-lg-push-11{left:45.83333333%}.el-col-lg-pull-11{right:45.83333333%}.el-col-lg-offset-11{margin-left:45.83333333%}.el-col-lg-order-11{order:11}.el-col-lg-10{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.el-col-lg-push-10{left:41.66666667%}.el-col-lg-pull-10{right:41.66666667%}.el-col-lg-offset-10{margin-left:41.66666667%}.el-col-lg-order-10{order:10}.el-col-lg-9{display:block;flex:0 0 37.5%;max-width:37.5%}.el-col-lg-push-9{left:37.5%}.el-col-lg-pull-9{right:37.5%}.el-col-lg-offset-9{margin-left:37.5%}.el-col-lg-order-9{order:9}.el-col-lg-8{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.el-col-lg-push-8{left:33.33333333%}.el-col-lg-pull-8{right:33.33333333%}.el-col-lg-offset-8{margin-left:33.33333333%}.el-col-lg-order-8{order:8}.el-col-lg-7{display:block;flex:0 0 29.16666667%;max-width:29.16666667%}.el-col-lg-push-7{left:29.16666667%}.el-col-lg-pull-7{right:29.16666667%}.el-col-lg-offset-7{margin-left:29.16666667%}.el-col-lg-order-7{order:7}.el-col-lg-6{display:block;flex:0 0 25%;max-width:25%}.el-col-lg-push-6{left:25%}.el-col-lg-pull-6{right:25%}.el-col-lg-offset-6{margin-left:25%}.el-col-lg-order-6{order:6}.el-col-lg-5{display:block;flex:0 0 20.83333333%;max-width:20.83333333%}.el-col-lg-push-5{left:20.83333333%}.el-col-lg-pull-5{right:20.83333333%}.el-col-lg-offset-5{margin-left:20.83333333%}.el-col-lg-order-5{order:5}.el-col-lg-4{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.el-col-lg-push-4{left:16.66666667%}.el-col-lg-pull-4{right:16.66666667%}.el-col-lg-offset-4{margin-left:16.66666667%}.el-col-lg-order-4{order:4}.el-col-lg-3{display:block;flex:0 0 12.5%;max-width:12.5%}.el-col-lg-push-3{left:12.5%}.el-col-lg-pull-3{right:12.5%}.el-col-lg-offset-3{margin-left:12.5%}.el-col-lg-order-3{order:3}.el-col-lg-2{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.el-col-lg-push-2{left:8.33333333%}.el-col-lg-pull-2{right:8.33333333%}.el-col-lg-offset-2{margin-left:8.33333333%}.el-col-lg-order-2{order:2}.el-col-lg-1{display:block;flex:0 0 4.16666667%;max-width:4.16666667%}.el-col-lg-push-1{left:4.16666667%}.el-col-lg-pull-1{right:4.16666667%}.el-col-lg-offset-1{margin-left:4.16666667%}.el-col-lg-order-1{order:1}.el-col-lg-0{display:none}.el-col-push-0{left:auto}.el-col-pull-0{right:auto}.el-col-lg-push-0{left:auto}.el-col-lg-pull-0{right:auto}.el-col-lg-offset-0{margin-left:0}.el-col-lg-order-0{order:0}}@media (min-width:1400px){.el-col-xl-24{display:block;flex:0 0 100%;max-width:100%}.el-col-xl-push-24{left:100%}.el-col-xl-pull-24{right:100%}.el-col-xl-offset-24{margin-left:100%}.el-col-xl-order-24{order:24}.el-col-xl-23{display:block;flex:0 0 95.83333333%;max-width:95.83333333%}.el-col-xl-push-23{left:95.83333333%}.el-col-xl-pull-23{right:95.83333333%}.el-col-xl-offset-23{margin-left:95.83333333%}.el-col-xl-order-23{order:23}.el-col-xl-22{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.el-col-xl-push-22{left:91.66666667%}.el-col-xl-pull-22{right:91.66666667%}.el-col-xl-offset-22{margin-left:91.66666667%}.el-col-xl-order-22{order:22}.el-col-xl-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-xl-push-21{left:87.5%}.el-col-xl-pull-21{right:87.5%}.el-col-xl-offset-21{margin-left:87.5%}.el-col-xl-order-21{order:21}.el-col-xl-20{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.el-col-xl-push-20{left:83.33333333%}.el-col-xl-pull-20{right:83.33333333%}.el-col-xl-offset-20{margin-left:83.33333333%}.el-col-xl-order-20{order:20}.el-col-xl-19{display:block;flex:0 0 79.16666667%;max-width:79.16666667%}.el-col-xl-push-19{left:79.16666667%}.el-col-xl-pull-19{right:79.16666667%}.el-col-xl-offset-19{margin-left:79.16666667%}.el-col-xl-order-19{order:19}.el-col-xl-18{display:block;flex:0 0 75%;max-width:75%}.el-col-xl-push-18{left:75%}.el-col-xl-pull-18{right:75%}.el-col-xl-offset-18{margin-left:75%}.el-col-xl-order-18{order:18}.el-col-xl-17{display:block;flex:0 0 70.83333333%;max-width:70.83333333%}.el-col-xl-push-17{left:70.83333333%}.el-col-xl-pull-17{right:70.83333333%}.el-col-xl-offset-17{margin-left:70.83333333%}.el-col-xl-order-17{order:17}.el-col-xl-16{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.el-col-xl-push-16{left:66.66666667%}.el-col-xl-pull-16{right:66.66666667%}.el-col-xl-offset-16{margin-left:66.66666667%}.el-col-xl-order-16{order:16}.el-col-xl-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-xl-push-15{left:62.5%}.el-col-xl-pull-15{right:62.5%}.el-col-xl-offset-15{margin-left:62.5%}.el-col-xl-order-15{order:15}.el-col-xl-14{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.el-col-xl-push-14{left:58.33333333%}.el-col-xl-pull-14{right:58.33333333%}.el-col-xl-offset-14{margin-left:58.33333333%}.el-col-xl-order-14{order:14}.el-col-xl-13{display:block;flex:0 0 54.16666667%;max-width:54.16666667%}.el-col-xl-push-13{left:54.16666667%}.el-col-xl-pull-13{right:54.16666667%}.el-col-xl-offset-13{margin-left:54.16666667%}.el-col-xl-order-13{order:13}.el-col-xl-12{display:block;flex:0 0 50%;max-width:50%}.el-col-xl-push-12{left:50%}.el-col-xl-pull-12{right:50%}.el-col-xl-offset-12{margin-left:50%}.el-col-xl-order-12{order:12}.el-col-xl-11{display:block;flex:0 0 45.83333333%;max-width:45.83333333%}.el-col-xl-push-11{left:45.83333333%}.el-col-xl-pull-11{right:45.83333333%}.el-col-xl-offset-11{margin-left:45.83333333%}.el-col-xl-order-11{order:11}.el-col-xl-10{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.el-col-xl-push-10{left:41.66666667%}.el-col-xl-pull-10{right:41.66666667%}.el-col-xl-offset-10{margin-left:41.66666667%}.el-col-xl-order-10{order:10}.el-col-xl-9{display:block;flex:0 0 37.5%;max-width:37.5%}.el-col-xl-push-9{left:37.5%}.el-col-xl-pull-9{right:37.5%}.el-col-xl-offset-9{margin-left:37.5%}.el-col-xl-order-9{order:9}.el-col-xl-8{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.el-col-xl-push-8{left:33.33333333%}.el-col-xl-pull-8{right:33.33333333%}.el-col-xl-offset-8{margin-left:33.33333333%}.el-col-xl-order-8{order:8}.el-col-xl-7{display:block;flex:0 0 29.16666667%;max-width:29.16666667%}.el-col-xl-push-7{left:29.16666667%}.el-col-xl-pull-7{right:29.16666667%}.el-col-xl-offset-7{margin-left:29.16666667%}.el-col-xl-order-7{order:7}.el-col-xl-6{display:block;flex:0 0 25%;max-width:25%}.el-col-xl-push-6{left:25%}.el-col-xl-pull-6{right:25%}.el-col-xl-offset-6{margin-left:25%}.el-col-xl-order-6{order:6}.el-col-xl-5{display:block;flex:0 0 20.83333333%;max-width:20.83333333%}.el-col-xl-push-5{left:20.83333333%}.el-col-xl-pull-5{right:20.83333333%}.el-col-xl-offset-5{margin-left:20.83333333%}.el-col-xl-order-5{order:5}.el-col-xl-4{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.el-col-xl-push-4{left:16.66666667%}.el-col-xl-pull-4{right:16.66666667%}.el-col-xl-offset-4{margin-left:16.66666667%}.el-col-xl-order-4{order:4}.el-col-xl-3{display:block;flex:0 0 12.5%;max-width:12.5%}.el-col-xl-push-3{left:12.5%}.el-col-xl-pull-3{right:12.5%}.el-col-xl-offset-3{margin-left:12.5%}.el-col-xl-order-3{order:3}.el-col-xl-2{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.el-col-xl-push-2{left:8.33333333%}.el-col-xl-pull-2{right:8.33333333%}.el-col-xl-offset-2{margin-left:8.33333333%}.el-col-xl-order-2{order:2}.el-col-xl-1{display:block;flex:0 0 4.16666667%;max-width:4.16666667%}.el-col-xl-push-1{left:4.16666667%}.el-col-xl-pull-1{right:4.16666667%}.el-col-xl-offset-1{margin-left:4.16666667%}.el-col-xl-order-1{order:1}.el-col-xl-0{display:none}.el-col-push-0{left:auto}.el-col-pull-0{right:auto}.el-col-xl-push-0{left:auto}.el-col-xl-pull-0{right:auto}.el-col-xl-offset-0{margin-left:0}.el-col-xl-order-0{order:0}}.el-tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.el-tile.is-parent{display:flex}.el-tile.is-vertical{flex-direction:column}';
injectCss(css_248z, "styles_index.less");
var elenext = {
  install: function install(app2) {
    var useComponent = function useComponent2(component) {
      if (component.name) {
        app2.component(component.name, component);
      } else {
        throw "component need name";
      }
    };
    useComponent(Row);
    useComponent(Col);
    useComponent(Tile);
    useComponent(Container);
    useComponent(ElAside);
    useComponent(ElMain);
    useComponent(ElHeader);
    useComponent(ElFooter);
    useComponent(Button);
    useComponent(ButtonGroup);
    useComponent(Link);
    useComponent(Icon);
    useComponent(Popover);
    useComponent(ElMenu);
    useComponent(ElMenuItem);
    useComponent(Submenu);
    useComponent(ElMenuItemGroup);
    useComponent(Alert);
  }
};
var script$2 = defineComponent({
  name: "Preview",
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  setup(props, {slots}) {
    const codeRef = ref();
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
        state.codeHeight = ((_a = codeRef.value) == null ? void 0 : _a.offsetHeight) || 0;
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
const _hoisted_1$2 = {class: "preview"};
const _hoisted_2$1 = {class: "preview__card"};
const _hoisted_3 = {class: "preview__demo"};
const _hoisted_4 = {
  ref: "codeRef",
  class: "preview__coderef"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$2, [
    createVNode("div", _hoisted_2$1, [
      createVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "default")
      ]),
      createVNode("div", {
        style: {height: `${_ctx.codeHeight}px`},
        class: "preview__code"
      }, [
        createVNode("div", _hoisted_4, [
          createVNode("pre", null, [
            createVNode("code", {
              class: "language-markup",
              textContent: _ctx.source
            }, null, 8, ["textContent"])
          ])
        ], 512)
      ], 4),
      createVNode("div", {
        class: "preview__footer",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.toggleCode(...args))
      }, toDisplayString(_ctx.codeHeight > 0 ? "隐藏代码" : "显示代码"), 1)
    ])
  ]);
}
;
script$2.render = render$2;
script$2.__file = "src/components/Preview.vue";
var script$3 = defineComponent({
  name: "App",
  components: {}
});
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(_component_router_view);
}
script$3.render = render$3;
script$3.__file = "src/App.vue";
window.Prism.plugins.NormalizeWhitespace.setDefaults({
  indent: 0,
  "remove-trailing": true,
  "remove-indent": true,
  "left-trim": true,
  "right-trim": true,
  "remove-initial-line-feed": false,
  "tabs-to-spaces": 2
});
const app = createApp(script$3);
app.use(router);
app.use(elenext);
app.component("Preview", script$2);
app.mount("#app");
export {Fragment as F, createVNode as a, createTextVNode as b, createBlock as c, defineComponent as d, createStaticVNode as e, openBlock as o, resolveComponent as r, withCtx as w};
