!function(c){var l={};function h(e){if(l[e])return l[e].exports;var z=l[e]={i:e,l:!1,exports:{}};return c[e].call(z.exports,z,z.exports,h),z.l=!0,z.exports}h.m=c,h.c=l,h.d=function(c,l,e){h.o(c,l)||Object.defineProperty(c,l,{enumerable:!0,get:e})},h.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},h.t=function(c,l){if(1&l&&(c=h(c)),8&l)return c;if(4&l&&"object"==typeof c&&c&&c.__esModule)return c;var e=Object.create(null);if(h.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:c}),2&l&&"string"!=typeof c)for(var z in c)h.d(e,z,function(l){return c[l]}.bind(null,z));return e},h.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return h.d(l,"a",l),l},h.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)},h.p="",h(h.s=36)}([function(c,l,h){"use strict";var e=h(4),z=h(21),v=Object.prototype.toString;function t(c){return"[object Array]"===v.call(c)}function a(c){return null!==c&&"object"==typeof c}function s(c){return"[object Function]"===v.call(c)}function n(c,l){if(null!=c)if("object"!=typeof c&&(c=[c]),t(c))for(var h=0,e=c.length;h<e;h++)l.call(null,c[h],h,c);else for(var z in c)Object.prototype.hasOwnProperty.call(c,z)&&l.call(null,c[z],z,c)}c.exports={isArray:t,isArrayBuffer:function(c){return"[object ArrayBuffer]"===v.call(c)},isBuffer:z,isFormData:function(c){return"undefined"!=typeof FormData&&c instanceof FormData},isArrayBufferView:function(c){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(c):c&&c.buffer&&c.buffer instanceof ArrayBuffer},isString:function(c){return"string"==typeof c},isNumber:function(c){return"number"==typeof c},isObject:a,isUndefined:function(c){return void 0===c},isDate:function(c){return"[object Date]"===v.call(c)},isFile:function(c){return"[object File]"===v.call(c)},isBlob:function(c){return"[object Blob]"===v.call(c)},isFunction:s,isStream:function(c){return a(c)&&s(c.pipe)},isURLSearchParams:function(c){return"undefined"!=typeof URLSearchParams&&c instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:n,merge:function c(){var l={};function h(h,e){"object"==typeof l[e]&&"object"==typeof h?l[e]=c(l[e],h):l[e]=h}for(var e=0,z=arguments.length;e<z;e++)n(arguments[e],h);return l},deepMerge:function c(){var l={};function h(h,e){"object"==typeof l[e]&&"object"==typeof h?l[e]=c(l[e],h):l[e]="object"==typeof h?c({},h):h}for(var e=0,z=arguments.length;e<z;e++)n(arguments[e],h);return l},extend:function(c,l,h){return n(l,function(l,z){c[z]=h&&"function"==typeof l?e(l,h):l}),c},trim:function(c){return c.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(c,l,h){(function(l){c.exports=function(){"use strict";var c=Array.isArray||function(c){return"[object Array]"==Object.prototype.toString.call(c)},h=M,e=s,z=function(c){return n(s(c))},v=n,t=f,a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function s(c){for(var l,h=[],e=0,z=0,v="";null!=(l=a.exec(c));){var t=l[0],s=l[1],n=l.index;if(v+=c.slice(z,n),z=n+t.length,s)v+=s[1];else{v&&(h.push(v),v="");var r=l[2],o=l[3],i=l[4],f=l[5],M=l[6],H=l[7],u="+"===M||"*"===M,V="?"===M||"*"===M,C=r||"/",d=i||f||(H?".*":"[^"+C+"]+?");h.push({name:o||e++,prefix:r||"",delimiter:C,optional:V,repeat:u,pattern:m(d)})}}return z<c.length&&(v+=c.substr(z)),v&&h.push(v),h}function n(l){for(var h=new Array(l.length),e=0;e<l.length;e++)"object"==typeof l[e]&&(h[e]=new RegExp("^"+l[e].pattern+"$"));return function(e){for(var z="",v=e||{},t=0;t<l.length;t++){var a=l[t];if("string"!=typeof a){var s,n=v[a.name];if(null==n){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(c(n)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+n+'"');if(0===n.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var r=0;r<n.length;r++){if(s=encodeURIComponent(n[r]),!h[t].test(s))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');z+=(0===r?a.prefix:a.delimiter)+s}}else{if(s=encodeURIComponent(n),!h[t].test(s))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');z+=a.prefix+s}}else z+=a}return z}}function r(c){return c.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function m(c){return c.replace(/([=!:$\/()])/g,"\\$1")}function o(c,l){return c.keys=l,c}function i(c){return c.sensitive?"":"i"}function f(c,l){for(var h=(l=l||{}).strict,e=!1!==l.end,z="",v=c[c.length-1],t="string"==typeof v&&/\/$/.test(v),a=0;a<c.length;a++){var s=c[a];if("string"==typeof s)z+=r(s);else{var n=r(s.prefix),m=s.pattern;s.repeat&&(m+="(?:"+n+m+")*"),m=s.optional?n?"(?:"+n+"("+m+"))?":"("+m+")?":n+"("+m+")",z+=m}}return h||(z=(t?z.slice(0,-2):z)+"(?:\\/(?=$))?"),z+=e?"$":h&&t?"":"(?=\\/|$)",new RegExp("^"+z,i(l))}function M(l,h,e){return c(h=h||[])?e||(e={}):(e=h,h=[]),l instanceof RegExp?function(c,l){var h=c.source.match(/\((?!\?)/g);if(h)for(var e=0;e<h.length;e++)l.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return o(c,l)}(l,h):c(l)?function(c,l,h){for(var e=[],z=0;z<c.length;z++)e.push(M(c[z],l,h).source);return o(new RegExp("(?:"+e.join("|")+")",i(h)),l)}(l,h,e):function(c,l,h){for(var e=s(c),z=f(e,h),v=0;v<e.length;v++)"string"!=typeof e[v]&&l.push(e[v]);return o(z,l)}(l,h,e)}h.parse=e,h.compile=z,h.tokensToFunction=v,h.tokensToRegExp=t;var H,u="undefined"!=typeof document,V="undefined"!=typeof window,C="undefined"!=typeof history,d=void 0!==l,L=u&&document.ontouchstart?"touchstart":"click",p=V&&!(!window.history.location&&!window.location);function b(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function g(c,l){if("function"==typeof c)return g.call(this,"*",c);if("function"==typeof l)for(var h=new w(c,null,this),e=1;e<arguments.length;++e)this.callbacks.push(h.middleware(arguments[e]));else"string"==typeof c?this["string"==typeof l?"redirect":"show"](c,l):this.start(c)}function y(c,l,h){var e=this.page=h||g,z=e._window,v=e._hashbang,t=e._getBase();"/"===c[0]&&0!==c.indexOf(t)&&(c=t+(v?"#!":"")+c);var a=c.indexOf("?");this.canonicalPath=c;var s=new RegExp("^"+t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1"));if(this.path=c.replace(s,"")||"/",v&&(this.path=this.path.replace("#!","")||"/"),this.title=u&&z.document.title,this.state=l||{},this.state.path=c,this.querystring=~a?e._decodeURLEncodedURIComponent(c.slice(a+1)):"",this.pathname=e._decodeURLEncodedURIComponent(~a?c.slice(0,a):c),this.params={},this.hash="",!v){if(!~this.path.indexOf("#"))return;var n=this.path.split("#");this.path=this.pathname=n[0],this.hash=e._decodeURLEncodedURIComponent(n[1])||"",this.querystring=this.querystring.split("#")[0]}}function w(c,l,e){this.page=e||S;var z=l||{};z.strict=z.strict||e._strict,this.path="*"===c?"(.*)":c,this.method="GET",this.regexp=h(this.path,this.keys=[],z)}b.prototype.configure=function(c){var l=c||{};this._window=l.window||V&&window,this._decodeURLComponents=!1!==l.decodeURLComponents,this._popstate=!1!==l.popstate&&V,this._click=!1!==l.click&&u,this._hashbang=!!l.hashbang;var h=this._window;this._popstate?h.addEventListener("popstate",this._onpopstate,!1):V&&h.removeEventListener("popstate",this._onpopstate,!1),this._click?h.document.addEventListener(L,this.clickHandler,!1):u&&h.document.removeEventListener(L,this.clickHandler,!1),this._hashbang&&V&&!C?h.addEventListener("hashchange",this._onpopstate,!1):V&&h.removeEventListener("hashchange",this._onpopstate,!1)},b.prototype.base=function(c){if(0===arguments.length)return this._base;this._base=c},b.prototype._getBase=function(){var c=this._base;if(c)return c;var l=V&&this._window&&this._window.location;return V&&this._hashbang&&l&&"file:"===l.protocol&&(c=l.pathname),c},b.prototype.strict=function(c){if(0===arguments.length)return this._strict;this._strict=c},b.prototype.start=function(c){var l=c||{};if(this.configure(l),!1!==l.dispatch){var h;if(this._running=!0,p){var e=this._window,z=e.location;h=this._hashbang&&~z.hash.indexOf("#!")?z.hash.substr(2)+z.search:this._hashbang?z.search+z.hash:z.pathname+z.search+z.hash}this.replace(h,null,!0,l.dispatch)}},b.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var c=this._window;this._click&&c.document.removeEventListener(L,this.clickHandler,!1),V&&c.removeEventListener("popstate",this._onpopstate,!1),V&&c.removeEventListener("hashchange",this._onpopstate,!1)}},b.prototype.show=function(c,l,h,e){var z=new y(c,l,this),v=this.prevContext;return this.prevContext=z,this.current=z.path,!1!==h&&this.dispatch(z,v),!1!==z.handled&&!1!==e&&z.pushState(),z},b.prototype.back=function(c,l){var h=this;if(this.len>0){var e=this._window;C&&e.history.back(),this.len--}else c?setTimeout(function(){h.show(c,l)}):setTimeout(function(){h.show(h._getBase(),l)})},b.prototype.redirect=function(c,l){var h=this;"string"==typeof c&&"string"==typeof l&&g.call(this,c,function(c){setTimeout(function(){h.replace(l)},0)}),"string"==typeof c&&void 0===l&&setTimeout(function(){h.replace(c)},0)},b.prototype.replace=function(c,l,h,e){var z=new y(c,l,this),v=this.prevContext;return this.prevContext=z,this.current=z.path,z.init=h,z.save(),!1!==e&&this.dispatch(z,v),z},b.prototype.dispatch=function(c,l){var h=0,e=0,z=this;function v(){var l=z.callbacks[h++];if(c.path===z.current)return l?void l(c,v):function(c){if(!c.handled){var l=this._window;(this._hashbang?p&&this._getBase()+l.location.hash.replace("#!",""):p&&l.location.pathname+l.location.search)!==c.canonicalPath&&(this.stop(),c.handled=!1,p&&(l.location.href=c.canonicalPath))}}.call(z,c);c.handled=!1}l?function c(){var h=z.exits[e++];if(!h)return v();h(l,c)}():v()},b.prototype.exit=function(c,l){if("function"==typeof c)return this.exit("*",c);for(var h=new w(c,null,this),e=1;e<arguments.length;++e)this.exits.push(h.middleware(arguments[e]))},b.prototype.clickHandler=function(c){if(1===this._which(c)&&!(c.metaKey||c.ctrlKey||c.shiftKey||c.defaultPrevented)){var l=c.target,h=c.path||(c.composedPath?c.composedPath():null);if(h)for(var e=0;e<h.length;e++)if(h[e].nodeName&&"A"===h[e].nodeName.toUpperCase()&&h[e].href){l=h[e];break}for(;l&&"A"!==l.nodeName.toUpperCase();)l=l.parentNode;if(l&&"A"===l.nodeName.toUpperCase()){var z="object"==typeof l.href&&"SVGAnimatedString"===l.href.constructor.name;if(!l.hasAttribute("download")&&"external"!==l.getAttribute("rel")){var v=l.getAttribute("href");if((this._hashbang||!this._samePath(l)||!l.hash&&"#"!==v)&&!(v&&v.indexOf("mailto:")>-1)&&(z?!l.target.baseVal:!l.target)&&(z||this.sameOrigin(l.href))){var t=z?l.href.baseVal:l.pathname+l.search+(l.hash||"");t="/"!==t[0]?"/"+t:t,d&&t.match(/^\/[a-zA-Z]:\//)&&(t=t.replace(/^\/[a-zA-Z]:\//,"/"));var a=t,s=this._getBase();0===t.indexOf(s)&&(t=t.substr(s.length)),this._hashbang&&(t=t.replace("#!","")),(!s||a!==t||p&&"file:"===this._window.location.protocol)&&(c.preventDefault(),this.show(a))}}}}},b.prototype._onpopstate=(H=!1,V?(u&&"complete"===document.readyState?H=!0:window.addEventListener("load",function(){setTimeout(function(){H=!0},0)}),function(c){if(H)if(c.state){var l=c.state.path;this.replace(l,c.state)}else if(p){var h=this._window.location;this.show(h.pathname+h.search+h.hash,void 0,void 0,!1)}}):function(){}),b.prototype._which=function(c){return null==(c=c||V&&this._window.event).which?c.button:c.which},b.prototype._toURL=function(c){var l=this._window;if("function"==typeof URL&&p)return new URL(c,l.location.toString());if(u){var h=l.document.createElement("a");return h.href=c,h}},b.prototype.sameOrigin=function(c){if(!c||!p)return!1;var l=this._toURL(c),h=this._window,e=h.location;return e.protocol===l.protocol&&e.hostname===l.hostname&&e.port===l.port},b.prototype._samePath=function(c){if(!p)return!1;var l=this._window,h=l.location;return c.pathname===h.pathname&&c.search===h.search},b.prototype._decodeURLEncodedURIComponent=function(c){return"string"!=typeof c?c:this._decodeURLComponents?decodeURIComponent(c.replace(/\+/g," ")):c},y.prototype.pushState=function(){var c=this.page,l=c._window,h=c._hashbang;c.len++,C&&l.history.pushState(this.state,this.title,h&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},y.prototype.save=function(){var c=this.page;C&&c._window.history.replaceState(this.state,this.title,c._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},w.prototype.middleware=function(c){var l=this;return function(h,e){if(l.match(h.path,h.params))return c(h,e);e()}},w.prototype.match=function(c,l){var h=this.keys,e=c.indexOf("?"),z=~e?c.slice(0,e):c,v=this.regexp.exec(decodeURIComponent(z));if(!v)return!1;for(var t=1,a=v.length;t<a;++t){var s=h[t-1],n=this.page._decodeURLEncodedURIComponent(v[t]);void 0===n&&hasOwnProperty.call(l,s.name)||(l[s.name]=n)}return!0};var S=function c(){var l=new b;function h(){return g.apply(l,arguments)}return h.callbacks=l.callbacks,h.exits=l.exits,h.base=l.base.bind(l),h.strict=l.strict.bind(l),h.start=l.start.bind(l),h.stop=l.stop.bind(l),h.show=l.show.bind(l),h.back=l.back.bind(l),h.redirect=l.redirect.bind(l),h.replace=l.replace.bind(l),h.dispatch=l.dispatch.bind(l),h.exit=l.exit.bind(l),h.configure=l.configure.bind(l),h.sameOrigin=l.sameOrigin.bind(l),h.clickHandler=l.clickHandler.bind(l),h.create=c,Object.defineProperty(h,"len",{get:function(){return l.len},set:function(c){l.len=c}}),Object.defineProperty(h,"current",{get:function(){return l.current},set:function(c){l.current=c}}),h.Context=y,h.Route=w,h}(),k=S,A=S;return k.default=A,k}()}).call(this,h(2))},function(c,l){var h,e,z=c.exports={};function v(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(c){if(h===setTimeout)return setTimeout(c,0);if((h===v||!h)&&setTimeout)return h=setTimeout,setTimeout(c,0);try{return h(c,0)}catch(l){try{return h.call(null,c,0)}catch(l){return h.call(this,c,0)}}}!function(){try{h="function"==typeof setTimeout?setTimeout:v}catch(c){h=v}try{e="function"==typeof clearTimeout?clearTimeout:t}catch(c){e=t}}();var s,n=[],r=!1,m=-1;function o(){r&&s&&(r=!1,s.length?n=s.concat(n):m=-1,n.length&&i())}function i(){if(!r){var c=a(o);r=!0;for(var l=n.length;l;){for(s=n,n=[];++m<l;)s&&s[m].run();m=-1,l=n.length}s=null,r=!1,function(c){if(e===clearTimeout)return clearTimeout(c);if((e===t||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(c);try{e(c)}catch(l){try{return e.call(null,c)}catch(l){return e.call(this,c)}}}(c)}}function f(c,l){this.fun=c,this.array=l}function M(){}z.nextTick=function(c){var l=new Array(arguments.length-1);if(arguments.length>1)for(var h=1;h<arguments.length;h++)l[h-1]=arguments[h];n.push(new f(c,l)),1!==n.length||r||a(i)},f.prototype.run=function(){this.fun.apply(null,this.array)},z.title="browser",z.browser=!0,z.env={},z.argv=[],z.version="",z.versions={},z.on=M,z.addListener=M,z.once=M,z.off=M,z.removeListener=M,z.removeAllListeners=M,z.emit=M,z.prependListener=M,z.prependOnceListener=M,z.listeners=function(c){return[]},z.binding=function(c){throw new Error("process.binding is not supported")},z.cwd=function(){return"/"},z.chdir=function(c){throw new Error("process.chdir is not supported")},z.umask=function(){return 0}},function(c,l){var h;h=function(){return this}();try{h=h||new Function("return this")()}catch(c){"object"==typeof window&&(h=window)}c.exports=h},function(c,l,h){"use strict";c.exports=function(c,l){return function(){for(var h=new Array(arguments.length),e=0;e<h.length;e++)h[e]=arguments[e];return c.apply(l,h)}}},function(c,l,h){"use strict";var e=h(0);function z(c){return encodeURIComponent(c).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}c.exports=function(c,l,h){if(!l)return c;var v;if(h)v=h(l);else if(e.isURLSearchParams(l))v=l.toString();else{var t=[];e.forEach(l,function(c,l){null!=c&&(e.isArray(c)?l+="[]":c=[c],e.forEach(c,function(c){e.isDate(c)?c=c.toISOString():e.isObject(c)&&(c=JSON.stringify(c)),t.push(z(l)+"="+z(c))}))}),v=t.join("&")}if(v){var a=c.indexOf("#");-1!==a&&(c=c.slice(0,a)),c+=(-1===c.indexOf("?")?"?":"&")+v}return c}},function(c,l,h){"use strict";c.exports=function(c){return!(!c||!c.__CANCEL__)}},function(c,l,h){"use strict";(function(l){var e=h(0),z=h(26),v={"Content-Type":"application/x-www-form-urlencoded"};function t(c,l){!e.isUndefined(c)&&e.isUndefined(c["Content-Type"])&&(c["Content-Type"]=l)}var a,s={adapter:(void 0!==l&&"[object process]"===Object.prototype.toString.call(l)?a=h(8):"undefined"!=typeof XMLHttpRequest&&(a=h(8)),a),transformRequest:[function(c,l){return z(l,"Accept"),z(l,"Content-Type"),e.isFormData(c)||e.isArrayBuffer(c)||e.isBuffer(c)||e.isStream(c)||e.isFile(c)||e.isBlob(c)?c:e.isArrayBufferView(c)?c.buffer:e.isURLSearchParams(c)?(t(l,"application/x-www-form-urlencoded;charset=utf-8"),c.toString()):e.isObject(c)?(t(l,"application/json;charset=utf-8"),JSON.stringify(c)):c}],transformResponse:[function(c){if("string"==typeof c)try{c=JSON.parse(c)}catch(c){}return c}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(c){return c>=200&&c<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},e.forEach(["delete","get","head"],function(c){s.headers[c]={}}),e.forEach(["post","put","patch"],function(c){s.headers[c]=e.merge(v)}),c.exports=s}).call(this,h(2))},function(c,l,h){"use strict";var e=h(0),z=h(27),v=h(5),t=h(29),a=h(30),s=h(9);c.exports=function(c){return new Promise(function(l,n){var r=c.data,m=c.headers;e.isFormData(r)&&delete m["Content-Type"];var o=new XMLHttpRequest;if(c.auth){var i=c.auth.username||"",f=c.auth.password||"";m.Authorization="Basic "+btoa(i+":"+f)}if(o.open(c.method.toUpperCase(),v(c.url,c.params,c.paramsSerializer),!0),o.timeout=c.timeout,o.onreadystatechange=function(){if(o&&4===o.readyState&&(0!==o.status||o.responseURL&&0===o.responseURL.indexOf("file:"))){var h="getAllResponseHeaders"in o?t(o.getAllResponseHeaders()):null,e={data:c.responseType&&"text"!==c.responseType?o.response:o.responseText,status:o.status,statusText:o.statusText,headers:h,config:c,request:o};z(l,n,e),o=null}},o.onabort=function(){o&&(n(s("Request aborted",c,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(s("Network Error",c,null,o)),o=null},o.ontimeout=function(){n(s("timeout of "+c.timeout+"ms exceeded",c,"ECONNABORTED",o)),o=null},e.isStandardBrowserEnv()){var M=h(31),H=(c.withCredentials||a(c.url))&&c.xsrfCookieName?M.read(c.xsrfCookieName):void 0;H&&(m[c.xsrfHeaderName]=H)}if("setRequestHeader"in o&&e.forEach(m,function(c,l){void 0===r&&"content-type"===l.toLowerCase()?delete m[l]:o.setRequestHeader(l,c)}),c.withCredentials&&(o.withCredentials=!0),c.responseType)try{o.responseType=c.responseType}catch(l){if("json"!==c.responseType)throw l}"function"==typeof c.onDownloadProgress&&o.addEventListener("progress",c.onDownloadProgress),"function"==typeof c.onUploadProgress&&o.upload&&o.upload.addEventListener("progress",c.onUploadProgress),c.cancelToken&&c.cancelToken.promise.then(function(c){o&&(o.abort(),n(c),o=null)}),void 0===r&&(r=null),o.send(r)})}},function(c,l,h){"use strict";var e=h(28);c.exports=function(c,l,h,z,v){var t=new Error(c);return e(t,l,h,z,v)}},function(c,l,h){"use strict";var e=h(0);c.exports=function(c,l){l=l||{};var h={};return e.forEach(["url","method","params","data"],function(c){void 0!==l[c]&&(h[c]=l[c])}),e.forEach(["headers","auth","proxy"],function(z){e.isObject(l[z])?h[z]=e.deepMerge(c[z],l[z]):void 0!==l[z]?h[z]=l[z]:e.isObject(c[z])?h[z]=e.deepMerge(c[z]):void 0!==c[z]&&(h[z]=c[z])}),e.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(e){void 0!==l[e]?h[e]=l[e]:void 0!==c[e]&&(h[e]=c[e])}),h}},function(c,l,h){"use strict";function e(c){this.message=c}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,c.exports=e},function(c,l,h){c.exports=h(20)},function(c,l){c.exports='<div class="intro">\r\n   <h3>Welcome</h3>\r\n   <div class="spinner">\r\n      <div class="rect1"></div>\r\n      <div class="rect2"></div>\r\n      <div class="rect3"></div>\r\n      <div class="rect4"></div>\r\n      <div class="rect5"></div>\r\n   </div>\r\n</div>'},function(c,l){c.exports='<header>\r\n   <div id="searcher">\r\n      <input id="search-task" type="text" placeholder="Search..." />\r\n      <div class="fas fa-search search-icon"></div>\r\n   </div>\r\n   <p id="page-date"></p>\r\n</header>\r\n<section>\r\n   <div id="list-to-do">\r\n      <h2>Today</h2>\r\n      <li class="tasks-list"></li>\r\n      <div class="motivational-quotes">\r\n         What have for today?\r\n         <div class="arrow-icons">\r\n            <i class="fas fa-chevron-right"></i>\r\n            <i class="fas fa-chevron-right"></i>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>'},function(c,l,h){"use strict";c.exports=h(16).polyfill()},function(c,l,h){(function(l,h){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */var e;e=function(){"use strict";function c(c){return"function"==typeof c}var e=Array.isArray?Array.isArray:function(c){return"[object Array]"===Object.prototype.toString.call(c)},z=0,v=void 0,t=void 0,a=function(c,l){f[z]=c,f[z+1]=l,2===(z+=2)&&(t?t(M):d())},s="undefined"!=typeof window?window:void 0,n=s||{},r=n.MutationObserver||n.WebKitMutationObserver,m="undefined"==typeof self&&void 0!==l&&"[object process]"==={}.toString.call(l),o="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function i(){var c=setTimeout;return function(){return c(M,1)}}var f=new Array(1e3);function M(){for(var c=0;c<z;c+=2){(0,f[c])(f[c+1]),f[c]=void 0,f[c+1]=void 0}z=0}var H,u,V,C,d=void 0;function L(c,l){var h=this,e=new this.constructor(g);void 0===e[b]&&R(e);var z=h._state;if(z){var v=arguments[z-1];a(function(){return P(z,e,v,h._result)})}else q(h,e,c,l);return e}function p(c){if(c&&"object"==typeof c&&c.constructor===this)return c;var l=new this(g);return _(l,c),l}m?d=function(){return l.nextTick(M)}:r?(u=0,V=new r(M),C=document.createTextNode(""),V.observe(C,{characterData:!0}),d=function(){C.data=u=++u%2}):o?((H=new MessageChannel).port1.onmessage=M,d=function(){return H.port2.postMessage(0)}):d=void 0===s?function(){try{var c=Function("return this")().require("vertx");return void 0!==(v=c.runOnLoop||c.runOnContext)?function(){v(M)}:i()}catch(c){return i()}}():i();var b=Math.random().toString(36).substring(2);function g(){}var y=void 0,w=1,S=2,k={error:null};function A(c){try{return c.then}catch(c){return k.error=c,k}}function x(l,h,e){h.constructor===l.constructor&&e===L&&h.constructor.resolve===p?function(c,l){l._state===w?j(c,l._result):l._state===S?E(c,l._result):q(l,void 0,function(l){return _(c,l)},function(l){return E(c,l)})}(l,h):e===k?(E(l,k.error),k.error=null):void 0===e?j(l,h):c(e)?function(c,l,h){a(function(c){var e=!1,z=function(c,l,h,e){try{c.call(l,h,e)}catch(c){return c}}(h,l,function(h){e||(e=!0,l!==h?_(c,h):j(c,h))},function(l){e||(e=!0,E(c,l))},c._label);!e&&z&&(e=!0,E(c,z))},c)}(l,h,e):j(l,h)}function _(c,l){var h,e;c===l?E(c,new TypeError("You cannot resolve a promise with itself")):(e=typeof(h=l),null===h||"object"!==e&&"function"!==e?j(c,l):x(c,l,A(l)))}function O(c){c._onerror&&c._onerror(c._result),T(c)}function j(c,l){c._state===y&&(c._result=l,c._state=w,0!==c._subscribers.length&&a(T,c))}function E(c,l){c._state===y&&(c._state=S,c._result=l,a(O,c))}function q(c,l,h,e){var z=c._subscribers,v=z.length;c._onerror=null,z[v]=l,z[v+w]=h,z[v+S]=e,0===v&&c._state&&a(T,c)}function T(c){var l=c._subscribers,h=c._state;if(0!==l.length){for(var e=void 0,z=void 0,v=c._result,t=0;t<l.length;t+=3)e=l[t],z=l[t+h],e?P(h,e,z,v):z(v);c._subscribers.length=0}}function P(l,h,e,z){var v=c(e),t=void 0,a=void 0,s=void 0,n=void 0;if(v){if((t=function(c,l){try{return c(l)}catch(c){return k.error=c,k}}(e,z))===k?(n=!0,a=t.error,t.error=null):s=!0,h===t)return void E(h,new TypeError("A promises callback cannot return that same promise."))}else t=z,s=!0;h._state!==y||(v&&s?_(h,t):n?E(h,a):l===w?j(h,t):l===S&&E(h,t))}var N=0;function R(c){c[b]=N++,c._state=void 0,c._result=void 0,c._subscribers=[]}var I=function(){function c(c,l){this._instanceConstructor=c,this.promise=new c(g),this.promise[b]||R(this.promise),e(l)?(this.length=l.length,this._remaining=l.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(l),0===this._remaining&&j(this.promise,this._result))):E(this.promise,new Error("Array Methods must be provided an Array"))}return c.prototype._enumerate=function(c){for(var l=0;this._state===y&&l<c.length;l++)this._eachEntry(c[l],l)},c.prototype._eachEntry=function(c,l){var h=this._instanceConstructor,e=h.resolve;if(e===p){var z=A(c);if(z===L&&c._state!==y)this._settledAt(c._state,l,c._result);else if("function"!=typeof z)this._remaining--,this._result[l]=c;else if(h===U){var v=new h(g);x(v,c,z),this._willSettleAt(v,l)}else this._willSettleAt(new h(function(l){return l(c)}),l)}else this._willSettleAt(e(c),l)},c.prototype._settledAt=function(c,l,h){var e=this.promise;e._state===y&&(this._remaining--,c===S?E(e,h):this._result[l]=h),0===this._remaining&&j(e,this._result)},c.prototype._willSettleAt=function(c,l){var h=this;q(c,void 0,function(c){return h._settledAt(w,l,c)},function(c){return h._settledAt(S,l,c)})},c}(),U=function(){function l(c){this[b]=N++,this._result=this._state=void 0,this._subscribers=[],g!==c&&("function"!=typeof c&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof l?function(c,l){try{l(function(l){_(c,l)},function(l){E(c,l)})}catch(l){E(c,l)}}(this,c):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return l.prototype.catch=function(c){return this.then(null,c)},l.prototype.finally=function(l){var h=this.constructor;return c(l)?this.then(function(c){return h.resolve(l()).then(function(){return c})},function(c){return h.resolve(l()).then(function(){throw c})}):this.then(l,l)},l}();return U.prototype.then=L,U.all=function(c){return new I(this,c).promise},U.race=function(c){var l=this;return e(c)?new l(function(h,e){for(var z=c.length,v=0;v<z;v++)l.resolve(c[v]).then(h,e)}):new l(function(c,l){return l(new TypeError("You must pass an array to race."))})},U.resolve=p,U.reject=function(c){var l=new this(g);return E(l,c),l},U._setScheduler=function(c){t=c},U._setAsap=function(c){a=c},U._asap=a,U.polyfill=function(){var c=void 0;if(void 0!==h)c=h;else if("undefined"!=typeof self)c=self;else try{c=Function("return this")()}catch(c){throw new Error("polyfill failed because global object is unavailable in this environment")}var l=c.Promise;if(l){var e=null;try{e=Object.prototype.toString.call(l.resolve())}catch(c){}if("[object Promise]"===e&&!l.cast)return}c.Promise=U},U.Promise=U,U},c.exports=e()}).call(this,h(2),h(3))},function(c,l,h){(function(c,l){function h(c){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(c)}
/*!
 * Font Awesome Free 5.8.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
c.exports=function(c){return null!=c&&null!=c.constructor&&"function"==typeof c.constructor.isBuffer&&c.constructor.isBuffer(c)}},function(c,l,h){"use strict";var e=h(0),z=h(5),v=h(23),t=h(24),a=h(10);function s(c){this.defaults=c,this.interceptors={request:new v,response:new v}}s.prototype.request=function(c){"string"==typeof c?(c=arguments[1]||{}).url=arguments[0]:c=c||{},(c=a(this.defaults,c)).method=c.method?c.method.toLowerCase():"get";var l=[t,void 0],h=Promise.resolve(c);for(this.interceptors.request.forEach(function(c){l.unshift(c.fulfilled,c.rejected)}),this.interceptors.response.forEach(function(c){l.push(c.fulfilled,c.rejected)});l.length;)h=h.then(l.shift(),l.shift());return h},s.prototype.getUri=function(c){return c=a(this.defaults,c),z(c.url,c.params,c.paramsSerializer).replace(/^\?/,"")},e.forEach(["delete","get","head","options"],function(c){s.prototype[c]=function(l,h){return this.request(e.merge(h||{},{method:c,url:l}))}}),e.forEach(["post","put","patch"],function(c){s.prototype[c]=function(l,h,z){return this.request(e.merge(z||{},{method:c,url:l,data:h}))}}),c.exports=s},function(c,l,h){"use strict";var e=h(0);function z(){this.handlers=[]}z.prototype.use=function(c,l){return this.handlers.push({fulfilled:c,rejected:l}),this.handlers.length-1},z.prototype.eject=function(c){this.handlers[c]&&(this.handlers[c]=null)},z.prototype.forEach=function(c){e.forEach(this.handlers,function(l){null!==l&&c(l)})},c.exports=z},function(c,l,h){"use strict";var e=h(0),z=h(25),v=h(6),t=h(7),a=h(32),s=h(33);function n(c){c.cancelToken&&c.cancelToken.throwIfRequested()}c.exports=function(c){return n(c),c.baseURL&&!a(c.url)&&(c.url=s(c.baseURL,c.url)),c.headers=c.headers||{},c.data=z(c.data,c.headers,c.transformRequest),c.headers=e.merge(c.headers.common||{},c.headers[c.method]||{},c.headers||{}),e.forEach(["delete","get","head","post","put","patch","common"],function(l){delete c.headers[l]}),(c.adapter||t.adapter)(c).then(function(l){return n(c),l.data=z(l.data,l.headers,c.transformResponse),l},function(l){return v(l)||(n(c),l&&l.response&&(l.response.data=z(l.response.data,l.response.headers,c.transformResponse))),Promise.reject(l)})}},function(c,l,h){"use strict";var e=h(0);c.exports=function(c,l,h){return e.forEach(h,function(h){c=h(c,l)}),c}},function(c,l,h){"use strict";var e=h(0);c.exports=function(c,l){e.forEach(c,function(h,e){e!==l&&e.toUpperCase()===l.toUpperCase()&&(c[l]=h,delete c[e])})}},function(c,l,h){"use strict";var e=h(9);c.exports=function(c,l,h){var z=h.config.validateStatus;!z||z(h.status)?c(h):l(e("Request failed with status code "+h.status,h.config,null,h.request,h))}},function(c,l,h){"use strict";c.exports=function(c,l,h,e,z){return c.config=l,h&&(c.code=h),c.request=e,c.response=z,c.isAxiosError=!0,c.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},c}},function(c,l,h){"use strict";var e=h(0),z=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];c.exports=function(c){var l,h,v,t={};return c?(e.forEach(c.split("\n"),function(c){if(v=c.indexOf(":"),l=e.trim(c.substr(0,v)).toLowerCase(),h=e.trim(c.substr(v+1)),l){if(t[l]&&z.indexOf(l)>=0)return;t[l]="set-cookie"===l?(t[l]?t[l]:[]).concat([h]):t[l]?t[l]+", "+h:h}}),t):t}},function(c,l,h){"use strict";var e=h(0);c.exports=e.isStandardBrowserEnv()?function(){var c,l=/(msie|trident)/i.test(navigator.userAgent),h=document.createElement("a");function z(c){var e=c;return l&&(h.setAttribute("href",e),e=h.href),h.setAttribute("href",e),{href:h.href,protocol:h.protocol?h.protocol.replace(/:$/,""):"",host:h.host,search:h.search?h.search.replace(/^\?/,""):"",hash:h.hash?h.hash.replace(/^#/,""):"",hostname:h.hostname,port:h.port,pathname:"/"===h.pathname.charAt(0)?h.pathname:"/"+h.pathname}}return c=z(window.location.href),function(l){var h=e.isString(l)?z(l):l;return h.protocol===c.protocol&&h.host===c.host}}():function(){return!0}},function(c,l,h){"use strict";var e=h(0);c.exports=e.isStandardBrowserEnv()?{write:function(c,l,h,z,v,t){var a=[];a.push(c+"="+encodeURIComponent(l)),e.isNumber(h)&&a.push("expires="+new Date(h).toGMTString()),e.isString(z)&&a.push("path="+z),e.isString(v)&&a.push("domain="+v),!0===t&&a.push("secure"),document.cookie=a.join("; ")},read:function(c){var l=document.cookie.match(new RegExp("(^|;\\s*)("+c+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove:function(c){this.write(c,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(c,l,h){"use strict";c.exports=function(c){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)}},function(c,l,h){"use strict";c.exports=function(c,l){return l?c.replace(/\/+$/,"")+"/"+l.replace(/^\/+/,""):c}},function(c,l,h){"use strict";var e=h(11);function z(c){if("function"!=typeof c)throw new TypeError("executor must be a function.");var l;this.promise=new Promise(function(c){l=c});var h=this;c(function(c){h.reason||(h.reason=new e(c),l(h.reason))})}z.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},z.source=function(){var c;return{token:new z(function(l){c=l}),cancel:c}},c.exports=z},function(c,l,h){"use strict";c.exports=function(c){return function(l){return c.apply(null,l)}}},function(c,l,h){"use strict";h.r(l);h(37),h(15),h(17);var e=h(1),z=h.n(e),v={},t=function(){v={viewContainer:document.querySelector("#view-container"),searchTask:document.querySelector("#search-task"),tasksList:document.querySelector(".tasks-list"),allTask:document.querySelectorAll(".one-task"),taskTitles:document.querySelectorAll(".task-title"),taskCheckIcons:document.querySelectorAll(".task-check-icon"),taskDeleteIcons:document.querySelectorAll(".task-delete-icon"),pageDate:document.querySelector("#page-date"),arrowIcons:document.querySelector(".arrow-icons"),downSection:document.querySelector(".motivational-quotes"),backIcon:document.querySelector(".back-icon"),addForm:document.querySelector(".add-form"),addInput:document.querySelector("#add-input")}},a=function(){return v},s=function(c){return new Promise(function(l,h){var e;(e=c,new Promise(function(c){return c(e)})).then(function(c){!function(c){t(),a().viewContainer.innerHTML=c}(c),l()})})},n=h(12),r=h.n(n).a.create({baseURL:"http://localhost:7001"});function m(c){return function(c){if(Array.isArray(c)){for(var l=0,h=new Array(c.length);l<c.length;l++)h[l]=c[l];return h}}(c)||function(c){if(Symbol.iterator in Object(c)||"[object Arguments]"===Object.prototype.toString.call(c))return Array.from(c)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(){new Promise(function(c,l){r.get("/tasks").then(function(c){return c.data}).then(function(l){return c(l)}).catch(function(c){return console.log(c)})}).then(function(c){c.forEach(function(c){a().tasksList.innerHTML+='<ul class="one-task" id="'.concat(c.id,'">\n            <span class="task-check-icon"><i class="fas fa-check"></i></span>\n            <p class="task-title">').concat(c.title,'</p>\n            <i class="far fa-clock timer-icon"></i>\n            <span class="task-delete-icon" data-key="').concat(c.id,'"><i class="fas fa-times"></i></span>\n         </ul>')}),t(),m(a().taskDeleteIcons).forEach(function(c){return c.addEventListener("click",M)}),m(a().taskCheckIcons).forEach(function(c){return c.addEventListener("click",f)})})},i=function(c){var l;l=c.target.value.toLowerCase(),a().tasksList.innerHTML="",m(a().taskTitles).filter(function(c){return c.textContent.toLowerCase().includes(l)}).forEach(function(c){a().tasksList.appendChild(c.parentNode)})},f=function(){this.parentNode.classList.toggle("finished-task")},M=function(){var c=this;return new Promise(function(){r.delete("/tasks/".concat(c.dataset.key)).then(function(){a().tasksList.innerHTML="",o()}).catch(function(c){return console.log(c)})})},H=function(c){if(""!=a().addInput.value)return new Promise(function(l,h){c.preventDefault(),r.post("/tasks",{id:document.querySelectorAll(".one-task").id+1,title:a().addInput.value.trim()}).then(function(){a().tasksList.innerHTML="",o(),a().addInput.value=""}).catch(function(c){return console.log(c)})});c.preventDefault()},u=function(){a().downSection.innerHTML='               \n   <div class="back-icon">\n   <i class="fas fa-chevron-left"></i>\n   </div>\n   <div id="adder">\n   <form class="add-form">\n   <input id="add-input" type="text" placeholder="Add...">\n   <button class="add-button">\n   <i class="fas fa-plus-circle add-icon"></i>\n   </button>\n   </form>\n   </div>',t(),a().backIcon.addEventListener("click",V),a().addForm.addEventListener("submit",H)},V=function(){a().downSection.innerHTML='               \n   What have for today?\n   <div class="arrow-icons">\n      <i class="fas fa-chevron-right"></i>\n      <i class="fas fa-chevron-right"></i>\n   </div>',t(),a().arrowIcons.addEventListener("click",u)},C=function(){t();a().searchTask.addEventListener("input",i);a().pageDate.textContent=(c=new Date,l=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(c),h=new Intl.DateTimeFormat("en-US",{month:"long"}).format(c),"".concat(l,", ").concat(c.getDate()," ").concat(h));var c,l,h},d=function(){o(),t(),a().arrowIcons.addEventListener("click",u)},L=function(){C(),d()},p=h(13),b=h.n(p),g=h(14),y=h.n(g),w=function(){s(y.a).then(function(){L()})};z.a.base("/to-do-list"),z()("/",function(){s(b.a).then(function(){setTimeout(w,4e3)})}),z()("/tasks",w),z()("*",function(){}),z()()},function(c,l){}]);