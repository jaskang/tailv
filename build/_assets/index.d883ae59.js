;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
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

// Make a map and return a function for checking if a key
// is in that map.
//
// IMPORTANT: all calls of this function must be prefixed with /*#__PURE__*/
// So that rollup can tree-shake them if necessary.
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
const extend = (a, b) => {
    for (const key in b) {
        a[key] = b[key];
    }
    return a;
};
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
        value
    });
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
    const computedRunners = new Set();
    const add = (effectsToAdd) => {
        if (effectsToAdd) {
            effectsToAdd.forEach(effect => {
                if (effect !== activeEffect || !shouldTrack) {
                    if (effect.options.computed) {
                        computedRunners.add(effect);
                    }
                    else {
                        effects.add(effect);
                    }
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
    // Important: computed effects must be run first so that computed getters
    // can be invalidated before any normal effects that depend on them are run.
    computedRunners.forEach(run);
    effects.forEach(run);
}

const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
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
        if (key === "__v_isReactive" /* isReactive */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* isReadonly */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* raw */) {
            return target;
        }
        const targetIsArray = isArray(target);
        if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) && builtInSymbols.has(key) || key === '__proto__') {
            return res;
        }
        if (shallow) {
            !isReadonly && track(target, "get" /* GET */, key);
            return res;
        }
        if (isRef(res)) {
            if (targetIsArray) {
                !isReadonly && track(target, "get" /* GET */, key);
                return res;
            }
            else {
                // ref unwrapping, only for Objects, not for Arrays.
                return res.value;
            }
        }
        !isReadonly && track(target, "get" /* GET */, key);
        return isObject(res)
            ? isReadonly
                ? // need to lazy access readonly and reactive here to avoid
                    // circular dependency
                    readonly(res)
                : reactive(res)
            : res;
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
const shallowReactiveHandlers = {
    ...mutableHandlers,
    get: shallowGet,
    set: shallowSet
};

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
    shallowInstrumentations[method] = createIterableMethod(method, true, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* isReactive */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* isReadonly */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* raw */) {
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
    return (!value.__v_skip &&
        isObservableType(toRawType(value)) &&
        !Object.isFrozen(value));
};
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target.__v_isReadonly) {
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
    if (target.__v_raw && !(isReadonly && target.__v_isReactive)) {
        return target;
    }
    // target already has corresponding Proxy
    if (hasOwn(target, isReadonly ? "__v_readonly" /* readonly */ : "__v_reactive" /* reactive */)) {
        return isReadonly ? target.__v_readonly : target.__v_reactive;
    }
    // only a whitelist of value types can be observed.
    if (!canObserve(target)) {
        return target;
    }
    const observed = new Proxy(target, collectionTypes.has(target.constructor) ? collectionHandlers : baseHandlers);
    def(target, isReadonly ? "__v_readonly" /* readonly */ : "__v_reactive" /* reactive */, observed);
    return observed;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value.__v_raw);
    }
    return !!(value && value.__v_isReactive);
}
function isReadonly(value) {
    return !!(value && value.__v_isReadonly);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    return (observed && toRaw(observed.__v_raw)) || observed;
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
        computed: true,
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
                .map(({ vnode }) => `at <${formatComponentName(vnode.type)}>`)
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
    const open = ` at <${formatComponentName(vnode.type, isRoot)}`;
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
        const parentScopeId = parent && parent.type.__scopeId;
        if (parentScopeId) {
            root = cloneVNode(root, { [parentScopeId]: '' });
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
function shouldUpdateComponent(prevVNode, nextVNode, parentComponent, optimized) {
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
 * @internal
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
 * @internal
 */
function pushScopeId(id) {
    scopeIdStack.push((currentScopeId = id));
}
/**
 * @internal
 */
function popScopeId() {
    scopeIdStack.pop();
    currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @internal
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
            target._lpa = nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const COMPONENTS = 'components';
function resolveComponent(name) {
    return resolveAsset(COMPONENTS, name) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
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
 * @internal
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @internal
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
const normalizeRef = ({ ref }) => (ref != null
    ? isArray(ref)
        ? ref
        : [currentRenderingInstance, ref]
    : null);
const createVNode = ( _createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        type = Comment;
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
function cloneVNode(vnode, extraProps) {
    const props = (extraProps
        ? vnode.props
            ? mergeProps(vnode.props, extraProps)
            : extend({}, extraProps)
        : vnode.props);
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    return {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
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
}
/**
 * @internal
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @internal
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
    const ret = {};
    extend(ret, args[0]);
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
    const options = instance.type.props;
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!options) {
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
    const rawOptions = instance.type.props;
    const rawCurrentProps = toRaw(props);
    const { 0: options } = normalizePropsOptions(rawOptions);
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
                (!hasOwn(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps && rawPrevProps[kebabKey] !== undefined) {
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
}
function setFullProps(instance, rawProps, props, attrs) {
    const { 0: options, 1: needCastKeys } = normalizePropsOptions(instance.type.props);
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
            value = isFunction(defaultValue) ? defaultValue() : defaultValue;
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
function normalizePropsOptions(raw) {
    if (!raw) {
        return EMPTY_ARR;
    }
    if (raw._n) {
        return raw._n;
    }
    const normalized = {};
    const needCastKeys = [];
    if (isArray(raw)) {
        for (let i = 0; i < raw.length; i++) {
            const normalizedKey = camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = EMPTY_OBJ;
            }
        }
    }
    else {
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
    def(raw, '_n', normalizedEntry);
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
            !(vnode.patchFlag & 1024 /* DYNAMIC_SLOTS */) &&
                // bail on HRM updates
                !(("production" !== 'production')  )) {
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
/**
 * Adds directives to a VNode.
 */
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
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
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
            const refValue = shapeFlag & 4 /* STATEFUL_COMPONENT */ ? n2.component.proxy : n2.el;
            setRef(ref, n1 && n1.ref, parentComponent, refValue);
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
            // props
            if (props) {
                for (const key in props) {
                    if (!isReservedProp(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG);
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
            // children
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
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
        const oldProps = (n1 && n1.props) || EMPTY_OBJ;
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
                        if (prev !== next) {
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
                if (next !== prev) {
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
            updateComponent(n1, n2, parentComponent, optimized);
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
    const updateComponent = (n1, n2, parentComponent, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, parentComponent, optimized)) {
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
                if (next === null) {
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
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        const shouldKeepAlive = shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
        let vnodeHook;
        // unset ref
        if (ref != null && parentComponent) {
            setRef(ref, null, parentComponent, null);
        }
        if ((vnodeHook = props && props.onVnodeBeforeUnmount) && !shouldKeepAlive) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            if (shouldKeepAlive) {
                parentComponent.ctx.deactivate(vnode);
            }
            else {
                unmountComponent(vnode.component, parentSuspense, doRemove);
            }
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
        if (((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) &&
            !shouldKeepAlive) {
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
    const setRef = (rawRef, oldRawRef, parent, value) => {
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
    props: propsOptions, data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
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
        const strat = strats && strats[key];
        if (strat) {
            to[key] = strat(to[key], from[key], instance.proxy, key);
        }
        else if (!hasOwn(to, key)) {
            to[key] = from[key];
        }
    }
}

const publicPropertiesMap = {
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
};
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // let @vue/reatvitiy know it should never observe Vue public instances.
        if (key === "__v_skip" /* skip */) {
            return true;
        }
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
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
            type.props &&
                hasOwn(normalizePropsOptions(type.props)[0], key)) {
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
        return (accessCache[key] !== undefined ||
            (data !== EMPTY_OBJ && hasOwn(data, key)) ||
            (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) ||
            (type.props && hasOwn(normalizePropsOptions(type.props)[0], key)) ||
            hasOwn(ctx, key) ||
            hasOwn(publicPropertiesMap, key) ||
            hasOwn(appContext.config.globalProperties, key));
    }
};
const RuntimeCompiledPublicInstanceProxyHandlers = {
    ...PublicInstanceProxyHandlers,
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
};

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
function formatComponentName(Component, isRoot = false) {
    let name = isFunction(Component)
        ? Component.displayName || Component.name
        : Component.name;
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.vue$/);
        if (match) {
            name = match[1];
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

// actual implementation
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
 * @internal
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback) {
    let slot = slots[name];
    return (openBlock(),
        createBlock(Fragment, { key: props.key }, slot ? slot(props) : fallback ? fallback() : [], slots._ ? 64 /* STABLE_FRAGMENT */ : -2 /* BAIL */));
}
/**
 * @internal
 */
const _toDisplayString = toDisplayString;
/**
 * @internal
 */
const _camelize = camelize;

const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
let tempContainer;
let tempSVGContainer;
const nodeOps = {
    insert: (child, parent, anchor) => {
        if (anchor) {
            parent.insertBefore(child, anchor);
        }
        else {
            parent.appendChild(child);
        }
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
        style.cssText = next;
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
// timestamp can either be hi-res ( relative to page load) or low-res
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
        if (e.timeStamp >= invoker.lastUpdated - 1) {
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
            else if (isSVG
                ? // most keys must be set as attribute on svg elements to work
                    // ...except innerHTML
                    key === 'innerHTML' ||
                        // or native onclick with function values
                        (key in el && nativeOnRE.test(key) && isFunction(nextValue))
                : // for normal html elements, set as a property if it exists
                    key in el &&
                        // except native onclick with string values
                        !(nativeOnRE.test(key) && isString(nextValue))) {
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

/**
 * @internal
 */
const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el) {
        setDisplay(el, true);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}

const rendererOptions = {
    patchProp,
    ...nodeOps
};
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
  * vue-router v4.0.0-alpha.11
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
function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
        const value = params[key];
        newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
}

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
function isSameRouteLocation(a, b) {
    let aLastIndex = a.matched.length - 1;
    let bLastIndex = b.matched.length - 1;
    return (aLastIndex > -1 &&
        aLastIndex === bLastIndex &&
        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
        isSameLocationObject(a.params, b.params) &&
        isSameLocationObject(a.query, b.query) &&
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
function isSameLocationObject(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
        return false;
    for (let key in a) {
        if (!isSameLocationObjectValue(a[key], b[key]))
            return false;
    }
    return true;
}
function isSameLocationObjectValue(a, b) {
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
function normalizeHistoryLocation(location) {
    return {
        // to avoid doing a typeof or in that is quite long
        fullPath: location.fullPath || location,
    };
}
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base base to normalize
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

function warn$1(msg, ...args) {
    console.warn('[Vue Router warn]: ' + msg, ...args);
}

/**
 * `id`s can accept pretty much any characters, including CSS combinators like >
 * or ~. It's still possible to retrieve elements using
 * `document.getElementById('~')` but it needs to be escaped when using
 * `document.querySelector('#\\~')` for it to be valid. The only requirements
 * for `id`s are them to be unique on the page and to not be empty (`id=""`).
 * Because of that, when passing an `id` selector, it shouldn't have any other
 * selector attached to it (like a class or an attribute) because it wouldn't
 * have any effect anyway. We are therefore considering any selector starting
 * with a `#` to be an `id` selector so we can directly use `getElementById`
 * instead of `querySelector`, allowing users to write simpler selectors like:
 * `#1-thing` or `#with~symbols` without having to manually escape them to valid
 * CSS selectors: `#\31 -thing` and `#with\\~symbols`.
 *
 * - More information about  the topic can be found at
 *   https://mathiasbynens.be/notes/html5-id-class.
 * - Practical example: https://mathiasbynens.be/demo/html5-id
 */
const startsWithHashRE = /^#/;
function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        x: elRect.left - docRect.left - (offset.x || 0),
        y: elRect.top - docRect.top - (offset.y || 0),
    };
}
const computeScrollPosition = () => ({
    x: window.pageXOffset,
    y: window.pageYOffset,
});
function scrollToPosition(position) {
    let normalizedPosition;
    if ('selector' in position) {
        const el = startsWithHashRE.test(position.selector)
            ? document.getElementById(position.selector.slice(1))
            : document.querySelector(position.selector);
        if (!el) {
            return;
        }
        normalizedPosition = getElementPosition(el, position.offset || {});
    }
    else {
        normalizedPosition = position;
    }
    window.scrollTo(normalizedPosition.x || 0, normalizedPosition.y || 0);
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
    return scrollPositions.get(key);
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<T> {
//   compute(): T
//   scroll(position: T): void
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
        return normalizeHistoryLocation(stripBase(pathFromHash, ''));
    }
    const path = stripBase(pathname, base);
    return normalizeHistoryLocation(path + search + hash);
}
function useHistoryListeners(base, historyState, location, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state, }) => {
        const to = createCurrentLocation(base, window.location);
        if (!state)
            return replace(to.fullPath);
        const from = location.value;
        const fromState = historyState.value;
        location.value = to;
        historyState.value = state;
        // ignore the popstate and reset the pauseState
        if (pauseState && pauseState.fullPath === from.fullPath) {
            pauseState = null;
            return;
        }
        const delta = fromState ? state.position - fromState.position : 0;
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
        history.replaceState({
            ...history.state,
            scroll: computeScrollPosition(),
        }, '');
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
        const url = createBaseLocation() + base + to.fullPath;
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
        const normalized = normalizeHistoryLocation(to);
        const state = {
            ...history.state,
            ...buildState(historyState.value.back, 
            // keep back and forward entries but override current position
            normalized, historyState.value.forward, true),
            ...data,
            position: historyState.value.position,
        };
        changeLocation(normalized, state, true);
        location.value = normalized;
    }
    function push(to, data) {
        const normalized = normalizeHistoryLocation(to);
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = {
            ...history.state,
            forward: normalized,
            scroll: computeScrollPosition(),
        };
        changeLocation(currentState.current, currentState, true);
        const state = {
            ...buildState(location.value, normalized, null),
            position: currentState.position + 1,
            ...data,
        };
        changeLocation(normalized, state, false);
        location.value = normalized;
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
    const routerHistory = {
        // it's overridden right after
        // @ts-ignore
        location: '',
        base,
        go,
        ...historyNavigation,
        ...historyListeners,
    };
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

var NavigationFailureType;
(function (NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 2] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 3] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 4] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
    {
        return Object.assign(new Error(), { type }, params);
    }
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
    const options = {
        ...BASE_PATH_PARSER_OPTIONS,
        ...extraOptions,
    };
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
function tokenizePath(path) {
    if (!path)
        return [[]];
    if (path === '/')
        return [[ROOT_TOKEN]];
    // remove the leading slash
    if (path[0] !== '/')
        throw new Error('A non-empty path must start with "/"');
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
    return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = {
        ...parser,
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: [],
    };
    if (parent) {
        // both are aliases or both are not aliases
        // we don't want to mix them because the order is used when
        // passing originalRecord in Matcher.addRoute
        if (!matcher.record.aliasOf === !parent.record.aliasOf)
            parent.children.push(matcher);
    }
    return matcher;
}

let noop = () => { };
function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions$1({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
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
                normalizedRecords.push({
                    ...mainNormalizedRecord,
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
                });
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
            }
            // only non redirect records have children
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
                throw createRouterError(0 /* MATCHER_NOT_FOUND */, {
                    location,
                });
            name = matcher.record.name;
            params = {
                ...paramsFromLocation(currentLocation.params, matcher.keys.map(k => k.name)),
                ...location.params,
            };
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
                throw createRouterError(0 /* MATCHER_NOT_FOUND */, {
                    location,
                    currentLocation,
                });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = { ...currentLocation.params, ...location.params };
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
 * Normalizes a RouteRecordRaw. Transforms the `redirect` option into a `beforeEnter`
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
    const commonInitialValues = {
        path: record.path,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        components: {},
    };
    if ('redirect' in record) {
        return {
            ...commonInitialValues,
            redirect: record.redirect,
        };
    }
    else {
        return {
            ...commonInitialValues,
            beforeEnter: record.beforeEnter,
            props: record.props || false,
            children: record.children || [],
            instances: {},
            leaveGuards: [],
            updateGuards: [],
            components: 'components' in record
                ? record.components
                : { default: record.component },
        };
    }
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
    return matched.reduce((meta, record) => ({
        ...meta,
        ...record.meta,
    }), {});
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
function guardToPromiseFn(guard, to, from, instance) {
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
                // TODO: call the in component enter callbacks. Maybe somewhere else
                // record && record.enterCallbacks.push(valid)
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
            const rawComponent = record.components[name];
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                let options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard &&
                    guards.push(guardToPromiseFn(guard, to, from, record.instances[name]));
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
                        guardToPromiseFn(guard, to, from, record.instances[name])());
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
        isSameLocationObject(currentRoute.params, route.value.params));
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
                : h('a', {
                    'aria-current': link.isExactActive ? 'page' : null,
                    onClick: link.navigate,
                    href: link.href,
                    ...attrs,
                    class: elClass.value,
                }, children);
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
        const realRoute = inject(routeLocationKey);
        const route = computed$1(() => props.route || realRoute);
        const depth = inject(viewDepthKey, 0);
        provide(viewDepthKey, depth + 1);
        const matchedRoute = computed$1(() => route.value.matched[depth]);
        const ViewComponent = computed$1(() => matchedRoute.value && matchedRoute.value.components[props.name]);
        const propsData = computed$1(() => {
            // propsData only gets called if ViewComponent.value exists and it depends
            // on matchedRoute.value
            const { props } = matchedRoute.value;
            if (!props)
                return {};
            if (props === true)
                return route.value.params;
            return typeof props === 'object' ? props : props(route.value);
        });
        provide(matchedRouteKey, matchedRoute);
        const viewRef = ref();
        function onVnodeMounted() {
            // if we mount, there is a matched record
            matchedRoute.value.instances[props.name] = viewRef.value;
            // TODO: trigger beforeRouteEnter hooks
            // TODO: watch name to update the instance record
        }
        return () => {
            // we nee the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentMatched = matchedRoute.value;
            const currentName = props.name;
            function onVnodeUnmounted() {
                if (currentMatched) {
                    // remove the instance reference to prevent leak
                    currentMatched.instances[currentName] = null;
                }
            }
            let Component = ViewComponent.value;
            const componentProps = {
                // only compute props if there is a matched record
                ...(Component && propsData.value),
                ...attrs,
                onVnodeMounted,
                onVnodeUnmounted,
                ref: viewRef,
            };
            // NOTE: we could also not render if there is no route match
            const children = slots.default && slots.default({ Component, props: componentProps });
            return children
                ? children
                : Component
                    ? h(Component, componentProps)
                    : null;
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const RouterView = RouterViewImpl;

function applyRouterPlugin(app, router) {
    app.component('RouterLink', RouterLink);
    app.component('RouterView', RouterView);
    // TODO: add tests
    app.config.globalProperties.$router = router;
    Object.defineProperty(app.config.globalProperties, '$route', {
        get: () => router.currentRoute.value,
    });
    // this initial navigation is only necessary on client, on server it doesn't
    // make sense because it will create an extra unnecessary navigation and could
    // lead to problems
    if (isBrowser &&
        // @ts-ignore: used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !router._started &&
        router.currentRoute.value === START_LOCATION_NORMALIZED) {
        // @ts-ignore: see above
        router._started = true;
        router.push(router.history.location.fullPath).catch(err => {
        });
    }
    const reactiveRoute = {};
    for (let key in START_LOCATION_NORMALIZED) {
        // @ts-ignore: the key matches
        reactiveRoute[key] = computed$1(() => router.currentRoute.value[key]);
    }
    app.provide(routerKey, router);
    app.provide(routeLocationKey, reactive(reactiveRoute));
}

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
            return {
                // fullPath: locationNormalized.fullPath,
                // query: locationNormalized.query,
                // hash: locationNormalized.hash,
                ...locationNormalized,
                ...matchedRoute,
                // path: matchedRoute.path,
                // name: matchedRoute.name,
                // meta: matchedRoute.meta,
                // matched: matchedRoute.matched,
                params: decodeParams(matchedRoute.params),
                redirectedFrom: undefined,
                href: routerHistory.base + locationNormalized.fullPath,
            };
        }
        let matcherLocation;
        // path could be relative in object as well
        if ('path' in rawLocation) {
            matcherLocation = {
                ...rawLocation,
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
            };
        }
        else {
            matcherLocation = {
                ...rawLocation,
                params: encodeParams(rawLocation.params),
            };
        }
        let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = encodeHash(rawLocation.hash || '');
        // put back the unencoded params as given by the user (avoid the cost of decoding them)
        matchedRoute.params =
            'params' in rawLocation
                ? normalizeParams(rawLocation.params)
                : decodeParams(matchedRoute.params);
        const fullPath = stringifyURL(stringifyQuery$1, {
            ...rawLocation,
            hash,
            path: matchedRoute.path,
        });
        return {
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: normalizeQuery(rawLocation.query),
            ...matchedRoute,
            redirectedFrom: undefined,
            href: routerHistory.base + fullPath,
        };
    }
    function locationAsObject(to) {
        return typeof to === 'string' ? { path: to } : to;
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push({ ...locationAsObject(to), replace: true });
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = (pendingLocation = resolve(to));
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const lastMatched = targetLocation.matched[targetLocation.matched.length - 1];
        if (lastMatched && 'redirect' in lastMatched) {
            const { redirect } = lastMatched;
            // transform it into an object to pass the original RouteLocaleOptions
            let newTargetLocation = locationAsObject(typeof redirect === 'function' ? redirect(targetLocation) : redirect);
            return pushWithRedirect({
                // having a path here would be a problem with relative locations but
                // at the same time it doesn't make sense for a redirect to be
                // relative (no name, no path) because it would create an infinite
                // loop. Since newTargetLocation must either have a `path` or a
                // `name`, this will never happen
                ...targetLocation,
                ...newTargetLocation,
                state: data,
                force,
                replace,
            }, 
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
        }
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(from, targetLocation)) {
            failure = createRouterError(4 /* NAVIGATION_DUPLICATED */, { to: toLocation, from });
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
            // a more recent navigation took place
            if (pendingLocation !== toLocation) {
                return createRouterError(3 /* NAVIGATION_CANCELLED */, {
                    from,
                    to: toLocation,
                });
            }
            if (error.type === 2 /* NAVIGATION_ABORTED */ ||
                error.type === 1 /* NAVIGATION_GUARD_REDIRECT */) {
                return error;
            }
            // unknown error, rejects
            return triggerError(error);
        })
            .then((failure) => {
            if (failure) {
                if (failure.type === 1 /* NAVIGATION_GUARD_REDIRECT */)
                    // preserve the original redirectedFrom if any
                    return pushWithRedirect(
                    // keep options
                    {
                        ...locationAsObject(failure.to),
                        state: data,
                        force,
                        replace,
                    }, redirectedFrom || toLocation);
            }
            else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
            }
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
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
        // run the queue of per route beforeRouteLeave guards
        return runGuardQueue(guards)
            .then(() => {
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
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
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(
            // the type doesn't matter as we are comparing an object per reference
            to.matched.filter(record => from.matched.indexOf(record) < 0), 'beforeRouteEnter', to, from);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            return runGuardQueue(guards);
        });
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
        if (pendingLocation !== toLocation) {
            return createRouterError(3 /* NAVIGATION_CANCELLED */, {
                from,
                to: toLocation,
            });
        }
        const [leavingRecords] = extractChangingRecords(toLocation, from);
        for (const record of leavingRecords) {
            // remove registered guards from removed matched records
            record.leaveGuards = [];
            // free the references
            // TODO: to refactor once keep-alive and transition can be supported
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
                routerHistory.replace(toLocation, {
                    scroll: isFirstNavigation && state && state.scroll,
                    ...data,
                });
            else
                routerHistory.push(toLocation, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    // attach listener to history to trigger navigations
    routerHistory.listen((to, _from, info) => {
        // TODO: in dev try catch to correctly log the matcher error
        // cannot be a redirect route because it was in history
        const toLocation = resolve(to.fullPath);
        pendingLocation = toLocation;
        const from = currentRoute.value;
        if (isBrowser) {
            saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
        }
        navigate(toLocation, from)
            .catch((error) => {
            // a more recent navigation took place
            if (pendingLocation !== toLocation) {
                return createRouterError(3 /* NAVIGATION_CANCELLED */, {
                    from,
                    to: toLocation,
                });
            }
            if (error.type === 2 /* NAVIGATION_ABORTED */) {
                return error;
            }
            if (error.type === 1 /* NAVIGATION_GUARD_REDIRECT */) {
                routerHistory.go(-info.delta, false);
                // the error is already handled by router.push we just want to avoid
                // logging the error
                pushWithRedirect(error.to, toLocation).catch(() => {
                    // TODO: in dev show warning, in prod triggerError, same as initial navigation
                });
                // avoid the then branch
                return Promise.reject();
            }
            // TODO: test on different browsers ensure consistent behavior
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
            if (failure)
                routerHistory.go(-info.delta, false);
            triggerAfterEach(toLocation, from, failure);
        })
            .catch(() => {
            // TODO: same as above
        });
    });
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
        history: routerHistory,
        install(app) {
            applyRouterPlugin(app, this);
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

var _imports_0 = "/_assets/logo.2d6fa5ae.png";

const _withId = /*#__PURE__*/withScopeId("data-v-56a34a20");

pushScopeId("data-v-56a34a20");
const _hoisted_1 = { class: "hello" };
const _hoisted_2 = /*#__PURE__*/createVNode("img", {
  style: {"width":"80px","height":"80px"},
  alt: "Vue logo",
  src: _imports_0
}, null, -1 /* HOISTED */);
popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode("h1", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
  ]))
});

;

script.render = render;
script.__scopeId = "data-v-56a34a20";

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
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (!isFixed) {
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

  return element.offsetParent;
}

function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

  while (offsetParent && isTableElement(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || window;
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
    merged[current.name] = existing ? Object.assign({}, existing, {}, current, {
      options: Object.assign({}, existing.options, {}, current.options),
      data: Object.assign({}, existing.data, {}, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
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
      options: Object.assign({}, DEFAULT_OPTIONS, {}, defaultOptions),
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
        state.options = Object.assign({}, defaultOptions, {}, state.options, {}, options);
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

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
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
    state.styles.popper = Object.assign({}, state.styles.popper, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
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

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
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

function getViewportRect(element) {
  var win = getWindow(element);
  var visualViewport = win.visualViewport;
  var width = win.innerWidth;
  var height = win.innerHeight; // We don't know which browsers have buggy or odd implementations of this, so
  // for now we're only applying it to iOS to fix the keyboard issue.
  // Investigation required

  if (visualViewport && /iPhone|iPod|iPad/.test(navigator.platform)) {
    width = visualViewport.width;
    height = visualViewport.height;
  }

  return {
    width: width,
    height: height,
    x: 0,
    y: 0
  };
}

function getDocumentRect(element) {
  var win = getWindow(element);
  var winScroll = getWindowScroll(element);
  var documentRect = getCompositeRect(getDocumentElement(element), win);
  documentRect.height = Math.max(documentRect.height, win.innerHeight);
  documentRect.width = Math.max(documentRect.width, win.innerWidth);
  documentRect.x = -winScroll.scrollLeft;
  documentRect.y = -winScroll.scrollTop;
  return documentRect;
}

function toNumber(cssValue) {
  return parseFloat(cssValue) || 0;
}

function getBorders(element) {
  var computedStyle = isHTMLElement(element) ? getComputedStyle(element) : {};
  return {
    top: toNumber(computedStyle.borderTopWidth),
    right: toNumber(computedStyle.borderRightWidth),
    bottom: toNumber(computedStyle.borderBottomWidth),
    left: toNumber(computedStyle.borderLeftWidth)
  };
}

function getDecorations(element) {
  var win = getWindow(element);
  var borders = getBorders(element);
  var isHTML = getNodeName(element) === 'html';
  var winScrollBarX = getWindowScrollBarX(element);
  var x = element.clientWidth + borders.right;
  var y = element.clientHeight + borders.bottom; // HACK:
  // document.documentElement.clientHeight on iOS reports the height of the
  // viewport including the bottom bar, even if the bottom bar isn't visible.
  // If the difference between window innerHeight and html clientHeight is more
  // than 50, we assume it's a mobile bottom bar and ignore scrollbars.
  // * A 50px thick scrollbar is likely non-existent (macOS is 15px and Windows
  //   is about 17px)
  // * The mobile bar is 114px tall

  if (isHTML && win.innerHeight - element.clientHeight > 50) {
    y = win.innerHeight - borders.bottom;
  }

  return {
    top: isHTML ? 0 : element.clientTop,
    right: // RTL scrollbar (scrolling containers only)
    element.clientLeft > borders.left ? borders.right : // LTR scrollbar
    isHTML ? win.innerWidth - x - winScrollBarX : element.offsetWidth - x,
    bottom: isHTML ? win.innerHeight - y : element.offsetHeight - y,
    left: isHTML ? winScrollBarX : element.clientLeft
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
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(element);
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    var decorations = getDecorations(isHTMLElement(clippingParent) ? clippingParent : getDocumentElement(element));
    accRect.top = Math.max(rect.top + decorations.top, accRect.top);
    accRect.right = Math.min(rect.right - decorations.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left + decorations.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
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
  return Object.assign({}, getFreshSideObject(), {}, paddingObject);
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
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, {}, popperOffsets));
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
  var placements$1 = (variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements).filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  }); // $FlowFixMe: Flow seems to have problems with two array unions...

  var overflows = placements$1.reduce(function (acc, placement) {
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
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
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
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
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

var ElGlobalConfigSymbol = Symbol();
function useGlobal() {
  return inject(ElGlobalConfigSymbol, null);
}
var ElRowSymbol = Symbol();
var ElFormSymbol = Symbol();
var ElFormItemSymbol = Symbol();

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".el-row {\n  position: relative;\n  box-sizing: border-box;\n}\n.el-row::before,\n.el-row::after {\n  display: table;\n  content: '';\n}\n.el-row::after {\n  clear: both;\n}\n.el-row--flex {\n  display: flex;\n}\n.el-row--flex:before,\n.el-row--flex:after {\n  display: none;\n}\n.el-row--flex.is-justify-center {\n  justify-content: center;\n}\n.el-row--flex.is-justify-end {\n  justify-content: flex-end;\n}\n.el-row--flex.is-justify-space-between {\n  justify-content: space-between;\n}\n.el-row--flex.is-justify-space-around {\n  justify-content: space-around;\n}\n.el-row--flex.is-align-middle {\n  align-items: center;\n}\n.el-row--flex.is-align-bottom {\n  align-items: flex-end;\n}\n";
styleInject(css_248z);

var index = defineComponent({
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
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
        class: ['el-row', props.justify !== 'start' ? "is-justify-" + props.justify : '', props.align !== 'top' ? "is-align-" + props.align : '', props.type === 'flex' ? 'el-row--flex' : ''],
        style: style.value
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
});

var css_248z$1 = "[class*='el-col-'] {\n  float: left;\n  box-sizing: border-box;\n}\n.el-col-0 {\n  display: none;\n}\n.el-col-24 {\n  width: 100%;\n}\n.el-col-offset-24 {\n  margin-left: 100%;\n}\n.el-col-pull-24 {\n  position: relative;\n  right: 100%;\n}\n.el-col-push-24 {\n  position: relative;\n  left: 100%;\n}\n.el-col-23 {\n  width: 95.83333333%;\n}\n.el-col-offset-23 {\n  margin-left: 95.83333333%;\n}\n.el-col-pull-23 {\n  position: relative;\n  right: 95.83333333%;\n}\n.el-col-push-23 {\n  position: relative;\n  left: 95.83333333%;\n}\n.el-col-22 {\n  width: 91.66666667%;\n}\n.el-col-offset-22 {\n  margin-left: 91.66666667%;\n}\n.el-col-pull-22 {\n  position: relative;\n  right: 91.66666667%;\n}\n.el-col-push-22 {\n  position: relative;\n  left: 91.66666667%;\n}\n.el-col-21 {\n  width: 87.5%;\n}\n.el-col-offset-21 {\n  margin-left: 87.5%;\n}\n.el-col-pull-21 {\n  position: relative;\n  right: 87.5%;\n}\n.el-col-push-21 {\n  position: relative;\n  left: 87.5%;\n}\n.el-col-20 {\n  width: 83.33333333%;\n}\n.el-col-offset-20 {\n  margin-left: 83.33333333%;\n}\n.el-col-pull-20 {\n  position: relative;\n  right: 83.33333333%;\n}\n.el-col-push-20 {\n  position: relative;\n  left: 83.33333333%;\n}\n.el-col-19 {\n  width: 79.16666667%;\n}\n.el-col-offset-19 {\n  margin-left: 79.16666667%;\n}\n.el-col-pull-19 {\n  position: relative;\n  right: 79.16666667%;\n}\n.el-col-push-19 {\n  position: relative;\n  left: 79.16666667%;\n}\n.el-col-18 {\n  width: 75%;\n}\n.el-col-offset-18 {\n  margin-left: 75%;\n}\n.el-col-pull-18 {\n  position: relative;\n  right: 75%;\n}\n.el-col-push-18 {\n  position: relative;\n  left: 75%;\n}\n.el-col-17 {\n  width: 70.83333333%;\n}\n.el-col-offset-17 {\n  margin-left: 70.83333333%;\n}\n.el-col-pull-17 {\n  position: relative;\n  right: 70.83333333%;\n}\n.el-col-push-17 {\n  position: relative;\n  left: 70.83333333%;\n}\n.el-col-16 {\n  width: 66.66666667%;\n}\n.el-col-offset-16 {\n  margin-left: 66.66666667%;\n}\n.el-col-pull-16 {\n  position: relative;\n  right: 66.66666667%;\n}\n.el-col-push-16 {\n  position: relative;\n  left: 66.66666667%;\n}\n.el-col-15 {\n  width: 62.5%;\n}\n.el-col-offset-15 {\n  margin-left: 62.5%;\n}\n.el-col-pull-15 {\n  position: relative;\n  right: 62.5%;\n}\n.el-col-push-15 {\n  position: relative;\n  left: 62.5%;\n}\n.el-col-14 {\n  width: 58.33333333%;\n}\n.el-col-offset-14 {\n  margin-left: 58.33333333%;\n}\n.el-col-pull-14 {\n  position: relative;\n  right: 58.33333333%;\n}\n.el-col-push-14 {\n  position: relative;\n  left: 58.33333333%;\n}\n.el-col-13 {\n  width: 54.16666667%;\n}\n.el-col-offset-13 {\n  margin-left: 54.16666667%;\n}\n.el-col-pull-13 {\n  position: relative;\n  right: 54.16666667%;\n}\n.el-col-push-13 {\n  position: relative;\n  left: 54.16666667%;\n}\n.el-col-12 {\n  width: 50%;\n}\n.el-col-offset-12 {\n  margin-left: 50%;\n}\n.el-col-pull-12 {\n  position: relative;\n  right: 50%;\n}\n.el-col-push-12 {\n  position: relative;\n  left: 50%;\n}\n.el-col-11 {\n  width: 45.83333333%;\n}\n.el-col-offset-11 {\n  margin-left: 45.83333333%;\n}\n.el-col-pull-11 {\n  position: relative;\n  right: 45.83333333%;\n}\n.el-col-push-11 {\n  position: relative;\n  left: 45.83333333%;\n}\n.el-col-10 {\n  width: 41.66666667%;\n}\n.el-col-offset-10 {\n  margin-left: 41.66666667%;\n}\n.el-col-pull-10 {\n  position: relative;\n  right: 41.66666667%;\n}\n.el-col-push-10 {\n  position: relative;\n  left: 41.66666667%;\n}\n.el-col-9 {\n  width: 37.5%;\n}\n.el-col-offset-9 {\n  margin-left: 37.5%;\n}\n.el-col-pull-9 {\n  position: relative;\n  right: 37.5%;\n}\n.el-col-push-9 {\n  position: relative;\n  left: 37.5%;\n}\n.el-col-8 {\n  width: 33.33333333%;\n}\n.el-col-offset-8 {\n  margin-left: 33.33333333%;\n}\n.el-col-pull-8 {\n  position: relative;\n  right: 33.33333333%;\n}\n.el-col-push-8 {\n  position: relative;\n  left: 33.33333333%;\n}\n.el-col-7 {\n  width: 29.16666667%;\n}\n.el-col-offset-7 {\n  margin-left: 29.16666667%;\n}\n.el-col-pull-7 {\n  position: relative;\n  right: 29.16666667%;\n}\n.el-col-push-7 {\n  position: relative;\n  left: 29.16666667%;\n}\n.el-col-6 {\n  width: 25%;\n}\n.el-col-offset-6 {\n  margin-left: 25%;\n}\n.el-col-pull-6 {\n  position: relative;\n  right: 25%;\n}\n.el-col-push-6 {\n  position: relative;\n  left: 25%;\n}\n.el-col-5 {\n  width: 20.83333333%;\n}\n.el-col-offset-5 {\n  margin-left: 20.83333333%;\n}\n.el-col-pull-5 {\n  position: relative;\n  right: 20.83333333%;\n}\n.el-col-push-5 {\n  position: relative;\n  left: 20.83333333%;\n}\n.el-col-4 {\n  width: 16.66666667%;\n}\n.el-col-offset-4 {\n  margin-left: 16.66666667%;\n}\n.el-col-pull-4 {\n  position: relative;\n  right: 16.66666667%;\n}\n.el-col-push-4 {\n  position: relative;\n  left: 16.66666667%;\n}\n.el-col-3 {\n  width: 12.5%;\n}\n.el-col-offset-3 {\n  margin-left: 12.5%;\n}\n.el-col-pull-3 {\n  position: relative;\n  right: 12.5%;\n}\n.el-col-push-3 {\n  position: relative;\n  left: 12.5%;\n}\n.el-col-2 {\n  width: 8.33333333%;\n}\n.el-col-offset-2 {\n  margin-left: 8.33333333%;\n}\n.el-col-pull-2 {\n  position: relative;\n  right: 8.33333333%;\n}\n.el-col-push-2 {\n  position: relative;\n  left: 8.33333333%;\n}\n.el-col-1 {\n  width: 4.16666667%;\n}\n.el-col-offset-1 {\n  margin-left: 4.16666667%;\n}\n.el-col-pull-1 {\n  position: relative;\n  right: 4.16666667%;\n}\n.el-col-push-1 {\n  position: relative;\n  left: 4.16666667%;\n}\n";
styleInject(css_248z$1);

var index$1 = defineComponent({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
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
      ['span', 'offset', 'pull', 'push'].forEach(function (prop) {
        var size = props[prop];

        if (typeof size === 'number' && size >= 0) {
          ret.push(prop !== 'span' ? "el-col-" + prop + "-" + props[prop] : "el-col-" + props[prop]);
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
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
      return h(props.tag, {
        class: ['el-col', classList.value],
        style: style.value
      }, slots.default());
    };
  }
});

var css_248z$2 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-container {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  flex-basis: auto;\n  box-sizing: border-box;\n  min-width: 0;\n}\n.el-container.is-vertical {\n  flex-direction: column;\n}\n.el-header {\n  padding: 0 20px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n.el-main {\n  display: block;\n  flex: 1;\n  flex-basis: auto;\n  overflow: auto;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.el-footer {\n  padding: 0 20px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n.el-aside {\n  overflow: auto;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n";
styleInject(css_248z$2);

//
var script$1 = defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      default: 'vertical'
    }
  }
});

function render$1(_ctx, _cache) {
  return (openBlock(), createBlock("section", {
    class: { 'el-container': true, 'is-vertical': _ctx.direction === 'vertical' }
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "src/components/ELContainer/ElContainer.vue";

//
var script$1$1 = defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '250px'
    }
  }
});

function render$1$1(_ctx, _cache) {
  return (openBlock(), createBlock("aside", {
    class: "el-aside",
    style: { width: _ctx.width }
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script$1$1.render = render$1$1;
script$1$1.__file = "src/components/ELContainer/ElAside.vue";

//
var script$2 = defineComponent({
  name: 'ElFooter',
  componentName: 'ElFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
});

function render$2(_ctx, _cache) {
  return (openBlock(), createBlock("footer", {
    class: "el-footer",
    style: { height: _ctx.height }
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script$2.render = render$2;
script$2.__file = "src/components/ELContainer/ElFooter.vue";

//
var script$3 = defineComponent({
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
});

function render$3(_ctx, _cache) {
  return (openBlock(), createBlock("header", {
    class: "el-header",
    style: { height: _ctx.height }
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script$3.render = render$3;
script$3.__file = "src/components/ELContainer/ElHeader.vue";

//
var script$4 = defineComponent({
  name: 'ElMain'
});

const _hoisted_1$1 = { class: "el-main" };

function render$4(_ctx, _cache) {
  return (openBlock(), createBlock("main", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$4.render = render$4;
script$4.__file = "src/components/ELContainer/ElMain.vue";

var css_248z$3 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #ffffff;\n  border: 1px solid #dcdfe6;\n  border-color: #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button + .el-button {\n  margin-left: 10px;\n}\n.el-button.is-round {\n  padding: 12px 20px;\n}\n.el-button:hover,\n.el-button:focus {\n  color: #409eff;\n  border-color: #c6e2ff;\n  background-color: #ecf5ff;\n}\n.el-button:active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n  outline: none;\n}\n.el-button::-moz-focus-inner {\n  border: 0;\n}\n.el-button [class*='el-icon-'] + span {\n  margin-left: 5px;\n}\n.el-button.is-plain:hover,\n.el-button.is-plain:focus {\n  background: #ffffff;\n  border-color: #409eff;\n  color: #409eff;\n}\n.el-button.is-plain:active {\n  background: #ffffff;\n  border-color: #3a8ee6;\n  color: #3a8ee6;\n  outline: none;\n}\n.el-button.is-active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n}\n.el-button.is-disabled,\n.el-button.is-disabled:hover,\n.el-button.is-disabled:focus {\n  color: #c0c4cc;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #ffffff;\n  border-color: #ebeef5;\n}\n.el-button.is-disabled.el-button--text {\n  background-color: transparent;\n}\n.el-button.is-disabled.is-plain,\n.el-button.is-disabled.is-plain:hover,\n.el-button.is-disabled.is-plain:focus {\n  background-color: #ffffff;\n  border-color: #ebeef5;\n  color: #c0c4cc;\n}\n.el-button.is-loading {\n  position: relative;\n  pointer-events: none;\n}\n.el-button.is-loading:before {\n  pointer-events: none;\n  content: '';\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  border-radius: inherit;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n.el-button.is-round {\n  border-radius: 20px;\n  padding: 12px 23px;\n}\n.el-button.is-circle {\n  border-radius: 50%;\n  padding: 12px;\n}\n.el-button--primary {\n  color: #ffffff;\n  background-color: #409eff;\n  border-color: #409eff;\n}\n.el-button--primary:hover,\n.el-button--primary:focus {\n  background: #66b1ff;\n  border-color: #66b1ff;\n  color: #ffffff;\n}\n.el-button--primary:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--primary.is-active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #ffffff;\n}\n.el-button--primary.is-disabled,\n.el-button--primary.is-disabled:hover,\n.el-button--primary.is-disabled:focus,\n.el-button--primary.is-disabled:active {\n  color: #ffffff;\n  background-color: #a0cfff;\n  border-color: #a0cfff;\n}\n.el-button--primary.is-plain {\n  color: #409eff;\n  background: #ecf5ff;\n  border-color: #b3d8ff;\n}\n.el-button--primary.is-plain:hover,\n.el-button--primary.is-plain:focus {\n  background: #409eff;\n  border-color: #409eff;\n  color: #ffffff;\n}\n.el-button--primary.is-plain:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--primary.is-plain.is-disabled,\n.el-button--primary.is-plain.is-disabled:hover,\n.el-button--primary.is-plain.is-disabled:focus,\n.el-button--primary.is-plain.is-disabled:active {\n  color: #8cc5ff;\n  background-color: #ecf5ff;\n  border-color: #d9ecff;\n}\n.el-button--success {\n  color: #ffffff;\n  background-color: #67c23a;\n  border-color: #67c23a;\n}\n.el-button--success:hover,\n.el-button--success:focus {\n  background: #85ce61;\n  border-color: #85ce61;\n  color: #ffffff;\n}\n.el-button--success:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--success.is-active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #ffffff;\n}\n.el-button--success.is-disabled,\n.el-button--success.is-disabled:hover,\n.el-button--success.is-disabled:focus,\n.el-button--success.is-disabled:active {\n  color: #ffffff;\n  background-color: #b3e19d;\n  border-color: #b3e19d;\n}\n.el-button--success.is-plain {\n  color: #67c23a;\n  background: #f0f9eb;\n  border-color: #c2e7b0;\n}\n.el-button--success.is-plain:hover,\n.el-button--success.is-plain:focus {\n  background: #67c23a;\n  border-color: #67c23a;\n  color: #ffffff;\n}\n.el-button--success.is-plain:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--success.is-plain.is-disabled,\n.el-button--success.is-plain.is-disabled:hover,\n.el-button--success.is-plain.is-disabled:focus,\n.el-button--success.is-plain.is-disabled:active {\n  color: #a4da89;\n  background-color: #f0f9eb;\n  border-color: #e1f3d8;\n}\n.el-button--warning {\n  color: #ffffff;\n  background-color: #e6a23c;\n  border-color: #e6a23c;\n}\n.el-button--warning:hover,\n.el-button--warning:focus {\n  background: #ebb563;\n  border-color: #ebb563;\n  color: #ffffff;\n}\n.el-button--warning:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--warning.is-active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #ffffff;\n}\n.el-button--warning.is-disabled,\n.el-button--warning.is-disabled:hover,\n.el-button--warning.is-disabled:focus,\n.el-button--warning.is-disabled:active {\n  color: #ffffff;\n  background-color: #f3d19e;\n  border-color: #f3d19e;\n}\n.el-button--warning.is-plain {\n  color: #e6a23c;\n  background: #fdf6ec;\n  border-color: #f5dab1;\n}\n.el-button--warning.is-plain:hover,\n.el-button--warning.is-plain:focus {\n  background: #e6a23c;\n  border-color: #e6a23c;\n  color: #ffffff;\n}\n.el-button--warning.is-plain:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--warning.is-plain.is-disabled,\n.el-button--warning.is-plain.is-disabled:hover,\n.el-button--warning.is-plain.is-disabled:focus,\n.el-button--warning.is-plain.is-disabled:active {\n  color: #f0c78a;\n  background-color: #fdf6ec;\n  border-color: #faecd8;\n}\n.el-button--danger {\n  color: #ffffff;\n  background-color: #f56c6c;\n  border-color: #f56c6c;\n}\n.el-button--danger:hover,\n.el-button--danger:focus {\n  background: #f78989;\n  border-color: #f78989;\n  color: #ffffff;\n}\n.el-button--danger:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--danger.is-active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #ffffff;\n}\n.el-button--danger.is-disabled,\n.el-button--danger.is-disabled:hover,\n.el-button--danger.is-disabled:focus,\n.el-button--danger.is-disabled:active {\n  color: #ffffff;\n  background-color: #fab6b6;\n  border-color: #fab6b6;\n}\n.el-button--danger.is-plain {\n  color: #f56c6c;\n  background: #fef0f0;\n  border-color: #fbc4c4;\n}\n.el-button--danger.is-plain:hover,\n.el-button--danger.is-plain:focus {\n  background: #f56c6c;\n  border-color: #f56c6c;\n  color: #ffffff;\n}\n.el-button--danger.is-plain:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--danger.is-plain.is-disabled,\n.el-button--danger.is-plain.is-disabled:hover,\n.el-button--danger.is-plain.is-disabled:focus,\n.el-button--danger.is-plain.is-disabled:active {\n  color: #f9a7a7;\n  background-color: #fef0f0;\n  border-color: #fde2e2;\n}\n.el-button--info {\n  color: #ffffff;\n  background-color: #909399;\n  border-color: #909399;\n}\n.el-button--info:hover,\n.el-button--info:focus {\n  background: #a6a9ad;\n  border-color: #a6a9ad;\n  color: #ffffff;\n}\n.el-button--info:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--info.is-active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #ffffff;\n}\n.el-button--info.is-disabled,\n.el-button--info.is-disabled:hover,\n.el-button--info.is-disabled:focus,\n.el-button--info.is-disabled:active {\n  color: #ffffff;\n  background-color: #c8c9cc;\n  border-color: #c8c9cc;\n}\n.el-button--info.is-plain {\n  color: #909399;\n  background: #f4f4f5;\n  border-color: #d3d4d6;\n}\n.el-button--info.is-plain:hover,\n.el-button--info.is-plain:focus {\n  background: #909399;\n  border-color: #909399;\n  color: #ffffff;\n}\n.el-button--info.is-plain:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #ffffff;\n  outline: none;\n}\n.el-button--info.is-plain.is-disabled,\n.el-button--info.is-plain.is-disabled:hover,\n.el-button--info.is-plain.is-disabled:focus,\n.el-button--info.is-plain.is-disabled:active {\n  color: #bcbec2;\n  background-color: #f4f4f5;\n  border-color: #e9e9eb;\n}\n.el-button--medium {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button--medium.is-round {\n  padding: 10px 20px;\n}\n.el-button--medium.is-circle {\n  padding: 10px;\n}\n.el-button--small {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.el-button--small.is-round {\n  padding: 9px 15px;\n}\n.el-button--small.is-circle {\n  padding: 9px;\n}\n.el-button--mini {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.el-button--mini.is-round {\n  padding: 7px 15px;\n}\n.el-button--mini.is-circle {\n  padding: 7px;\n}\n.el-button--text {\n  border-color: transparent;\n  color: #409eff;\n  background: transparent;\n  padding-left: 0;\n  padding-right: 0;\n}\n.el-button--text:hover,\n.el-button--text:focus {\n  color: #66b1ff;\n  border-color: transparent;\n  background-color: transparent;\n}\n.el-button--text:active {\n  color: #3a8ee6;\n  border-color: transparent;\n  background-color: transparent;\n}\n.el-button--text.is-disabled,\n.el-button--text.is-disabled:hover,\n.el-button--text.is-disabled:focus {\n  border-color: transparent;\n}\n.el-button-group {\n  display: inline-block;\n  vertical-align: middle;\n}\n.el-button-group::before,\n.el-button-group::after {\n  display: table;\n  content: '';\n}\n.el-button-group::after {\n  clear: both;\n}\n.el-button-group > .el-button {\n  float: left;\n  position: relative;\n}\n.el-button-group > .el-button + .el-button {\n  margin-left: 0;\n}\n.el-button-group > .el-button.is-disabled {\n  z-index: 1;\n}\n.el-button-group > .el-button:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.el-button-group > .el-button:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.el-button-group > .el-button:first-child:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.el-button-group > .el-button:first-child:last-child.is-round {\n  border-radius: 20px;\n}\n.el-button-group > .el-button:first-child:last-child.is-circle {\n  border-radius: 50%;\n}\n.el-button-group > .el-button:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.el-button-group > .el-button:not(:last-child) {\n  margin-right: -1px;\n}\n.el-button-group > .el-button:hover,\n.el-button-group > .el-button:focus,\n.el-button-group > .el-button:active {\n  z-index: 1;\n}\n.el-button-group > .el-button.is-active {\n  z-index: 1;\n}\n.el-button-group > .el-dropdown > .el-button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--primary:first-child,\n.el-button-group .el-button--success:first-child,\n.el-button-group .el-button--warning:first-child,\n.el-button-group .el-button--danger:first-child,\n.el-button-group .el-button--info:first-child {\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--primary:last-child,\n.el-button-group .el-button--success:last-child,\n.el-button-group .el-button--warning:last-child,\n.el-button-group .el-button--danger:last-child,\n.el-button-group .el-button--info:last-child {\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.el-button-group .el-button--primary:not(:first-child):not(:last-child),\n.el-button-group .el-button--success:not(:first-child):not(:last-child),\n.el-button-group .el-button--warning:not(:first-child):not(:last-child),\n.el-button-group .el-button--danger:not(:first-child):not(:last-child),\n.el-button-group .el-button--info:not(:first-child):not(:last-child) {\n  border-left-color: rgba(255, 255, 255, 0.5);\n  border-right-color: rgba(255, 255, 255, 0.5);\n}\n";
styleInject(css_248z$3);

//
var script$5 = defineComponent({
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
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
        attrs = _ref.attrs;
    var elForm = inject(ElFormSymbol, null);
    var elFormItem = inject(ElFormItemSymbol, null);
    var elGlobalConfig = useGlobal();
    var buttonSize = computed$1(function () {
      return props.size || (elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize) || (elGlobalConfig === null || elGlobalConfig === void 0 ? void 0 : elGlobalConfig.size);
    });
    var buttonDisabled = computed$1(function () {
      return props.disabled || (elForm === null || elForm === void 0 ? void 0 : elForm.disabled);
    });
    return {
      buttonSize: buttonSize,
      buttonDisabled: buttonDisabled
    };
  }
});

const _hoisted_1$1$1 = {
  key: 0,
  class: "el-icon-loading"
};
const _hoisted_2$1 = { key: 0 };

function render$5(_ctx, _cache) {
  return (openBlock(), createBlock("button", mergeProps({
    class: ["el-button", [
      _ctx.type ? 'el-button--' + _ctx.type : '',
      _ctx.buttonSize ? 'el-button--' + _ctx.buttonSize : '',
      {
        'is-disabled': _ctx.buttonDisabled,
        'is-loading': _ctx.loading,
        'is-plain': _ctx.plain,
        'is-round': _ctx.round,
        'is-circle': _ctx.circle
      }
    ]],
    disabled: _ctx.buttonDisabled || _ctx.loading,
    autofocus: _ctx.autofocus,
    type: _ctx.nativeType
  }, _ctx.$attrs), [
    (_ctx.loading)
      ? (openBlock(), createBlock("i", _hoisted_1$1$1))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createBlock("i", {
          key: 0,
          class: _ctx.icon
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 16 /* FULL_PROPS */, ["disabled", "autofocus", "type"]))
}

script$5.render = render$5;
script$5.__file = "src/components/ElButton/ElButton.vue";

//
var script$6 = defineComponent({
  name: 'ElButtonGroup'
});

const _hoisted_1$2 = { class: "el-button-group" };

function render$6(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$6.render = render$6;
script$6.__file = "src/components/ElButton/ElButtonGroup.vue";

var css_248z$4 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n@font-face {\n  font-family: 'element-icons';\n  src: url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff');\n  font-weight: normal;\n  font-display: 'auto';\n  font-style: normal;\n}\n[class^='el-icon-'],\n[class*=' el-icon-'] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'element-icons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: baseline;\n  display: inline-block;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.el-icon-ice-cream-round:before {\n  content: '\\e6a0';\n}\n.el-icon-ice-cream-square:before {\n  content: '\\e6a3';\n}\n.el-icon-lollipop:before {\n  content: '\\e6a4';\n}\n.el-icon-potato-strips:before {\n  content: '\\e6a5';\n}\n.el-icon-milk-tea:before {\n  content: '\\e6a6';\n}\n.el-icon-ice-drink:before {\n  content: '\\e6a7';\n}\n.el-icon-ice-tea:before {\n  content: '\\e6a9';\n}\n.el-icon-coffee:before {\n  content: '\\e6aa';\n}\n.el-icon-orange:before {\n  content: '\\e6ab';\n}\n.el-icon-pear:before {\n  content: '\\e6ac';\n}\n.el-icon-apple:before {\n  content: '\\e6ad';\n}\n.el-icon-cherry:before {\n  content: '\\e6ae';\n}\n.el-icon-watermelon:before {\n  content: '\\e6af';\n}\n.el-icon-grape:before {\n  content: '\\e6b0';\n}\n.el-icon-refrigerator:before {\n  content: '\\e6b1';\n}\n.el-icon-goblet-square-full:before {\n  content: '\\e6b2';\n}\n.el-icon-goblet-square:before {\n  content: '\\e6b3';\n}\n.el-icon-goblet-full:before {\n  content: '\\e6b4';\n}\n.el-icon-goblet:before {\n  content: '\\e6b5';\n}\n.el-icon-cold-drink:before {\n  content: '\\e6b6';\n}\n.el-icon-coffee-cup:before {\n  content: '\\e6b8';\n}\n.el-icon-water-cup:before {\n  content: '\\e6b9';\n}\n.el-icon-hot-water:before {\n  content: '\\e6ba';\n}\n.el-icon-ice-cream:before {\n  content: '\\e6bb';\n}\n.el-icon-dessert:before {\n  content: '\\e6bc';\n}\n.el-icon-sugar:before {\n  content: '\\e6bd';\n}\n.el-icon-tableware:before {\n  content: '\\e6be';\n}\n.el-icon-burger:before {\n  content: '\\e6bf';\n}\n.el-icon-knife-fork:before {\n  content: '\\e6c1';\n}\n.el-icon-fork-spoon:before {\n  content: '\\e6c2';\n}\n.el-icon-chicken:before {\n  content: '\\e6c3';\n}\n.el-icon-food:before {\n  content: '\\e6c4';\n}\n.el-icon-dish-1:before {\n  content: '\\e6c5';\n}\n.el-icon-dish:before {\n  content: '\\e6c6';\n}\n.el-icon-moon-night:before {\n  content: '\\e6ee';\n}\n.el-icon-moon:before {\n  content: '\\e6f0';\n}\n.el-icon-cloudy-and-sunny:before {\n  content: '\\e6f1';\n}\n.el-icon-partly-cloudy:before {\n  content: '\\e6f2';\n}\n.el-icon-cloudy:before {\n  content: '\\e6f3';\n}\n.el-icon-sunny:before {\n  content: '\\e6f6';\n}\n.el-icon-sunset:before {\n  content: '\\e6f7';\n}\n.el-icon-sunrise-1:before {\n  content: '\\e6f8';\n}\n.el-icon-sunrise:before {\n  content: '\\e6f9';\n}\n.el-icon-heavy-rain:before {\n  content: '\\e6fa';\n}\n.el-icon-lightning:before {\n  content: '\\e6fb';\n}\n.el-icon-light-rain:before {\n  content: '\\e6fc';\n}\n.el-icon-wind-power:before {\n  content: '\\e6fd';\n}\n.el-icon-baseball:before {\n  content: '\\e712';\n}\n.el-icon-soccer:before {\n  content: '\\e713';\n}\n.el-icon-football:before {\n  content: '\\e715';\n}\n.el-icon-basketball:before {\n  content: '\\e716';\n}\n.el-icon-ship:before {\n  content: '\\e73f';\n}\n.el-icon-truck:before {\n  content: '\\e740';\n}\n.el-icon-bicycle:before {\n  content: '\\e741';\n}\n.el-icon-mobile-phone:before {\n  content: '\\e6d3';\n}\n.el-icon-service:before {\n  content: '\\e6d4';\n}\n.el-icon-key:before {\n  content: '\\e6e2';\n}\n.el-icon-unlock:before {\n  content: '\\e6e4';\n}\n.el-icon-lock:before {\n  content: '\\e6e5';\n}\n.el-icon-watch:before {\n  content: '\\e6fe';\n}\n.el-icon-watch-1:before {\n  content: '\\e6ff';\n}\n.el-icon-timer:before {\n  content: '\\e702';\n}\n.el-icon-alarm-clock:before {\n  content: '\\e703';\n}\n.el-icon-map-location:before {\n  content: '\\e704';\n}\n.el-icon-delete-location:before {\n  content: '\\e705';\n}\n.el-icon-add-location:before {\n  content: '\\e706';\n}\n.el-icon-location-information:before {\n  content: '\\e707';\n}\n.el-icon-location-outline:before {\n  content: '\\e708';\n}\n.el-icon-location:before {\n  content: '\\e79e';\n}\n.el-icon-place:before {\n  content: '\\e709';\n}\n.el-icon-discover:before {\n  content: '\\e70a';\n}\n.el-icon-first-aid-kit:before {\n  content: '\\e70b';\n}\n.el-icon-trophy-1:before {\n  content: '\\e70c';\n}\n.el-icon-trophy:before {\n  content: '\\e70d';\n}\n.el-icon-medal:before {\n  content: '\\e70e';\n}\n.el-icon-medal-1:before {\n  content: '\\e70f';\n}\n.el-icon-stopwatch:before {\n  content: '\\e710';\n}\n.el-icon-mic:before {\n  content: '\\e711';\n}\n.el-icon-copy-document:before {\n  content: '\\e718';\n}\n.el-icon-full-screen:before {\n  content: '\\e719';\n}\n.el-icon-switch-button:before {\n  content: '\\e71b';\n}\n.el-icon-aim:before {\n  content: '\\e71c';\n}\n.el-icon-crop:before {\n  content: '\\e71d';\n}\n.el-icon-odometer:before {\n  content: '\\e71e';\n}\n.el-icon-time:before {\n  content: '\\e71f';\n}\n.el-icon-bangzhu:before {\n  content: '\\e724';\n}\n.el-icon-close-notification:before {\n  content: '\\e726';\n}\n.el-icon-microphone:before {\n  content: '\\e727';\n}\n.el-icon-turn-off-microphone:before {\n  content: '\\e728';\n}\n.el-icon-position:before {\n  content: '\\e729';\n}\n.el-icon-postcard:before {\n  content: '\\e72a';\n}\n.el-icon-message:before {\n  content: '\\e72b';\n}\n.el-icon-chat-line-square:before {\n  content: '\\e72d';\n}\n.el-icon-chat-dot-square:before {\n  content: '\\e72e';\n}\n.el-icon-chat-dot-round:before {\n  content: '\\e72f';\n}\n.el-icon-chat-square:before {\n  content: '\\e730';\n}\n.el-icon-chat-line-round:before {\n  content: '\\e731';\n}\n.el-icon-chat-round:before {\n  content: '\\e732';\n}\n.el-icon-set-up:before {\n  content: '\\e733';\n}\n.el-icon-turn-off:before {\n  content: '\\e734';\n}\n.el-icon-open:before {\n  content: '\\e735';\n}\n.el-icon-connection:before {\n  content: '\\e736';\n}\n.el-icon-link:before {\n  content: '\\e737';\n}\n.el-icon-cpu:before {\n  content: '\\e738';\n}\n.el-icon-thumb:before {\n  content: '\\e739';\n}\n.el-icon-female:before {\n  content: '\\e73a';\n}\n.el-icon-male:before {\n  content: '\\e73b';\n}\n.el-icon-guide:before {\n  content: '\\e73c';\n}\n.el-icon-news:before {\n  content: '\\e73e';\n}\n.el-icon-price-tag:before {\n  content: '\\e744';\n}\n.el-icon-discount:before {\n  content: '\\e745';\n}\n.el-icon-wallet:before {\n  content: '\\e747';\n}\n.el-icon-coin:before {\n  content: '\\e748';\n}\n.el-icon-money:before {\n  content: '\\e749';\n}\n.el-icon-bank-card:before {\n  content: '\\e74a';\n}\n.el-icon-box:before {\n  content: '\\e74b';\n}\n.el-icon-present:before {\n  content: '\\e74c';\n}\n.el-icon-sell:before {\n  content: '\\e6d5';\n}\n.el-icon-sold-out:before {\n  content: '\\e6d6';\n}\n.el-icon-shopping-bag-2:before {\n  content: '\\e74d';\n}\n.el-icon-shopping-bag-1:before {\n  content: '\\e74e';\n}\n.el-icon-shopping-cart-2:before {\n  content: '\\e74f';\n}\n.el-icon-shopping-cart-1:before {\n  content: '\\e750';\n}\n.el-icon-shopping-cart-full:before {\n  content: '\\e751';\n}\n.el-icon-smoking:before {\n  content: '\\e752';\n}\n.el-icon-no-smoking:before {\n  content: '\\e753';\n}\n.el-icon-house:before {\n  content: '\\e754';\n}\n.el-icon-table-lamp:before {\n  content: '\\e755';\n}\n.el-icon-school:before {\n  content: '\\e756';\n}\n.el-icon-office-building:before {\n  content: '\\e757';\n}\n.el-icon-toilet-paper:before {\n  content: '\\e758';\n}\n.el-icon-notebook-2:before {\n  content: '\\e759';\n}\n.el-icon-notebook-1:before {\n  content: '\\e75a';\n}\n.el-icon-files:before {\n  content: '\\e75b';\n}\n.el-icon-collection:before {\n  content: '\\e75c';\n}\n.el-icon-receiving:before {\n  content: '\\e75d';\n}\n.el-icon-suitcase-1:before {\n  content: '\\e760';\n}\n.el-icon-suitcase:before {\n  content: '\\e761';\n}\n.el-icon-film:before {\n  content: '\\e763';\n}\n.el-icon-collection-tag:before {\n  content: '\\e765';\n}\n.el-icon-data-analysis:before {\n  content: '\\e766';\n}\n.el-icon-pie-chart:before {\n  content: '\\e767';\n}\n.el-icon-data-board:before {\n  content: '\\e768';\n}\n.el-icon-data-line:before {\n  content: '\\e76d';\n}\n.el-icon-reading:before {\n  content: '\\e769';\n}\n.el-icon-magic-stick:before {\n  content: '\\e76a';\n}\n.el-icon-coordinate:before {\n  content: '\\e76b';\n}\n.el-icon-mouse:before {\n  content: '\\e76c';\n}\n.el-icon-brush:before {\n  content: '\\e76e';\n}\n.el-icon-headset:before {\n  content: '\\e76f';\n}\n.el-icon-umbrella:before {\n  content: '\\e770';\n}\n.el-icon-scissors:before {\n  content: '\\e771';\n}\n.el-icon-mobile:before {\n  content: '\\e773';\n}\n.el-icon-attract:before {\n  content: '\\e774';\n}\n.el-icon-monitor:before {\n  content: '\\e775';\n}\n.el-icon-search:before {\n  content: '\\e778';\n}\n.el-icon-takeaway-box:before {\n  content: '\\e77a';\n}\n.el-icon-paperclip:before {\n  content: '\\e77d';\n}\n.el-icon-printer:before {\n  content: '\\e77e';\n}\n.el-icon-document-add:before {\n  content: '\\e782';\n}\n.el-icon-document:before {\n  content: '\\e785';\n}\n.el-icon-document-checked:before {\n  content: '\\e786';\n}\n.el-icon-document-copy:before {\n  content: '\\e787';\n}\n.el-icon-document-delete:before {\n  content: '\\e788';\n}\n.el-icon-document-remove:before {\n  content: '\\e789';\n}\n.el-icon-tickets:before {\n  content: '\\e78b';\n}\n.el-icon-folder-checked:before {\n  content: '\\e77f';\n}\n.el-icon-folder-delete:before {\n  content: '\\e780';\n}\n.el-icon-folder-remove:before {\n  content: '\\e781';\n}\n.el-icon-folder-add:before {\n  content: '\\e783';\n}\n.el-icon-folder-opened:before {\n  content: '\\e784';\n}\n.el-icon-folder:before {\n  content: '\\e78a';\n}\n.el-icon-edit-outline:before {\n  content: '\\e764';\n}\n.el-icon-edit:before {\n  content: '\\e78c';\n}\n.el-icon-date:before {\n  content: '\\e78e';\n}\n.el-icon-c-scale-to-original:before {\n  content: '\\e7c6';\n}\n.el-icon-view:before {\n  content: '\\e6ce';\n}\n.el-icon-loading:before {\n  content: '\\e6cf';\n}\n.el-icon-rank:before {\n  content: '\\e6d1';\n}\n.el-icon-sort-down:before {\n  content: '\\e7c4';\n}\n.el-icon-sort-up:before {\n  content: '\\e7c5';\n}\n.el-icon-sort:before {\n  content: '\\e6d2';\n}\n.el-icon-finished:before {\n  content: '\\e6cd';\n}\n.el-icon-refresh-left:before {\n  content: '\\e6c7';\n}\n.el-icon-refresh-right:before {\n  content: '\\e6c8';\n}\n.el-icon-refresh:before {\n  content: '\\e6d0';\n}\n.el-icon-video-play:before {\n  content: '\\e7c0';\n}\n.el-icon-video-pause:before {\n  content: '\\e7c1';\n}\n.el-icon-d-arrow-right:before {\n  content: '\\e6dc';\n}\n.el-icon-d-arrow-left:before {\n  content: '\\e6dd';\n}\n.el-icon-arrow-up:before {\n  content: '\\e6e1';\n}\n.el-icon-arrow-down:before {\n  content: '\\e6df';\n}\n.el-icon-arrow-right:before {\n  content: '\\e6e0';\n}\n.el-icon-arrow-left:before {\n  content: '\\e6de';\n}\n.el-icon-top-right:before {\n  content: '\\e6e7';\n}\n.el-icon-top-left:before {\n  content: '\\e6e8';\n}\n.el-icon-top:before {\n  content: '\\e6e6';\n}\n.el-icon-bottom:before {\n  content: '\\e6eb';\n}\n.el-icon-right:before {\n  content: '\\e6e9';\n}\n.el-icon-back:before {\n  content: '\\e6ea';\n}\n.el-icon-bottom-right:before {\n  content: '\\e6ec';\n}\n.el-icon-bottom-left:before {\n  content: '\\e6ed';\n}\n.el-icon-caret-top:before {\n  content: '\\e78f';\n}\n.el-icon-caret-bottom:before {\n  content: '\\e790';\n}\n.el-icon-caret-right:before {\n  content: '\\e791';\n}\n.el-icon-caret-left:before {\n  content: '\\e792';\n}\n.el-icon-d-caret:before {\n  content: '\\e79a';\n}\n.el-icon-share:before {\n  content: '\\e793';\n}\n.el-icon-menu:before {\n  content: '\\e798';\n}\n.el-icon-s-grid:before {\n  content: '\\e7a6';\n}\n.el-icon-s-check:before {\n  content: '\\e7a7';\n}\n.el-icon-s-data:before {\n  content: '\\e7a8';\n}\n.el-icon-s-opportunity:before {\n  content: '\\e7aa';\n}\n.el-icon-s-custom:before {\n  content: '\\e7ab';\n}\n.el-icon-s-claim:before {\n  content: '\\e7ad';\n}\n.el-icon-s-finance:before {\n  content: '\\e7ae';\n}\n.el-icon-s-comment:before {\n  content: '\\e7af';\n}\n.el-icon-s-flag:before {\n  content: '\\e7b0';\n}\n.el-icon-s-marketing:before {\n  content: '\\e7b1';\n}\n.el-icon-s-shop:before {\n  content: '\\e7b4';\n}\n.el-icon-s-open:before {\n  content: '\\e7b5';\n}\n.el-icon-s-management:before {\n  content: '\\e7b6';\n}\n.el-icon-s-ticket:before {\n  content: '\\e7b7';\n}\n.el-icon-s-release:before {\n  content: '\\e7b8';\n}\n.el-icon-s-home:before {\n  content: '\\e7b9';\n}\n.el-icon-s-promotion:before {\n  content: '\\e7ba';\n}\n.el-icon-s-operation:before {\n  content: '\\e7bb';\n}\n.el-icon-s-unfold:before {\n  content: '\\e7bc';\n}\n.el-icon-s-fold:before {\n  content: '\\e7a9';\n}\n.el-icon-s-platform:before {\n  content: '\\e7bd';\n}\n.el-icon-s-order:before {\n  content: '\\e7be';\n}\n.el-icon-s-cooperation:before {\n  content: '\\e7bf';\n}\n.el-icon-bell:before {\n  content: '\\e725';\n}\n.el-icon-message-solid:before {\n  content: '\\e799';\n}\n.el-icon-video-camera:before {\n  content: '\\e772';\n}\n.el-icon-video-camera-solid:before {\n  content: '\\e796';\n}\n.el-icon-camera:before {\n  content: '\\e779';\n}\n.el-icon-camera-solid:before {\n  content: '\\e79b';\n}\n.el-icon-download:before {\n  content: '\\e77c';\n}\n.el-icon-upload2:before {\n  content: '\\e77b';\n}\n.el-icon-upload:before {\n  content: '\\e7c3';\n}\n.el-icon-picture-outline-round:before {\n  content: '\\e75f';\n}\n.el-icon-picture-outline:before {\n  content: '\\e75e';\n}\n.el-icon-picture:before {\n  content: '\\e79f';\n}\n.el-icon-close:before {\n  content: '\\e6db';\n}\n.el-icon-check:before {\n  content: '\\e6da';\n}\n.el-icon-plus:before {\n  content: '\\e6d9';\n}\n.el-icon-minus:before {\n  content: '\\e6d8';\n}\n.el-icon-help:before {\n  content: '\\e73d';\n}\n.el-icon-s-help:before {\n  content: '\\e7b3';\n}\n.el-icon-circle-close:before {\n  content: '\\e78d';\n}\n.el-icon-circle-check:before {\n  content: '\\e720';\n}\n.el-icon-circle-plus-outline:before {\n  content: '\\e723';\n}\n.el-icon-remove-outline:before {\n  content: '\\e722';\n}\n.el-icon-zoom-out:before {\n  content: '\\e776';\n}\n.el-icon-zoom-in:before {\n  content: '\\e777';\n}\n.el-icon-error:before {\n  content: '\\e79d';\n}\n.el-icon-success:before {\n  content: '\\e79c';\n}\n.el-icon-circle-plus:before {\n  content: '\\e7a0';\n}\n.el-icon-remove:before {\n  content: '\\e7a2';\n}\n.el-icon-info:before {\n  content: '\\e7a1';\n}\n.el-icon-question:before {\n  content: '\\e7a4';\n}\n.el-icon-warning-outline:before {\n  content: '\\e6c9';\n}\n.el-icon-warning:before {\n  content: '\\e7a3';\n}\n.el-icon-goods:before {\n  content: '\\e7c2';\n}\n.el-icon-s-goods:before {\n  content: '\\e7b2';\n}\n.el-icon-star-off:before {\n  content: '\\e717';\n}\n.el-icon-star-on:before {\n  content: '\\e797';\n}\n.el-icon-more-outline:before {\n  content: '\\e6cc';\n}\n.el-icon-more:before {\n  content: '\\e794';\n}\n.el-icon-phone-outline:before {\n  content: '\\e6cb';\n}\n.el-icon-phone:before {\n  content: '\\e795';\n}\n.el-icon-user:before {\n  content: '\\e6e3';\n}\n.el-icon-user-solid:before {\n  content: '\\e7a5';\n}\n.el-icon-setting:before {\n  content: '\\e6ca';\n}\n.el-icon-s-tools:before {\n  content: '\\e7ac';\n}\n.el-icon-delete:before {\n  content: '\\e6d7';\n}\n.el-icon-delete-solid:before {\n  content: '\\e7c9';\n}\n.el-icon-eleme:before {\n  content: '\\e7c7';\n}\n.el-icon-platform-eleme:before {\n  content: '\\e7ca';\n}\n.el-icon-loading {\n  -webkit-animation: rotating 2s linear infinite;\n          animation: rotating 2s linear infinite;\n}\n.el-icon--right {\n  margin-left: 5px;\n}\n.el-icon--left {\n  margin-right: 5px;\n}\n@-webkit-keyframes rotating {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes rotating {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n";
styleInject(css_248z$4);

//
var script$7 = defineComponent({
  name: 'ElIcon',
  props: {
    name: String
  }
});

function render$7(_ctx, _cache) {
  return (openBlock(), createBlock("i", {
    class: 'el-icon-' + _ctx.name
  }, null, 2 /* CLASS */))
}

script$7.render = render$7;
script$7.__file = "src/components/ElIcon/ElIcon.vue";

var css_248z$5 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-menu {\n  border-right: solid 1px #e6e6e6;\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding-left: 0;\n  background-color: #ffffff;\n}\n.el-menu::before,\n.el-menu::after {\n  display: table;\n  content: '';\n}\n.el-menu::after {\n  clear: both;\n}\n.el-menu.el-menu--horizontal {\n  border-bottom: solid 1px #e6e6e6;\n}\n.el-menu--horizontal {\n  border-right: none;\n}\n.el-menu--horizontal > .el-menu-item {\n  float: left;\n  height: 60px;\n  line-height: 60px;\n  margin: 0;\n  border-bottom: 2px solid transparent;\n  color: #909399;\n}\n.el-menu--horizontal > .el-menu-item a,\n.el-menu--horizontal > .el-menu-item a:hover {\n  color: inherit;\n}\n.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,\n.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {\n  background-color: #fff;\n}\n.el-menu--horizontal > .el-submenu {\n  float: left;\n}\n.el-menu--horizontal > .el-submenu:focus,\n.el-menu--horizontal > .el-submenu:hover {\n  outline: none;\n}\n.el-menu--horizontal > .el-submenu:focus .el-submenu__title,\n.el-menu--horizontal > .el-submenu:hover .el-submenu__title {\n  color: #303133;\n}\n.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {\n  border-bottom: 2px solid #409eff;\n  color: #303133;\n}\n.el-menu--horizontal > .el-submenu .el-submenu__title {\n  height: 60px;\n  line-height: 60px;\n  border-bottom: 2px solid transparent;\n  color: #909399;\n}\n.el-menu--horizontal > .el-submenu .el-submenu__title:hover {\n  background-color: #fff;\n}\n.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {\n  position: static;\n  vertical-align: middle;\n  margin-left: 8px;\n  margin-top: -3px;\n}\n.el-menu--horizontal .el-menu .el-menu-item,\n.el-menu--horizontal .el-menu .el-submenu__title {\n  background-color: #ffffff;\n  float: none;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 10px;\n  color: #909399;\n}\n.el-menu--horizontal .el-menu .el-menu-item.is-active,\n.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {\n  color: #303133;\n}\n.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,\n.el-menu--horizontal .el-menu-item:not(.is-disabled):focus {\n  outline: none;\n  color: #303133;\n}\n.el-menu--horizontal > .el-menu-item.is-active {\n  border-bottom: 2px solid #409eff;\n  color: #303133;\n}\n.el-menu--collapse {\n  width: 64px;\n}\n.el-menu--collapse > .el-menu-item [class^='el-icon-'],\n.el-menu--collapse > .el-submenu > .el-submenu__title [class^='el-icon-'] {\n  margin: 0;\n  vertical-align: middle;\n  width: 24px;\n  text-align: center;\n}\n.el-menu--collapse > .el-menu-item .el-submenu__icon-arrow,\n.el-menu--collapse > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {\n  display: none;\n}\n.el-menu--collapse > .el-menu-item span,\n.el-menu--collapse > .el-submenu > .el-submenu__title span {\n  height: 0;\n  width: 0;\n  overflow: hidden;\n  visibility: hidden;\n  display: inline-block;\n}\n.el-menu--collapse > .el-menu-item.is-active i {\n  color: inherit;\n}\n.el-menu--collapse .el-menu .el-submenu {\n  min-width: 200px;\n}\n.el-menu--collapse .el-submenu {\n  position: relative;\n}\n.el-menu--collapse .el-submenu .el-menu {\n  position: absolute;\n  margin-left: 5px;\n  top: 0;\n  left: 100%;\n  z-index: 10;\n  border: 1px solid #e4e7ed;\n  border-radius: 2px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.el-menu--collapse .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {\n  transform: none;\n}\n.el-menu--popup {\n  z-index: 100;\n  min-width: 200px;\n  border: none;\n  padding: 5px 0;\n  border-radius: 2px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.el-menu--popup-bottom-start {\n  margin-top: 5px;\n}\n.el-menu--popup-right-start {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.el-menu-item {\n  height: 56px;\n  line-height: 56px;\n  font-size: 14px;\n  color: #303133;\n  padding: 0 20px;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  transition: border-color 0.3s, background-color 0.3s, color 0.3s;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.el-menu-item * {\n  vertical-align: middle;\n}\n.el-menu-item i {\n  color: #909399;\n}\n.el-menu-item:hover,\n.el-menu-item:focus {\n  outline: none;\n  background-color: #ecf5ff;\n}\n.el-menu-item.is-disabled {\n  opacity: 0.25;\n  cursor: not-allowed;\n  background: none !important;\n}\n.el-menu-item [class^='el-icon-'] {\n  margin-right: 5px;\n  width: 24px;\n  text-align: center;\n  font-size: 18px;\n  vertical-align: middle;\n}\n.el-menu-item.is-active {\n  color: #409eff;\n}\n.el-menu-item.is-active i {\n  color: inherit;\n}\n.el-submenu {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\n.el-submenu__title {\n  height: 56px;\n  line-height: 56px;\n  font-size: 14px;\n  color: #303133;\n  padding: 0 20px;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  transition: border-color 0.3s, background-color 0.3s, color 0.3s;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.el-submenu__title * {\n  vertical-align: middle;\n}\n.el-submenu__title i {\n  color: #909399;\n}\n.el-submenu__title:hover,\n.el-submenu__title:focus {\n  outline: none;\n  background-color: #ecf5ff;\n}\n.el-submenu__title.is-disabled {\n  opacity: 0.25;\n  cursor: not-allowed;\n  background: none !important;\n}\n.el-submenu__title:hover {\n  background-color: #ecf5ff;\n}\n.el-submenu .el-menu {\n  border: none;\n}\n.el-submenu .el-menu-item {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 45px;\n  min-width: 200px;\n}\n.el-submenu__icon-arrow {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -7px;\n  transition: transform 0.3s;\n  font-size: 12px;\n}\n.el-submenu.is-active .el-submenu__title {\n  border-bottom-color: #409eff;\n}\n.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {\n  transform: rotateZ(180deg);\n}\n.el-submenu.is-disabled .el-submenu__title,\n.el-submenu.is-disabled .el-menu-item {\n  opacity: 0.25;\n  cursor: not-allowed;\n  background: none !important;\n}\n.el-submenu [class^='el-icon-'] {\n  vertical-align: middle;\n  margin-right: 5px;\n  width: 24px;\n  text-align: center;\n  font-size: 18px;\n}\n.el-menu-item-group > ul {\n  padding: 0;\n}\n.el-menu-item-group__title {\n  padding: 7px 0 7px 20px;\n  line-height: normal;\n  font-size: 12px;\n  color: #909399;\n}\n.horizontal-collapse-transition .el-submenu__title .el-submenu__icon-arrow {\n  transition: 0.2s;\n  opacity: 0;\n}\n";
styleInject(css_248z$5);

var ELROOTMENU_KEY = Symbol('ElRootMenu');
var ElPARENTMENU_KEY = Symbol('ElParentMenu');
function useElMenuContext() {
  var root = inject(ELROOTMENU_KEY, null);
  var parent = inject(ElPARENTMENU_KEY, null);
  return {
    root: root,
    parent: parent
  };
}
function useElMenu(state) {
  var id = Symbol('ElSubMenu');
  provide(ELROOTMENU_KEY, {
    state: state,
    open: function open(id) {
      if (state.openedMenus.indexOf(id) === -1) {
        state.openedMenus.push(id);
      }
    },
    close: function close(id) {
      var menuIndex = state.openedMenus.indexOf(id);

      if (menuIndex >= 0) {
        state.openedMenus.splice(menuIndex, 1);
      }
    },
    select: function select(index) {
      state.activeIndex = index;
    }
  });
  var pvState = toRefs(reactive({
    id: id,
    items: state.items,
    deep: 0,
    isRoot: true,
    isActive: false,
    isOpen: false,
    style: state.mode !== 'horizontal' ? {
      paddingLeft: '20px'
    } : {},
    icon: 'el-icon-arrow-down',
    placement: 'right-start'
  }));
  provide(ElPARENTMENU_KEY, pvState);
}
function useElSubMenu() {
  var id = Symbol('ElSubMenu');

  var _useElMenuContext = useElMenuContext(),
      root = _useElMenuContext.root,
      parent = _useElMenuContext.parent;

  var pvState = toRefs(reactive({
    id: id,
    items: [],
    deep: parent.deep.value + 1,
    isRoot: false,
    isActive: computed$1(function () {
      return pvState.items.value.some(function (item) {
        return item.isActive;
      });
    }),
    isOpen: computed$1(function () {
      return root.state.openedMenus.indexOf(id) !== -1;
    }),
    style: computed$1(function () {
      var style = {
        backgroundColor: root.state.backgroundColor,
        borderBottomColor: pvState.isActive.value ? root.state.activeTextColor : 'transparent',
        color: pvState.isActive.value ? root.state.activeTextColor : root.state.textColor
      };

      if (root.state.mode !== 'horizontal') {
        style.color = root.state.textColor;
        style.paddingLeft = (parent.deep.value + 1) * 20 + 'px';
      }

      return style;
    }),
    icon: computed$1(function () {
      return root.state.mode === 'horizontal' && parent.isRoot || root.state.mode === 'vertical' && !root.state.collapse ? 'el-icon-arrow-down' : 'el-icon-arrow-right';
    }),
    placement: computed$1(function () {
      return root.state.mode === 'horizontal' && parent.isRoot ? 'bottom-start' : 'right-start';
    })
  }));
  provide(ElPARENTMENU_KEY, pvState);
  return {
    root: root,
    parent: parent,
    state: pvState
  };
}
function useElMenuItem() {
  var id = Symbol('ElMenuItem');

  var _useElMenuContext2 = useElMenuContext(),
      root = _useElMenuContext2.root,
      parent = _useElMenuContext2.parent;

  var state = toRefs(readonly(reactive({
    id: id,
    index: computed$1(function () {
      return root.state.items.indexOf(id);
    }),
    isActive: computed$1(function () {
      return state.index.value !== -1 && state.index.value === root.state.activeIndex;
    }),
    style: computed$1(function () {
      var style = {
        color: state.isActive.value ? root.state.activeTextColor : root.state.textColor,
        backgroundColor: root.state.backgroundColor
      };

      if (root.state.mode === 'vertical') {
        style.paddingLeft = (parent.deep.value + 1) * 20 + 'px';
      }

      if (root.state.mode === 'horizontal') {
        style.borderBottomColor = state.isActive.value ? root.state.activeTextColor : 'transparent';
      }

      return style;
    })
  })));
  onMounted(function () {
    if (parent.deep.value >= 0) {
      if (parent.items.value.indexOf(id) === -1) {
        parent.items.value.push(id);
      }
    }

    if (root.state.items.indexOf(id) === -1) {
      root.state.items.push(id);
    }
  });
  onUnmounted(function () {
    if (parent.deep.value >= 0) {
      if (parent.items.value.indexOf(id) === -1) {
        var indexWithParent = parent.items.value.indexOf(id);
        parent.items.value.splice(indexWithParent, 1);
      }
    }

    if (state.index.value >= 0) {
      root.state.items.splice(state.index.value, 1);
    }
  });
  return {
    root: root,
    parent: parent,
    state: state
  };
}

var ElMenu = defineComponent({
  name: 'Elmenu',
  props: {
    mode: String,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    trigger: String,
    collapse: Boolean
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        emit = _ref.emit;
    var state = reactive({
      mode: props.mode || 'vertical',
      backgroundColor: props.backgroundColor || '',
      textColor: props.textColor || '',
      activeTextColor: props.activeTextColor || '',
      trigger: props.trigger || 'hover',
      collapse: props.collapse || false,
      isPopup: props.mode === 'horizontal' || !!(props.mode === 'vertical' && props.collapse),
      activeIndex: -1,
      items: [],
      openedMenus: []
    });
    useElMenu(state);
    onMounted(function () {
      setTimeout(function () {// state.backgroundColor = 'red';
      }, 5000);
    });
    return function () {
      var _slots$default;

      return h('ul', mergeProps({
        style: {
          backgroundColor: state.backgroundColor || ''
        },
        class: {
          'el-menu--horizontal': state.mode === 'horizontal',
          'el-menu': true
        }
      }, attrs), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
});

var ElMenuItem = defineComponent({
  name: 'ElMenuItem',
  props: {
    path: [String, Object]
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;

    var _useElMenuItem = useElMenuItem(),
        root = _useElMenuItem.root,
        state = _useElMenuItem.state;

    var router = useRouter();

    var handleClick = function handleClick() {
      root.select(state.index.value);

      if (props.path) {
        router.push(props.path);
      }
    };

    return function () {
      var _slots$default, _slots$title;

      return h('li', mergeProps({
        style: [state.style.value],
        class: {
          'el-menu-item': true,
          'is-active': state.isActive.value,
          'is-disabled': false
        },
        role: 'menuitem',
        tabindex: '-1',
        onClick: handleClick
      }, attrs), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)]);
    };
  }
});

var css_248z$6 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-popper {\n  display: none;\n}\n.el-popper[data-show] {\n  display: block;\n}\n.el-popper .popper__arrow,\n.el-popper .popper__arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.el-popper .popper__arrow {\n  border-width: 6px;\n  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n          filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n}\n.el-popper .popper__arrow::after {\n  content: ' ';\n  border-width: 6px;\n}\n.el-popper[data-popper-placement^='top'] {\n  margin-bottom: 12px;\n}\n.el-popper[data-popper-placement^='top'] .popper__arrow {\n  bottom: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-color: #ebeef5;\n  border-bottom-width: 0;\n}\n.el-popper[data-popper-placement^='top'] .popper__arrow::after {\n  bottom: 1px;\n  margin-left: -6px;\n  border-top-color: #ffffff;\n  border-bottom-width: 0;\n}\n.el-popper[data-popper-placement^='bottom'] {\n  margin-top: 12px;\n}\n.el-popper[data-popper-placement^='bottom'] .popper__arrow {\n  top: -6px;\n  left: 50%;\n  margin-right: 3px;\n  border-top-width: 0;\n  border-bottom-color: #ebeef5;\n}\n.el-popper[data-popper-placement^='bottom'] .popper__arrow::after {\n  top: 1px;\n  margin-left: -6px;\n  border-top-width: 0;\n  border-bottom-color: #ffffff;\n}\n.el-popper[data-popper-placement^='right'] {\n  margin-left: 12px;\n}\n.el-popper[data-popper-placement^='right'] .popper__arrow {\n  top: 50%;\n  left: -6px;\n  margin-bottom: 3px;\n  border-right-color: #ebeef5;\n  border-left-width: 0;\n}\n.el-popper[data-popper-placement^='right'] .popper__arrow::after {\n  bottom: -6px;\n  left: 1px;\n  border-right-color: #ffffff;\n  border-left-width: 0;\n}\n.el-popper[data-popper-placement^='left'] {\n  margin-right: 12px;\n}\n.el-popper[data-popper-placement^='left'] .popper__arrow {\n  top: 50%;\n  right: -6px;\n  margin-bottom: 3px;\n  border-right-width: 0;\n  border-left-color: #ebeef5;\n}\n.el-popper[data-popper-placement^='left'] .popper__arrow::after {\n  right: 1px;\n  bottom: -6px;\n  margin-left: -6px;\n  border-right-width: 0;\n  border-left-color: #ffffff;\n}\n";
styleInject(css_248z$6);

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

var id = 0;
var PREFIX = Math.ceil(Math.random() * 8999 + 1000).toString();
function uniqueId(prefix) {
  var nextId = "" + PREFIX + ++id;
  return prefix ? "" + prefix + nextId : nextId;
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

var ElPopperContextKey = Symbol('ElPopperContext');
function usePopper(referenceElRef, popperClass, options) {
  var _ref = options || {},
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? [] : _ref$modifiers,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy;

  var popperEl = createEl(uniqueId('el-popper'), normalizeClass$1(['el-popper', popperClass]));
  var popper = ref(null);
  var hideTimer = ref(null);
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
        if ( event === 'mouseenter') {
          referenceEl.addEventListener('click', function () {
            state.isHover.value = true;
          });
        } else {
          referenceEl.addEventListener(event, function () {
            state.isHover.value = true;
          });
        }

        popperEl.addEventListener(event, function () {
          state.isHover.value = true;
        });
      });
      hideEvents.forEach(function (event) {
        referenceEl.addEventListener(event, function () {
          state.isHover.value = false;
        });
        popperEl.addEventListener(event, function () {
          state.isHover.value = false;
        });
      });
    } else {
      popper.value.destroy();
      popper.value = null;
    }
  });
  var parentState = inject(ElPopperContextKey, null);
  var state = toRefs(reactive({
    id: popperEl.id,
    deep: (parentState === null || parentState === void 0 ? void 0 : parentState.deep) ? (parentState === null || parentState === void 0 ? void 0 : parentState.deep.value) + 1 : 0,
    isHover: false,
    children: [],
    hasChildOpened: computed$1(function () {
      return state.children.value.some(function (item) {
        return item.isOpen;
      });
    }),
    isOpen: computed$1(function () {
      return state.isHover.value || state.hasChildOpened.value;
    })
  }));
  provide(ElPopperContextKey, state);
  watch(state.isOpen, function (value) {
    if (value) {
      clearTimeout(hideTimer.value);
      popper.value.update();
      popperEl.setAttribute('data-show', 'true');
    } else {
      hideTimer.value = setTimeout(function () {
        popperEl.removeAttribute('data-show');
      }, 200);
    }
  });
  onMounted(function () {
    if (parentState) {
      parentState.children.value.push(state);
    }
  });
  onBeforeUnmount(function () {
    if (popper.value) {
      popper.value.destroy();
      popper.value = null;
    }

    if (parentState) {
      var index = parentState.children.value.indexOf(state);
      parentState.children.value.splice(index, 1);
    }

    removeEl(popperEl);
  });
  return {
    teleportId: popperEl.id,
    popper: popper
  };
}

//
var script$8 = defineComponent({
  name: 'ElSubmenu',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    }
  },
  setup: function setup(props) {
    var _useElSubMenu = useElSubMenu(),
        root = _useElSubMenu.root,
        parent = _useElSubMenu.parent,
        state = _useElSubMenu.state;

    var referenceRef = ref(null);
    var data = reactive({
      class: "el-menu el-menu--popup el-menu--popup-" + (parent.isRoot.value ? 'bottom-start' : 'right-start'),
      style: {
        width: '200px'
      }
    });

    var _usePopper = usePopper(referenceRef, ["el-menu--" + root.state.mode], {
      placement: parent.isRoot.value ? 'bottom-start' : 'right-start',
      modifiers: [{
        name: 'offset',
        options: {
          offset: parent.isRoot.value ? [0, 0] : [0, 4]
        }
      }]
    }),
        teleportId = _usePopper.teleportId;

    var handleClick = function handleClick() {
      if (root.state.trigger === 'hover' && root.state.mode === 'horizontal' || root.state.collapse && root.state.mode === 'vertical' || props.disabled) {
        return;
      }

      if (state.isOpen.value) {
        root.close(state.id.value);
      } else {
        root.open(state.id.value);
      }
    };

    var handleMouseenter = function handleMouseenter() {
      if (root.state.trigger === 'click' && root.state.mode === 'horizontal' || !root.state.collapse && root.state.mode === 'vertical' || props.disabled) {
        return;
      }

      root.open(state.id.value);
    };

    var handleMouseleave = function handleMouseleave() {
      if (root.state.trigger === 'click' && root.state.mode === 'horizontal' || !root.state.collapse && root.state.mode === 'vertical') {
        return;
      }

      root.close(state.id.value);
    };

    var handleTitleMouseenter = function handleTitleMouseenter() {
      if (root.state.mode === 'horizontal' && !root.state.backgroundColor) return; // submenuTitleRef.value && (submenuTitleRef.value.style.backgroundColor = root.hoverBackground);
    };

    var handleTitleMouseleave = function handleTitleMouseleave() {
      if (root.state.mode === 'horizontal' && !root.state.backgroundColor) return;
      referenceRef.value && (referenceRef.value.style.backgroundColor = root.state.backgroundColor || '');
    };

    return {
      data: data,
      state: state,
      isPopup: root.state.isPopup,
      handleClick: handleClick,
      handleMouseenter: handleMouseenter,
      handleMouseleave: handleMouseleave,
      handleTitleMouseenter: handleTitleMouseenter,
      handleTitleMouseleave: handleTitleMouseleave,
      teleportId: teleportId,
      referenceRef: referenceRef
    };
  }
});

function render$8(_ctx, _cache) {
  return (openBlock(), createBlock("li", {
    class: {
      'el-submenu': true,
      'is-active': _ctx.state.isActive,
      'is-opened': _ctx.state.isOpen,
      'is-disabled': _ctx.disabled
    },
    role: "menuitem",
    onMouseenter: _cache[4] || (_cache[4] = $event => (_ctx.handleMouseenter($event))),
    onMouseleave: _cache[5] || (_cache[5] = () => _ctx.handleMouseleave(false)),
    onFocus: _cache[6] || (_cache[6] = $event => (_ctx.handleMouseenter($event)))
  }, [
    createVNode("div", {
      ref: "referenceRef",
      class: "el-submenu__title",
      style: _ctx.state.style,
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.handleClick($event))),
      onMouseenter: _cache[2] || (_cache[2] = $event => (_ctx.handleTitleMouseenter($event))),
      onMouseleave: _cache[3] || (_cache[3] = $event => (_ctx.handleTitleMouseleave($event)))
    }, [
      renderSlot(_ctx.$slots, "title"),
      createVNode("i", {
        class: ['el-submenu__icon-arrow', _ctx.state.icon]
      }, null, 2 /* CLASS */)
    ], 36 /* STYLE, HYDRATE_EVENTS */),
    (_ctx.isPopup)
      ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: `#${_ctx.teleportId}`
        }, [
          createVNode("ul", {
            role: "menu",
            class: _ctx.data.class,
            style: { backgroundColor: _ctx.state.style.backgroundColor, ..._ctx.data.style }
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 6 /* CLASS, STYLE */)
        ], 8 /* PROPS */, ["to"]))
      : withDirectives((openBlock(), createBlock("ul", {
          key: 1,
          role: "menu",
          class: "el-menu el-menu--inline",
          style: { backgroundColor: _ctx.state.style.backgroundColor }
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 4 /* STYLE */)), [
          [vShow, _ctx.state.isOpen]
        ])
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script$8.render = render$8;
script$8.__file = "src/components/ElMenu/ElSubMenu.vue";

var ElMenuItemGroup = defineComponent({
  name: 'ElMenuItemGroup',
  props: {
    title: {
      type: String
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useElMenuContext = useElMenuContext(),
        parent = _useElMenuContext.parent;

    return function () {
      var _slots$title, _slots$title2, _slots$default;

      return h('li', {
        class: {
          'el-menu-item-group': true
        }
      }, [h('div', {
        class: {
          'el-menu-item-group__title': true
        },
        style: {
          paddingLeft: (parent.deep.value + 1) * 20 + 'px'
        }
      }, (_slots$title = (_slots$title2 = slots.title) === null || _slots$title2 === void 0 ? void 0 : _slots$title2.call(slots)) !== null && _slots$title !== void 0 ? _slots$title : props.title), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

var css_248z$7 = "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n.el-popover {\n  position: absolute;\n  background: #ffffff;\n  min-width: 150px;\n  border-radius: 4px;\n  border: 1px solid #ebeef5;\n  padding: 12px;\n  z-index: 2000;\n  color: #606266;\n  line-height: 1.4;\n  text-align: justify;\n  font-size: 14px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  word-break: break-all;\n}\n.el-popover--plain {\n  padding: 18px 20px;\n}\n.el-popover__title {\n  color: #303133;\n  font-size: 16px;\n  line-height: 1;\n  margin-bottom: 12px;\n}\n.el-popover__reference:focus:not(.focusing),\n.el-popover__reference:focus:hover {\n  outline-width: 0;\n}\n.el-popover:focus:active,\n.el-popover:focus {\n  outline-width: 0;\n}\n.el-teleport-popper {\n  /* ... */\n  display: none;\n}\n.el-teleport-popper[data-show] {\n  display: block;\n}\n";
styleInject(css_248z$7);

//
var script$9 = defineComponent({
  name: 'ElPopoVer',
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 200
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    popperClass: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '200'
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  setup: function setup(props) {
    var referenceElRef = ref(null);

    var _usePopper = usePopper(referenceElRef, ['el-popover', props.popperClass, props.content && 'el-popover--plain'], {
      placement: props.placement,
      modifiers: [{
        name: 'offset',
        options: [0, 4]
      }]
    }),
        teleportId = _usePopper.teleportId;

    return {
      teleportId: teleportId,
      referenceElRef: referenceElRef
    };
  }
});

const _hoisted_1$3 = /*#__PURE__*/createVNode("div", {
  class: "popper__arrow",
  "data-popper-arrow": ""
}, null, -1 /* HOISTED */);
const _hoisted_2$1$1 = {
  ref: "referenceElRef",
  style: {"display":"inline-block"}
};

function render$9(_ctx, _cache) {
  return (openBlock(), createBlock(Fragment, null, [
    createVNode(Teleport, {
      to: `#${_ctx.teleportId}`
    }, [
      createVNode("div", null, [
        (_ctx.title)
          ? (openBlock(), createBlock("div", {
              key: 0,
              class: "el-popover__title",
              textContent: _ctx.title
            }, null, 8 /* PROPS */, ["textContent"]))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(_toDisplayString(_ctx.content), 1 /* TEXT */)
        ])
      ]),
      _hoisted_1$3
    ], 8 /* PROPS */, ["to"]),
    createVNode("span", _hoisted_2$1$1, [
      renderSlot(_ctx.$slots, "reference")
    ], 512 /* NEED_PATCH */)
  ], 64 /* STABLE_FRAGMENT */))
}

script$9.render = render$9;
script$9.__file = "src/components/ElPopover/ElPopover.vue";

var script$a = defineComponent({
  components: {
    HelloWorld: script,
    ElContainer: script$1,
    ElAside: script$1$1,
    ElMain: script$4,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup
  }
});

const _hoisted_1$4 = { class: "demo-layout" };
const _hoisted_2$2 = /*#__PURE__*/createTextVNode("Basic");
const _hoisted_3 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/createTextVNode(" layout ");
const _hoisted_5 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/createTextVNode(" container ");
const _hoisted_7 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/createTextVNode(" icon ");
const _hoisted_9 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/createTextVNode(" button ");
const _hoisted_11 = /*#__PURE__*/createTextVNode("Form");
const _hoisted_12 = /*#__PURE__*/createTextVNode("Data");
const _hoisted_13 = /*#__PURE__*/createTextVNode("Notice");
const _hoisted_14 = /*#__PURE__*/createTextVNode("Navigation");
const _hoisted_15 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/createTextVNode(" menu ");
const _hoisted_17 = /*#__PURE__*/createTextVNode("Others");
const _hoisted_18 = /*#__PURE__*/createVNode("i", { class: "el-icon-menu" }, null, -1 /* HOISTED */);
const _hoisted_19 = /*#__PURE__*/createTextVNode(" popover ");
const _hoisted_20 = /*#__PURE__*/createTextVNode("Hooks");

function render$a(_ctx, _cache) {
  const _component_HelloWorld = resolveComponent("HelloWorld");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_menu_item_group = resolveComponent("el-menu-item-group");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_ElAside = resolveComponent("ElAside");
  const _component_router_view = resolveComponent("router-view");
  const _component_ElMain = resolveComponent("ElMain");
  const _component_ElContainer = resolveComponent("ElContainer");

  return (openBlock(), createBlock("div", _hoisted_1$4, [
    createVNode(_component_ElContainer, { direction: "horizontal" }, {
      default: withCtx(() => [
        createVNode(_component_ElAside, null, {
          default: withCtx(() => [
            createVNode(_component_HelloWorld, { msg: "Hello Elenext UI" }),
            createVNode(_component_el_menu, null, {
              default: withCtx(() => [
                createVNode(_component_el_menu_item_group, null, {
                  title: withCtx(() => [
                    _hoisted_2$2
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      path: { name: 'layout' }
                    }, {
                      default: withCtx(() => [
                        _hoisted_3,
                        _hoisted_4
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      path: { name: 'container' }
                    }, {
                      default: withCtx(() => [
                        _hoisted_5,
                        _hoisted_6
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      path: { name: 'icon' }
                    }, {
                      default: withCtx(() => [
                        _hoisted_7,
                        _hoisted_8
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "1",
                      path: { name: 'button' }
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
                      path: { name: 'menu' }
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
                      path: { name: 'popover' }
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

script$a.render = render$a;

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [{
    path: "/home",
    redirect: "/"
  }, {
    path: "/",
    name: "Layout",
    component: script$a,
    children: [{
      path: "/button",
      name: "button",
      component: async () => import('./button.3fdf32a8.js')
    }, {
      path: "/layout",
      name: "layout",
      component: async () => import('./layout.ad032fa4.js')
    }, {
      path: "/container",
      name: "container",
      component: async () => import('./container.0fdaf477.js')
    }, {
      path: "/icon",
      name: "icon",
      component: async () => import('./icon.1666818d.js')
    }, {
      path: "/menu",
      name: "menu",
      component: async () => import('./menu.c46468b5.js')
    }, {
      path: "/popover",
      name: "popover",
      component: async () => import('./popover.34358519.js')
    }]
  }]
});

var script$b = defineComponent({
  name: "App",
  components: {}
});

function render$b(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");

  return (openBlock(), createBlock(_component_router_view))
}

script$b.render = render$b;

window.Prism.plugins.NormalizeWhitespace.setDefaults({
  indent: 0,
  "remove-trailing": true,
  "remove-indent": true,
  "left-trim": true,
  "right-trim": true,
  "remove-initial-line-feed": false,
  "tabs-to-spaces": 2
});
const app = createApp(script$b);
app.use(router);
app.mount("#app");

export { script$8 as A, ElMenuItemGroup as B, script$9 as C, ElMenu as E, Fragment as F, _toDisplayString as _, script$5 as a, createVNode as b, createBlock as c, defineComponent as d, createTextVNode as e, ref as f, reactive as g, onMounted as h, index as i, createCommentVNode as j, renderSlot as k, index$1 as l, script$1 as m, nextTick as n, openBlock as o, script$1$1 as p, script$2 as q, resolveComponent as r, script$6 as s, toRefs as t, script$3 as u, script$4 as v, withCtx as w, script$7 as x, renderList as y, ElMenuItem as z };
