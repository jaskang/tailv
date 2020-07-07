;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var prism = createCommonjsModule(function (module) {
/* PrismJS 1.20.0
https://prismjs.com/download.html#themes=prism-coy&languages=markup+css+clike+javascript+typescript&plugins=normalize-whitespace */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,C={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof _?new _(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n,l=C.util.type(e);switch(r=r||{},l){case"Object":if(n=C.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return n=C.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r);}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}}},languages:{extend:function(e,n){var t=C.util.clone(C.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(t,e,n,r){var a=(r=r||C.languages)[t],l={};for(var i in a)if(a.hasOwnProperty(i)){if(i==e)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);n.hasOwnProperty(i)||(l[i]=a[i]);}var s=r[t];return r[t]=l,C.languages.DFS(C.languages,function(e,n){n===s&&e!=t&&(this[e]=l);}),l},DFS:function e(n,t,r,a){a=a||{};var l=C.util.objId;for(var i in n)if(n.hasOwnProperty(i)){t.call(n,i,n[i],r||i);var o=n[i],s=C.util.type(o);"Object"!==s||a[l(o)]?"Array"!==s||a[l(o)]||(a[l(o)]=!0,e(o,t,i,a)):(a[l(o)]=!0,e(o,t,null,a));}}},plugins:{},highlightAll:function(e,n){C.highlightAllUnder(document,e,n);},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),C.hooks.run("before-all-elements-highlight",r);for(var a,l=0;a=r.elements[l++];)C.highlightElement(a,!0===n,r.callback);},highlightElement:function(e,n,t){var r=C.util.getLanguage(e),a=C.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var l=e.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var i={element:e,language:r,grammar:a,code:e.textContent};function o(e){i.highlightedCode=e,C.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,C.hooks.run("after-highlight",i),C.hooks.run("complete",i),t&&t.call(i.element);}if(C.hooks.run("before-sanity-check",i),!i.code)return C.hooks.run("complete",i),void(t&&t.call(i.element));if(C.hooks.run("before-highlight",i),i.grammar)if(n&&u.Worker){var s=new Worker(C.filename);s.onmessage=function(e){o(e.data);},s.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}));}else o(C.highlight(i.code,i.grammar,i.language));else o(C.util.encode(i.code));},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return C.hooks.run("before-tokenize",r),r.tokens=C.tokenize(r.code,r.grammar),C.hooks.run("after-tokenize",r),_.stringify(C.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest;}var a=new l;return M(a,a.head,e),function e(n,t,r,a,l,i,o){for(var s in r)if(r.hasOwnProperty(s)&&r[s]){var u=r[s];u=Array.isArray(u)?u:[u];for(var c=0;c<u.length;++c){if(o&&o==s+","+c)return;var g=u[c],f=g.inside,h=!!g.lookbehind,d=!!g.greedy,v=0,p=g.alias;if(d&&!g.pattern.global){var m=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,m+"g");}g=g.pattern||g;for(var y=a.next,k=l;y!==t.tail;k+=y.value.length,y=y.next){var b=y.value;if(t.length>n.length)return;if(!(b instanceof _)){var x=1;if(d&&y!=t.tail.prev){g.lastIndex=k;var w=g.exec(n);if(!w)break;var A=w.index+(h&&w[1]?w[1].length:0),P=w.index+w[0].length,S=k;for(S+=y.value.length;S<=A;)y=y.next,S+=y.value.length;if(S-=y.value.length,k=S,y.value instanceof _)continue;for(var O=y;O!==t.tail&&(S<P||"string"==typeof O.value&&!O.prev.value.greedy);O=O.next)x++,S+=O.value.length;x--,b=n.slice(k,S),w.index-=k;}else {g.lastIndex=0;var w=g.exec(b);}if(w){h&&(v=w[1]?w[1].length:0);var A=w.index+v,w=w[0].slice(v),P=A+w.length,E=b.slice(0,A),N=b.slice(P),j=y.prev;E&&(j=M(t,j,E),k+=E.length),W(t,j,x);var L=new _(s,f?C.tokenize(w,f):w,p,w,d);if(y=M(t,j,L),N&&M(t,y,N),1<x&&e(n,t,r,y.prev,k,!0,s+","+c),i)break}else if(i)break}}}}}(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=C.hooks.all;t[e]=t[e]||[],t[e].push(n);},run:function(e,n){var t=C.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n);}},Token:_};function _(e,n,t,r,a){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length,this.greedy=!!a;}function l(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0;}function M(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function W(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a;}if(u.Prism=C,_.stringify=function n(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=n(e,t);}),r}var a={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(a.classes,l):a.classes.push(l)),C.hooks.run("wrap",a);var i="";for(var o in a.attributes)i+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return "<"+a.tag+' class="'+a.classes.join(" ")+'"'+i+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(C.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),t=n.language,r=n.code,a=n.immediateClose;u.postMessage(C.highlight(r,C.languages[t],t)),a&&u.close();},!1)),C;var e=C.util.currentScript();function t(){C.manual||C.highlightAll();}if(e&&(C.filename=e.src,e.hasAttribute("data-manual")&&(C.manual=!0)),!C.manual){var r=document.readyState;"loading"===r||"interactive"===r&&e&&e.defer?document.addEventListener("DOMContentLoaded",t):window.requestAnimationFrame?window.requestAnimationFrame(t):window.setTimeout(t,16);}return C}(_self);module.exports&&(module.exports=Prism),"undefined"!=typeof commonjsGlobal&&(commonjsGlobal.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"));}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var t={};t[a]={pattern:RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",t);}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+e.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+e.source+")*?(?=\\s*\\{)"),string:{pattern:e,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},t.tag));}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},keyword:/\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),delete e.languages.typescript.parameter;var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{"generic-function":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript;}(Prism);
!function(){var i=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};function e(e){this.defaults=i({},e);}function l(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}e.prototype={setDefaults:function(e){this.defaults=i(this.defaults,e);},normalize:function(e,n){for(var t in n=i(this.defaults,n)){var r=t.replace(/-(\w)/g,function(e,n){return n.toUpperCase()});"normalize"!==t&&"setDefaults"!==r&&n[t]&&this[r]&&(e=this[r].call(this,e,n[t]));}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var t=e.split("\n"),r=0;r<t.length;++r)if(!(l(t[r])<=n)){for(var i=t[r].split(/(\s+)/g),o=0,a=0;a<i.length;++a){var s=l(i[a]);n<(o+=s)&&(i[a]="\n"+i[a],o=s);}t[r]=i.join("");}return t.join("\n")}},module.exports&&(module.exports=e),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=Prism.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"])if(e.element&&e.element.parentNode||!e.code){var t=e.element.parentNode,r=/(?:^|\s)no-whitespace-normalization(?:\s|$)/;if(e.code&&t&&"pre"===t.nodeName.toLowerCase()&&!r.test(t.className)&&!r.test(e.element.className)){for(var i=t.childNodes,o="",a="",s=!1,l=0;l<i.length;++l){var c=i[l];c==e.element?s=!0:"#text"===c.nodeName&&(s?a+=c.nodeValue:o+=c.nodeValue,t.removeChild(c),--l);}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=o+e.element.innerHTML+a;e.element.innerHTML=n.normalize(u,e.settings),e.code=e.element.textContent;}else e.code=o+e.code+a,e.code=n.normalize(e.code,e.settings);}}else e.code=n.normalize(e.code,e.settings);}));}();
});

;

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);

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
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            res += normalizeClass(value[i]) + ' ';
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// For converting {{ interpolation }} values to displayed strings.
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (val instanceof Map) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (val instanceof Set) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ =  {};
const EMPTY_ARR = [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
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
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isReservedProp = /*#__PURE__*/ makeMap('key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
});
const capitalize = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
// compare whether a value has changed, accounting for NaN.
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
const ITERATE_KEY = Symbol( '');
const MAP_KEY_ITERATE_KEY = Symbol( '');
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
        fn = fn.raw;
    }
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
        effect();
    }
    return effect;
}
function stop(effect) {
    if (effect.active) {
        cleanup(effect);
        if (effect.options.onStop) {
            effect.options.onStop();
        }
        effect.active = false;
    }
}
let uid = 0;
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect(...args) {
        if (!effect.active) {
            return options.scheduler ? undefined : fn(...args);
        }
        if (!effectStack.includes(effect)) {
            cleanup(effect);
            try {
                enableTracking();
                effectStack.push(effect);
                activeEffect = effect;
                return fn(...args);
            }
            finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function cleanup(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
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
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) {
        return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    const effects = new Set();
    const add = (effectsToAdd) => {
        if (effectsToAdd) {
            effectsToAdd.forEach(effect => {
                if (effect !== activeEffect || !shouldTrack) {
                    effects.add(effect);
                }
            });
        }
    };
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        depsMap.forEach(add);
    }
    else if (key === 'length' && isArray(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                add(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            add(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        const isAddOrDelete = type === "add" /* ADD */ ||
            (type === "delete" /* DELETE */ && !isArray(target));
        if (isAddOrDelete ||
            (type === "set" /* SET */ && target instanceof Map)) {
            add(depsMap.get(isArray(target) ? 'length' : ITERATE_KEY));
        }
        if (isAddOrDelete && target instanceof Map) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
        }
    }
    const run = (effect) => {
        if (effect.options.scheduler) {
            effect.options.scheduler(effect);
        }
        else {
            effect();
        }
    };
    effects.forEach(run);
}

const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
    arrayInstrumentations[key] = function (...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get" /* GET */, i + '');
        }
        // we run the method using the original args first (which may be reactive)
        const res = arr[key](...args);
        if (res === -1 || res === false) {
            // if that didn't work, run it again using raw values.
            return arr[key](...args.map(toRaw));
        }
        else {
            return res;
        }
    };
});
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver ===
                (isReadonly
                    ? target["__v_readonly" /* READONLY */]
                    : target["__v_reactive" /* REACTIVE */])) {
            return target;
        }
        const targetIsArray = isArray(target);
        if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key)
            ? builtInSymbols.has(key)
            : key === `__proto__` || key === `__v_isRef`) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping, only for Objects, not for Arrays.
            return targetIsArray ? res : res.value;
        }
        if (isObject(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        const oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if (hasChanged(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value);
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
        trigger(target, "delete" /* DELETE */, key, undefined);
    }
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    track(target, "has" /* HAS */, key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, ITERATE_KEY);
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
    has,
    ownKeys,
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
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, wrap) {
    target = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        track(target, "get" /* GET */, key);
    }
    track(target, "get" /* GET */, rawKey);
    const { has, get } = getProto(target);
    if (has.call(target, key)) {
        return wrap(get.call(target, key));
    }
    else if (has.call(target, rawKey)) {
        return wrap(get.call(target, rawKey));
    }
}
function has$1(key) {
    const target = toRaw(this);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        track(target, "has" /* HAS */, key);
    }
    track(target, "has" /* HAS */, rawKey);
    const has = getProto(target).has;
    return has.call(target, key) || has.call(target, rawKey);
}
function size(target) {
    target = toRaw(target);
    track(target, "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(getProto(target), 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    const result = proto.add.call(target, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, value, value);
    }
    return result;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get, set } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    const oldValue = get.call(target, key);
    const result = set.call(target, key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if (hasChanged(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value);
    }
    return result;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get, delete: del } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = del.call(target, key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    // forward the operation before queueing reactions
    const result = getProto(target).clear.call(target);
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined);
    }
    return result;
}
function createForEach(isReadonly, shallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = toRaw(observed);
        const wrap = isReadonly ? toReadonly : shallow ? toShallow : toReactive;
        !isReadonly && track(target, "iterate" /* ITERATE */, ITERATE_KEY);
        // important: create sure the callback is
        // 1. invoked with the reactive map as `this` and 3rd arg
        // 2. the value received should be a corresponding reactive/readonly.
        function wrappedCallback(value, key) {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        }
        return getProto(target).forEach.call(target, wrappedCallback);
    };
}
function createIterableMethod(method, isReadonly, shallow) {
    return function (...args) {
        const target = toRaw(this);
        const isMap = target instanceof Map;
        const isPair = method === 'entries' || (method === Symbol.iterator && isMap);
        const isKeyOnly = method === 'keys' && isMap;
        const innerIterator = getProto(target)[method].apply(target, args);
        const wrap = isReadonly ? toReadonly : shallow ? toShallow : toReactive;
        !isReadonly &&
            track(target, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        return type === "delete" /* DELETE */ ? false : this;
    };
}
const mutableInstrumentations = {
    get(key) {
        return get$1(this, key, toReactive);
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
        return get$1(this, key, toShallow);
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
        return get$1(this, key, toReadonly);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add: createReadonlyMethod("add" /* ADD */),
    set: createReadonlyMethod("set" /* SET */),
    delete: createReadonlyMethod("delete" /* DELETE */),
    clear: createReadonlyMethod("clear" /* CLEAR */),
    forEach: createForEach(true, false)
};
const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get(hasOwn(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
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

const collectionTypes = new Set([Set, Map, WeakMap, WeakSet]);
const isObservableType = /*#__PURE__*/ makeMap('Object,Array,Map,Set,WeakMap,WeakSet');
const canObserve = (value) => {
    return (!value["__v_skip" /* SKIP */] &&
        isObservableType(toRawType(value)) &&
        !Object.isFrozen(value));
};
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */]) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
}
// Return a reactive-copy of the original object, where only the root level
// properties are reactive, and does NOT unwrap refs nor recursively convert
// returned properties.
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
    if (!isObject(target)) {
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    if (hasOwn(target, isReadonly ? "__v_readonly" /* READONLY */ : "__v_reactive" /* REACTIVE */)) {
        return isReadonly
            ? target["__v_readonly" /* READONLY */]
            : target["__v_reactive" /* REACTIVE */];
    }
    // only a whitelist of value types can be observed.
    if (!canObserve(target)) {
        return target;
    }
    const observed = new Proxy(target, collectionTypes.has(target.constructor) ? collectionHandlers : baseHandlers);
    def(target, isReadonly ? "__v_readonly" /* READONLY */ : "__v_reactive" /* REACTIVE */, observed);
    return observed;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    return ((observed && toRaw(observed["__v_raw" /* RAW */])) || observed);
}

const convert = (val) => isObject(val) ? reactive(val) : val;
function isRef(r) {
    return r ? r.__v_isRef === true : false;
}
function ref(value) {
    return createRef(value);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    let value = shallow ? rawValue : convert(rawValue);
    const r = {
        __v_isRef: true,
        get value() {
            track(r, "get" /* GET */, 'value');
            return value;
        },
        set value(newVal) {
            if (hasChanged(toRaw(newVal), rawValue)) {
                rawValue = newVal;
                value = shallow ? newVal : convert(newVal);
                trigger(r, "set" /* SET */, 'value',  void 0);
            }
        }
    };
    return r;
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function toRefs(object) {
    const ret = {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
function toRef(object, key) {
    return {
        __v_isRef: true,
        get value() {
            return object[key];
        },
        set value(newVal) {
            object[key] = newVal;
        }
    };
}

function computed(getterOrOptions) {
    let getter;
    let setter;
    if (isFunction(getterOrOptions)) {
        getter = getterOrOptions;
        setter =  NOOP;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    let dirty = true;
    let value;
    let computed;
    const runner = effect(getter, {
        lazy: true,
        // mark effect as computed so that it gets priority during trigger
        scheduler: () => {
            if (!dirty) {
                dirty = true;
                trigger(computed, "set" /* SET */, 'value');
            }
        }
    });
    computed = {
        __v_isRef: true,
        // expose effect so computed can be stopped
        effect: runner,
        get value() {
            if (dirty) {
                value = runner();
                dirty = false;
            }
            track(computed, "get" /* GET */, 'value');
            return value;
        },
        set value(newValue) {
            setter(newValue);
        }
    };
    return computed;
}

const stack = [];
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
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
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
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
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
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
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if (isRef(value)) {
        value = formatProp(key, toRaw(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if (isFunction(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = toRaw(value);
        return raw ? value : [`${key}=`, value];
    }
}
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && isPromise(res)) {
            res.catch(err => {
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
function handleError(err, instance, type) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo =  type;
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
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err);
}
function logError(err, type, contextVNode) {
    // default behavior is crash in prod & test, recover in dev.
    {
        throw err;
    }
}

const queue = [];
const postFlushCbs = [];
const p = Promise.resolve();
let isFlushing = false;
let isFlushPending = false;
function nextTick(fn) {
    return fn ? p.then(fn) : p;
}
function queueJob(job) {
    if (!queue.includes(job)) {
        queue.push(job);
        queueFlush();
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > -1) {
        queue[i] = null;
    }
}
function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
        postFlushCbs.push(cb);
    }
    else {
        postFlushCbs.push(...cb);
    }
    queueFlush();
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        nextTick(flushJobs);
    }
}
function flushPostFlushCbs(seen) {
    if (postFlushCbs.length) {
        const cbs = [...new Set(postFlushCbs)];
        postFlushCbs.length = 0;
        for (let i = 0; i < cbs.length; i++) {
            cbs[i]();
        }
    }
}
const getId = (job) => (job.id == null ? Infinity : job.id);
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    let job;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    // Jobs can never be null before flush starts, since they are only invalidated
    // during execution of another flushed job.
    queue.sort((a, b) => getId(a) - getId(b));
    while ((job = queue.shift()) !== undefined) {
        if (job === null) {
            continue;
        }
        callWithErrorHandling(job, null, 14 /* SCHEDULER */);
    }
    flushPostFlushCbs();
    isFlushing = false;
    // some postFlushCb queued jobs!
    // keep flushing until it drains.
    if (queue.length || postFlushCbs.length) {
        flushJobs();
    }
}

// mark the current rendering instance for asset resolution (e.g.
// resolveComponent, resolveDirective) during render
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
    currentRenderingInstance = instance;
}
// dev only flag to track whether $attrs was used during render.
// If $attrs was used during render then the warning for failed attrs
// fallthrough can be suppressed.
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, parent, vnode, proxy, withProxy, props, slots, attrs, emit, renderCache } = instance;
    let result;
    currentRenderingInstance = instance;
    try {
        let fallthroughAttrs;
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(instance.render.call(proxyToUse, proxyToUse, renderCache));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (("production" !== 'production') && attrs === props) {
                markAttrsAccessed();
            }
            result = normalizeVNode(render.length > 1
                ? render(props, ("production" !== 'production')
                    ? {
                        get attrs() {
                            markAttrsAccessed();
                            return attrs;
                        },
                        slots,
                        emit
                    }
                    : { attrs, slots, emit })
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props ? attrs : getFallthroughAttrs(attrs);
        }
        // attr merging
        // in dev mode, comments are preserved, and it's possible for a template
        // to have comments along side the root element which makes it a fragment
        let root = result;
        let setRoot = undefined;
        if (("production" !== 'production')) {
            ;
            [root, setRoot] = getChildRoot(result);
        }
        if (Component.inheritAttrs !== false &&
            fallthroughAttrs &&
            Object.keys(fallthroughAttrs).length) {
            if (root.shapeFlag & 1 /* ELEMENT */ ||
                root.shapeFlag & 6 /* COMPONENT */) {
                root = cloneVNode(root, fallthroughAttrs);
            }
            else if (("production" !== 'production') && !accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for (let i = 0, l = allAttrs.length; i < l; i++) {
                    const key = allAttrs[i];
                    if (isOn(key)) {
                        // remove `on`, lowercase first letter to reflect event casing accurately
                        eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    }
                    else {
                        extraAttrs.push(key);
                    }
                }
                if (extraAttrs.length) {
                    warn(`Extraneous non-props attributes (` +
                        `${extraAttrs.join(', ')}) ` +
                        `were passed to component but could not be automatically inherited ` +
                        `because component renders fragment or text root nodes.`);
                }
                if (eventAttrs.length) {
                    warn(`Extraneous non-emits event listeners (` +
                        `${eventAttrs.join(', ')}) ` +
                        `were passed to component but could not be automatically inherited ` +
                        `because component renders fragment or text root nodes. ` +
                        `If the listener is intended to be a component custom event listener only, ` +
                        `declare it using the "emits" option.`);
                }
            }
        }
        // inherit scopeId
        const scopeId = vnode.scopeId;
        const treeOwnerId = parent && parent.type.__scopeId;
        const slotScopeId = treeOwnerId && treeOwnerId !== scopeId ? treeOwnerId + '-s' : null;
        if (scopeId || slotScopeId) {
            const extras = {};
            if (scopeId)
                extras[scopeId] = '';
            if (slotScopeId)
                extras[slotScopeId] = '';
            root = cloneVNode(root, extras);
        }
        // inherit directives
        if (vnode.dirs) {
            if (("production" !== 'production') && !isElementRoot(root)) {
                warn(`Runtime directive used on component with non-element root node. ` +
                    `The directives will not function as intended.`);
            }
            root.dirs = vnode.dirs;
        }
        // inherit transition data
        if (vnode.transition) {
            if (("production" !== 'production') && !isElementRoot(root)) {
                warn(`Component inside <Transition> renders non-element root node ` +
                    `that cannot be animated.`);
            }
            root.transition = vnode.transition;
        }
        if (("production" !== 'production') && setRoot) {
            setRoot(root);
        }
        else {
            result = root;
        }
    }
    catch (err) {
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    currentRenderingInstance = null;
    return result;
}
const getChildRoot = (vnode) => {
    if (vnode.type !== Fragment) {
        return [vnode, undefined];
    }
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const children = rawChildren.filter(child => {
        return !(isVNode(child) && child.type === Comment);
    });
    if (children.length !== 1) {
        return [vnode, undefined];
    }
    const childRoot = children[0];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren
        ? dynamicChildren.indexOf(childRoot)
        : null;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicIndex !== null)
            dynamicChildren[dynamicIndex] = updatedRoot;
    };
    return [normalizeVNode(childRoot), setRoot];
};
const getFallthroughAttrs = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & 6 /* COMPONENT */ ||
        vnode.shapeFlag & 1 /* ELEMENT */ ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (patchFlag > 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key]) {
                    return true;
                }
            }
        }
    }
    else if (!optimized) {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
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
        return hasPropsChanged(prevProps, nextProps);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key]) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && !suspense.isResolved) {
        if (isArray(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}

/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */
function withCtx(fn, ctx = currentRenderingInstance) {
    if (!ctx)
        return fn;
    return function renderFnWithContext() {
        const owner = currentRenderingInstance;
        setCurrentRenderingInstance(ctx);
        const res = fn.apply(null, arguments);
        setCurrentRenderingInstance(owner);
        return res;
    };
}

// SFC scoped style ID management.
let currentScopeId = null;
const scopeIdStack = [];
/**
 * @private
 */
function pushScopeId(id) {
    scopeIdStack.push((currentScopeId = id));
}
/**
 * @private
 */
function popScopeId() {
    scopeIdStack.pop();
    currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @private
 */
function withScopeId(id) {
    return ((fn) => withCtx(function () {
        pushScopeId(id);
        const res = fn.apply(this, arguments);
        popScopeId();
        return res;
    }));
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (isString(targetSelector)) {
        if (!select) {
            return null;
        }
        else {
            const target = select(targetSelector);
            return target;
        }
    }
    else {
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        const { shapeFlag, children } = n2;
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el =  createText(''));
            const mainAnchor = (n2.anchor =  createText(''));
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
            }
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (n2.dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, { r: remove, o: { remove: hostRemove } }) {
        const { shapeFlag, children, anchor } = vnode;
        hostRemove(anchor);
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                remove(children[i]);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
            }
            target._lpa =
                vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const COMPONENTS = 'components';
/**
 * @private
 */
function resolveComponent(name) {
    return resolveAsset(COMPONENTS, name) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
// implementation
function resolveAsset(type, name, warnMissing = true) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        let camelized, capitalized;
        const registry = instance[type];
        let res = registry[name] ||
            registry[(camelized = camelize(name))] ||
            registry[(capitalized = capitalize(camelized))];
        if (!res && type === COMPONENTS) {
            const self = instance.type;
            const selfName = self.displayName || self.name;
            if (selfName &&
                (selfName === name ||
                    selfName === camelized ||
                    selfName === capitalized)) {
                res = self;
            }
        }
        return res;
    }
}

const Fragment = Symbol( undefined);
const Text = Symbol( undefined);
const Comment = Symbol( undefined);
const Static = Symbol( undefined);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */);
    // save current block children on the block vnode
    vnode.dynamicChildren = currentBlock || EMPTY_ARR;
    // close block
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
    // a block is always going to be patched, so track it as a child of its
    // parent block
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
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref }) => {
    return (ref != null
        ? isArray(ref)
            ? ref
            : [currentRenderingInstance, ref]
        : null);
};
const createVNode = ( _createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        type = Comment;
    }
    if (isVNode(type)) {
        return cloneVNode(type, props, children);
    }
    // class component normalization.
    if (isFunction(type) && '__vccOpts' in type) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        if (isProxy(props) || InternalObjectKey in props) {
            props = extend({}, props);
        }
        let { class: klass, style } = props;
        if (klass && !isString(klass)) {
            props.class = normalizeClass(klass);
        }
        if (isObject(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (isProxy(style) && !isArray(style)) {
                style = extend({}, style);
            }
            props.style = normalizeStyle(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = isString(type)
        ? 1 /* ELEMENT */
        :  isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : isObject(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : isFunction(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        children: null,
        component: null,
        suspense: null,
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
    // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    if (
        !isBlockNode &&
        currentBlock &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        patchFlag !== 32 /* HYDRATE_EVENTS */ &&
        (patchFlag > 0 ||
            shapeFlag & 128 /* SUSPENSE */ ||
            shapeFlag & 64 /* TELEPORT */ ||
            shapeFlag & 4 /* STATEFUL_COMPONENT */ ||
            shapeFlag & 2 /* FUNCTIONAL_COMPONENT */)) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function cloneVNode(vnode, extraProps, children) {
    const props = extraProps
        ? vnode.props
            ? mergeProps(vnode.props, extraProps)
            : extend({}, extraProps)
        : vnode.props;
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props,
        key: props && normalizeKey(props),
        ref: extraProps && extraProps.ref ? normalizeRef(extraProps) : vnode.ref,
        scopeId: vnode.scopeId,
        children: vnode.children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to bail out of optimized mode.
        // however we don't want block nodes to de-opt their children, so if the
        // vnode is a block node, we only add the FULL_PROPS flag to it.
        patchFlag: extraProps
            ? vnode.dynamicChildren
                ? vnode.patchFlag | 16 /* FULL_PROPS */
                : -2 /* BAIL */
            : vnode.patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        el: vnode.el,
        anchor: vnode.anchor
    };
    if (children) {
        normalizeChildren(cloned, children);
    }
    return cloned;
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if (isArray(child)) {
        // fragment
        return createVNode(Fragment, null, child);
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return child.el === null ? child : cloneVNode(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if (isArray(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        // Normalize slot to plain children
        if ((shapeFlag & 1 /* ELEMENT */ || shapeFlag & 64 /* TELEPORT */) &&
            children.default) {
            normalizeChildren(vnode, children.default());
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            if (!children._ && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
        }
    }
    else if (isFunction(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
const handlersRE = /^on|^vnode/;
function mergeProps(...args) {
    const ret = extend({}, args[0]);
    for (let i = 1; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = normalizeClass([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = normalizeStyle([ret.style, toMerge.style]);
            }
            else if (handlersRE.test(key)) {
                // on*, vnode*
                const existing = ret[key];
                const incoming = toMerge[key];
                if (existing !== incoming) {
                    ret[key] = existing
                        ? [].concat(existing, toMerge[key])
                        : incoming;
                }
            }
            else {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}

function emit(instance, event, ...args) {
    const props = instance.vnode.props || EMPTY_OBJ;
    let handler = props[`on${capitalize(event)}`];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && event.startsWith('update:')) {
        event = hyphenate(event);
        handler = props[`on${capitalize(event)}`];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(options) {
    if (!options) {
        return;
    }
    else if (isArray(options)) {
        if (options._n) {
            return options._n;
        }
        const normalized = {};
        options.forEach(key => (normalized[key] = null));
        def(options, '_n', normalized);
        return normalized;
    }
    else {
        return options;
    }
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(emits, key) {
    return (isOn(key) &&
        (hasOwn((emits = normalizeEmitsOptions(emits)), key[2].toLowerCase() + key.slice(3)) ||
            hasOwn(emits, key.slice(2))));
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    setFullProps(instance, rawProps, props, attrs);
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = normalizePropsOptions(instance.type);
    if ((optimized || patchFlag > 0) && !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                const key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (hasOwn(attrs, key)) {
                        attrs[key] = value;
                    }
                    else {
                        const camelizedKey = camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value);
                    }
                }
                else {
                    attrs[key] = value;
                }
            }
        }
    }
    else {
        // full props update.
        setFullProps(instance, rawProps, props, attrs);
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                (
                // for camelCase
                !hasOwn(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps && (
                    // for camelCase
                    rawPrevProps[key] !== undefined ||
                        // for kebab-case
                        rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawProps || EMPTY_OBJ, key, undefined);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps || !hasOwn(rawProps, key)) {
                    delete attrs[key];
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    trigger(instance, "set" /* SET */, '$attrs');
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = normalizePropsOptions(instance.type);
    const emits = instance.type.emits;
    if (rawProps) {
        for (const key in rawProps) {
            const value = rawProps[key];
            // key, ref are reserved and never passed down
            if (isReservedProp(key)) {
                continue;
            }
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && hasOwn(options, (camelKey = camelize(key)))) {
                props[camelKey] = value;
            }
            else if (!emits || !isEmitListener(emits, key)) {
                // Any non-declared (either as a prop or an emitted event) props are put
                // into a separate `attrs` object for spreading. Make sure to preserve
                // original key casing
                attrs[key] = value;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key]);
        }
    }
}
function resolvePropValue(options, props, key, value) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = hasOwn(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            value =
                opt.type !== Function && isFunction(defaultValue)
                    ? defaultValue()
                    : defaultValue;
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (!hasOwn(props, key) && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === hyphenate(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp) {
    if (comp.__props) {
        return comp.__props;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if ( !isFunction(comp)) {
        const extendProps = (raw) => {
            const [props, keys] = normalizePropsOptions(raw);
            extend(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (comp.extends) {
            hasExtends = true;
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            hasExtends = true;
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__props = EMPTY_ARR);
    }
    if (isArray(raw)) {
        for (let i = 0; i < raw.length; i++) {
            const normalizedKey = camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = EMPTY_OBJ;
            }
        }
    }
    else if (raw) {
        for (const key in raw) {
            const normalizedKey = camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    isArray(opt) || isFunction(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || hasOwn(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    const normalizedEntry = [normalized, needCastKeys];
    comp.__props = normalizedEntry;
    return normalizedEntry;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
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
    }
    else if (isFunction(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    return false;
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => isArray(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
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
        }
        else if (value != null) {
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
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        if (children._ === 1) {
            instance.slots = children;
            // make compiler marker non-enumerable
            def(children, '_', 1);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        if (children._ === 1) {
            // compiled slots.
            if (
            // bail on dynamic slots (v-if, v-for, reference of scope variables)
            !(vnode.patchFlag & 1024 /* DYNAMIC_SLOTS */)) {
                // compiled AND static.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic - update slots, but skip normalization.
                extend(slots, children);
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};
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
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
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
        config: {
            isNativeTag: NO,
            devtools: true,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            isCustomElement: NO,
            errorHandler: undefined,
            warnHandler: undefined
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null)
    };
}
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !isObject(rootProps)) {
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = {
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
                if (installedPlugins.has(plugin)) ;
                else if (plugin && isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if (isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                return app;
            },
            mixin(mixin) {
                {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                    }
                }
                return app;
            },
            component(name, component) {
                if (!component) {
                    return context.components[name];
                }
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if (!directive) {
                    return context.directives[name];
                }
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    return vnode.component.proxy;
                }
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                }
            },
            provide(key, value) {
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        };
        return app;
    };
}

const prodEffectOptions = {
    scheduler: queueJob
};
const queuePostRenderEffect =  queueEffectWithSuspense
    ;
const setRef = (rawRef, oldRawRef, parent, vnode) => {
    let value;
    if (!vnode) {
        value = null;
    }
    else {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            value = vnode.component.proxy;
        }
        else {
            value = vnode.el;
        }
    }
    const [owner, ref] = rawRef;
    const oldRef = oldRawRef && oldRawRef[1];
    const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (isString(oldRef)) {
            refs[oldRef] = null;
            if (hasOwn(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if (isRef(oldRef)) {
            oldRef.value = null;
        }
    }
    if (isString(ref)) {
        refs[ref] = value;
        if (hasOwn(setupState, ref)) {
            setupState[ref] = value;
        }
    }
    else if (isRef(ref)) {
        ref.value = value;
    }
    else if (isFunction(ref)) {
        callWithErrorHandling(ref, parent, 12 /* FUNCTION_REF */, [value, refs]);
    }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, forcePatchProp: hostForcePatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
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
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ( shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentComponent, n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, scopeId, patchFlag, dirs } = vnode;
        if (vnode.el &&
            hostCloneNode !== undefined &&
            patchFlag === -1 /* HOISTED */) {
            // If a vnode has non-null el, it means it's being reused.
            // Only static vnodes can be reused, so its mounted DOM nodes should be
            // exactly the same, and we can simply do a clone here.
            el = vnode.el = hostCloneNode(vnode.el);
        }
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
            }
            // props
            if (props) {
                for (const key in props) {
                    if (!isReservedProp(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            // scopeId
            if (scopeId) {
                hostSetScopeId(el, scopeId);
            }
            const treeOwnerId = parentComponent && parentComponent.type.__scopeId;
            // vnode's own scopeId and the current patched component's scopeId is
            // different - this is a slot content node.
            if (treeOwnerId && treeOwnerId !== scopeId) {
                hostSetScopeId(el, treeOwnerId + '-s');
            }
            if (transition && !transition.persisted) {
                transition.beforeEnter(el);
            }
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            (transition && !transition.persisted) ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                transition && !transition.persisted && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev ||
                            (hostForcePatchProp && hostForcePatchProp(el, key))) {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            oldVNode.type === Fragment ||
                // - In the case of different nodes, there is going to be a replacement
                // which also requires the correct parent container
                !isSameVNodeType(oldVNode, newVNode) ||
                // - In the case of a component, it could contain anything.
                oldVNode.shapeFlag & 6 /* COMPONENT */
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
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
                if (next !== prev ||
                    (hostForcePatchProp && hostForcePatchProp(el, key))) {
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
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren } = n2;
        if (patchFlag > 0) {
            optimized = true;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        setupComponent(instance);
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if ( instance.asyncDep) {
            if (!parentSuspense) {
                return;
            }
            parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (
                instance.asyncDep &&
                !instance.asyncResolved) {
                updateComponentPreRender(instance, n2, optimized);
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect runner.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        // create reactive effect for rendering
        instance.update = effect(function componentEffect() {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, a, parent } = instance;
                const subTree = (instance.subTree = renderComponentRoot(instance));
                // beforeMount hook
                if (bm) {
                    invokeArrayFns(bm);
                }
                // onVnodeBeforeMount
                if ((vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
                }
                else {
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if ((vnodeHook = props && props.onVnodeMounted)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, initialVNode);
                    }, parentSuspense);
                }
                // activated hook for keep-alive roots.
                if (a &&
                    initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
                    queuePostRenderEffect(a, parentSuspense);
                }
                instance.isMounted = true;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if (next) {
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                const nextTree = renderComponentRoot(instance);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                next.el = vnode.el;
                // beforeUpdate hook
                if (bu) {
                    invokeArrayFns(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                // reset refs
                // only needed if previous patch had refs
                if (instance.refs !== EMPTY_OBJ) {
                    instance.refs = {};
                }
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, next, vnode);
                    }, parentSuspense);
                }
            }
        },  prodEffectOptions);
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children);
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
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
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if ( shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
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
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null && parentComponent) {
            setRef(ref, null, parentComponent, null);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        let vnodeHook;
        if ((vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if ( shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            // an unmounted teleport should always remove its children
            if (shapeFlag & 64 /* TELEPORT */) {
                vnode.type.remove(vnode, internals);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
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
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        const { bum, effects, update, subTree, um, da, isDeactivated } = instance;
        // beforeUnmount hook
        if (bum) {
            invokeArrayFns(bum);
        }
        if (effects) {
            for (let i = 0; i < effects.length; i++) {
                stop(effects[i]);
            }
        }
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            stop(update);
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        // deactivated hook
        if (da &&
            !isDeactivated &&
            instance.vnode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            queuePostRenderEffect(da, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (
            parentSuspense &&
            !parentSuspense.isResolved &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
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
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

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
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: Function,
        onEnter: Function,
        onAfterEnter: Function,
        onEnterCancelled: Function,
        // leave
        onBeforeLeave: Function,
        onLeave: Function,
        onAfterLeave: Function,
        onLeaveCancelled: Function,
        // appear
        onBeforeAppear: Function,
        onAppear: Function,
        onAfterAppear: Function,
        onAppearCancelled: Function
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = (innerChild.transition = resolveTransitionHooks(innerChild, rawProps, state, instance));
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out') {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
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
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, { appear, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled }, state, instance) {
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const hooks = {
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
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
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-top
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
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
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
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
    injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        remove(keepAliveRoot[type], hook);
    }, target);
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                pauseTracking();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                setCurrentInstance(null);
                resetTracking();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
    }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR
!isInSSRComponentSetup && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* UNMOUNTED */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
const onErrorCaptured = (hook, target = currentInstance) => {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
};

const invoke = (fn) => fn();
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    const instance = currentInstance;
    let getter;
    if (isArray(source)) {
        getter = () => source.map(s => {
            if (isRef(s)) {
                return s.value;
            }
            else if (isReactive(s)) {
                return traverse(s);
            }
            else if (isFunction(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
            }
        });
    }
    else if (isRef(source)) {
        getter = () => source.value;
    }
    else if (isReactive(source)) {
        getter = () => source;
        deep = true;
    }
    else if (isFunction(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onInvalidate]);
            };
        }
    }
    else {
        getter = NOOP;
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    const onInvalidate = (fn) => {
        cleanup = runner.options.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    let oldValue = isArray(source) ? [] : INITIAL_WATCHER_VALUE;
    const applyCb = cb
        ? () => {
            if (instance && instance.isUnmounted) {
                return;
            }
            const newValue = runner();
            if (deep || hasChanged(newValue, oldValue)) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onInvalidate
                ]);
                oldValue = newValue;
            }
        }
        : void 0;
    let scheduler;
    if (flush === 'sync') {
        scheduler = invoke;
    }
    else if (flush === 'pre') {
        scheduler = job => {
            if (!instance || instance.isMounted) {
                queueJob(job);
            }
            else {
                // with 'pre' option, the first call must happen before
                // the component is mounted so it is called synchronously.
                job();
            }
        };
    }
    else {
        scheduler = job => queuePostRenderEffect(job, instance && instance.suspense);
    }
    const runner = effect(getter, {
        lazy: true,
        // so it runs before component update effects in pre flush mode
        computed: true,
        onTrack,
        onTrigger,
        scheduler: applyCb ? () => scheduler(applyCb) : scheduler
    });
    recordInstanceBoundEffect(runner);
    // initial run
    if (applyCb) {
        if (immediate) {
            applyCb();
        }
        else {
            oldValue = runner();
        }
    }
    else {
        runner();
    }
    return () => {
        stop(runner);
        if (instance) {
            remove(instance.effects, runner);
        }
    };
}
// this.$watch
function instanceWatch(source, cb, options) {
    const publicThis = this.proxy;
    const getter = isString(source)
        ? () => publicThis[source]
        : source.bind(publicThis);
    const stop = watch(getter, cb.bind(publicThis), options);
    onBeforeUnmount(stop, this);
    return stop;
}
function traverse(value, seen = new Set()) {
    if (!isObject(value) || seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (value instanceof Map) {
        value.forEach((v, key) => {
            // to register mutation dep for existing keys
            traverse(value.get(key), seen);
        });
    }
    else if (value instanceof Set) {
        value.forEach(v => {
            traverse(v, seen);
        });
    }
    else {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function provide(key, value) {
    if (!currentInstance) ;
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        const provides = instance.provides;
        if (key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return defaultValue;
        }
    }
}
function applyOptions(instance, options, deferredData = [], deferredWatch = [], asMixin = false) {
    const { 
    // composition
    mixins, extends: extendsOptions, 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // assets
    components, directives, 
    // lifecycle
    beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeUnmount, unmounted, renderTracked, renderTriggered, errorCaptured } = options;
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    const globalMixins = instance.appContext.mixins;
    // call it only during dev
    // applyOptions is called non-as-mixin once per instance
    if (!asMixin) {
        callSyncHook('beforeCreate', options, publicThis, globalMixins);
        // global mixins are applied first
        applyMixins(instance, globalMixins, deferredData, deferredWatch);
    }
    // extending a base component...
    if (extendsOptions) {
        applyOptions(instance, extendsOptions, deferredData, deferredWatch, true);
    }
    // local mixins
    if (mixins) {
        applyMixins(instance, mixins, deferredData, deferredWatch);
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        if (isArray(injectOptions)) {
            for (let i = 0; i < injectOptions.length; i++) {
                const key = injectOptions[i];
                ctx[key] = inject(key);
            }
        }
        else {
            for (const key in injectOptions) {
                const opt = injectOptions[key];
                if (isObject(opt)) {
                    ctx[key] = inject(opt.from, opt.default);
                }
                else {
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
    if (dataOptions) {
        if (asMixin) {
            deferredData.push(dataOptions);
        }
        else {
            resolveData(instance, dataOptions, publicThis);
        }
    }
    if (!asMixin) {
        if (deferredData.length) {
            deferredData.forEach(dataFn => resolveData(instance, dataFn, publicThis));
        }
    }
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = isFunction(opt)
                ? opt.bind(publicThis, publicThis)
                : isFunction(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : NOOP;
            const set = !isFunction(opt) && isFunction(opt.set)
                ? opt.set.bind(publicThis)
                :  NOOP;
            const c = computed$1({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
        }
    }
    if (watchOptions) {
        deferredWatch.push(watchOptions);
    }
    if (!asMixin && deferredWatch.length) {
        deferredWatch.forEach(watchOptions => {
            for (const key in watchOptions) {
                createWatcher(watchOptions[key], ctx, publicThis, key);
            }
        });
    }
    if (provideOptions) {
        const provides = isFunction(provideOptions)
            ? provideOptions.call(publicThis)
            : provideOptions;
        for (const key in provides) {
            provide(key, provides[key]);
        }
    }
    // asset options
    if (components) {
        extend(instance.components, components);
    }
    if (directives) {
        extend(instance.directives, directives);
    }
    // lifecycle options
    if (!asMixin) {
        callSyncHook('created', options, publicThis, globalMixins);
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
    const baseHook = options.extends && options.extends[name];
    if (baseHook) {
        baseHook.call(ctx);
    }
    const mixins = options.mixins;
    if (mixins) {
        callHookFromMixins(name, mixins, ctx);
    }
    const selfHook = options[name];
    if (selfHook) {
        selfHook.call(ctx);
    }
}
function callHookFromMixins(name, mixins, ctx) {
    for (let i = 0; i < mixins.length; i++) {
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
    if (!isObject(data)) ;
    else if (instance.data === EMPTY_OBJ) {
        instance.data = reactive(data);
    }
    else {
        // existing data: this is a mixin or extends.
        extend(instance.data, data);
    }
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = () => publicThis[key];
    if (isString(raw)) {
        const handler = ctx[raw];
        if (isFunction(handler)) {
            watch(getter, handler);
        }
    }
    else if (isFunction(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if (isObject(raw)) {
        if (isArray(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            watch(getter, raw.handler.bind(publicThis), raw);
        }
    }
}
function resolveMergedOptions(instance) {
    const raw = instance.type;
    const { __merged, mixins, extends: extendsOptions } = raw;
    if (__merged)
        return __merged;
    const globalMixins = instance.appContext.mixins;
    if (!globalMixins.length && !mixins && !extendsOptions)
        return raw;
    const options = {};
    globalMixins.forEach(m => mergeOptions(options, m, instance));
    extendsOptions && mergeOptions(options, extendsOptions, instance);
    mixins && mixins.forEach(m => mergeOptions(options, m, instance));
    mergeOptions(options, raw, instance);
    return (raw.__merged = options);
}
function mergeOptions(to, from, instance) {
    const strats = instance.appContext.config.optionMergeStrategies;
    for (const key in from) {
        if (strats && hasOwn(strats, key)) {
            to[key] = strats[key](to[key], from[key], instance.proxy, key);
        }
        else if (!hasOwn(to, key)) {
            to[key] = from[key];
        }
    }
}

const publicPropertiesMap = extend(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => ( i.props),
    $attrs: i => ( i.attrs),
    $slots: i => ( i.slots),
    $refs: i => ( i.refs),
    $parent: i => i.parent && i.parent.proxy,
    $root: i => i.root && i.root.proxy,
    $emit: i => i.emit,
    $options: i => ( resolveMergedOptions(i) ),
    $forceUpdate: i => () => queueJob(i.update),
    $nextTick: () => nextTick,
    $watch:  i => instanceWatch.bind(i) 
});
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // let @vue/reatvitiy know it should never observe Vue public instances.
        if (key === "__v_skip" /* SKIP */) {
            return true;
        }
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 0 /* SETUP */:
                        return setupState[key];
                    case 1 /* DATA */:
                        return data[key];
                    case 3 /* CONTEXT */:
                        return ctx[key];
                    case 2 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
                accessCache[key] = 0 /* SETUP */;
                return setupState[key];
            }
            else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                accessCache[key] = 1 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = normalizePropsOptions(type)[0]) &&
                hasOwn(normalizedProps, key)) {
                accessCache[key] = 2 /* PROPS */;
                return props[key];
            }
            else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                accessCache[key] = 3 /* CONTEXT */;
                return ctx[key];
            }
            else {
                accessCache[key] = 4 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                track(instance, "get" /* GET */, key);
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 3 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            hasOwn(globalProperties, key))) {
            return globalProperties[key];
        }
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
            setupState[key] = value;
        }
        else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            data[key] = value;
        }
        else if (key in instance.props) {
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            return false;
        }
        else {
            {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, type, appContext } }, key) {
        let normalizedProps;
        return (accessCache[key] !== undefined ||
            (data !== EMPTY_OBJ && hasOwn(data, key)) ||
            (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) ||
            ((normalizedProps = normalizePropsOptions(type)[0]) &&
                hasOwn(normalizedProps, key)) ||
            hasOwn(ctx, key) ||
            hasOwn(publicPropertiesMap, key) ||
            hasOwn(appContext.config.globalProperties, key));
    }
};
const RuntimeCompiledPublicInstanceProxyHandlers = extend({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !isGloballyWhitelisted(key);
        return has;
    }
});

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        parent,
        appContext,
        type: vnode.type,
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
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        // per-instance asset storage (mutable during options resolution)
        components: Object.create(appContext.components),
        directives: Object.create(appContext.directives),
        // suspense related
        suspense,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
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
        ec: null,
        emit: null // to be set immediately
    };
    {
        instance.ctx = { _: instance };
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
    const { props, children, shapeFlag } = instance.vnode;
    const isStateful = shapeFlag & 4 /* STATEFUL_COMPONENT */;
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    // 0. create render proxy property access cache
    instance.accessCache = {};
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        currentInstance = instance;
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [ instance.props, setupContext]);
        resetTracking();
        currentInstance = null;
        if (isPromise(setupResult)) {
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult.then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
            }
        }
        else {
            handleSetupResult(instance, setupResult);
        }
    }
    else {
        finishComponentSetup(instance);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
        // setup returned an inline render function
        instance.render = setupResult;
    }
    else if (isObject(setupResult)) {
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        instance.setupState = reactive(setupResult);
    }
    finishComponentSetup(instance);
}
function finishComponentSetup(instance, isSSR) {
    const Component = instance.type;
    // template / render function normalization
    if (!instance.render) {
        instance.render = (Component.render || NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (instance.render._rc) {
            instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    }
    // support for 2.x options
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
// record effects created during a component's setup() so that they can be
// stopped when the component unmounts
function recordInstanceBoundEffect(effect) {
    if (currentInstance) {
        (currentInstance.effects || (currentInstance.effects = [])).push(effect);
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function formatComponentName(instance, Component, isRoot = false) {
    let name = isFunction(Component)
        ? Component.displayName || Component.name
        : Component.name;
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.vue$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on local resolution
        const registry = instance.parent.components;
        for (const key in registry) {
            if (registry[key] === Component) {
                name = key;
                break;
            }
        }
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}

function computed$1(getterOrOptions) {
    const c = computed(getterOrOptions);
    recordInstanceBoundEffect(c.effect);
    return c;
}

// implementation, close to no-op
function defineComponent(options) {
    return isFunction(options) ? { setup: options } : options;
}

// Actual implementation
function h(type, propsOrChildren, children) {
    if (arguments.length === 2) {
        if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

/**
 * Actual implementation
 */
function renderList(source, renderItem) {
    let ret;
    if (isArray(source) || isString(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i);
        }
    }
    else if (typeof source === 'number') {
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i);
        }
    }
    else if (isObject(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, renderItem);
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i);
            }
        }
    }
    else {
        ret = [];
    }
    return ret;
}

/**
 * Compiler runtime helper for rendering <slot/>
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback) {
    let slot = slots[name];
    return (openBlock(),
        createBlock(Fragment, { key: props.key }, slot ? slot(props) : fallback ? fallback() : [], slots._ ? 64 /* STABLE_FRAGMENT */ : -2 /* BAIL */));
}

// Core API ------------------------------------------------------------------
const version = "3.0.0-beta.18";
/**
 * @private
 */
const _toDisplayString = toDisplayString;
/**
 * @private
 */
const _camelize = camelize;

const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
let tempContainer;
let tempSVGContainer;
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is) => isSVG
        ? doc.createElementNS(svgNS, tag)
        : doc.createElement(tag, is ? { is } : undefined),
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        return el.cloneNode(true);
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG) {
        const temp = isSVG
            ? tempSVGContainer ||
                (tempSVGContainer = doc.createElementNS(svgNS, 'svg'))
            : tempContainer || (tempContainer = doc.createElement('div'));
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

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    if (value == null) {
        value = '';
    }
    if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        // directly setting className should be faster than setAttribute in theory
        // if this is an element during a transition, take the temporary transition
        // classes into account.
        const transitionClasses = el._vtc;
        if (transitionClasses) {
            value = (value
                ? [value, ...transitionClasses]
                : [...transitionClasses]).join(' ');
        }
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
        el.removeAttribute('style');
    }
    else if (isString(next)) {
        if (prev !== next) {
            style.cssText = next;
        }
    }
    else {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !isString(prev)) {
            for (const key in prev) {
                if (!next[key]) {
                    setStyle(style, key, '');
                }
            }
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (name.startsWith('--')) {
        // custom property definition
        style.setProperty(name, val);
    }
    else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
            // !important
            style.setProperty(hyphenate(prefixed), val.replace(importantRE, ''), 'important');
        }
        else {
            style[prefixed] = val;
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = _camelize(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = isSpecialBooleanAttr(key);
        if (value == null || (isBoolean && value === false)) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is reponsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        el.value = value == null ? '' : value;
        return;
    }
    if (value === '' && typeof el[key] === 'boolean') {
        // e.g. <select multiple> compiles to { multiple: '' }
        el[key] = true;
    }
    else if (value == null && typeof el[key] === 'string') {
        // e.g. <div :id="null">
        el[key] = '';
    }
    else {
        // some properties perform value validation and throw
        try {
            el[key] = value;
        }
        catch (e) {
        }
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (typeof document !== 'undefined' &&
    _getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = () => performance.now();
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p$1 = Promise.resolve();
const reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p$1.then(reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const name = rawName.slice(2).toLowerCase();
    const prevOptions = prevValue && 'options' in prevValue && prevValue.options;
    const nextOptions = nextValue && 'options' in nextValue && nextValue.options;
    const invoker = prevValue && prevValue.invoker;
    const value = nextValue && 'handler' in nextValue ? nextValue.handler : nextValue;
    if (prevOptions || nextOptions) {
        const prev = prevOptions || EMPTY_OBJ;
        const next = nextOptions || EMPTY_OBJ;
        if (prev.capture !== next.capture ||
            prev.passive !== next.passive ||
            prev.once !== next.once) {
            if (invoker) {
                removeEventListener(el, name, invoker, prev);
            }
            if (nextValue && value) {
                const invoker = createInvoker(value, instance);
                nextValue.invoker = invoker;
                addEventListener(el, name, invoker, next);
            }
            return;
        }
    }
    if (nextValue && value) {
        if (invoker) {
            prevValue.invoker = null;
            invoker.value = value;
            nextValue.invoker = invoker;
            invoker.lastUpdated = getNow();
        }
        else {
            addEventListener(el, name, createInvoker(value, instance), nextOptions || void 0);
        }
    }
    else if (invoker) {
        removeEventListener(el, name, invoker, prevOptions || void 0);
    }
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (timeStamp >= invoker.lastUpdated - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    initialValue.invoker = invoker;
    invoker.lastUpdated = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === 'value';
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
        // special
        case 'class':
            patchClass(el, nextValue, isSVG);
            break;
        case 'style':
            patchStyle(el, prevValue, nextValue);
            break;
        default:
            if (isOn(key)) {
                // ignore v-model listeners
                if (!key.startsWith('onUpdate:')) {
                    patchEvent(el, key, prevValue, nextValue, parentComponent);
                }
            }
            else if (
            // spellcheck and draggable are numerated attrs, however their
            // corresponding DOM properties are actually booleans - this leads to
            // setting it with a string "false" value leading it to be coerced to
            // `true`, so we need to always treat them as attributes.
            // Note that `contentEditable` doesn't have this problem: its DOM
            // property is also enumerated string values.
            key !== 'spellcheck' &&
                key !== 'draggable' &&
                (isSVG
                    ? // most keys must be set as attribute on svg elements to work
                        // ...except innerHTML
                        key === 'innerHTML' ||
                            // or native onclick with function values
                            (key in el && nativeOnRE.test(key) && isFunction(nextValue))
                    : // for normal html elements, set as a property if it exists
                        key in el &&
                            // except native onclick with string values
                            !(nativeOnRE.test(key) && isString(nextValue)))) {
                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
            }
            else {
                // special case for <input v-model type="checkbox"> with
                // :true-value & :false-value
                // store value as dom properties since non-string values will be
                // stringified.
                if (key === 'true-value') {
                    el._trueValue = nextValue;
                }
                else if (key === 'false-value') {
                    el._falseValue = nextValue;
                }
                patchAttr(el, key, nextValue, isSVG);
            }
            break;
    }
};

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
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
const TransitionPropsValidators = (Transition.props = extend({}, BaseTransition.props, DOMTransitionPropsValidators));
function resolveTransitionProps(rawProps) {
    let { name = 'v', type, css = true, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
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
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
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
            const resolve = () => finishEnter(el, isAppear, done);
            hook && hook(el, resolve);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!(hook && hook.length > 1)) {
                    if (enterDuration) {
                        setTimeout(resolve, enterDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, resolve);
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
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveActiveClass);
            addTransitionClass(el, leaveFromClass);
            nextFrame(() => {
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!(onLeave && onLeave.length > 1)) {
                    if (leaveDuration) {
                        setTimeout(resolve, leaveDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, resolve);
                    }
                }
            });
            onLeave && onLeave(el, resolve);
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
    }
    else if (isObject(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = toNumber(val);
    return res;
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
function whenTransitionEnds(el, expectedType, cb) {
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return cb();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        cb();
    };
    const onEnd = (e) => {
        if (e.target === el) {
            if (++ended >= propCount) {
                end();
            }
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
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
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

function toRaw$1(observed) {
    return ((observed && toRaw$1(observed["__v_raw" /* RAW */])) || observed);
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: extend({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = toRaw$1(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            const tag = rawProps.tag || Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                }
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return createVNode(tag, null, children);
        };
    }
};
// remove mode props as TransitionGroup doesn't support it
delete TransitionGroupImpl.props.mode;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
// this is put in a dedicated function to avoid the line from being treeshaken
function forceReflow() {
    return document.body.offsetHeight;
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1
        ? root
        : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const rendererOptions = extend({ patchProp, forcePatchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container);
        container.removeAttribute('v-cloak');
        return proxy;
    };
    return app;
});
function normalizeContainer(container) {
    if (isString(container)) {
        const res = document.querySelector(container);
        return res;
    }
    return container;
}

/*!
  * vue-router v4.0.0-alpha.14
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const PolySymbol = (name) => 
// vr = vue router
hasSymbol
    ? Symbol( name)
    : ( '_vr_') + name;
// rvlm = Router View Location Matched
const matchedRouteKey = PolySymbol( 'rvlm');
// rvd = Router View Depth
const viewDepthKey = PolySymbol( 'rvd');
// r = router
const routerKey = PolySymbol( 'r');
// rt = route location
const routeLocationKey = PolySymbol( 'rl');

const isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
    return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
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
let noop = () => { };

const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */
function parseURL(parseQuery, location, currentLocation = '/') {
    let path, query = {}, searchString = '', hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    const searchPos = location.indexOf('?');
    const hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
        path = location.slice(0, searchPos);
        searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location.slice(0, hashPos);
        // keep the # character
        hash = location.slice(hashPos, location.length);
    }
    // no search and no query
    path = path != null ? path : location;
    // empty path means a relative query or hash `?foo=f`, `#thing`
    if (!path) {
        path = currentLocation + path;
    }
    else if (path[0] !== '/') {
        // relative to current location. Currently we only support simple relative
        // but no `..`, `.`, or complex like `../.././..`. We will always leave the
        // leading slash so we can safely append path
        path = currentLocation.replace(/[^\/]*$/, '') + path;
    }
    return {
        fullPath: path + (searchString && '?') + searchString + hash,
        path,
        query,
        hash,
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
function stringifyURL(stringifyQuery, location) {
    let query = location.query ? stringifyQuery(location.query) : '';
    return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || pathname.toLowerCase().indexOf(base.toLowerCase()))
        return pathname;
    return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a first {@link RouteLocation}
 * @param b second {@link RouteLocation}
 */
function isSameRouteLocation(stringifyQuery, a, b) {
    let aLastIndex = a.matched.length - 1;
    let bLastIndex = b.matched.length - 1;
    return (aLastIndex > -1 &&
        aLastIndex === bLastIndex &&
        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
        isSameRouteLocationParams(a.params, b.params) &&
        stringifyQuery(a.query) === stringifyQuery(b.query) &&
        a.hash === b.hash);
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a first {@link RouteRecord}
 * @param b second {@link RouteRecord}
 */
function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
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
    return Array.isArray(a)
        ? isEquivalentArray(a, b)
        : Array.isArray(b)
            ? isEquivalentArray(b, a)
            : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a array of values
 * @param b array of values or a single value
 */
function isEquivalentArray(a, b) {
    return Array.isArray(b)
        ? a.length === b.length && a.every((value, i) => value === b[i])
        : a.length === 1 && a[0] === b;
}

var NavigationType;
(function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */
function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector('base');
            base = (baseEl && baseEl.getAttribute('href')) || '/';
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, '');
        }
        else {
            base = '/';
        }
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#')
        base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
    return base.replace(BEFORE_HASH_RE, '#') + location;
}

function warn$1(msg, ...args) {
    console.warn('[Vue Router warn]: ' + msg, ...args);
}

function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0),
    };
}
const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset,
});
function scrollToPosition(position) {
    let scrollToOptions;
    if ('el' in position) {
        let positionEl = position.el;
        const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
        const el = typeof positionEl === 'string'
            ? isIdSelector
                ? document.getElementById(positionEl.slice(1))
                : document.querySelector(positionEl)
            : positionEl;
        if (!el) {
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    }
    else {
        scrollToOptions = position;
    }
    if ('scrollBehavior' in document.documentElement.style)
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
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }

let createBaseLocation = () => location.protocol + '//' + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param location
 */
function createCurrentLocation(base, location) {
    const { pathname, search, hash } = location;
    // allows hash based url
    const hashPos = base.indexOf('#');
    if (hashPos > -1) {
        // prepend the starting slash to hash so the url starts with /#
        let pathFromHash = hash.slice(1);
        if (pathFromHash[0] !== '/')
            pathFromHash = '/' + pathFromHash;
        return stripBase(pathFromHash, '');
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, location, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state, }) => {
        const to = createCurrentLocation(base, window.location);
        const from = location.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            location.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        }
        else {
            replace(to);
        }
        // console.log({ deltaFromCurrent })
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach(listener => {
            listener(location.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta
                    ? delta > 0
                        ? NavigationDirection.forward
                        : NavigationDirection.back
                    : NavigationDirection.unknown,
            });
        });
    };
    function pauseListeners() {
        pauseState = location.value;
    }
    function listen(callback) {
        // setup the listener and prepare teardown callbacks
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
        const { history } = window;
        if (!history.state)
            return;
        history.replaceState(assign({}, history.state, { scroll: computeScrollPosition() }), '');
    }
    function destroy() {
        for (const teardown of teardowns)
            teardown();
        teardowns = [];
        window.removeEventListener('popstate', popStateHandler);
        window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // setup the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    window.addEventListener('beforeunload', beforeUnloadListener);
    return {
        pauseListeners,
        listen,
        destroy,
    };
}
/**
 * Creates a state object
 */
function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null,
    };
}
function useHistoryStateNavigation(base) {
    const { history } = window;
    // private variables
    let location = {
        value: createCurrentLocation(base, window.location),
    };
    let historyState = { value: history.state };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) {
        changeLocation(location.value, {
            back: null,
            current: location.value,
            forward: null,
            // the length is off by one, we need to decrease it
            position: history.length - 1,
            replaced: true,
            // don't add a scroll as the user may have an anchor and we want
            // scrollBehavior to be triggered without a saved position
            scroll: null,
        }, true);
    }
    function changeLocation(to, state, replace) {
        const url = createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
            historyState.value = state;
        }
        catch (err) {
            warn$1('Error with push/replace State', err);
            // Force the navigation, this also resets the call count
            window.location[replace ? 'replace' : 'assign'](url);
        }
    }
    function replace(to, data) {
        const state = assign({}, history.state, buildState(historyState.value.back, 
        // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, { position: historyState.value.position });
        changeLocation(to, state, true);
        location.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = assign({}, history.state, {
            forward: to,
            scroll: computeScrollPosition(),
        });
        changeLocation(currentState.current, currentState, true);
        const state = assign({}, buildState(location.value, to, null), {
            position: currentState.position + 1,
        }, data);
        changeLocation(to, state, false);
        location.value = to;
    }
    return {
        location,
        state: historyState,
        push,
        replace,
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
        // it's overridden right after
        location: '',
        base,
        go,
        createHref: createHref.bind(null, base),
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, 'location', {
        get: () => historyNavigation.location.value,
    });
    Object.defineProperty(routerHistory, 'state', {
        get: () => historyNavigation.state.value,
    });
    return routerHistory;
}

/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
    return encodeURI('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query keys and values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeQueryProperty(text) {
    return commonEncode(text)
        .replace(HASH_RE, '%23')
        .replace(AMPERSAND_RE, '%26')
        .replace(EQUAL_RE, '%3D')
        .replace(ENC_BACKTICK_RE, '`')
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeParam(text) {
    return encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text) {
    try {
        return decodeURIComponent('' + text);
    }
    catch (err) {
    }
    return '' + text;
}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?')
        return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
        let [key, rawValue] = searchParams[i].split('=');
        key = decode(key);
        // avoid decoding null
        let value = rawValue == null ? null : decode(rawValue);
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!Array.isArray(currentValue)) {
                currentValue = query[key] = [currentValue];
            }
            currentValue.push(value);
        }
        else {
            query[key] = value;
        }
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
    let search = '';
    for (let key in query) {
        if (search.length)
            search += '&';
        const value = query[key];
        key = encodeQueryProperty(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined)
                search += key;
            continue;
        }
        // keep null values
        let values = Array.isArray(value)
            ? value.map(v => v && encodeQueryProperty(v))
            : [value && encodeQueryProperty(value)];
        for (let i = 0; i < values.length; i++) {
            // only append & with i > 0
            search += (i ? '&' : '') + key;
            if (values[i] != null)
                search += ('=' + values[i]);
        }
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
function normalizeQuery(query) {
    const normalizedQuery = {};
    for (let key in query) {
        let value = query[key];
        if (value !== undefined) {
            normalizedQuery[key] = Array.isArray(value)
                ? value.map(v => (v == null ? null : '' + v))
                : value == null
                    ? value
                    : '' + value;
        }
    }
    return normalizedQuery;
}

function isRouteLocation(route) {
    return typeof route === 'string' || (route && typeof route === 'object');
}
function isRouteName(name) {
    return typeof name === 'string' || typeof name === 'symbol';
}

const START_LOCATION_NORMALIZED = {
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined,
};

const NavigationFailureSymbol = PolySymbol( 'nf');
var NavigationFailureType;
(function (NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
    {
        return assign(new Error(), {
            type,
            [NavigationFailureSymbol]: true,
        }, params);
    }
}
function isNavigationFailure(error, type) {
    return (error instanceof Error &&
        NavigationFailureSymbol in error &&
        (type == null || !!(error.type & type)));
}

// default pattern for a param: non greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true,
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    let score = [];
    // the regexp as a string
    let pattern = options.start ? '^' : '';
    // extracted keys
    const keys = [];
    for (const segment of segments) {
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [90 /* Root */];
        // allow trailing slash
        if (options.strict && !segment.length)
            pattern += '/';
        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub segment /:a-other-:b
            let subSegmentScore = 40 /* Segment */ +
                (options.sensitive ? 0.25 /* BonusCaseSensitive */ : 0);
            if (token.type === 0 /* Static */) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* Static */;
            }
            else if (token.type === 1 /* Param */) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional,
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* BonusCustomRegExp */;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    }
                    catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                            err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    subPattern = optional ? `(?:/${subPattern})` : '/' + subPattern;
                if (optional)
                    subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* Dynamic */;
                if (optional)
                    subSegmentScore += -8 /* BonusOptional */;
                if (repeatable)
                    subSegmentScore += -20 /* BonusRepeatable */;
                if (re === '.*')
                    subSegmentScore += -50 /* BonusWildcard */;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* BonusStrict */;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict)
        pattern += '/?';
    if (options.end)
        pattern += '$';
    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
    else if (options.strict)
        pattern += '(?:/|$)';
    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match)
            return null;
        for (let i = 1; i < match.length; i++) {
            const value = match[i] || '';
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split('/') : value;
        }
        return params;
    }
    function stringify(params) {
        let path = '';
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments) {
            if (!avoidDuplicatedSlash || path[path.length - 1] !== '/')
                path += '/';
            avoidDuplicatedSlash = false;
            for (const token of segment) {
                if (token.type === 0 /* Static */) {
                    path += token.value;
                }
                else if (token.type === 1 /* Param */) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : '';
                    if (Array.isArray(param) && !repeatable)
                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    const text = Array.isArray(param) ? param.join('/') : param;
                    if (!text) {
                        // do not append a slash on the next iteration
                        if (optional)
                            avoidDuplicatedSlash = true;
                        else
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
        stringify,
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff)
            return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) {
        return a.length === 1 && a[0] === 40 /* Static */ + 40 /* Segment */
            ? -1
            : 1;
    }
    else if (a.length > b.length) {
        return b.length === 1 && b[0] === 40 /* Static */ + 40 /* Segment */
            ? 1
            : -1;
    }
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */
function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp)
            return comp;
        i++;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
    // this is the ternary version
    // return aScore.length < bScore.length
    //   ? 1
    //   : aScore.length > bScore.length
    //   ? -1
    //   : 0
}

const ROOT_TOKEN = {
    type: 0 /* Static */,
    value: '',
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path)
        return [[]];
    if (path === '/')
        return [[ROOT_TOKEN]];
    // remove the leading slash
    if (path[0] !== '/')
        throw new Error('A non-empty path must start with "/"');
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* Static */;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment)
            tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = '';
    // custom regexp for a param
    let customRe = '';
    function consumeBuffer() {
        if (!buffer)
            return;
        if (state === 0 /* Static */) {
            segment.push({
                type: 0 /* Static */,
                value: buffer,
            });
        }
        else if (state === 1 /* Param */ ||
            state === 2 /* ParamRegExp */ ||
            state === 3 /* ParamRegExpEnd */) {
            if (segment.length > 1 && (char === '*' || char === '+'))
                crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* Param */,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?',
            });
        }
        else {
            crash('Invalid state to consume buffer');
        }
        buffer = '';
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while (i < path.length) {
        char = path[i++];
        if (char === '\\' && state !== 2 /* ParamRegExp */) {
            previousState = state;
            state = 4 /* EscapeNext */;
            continue;
        }
        switch (state) {
            case 0 /* Static */:
                if (char === '/') {
                    if (buffer) {
                        consumeBuffer();
                    }
                    finalizeSegment();
                }
                else if (char === ':') {
                    consumeBuffer();
                    state = 1 /* Param */;
                }
                else {
                    addCharToBuffer();
                }
                break;
            case 4 /* EscapeNext */:
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* Param */:
                if (char === '(') {
                    state = 2 /* ParamRegExp */;
                    customRe = '';
                }
                else if (VALID_PARAM_RE.test(char)) {
                    addCharToBuffer();
                }
                else {
                    consumeBuffer();
                    state = 0 /* Static */;
                    // go back one character if we were not modifying
                    if (char !== '*' && char !== '?' && char !== '+')
                        i--;
                }
                break;
            case 2 /* ParamRegExp */:
                if (char === ')') {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == '\\')
                        customRe = customRe.slice(0, -1) + char;
                    else
                        state = 3 /* ParamRegExpEnd */;
                }
                else {
                    customRe += char;
                }
                break;
            case 3 /* ParamRegExpEnd */:
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* Static */;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+')
                    i--;
                break;
            default:
                crash('Unknown state');
                break;
        }
    }
    if (state === 2 /* ParamRegExp */)
        crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: [],
    });
    if (parent) {
        // both are aliases or both are not aliases
        // we don't want to mix them because the order is used when
        // passing originalRecord in Matcher.addRoute
        if (!matcher.record.aliasOf === !parent.record.aliasOf)
            parent.children.push(matcher);
    }
    return matcher;
}

function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions$1({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        let isRootAdd = !originalRecord;
        let mainNormalizedRecord = normalizeRouteRecord(record);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions$1(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord,
        ];
        if ('alias' in record) {
            const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
            for (const alias of aliases) {
                normalizedRecords.push(assign({}, mainNormalizedRecord, {
                    // this allows us to hold a copy of the `components` option
                    // so that async components cache is hold on the original record
                    components: originalRecord
                        ? originalRecord.record.components
                        : mainNormalizedRecord.components,
                    path: alias,
                    // we might be the child of an alias
                    aliasOf: originalRecord
                        ? originalRecord.record
                        : mainNormalizedRecord,
                }));
            }
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords) {
            let { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== '/') {
                let parentPath = parent.record.path;
                let connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path =
                    parent.record.path + (path && connectingSlash + path);
            }
            // create the object before hand so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            // if we are an alias we must tell the original record that we exist
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
            }
            else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher)
                    originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher))
                    removeRoute(record.name);
            }
            if ('children' in mainNormalizedRecord) {
                let children = mainNormalizedRecord.children;
                for (let i = 0; i < children.length; i++) {
                    addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                }
            }
            // if there was no original record, then the first one was not an alias and all
            // other alias (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            insertMatcher(matcher);
        }
        return originalMatcher
            ? () => {
                // since other matchers are aliases, they should be removed by the original matcher
                removeRoute(originalMatcher);
            }
            : noop;
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
        }
        else {
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
        // console.log('i is', { i })
        while (i < matchers.length &&
            comparePathParserScore(matcher, matchers[i]) >= 0)
            i++;
        // console.log('END i is', { i })
        // while (i < matchers.length && matcher.score <= matchers[i].score) i++
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher))
            matcherMap.set(matcher.record.name, matcher);
    }
    /**
     * Resolves a location. Gives access to the route record that corresponds to the actual path as well as filling the corresponding params objects
     *
     * @param location - MatcherLocationRaw to resolve to a url
     * @param currentLocation - MatcherLocation of the current location
     */
    function resolve(location, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ('name' in location && location.name) {
            matcher = matcherMap.get(location.name);
            if (!matcher)
                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                    location,
                });
            name = matcher.record.name;
            params = assign(
            // paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, matcher.keys.map(k => k.name)), location.params);
            // throws if cannot be stringified
            path = matcher.stringify(params);
        }
        else if ('path' in location) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location.path;
            matcher = matchers.find(m => m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // TODO: dev warning of unused params if provided
                params = matcher.parse(path);
                name = matcher.record.name;
            }
            // location is a relative path
        }
        else {
            // match by name or path of current route
            matcher = currentLocation.name
                ? matcherMap.get(currentLocation.name)
                : matchers.find(m => m.re.test(currentLocation.path));
            if (!matcher)
                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
                    location,
                    currentLocation,
                });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = assign({}, currentLocation.params, location.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while (parentMatcher) {
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched),
        };
    }
    // add initial routes
    routes.forEach(route => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
    let newParams = {};
    for (let key of keys) {
        if (key in params)
            newParams[key] = params[key];
    }
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
    return {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: [],
        updateGuards: [],
        enterCallbacks: [],
        components: 'components' in record
            ? record.components || {}
            : { default: record.component },
    };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */
function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records but we can set false directly
    const props = record.props || false;
    if ('component' in record) {
        propsObject.default = props;
    }
    else {
        // NOTE: we could also allow a function to be applied to every component.
        // Would need user feedback for use cases
        for (let name in record.components)
            propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */
function isAliasRecord(record) {
    while (record) {
        if (record.record.aliasOf)
            return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched array of matched records
 */
function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions$1(defaults, partialOptions) {
    let options = {};
    for (let key in defaults) {
        options[key] =
            key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
}

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return () => {
            const i = handlers.indexOf(handler);
            if (i > -1)
                handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: () => handlers,
        reset,
    };
}
function guardToPromiseFn(guard, to, from, instance, record) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record && record.enterCallbacks;
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false)
                reject(createRouterError(2 /* NAVIGATION_ABORTED */, {
                    from,
                    to,
                }));
            else if (valid instanceof Error) {
                reject(valid);
            }
            else if (isRouteLocation(valid)) {
                reject(createRouterError(1 /* NAVIGATION_GUARD_REDIRECT */, {
                    from: to,
                    to: valid,
                }));
            }
            else {
                if (record &&
                    record.enterCallbacks === enterCallbackArray &&
                    typeof valid === 'function')
                    enterCallbackArray.push(valid);
                resolve();
            }
        };
        // wrapping with Promise.resolve allows it to work with both async and sync guards
        Promise.resolve(guard.call(instance, to, from,  next)).catch(err => reject(err));
    });
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
        for (const name in record.components) {
            let rawComponent = record.components[name];
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                let options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard &&
                    guards.push(guardToPromiseFn(guard, to, from, record.instances[name], record));
            }
            else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                {
                    componentPromise = componentPromise.catch(() => null);
                }
                guards.push(() => componentPromise.then(resolved => {
                    if (!resolved)
                        return Promise.reject(new Error(`Couldn't resolve component "${name}" for the following record with path "${record.path}"`));
                    const resolvedComponent = isESModule(resolved)
                        ? resolved.default
                        : resolved;
                    // replace the function with the resolved component
                    record.components[name] = resolvedComponent;
                    // @ts-ignore: the options types are not propagated to Component
                    const guard = resolvedComponent[guardType];
                    return (guard &&
                        guardToPromiseFn(guard, to, from, record.instances[name], record)());
                }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @param component
 */
function isRouteComponent(component) {
    return (typeof component === 'object' ||
        'displayName' in component ||
        'props' in component ||
        '__vccOpts' in component);
}

// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = inject(routerKey);
    const currentRoute = inject(routeLocationKey);
    const route = computed$1(() => router.resolve(unref(props.to)));
    const activeRecordIndex = computed$1(() => {
        let { matched } = route.value;
        let { length } = matched;
        const routeMatched = matched[length - 1];
        let currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length)
            return -1;
        let index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1)
            return index;
        // possible parent record
        let parentRecordPath = getOriginalPath(matched[length - 2]);
        return (
        // we are dealing with nested routes
        length > 1 &&
            // if the have the same path, this link is referring to the empty child
            // are we currently are on a different child of the same parent
            getOriginalPath(routeMatched) === parentRecordPath &&
            // avoid comparing the child with its parent
            currentMatched[currentMatched.length - 1].path !== parentRecordPath
            ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
            : index);
    });
    const isActive = computed$1(() => activeRecordIndex.value > -1 &&
        includesParams(currentRoute.params, route.value.params));
    const isExactActive = computed$1(() => activeRecordIndex.value > -1 &&
        activeRecordIndex.value === currentRoute.matched.length - 1 &&
        isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e))
            return router[unref(props.replace) ? 'replace' : 'push'](unref(props.to));
        return Promise.resolve();
    }
    return {
        route,
        href: computed$1(() => route.value.href),
        isActive,
        isExactActive,
        navigate,
    };
}
const RouterLinkImpl = defineComponent({
    name: 'RouterLink',
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
    },
    setup(props, { slots, attrs }) {
        const link = reactive(useLink(props));
        const { options } = inject(routerKey);
        const elClass = computed$1(() => ({
            [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
            // [getLinkClass(
            //   props.inactiveClass,
            //   options.linkInactiveClass,
            //   'router-link-inactive'
            // )]: !link.isExactActive,
            [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
        }));
        return () => {
            const children = slots.default && slots.default(link);
            return props.custom
                ? children
                : h('a', assign({
                    'aria-current': link.isExactActive ? 'page' : null,
                    onClick: link.navigate,
                    href: link.href,
                }, attrs, {
                    class: elClass.value,
                }), children);
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented)
        return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0)
        return;
    // don't redirect if `target="_blank"`
    // @ts-ignore getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-ignore getAttribute exists
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target))
            return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault)
        e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for (let key in inner) {
        let innerValue = inner[key];
        let outerValue = outer[key];
        if (typeof innerValue === 'string') {
            if (innerValue !== outerValue)
                return false;
        }
        else {
            if (!Array.isArray(outerValue) ||
                outerValue.length !== innerValue.length ||
                innerValue.some((value, i) => value !== outerValue[i]))
                return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */
function getOriginalPath(record) {
    return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */
let getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
    ? propClass
    : globalClass != null
        ? globalClass
        : defaultClass;

const RouterViewImpl = defineComponent({
    name: 'RouterView',
    props: {
        name: {
            type: String,
            default: 'default',
        },
        route: Object,
    },
    setup(props, { attrs, slots }) {
        const route = inject(routeLocationKey);
        const depth = inject(viewDepthKey, 0);
        const matchedRouteRef = computed$1(() => (props.route || route).matched[depth]);
        provide(viewDepthKey, depth + 1);
        provide(matchedRouteKey, matchedRouteRef);
        const viewRef = ref();
        return () => {
            const matchedRoute = matchedRouteRef.value;
            if (!matchedRoute) {
                return null;
            }
            const ViewComponent = matchedRoute.components[props.name];
            if (!ViewComponent) {
                return null;
            }
            // props from route configration
            const routePropsOption = matchedRoute.props[props.name];
            const routeProps = routePropsOption
                ? routePropsOption === true
                    ? route.params
                    : typeof routePropsOption === 'function'
                        ? routePropsOption(route)
                        : routePropsOption
                : null;
            // we nee the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            const onVnodeMounted = () => {
                matchedRoute.instances[currentName] = viewRef.value;
                matchedRoute.enterCallbacks.forEach(callback => callback(viewRef.value));
            };
            const onVnodeUnmounted = () => {
                // remove the instance reference to prevent leak
                matchedRoute.instances[currentName] = null;
            };
            const component = h(ViewComponent, assign({}, routeProps, attrs, {
                onVnodeMounted,
                onVnodeUnmounted,
                ref: viewRef,
            }));
            return (
            // pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            slots.default
                ? slots.default({ Component: component, route: matchedRoute })
                : component);
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const RouterView = RouterViewImpl;

/**
 * Create a Router instance that can be used on a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    let parseQuery$1 = options.parseQuery || parseQuery;
    let stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    let { scrollBehavior } = options;
    let routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && scrollBehavior && 'scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        }
        else {
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
        return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        currentLocation = currentLocation || currentRoute.value;
        if (typeof rawLocation === 'string') {
            let locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            let matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
            let href = routerHistory.createHref(locationNormalized.fullPath);
            // locationNormalized is always a new object
            return assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                redirectedFrom: undefined,
                href,
            });
        }
        let matcherLocation;
        // path could be relative in object as well
        if ('path' in rawLocation) {
            matcherLocation = assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
            });
        }
        else {
            matcherLocation = assign({}, rawLocation, {
                params: encodeParams(rawLocation.params),
            });
        }
        let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = encodeHash(rawLocation.hash || '');
        // put back the unencoded params as given by the user (avoid the cost of decoding them)
        matchedRoute.params =
            'params' in rawLocation
                ? normalizeParams(rawLocation.params)
                : decodeParams(matchedRoute.params);
        const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
            hash,
            path: matchedRoute.path,
        }));
        let href = routerHistory.createHref(fullPath);
        return assign({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: 
            // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery
                ? normalizeQuery(rawLocation.query)
                : rawLocation.query,
        }, matchedRoute, {
            redirectedFrom: undefined,
            href,
        });
    }
    function locationAsObject(to) {
        return typeof to === 'string' ? { path: to } : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) {
            return createRouterError(8 /* NAVIGATION_CANCELLED */, {
                from,
                to,
            });
        }
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(assign(locationAsObject(to), { replace: true }));
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = (pendingLocation = resolve(to));
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const lastMatched = targetLocation.matched[targetLocation.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect } = lastMatched;
            // transform it into an object to pass the original RouteLocaleOptions
            let newTargetLocation = locationAsObject(typeof redirect === 'function' ? redirect(targetLocation) : redirect);
            return pushWithRedirect(assign({}, 
            // having a path here would be a problem with relative locations but
            // at the same time it doesn't make sense for a redirect to be
            // relative (no name, no path) because it would create an infinite
            // loop. Since newTargetLocation must either have a `path` or a
            // `name`, this will never happen
            targetLocation, newTargetLocation, {
                state: data,
                force,
                replace,
            }), 
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
        }
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* NAVIGATION_DUPLICATED */, { to: toLocation, from });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, 
            // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a pus
            true, 
            // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
            .catch((error) => {
            if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ |
                8 /* NAVIGATION_CANCELLED */ |
                2 /* NAVIGATION_GUARD_REDIRECT */)) {
                return error;
            }
            // unknown error, rejects
            return triggerError(error);
        })
            .then((failure) => {
            if (failure) {
                if (isNavigationFailure(failure, 2 /* NAVIGATION_GUARD_REDIRECT */))
                    // preserve the original redirectedFrom if any
                    return pushWithRedirect(
                    // keep options
                    assign(locationAsObject(failure.to), {
                        state: data,
                        force,
                        replace,
                    }), redirectedFrom || toLocation);
            }
            else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
            }
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */
    function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(from.matched.filter(record => to.matched.indexOf(record) < 0).reverse(), 'beforeRouteLeave', to, from);
        const [leavingRecords, updatingRecords,] = extractChangingRecords(to, from);
        for (const record of leavingRecords) {
            for (const guard of record.leaveGuards) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
        }
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return (runGuardQueue(guards)
            .then(() => {
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            .then(() => {
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(to.matched.filter(record => from.matched.indexOf(record) > -1), 'beforeRouteUpdate', to, from);
            for (const record of updatingRecords) {
                for (const guard of record.updateGuards) {
                    guards.push(guardToPromiseFn(guard, to, from));
                }
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check the route beforeEnter
            guards = [];
            for (const record of to.matched) {
                // do not trigger beforeEnter on reused views
                if (record.beforeEnter && from.matched.indexOf(record) < 0) {
                    if (Array.isArray(record.beforeEnter)) {
                        for (const beforeEnter of record.beforeEnter)
                            guards.push(guardToPromiseFn(beforeEnter, to, from));
                    }
                    else {
                        guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                    }
                }
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach(record => (record.enterCallbacks = []));
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(
            // the type doesn't matter as we are comparing an object per reference
            to.matched.filter(record => from.matched.indexOf(record) < 0), 'beforeRouteEnter', to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            // catch any navigation canceled
            .catch(err => isNavigationFailure(err, 8 /* NAVIGATION_CANCELLED */)
            ? err
            : Promise.reject(err)));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        for (const guard of afterGuards.list())
            guard(to, from, failure);
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */
    function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error)
            return error;
        const [leavingRecords] = extractChangingRecords(toLocation, from);
        for (const record of leavingRecords) {
            // remove registered guards from removed matched records
            record.leaveGuards = [];
            // free the references
            record.instances = {};
        }
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation)
                routerHistory.replace(toLocation.fullPath, assign({
                    scroll: isFirstNavigation && state && state.scroll,
                }, data));
            else
                routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        removeHistoryListener = routerHistory.listen((to, _from, info) => {
            // cannot be a redirect route because it was in history
            const toLocation = resolve(to);
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) {
                saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            }
            navigate(toLocation, from)
                .catch((error) => {
                if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ | 8 /* NAVIGATION_CANCELLED */)) {
                    return error;
                }
                if (isNavigationFailure(error, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
                    // do not restore history on unknown direction
                    if (info.delta)
                        routerHistory.go(-info.delta, false);
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(error.to, toLocation
                    // avoid an uncaught rejection
                    ).catch(noop);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta)
                    routerHistory.go(-info.delta, false);
                // unrecognized error, transfer to the global handler
                return triggerError(error);
            })
                .then((failure) => {
                failure =
                    failure ||
                        finalizeNavigation(
                        // after navigation, all matched components are resolved
                        toLocation, from, false);
                // revert the navigation
                if (failure && info.delta)
                    routerHistory.go(-info.delta, false);
                triggerAfterEach(toLocation, from, failure);
            })
                .catch(noop);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     * @param error - error to throw
     * @returns the error as a rejected promise
     */
    function triggerError(error) {
        markAsReady(error);
        errorHandlers.list().forEach(handler => handler(error));
        return Promise.reject(error);
    }
    /**
     * Returns a Promise that resolves or reject when the router has finished its
     * initial navigation. This will be automatic on client but requires an
     * explicit `router.push` call on the server. This behavior can change
     * depending on the history implementation used e.g. the defaults history
     * implementation (client only) triggers this automatically but the memory one
     * (should be used on server) doesn't
     */
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            readyHandlers.add([resolve, reject]);
        });
    }
    /**
     * Mark the router as ready, resolving the promised returned by isReady(). Can
     * only be called once, otherwise does nothing.
     * @param err - optional error
     */
    function markAsReady(err) {
        if (ready)
            return;
        ready = true;
        setupListeners();
        readyHandlers
            .list()
            .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
        readyHandlers.reset();
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        if (!isBrowser || !scrollBehavior)
            return Promise.resolve();
        let scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
            ((isFirstNavigation || !isPush) &&
                history.state &&
                history.state.scroll) ||
            null;
        return nextTick()
            .then(() => scrollBehavior(to, from, scrollPosition))
            .then(position => position && scrollToPosition(position))
            .catch(triggerError);
    }
    function go(delta) {
        return new Promise((resolve, reject) => {
            let removeError = errorHandlers.add(err => {
                removeError();
                removeAfterEach();
                reject(err);
            });
            let removeAfterEach = afterGuards.add((_to, _from, failure) => {
                removeError();
                removeAfterEach();
                resolve(failure);
            });
            routerHistory.go(delta);
        });
    }
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
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
        install(app) {
            const router = this;
            app.component('RouterLink', RouterLink);
            app.component('RouterView', RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, '$route', {
                get: () => unref(currentRoute),
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser &&
                // used for the initial navigation client side to avoid pushing
                // multiple times when the router is used in multiple apps
                !started &&
                currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch(err => {
                });
            }
            const reactiveRoute = {};
            for (let key in START_LOCATION_NORMALIZED) {
                // @ts-ignore: the key matches
                reactiveRoute[key] = computed$1(() => currentRoute.value[key]);
            }
            app.provide(routerKey, router);
            app.provide(routeLocationKey, reactive(reactiveRoute));
            let unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function () {
                installedApps.delete(app);
                if (installedApps.size < 1) {
                    removeHistoryListener();
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp.call(this, arguments);
            };
        },
    };
    return router;
}
function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    // TODO: could be optimized with one single for loop
    for (const record of from.matched) {
        if (to.matched.indexOf(record) < 0)
            leavingRecords.push(record);
        else
            updatingRecords.push(record);
    }
    for (const record of to.matched) {
        // the type doesn't matter because we are comparing per reference
        if (from.matched.indexOf(record) < 0)
            enteringRecords.push(record);
    }
    return [leavingRecords, updatingRecords, enteringRecords];
}

function useRouter() {
    return inject(routerKey);
}

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

const _withId = /*#__PURE__*/withScopeId("data-v-6d19dab9");

pushScopeId("data-v-6d19dab9");
const _hoisted_1 = { class: "hello" };
const _hoisted_2 = /*#__PURE__*/createVNode("img", {
  style: {"width":"80px","height":"80px"},
  alt: "Vue logo",
  src: _imports_0
}, null, -1);
popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode("h1", null, _toDisplayString(_ctx.msg), 1)
  ]))
});

;

script.render = render;
script.__scopeId = "data-v-6d19dab9";

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

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
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
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


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
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return (isElement(element) ? element.ownerDocument : element.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// Composite means it takes into account transforms as well as layout.

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
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
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

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
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
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


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
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
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
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
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
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
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
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$1,
  data: {}
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


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
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

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
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements; // $FlowFixMe

  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
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
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
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

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
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

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$3(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
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
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$3,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
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
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function createEl(id, cls) {
  var el = document.createElement('div');
  el.id = id;

  if (cls) {
    el.className = cls;
  }

  document.body.appendChild(el);
  return el;
}
function removeEl(el) {
  if (el.parentNode) el.parentNode.removeChild(el);
}
function normalizeClass$1(value) {
  var res = '';

  if (typeof value === 'string') {
    res = value;
  } else if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      res += normalizeClass$1(value[i]) + ' ';
    }
  } else if (value !== null && typeof value === 'object') {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
}
function injectCss(css, id) {
  if (!document.head.querySelector('#' + id)) {
    var node = document.createElement('style');
    node.textContent = css;
    node.type = 'text/css';
    node.id = id;
    document.head.appendChild(node);
  }
}
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}
/* istanbul ignore next */

var trim = function trim(str) {
  return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}

var ElGlobalConfigSymbol = Symbol();
function useGlobal() {
  return inject(ElGlobalConfigSymbol, null);
}
var ElRowSymbol = Symbol();
var ElFormSymbol = Symbol();
var ElFormItemSymbol = Symbol();

var css_248z = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.el-row {\n  position: relative;\n  box-sizing: border-box;\n}\n.el-row::before,\n.el-row::after {\n  display: table;\n  content: \"\";\n}\n\n.el-row::after {\n  clear: both;\n}\n\n.el-row--flex {\n  display: flex;\n}\n.el-row--flex:before, .el-row--flex:after {\n  display: none;\n}\n.el-row--flex.is-justify-center {\n  justify-content: center;\n}\n\n.el-row--flex.is-justify-end {\n  justify-content: flex-end;\n}\n\n.el-row--flex.is-justify-space-between {\n  justify-content: space-between;\n}\n\n.el-row--flex.is-justify-space-around {\n  justify-content: space-around;\n}\n\n.el-row--flex.is-align-middle {\n  align-items: center;\n}\n\n.el-row--flex.is-align-bottom {\n  align-items: flex-end;\n}";

injectCss(css_248z, 'ElRow');
var ElRow = defineComponent({
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      "default": 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      "default": 'start'
    },
    align: {
      type: String,
      "default": 'top'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    provide(ElRowSymbol, props.gutter);
    var style = computed$1(function () {
      var ret = {};

      if (props.gutter) {
        ret.marginLeft = "-" + props.gutter / 2 + "px";
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    });
    return function () {
      var _slots$default;

      return h(props.tag, {
        "class": ['el-row', props.justify !== 'start' ? "is-justify-" + props.justify : '', props.align !== 'top' ? "is-align-" + props.align : '', props.type === 'flex' ? 'el-row--flex' : ''],
        style: style.value
      }, (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
});

var css_248z$1 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n[class*=el-col-] {\n  float: left;\n  box-sizing: border-box;\n}\n\n.el-col-0 {\n  display: none;\n}\n\n.el-col-0 {\n  width: 0%;\n}\n\n.el-col-offset-0 {\n  margin-left: 0%;\n}\n\n.el-col-pull-0 {\n  position: relative;\n  right: 0%;\n}\n\n.el-col-push-0 {\n  position: relative;\n  left: 0%;\n}\n\n.el-col-1 {\n  width: 4.1666666667%;\n}\n\n.el-col-offset-1 {\n  margin-left: 4.1666666667%;\n}\n\n.el-col-pull-1 {\n  position: relative;\n  right: 4.1666666667%;\n}\n\n.el-col-push-1 {\n  position: relative;\n  left: 4.1666666667%;\n}\n\n.el-col-2 {\n  width: 8.3333333333%;\n}\n\n.el-col-offset-2 {\n  margin-left: 8.3333333333%;\n}\n\n.el-col-pull-2 {\n  position: relative;\n  right: 8.3333333333%;\n}\n\n.el-col-push-2 {\n  position: relative;\n  left: 8.3333333333%;\n}\n\n.el-col-3 {\n  width: 12.5%;\n}\n\n.el-col-offset-3 {\n  margin-left: 12.5%;\n}\n\n.el-col-pull-3 {\n  position: relative;\n  right: 12.5%;\n}\n\n.el-col-push-3 {\n  position: relative;\n  left: 12.5%;\n}\n\n.el-col-4 {\n  width: 16.6666666667%;\n}\n\n.el-col-offset-4 {\n  margin-left: 16.6666666667%;\n}\n\n.el-col-pull-4 {\n  position: relative;\n  right: 16.6666666667%;\n}\n\n.el-col-push-4 {\n  position: relative;\n  left: 16.6666666667%;\n}\n\n.el-col-5 {\n  width: 20.8333333333%;\n}\n\n.el-col-offset-5 {\n  margin-left: 20.8333333333%;\n}\n\n.el-col-pull-5 {\n  position: relative;\n  right: 20.8333333333%;\n}\n\n.el-col-push-5 {\n  position: relative;\n  left: 20.8333333333%;\n}\n\n.el-col-6 {\n  width: 25%;\n}\n\n.el-col-offset-6 {\n  margin-left: 25%;\n}\n\n.el-col-pull-6 {\n  position: relative;\n  right: 25%;\n}\n\n.el-col-push-6 {\n  position: relative;\n  left: 25%;\n}\n\n.el-col-7 {\n  width: 29.1666666667%;\n}\n\n.el-col-offset-7 {\n  margin-left: 29.1666666667%;\n}\n\n.el-col-pull-7 {\n  position: relative;\n  right: 29.1666666667%;\n}\n\n.el-col-push-7 {\n  position: relative;\n  left: 29.1666666667%;\n}\n\n.el-col-8 {\n  width: 33.3333333333%;\n}\n\n.el-col-offset-8 {\n  margin-left: 33.3333333333%;\n}\n\n.el-col-pull-8 {\n  position: relative;\n  right: 33.3333333333%;\n}\n\n.el-col-push-8 {\n  position: relative;\n  left: 33.3333333333%;\n}\n\n.el-col-9 {\n  width: 37.5%;\n}\n\n.el-col-offset-9 {\n  margin-left: 37.5%;\n}\n\n.el-col-pull-9 {\n  position: relative;\n  right: 37.5%;\n}\n\n.el-col-push-9 {\n  position: relative;\n  left: 37.5%;\n}\n\n.el-col-10 {\n  width: 41.6666666667%;\n}\n\n.el-col-offset-10 {\n  margin-left: 41.6666666667%;\n}\n\n.el-col-pull-10 {\n  position: relative;\n  right: 41.6666666667%;\n}\n\n.el-col-push-10 {\n  position: relative;\n  left: 41.6666666667%;\n}\n\n.el-col-11 {\n  width: 45.8333333333%;\n}\n\n.el-col-offset-11 {\n  margin-left: 45.8333333333%;\n}\n\n.el-col-pull-11 {\n  position: relative;\n  right: 45.8333333333%;\n}\n\n.el-col-push-11 {\n  position: relative;\n  left: 45.8333333333%;\n}\n\n.el-col-12 {\n  width: 50%;\n}\n\n.el-col-offset-12 {\n  margin-left: 50%;\n}\n\n.el-col-pull-12 {\n  position: relative;\n  right: 50%;\n}\n\n.el-col-push-12 {\n  position: relative;\n  left: 50%;\n}\n\n.el-col-13 {\n  width: 54.1666666667%;\n}\n\n.el-col-offset-13 {\n  margin-left: 54.1666666667%;\n}\n\n.el-col-pull-13 {\n  position: relative;\n  right: 54.1666666667%;\n}\n\n.el-col-push-13 {\n  position: relative;\n  left: 54.1666666667%;\n}\n\n.el-col-14 {\n  width: 58.3333333333%;\n}\n\n.el-col-offset-14 {\n  margin-left: 58.3333333333%;\n}\n\n.el-col-pull-14 {\n  position: relative;\n  right: 58.3333333333%;\n}\n\n.el-col-push-14 {\n  position: relative;\n  left: 58.3333333333%;\n}\n\n.el-col-15 {\n  width: 62.5%;\n}\n\n.el-col-offset-15 {\n  margin-left: 62.5%;\n}\n\n.el-col-pull-15 {\n  position: relative;\n  right: 62.5%;\n}\n\n.el-col-push-15 {\n  position: relative;\n  left: 62.5%;\n}\n\n.el-col-16 {\n  width: 66.6666666667%;\n}\n\n.el-col-offset-16 {\n  margin-left: 66.6666666667%;\n}\n\n.el-col-pull-16 {\n  position: relative;\n  right: 66.6666666667%;\n}\n\n.el-col-push-16 {\n  position: relative;\n  left: 66.6666666667%;\n}\n\n.el-col-17 {\n  width: 70.8333333333%;\n}\n\n.el-col-offset-17 {\n  margin-left: 70.8333333333%;\n}\n\n.el-col-pull-17 {\n  position: relative;\n  right: 70.8333333333%;\n}\n\n.el-col-push-17 {\n  position: relative;\n  left: 70.8333333333%;\n}\n\n.el-col-18 {\n  width: 75%;\n}\n\n.el-col-offset-18 {\n  margin-left: 75%;\n}\n\n.el-col-pull-18 {\n  position: relative;\n  right: 75%;\n}\n\n.el-col-push-18 {\n  position: relative;\n  left: 75%;\n}\n\n.el-col-19 {\n  width: 79.1666666667%;\n}\n\n.el-col-offset-19 {\n  margin-left: 79.1666666667%;\n}\n\n.el-col-pull-19 {\n  position: relative;\n  right: 79.1666666667%;\n}\n\n.el-col-push-19 {\n  position: relative;\n  left: 79.1666666667%;\n}\n\n.el-col-20 {\n  width: 83.3333333333%;\n}\n\n.el-col-offset-20 {\n  margin-left: 83.3333333333%;\n}\n\n.el-col-pull-20 {\n  position: relative;\n  right: 83.3333333333%;\n}\n\n.el-col-push-20 {\n  position: relative;\n  left: 83.3333333333%;\n}\n\n.el-col-21 {\n  width: 87.5%;\n}\n\n.el-col-offset-21 {\n  margin-left: 87.5%;\n}\n\n.el-col-pull-21 {\n  position: relative;\n  right: 87.5%;\n}\n\n.el-col-push-21 {\n  position: relative;\n  left: 87.5%;\n}\n\n.el-col-22 {\n  width: 91.6666666667%;\n}\n\n.el-col-offset-22 {\n  margin-left: 91.6666666667%;\n}\n\n.el-col-pull-22 {\n  position: relative;\n  right: 91.6666666667%;\n}\n\n.el-col-push-22 {\n  position: relative;\n  left: 91.6666666667%;\n}\n\n.el-col-23 {\n  width: 95.8333333333%;\n}\n\n.el-col-offset-23 {\n  margin-left: 95.8333333333%;\n}\n\n.el-col-pull-23 {\n  position: relative;\n  right: 95.8333333333%;\n}\n\n.el-col-push-23 {\n  position: relative;\n  left: 95.8333333333%;\n}\n\n.el-col-24 {\n  width: 100%;\n}\n\n.el-col-offset-24 {\n  margin-left: 100%;\n}\n\n.el-col-pull-24 {\n  position: relative;\n  right: 100%;\n}\n\n.el-col-push-24 {\n  position: relative;\n  left: 100%;\n}\n\n@media only screen and (max-width: 767px) {\n  .el-col-xs-0 {\n    display: none;\n  }\n\n  .el-col-xs-0 {\n    width: 0%;\n  }\n\n  .el-col-xs-offset-0 {\n    margin-left: 0%;\n  }\n\n  .el-col-xs-pull-0 {\n    position: relative;\n    right: 0%;\n  }\n\n  .el-col-xs-push-0 {\n    position: relative;\n    left: 0%;\n  }\n\n  .el-col-xs-1 {\n    width: 4.1666666667%;\n  }\n\n  .el-col-xs-offset-1 {\n    margin-left: 4.1666666667%;\n  }\n\n  .el-col-xs-pull-1 {\n    position: relative;\n    right: 4.1666666667%;\n  }\n\n  .el-col-xs-push-1 {\n    position: relative;\n    left: 4.1666666667%;\n  }\n\n  .el-col-xs-2 {\n    width: 8.3333333333%;\n  }\n\n  .el-col-xs-offset-2 {\n    margin-left: 8.3333333333%;\n  }\n\n  .el-col-xs-pull-2 {\n    position: relative;\n    right: 8.3333333333%;\n  }\n\n  .el-col-xs-push-2 {\n    position: relative;\n    left: 8.3333333333%;\n  }\n\n  .el-col-xs-3 {\n    width: 12.5%;\n  }\n\n  .el-col-xs-offset-3 {\n    margin-left: 12.5%;\n  }\n\n  .el-col-xs-pull-3 {\n    position: relative;\n    right: 12.5%;\n  }\n\n  .el-col-xs-push-3 {\n    position: relative;\n    left: 12.5%;\n  }\n\n  .el-col-xs-4 {\n    width: 16.6666666667%;\n  }\n\n  .el-col-xs-offset-4 {\n    margin-left: 16.6666666667%;\n  }\n\n  .el-col-xs-pull-4 {\n    position: relative;\n    right: 16.6666666667%;\n  }\n\n  .el-col-xs-push-4 {\n    position: relative;\n    left: 16.6666666667%;\n  }\n\n  .el-col-xs-5 {\n    width: 20.8333333333%;\n  }\n\n  .el-col-xs-offset-5 {\n    margin-left: 20.8333333333%;\n  }\n\n  .el-col-xs-pull-5 {\n    position: relative;\n    right: 20.8333333333%;\n  }\n\n  .el-col-xs-push-5 {\n    position: relative;\n    left: 20.8333333333%;\n  }\n\n  .el-col-xs-6 {\n    width: 25%;\n  }\n\n  .el-col-xs-offset-6 {\n    margin-left: 25%;\n  }\n\n  .el-col-xs-pull-6 {\n    position: relative;\n    right: 25%;\n  }\n\n  .el-col-xs-push-6 {\n    position: relative;\n    left: 25%;\n  }\n\n  .el-col-xs-7 {\n    width: 29.1666666667%;\n  }\n\n  .el-col-xs-offset-7 {\n    margin-left: 29.1666666667%;\n  }\n\n  .el-col-xs-pull-7 {\n    position: relative;\n    right: 29.1666666667%;\n  }\n\n  .el-col-xs-push-7 {\n    position: relative;\n    left: 29.1666666667%;\n  }\n\n  .el-col-xs-8 {\n    width: 33.3333333333%;\n  }\n\n  .el-col-xs-offset-8 {\n    margin-left: 33.3333333333%;\n  }\n\n  .el-col-xs-pull-8 {\n    position: relative;\n    right: 33.3333333333%;\n  }\n\n  .el-col-xs-push-8 {\n    position: relative;\n    left: 33.3333333333%;\n  }\n\n  .el-col-xs-9 {\n    width: 37.5%;\n  }\n\n  .el-col-xs-offset-9 {\n    margin-left: 37.5%;\n  }\n\n  .el-col-xs-pull-9 {\n    position: relative;\n    right: 37.5%;\n  }\n\n  .el-col-xs-push-9 {\n    position: relative;\n    left: 37.5%;\n  }\n\n  .el-col-xs-10 {\n    width: 41.6666666667%;\n  }\n\n  .el-col-xs-offset-10 {\n    margin-left: 41.6666666667%;\n  }\n\n  .el-col-xs-pull-10 {\n    position: relative;\n    right: 41.6666666667%;\n  }\n\n  .el-col-xs-push-10 {\n    position: relative;\n    left: 41.6666666667%;\n  }\n\n  .el-col-xs-11 {\n    width: 45.8333333333%;\n  }\n\n  .el-col-xs-offset-11 {\n    margin-left: 45.8333333333%;\n  }\n\n  .el-col-xs-pull-11 {\n    position: relative;\n    right: 45.8333333333%;\n  }\n\n  .el-col-xs-push-11 {\n    position: relative;\n    left: 45.8333333333%;\n  }\n\n  .el-col-xs-12 {\n    width: 50%;\n  }\n\n  .el-col-xs-offset-12 {\n    margin-left: 50%;\n  }\n\n  .el-col-xs-pull-12 {\n    position: relative;\n    right: 50%;\n  }\n\n  .el-col-xs-push-12 {\n    position: relative;\n    left: 50%;\n  }\n\n  .el-col-xs-13 {\n    width: 54.1666666667%;\n  }\n\n  .el-col-xs-offset-13 {\n    margin-left: 54.1666666667%;\n  }\n\n  .el-col-xs-pull-13 {\n    position: relative;\n    right: 54.1666666667%;\n  }\n\n  .el-col-xs-push-13 {\n    position: relative;\n    left: 54.1666666667%;\n  }\n\n  .el-col-xs-14 {\n    width: 58.3333333333%;\n  }\n\n  .el-col-xs-offset-14 {\n    margin-left: 58.3333333333%;\n  }\n\n  .el-col-xs-pull-14 {\n    position: relative;\n    right: 58.3333333333%;\n  }\n\n  .el-col-xs-push-14 {\n    position: relative;\n    left: 58.3333333333%;\n  }\n\n  .el-col-xs-15 {\n    width: 62.5%;\n  }\n\n  .el-col-xs-offset-15 {\n    margin-left: 62.5%;\n  }\n\n  .el-col-xs-pull-15 {\n    position: relative;\n    right: 62.5%;\n  }\n\n  .el-col-xs-push-15 {\n    position: relative;\n    left: 62.5%;\n  }\n\n  .el-col-xs-16 {\n    width: 66.6666666667%;\n  }\n\n  .el-col-xs-offset-16 {\n    margin-left: 66.6666666667%;\n  }\n\n  .el-col-xs-pull-16 {\n    position: relative;\n    right: 66.6666666667%;\n  }\n\n  .el-col-xs-push-16 {\n    position: relative;\n    left: 66.6666666667%;\n  }\n\n  .el-col-xs-17 {\n    width: 70.8333333333%;\n  }\n\n  .el-col-xs-offset-17 {\n    margin-left: 70.8333333333%;\n  }\n\n  .el-col-xs-pull-17 {\n    position: relative;\n    right: 70.8333333333%;\n  }\n\n  .el-col-xs-push-17 {\n    position: relative;\n    left: 70.8333333333%;\n  }\n\n  .el-col-xs-18 {\n    width: 75%;\n  }\n\n  .el-col-xs-offset-18 {\n    margin-left: 75%;\n  }\n\n  .el-col-xs-pull-18 {\n    position: relative;\n    right: 75%;\n  }\n\n  .el-col-xs-push-18 {\n    position: relative;\n    left: 75%;\n  }\n\n  .el-col-xs-19 {\n    width: 79.1666666667%;\n  }\n\n  .el-col-xs-offset-19 {\n    margin-left: 79.1666666667%;\n  }\n\n  .el-col-xs-pull-19 {\n    position: relative;\n    right: 79.1666666667%;\n  }\n\n  .el-col-xs-push-19 {\n    position: relative;\n    left: 79.1666666667%;\n  }\n\n  .el-col-xs-20 {\n    width: 83.3333333333%;\n  }\n\n  .el-col-xs-offset-20 {\n    margin-left: 83.3333333333%;\n  }\n\n  .el-col-xs-pull-20 {\n    position: relative;\n    right: 83.3333333333%;\n  }\n\n  .el-col-xs-push-20 {\n    position: relative;\n    left: 83.3333333333%;\n  }\n\n  .el-col-xs-21 {\n    width: 87.5%;\n  }\n\n  .el-col-xs-offset-21 {\n    margin-left: 87.5%;\n  }\n\n  .el-col-xs-pull-21 {\n    position: relative;\n    right: 87.5%;\n  }\n\n  .el-col-xs-push-21 {\n    position: relative;\n    left: 87.5%;\n  }\n\n  .el-col-xs-22 {\n    width: 91.6666666667%;\n  }\n\n  .el-col-xs-offset-22 {\n    margin-left: 91.6666666667%;\n  }\n\n  .el-col-xs-pull-22 {\n    position: relative;\n    right: 91.6666666667%;\n  }\n\n  .el-col-xs-push-22 {\n    position: relative;\n    left: 91.6666666667%;\n  }\n\n  .el-col-xs-23 {\n    width: 95.8333333333%;\n  }\n\n  .el-col-xs-offset-23 {\n    margin-left: 95.8333333333%;\n  }\n\n  .el-col-xs-pull-23 {\n    position: relative;\n    right: 95.8333333333%;\n  }\n\n  .el-col-xs-push-23 {\n    position: relative;\n    left: 95.8333333333%;\n  }\n\n  .el-col-xs-24 {\n    width: 100%;\n  }\n\n  .el-col-xs-offset-24 {\n    margin-left: 100%;\n  }\n\n  .el-col-xs-pull-24 {\n    position: relative;\n    right: 100%;\n  }\n\n  .el-col-xs-push-24 {\n    position: relative;\n    left: 100%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .el-col-sm-0 {\n    display: none;\n  }\n\n  .el-col-sm-0 {\n    width: 0%;\n  }\n\n  .el-col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .el-col-sm-pull-0 {\n    position: relative;\n    right: 0%;\n  }\n\n  .el-col-sm-push-0 {\n    position: relative;\n    left: 0%;\n  }\n\n  .el-col-sm-1 {\n    width: 4.1666666667%;\n  }\n\n  .el-col-sm-offset-1 {\n    margin-left: 4.1666666667%;\n  }\n\n  .el-col-sm-pull-1 {\n    position: relative;\n    right: 4.1666666667%;\n  }\n\n  .el-col-sm-push-1 {\n    position: relative;\n    left: 4.1666666667%;\n  }\n\n  .el-col-sm-2 {\n    width: 8.3333333333%;\n  }\n\n  .el-col-sm-offset-2 {\n    margin-left: 8.3333333333%;\n  }\n\n  .el-col-sm-pull-2 {\n    position: relative;\n    right: 8.3333333333%;\n  }\n\n  .el-col-sm-push-2 {\n    position: relative;\n    left: 8.3333333333%;\n  }\n\n  .el-col-sm-3 {\n    width: 12.5%;\n  }\n\n  .el-col-sm-offset-3 {\n    margin-left: 12.5%;\n  }\n\n  .el-col-sm-pull-3 {\n    position: relative;\n    right: 12.5%;\n  }\n\n  .el-col-sm-push-3 {\n    position: relative;\n    left: 12.5%;\n  }\n\n  .el-col-sm-4 {\n    width: 16.6666666667%;\n  }\n\n  .el-col-sm-offset-4 {\n    margin-left: 16.6666666667%;\n  }\n\n  .el-col-sm-pull-4 {\n    position: relative;\n    right: 16.6666666667%;\n  }\n\n  .el-col-sm-push-4 {\n    position: relative;\n    left: 16.6666666667%;\n  }\n\n  .el-col-sm-5 {\n    width: 20.8333333333%;\n  }\n\n  .el-col-sm-offset-5 {\n    margin-left: 20.8333333333%;\n  }\n\n  .el-col-sm-pull-5 {\n    position: relative;\n    right: 20.8333333333%;\n  }\n\n  .el-col-sm-push-5 {\n    position: relative;\n    left: 20.8333333333%;\n  }\n\n  .el-col-sm-6 {\n    width: 25%;\n  }\n\n  .el-col-sm-offset-6 {\n    margin-left: 25%;\n  }\n\n  .el-col-sm-pull-6 {\n    position: relative;\n    right: 25%;\n  }\n\n  .el-col-sm-push-6 {\n    position: relative;\n    left: 25%;\n  }\n\n  .el-col-sm-7 {\n    width: 29.1666666667%;\n  }\n\n  .el-col-sm-offset-7 {\n    margin-left: 29.1666666667%;\n  }\n\n  .el-col-sm-pull-7 {\n    position: relative;\n    right: 29.1666666667%;\n  }\n\n  .el-col-sm-push-7 {\n    position: relative;\n    left: 29.1666666667%;\n  }\n\n  .el-col-sm-8 {\n    width: 33.3333333333%;\n  }\n\n  .el-col-sm-offset-8 {\n    margin-left: 33.3333333333%;\n  }\n\n  .el-col-sm-pull-8 {\n    position: relative;\n    right: 33.3333333333%;\n  }\n\n  .el-col-sm-push-8 {\n    position: relative;\n    left: 33.3333333333%;\n  }\n\n  .el-col-sm-9 {\n    width: 37.5%;\n  }\n\n  .el-col-sm-offset-9 {\n    margin-left: 37.5%;\n  }\n\n  .el-col-sm-pull-9 {\n    position: relative;\n    right: 37.5%;\n  }\n\n  .el-col-sm-push-9 {\n    position: relative;\n    left: 37.5%;\n  }\n\n  .el-col-sm-10 {\n    width: 41.6666666667%;\n  }\n\n  .el-col-sm-offset-10 {\n    margin-left: 41.6666666667%;\n  }\n\n  .el-col-sm-pull-10 {\n    position: relative;\n    right: 41.6666666667%;\n  }\n\n  .el-col-sm-push-10 {\n    position: relative;\n    left: 41.6666666667%;\n  }\n\n  .el-col-sm-11 {\n    width: 45.8333333333%;\n  }\n\n  .el-col-sm-offset-11 {\n    margin-left: 45.8333333333%;\n  }\n\n  .el-col-sm-pull-11 {\n    position: relative;\n    right: 45.8333333333%;\n  }\n\n  .el-col-sm-push-11 {\n    position: relative;\n    left: 45.8333333333%;\n  }\n\n  .el-col-sm-12 {\n    width: 50%;\n  }\n\n  .el-col-sm-offset-12 {\n    margin-left: 50%;\n  }\n\n  .el-col-sm-pull-12 {\n    position: relative;\n    right: 50%;\n  }\n\n  .el-col-sm-push-12 {\n    position: relative;\n    left: 50%;\n  }\n\n  .el-col-sm-13 {\n    width: 54.1666666667%;\n  }\n\n  .el-col-sm-offset-13 {\n    margin-left: 54.1666666667%;\n  }\n\n  .el-col-sm-pull-13 {\n    position: relative;\n    right: 54.1666666667%;\n  }\n\n  .el-col-sm-push-13 {\n    position: relative;\n    left: 54.1666666667%;\n  }\n\n  .el-col-sm-14 {\n    width: 58.3333333333%;\n  }\n\n  .el-col-sm-offset-14 {\n    margin-left: 58.3333333333%;\n  }\n\n  .el-col-sm-pull-14 {\n    position: relative;\n    right: 58.3333333333%;\n  }\n\n  .el-col-sm-push-14 {\n    position: relative;\n    left: 58.3333333333%;\n  }\n\n  .el-col-sm-15 {\n    width: 62.5%;\n  }\n\n  .el-col-sm-offset-15 {\n    margin-left: 62.5%;\n  }\n\n  .el-col-sm-pull-15 {\n    position: relative;\n    right: 62.5%;\n  }\n\n  .el-col-sm-push-15 {\n    position: relative;\n    left: 62.5%;\n  }\n\n  .el-col-sm-16 {\n    width: 66.6666666667%;\n  }\n\n  .el-col-sm-offset-16 {\n    margin-left: 66.6666666667%;\n  }\n\n  .el-col-sm-pull-16 {\n    position: relative;\n    right: 66.6666666667%;\n  }\n\n  .el-col-sm-push-16 {\n    position: relative;\n    left: 66.6666666667%;\n  }\n\n  .el-col-sm-17 {\n    width: 70.8333333333%;\n  }\n\n  .el-col-sm-offset-17 {\n    margin-left: 70.8333333333%;\n  }\n\n  .el-col-sm-pull-17 {\n    position: relative;\n    right: 70.8333333333%;\n  }\n\n  .el-col-sm-push-17 {\n    position: relative;\n    left: 70.8333333333%;\n  }\n\n  .el-col-sm-18 {\n    width: 75%;\n  }\n\n  .el-col-sm-offset-18 {\n    margin-left: 75%;\n  }\n\n  .el-col-sm-pull-18 {\n    position: relative;\n    right: 75%;\n  }\n\n  .el-col-sm-push-18 {\n    position: relative;\n    left: 75%;\n  }\n\n  .el-col-sm-19 {\n    width: 79.1666666667%;\n  }\n\n  .el-col-sm-offset-19 {\n    margin-left: 79.1666666667%;\n  }\n\n  .el-col-sm-pull-19 {\n    position: relative;\n    right: 79.1666666667%;\n  }\n\n  .el-col-sm-push-19 {\n    position: relative;\n    left: 79.1666666667%;\n  }\n\n  .el-col-sm-20 {\n    width: 83.3333333333%;\n  }\n\n  .el-col-sm-offset-20 {\n    margin-left: 83.3333333333%;\n  }\n\n  .el-col-sm-pull-20 {\n    position: relative;\n    right: 83.3333333333%;\n  }\n\n  .el-col-sm-push-20 {\n    position: relative;\n    left: 83.3333333333%;\n  }\n\n  .el-col-sm-21 {\n    width: 87.5%;\n  }\n\n  .el-col-sm-offset-21 {\n    margin-left: 87.5%;\n  }\n\n  .el-col-sm-pull-21 {\n    position: relative;\n    right: 87.5%;\n  }\n\n  .el-col-sm-push-21 {\n    position: relative;\n    left: 87.5%;\n  }\n\n  .el-col-sm-22 {\n    width: 91.6666666667%;\n  }\n\n  .el-col-sm-offset-22 {\n    margin-left: 91.6666666667%;\n  }\n\n  .el-col-sm-pull-22 {\n    position: relative;\n    right: 91.6666666667%;\n  }\n\n  .el-col-sm-push-22 {\n    position: relative;\n    left: 91.6666666667%;\n  }\n\n  .el-col-sm-23 {\n    width: 95.8333333333%;\n  }\n\n  .el-col-sm-offset-23 {\n    margin-left: 95.8333333333%;\n  }\n\n  .el-col-sm-pull-23 {\n    position: relative;\n    right: 95.8333333333%;\n  }\n\n  .el-col-sm-push-23 {\n    position: relative;\n    left: 95.8333333333%;\n  }\n\n  .el-col-sm-24 {\n    width: 100%;\n  }\n\n  .el-col-sm-offset-24 {\n    margin-left: 100%;\n  }\n\n  .el-col-sm-pull-24 {\n    position: relative;\n    right: 100%;\n  }\n\n  .el-col-sm-push-24 {\n    position: relative;\n    left: 100%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .el-col-md-0 {\n    display: none;\n  }\n\n  .el-col-md-0 {\n    width: 0%;\n  }\n\n  .el-col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .el-col-md-pull-0 {\n    position: relative;\n    right: 0%;\n  }\n\n  .el-col-md-push-0 {\n    position: relative;\n    left: 0%;\n  }\n\n  .el-col-md-1 {\n    width: 4.1666666667%;\n  }\n\n  .el-col-md-offset-1 {\n    margin-left: 4.1666666667%;\n  }\n\n  .el-col-md-pull-1 {\n    position: relative;\n    right: 4.1666666667%;\n  }\n\n  .el-col-md-push-1 {\n    position: relative;\n    left: 4.1666666667%;\n  }\n\n  .el-col-md-2 {\n    width: 8.3333333333%;\n  }\n\n  .el-col-md-offset-2 {\n    margin-left: 8.3333333333%;\n  }\n\n  .el-col-md-pull-2 {\n    position: relative;\n    right: 8.3333333333%;\n  }\n\n  .el-col-md-push-2 {\n    position: relative;\n    left: 8.3333333333%;\n  }\n\n  .el-col-md-3 {\n    width: 12.5%;\n  }\n\n  .el-col-md-offset-3 {\n    margin-left: 12.5%;\n  }\n\n  .el-col-md-pull-3 {\n    position: relative;\n    right: 12.5%;\n  }\n\n  .el-col-md-push-3 {\n    position: relative;\n    left: 12.5%;\n  }\n\n  .el-col-md-4 {\n    width: 16.6666666667%;\n  }\n\n  .el-col-md-offset-4 {\n    margin-left: 16.6666666667%;\n  }\n\n  .el-col-md-pull-4 {\n    position: relative;\n    right: 16.6666666667%;\n  }\n\n  .el-col-md-push-4 {\n    position: relative;\n    left: 16.6666666667%;\n  }\n\n  .el-col-md-5 {\n    width: 20.8333333333%;\n  }\n\n  .el-col-md-offset-5 {\n    margin-left: 20.8333333333%;\n  }\n\n  .el-col-md-pull-5 {\n    position: relative;\n    right: 20.8333333333%;\n  }\n\n  .el-col-md-push-5 {\n    position: relative;\n    left: 20.8333333333%;\n  }\n\n  .el-col-md-6 {\n    width: 25%;\n  }\n\n  .el-col-md-offset-6 {\n    margin-left: 25%;\n  }\n\n  .el-col-md-pull-6 {\n    position: relative;\n    right: 25%;\n  }\n\n  .el-col-md-push-6 {\n    position: relative;\n    left: 25%;\n  }\n\n  .el-col-md-7 {\n    width: 29.1666666667%;\n  }\n\n  .el-col-md-offset-7 {\n    margin-left: 29.1666666667%;\n  }\n\n  .el-col-md-pull-7 {\n    position: relative;\n    right: 29.1666666667%;\n  }\n\n  .el-col-md-push-7 {\n    position: relative;\n    left: 29.1666666667%;\n  }\n\n  .el-col-md-8 {\n    width: 33.3333333333%;\n  }\n\n  .el-col-md-offset-8 {\n    margin-left: 33.3333333333%;\n  }\n\n  .el-col-md-pull-8 {\n    position: relative;\n    right: 33.3333333333%;\n  }\n\n  .el-col-md-push-8 {\n    position: relative;\n    left: 33.3333333333%;\n  }\n\n  .el-col-md-9 {\n    width: 37.5%;\n  }\n\n  .el-col-md-offset-9 {\n    margin-left: 37.5%;\n  }\n\n  .el-col-md-pull-9 {\n    position: relative;\n    right: 37.5%;\n  }\n\n  .el-col-md-push-9 {\n    position: relative;\n    left: 37.5%;\n  }\n\n  .el-col-md-10 {\n    width: 41.6666666667%;\n  }\n\n  .el-col-md-offset-10 {\n    margin-left: 41.6666666667%;\n  }\n\n  .el-col-md-pull-10 {\n    position: relative;\n    right: 41.6666666667%;\n  }\n\n  .el-col-md-push-10 {\n    position: relative;\n    left: 41.6666666667%;\n  }\n\n  .el-col-md-11 {\n    width: 45.8333333333%;\n  }\n\n  .el-col-md-offset-11 {\n    margin-left: 45.8333333333%;\n  }\n\n  .el-col-md-pull-11 {\n    position: relative;\n    right: 45.8333333333%;\n  }\n\n  .el-col-md-push-11 {\n    position: relative;\n    left: 45.8333333333%;\n  }\n\n  .el-col-md-12 {\n    width: 50%;\n  }\n\n  .el-col-md-offset-12 {\n    margin-left: 50%;\n  }\n\n  .el-col-md-pull-12 {\n    position: relative;\n    right: 50%;\n  }\n\n  .el-col-md-push-12 {\n    position: relative;\n    left: 50%;\n  }\n\n  .el-col-md-13 {\n    width: 54.1666666667%;\n  }\n\n  .el-col-md-offset-13 {\n    margin-left: 54.1666666667%;\n  }\n\n  .el-col-md-pull-13 {\n    position: relative;\n    right: 54.1666666667%;\n  }\n\n  .el-col-md-push-13 {\n    position: relative;\n    left: 54.1666666667%;\n  }\n\n  .el-col-md-14 {\n    width: 58.3333333333%;\n  }\n\n  .el-col-md-offset-14 {\n    margin-left: 58.3333333333%;\n  }\n\n  .el-col-md-pull-14 {\n    position: relative;\n    right: 58.3333333333%;\n  }\n\n  .el-col-md-push-14 {\n    position: relative;\n    left: 58.3333333333%;\n  }\n\n  .el-col-md-15 {\n    width: 62.5%;\n  }\n\n  .el-col-md-offset-15 {\n    margin-left: 62.5%;\n  }\n\n  .el-col-md-pull-15 {\n    position: relative;\n    right: 62.5%;\n  }\n\n  .el-col-md-push-15 {\n    position: relative;\n    left: 62.5%;\n  }\n\n  .el-col-md-16 {\n    width: 66.6666666667%;\n  }\n\n  .el-col-md-offset-16 {\n    margin-left: 66.6666666667%;\n  }\n\n  .el-col-md-pull-16 {\n    position: relative;\n    right: 66.6666666667%;\n  }\n\n  .el-col-md-push-16 {\n    position: relative;\n    left: 66.6666666667%;\n  }\n\n  .el-col-md-17 {\n    width: 70.8333333333%;\n  }\n\n  .el-col-md-offset-17 {\n    margin-left: 70.8333333333%;\n  }\n\n  .el-col-md-pull-17 {\n    position: relative;\n    right: 70.8333333333%;\n  }\n\n  .el-col-md-push-17 {\n    position: relative;\n    left: 70.8333333333%;\n  }\n\n  .el-col-md-18 {\n    width: 75%;\n  }\n\n  .el-col-md-offset-18 {\n    margin-left: 75%;\n  }\n\n  .el-col-md-pull-18 {\n    position: relative;\n    right: 75%;\n  }\n\n  .el-col-md-push-18 {\n    position: relative;\n    left: 75%;\n  }\n\n  .el-col-md-19 {\n    width: 79.1666666667%;\n  }\n\n  .el-col-md-offset-19 {\n    margin-left: 79.1666666667%;\n  }\n\n  .el-col-md-pull-19 {\n    position: relative;\n    right: 79.1666666667%;\n  }\n\n  .el-col-md-push-19 {\n    position: relative;\n    left: 79.1666666667%;\n  }\n\n  .el-col-md-20 {\n    width: 83.3333333333%;\n  }\n\n  .el-col-md-offset-20 {\n    margin-left: 83.3333333333%;\n  }\n\n  .el-col-md-pull-20 {\n    position: relative;\n    right: 83.3333333333%;\n  }\n\n  .el-col-md-push-20 {\n    position: relative;\n    left: 83.3333333333%;\n  }\n\n  .el-col-md-21 {\n    width: 87.5%;\n  }\n\n  .el-col-md-offset-21 {\n    margin-left: 87.5%;\n  }\n\n  .el-col-md-pull-21 {\n    position: relative;\n    right: 87.5%;\n  }\n\n  .el-col-md-push-21 {\n    position: relative;\n    left: 87.5%;\n  }\n\n  .el-col-md-22 {\n    width: 91.6666666667%;\n  }\n\n  .el-col-md-offset-22 {\n    margin-left: 91.6666666667%;\n  }\n\n  .el-col-md-pull-22 {\n    position: relative;\n    right: 91.6666666667%;\n  }\n\n  .el-col-md-push-22 {\n    position: relative;\n    left: 91.6666666667%;\n  }\n\n  .el-col-md-23 {\n    width: 95.8333333333%;\n  }\n\n  .el-col-md-offset-23 {\n    margin-left: 95.8333333333%;\n  }\n\n  .el-col-md-pull-23 {\n    position: relative;\n    right: 95.8333333333%;\n  }\n\n  .el-col-md-push-23 {\n    position: relative;\n    left: 95.8333333333%;\n  }\n\n  .el-col-md-24 {\n    width: 100%;\n  }\n\n  .el-col-md-offset-24 {\n    margin-left: 100%;\n  }\n\n  .el-col-md-pull-24 {\n    position: relative;\n    right: 100%;\n  }\n\n  .el-col-md-push-24 {\n    position: relative;\n    left: 100%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .el-col-lg-0 {\n    display: none;\n  }\n\n  .el-col-lg-0 {\n    width: 0%;\n  }\n\n  .el-col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .el-col-lg-pull-0 {\n    position: relative;\n    right: 0%;\n  }\n\n  .el-col-lg-push-0 {\n    position: relative;\n    left: 0%;\n  }\n\n  .el-col-lg-1 {\n    width: 4.1666666667%;\n  }\n\n  .el-col-lg-offset-1 {\n    margin-left: 4.1666666667%;\n  }\n\n  .el-col-lg-pull-1 {\n    position: relative;\n    right: 4.1666666667%;\n  }\n\n  .el-col-lg-push-1 {\n    position: relative;\n    left: 4.1666666667%;\n  }\n\n  .el-col-lg-2 {\n    width: 8.3333333333%;\n  }\n\n  .el-col-lg-offset-2 {\n    margin-left: 8.3333333333%;\n  }\n\n  .el-col-lg-pull-2 {\n    position: relative;\n    right: 8.3333333333%;\n  }\n\n  .el-col-lg-push-2 {\n    position: relative;\n    left: 8.3333333333%;\n  }\n\n  .el-col-lg-3 {\n    width: 12.5%;\n  }\n\n  .el-col-lg-offset-3 {\n    margin-left: 12.5%;\n  }\n\n  .el-col-lg-pull-3 {\n    position: relative;\n    right: 12.5%;\n  }\n\n  .el-col-lg-push-3 {\n    position: relative;\n    left: 12.5%;\n  }\n\n  .el-col-lg-4 {\n    width: 16.6666666667%;\n  }\n\n  .el-col-lg-offset-4 {\n    margin-left: 16.6666666667%;\n  }\n\n  .el-col-lg-pull-4 {\n    position: relative;\n    right: 16.6666666667%;\n  }\n\n  .el-col-lg-push-4 {\n    position: relative;\n    left: 16.6666666667%;\n  }\n\n  .el-col-lg-5 {\n    width: 20.8333333333%;\n  }\n\n  .el-col-lg-offset-5 {\n    margin-left: 20.8333333333%;\n  }\n\n  .el-col-lg-pull-5 {\n    position: relative;\n    right: 20.8333333333%;\n  }\n\n  .el-col-lg-push-5 {\n    position: relative;\n    left: 20.8333333333%;\n  }\n\n  .el-col-lg-6 {\n    width: 25%;\n  }\n\n  .el-col-lg-offset-6 {\n    margin-left: 25%;\n  }\n\n  .el-col-lg-pull-6 {\n    position: relative;\n    right: 25%;\n  }\n\n  .el-col-lg-push-6 {\n    position: relative;\n    left: 25%;\n  }\n\n  .el-col-lg-7 {\n    width: 29.1666666667%;\n  }\n\n  .el-col-lg-offset-7 {\n    margin-left: 29.1666666667%;\n  }\n\n  .el-col-lg-pull-7 {\n    position: relative;\n    right: 29.1666666667%;\n  }\n\n  .el-col-lg-push-7 {\n    position: relative;\n    left: 29.1666666667%;\n  }\n\n  .el-col-lg-8 {\n    width: 33.3333333333%;\n  }\n\n  .el-col-lg-offset-8 {\n    margin-left: 33.3333333333%;\n  }\n\n  .el-col-lg-pull-8 {\n    position: relative;\n    right: 33.3333333333%;\n  }\n\n  .el-col-lg-push-8 {\n    position: relative;\n    left: 33.3333333333%;\n  }\n\n  .el-col-lg-9 {\n    width: 37.5%;\n  }\n\n  .el-col-lg-offset-9 {\n    margin-left: 37.5%;\n  }\n\n  .el-col-lg-pull-9 {\n    position: relative;\n    right: 37.5%;\n  }\n\n  .el-col-lg-push-9 {\n    position: relative;\n    left: 37.5%;\n  }\n\n  .el-col-lg-10 {\n    width: 41.6666666667%;\n  }\n\n  .el-col-lg-offset-10 {\n    margin-left: 41.6666666667%;\n  }\n\n  .el-col-lg-pull-10 {\n    position: relative;\n    right: 41.6666666667%;\n  }\n\n  .el-col-lg-push-10 {\n    position: relative;\n    left: 41.6666666667%;\n  }\n\n  .el-col-lg-11 {\n    width: 45.8333333333%;\n  }\n\n  .el-col-lg-offset-11 {\n    margin-left: 45.8333333333%;\n  }\n\n  .el-col-lg-pull-11 {\n    position: relative;\n    right: 45.8333333333%;\n  }\n\n  .el-col-lg-push-11 {\n    position: relative;\n    left: 45.8333333333%;\n  }\n\n  .el-col-lg-12 {\n    width: 50%;\n  }\n\n  .el-col-lg-offset-12 {\n    margin-left: 50%;\n  }\n\n  .el-col-lg-pull-12 {\n    position: relative;\n    right: 50%;\n  }\n\n  .el-col-lg-push-12 {\n    position: relative;\n    left: 50%;\n  }\n\n  .el-col-lg-13 {\n    width: 54.1666666667%;\n  }\n\n  .el-col-lg-offset-13 {\n    margin-left: 54.1666666667%;\n  }\n\n  .el-col-lg-pull-13 {\n    position: relative;\n    right: 54.1666666667%;\n  }\n\n  .el-col-lg-push-13 {\n    position: relative;\n    left: 54.1666666667%;\n  }\n\n  .el-col-lg-14 {\n    width: 58.3333333333%;\n  }\n\n  .el-col-lg-offset-14 {\n    margin-left: 58.3333333333%;\n  }\n\n  .el-col-lg-pull-14 {\n    position: relative;\n    right: 58.3333333333%;\n  }\n\n  .el-col-lg-push-14 {\n    position: relative;\n    left: 58.3333333333%;\n  }\n\n  .el-col-lg-15 {\n    width: 62.5%;\n  }\n\n  .el-col-lg-offset-15 {\n    margin-left: 62.5%;\n  }\n\n  .el-col-lg-pull-15 {\n    position: relative;\n    right: 62.5%;\n  }\n\n  .el-col-lg-push-15 {\n    position: relative;\n    left: 62.5%;\n  }\n\n  .el-col-lg-16 {\n    width: 66.6666666667%;\n  }\n\n  .el-col-lg-offset-16 {\n    margin-left: 66.6666666667%;\n  }\n\n  .el-col-lg-pull-16 {\n    position: relative;\n    right: 66.6666666667%;\n  }\n\n  .el-col-lg-push-16 {\n    position: relative;\n    left: 66.6666666667%;\n  }\n\n  .el-col-lg-17 {\n    width: 70.8333333333%;\n  }\n\n  .el-col-lg-offset-17 {\n    margin-left: 70.8333333333%;\n  }\n\n  .el-col-lg-pull-17 {\n    position: relative;\n    right: 70.8333333333%;\n  }\n\n  .el-col-lg-push-17 {\n    position: relative;\n    left: 70.8333333333%;\n  }\n\n  .el-col-lg-18 {\n    width: 75%;\n  }\n\n  .el-col-lg-offset-18 {\n    margin-left: 75%;\n  }\n\n  .el-col-lg-pull-18 {\n    position: relative;\n    right: 75%;\n  }\n\n  .el-col-lg-push-18 {\n    position: relative;\n    left: 75%;\n  }\n\n  .el-col-lg-19 {\n    width: 79.1666666667%;\n  }\n\n  .el-col-lg-offset-19 {\n    margin-left: 79.1666666667%;\n  }\n\n  .el-col-lg-pull-19 {\n    position: relative;\n    right: 79.1666666667%;\n  }\n\n  .el-col-lg-push-19 {\n    position: relative;\n    left: 79.1666666667%;\n  }\n\n  .el-col-lg-20 {\n    width: 83.3333333333%;\n  }\n\n  .el-col-lg-offset-20 {\n    margin-left: 83.3333333333%;\n  }\n\n  .el-col-lg-pull-20 {\n    position: relative;\n    right: 83.3333333333%;\n  }\n\n  .el-col-lg-push-20 {\n    position: relative;\n    left: 83.3333333333%;\n  }\n\n  .el-col-lg-21 {\n    width: 87.5%;\n  }\n\n  .el-col-lg-offset-21 {\n    margin-left: 87.5%;\n  }\n\n  .el-col-lg-pull-21 {\n    position: relative;\n    right: 87.5%;\n  }\n\n  .el-col-lg-push-21 {\n    position: relative;\n    left: 87.5%;\n  }\n\n  .el-col-lg-22 {\n    width: 91.6666666667%;\n  }\n\n  .el-col-lg-offset-22 {\n    margin-left: 91.6666666667%;\n  }\n\n  .el-col-lg-pull-22 {\n    position: relative;\n    right: 91.6666666667%;\n  }\n\n  .el-col-lg-push-22 {\n    position: relative;\n    left: 91.6666666667%;\n  }\n\n  .el-col-lg-23 {\n    width: 95.8333333333%;\n  }\n\n  .el-col-lg-offset-23 {\n    margin-left: 95.8333333333%;\n  }\n\n  .el-col-lg-pull-23 {\n    position: relative;\n    right: 95.8333333333%;\n  }\n\n  .el-col-lg-push-23 {\n    position: relative;\n    left: 95.8333333333%;\n  }\n\n  .el-col-lg-24 {\n    width: 100%;\n  }\n\n  .el-col-lg-offset-24 {\n    margin-left: 100%;\n  }\n\n  .el-col-lg-pull-24 {\n    position: relative;\n    right: 100%;\n  }\n\n  .el-col-lg-push-24 {\n    position: relative;\n    left: 100%;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  .el-col-xl-0 {\n    display: none;\n  }\n\n  .el-col-xl-0 {\n    width: 0%;\n  }\n\n  .el-col-xl-offset-0 {\n    margin-left: 0%;\n  }\n\n  .el-col-xl-pull-0 {\n    position: relative;\n    right: 0%;\n  }\n\n  .el-col-xl-push-0 {\n    position: relative;\n    left: 0%;\n  }\n\n  .el-col-xl-1 {\n    width: 4.1666666667%;\n  }\n\n  .el-col-xl-offset-1 {\n    margin-left: 4.1666666667%;\n  }\n\n  .el-col-xl-pull-1 {\n    position: relative;\n    right: 4.1666666667%;\n  }\n\n  .el-col-xl-push-1 {\n    position: relative;\n    left: 4.1666666667%;\n  }\n\n  .el-col-xl-2 {\n    width: 8.3333333333%;\n  }\n\n  .el-col-xl-offset-2 {\n    margin-left: 8.3333333333%;\n  }\n\n  .el-col-xl-pull-2 {\n    position: relative;\n    right: 8.3333333333%;\n  }\n\n  .el-col-xl-push-2 {\n    position: relative;\n    left: 8.3333333333%;\n  }\n\n  .el-col-xl-3 {\n    width: 12.5%;\n  }\n\n  .el-col-xl-offset-3 {\n    margin-left: 12.5%;\n  }\n\n  .el-col-xl-pull-3 {\n    position: relative;\n    right: 12.5%;\n  }\n\n  .el-col-xl-push-3 {\n    position: relative;\n    left: 12.5%;\n  }\n\n  .el-col-xl-4 {\n    width: 16.6666666667%;\n  }\n\n  .el-col-xl-offset-4 {\n    margin-left: 16.6666666667%;\n  }\n\n  .el-col-xl-pull-4 {\n    position: relative;\n    right: 16.6666666667%;\n  }\n\n  .el-col-xl-push-4 {\n    position: relative;\n    left: 16.6666666667%;\n  }\n\n  .el-col-xl-5 {\n    width: 20.8333333333%;\n  }\n\n  .el-col-xl-offset-5 {\n    margin-left: 20.8333333333%;\n  }\n\n  .el-col-xl-pull-5 {\n    position: relative;\n    right: 20.8333333333%;\n  }\n\n  .el-col-xl-push-5 {\n    position: relative;\n    left: 20.8333333333%;\n  }\n\n  .el-col-xl-6 {\n    width: 25%;\n  }\n\n  .el-col-xl-offset-6 {\n    margin-left: 25%;\n  }\n\n  .el-col-xl-pull-6 {\n    position: relative;\n    right: 25%;\n  }\n\n  .el-col-xl-push-6 {\n    position: relative;\n    left: 25%;\n  }\n\n  .el-col-xl-7 {\n    width: 29.1666666667%;\n  }\n\n  .el-col-xl-offset-7 {\n    margin-left: 29.1666666667%;\n  }\n\n  .el-col-xl-pull-7 {\n    position: relative;\n    right: 29.1666666667%;\n  }\n\n  .el-col-xl-push-7 {\n    position: relative;\n    left: 29.1666666667%;\n  }\n\n  .el-col-xl-8 {\n    width: 33.3333333333%;\n  }\n\n  .el-col-xl-offset-8 {\n    margin-left: 33.3333333333%;\n  }\n\n  .el-col-xl-pull-8 {\n    position: relative;\n    right: 33.3333333333%;\n  }\n\n  .el-col-xl-push-8 {\n    position: relative;\n    left: 33.3333333333%;\n  }\n\n  .el-col-xl-9 {\n    width: 37.5%;\n  }\n\n  .el-col-xl-offset-9 {\n    margin-left: 37.5%;\n  }\n\n  .el-col-xl-pull-9 {\n    position: relative;\n    right: 37.5%;\n  }\n\n  .el-col-xl-push-9 {\n    position: relative;\n    left: 37.5%;\n  }\n\n  .el-col-xl-10 {\n    width: 41.6666666667%;\n  }\n\n  .el-col-xl-offset-10 {\n    margin-left: 41.6666666667%;\n  }\n\n  .el-col-xl-pull-10 {\n    position: relative;\n    right: 41.6666666667%;\n  }\n\n  .el-col-xl-push-10 {\n    position: relative;\n    left: 41.6666666667%;\n  }\n\n  .el-col-xl-11 {\n    width: 45.8333333333%;\n  }\n\n  .el-col-xl-offset-11 {\n    margin-left: 45.8333333333%;\n  }\n\n  .el-col-xl-pull-11 {\n    position: relative;\n    right: 45.8333333333%;\n  }\n\n  .el-col-xl-push-11 {\n    position: relative;\n    left: 45.8333333333%;\n  }\n\n  .el-col-xl-12 {\n    width: 50%;\n  }\n\n  .el-col-xl-offset-12 {\n    margin-left: 50%;\n  }\n\n  .el-col-xl-pull-12 {\n    position: relative;\n    right: 50%;\n  }\n\n  .el-col-xl-push-12 {\n    position: relative;\n    left: 50%;\n  }\n\n  .el-col-xl-13 {\n    width: 54.1666666667%;\n  }\n\n  .el-col-xl-offset-13 {\n    margin-left: 54.1666666667%;\n  }\n\n  .el-col-xl-pull-13 {\n    position: relative;\n    right: 54.1666666667%;\n  }\n\n  .el-col-xl-push-13 {\n    position: relative;\n    left: 54.1666666667%;\n  }\n\n  .el-col-xl-14 {\n    width: 58.3333333333%;\n  }\n\n  .el-col-xl-offset-14 {\n    margin-left: 58.3333333333%;\n  }\n\n  .el-col-xl-pull-14 {\n    position: relative;\n    right: 58.3333333333%;\n  }\n\n  .el-col-xl-push-14 {\n    position: relative;\n    left: 58.3333333333%;\n  }\n\n  .el-col-xl-15 {\n    width: 62.5%;\n  }\n\n  .el-col-xl-offset-15 {\n    margin-left: 62.5%;\n  }\n\n  .el-col-xl-pull-15 {\n    position: relative;\n    right: 62.5%;\n  }\n\n  .el-col-xl-push-15 {\n    position: relative;\n    left: 62.5%;\n  }\n\n  .el-col-xl-16 {\n    width: 66.6666666667%;\n  }\n\n  .el-col-xl-offset-16 {\n    margin-left: 66.6666666667%;\n  }\n\n  .el-col-xl-pull-16 {\n    position: relative;\n    right: 66.6666666667%;\n  }\n\n  .el-col-xl-push-16 {\n    position: relative;\n    left: 66.6666666667%;\n  }\n\n  .el-col-xl-17 {\n    width: 70.8333333333%;\n  }\n\n  .el-col-xl-offset-17 {\n    margin-left: 70.8333333333%;\n  }\n\n  .el-col-xl-pull-17 {\n    position: relative;\n    right: 70.8333333333%;\n  }\n\n  .el-col-xl-push-17 {\n    position: relative;\n    left: 70.8333333333%;\n  }\n\n  .el-col-xl-18 {\n    width: 75%;\n  }\n\n  .el-col-xl-offset-18 {\n    margin-left: 75%;\n  }\n\n  .el-col-xl-pull-18 {\n    position: relative;\n    right: 75%;\n  }\n\n  .el-col-xl-push-18 {\n    position: relative;\n    left: 75%;\n  }\n\n  .el-col-xl-19 {\n    width: 79.1666666667%;\n  }\n\n  .el-col-xl-offset-19 {\n    margin-left: 79.1666666667%;\n  }\n\n  .el-col-xl-pull-19 {\n    position: relative;\n    right: 79.1666666667%;\n  }\n\n  .el-col-xl-push-19 {\n    position: relative;\n    left: 79.1666666667%;\n  }\n\n  .el-col-xl-20 {\n    width: 83.3333333333%;\n  }\n\n  .el-col-xl-offset-20 {\n    margin-left: 83.3333333333%;\n  }\n\n  .el-col-xl-pull-20 {\n    position: relative;\n    right: 83.3333333333%;\n  }\n\n  .el-col-xl-push-20 {\n    position: relative;\n    left: 83.3333333333%;\n  }\n\n  .el-col-xl-21 {\n    width: 87.5%;\n  }\n\n  .el-col-xl-offset-21 {\n    margin-left: 87.5%;\n  }\n\n  .el-col-xl-pull-21 {\n    position: relative;\n    right: 87.5%;\n  }\n\n  .el-col-xl-push-21 {\n    position: relative;\n    left: 87.5%;\n  }\n\n  .el-col-xl-22 {\n    width: 91.6666666667%;\n  }\n\n  .el-col-xl-offset-22 {\n    margin-left: 91.6666666667%;\n  }\n\n  .el-col-xl-pull-22 {\n    position: relative;\n    right: 91.6666666667%;\n  }\n\n  .el-col-xl-push-22 {\n    position: relative;\n    left: 91.6666666667%;\n  }\n\n  .el-col-xl-23 {\n    width: 95.8333333333%;\n  }\n\n  .el-col-xl-offset-23 {\n    margin-left: 95.8333333333%;\n  }\n\n  .el-col-xl-pull-23 {\n    position: relative;\n    right: 95.8333333333%;\n  }\n\n  .el-col-xl-push-23 {\n    position: relative;\n    left: 95.8333333333%;\n  }\n\n  .el-col-xl-24 {\n    width: 100%;\n  }\n\n  .el-col-xl-offset-24 {\n    margin-left: 100%;\n  }\n\n  .el-col-xl-pull-24 {\n    position: relative;\n    right: 100%;\n  }\n\n  .el-col-xl-push-24 {\n    position: relative;\n    left: 100%;\n  }\n}";

injectCss(css_248z$1, 'ElCol');
var ElCol = defineComponent({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      "default": 24
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var gutter = inject(ElRowSymbol, 0);
    var style = computed$1(function () {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        };
      }

      return {};
    });
    var classList = computed$1(function () {
      var ret = [];
      var pos = ['span', 'offset', 'pull', 'push'];
      pos.forEach(function (prop) {
        var size = props[prop];

        if (typeof size === 'number' && size >= 0) {
          ret.push(prop !== 'span' ? "el-col-" + prop + "-" + props[prop] : "el-col-" + props[prop]);
        }
      });
      var sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
      sizes.forEach(function (size) {
        if (typeof props[size] === 'number') {
          ret.push("el-col-" + size + "-" + props[size]);
        } else if (typeof props[size] === 'object') {
          var sizeProps = props[size];
          Object.keys(sizeProps).forEach(function (prop) {
            ret.push(prop !== 'span' ? "el-col-" + size + "-" + prop + "-" + sizeProps[prop] : "el-col-" + size + "-" + sizeProps[prop]);
          });
        }
      });
      return ret;
    });
    return function () {
      var _slots$default;

      return createVNode("div", {
        "class": ['el-col', classList.value],
        "style": style.value
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var css_248z$2 = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.el-container {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  flex-basis: auto;\n  box-sizing: border-box;\n  min-width: 0;\n}\n.el-container.is-vertical {\n  flex-direction: column;\n}";

injectCss(css_248z$2, 'ElContainer');
var ElContainer = defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      "default": 'vertical'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return createVNode("section", {
        "class": {
          'el-container': true,
          'is-vertical': props.direction === 'vertical'
        }
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var css_248z$3 = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.el-aside {\n  overflow: auto;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}";

injectCss(css_248z$3, 'ElAside');
var ElAside = defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      "default": '250px'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return createVNode("aside", {
        "class": "el-aside",
        "style": {
          width: props.width
        }
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var css_248z$4 = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-main {\n  display: block;\n  flex: 1;\n  flex-basis: auto;\n  overflow: auto;\n  box-sizing: border-box;\n  padding: 20px;\n}";

injectCss(css_248z$4, 'ElMain');
var ElMain = defineComponent({
  name: 'ElMain',
  setup: function setup(_, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    return function () {
      var _slots$default;

      return createVNode("main", mergeProps(attrs, {
        "class": "el-main"
      }), [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var css_248z$5 = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-header {\n  padding: 0 20px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}";

injectCss(css_248z$5, 'ElHeader');
var ElHeader = defineComponent({
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      "default": '60px'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    return function () {
      var _slots$default;

      return createVNode("header", {
        "class": "el-header",
        "style": {
          height: props.height
        }
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var css_248z$6 = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-footer {\n  padding: 0 20px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}";

injectCss(css_248z$6, 'ElFooter');
var ElFooter = defineComponent({
  name: 'ElFooter',
  componentName: 'ElFooter',
  props: {
    height: {
      type: String,
      "default": '60px'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    return function () {
      var _slots$default;

      return createVNode("footer", mergeProps(attrs, {
        "class": "el-footer",
        "style": {
          height: props.height
        }
      }), [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var css_248z$7 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.el-button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #FFFFFF;\n  border: 1px solid #DCDFE6;\n  border-color: #DCDFE6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button + .el-button {\n  margin-left: 10px;\n}\n.el-button.is-round {\n  padding: 12px 20px;\n}\n.el-button:hover, .el-button:focus {\n  color: #409EFF;\n  border-color: #c6e2ff;\n  background-color: #ecf5ff;\n}\n.el-button:active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n  outline: none;\n}\n.el-button::-moz-focus-inner {\n  border: 0;\n}\n.el-button [class*=el-icon-] + span {\n  margin-left: 5px;\n}\n.el-button.is-plain:hover, .el-button.is-plain:focus {\n  background: #FFFFFF;\n  border-color: #409EFF;\n  color: #409EFF;\n}\n.el-button.is-plain:active {\n  background: #FFFFFF;\n  border-color: #3a8ee6;\n  color: #3a8ee6;\n  outline: none;\n}\n\n.el-button.is-active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n}\n\n.el-button.is-disabled, .el-button.is-disabled:hover, .el-button.is-disabled:focus {\n  color: #C0C4CC;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #FFFFFF;\n  border-color: #EBEEF5;\n}\n.el-button.is-disabled.el-button--text {\n  background-color: transparent;\n}\n.el-button.is-disabled.is-plain, .el-button.is-disabled.is-plain:hover, .el-button.is-disabled.is-plain:focus {\n  background-color: #FFFFFF;\n  border-color: #EBEEF5;\n  color: #C0C4CC;\n}\n\n.el-button.is-loading {\n  position: relative;\n  pointer-events: none;\n}\n.el-button.is-loading:before {\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  border-radius: inherit;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n\n.el-button.is-round {\n  border-radius: 20px;\n  padding: 12px 23px;\n}\n\n.el-button.is-circle {\n  border-radius: 50%;\n  padding: 12px;\n}\n\n.el-button--primary {\n  color: #FFFFFF;\n  background-color: #409EFF;\n  border-color: #409EFF;\n}\n.el-button--primary:hover, .el-button--primary:focus {\n  background: #66b1ff;\n  border-color: #66b1ff;\n  color: #FFFFFF;\n}\n.el-button--primary:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--primary.is-active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFFFFF;\n}\n.el-button--primary.is-disabled, .el-button--primary.is-disabled:hover, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #a0cfff;\n  border-color: #a0cfff;\n}\n.el-button--primary.is-plain {\n  color: #409EFF;\n  background: #ecf5ff;\n  border-color: #b3d8ff;\n}\n.el-button--primary.is-plain:hover, .el-button--primary.is-plain:focus {\n  background: #409EFF;\n  border-color: #409EFF;\n  color: #FFFFFF;\n}\n.el-button--primary.is-plain:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--primary.is-plain.is-disabled, .el-button--primary.is-plain.is-disabled:hover, .el-button--primary.is-plain.is-disabled:focus, .el-button--primary.is-plain.is-disabled:active {\n  color: #8cc5ff;\n  background-color: #ecf5ff;\n  border-color: #d9ecff;\n}\n\n.el-button--success {\n  color: #FFFFFF;\n  background-color: #67C23A;\n  border-color: #67C23A;\n}\n.el-button--success:hover, .el-button--success:focus {\n  background: #85ce61;\n  border-color: #85ce61;\n  color: #FFFFFF;\n}\n.el-button--success:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--success.is-active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFFFFF;\n}\n.el-button--success.is-disabled, .el-button--success.is-disabled:hover, .el-button--success.is-disabled:focus, .el-button--success.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #b3e19d;\n  border-color: #b3e19d;\n}\n.el-button--success.is-plain {\n  color: #67C23A;\n  background: #f0f9eb;\n  border-color: #c2e7b0;\n}\n.el-button--success.is-plain:hover, .el-button--success.is-plain:focus {\n  background: #67C23A;\n  border-color: #67C23A;\n  color: #FFFFFF;\n}\n.el-button--success.is-plain:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--success.is-plain.is-disabled, .el-button--success.is-plain.is-disabled:hover, .el-button--success.is-plain.is-disabled:focus, .el-button--success.is-plain.is-disabled:active {\n  color: #a4da89;\n  background-color: #f0f9eb;\n  border-color: #e1f3d8;\n}\n\n.el-button--warning {\n  color: #FFFFFF;\n  background-color: #E6A23C;\n  border-color: #E6A23C;\n}\n.el-button--warning:hover, .el-button--warning:focus {\n  background: #ebb563;\n  border-color: #ebb563;\n  color: #FFFFFF;\n}\n.el-button--warning:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--warning.is-active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFFFFF;\n}\n.el-button--warning.is-disabled, .el-button--warning.is-disabled:hover, .el-button--warning.is-disabled:focus, .el-button--warning.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #f3d19e;\n  border-color: #f3d19e;\n}\n.el-button--warning.is-plain {\n  color: #E6A23C;\n  background: #fdf6ec;\n  border-color: #f5dab1;\n}\n.el-button--warning.is-plain:hover, .el-button--warning.is-plain:focus {\n  background: #E6A23C;\n  border-color: #E6A23C;\n  color: #FFFFFF;\n}\n.el-button--warning.is-plain:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--warning.is-plain.is-disabled, .el-button--warning.is-plain.is-disabled:hover, .el-button--warning.is-plain.is-disabled:focus, .el-button--warning.is-plain.is-disabled:active {\n  color: #f0c78a;\n  background-color: #fdf6ec;\n  border-color: #faecd8;\n}\n\n.el-button--danger {\n  color: #FFFFFF;\n  background-color: #F56C6C;\n  border-color: #F56C6C;\n}\n.el-button--danger:hover, .el-button--danger:focus {\n  background: #f78989;\n  border-color: #f78989;\n  color: #FFFFFF;\n}\n.el-button--danger:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--danger.is-active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFFFFF;\n}\n.el-button--danger.is-disabled, .el-button--danger.is-disabled:hover, .el-button--danger.is-disabled:focus, .el-button--danger.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #fab6b6;\n  border-color: #fab6b6;\n}\n.el-button--danger.is-plain {\n  color: #F56C6C;\n  background: #fef0f0;\n  border-color: #fbc4c4;\n}\n.el-button--danger.is-plain:hover, .el-button--danger.is-plain:focus {\n  background: #F56C6C;\n  border-color: #F56C6C;\n  color: #FFFFFF;\n}\n.el-button--danger.is-plain:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--danger.is-plain.is-disabled, .el-button--danger.is-plain.is-disabled:hover, .el-button--danger.is-plain.is-disabled:focus, .el-button--danger.is-plain.is-disabled:active {\n  color: #f9a7a7;\n  background-color: #fef0f0;\n  border-color: #fde2e2;\n}\n\n.el-button--info {\n  color: #FFFFFF;\n  background-color: #909399;\n  border-color: #909399;\n}\n.el-button--info:hover, .el-button--info:focus {\n  background: #a6a9ad;\n  border-color: #a6a9ad;\n  color: #FFFFFF;\n}\n.el-button--info:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--info.is-active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFFFFF;\n}\n.el-button--info.is-disabled, .el-button--info.is-disabled:hover, .el-button--info.is-disabled:focus, .el-button--info.is-disabled:active {\n  color: #FFFFFF;\n  background-color: #c8c9cc;\n  border-color: #c8c9cc;\n}\n.el-button--info.is-plain {\n  color: #909399;\n  background: #f4f4f5;\n  border-color: #d3d4d6;\n}\n.el-button--info.is-plain:hover, .el-button--info.is-plain:focus {\n  background: #909399;\n  border-color: #909399;\n  color: #FFFFFF;\n}\n.el-button--info.is-plain:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFFFFF;\n  outline: none;\n}\n.el-button--info.is-plain.is-disabled, .el-button--info.is-plain.is-disabled:hover, .el-button--info.is-plain.is-disabled:focus, .el-button--info.is-plain.is-disabled:active {\n  color: #bcbec2;\n  background-color: #f4f4f5;\n  border-color: #e9e9eb;\n}\n\n.el-button--medium {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button--medium.is-round {\n  padding: 10px 20px;\n}\n.el-button--medium.is-circle {\n  padding: 10px;\n}\n\n.el-button--small {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.el-button--small.is-round {\n  padding: 9px 15px;\n}\n.el-button--small.is-circle {\n  padding: 9px;\n}\n\n.el-button--mini {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.el-button--mini.is-round {\n  padding: 7px 15px;\n}\n.el-button--mini.is-circle {\n  padding: 7px;\n}\n\n.el-button--text {\n  border-color: transparent;\n  color: #409EFF;\n  background: transparent;\n  padding-left: 0;\n  padding-right: 0;\n}\n.el-button--text:hover, .el-button--text:focus {\n  color: #66b1ff;\n  border-color: transparent;\n  background-color: transparent;\n}\n.el-button--text:active {\n  color: #3a8ee6;\n  border-color: transparent;\n  background-color: transparent;\n}\n.el-button--text.is-disabled, .el-button--text.is-disabled:hover, .el-button--text.is-disabled:focus {\n  border-color: transparent;\n}\n\n.el-button-group {\n  display: inline-block;\n  vertical-align: middle;\n}\n.el-button-group::before,\n.el-button-group::after {\n  display: table;\n  content: \"\";\n}\n\n.el-button-group::after {\n  clear: both;\n}\n\n.el-button-group > .el-button {\n  float: left;\n  position: relative;\n}\n.el-button-group > .el-button + .el-button {\n  margin-left: 0;\n}\n.el-button-group > .el-button.is-disabled {\n  z-index: 1;\n}\n.el-button-group > .el-button:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.el-button-group > .el-button:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.el-button-group > .el-button:first-child:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.el-button-group > .el-button:first-child:last-child.is-round {\n  border-radius: 20px;\n}\n.el-button-group > .el-button:first-child:last-child.is-circle {\n  border-radius: 50%;\n}\n.el-button-group > .el-button:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.el-button-group > .el-button:not(:last-child) {\n  margin-right: -1px;\n}\n.el-button-group > .el-button:hover, .el-button-group > .el-button:focus, .el-button-group > .el-button:active {\n  z-index: 1;\n}\n.el-button-group > .el-button.is-active {\n  z-index: 1;\n}\n\n.el-button-group > .el-dropdown > .el-button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--primary:first-child {\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--primary:last-child {\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--primary:not(:first-child):not(:last-child) {\n  border-left-color: rgba(255, 255, 255, 0.5);\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--success:first-child {\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--success:last-child {\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--success:not(:first-child):not(:last-child) {\n  border-left-color: rgba(255, 255, 255, 0.5);\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--warning:first-child {\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--warning:last-child {\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--warning:not(:first-child):not(:last-child) {\n  border-left-color: rgba(255, 255, 255, 0.5);\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--danger:first-child {\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--danger:last-child {\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--danger:not(:first-child):not(:last-child) {\n  border-left-color: rgba(255, 255, 255, 0.5);\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--info:first-child {\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--info:last-child {\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--info:not(:first-child):not(:last-child) {\n  border-left-color: rgba(255, 255, 255, 0.5);\n  border-right-color: rgba(255, 255, 255, 0.5);\n}";

injectCss(css_248z$7, 'ElButton');
var ElButton = defineComponent({
  name: 'ElButton',
  props: {
    type: {
      type: String,
      "default": 'default'
    },
    size: {
      type: String
    },
    icon: {
      type: String,
      "default": ''
    },
    nativeType: {
      type: String,
      "default": 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs,
        slots = _ref.slots;
    var elForm = inject(ElFormSymbol, null);
    var elFormItem = inject(ElFormItemSymbol, null);
    var elGlobalConfig = useGlobal();
    var buttonSize = computed$1(function () {
      return props.size || (elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize) || (elGlobalConfig === null || elGlobalConfig === void 0 ? void 0 : elGlobalConfig.size);
    });
    var buttonDisabled = computed$1(function () {
      return props.disabled || (elForm === null || elForm === void 0 ? void 0 : elForm.disabled);
    }); // return {
    //   buttonSize,
    //   buttonDisabled
    // }

    return function () {
      var _slots$default;

      return createVNode("button", mergeProps(attrs, {
        "disabled": buttonDisabled.value || props.loading,
        "autofocus": props.autofocus,
        "type": props.nativeType,
        "class": ['el-button', props.type ? 'el-button--' + props.type : '', buttonSize ? 'el-button--' + buttonSize.value : '', {
          'is-disabled': buttonDisabled.value,
          'is-loading': props.loading,
          'is-plain': props.plain,
          'is-round': props.round,
          'is-circle': props.circle
        }]
      }), [props.loading && createVNode("i", {
        "class": "el-icon-loading"
      }, null), props.icon && !props.loading && createVNode("i", {
        "class": props.icon
      }, null, 2
      /* CLASS */
      ), createVNode("span", null, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      )], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      , ["disabled", "autofocus", "type"]);
    };
  }
});

var ButtonGroup = defineComponent({
  name: 'ElButtonGroup',
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;
    return function () {
      var _slots$default;

      return createVNode("div", mergeProps(attrs, {
        "class": "el-button-group"
      }), [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var css_248z$8 = "@charset \"UTF-8\";\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n@font-face {\n  font-family: \"element-icons\";\n  src: url(\"fonts/element-icons.woff\") format(\"woff\"), url(\"fonts/element-icons.ttf\") format(\"truetype\");\n  /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n  font-weight: normal;\n  font-display: \"auto\";\n  font-style: normal;\n}\n[class^=el-icon-],\n[class*=\" el-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"element-icons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: baseline;\n  display: inline-block;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.el-icon-ice-cream-round:before {\n  content: \"\";\n}\n\n.el-icon-ice-cream-square:before {\n  content: \"\";\n}\n\n.el-icon-lollipop:before {\n  content: \"\";\n}\n\n.el-icon-potato-strips:before {\n  content: \"\";\n}\n\n.el-icon-milk-tea:before {\n  content: \"\";\n}\n\n.el-icon-ice-drink:before {\n  content: \"\";\n}\n\n.el-icon-ice-tea:before {\n  content: \"\";\n}\n\n.el-icon-coffee:before {\n  content: \"\";\n}\n\n.el-icon-orange:before {\n  content: \"\";\n}\n\n.el-icon-pear:before {\n  content: \"\";\n}\n\n.el-icon-apple:before {\n  content: \"\";\n}\n\n.el-icon-cherry:before {\n  content: \"\";\n}\n\n.el-icon-watermelon:before {\n  content: \"\";\n}\n\n.el-icon-grape:before {\n  content: \"\";\n}\n\n.el-icon-refrigerator:before {\n  content: \"\";\n}\n\n.el-icon-goblet-square-full:before {\n  content: \"\";\n}\n\n.el-icon-goblet-square:before {\n  content: \"\";\n}\n\n.el-icon-goblet-full:before {\n  content: \"\";\n}\n\n.el-icon-goblet:before {\n  content: \"\";\n}\n\n.el-icon-cold-drink:before {\n  content: \"\";\n}\n\n.el-icon-coffee-cup:before {\n  content: \"\";\n}\n\n.el-icon-water-cup:before {\n  content: \"\";\n}\n\n.el-icon-hot-water:before {\n  content: \"\";\n}\n\n.el-icon-ice-cream:before {\n  content: \"\";\n}\n\n.el-icon-dessert:before {\n  content: \"\";\n}\n\n.el-icon-sugar:before {\n  content: \"\";\n}\n\n.el-icon-tableware:before {\n  content: \"\";\n}\n\n.el-icon-burger:before {\n  content: \"\";\n}\n\n.el-icon-knife-fork:before {\n  content: \"\";\n}\n\n.el-icon-fork-spoon:before {\n  content: \"\";\n}\n\n.el-icon-chicken:before {\n  content: \"\";\n}\n\n.el-icon-food:before {\n  content: \"\";\n}\n\n.el-icon-dish-1:before {\n  content: \"\";\n}\n\n.el-icon-dish:before {\n  content: \"\";\n}\n\n.el-icon-moon-night:before {\n  content: \"\";\n}\n\n.el-icon-moon:before {\n  content: \"\";\n}\n\n.el-icon-cloudy-and-sunny:before {\n  content: \"\";\n}\n\n.el-icon-partly-cloudy:before {\n  content: \"\";\n}\n\n.el-icon-cloudy:before {\n  content: \"\";\n}\n\n.el-icon-sunny:before {\n  content: \"\";\n}\n\n.el-icon-sunset:before {\n  content: \"\";\n}\n\n.el-icon-sunrise-1:before {\n  content: \"\";\n}\n\n.el-icon-sunrise:before {\n  content: \"\";\n}\n\n.el-icon-heavy-rain:before {\n  content: \"\";\n}\n\n.el-icon-lightning:before {\n  content: \"\";\n}\n\n.el-icon-light-rain:before {\n  content: \"\";\n}\n\n.el-icon-wind-power:before {\n  content: \"\";\n}\n\n.el-icon-baseball:before {\n  content: \"\";\n}\n\n.el-icon-soccer:before {\n  content: \"\";\n}\n\n.el-icon-football:before {\n  content: \"\";\n}\n\n.el-icon-basketball:before {\n  content: \"\";\n}\n\n.el-icon-ship:before {\n  content: \"\";\n}\n\n.el-icon-truck:before {\n  content: \"\";\n}\n\n.el-icon-bicycle:before {\n  content: \"\";\n}\n\n.el-icon-mobile-phone:before {\n  content: \"\";\n}\n\n.el-icon-service:before {\n  content: \"\";\n}\n\n.el-icon-key:before {\n  content: \"\";\n}\n\n.el-icon-unlock:before {\n  content: \"\";\n}\n\n.el-icon-lock:before {\n  content: \"\";\n}\n\n.el-icon-watch:before {\n  content: \"\";\n}\n\n.el-icon-watch-1:before {\n  content: \"\";\n}\n\n.el-icon-timer:before {\n  content: \"\";\n}\n\n.el-icon-alarm-clock:before {\n  content: \"\";\n}\n\n.el-icon-map-location:before {\n  content: \"\";\n}\n\n.el-icon-delete-location:before {\n  content: \"\";\n}\n\n.el-icon-add-location:before {\n  content: \"\";\n}\n\n.el-icon-location-information:before {\n  content: \"\";\n}\n\n.el-icon-location-outline:before {\n  content: \"\";\n}\n\n.el-icon-location:before {\n  content: \"\";\n}\n\n.el-icon-place:before {\n  content: \"\";\n}\n\n.el-icon-discover:before {\n  content: \"\";\n}\n\n.el-icon-first-aid-kit:before {\n  content: \"\";\n}\n\n.el-icon-trophy-1:before {\n  content: \"\";\n}\n\n.el-icon-trophy:before {\n  content: \"\";\n}\n\n.el-icon-medal:before {\n  content: \"\";\n}\n\n.el-icon-medal-1:before {\n  content: \"\";\n}\n\n.el-icon-stopwatch:before {\n  content: \"\";\n}\n\n.el-icon-mic:before {\n  content: \"\";\n}\n\n.el-icon-copy-document:before {\n  content: \"\";\n}\n\n.el-icon-full-screen:before {\n  content: \"\";\n}\n\n.el-icon-switch-button:before {\n  content: \"\";\n}\n\n.el-icon-aim:before {\n  content: \"\";\n}\n\n.el-icon-crop:before {\n  content: \"\";\n}\n\n.el-icon-odometer:before {\n  content: \"\";\n}\n\n.el-icon-time:before {\n  content: \"\";\n}\n\n.el-icon-bangzhu:before {\n  content: \"\";\n}\n\n.el-icon-close-notification:before {\n  content: \"\";\n}\n\n.el-icon-microphone:before {\n  content: \"\";\n}\n\n.el-icon-turn-off-microphone:before {\n  content: \"\";\n}\n\n.el-icon-position:before {\n  content: \"\";\n}\n\n.el-icon-postcard:before {\n  content: \"\";\n}\n\n.el-icon-message:before {\n  content: \"\";\n}\n\n.el-icon-chat-line-square:before {\n  content: \"\";\n}\n\n.el-icon-chat-dot-square:before {\n  content: \"\";\n}\n\n.el-icon-chat-dot-round:before {\n  content: \"\";\n}\n\n.el-icon-chat-square:before {\n  content: \"\";\n}\n\n.el-icon-chat-line-round:before {\n  content: \"\";\n}\n\n.el-icon-chat-round:before {\n  content: \"\";\n}\n\n.el-icon-set-up:before {\n  content: \"\";\n}\n\n.el-icon-turn-off:before {\n  content: \"\";\n}\n\n.el-icon-open:before {\n  content: \"\";\n}\n\n.el-icon-connection:before {\n  content: \"\";\n}\n\n.el-icon-link:before {\n  content: \"\";\n}\n\n.el-icon-cpu:before {\n  content: \"\";\n}\n\n.el-icon-thumb:before {\n  content: \"\";\n}\n\n.el-icon-female:before {\n  content: \"\";\n}\n\n.el-icon-male:before {\n  content: \"\";\n}\n\n.el-icon-guide:before {\n  content: \"\";\n}\n\n.el-icon-news:before {\n  content: \"\";\n}\n\n.el-icon-price-tag:before {\n  content: \"\";\n}\n\n.el-icon-discount:before {\n  content: \"\";\n}\n\n.el-icon-wallet:before {\n  content: \"\";\n}\n\n.el-icon-coin:before {\n  content: \"\";\n}\n\n.el-icon-money:before {\n  content: \"\";\n}\n\n.el-icon-bank-card:before {\n  content: \"\";\n}\n\n.el-icon-box:before {\n  content: \"\";\n}\n\n.el-icon-present:before {\n  content: \"\";\n}\n\n.el-icon-sell:before {\n  content: \"\";\n}\n\n.el-icon-sold-out:before {\n  content: \"\";\n}\n\n.el-icon-shopping-bag-2:before {\n  content: \"\";\n}\n\n.el-icon-shopping-bag-1:before {\n  content: \"\";\n}\n\n.el-icon-shopping-cart-2:before {\n  content: \"\";\n}\n\n.el-icon-shopping-cart-1:before {\n  content: \"\";\n}\n\n.el-icon-shopping-cart-full:before {\n  content: \"\";\n}\n\n.el-icon-smoking:before {\n  content: \"\";\n}\n\n.el-icon-no-smoking:before {\n  content: \"\";\n}\n\n.el-icon-house:before {\n  content: \"\";\n}\n\n.el-icon-table-lamp:before {\n  content: \"\";\n}\n\n.el-icon-school:before {\n  content: \"\";\n}\n\n.el-icon-office-building:before {\n  content: \"\";\n}\n\n.el-icon-toilet-paper:before {\n  content: \"\";\n}\n\n.el-icon-notebook-2:before {\n  content: \"\";\n}\n\n.el-icon-notebook-1:before {\n  content: \"\";\n}\n\n.el-icon-files:before {\n  content: \"\";\n}\n\n.el-icon-collection:before {\n  content: \"\";\n}\n\n.el-icon-receiving:before {\n  content: \"\";\n}\n\n.el-icon-suitcase-1:before {\n  content: \"\";\n}\n\n.el-icon-suitcase:before {\n  content: \"\";\n}\n\n.el-icon-film:before {\n  content: \"\";\n}\n\n.el-icon-collection-tag:before {\n  content: \"\";\n}\n\n.el-icon-data-analysis:before {\n  content: \"\";\n}\n\n.el-icon-pie-chart:before {\n  content: \"\";\n}\n\n.el-icon-data-board:before {\n  content: \"\";\n}\n\n.el-icon-data-line:before {\n  content: \"\";\n}\n\n.el-icon-reading:before {\n  content: \"\";\n}\n\n.el-icon-magic-stick:before {\n  content: \"\";\n}\n\n.el-icon-coordinate:before {\n  content: \"\";\n}\n\n.el-icon-mouse:before {\n  content: \"\";\n}\n\n.el-icon-brush:before {\n  content: \"\";\n}\n\n.el-icon-headset:before {\n  content: \"\";\n}\n\n.el-icon-umbrella:before {\n  content: \"\";\n}\n\n.el-icon-scissors:before {\n  content: \"\";\n}\n\n.el-icon-mobile:before {\n  content: \"\";\n}\n\n.el-icon-attract:before {\n  content: \"\";\n}\n\n.el-icon-monitor:before {\n  content: \"\";\n}\n\n.el-icon-search:before {\n  content: \"\";\n}\n\n.el-icon-takeaway-box:before {\n  content: \"\";\n}\n\n.el-icon-paperclip:before {\n  content: \"\";\n}\n\n.el-icon-printer:before {\n  content: \"\";\n}\n\n.el-icon-document-add:before {\n  content: \"\";\n}\n\n.el-icon-document:before {\n  content: \"\";\n}\n\n.el-icon-document-checked:before {\n  content: \"\";\n}\n\n.el-icon-document-copy:before {\n  content: \"\";\n}\n\n.el-icon-document-delete:before {\n  content: \"\";\n}\n\n.el-icon-document-remove:before {\n  content: \"\";\n}\n\n.el-icon-tickets:before {\n  content: \"\";\n}\n\n.el-icon-folder-checked:before {\n  content: \"\";\n}\n\n.el-icon-folder-delete:before {\n  content: \"\";\n}\n\n.el-icon-folder-remove:before {\n  content: \"\";\n}\n\n.el-icon-folder-add:before {\n  content: \"\";\n}\n\n.el-icon-folder-opened:before {\n  content: \"\";\n}\n\n.el-icon-folder:before {\n  content: \"\";\n}\n\n.el-icon-edit-outline:before {\n  content: \"\";\n}\n\n.el-icon-edit:before {\n  content: \"\";\n}\n\n.el-icon-date:before {\n  content: \"\";\n}\n\n.el-icon-c-scale-to-original:before {\n  content: \"\";\n}\n\n.el-icon-view:before {\n  content: \"\";\n}\n\n.el-icon-loading:before {\n  content: \"\";\n}\n\n.el-icon-rank:before {\n  content: \"\";\n}\n\n.el-icon-sort-down:before {\n  content: \"\";\n}\n\n.el-icon-sort-up:before {\n  content: \"\";\n}\n\n.el-icon-sort:before {\n  content: \"\";\n}\n\n.el-icon-finished:before {\n  content: \"\";\n}\n\n.el-icon-refresh-left:before {\n  content: \"\";\n}\n\n.el-icon-refresh-right:before {\n  content: \"\";\n}\n\n.el-icon-refresh:before {\n  content: \"\";\n}\n\n.el-icon-video-play:before {\n  content: \"\";\n}\n\n.el-icon-video-pause:before {\n  content: \"\";\n}\n\n.el-icon-d-arrow-right:before {\n  content: \"\";\n}\n\n.el-icon-d-arrow-left:before {\n  content: \"\";\n}\n\n.el-icon-arrow-up:before {\n  content: \"\";\n}\n\n.el-icon-arrow-down:before {\n  content: \"\";\n}\n\n.el-icon-arrow-right:before {\n  content: \"\";\n}\n\n.el-icon-arrow-left:before {\n  content: \"\";\n}\n\n.el-icon-top-right:before {\n  content: \"\";\n}\n\n.el-icon-top-left:before {\n  content: \"\";\n}\n\n.el-icon-top:before {\n  content: \"\";\n}\n\n.el-icon-bottom:before {\n  content: \"\";\n}\n\n.el-icon-right:before {\n  content: \"\";\n}\n\n.el-icon-back:before {\n  content: \"\";\n}\n\n.el-icon-bottom-right:before {\n  content: \"\";\n}\n\n.el-icon-bottom-left:before {\n  content: \"\";\n}\n\n.el-icon-caret-top:before {\n  content: \"\";\n}\n\n.el-icon-caret-bottom:before {\n  content: \"\";\n}\n\n.el-icon-caret-right:before {\n  content: \"\";\n}\n\n.el-icon-caret-left:before {\n  content: \"\";\n}\n\n.el-icon-d-caret:before {\n  content: \"\";\n}\n\n.el-icon-share:before {\n  content: \"\";\n}\n\n.el-icon-menu:before {\n  content: \"\";\n}\n\n.el-icon-s-grid:before {\n  content: \"\";\n}\n\n.el-icon-s-check:before {\n  content: \"\";\n}\n\n.el-icon-s-data:before {\n  content: \"\";\n}\n\n.el-icon-s-opportunity:before {\n  content: \"\";\n}\n\n.el-icon-s-custom:before {\n  content: \"\";\n}\n\n.el-icon-s-claim:before {\n  content: \"\";\n}\n\n.el-icon-s-finance:before {\n  content: \"\";\n}\n\n.el-icon-s-comment:before {\n  content: \"\";\n}\n\n.el-icon-s-flag:before {\n  content: \"\";\n}\n\n.el-icon-s-marketing:before {\n  content: \"\";\n}\n\n.el-icon-s-shop:before {\n  content: \"\";\n}\n\n.el-icon-s-open:before {\n  content: \"\";\n}\n\n.el-icon-s-management:before {\n  content: \"\";\n}\n\n.el-icon-s-ticket:before {\n  content: \"\";\n}\n\n.el-icon-s-release:before {\n  content: \"\";\n}\n\n.el-icon-s-home:before {\n  content: \"\";\n}\n\n.el-icon-s-promotion:before {\n  content: \"\";\n}\n\n.el-icon-s-operation:before {\n  content: \"\";\n}\n\n.el-icon-s-unfold:before {\n  content: \"\";\n}\n\n.el-icon-s-fold:before {\n  content: \"\";\n}\n\n.el-icon-s-platform:before {\n  content: \"\";\n}\n\n.el-icon-s-order:before {\n  content: \"\";\n}\n\n.el-icon-s-cooperation:before {\n  content: \"\";\n}\n\n.el-icon-bell:before {\n  content: \"\";\n}\n\n.el-icon-message-solid:before {\n  content: \"\";\n}\n\n.el-icon-video-camera:before {\n  content: \"\";\n}\n\n.el-icon-video-camera-solid:before {\n  content: \"\";\n}\n\n.el-icon-camera:before {\n  content: \"\";\n}\n\n.el-icon-camera-solid:before {\n  content: \"\";\n}\n\n.el-icon-download:before {\n  content: \"\";\n}\n\n.el-icon-upload2:before {\n  content: \"\";\n}\n\n.el-icon-upload:before {\n  content: \"\";\n}\n\n.el-icon-picture-outline-round:before {\n  content: \"\";\n}\n\n.el-icon-picture-outline:before {\n  content: \"\";\n}\n\n.el-icon-picture:before {\n  content: \"\";\n}\n\n.el-icon-close:before {\n  content: \"\";\n}\n\n.el-icon-check:before {\n  content: \"\";\n}\n\n.el-icon-plus:before {\n  content: \"\";\n}\n\n.el-icon-minus:before {\n  content: \"\";\n}\n\n.el-icon-help:before {\n  content: \"\";\n}\n\n.el-icon-s-help:before {\n  content: \"\";\n}\n\n.el-icon-circle-close:before {\n  content: \"\";\n}\n\n.el-icon-circle-check:before {\n  content: \"\";\n}\n\n.el-icon-circle-plus-outline:before {\n  content: \"\";\n}\n\n.el-icon-remove-outline:before {\n  content: \"\";\n}\n\n.el-icon-zoom-out:before {\n  content: \"\";\n}\n\n.el-icon-zoom-in:before {\n  content: \"\";\n}\n\n.el-icon-error:before {\n  content: \"\";\n}\n\n.el-icon-success:before {\n  content: \"\";\n}\n\n.el-icon-circle-plus:before {\n  content: \"\";\n}\n\n.el-icon-remove:before {\n  content: \"\";\n}\n\n.el-icon-info:before {\n  content: \"\";\n}\n\n.el-icon-question:before {\n  content: \"\";\n}\n\n.el-icon-warning-outline:before {\n  content: \"\";\n}\n\n.el-icon-warning:before {\n  content: \"\";\n}\n\n.el-icon-goods:before {\n  content: \"\";\n}\n\n.el-icon-s-goods:before {\n  content: \"\";\n}\n\n.el-icon-star-off:before {\n  content: \"\";\n}\n\n.el-icon-star-on:before {\n  content: \"\";\n}\n\n.el-icon-more-outline:before {\n  content: \"\";\n}\n\n.el-icon-more:before {\n  content: \"\";\n}\n\n.el-icon-phone-outline:before {\n  content: \"\";\n}\n\n.el-icon-phone:before {\n  content: \"\";\n}\n\n.el-icon-user:before {\n  content: \"\";\n}\n\n.el-icon-user-solid:before {\n  content: \"\";\n}\n\n.el-icon-setting:before {\n  content: \"\";\n}\n\n.el-icon-s-tools:before {\n  content: \"\";\n}\n\n.el-icon-delete:before {\n  content: \"\";\n}\n\n.el-icon-delete-solid:before {\n  content: \"\";\n}\n\n.el-icon-eleme:before {\n  content: \"\";\n}\n\n.el-icon-platform-eleme:before {\n  content: \"\";\n}\n\n.el-icon-loading {\n  -webkit-animation: rotating 2s linear infinite;\n          animation: rotating 2s linear infinite;\n}\n\n.el-icon--right {\n  margin-left: 5px;\n}\n\n.el-icon--left {\n  margin-right: 5px;\n}\n\n@-webkit-keyframes rotating {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n\n@keyframes rotating {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}";

injectCss(css_248z$8, 'ElIcon');
var Icon = defineComponent({
  name: 'ElIcon',
  props: {
    name: String
  },
  setup: function setup(props) {
    return function () {
      return createVNode("i", {
        "class": "el-icon-" + props.name
      }, null, 2
      /* CLASS */
      );
    };
  }
});

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var id = 0;
var PREFIX = Math.ceil(Math.random() * 8999 + 1000).toString();
function uniqueId(prefix) {
  var nextId = "" + PREFIX + ++id;
  return prefix ? "" + prefix + nextId : nextId;
}

// An event handler can take an optional event argument

var Emitter = /*#__PURE__*/function () {
  function Emitter(prefix) {
    if (prefix === void 0) {
      prefix = uniqueId();
    }

    this.prefix = '';
    this.events = new Map();
    this.prefix = prefix;
  }

  var _proto = Emitter.prototype;

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

  _proto.emit = function emit(type) {
    for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }

    var name = this.prefix + "-" + type;
    (this.events.get(name) || []).slice().map(function (handler) {
      handler.apply(void 0, arg);
    });
  };

  return Emitter;
}();

var MenuEmitterSymbol = Symbol('MenuEmitter');
var MenuDataSymbol = Symbol('MenuData');
var MenuConfigSymbol = Symbol('MenuConfig');
function findMenuData(id, chlidren) {
  for (var _iterator = _createForOfIteratorHelperLoose(chlidren), _step; !(_step = _iterator()).done;) {
    var item = _step.value;

    if (item.id === id) {
      return item;
    }

    if (item.children && item.children.length > 0) {
      var ret = findMenuData(id, item.children);

      if (ret) {
        return ret;
      }
    }
  }

  return null;
}
function recursiveMenus(chlidren, func) {
  chlidren.forEach(function (item) {
    func(item);

    if (item.children && item.children.length > 0) {
      recursiveMenus(item.children, func);
    }
  });
}
function useMenu(id, isRoot) {
  if (isRoot === void 0) {
    isRoot = false;
  }

  var _ref = isRoot ? {} : inject(MenuDataSymbol) || {},
      parentData = _ref.parentData,
      parentActions = _ref.parentActions;

  var emitter = isRoot ? new Emitter() : inject(MenuEmitterSymbol);
  var config = inject(MenuConfigSymbol);
  var data = reactive({
    id: id,
    isOwnActive: false,
    isOwnOpen: false,
    isActive: false,
    isOpen: false,
    deep: parentData ? parentData.deep + 1 : 0,
    children: []
  });
  var isChildActive = computed$1(function () {
    return data.children.some(function (item) {
      return item.isActive;
    });
  });
  var isChildOpen = computed$1(function () {
    return data.children.some(function (item) {
      return item.isOpen;
    });
  });
  watch(function () {
    return data.isOwnActive || isChildActive.value || false;
  }, function (curr) {
    return data.isActive = curr;
  });
  watch(function () {
    return data.isOwnOpen || isChildOpen.value || false;
  }, function (curr) {
    return data.isOpen = curr;
  });
  onMounted(function () {
    parentActions === null || parentActions === void 0 ? void 0 : parentActions.addChild(data);
  });
  onBeforeUnmount(function () {
    parentActions === null || parentActions === void 0 ? void 0 : parentActions.removeChild(id);
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
        var index = data.children.findIndex(function (item) {
          return item.id === removeId;
        });

        if (index >= 0) {
          data.children.splice(index, 1);
        }
      }
    }
  });
  provide(MenuEmitterSymbol, emitter); // const actions = {
  //   toggleSelect(value: boolean) {
  //     data.isOwnActive = value
  //     if (data.children.length > 0) {
  //       data.isOwnOpen = value
  //     }
  //     if (value) {
  //     }
  //   },
  //   toggleOpen(value: boolean) {
  //     if (!value) {
  //       foreachChildren(data.children, item => (item.isOwnOpen = value))
  //     }
  //     data.isOwnOpen = value
  //   }
  // }

  return {
    data: data,
    config: config,
    emitter: emitter
  };
}

var css_248z$9 = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.fade-in-linear-enter-active,\n.fade-in-linear-leave-active {\n  transition: opacity 200ms linear;\n}\n\n.fade-in-linear-enter,\n.fade-in-linear-leave,\n.fade-in-linear-leave-active {\n  opacity: 0;\n}\n\n.el-fade-in-linear-enter-active,\n.el-fade-in-linear-leave-active {\n  transition: opacity 200ms linear;\n}\n\n.el-fade-in-linear-enter,\n.el-fade-in-linear-leave,\n.el-fade-in-linear-leave-active {\n  opacity: 0;\n}\n\n.el-fade-in-enter-active,\n.el-fade-in-leave-active {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.el-fade-in-enter,\n.el-fade-in-leave-active {\n  opacity: 0;\n}\n\n.el-zoom-in-center-enter-active,\n.el-zoom-in-center-leave-active {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.el-zoom-in-center-enter,\n.el-zoom-in-center-leave-active {\n  opacity: 0;\n  transform: scaleX(0);\n}\n\n.el-zoom-in-top-enter-active,\n.el-zoom-in-top-leave-active {\n  opacity: 1;\n  transform: scaleY(1);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transform-origin: center top;\n}\n\n.el-zoom-in-top-enter,\n.el-zoom-in-top-leave-active {\n  opacity: 0;\n  transform: scaleY(0);\n}\n\n.el-zoom-in-bottom-enter-active,\n.el-zoom-in-bottom-leave-active {\n  opacity: 1;\n  transform: scaleY(1);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transform-origin: center bottom;\n}\n\n.el-zoom-in-bottom-enter,\n.el-zoom-in-bottom-leave-active {\n  opacity: 0;\n  transform: scaleY(0);\n}\n\n.el-zoom-in-left-enter-active,\n.el-zoom-in-left-leave-active {\n  opacity: 1;\n  transform: scale(1, 1);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transform-origin: top left;\n}\n\n.el-zoom-in-left-enter,\n.el-zoom-in-left-leave-active {\n  opacity: 0;\n  transform: scale(0.45, 0.45);\n}\n\n.collapse-transition {\n  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;\n}\n\n.horizontal-collapse-transition {\n  transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;\n}\n\n.el-list-enter-active,\n.el-list-leave-active {\n  transition: all 1s;\n}\n\n.el-list-enter,\n.el-list-leave-active {\n  opacity: 0;\n  transform: translateY(-30px);\n}\n\n.el-opacity-transition {\n  transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);\n}\n\n.el-menu {\n  border-right: solid 1px #e6e6e6;\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding-left: 0;\n  background-color: #FFFFFF;\n}\n.el-menu::before,\n.el-menu::after {\n  display: table;\n  content: \"\";\n}\n\n.el-menu::after {\n  clear: both;\n}\n\n.el-menu.el-menu--horizontal {\n  border-bottom: solid 1px #e6e6e6;\n}\n.el-menu--horizontal {\n  border-right: none;\n}\n.el-menu--horizontal > .el-menu-item {\n  float: left;\n  height: 60px;\n  line-height: 60px;\n  margin: 0;\n  border-bottom: 2px solid transparent;\n  color: #909399;\n}\n.el-menu--horizontal > .el-menu-item a,\n.el-menu--horizontal > .el-menu-item a:hover {\n  color: inherit;\n}\n.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {\n  background-color: #fff;\n}\n.el-menu--horizontal > .el-submenu {\n  float: left;\n}\n.el-menu--horizontal > .el-submenu:focus, .el-menu--horizontal > .el-submenu:hover {\n  outline: none;\n}\n.el-menu--horizontal > .el-submenu:focus .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title {\n  color: #303133;\n}\n.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {\n  border-bottom: 2px solid #409EFF;\n  color: #303133;\n}\n.el-menu--horizontal > .el-submenu .el-submenu__title {\n  height: 60px;\n  line-height: 60px;\n  border-bottom: 2px solid transparent;\n  color: #909399;\n}\n.el-menu--horizontal > .el-submenu .el-submenu__title:hover {\n  background-color: #fff;\n}\n.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {\n  position: static;\n  vertical-align: middle;\n  margin-left: 8px;\n  margin-top: -3px;\n}\n.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {\n  background-color: #FFFFFF;\n  float: none;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 10px;\n  color: #909399;\n}\n.el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {\n  color: #303133;\n}\n.el-menu--horizontal .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {\n  outline: none;\n  color: #303133;\n}\n.el-menu--horizontal > .el-menu-item.is-active {\n  border-bottom: 2px solid #409EFF;\n  color: #303133;\n}\n\n.el-menu--collapse {\n  width: 64px;\n}\n.el-menu--collapse > .el-menu-item [class^=el-icon-],\n.el-menu--collapse > .el-submenu > .el-submenu__title [class^=el-icon-] {\n  margin: 0;\n  vertical-align: middle;\n  width: 24px;\n  text-align: center;\n}\n.el-menu--collapse > .el-menu-item .el-submenu__icon-arrow,\n.el-menu--collapse > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {\n  display: none;\n}\n.el-menu--collapse > .el-menu-item span,\n.el-menu--collapse > .el-submenu > .el-submenu__title span {\n  height: 0;\n  width: 0;\n  overflow: hidden;\n  visibility: hidden;\n  display: inline-block;\n}\n.el-menu--collapse > .el-menu-item.is-active i {\n  color: inherit;\n}\n.el-menu--collapse .el-menu .el-submenu {\n  min-width: 200px;\n}\n.el-menu--collapse .el-submenu {\n  position: relative;\n}\n.el-menu--collapse .el-submenu .el-menu {\n  position: absolute;\n  margin-left: 5px;\n  top: 0;\n  left: 100%;\n  z-index: 10;\n  border: 1px solid #E4E7ED;\n  border-radius: 2px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.el-menu--collapse .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {\n  transform: none;\n}\n\n.el-menu--popup {\n  z-index: 100;\n  min-width: 200px;\n  border: none;\n  padding: 5px 0;\n  border-radius: 2px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.el-menu--popup-bottom-start {\n  margin-top: 5px;\n}\n.el-menu--popup-right-start {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.el-menu-item {\n  height: 56px;\n  line-height: 56px;\n  font-size: 14px;\n  color: #303133;\n  padding: 0 20px;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  transition: border-color 0.3s, background-color 0.3s, color 0.3s;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.el-menu-item * {\n  vertical-align: middle;\n}\n.el-menu-item i {\n  color: #909399;\n}\n.el-menu-item:hover, .el-menu-item:focus {\n  outline: none;\n  background-color: #ecf5ff;\n}\n.el-menu-item.is-disabled {\n  opacity: 0.25;\n  cursor: not-allowed;\n  background: none !important;\n}\n\n.el-menu-item [class^=el-icon-] {\n  margin-right: 5px;\n  width: 24px;\n  text-align: center;\n  font-size: 18px;\n  vertical-align: middle;\n}\n.el-menu-item.is-active {\n  color: #409EFF;\n}\n.el-menu-item.is-active i {\n  color: inherit;\n}\n\n.el-submenu {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\n.el-submenu__title {\n  height: 56px;\n  line-height: 56px;\n  font-size: 14px;\n  color: #303133;\n  padding: 0 20px;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  transition: border-color 0.3s, background-color 0.3s, color 0.3s;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.el-submenu__title * {\n  vertical-align: middle;\n}\n.el-submenu__title i {\n  color: #909399;\n}\n.el-submenu__title:hover, .el-submenu__title:focus {\n  outline: none;\n  background-color: #ecf5ff;\n}\n.el-submenu__title.is-disabled {\n  opacity: 0.25;\n  cursor: not-allowed;\n  background: none !important;\n}\n\n.el-submenu__title:hover {\n  background-color: #ecf5ff;\n}\n\n.el-submenu .el-menu {\n  border: none;\n}\n.el-submenu .el-menu-item {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 45px;\n  min-width: 200px;\n}\n.el-submenu__icon-arrow {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -7px;\n  transition: transform 0.3s;\n  font-size: 12px;\n}\n\n.el-submenu.is-active .el-submenu__title {\n  border-bottom-color: #409EFF;\n}\n\n.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {\n  transform: rotateZ(180deg);\n}\n\n.el-submenu.is-disabled .el-submenu__title,\n.el-submenu.is-disabled .el-menu-item {\n  opacity: 0.25;\n  cursor: not-allowed;\n  background: none !important;\n}\n\n.el-submenu [class^=el-icon-] {\n  vertical-align: middle;\n  margin-right: 5px;\n  width: 24px;\n  text-align: center;\n  font-size: 18px;\n}\n\n.el-menu-item-group > ul {\n  padding: 0;\n}\n.el-menu-item-group__title {\n  padding: 7px 0 7px 20px;\n  line-height: normal;\n  font-size: 12px;\n  color: #909399;\n}\n\n.horizontal-collapse-transition .el-submenu__title .el-submenu__icon-arrow {\n  transition: 0.2s;\n  opacity: 0;\n}\n\n.collapse-enter-from {\n  max-height: 0;\n}\n\n.collapse-enter-active {\n  overflow: hidden;\n  transition: max-height 2s;\n}\n\n.collapse-enter-to {\n  max-height: 200vh;\n}";

injectCss(css_248z$9, 'ElMenu');
var Menu = defineComponent({
  name: 'ElMenu',
  props: {
    mode: {
      type: String,
      "default": 'horizontal'
    },
    trigger: {
      type: String,
      "default": 'hover'
    },
    collapse: {
      type: Boolean,
      "default": false
    },
    textColor: {
      type: String,
      "default": ''
    },
    activeTextColor: {
      type: String,
      "default": ''
    },
    backgroundColor: {
      type: String,
      "default": ''
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;
    var id = Symbol('ElMenu');
    var config = reactive({
      mode: props.mode,
      trigger: props.trigger,
      collapse: props.collapse,
      textColor: props.textColor,
      activeTextColor: props.activeTextColor,
      backgroundColor: props.backgroundColor,
      isPopup: props.mode === 'horizontal' || !!(props.mode === 'vertical' && props.collapse)
    });
    provide(MenuConfigSymbol, config);

    var _useMenu = useMenu(id, true),
        data = _useMenu.data,
        emitter = _useMenu.emitter;

    emitter.on('select', function (id) {
      recursiveMenus(data.children, function (item) {
        item.isOwnActive = item.id === id;
      });
    });
    emitter.on('open', function (id) {
      var targetMenu = findMenuData(id, data.children);

      if (targetMenu) {
        targetMenu.isOwnOpen = true;
      }
    });
    emitter.on('close', function (id) {
      var targetMenu = findMenuData(id, data.children);

      if (targetMenu) {
        recursiveMenus(targetMenu.children, function (item) {
          item.isOwnOpen = false;
        });
        targetMenu.isOwnOpen = false;
      }
    });
    onMounted(function () {
      setTimeout(function () {// state.backgroundColor = 'red';
      }, 5000);
    });
    return function () {
      var _slots$default;

      return createVNode("ul", {
        "role": "menubar",
        "style": {
          backgroundColor: props.backgroundColor || ''
        },
        "class": {
          'el-menu': true,
          'el-menu--horizontal': props.mode === 'horizontal',
          'el-menu--collapse': props.collapse
        }
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var MenuItem = defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var id = Symbol("ElMenuItem-" + uniqueId());

    var _useMenu = useMenu(id),
        data = _useMenu.data,
        emitter = _useMenu.emitter;

    var handleClick = function handleClick() {
      emitter === null || emitter === void 0 ? void 0 : emitter.emit('select', id);
    };

    return function () {
      var _slots$default, _slots$title;

      return createVNode("li", {
        "role": "menuitem",
        "tabindex": -1,
        "class": {
          'el-menu-item': true,
          'is-active': data.isActive,
          'is-disabled': false
        },
        "onClick": handleClick
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      , ["tabindex", "onClick"]);
    };
  }
});

var css_248z$a = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-popper {\n  position: absolute;\n  display: none;\n}\n.el-popper[data-show] {\n  display: block;\n}\n.el-popper .popper__arrow,\n.el-popper .popper__arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.el-popper .popper__arrow {\n  border-width: 6px;\n  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n          filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n}\n.el-popper .popper__arrow::after {\n  content: \" \";\n  border-width: 6px;\n}\n.el-popper[x-placement^=top] {\n  margin-bottom: 12px;\n}\n.el-popper[x-placement^=top] .popper__arrow {\n  bottom: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-color: #EBEEF5;\n  border-bottom-width: 0;\n}\n.el-popper[x-placement^=top] .popper__arrow::after {\n  bottom: 1px;\n  margin-left: -6px;\n  border-top-color: #FFFFFF;\n  border-bottom-width: 0;\n}\n.el-popper[x-placement^=bottom] {\n  margin-top: 12px;\n}\n.el-popper[x-placement^=bottom] .popper__arrow {\n  top: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-width: 0;\n  border-bottom-color: #EBEEF5;\n}\n.el-popper[x-placement^=bottom] .popper__arrow::after {\n  top: 1px;\n  margin-left: -6px;\n  border-top-width: 0;\n  border-bottom-color: #FFFFFF;\n}\n.el-popper[x-placement^=right] {\n  margin-left: 12px;\n}\n.el-popper[x-placement^=right] .popper__arrow {\n  top: 50%;\n  left: -6px;\n  margin-bottom: 3px;\n  border-right-color: #EBEEF5;\n  border-left-width: 0;\n}\n.el-popper[x-placement^=right] .popper__arrow::after {\n  bottom: -6px;\n  left: 1px;\n  border-right-color: #FFFFFF;\n  border-left-width: 0;\n}\n.el-popper[x-placement^=left] {\n  margin-right: 12px;\n}\n.el-popper[x-placement^=left] .popper__arrow {\n  top: 50%;\n  right: -6px;\n  margin-bottom: 3px;\n  border-right-width: 0;\n  border-left-color: #EBEEF5;\n}\n.el-popper[x-placement^=left] .popper__arrow::after {\n  right: 1px;\n  bottom: -6px;\n  margin-left: -6px;\n  border-right-width: 0;\n  border-left-color: #FFFFFF;\n}";

injectCss(css_248z$a, 'ElPopper');
var PopperSymbol = Symbol('Popper');
function usePopper(referenceElRef, popperClass, options) {
  var _ref = options || {},
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? [] : _ref$modifiers,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy;

  var popperEl = createEl(uniqueId('el-popper'), normalizeClass$1(['el-popper', popperClass]));
  var popper = ref();
  var hideTimer = ref();
  var id = Symbol('usePopper');
  var state = reactive({
    isActive: false,
    children: []
  });
  var hasChildOpened = computed$1(function () {
    return state.children.length > 0;
  });
  var isOpen = computed$1(function () {
    return state.isActive || hasChildOpened.value;
  });
  var injectData = reactive({
    actions: {
      add: function add(id) {
        if (state.children.indexOf(id) === -1) {
          state.children.push(id);
        }
      },
      remove: function remove(id) {
        var menuIndex = state.children.indexOf(id);

        if (menuIndex >= 0) {
          state.children.splice(menuIndex, 1);
        }
      }
    }
  });
  watch(referenceElRef, function (referenceEl) {
    if (referenceEl) {
      popper.value = createPopper(referenceEl, popperEl, {
        placement: placement,
        modifiers: modifiers,
        strategy: strategy
      });
      var showEvents = ['mouseenter', 'focus'];
      var hideEvents = ['mouseleave', 'blur'];
      showEvents.forEach(function (event) {
        if (trigger === 'click' && event === 'mouseenter') {
          referenceEl.addEventListener('click', function () {
            state.isActive = true;
          });
        } else {
          referenceEl.addEventListener(event, function () {
            state.isActive = true;
          });
        }

        popperEl.addEventListener(event, function () {
          state.isActive = true;
        });
      });
      hideEvents.forEach(function (event) {
        referenceEl.addEventListener(event, function () {
          state.isActive = false;
        });
        popperEl.addEventListener(event, function () {
          state.isActive = false;
        });
      });
    } else {
      var _popper$value;

      (_popper$value = popper.value) === null || _popper$value === void 0 ? void 0 : _popper$value.destroy();
      popper.value = undefined;
    }
  });

  var _ref2 = inject(PopperSymbol) || {},
      actions = _ref2.actions;

  watchEffect(function () {
    console.log('isActive:' + state.isActive);
    console.log('children:' + state.children.length);
  });
  watch(isOpen, function (isOpen) {
    console.log(isOpen);

    if (isOpen) {
      var _popper$value2;

      clearTimeout(hideTimer.value);
      (_popper$value2 = popper.value) === null || _popper$value2 === void 0 ? void 0 : _popper$value2.update();
      popperEl.setAttribute('data-show', 'true');
      actions === null || actions === void 0 ? void 0 : actions.add(id);
    } else {
      hideTimer.value = window.setTimeout(function () {
        popperEl.removeAttribute('data-show');
        actions === null || actions === void 0 ? void 0 : actions.remove(id);
      }, 200);
    }
  });
  onBeforeUnmount(function () {
    if (popper.value) {
      popper.value.destroy();
      popper.value = undefined;
    }

    actions === null || actions === void 0 ? void 0 : actions.remove(id);
    removeEl(popperEl);
  });
  provide(PopperSymbol, injectData);
  return {
    teleportId: popperEl.id,
    popper: popper
  };
}

var PopperInner = defineComponent({
  props: {
    rootElRef: {
      type: Object,
      required: true
    }
  },
  setup: function setup(_ref, _ref2) {
    var rootElRef = _ref.rootElRef;
    var slots = _ref2.slots,
        attrs = _ref2.attrs;
    onMounted(function () {
      var ctx = getCurrentInstance();

      if (ctx === null || ctx === void 0 ? void 0 : ctx.vnode.el) {
        rootElRef.value = ctx.vnode.el.nextElementSibling;
      }
    });
    return function () {
      return slots["default"] ? slots["default"]() : createVNode("span", null, null);
    };
  }
});
var Popper = defineComponent({
  name: 'ElPopper',
  props: {
    popperClass: {
      type: String,
      "default": ''
    },
    trigger: {
      type: String,
      "default": 'click'
    },
    placement: {
      type: String,
      "default": 'top'
    },
    modifiers: {
      type: Array,
      "default": []
    },
    strategy: {
      type: String,
      "default": 'bottom'
    },
    render: {
      type: Function,
      "default": function _default() {
        return createVNode(Fragment, null, null, 64
        /* STABLE_FRAGMENT */
        );
      }
    }
  },
  setup: function setup(props, _ref3) {
    var attrs = _ref3.attrs,
        slots = _ref3.slots,
        emit = _ref3.emit;
    var referenceElRef = ref();

    var _usePopper = usePopper(referenceElRef, props.popperClass, {
      trigger: props.trigger,
      placement: props.placement,
      modifiers: props.modifiers,
      strategy: props.strategy
    }),
        teleportId = _usePopper.teleportId;

    return function () {
      var _slots$default;

      var Render = props.render;
      return createVNode(Fragment, null, [createVNode(Teleport, {
        "to": "#" + teleportId
      }, {
        "default": withCtx(function () {
          return [slots.popper ? slots.popper() : Render()];
        })
      }, -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      , ["to"]), createVNode(PopperInner, {
        "rootElRef": referenceElRef
      }, {
        "default": withCtx(function () {
          return [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        })
      }, -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      , ["rootElRef"])], 64
      /* STABLE_FRAGMENT */
      );
    };
  }
});

var CollapseTransitionProps = {
  onBeforeEnter: function onBeforeEnter(_el) {
    var el = _el;
    addClass(el, 'collapse-transition');

    if (!el.dataset) {
      // @ts-ignore
      el.dataset = {};
    }

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.style.height = '0';
    el.style.paddingTop = '0';
    el.style.paddingBottom = '0';
  },
  onEnter: function onEnter(_el) {
    var el = _el;
    el.dataset.oldOverflow = el.style.overflow;

    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop || '';
      el.style.paddingBottom = el.dataset.oldPaddingBottom || '';
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop || '';
      el.style.paddingBottom = el.dataset.oldPaddingBottom || '';
    }

    el.style.overflow = 'hidden';
  },
  onAfterEnter: function onAfterEnter(_el) {
    var el = _el; // for safari: remove class then reset height is necessary

    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow || '';
  },
  onBeforeLeave: function onBeforeLeave(_el) {
    var el = _el;

    if (!el.dataset) {
      // @ts-ignore
      el.dataset = {};
    }

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  },
  onLeave: function onLeave(_el) {
    var el = _el;

    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, 'collapse-transition');
      el.style.height = '0';
      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
    }
  },
  onAfterLeave: function onAfterLeave(_el) {
    var el = _el;
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow || '';
    el.style.paddingTop = el.dataset.oldPaddingTop || '';
    el.style.paddingBottom = el.dataset.oldPaddingBottom || '';
  }
};
var CollapseTransition = defineComponent({
  name: 'ElCollapseTransition',
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;
    return function () {
      var _slots$default;

      return createVNode(Transition, mergeProps(attrs, CollapseTransitionProps), {
        "default": withCtx(function () {
          return [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        })
      }, -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var SubMenu = defineComponent({
  name: 'ElSubmenu',
  props: {
    disabled: {
      type: Boolean,
      "default": false
    },
    popperClass: {
      type: String,
      "default": ''
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;
    var id = Symbol("ElSubmenu-" + uniqueId());

    var _useMenu = useMenu(id),
        data = _useMenu.data,
        config = _useMenu.config,
        emitter = _useMenu.emitter;

    var handleClick = function handleClick() {
      // if (
      //   (config?.trigger === 'hover' && config?.mode === 'horizontal') ||
      //   (config?.collapse && config?.mode === 'vertical') ||
      //   props.disabled
      // ) {
      //   return
      // }
      if (data.isOpen) {
        emitter === null || emitter === void 0 ? void 0 : emitter.emit('close', id);
      } else {
        emitter === null || emitter === void 0 ? void 0 : emitter.emit('open', id);
      }
    }; // const onMouseEnter = () => {
    //   if (
    //     (config?.trigger === 'click' && config?.mode === 'horizontal') ||
    //     (!config?.collapse && config?.mode === 'vertical') ||
    //     props.disabled
    //   ) {
    //     return
    //   }
    //   actions?.toggleOpen(true)
    // }
    // const onMouseLeave = () => {
    //   if (
    //     (config?.trigger === 'click' && config?.mode === 'horizontal') ||
    //     (!config?.collapse && config?.mode === 'vertical')
    //   ) {
    //     return
    //   }
    //   actions?.toggleOpen(false)
    // }


    var handleTitleMouseenter = function handleTitleMouseenter() {
      if ((config === null || config === void 0 ? void 0 : config.mode) === 'horizontal' && !(config === null || config === void 0 ? void 0 : config.backgroundColor)) return; // submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = root?.hoverBackground);
    };

    var handleTitleMouseleave = function handleTitleMouseleave() {
      if ((config === null || config === void 0 ? void 0 : config.mode) === 'horizontal' && !(config === null || config === void 0 ? void 0 : config.backgroundColor)) return; // referenceRef.value && (referenceRef.value.style.backgroundColor = menuState.backgroundColor || '')
    };

    return function () {
      var _slots$title, _slots$default2;

      var Title = createVNode("div", {
        "class": "el-submenu__title",
        "onClick": handleClick,
        "onMouseenter": handleTitleMouseenter,
        "onMouseleave": handleTitleMouseleave
      }, [(_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots), createVNode("i", {
        "class": ['el-submenu__icon-arrow', 'el-icon-arrow-down']
      }, null)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      , ["onClick", "onMouseenter", "onMouseleave"]);

      return (config === null || config === void 0 ? void 0 : config.isPopup) ? createVNode("li", {
        "class": {
          'el-submenu': true,
          'is-active': data.isActive,
          'is-opened': data.isOpen,
          'is-disabled': props.disabled
        },
        "role": "menuitem"
      }, [createVNode(Popper, {
        "placement": data.deep === 0 ? 'bottom-start' : 'right-start',
        "render": function render() {
          var _slots$default;

          return createVNode("ul", {
            "role": "menu",
            "class": ['el-menu', 'el-menu--popup', "el-menu--popup-" + (data.deep === 0 ? 'bottom-start' : 'right-start')],
            "style": {
              backgroundColor: config === null || config === void 0 ? void 0 : config.backgroundColor,
              width: '200px'
            }
          }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
          /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
          );
        }
      }, {
        "default": withCtx(function () {
          return [Title];
        })
      }, -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      , ["placement", "render"])], 2
      /* CLASS */
      ) : createVNode("li", {
        "class": {
          'el-submenu': true,
          'is-active': data.isActive,
          'is-opened': data.isOpen,
          'is-disabled': props.disabled
        },
        "role": "menuitem"
      }, [Title, createVNode(CollapseTransition, null, {
        "default": withCtx(function () {
          return [data.isOpen && createVNode("ul", {
            "role": "menu",
            "class": "el-menu el-menu--inline",
            "style": {
              backgroundColor: config === null || config === void 0 ? void 0 : config.backgroundColor
            }
          }, [(_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)], -2
          /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
          )];
        })
      }, -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      )], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      );
    };
  }
});

var MenuItemGroup = defineComponent({
  name: 'ElMenuItemGroup',
  props: {
    title: {
      type: String,
      "default": ''
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    // const { parent } = useElMenuContext()
    return function () {
      var _slots$default;

      return createVNode("li", {
        "class": "el-menu-item-group"
      }, [createVNode("div", {
        "class": "el-menu-item-group__title",
        "style": {
          paddingLeft: 20 + 'px'
        }
      }, [slots.title ? slots.title() : props.title], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      ), createVNode("ul", null, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)], -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      )]);
    };
  }
});

var css_248z$b = "/* BEM support Func\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-popover {\n  position: absolute;\n  background: #FFFFFF;\n  min-width: 150px;\n  border-radius: 4px;\n  border: 1px solid #EBEEF5;\n  padding: 12px;\n  z-index: 2000;\n  color: #606266;\n  line-height: 1.4;\n  text-align: justify;\n  font-size: 14px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  word-break: break-all;\n}\n.el-popover--plain {\n  padding: 18px 20px;\n}\n\n.el-popover__title {\n  color: #303133;\n  font-size: 16px;\n  line-height: 1;\n  margin-bottom: 12px;\n}\n\n.el-popover__reference:focus:not(.focusing), .el-popover__reference:focus:hover {\n  outline-width: 0;\n}\n\n.el-popover:focus:active, .el-popover:focus {\n  outline-width: 0;\n}";

injectCss(css_248z$b, 'ElPopver');
var Popover = defineComponent({
  name: 'ElPopver',
  props: {
    trigger: {
      type: String,
      "default": 'click'
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        emit = _ref.emit;
    return function () {
      var _slots$default;

      return createVNode(Popper, {
        "popperClass": "el-popover",
        "trigger": props.trigger,
        "render": function render() {
          return createVNode(Fragment, null, [createVNode("div", null, [createVNode("div", {
            "class": "el-popover__title"
          }, "title")]), createVNode("div", {
            "class": "popper__arrow",
            "data-popper-arrow": true
          }, null, 8
          /* PROPS */
          , ["data-popper-arrow"])], 64
          /* STABLE_FRAGMENT */
          );
        }
      }, {
        "default": withCtx(function () {
          return [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        })
      }, -2
      /* CLASS, STYLE, PROPS, FULL_PROPS, HYDRATE_EVENTS, STABLE_FRAGMENT, KEYED_FRAGMENT, UNKEYED_FRAGMENT, NEED_PATCH, DYNAMIC_SLOTS */
      , ["trigger", "render"]);
    };
  }
});

var script$1 = defineComponent({
  components: {
    HelloWorld: script,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu: Menu,
    ElMenuItem: MenuItem,
    ElMenuItemGroup: MenuItemGroup
  },
  setup() {
    const router = useRouter();
    const push = (e) => {
      router.push(e);
    };
    return {
      push
    };
  }
});

const _hoisted_1$1 = { class: "demo-layout" };
const _hoisted_2$1 = /*#__PURE__*/createTextVNode("Basic");
const _hoisted_3 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_4 = /*#__PURE__*/createTextVNode(" layout ");
const _hoisted_5 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_6 = /*#__PURE__*/createTextVNode(" container ");
const _hoisted_7 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_8 = /*#__PURE__*/createTextVNode(" icon ");
const _hoisted_9 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_10 = /*#__PURE__*/createTextVNode(" button ");
const _hoisted_11 = /*#__PURE__*/createTextVNode("Form");
const _hoisted_12 = /*#__PURE__*/createTextVNode("Data");
const _hoisted_13 = /*#__PURE__*/createTextVNode("Notice");
const _hoisted_14 = /*#__PURE__*/createTextVNode("Navigation");
const _hoisted_15 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_16 = /*#__PURE__*/createTextVNode(" menu ");
const _hoisted_17 = /*#__PURE__*/createTextVNode("Others");
const _hoisted_18 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1);
const _hoisted_19 = /*#__PURE__*/createTextVNode(" popover ");
const _hoisted_20 = /*#__PURE__*/createTextVNode("Hooks");

function render$1(_ctx, _cache) {
  const _component_HelloWorld = resolveComponent("HelloWorld");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_menu_item_group = resolveComponent("el-menu-item-group");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_ElAside = resolveComponent("ElAside");
  const _component_router_view = resolveComponent("router-view");
  const _component_ElMain = resolveComponent("ElMain");
  const _component_ElContainer = resolveComponent("ElContainer");

  return (openBlock(), createBlock("div", _hoisted_1$1, [
    createVNode(_component_ElContainer, { direction: "horizontal" }, {
      default: withCtx(() => [
        createVNode(_component_ElAside, { class: "demo-aside" }, {
          default: withCtx(() => [
            createVNode(_component_HelloWorld, { msg: "Hello Elenext UI" }),
            createVNode(_component_el_menu, null, {
              default: withCtx(() => [
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_2$1
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      onClick: _cache[1] || (_cache[1] = $event => (_ctx.push({ name: 'layout' })))
                    }, {
                      default: withCtx(() => [
                        _hoisted_3,
                        _hoisted_4
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      onClick: _cache[2] || (_cache[2] = $event => (_ctx.push({ name: 'container' })))
                    }, {
                      default: withCtx(() => [
                        _hoisted_5,
                        _hoisted_6
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      onClick: _cache[3] || (_cache[3] = $event => (_ctx.push({ name: 'icon' })))
                    }, {
                      default: withCtx(() => [
                        _hoisted_7,
                        _hoisted_8
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      onClick: _cache[4] || (_cache[4] = $event => (_ctx.push({ name: 'button' })))
                    }, {
                      default: withCtx(() => [
                        _hoisted_9,
                        _hoisted_10
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_13
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_14
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      onClick: _cache[5] || (_cache[5] = $event => (_ctx.push({ name: 'menu' })))
                    }, {
                      default: withCtx(() => [
                        _hoisted_15,
                        _hoisted_16
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_17
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      onClick: _cache[6] || (_cache[6] = $event => (_ctx.push({ name: 'popover' })))
                    }, {
                      default: withCtx(() => [
                        _hoisted_18,
                        _hoisted_19
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_20
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_ElMain, { class: "demo-content" }, {
          default: withCtx(() => [
            createVNode(_component_router_view)
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]))
}

;

script$1.render = render$1;

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
        {path: "/button", name: "button", component: async () => import('./button.b7bc40b6.js')},
        {path: "/layout", name: "layout", component: async () => import('./layout.de35ae5f.js')},
        {path: "/container", name: "container", component: async () => import('./container.fd5a600d.js')},
        {path: "/icon", name: "icon", component: async () => import('./icon.45dfb9e0.js')},
        {path: "/menu", name: "menu", component: async () => import('./menu.5f66634d.js')},
        {path: "/popover", name: "popover", component: async () => import('./popover.1fa17748.js')}
      ]
    }
  ]
});

var script$2 = defineComponent({
  name: "App",
  components: {}
});

function render$2(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");

  return (openBlock(), createBlock(_component_router_view))
}

script$2.render = render$2;

window.Prism.plugins.NormalizeWhitespace.setDefaults({
  indent: 0,
  "remove-trailing": true,
  "remove-indent": true,
  "left-trim": true,
  "right-trim": true,
  "remove-initial-line-feed": false,
  "tabs-to-spaces": 2
});
const app = createApp(script$2);
app.use(router);
app.mount("#app");

export { ButtonGroup as B, ElRow as E, Fragment as F, Icon as I, Menu as M, Popover as P, SubMenu as S, _toDisplayString as _, ElButton as a, createVNode as b, createBlock as c, defineComponent as d, createTextVNode as e, ref as f, reactive as g, onMounted as h, createCommentVNode as i, renderSlot as j, ElCol as k, ElContainer as l, ElAside as m, nextTick as n, openBlock as o, ElFooter as p, ElHeader as q, resolveComponent as r, ElMain as s, toRefs as t, renderList as u, MenuItem as v, withCtx as w, MenuItemGroup as x };
