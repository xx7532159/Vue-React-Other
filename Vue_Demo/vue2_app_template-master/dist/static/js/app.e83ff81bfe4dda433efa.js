webpackJsonp([4],{123:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},124:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n(44),n(80)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var r=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(r):r()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},125:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},126:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),r=(n.n(i),n(47)),o=n.n(r),a=n(9),s=n(26),u=n(50),c=n(25),l=n.n(c),f=n(49),h=n(51),p=(n.n(h),n(46)),d=(n.n(p),n(48)),m=n.n(d);a.default.prototype.$http=f.a,a.default.use(o.a),a.default.use(m.a),new a.default({el:"#app",router:s.a,store:u.a,render:function(t){return t(l.a)}})},127:function(t,e,n){"use strict";var i=n(45);e.a={routerQuery:function(t,e){(0,t.commit)(i.a,e)}}},128:function(t,e,n){"use strict";e.a={}},129:function(t,e,n){"use strict";var i=n(122),r=n.n(i),o=n(45);e.a=r()({},o.a,function(t,e){t.count+=e})},14:function(t,e){},25:function(t,e,n){n(81);var i=n(15)(n(125),n(76),null,null);t.exports=i.exports},26:function(t,e,n){"use strict";var i=n(9),r=n(118),o=n(25),a=n.n(o),s=function(t){return n.e(0).then(function(){return t(n(133))}.bind(null,n)).catch(n.oe)},u=function(t){return n.e(1).then(function(){return t(n(134))}.bind(null,n)).catch(n.oe)},c=function(t){return n.e(2).then(function(){return t(n(132))}.bind(null,n)).catch(n.oe)};i.default.use(r.a);var l=[{path:"/",component:a.a,children:[{path:"",redirect:"/mainWork"},{path:"/mainWork",component:s},{path:"/mainWorks",component:u},{path:"/mainMy",component:c,children:[{path:"/",component:s}]}]}];e.a=new r.a({routes:l,linkActiveClass:"my-active"})},45:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="ROUTER_QUERY"},46:function(t,e){},49:function(t,e,n){"use strict";var i=n(121),r=n.n(i),o=n(53),a=n.n(o);a.a.defaults.timeout=5e3,a.a.interceptors.response.use(function(t){return 654===t.status&&window.alert("请求超时！"),t},function(t){return console.log("promise error:"+t),r.a.reject(t)}),e.a=a.a},50:function(t,e,n){"use strict";var i=n(9),r=n(82),o=n(129),a=n(127),s=n(128);i.default.use(r.a);var u={count:0};e.a=new r.a.Store({state:u,getters:s.a,actions:a.a,mutations:o.a})},51:function(t,e){!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;o<r;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})}();var n=function(){function t(t){return"[object Function]"==D.call(t)}function e(t){return t instanceof Object}function n(e){var n,i;if("[object Object]"!==D.call(e))return!1;if(!(i=t(e.constructor)&&e.constructor.prototype)||!hasOwnProperty.call(i,"isPrototypeOf"))return!1;for(n in e);return n===m||hasOwnProperty.call(e,n)}function i(t){return t instanceof Array}function r(t){return"number"==typeof t.length}function o(t){return t.filter(function(t){return t!==m&&null!==t})}function a(t){return t.length>0?[].concat.apply([],t):t}function s(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in S?S[t]:S[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function c(t,e){return"number"!=typeof e||_[s(t)]?e:e+"px"}function l(t){var e,n;return j[t]||(e=T.createElement(t),T.body.appendChild(e),n=C(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),j[t]=n),j[t]}function f(t,e){return e===m?g(t):g(t).filter(e)}function h(e,n,i,r){return t(n)?n.call(e,i,r):n}function p(t,e,n){var i=t%2?e:e.parentNode;i?i.insertBefore(n,t?1==t?i.firstChild:2==t?e:null:e.nextSibling):g(n).remove()}function d(t,e){e(t);for(var n in t.childNodes)d(t.childNodes[n],e)}var m,v,g,y,w,x,b=[],E=b.slice,T=window.document,j={},S={},C=T.defaultView.getComputedStyle,_={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},O=/^\s*<(\w+|!)[^>]*>/,k=[1,3,8,9,11],N=["after","prepend","before","append"],P=T.createElement("table"),$=T.createElement("tr"),A={tr:T.createElement("tbody"),tbody:P,thead:P,tfoot:P,td:$,th:$,"*":T.createElement("div")},M=/complete|loaded|interactive/,R=/^\.([\w-]+)$/,L=/^#([\w-]+)$/,z=/^[\w-]+$/,D={}.toString,q={},U=T.createElement("div");return q.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=U).appendChild(t),i=~q.qsa(r,e).indexOf(t),o&&U.removeChild(t),i},w=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},x=function(t){return t.filter(function(e,n){return t.indexOf(e)==n})},q.fragment=function(t,e){e===m&&(e=O.test(t)&&RegExp.$1),e in A||(e="*");var n=A[e];return n.innerHTML=""+t,g.each(E.call(n.childNodes),function(){n.removeChild(this)})},q.Z=function(t,e){return t=t||[],t.__proto__=arguments.callee.prototype,t.selector=e||"",t},q.isZ=function(t){return t instanceof q.Z},q.init=function(e,r){if(!e)return q.Z();if(t(e))return g(T).ready(e);if(q.isZ(e))return e;var a;if(i(e))a=o(e);else if(n(e))a=[g.extend({},e)],e=null;else if(k.indexOf(e.nodeType)>=0||e===window)a=[e],e=null;else if(O.test(e))a=q.fragment(e.trim(),RegExp.$1),e=null;else{if(r!==m)return g(r).find(e);a=q.qsa(T,e)}return q.Z(a,e)},g=function(t,e){return q.init(t,e)},g.extend=function(t){return E.call(arguments,1).forEach(function(e){for(v in e)e[v]!==m&&(t[v]=e[v])}),t},q.qsa=function(t,e){var n;return t===T&&L.test(e)?(n=t.getElementById(RegExp.$1))?[n]:b:1!==t.nodeType&&9!==t.nodeType?b:E.call(R.test(e)?t.getElementsByClassName(RegExp.$1):z.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},g.isFunction=t,g.isObject=e,g.isArray=i,g.isPlainObject=n,g.inArray=function(t,e,n){return b.indexOf.call(e,t,n)},g.trim=function(t){return t.trim()},g.uuid=0,g.map=function(t,e){var n,i,o,s=[];if(r(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&s.push(n);else for(o in t)null!=(n=e(t[o],o))&&s.push(n);return a(s)},g.each=function(t,e){var n,i;if(r(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},g.fn={forEach:b.forEach,reduce:b.reduce,push:b.push,indexOf:b.indexOf,concat:b.concat,map:function(t){return g.map(this,function(e,n){return t.call(e,n,e)})},slice:function(){return g(E.apply(this,arguments))},ready:function(t){return M.test(T.readyState)?t(g):T.addEventListener("DOMContentLoaded",function(){t(g)},!1),this},get:function(t){return t===m?E.call(this):this[t]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return this.forEach(function(e,n){t.call(e,n,e)}),this},filter:function(t){return g([].filter.call(this,function(e){return q.matches(e,t)}))},add:function(t,e){return g(x(this.concat(g(t,e))))},is:function(t){return this.length>0&&q.matches(this[0],t)},not:function(e){var n=[];if(t(e)&&e.call!==m)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):r(e)&&t(e.item)?E.call(e):g(e);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return g(n)},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!e(t)?t:g(t)},last:function(){var t=this[this.length-1];return t&&!e(t)?t:g(t)},find:function(t){var e;return e=1==this.length?q.qsa(this[0],t):this.map(function(){return q.qsa(this,t)}),g(e)},closest:function(t,e){for(var n=this[0];n&&!q.matches(n,t);)n=n!==e&&n!==T&&n.parentNode;return g(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=g.map(n,function(t){if((t=t.parentNode)&&t!==T&&e.indexOf(t)<0)return e.push(t),t});return f(e,t)},parent:function(t){return f(x(this.pluck("parentNode")),t)},children:function(t){return f(this.map(function(){return E.call(this.children)}),t)},siblings:function(t){return f(this.map(function(t,e){return E.call(e.parentNode.children).filter(function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return this.map(function(){return this[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==C(this,"").getPropertyValue("display")&&(this.style.display=l(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){return this.each(function(){g(this).wrapAll(g(t)[0].cloneNode(!1))})},wrapAll:function(t){return this[0]&&(g(this[0]).before(t=g(t)),t.append(this)),this},unwrap:function(){return this.parent().each(function(){g(this).replaceWith(g(this).children())}),this},clone:function(){return g(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(t){return(t===m?"none"==this.css("display"):t)?this.show():this.hide()},prev:function(){return g(this.pluck("previousElementSibling"))},next:function(){return g(this.pluck("nextElementSibling"))},html:function(t){return t===m?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;g(this).empty().append(h(this,t,e,n))})},text:function(t){return t===m?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,n){var i;return"string"==typeof t&&n===m?0==this.length||1!==this[0].nodeType?m:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(i=this[0].getAttribute(t))&&t in this[0]?this[0][t]:i:this.each(function(i){if(1===this.nodeType)if(e(t))for(v in t)this.setAttribute(v,t[v]);else this.setAttribute(t,h(this,n,i,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&this.removeAttribute(t)})},prop:function(t,e){return e===m?this[0]?this[0][t]:m:this.each(function(n){this[t]=h(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+s(t),e);return null!==n?n:m},val:function(t){return t===m?this.length>0?this[0].value:m:this.each(function(e){this.value=h(this,t,e,this.value)})},offset:function(){if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}},css:function(t,e){if(e===m&&"string"==typeof t)return 0==this.length?m:this[0].style[w(t)]||C(this[0],"").getPropertyValue(t);var n="";for(v in t)"string"==typeof t[v]&&""==t[v]?this.each(function(){this.style.removeProperty(s(v))}):n+=s(v)+":"+c(v,t[v])+";";return"string"==typeof t&&(""==e?this.each(function(){this.style.removeProperty(s(t))}):n=s(t)+":"+c(t,e)),this.each(function(){this.style.cssText+=";"+n})},index:function(t){return t?this.indexOf(g(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!(this.length<1)&&u(t).test(this[0].className)},addClass:function(t){return this.each(function(e){y=[];var n=this.className;h(this,t,e,n).split(/\s+/g).forEach(function(t){g(this).hasClass(t)||y.push(t)},this),y.length&&(this.className+=(n?" ":"")+y.join(" "))})},removeClass:function(t){return this.each(function(e){if(t===m)return this.className="";y=this.className,h(this,t,e,y).split(/\s+/g).forEach(function(t){y=y.replace(u(t)," ")}),this.className=y.trim()})},toggleClass:function(t,e){return this.each(function(n){var i=h(this,t,n,this.className);(e===m?!g(this).hasClass(i):e)?g(this).addClass(i):g(this).removeClass(i)})}},["width","height"].forEach(function(t){g.fn[t]=function(e){var n,i=t.replace(/./,function(t){return t[0].toUpperCase()});return e===m?this[0]==window?window["inner"+i]:this[0]==T?T.documentElement["offset"+i]:(n=this.offset())&&n[t]:this.each(function(n){var i=g(this);i.css(t,h(this,e,n,i[t]()))})}}),N.forEach(function(t,n){g.fn[t]=function(){var t=g.map(arguments,function(t){return e(t)?t:q.fragment(t)});if(t.length<1)return this;var i=this.length,r=i>1,o=n<2;return this.each(function(e,a){for(var s=0;s<t.length;s++){var u=t[o?t.length-s-1:s];d(u,function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&window.eval.call(window,t.innerHTML)}),r&&e<i-1&&(u=u.cloneNode(!0)),p(n,a,u)}})},g.fn[n%2?t+"To":"insert"+(n?"Before":"After")]=function(e){return g(e)[t](this),this}}),q.Z.prototype=g.fn,q.camelize=w,q.uniq=x,g.zepto=q,g}();window.Zepto=n,"$"in window||(window.$=n),function(t){function e(t){return t._zid||(t._zid=f++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(l[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,i){t.isObject(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function a(n,r,a,s,u,c){c=!!c;var f=e(n),h=l[f]||(l[f]=[]);o(r,a,function(e,r){var o=u&&u(r,e),a=o||r,l=function(t){var e=a.apply(n,[t].concat(t.data));return!1===e&&t.preventDefault(),e},f=t.extend(i(e),{fn:r,proxy:l,sel:s,del:o,i:h.length});h.push(f),n.addEventListener(f.e,l,c)})}function s(t,i,r,a){var s=e(t);o(i||"",r,function(e,i){n(t,e,i,a).forEach(function(e){delete l[s][e.i],t.removeEventListener(e.e,e.proxy,!1)})})}function u(e){var n=t.extend({originalEvent:e},e);return t.each(m,function(t,i){n[t]=function(){return this[i]=p,e[t].apply(e,arguments)},n[i]=d}),n}function c(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var l=(t.zepto.qsa,{}),f=1,h={};h.click=h.mousedown=h.mouseup=h.mousemove="MouseEvents",t.event={add:a,remove:s},t.proxy=function(n,i){if(t.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){a(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){s(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){a(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return s(i,e,t),n}})})};var p=function(){return!0},d=function(){return!1},m={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){var r=!1;return"blur"!=n&&"focus"!=n||(t.iswebkit?n="blur"==n?"focusout":"focus"==n?"focusin":n:r=!0),this.each(function(o,s){a(s,n,i,e,function(n){return function(i){var r,o=t(i.target).closest(e,s).get(0);if(o)return r=t.extend(u(i),{currentTarget:o,liveFired:s}),n.apply(o,[r].concat([].slice.call(arguments,1)))}},r)})},t.fn.undelegate=function(t,e,n){return this.each(function(){s(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return void 0==n||t.isFunction(n)?this.bind(e,n):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return void 0==n||t.isFunction(n)?this.unbind(e,n):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return"string"==typeof e&&(e=t.Event(e)),c(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=u("string"==typeof e?t.Event(e):e),r.data=i,r.target=s,t.each(n(s,e.type||e),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){if(t)this.bind(e,t);else if(this.length)try{this.get(0)[e]()}catch(t){}return this}}),t.Event=function(t,e){var n=document.createEvent(h[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n}}(n),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=s&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),a&&(e.ios=e.iphone=!0,e.version=a[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),s&&(e.webos=!0,e.version=s[2]),u&&(e.touchpad=!0),f&&(e.blackberry=!0,e.version=f[2]),c&&(e.kindle=!0,e.version=c[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0)}e.call(t,navigator.userAgent),t.__detect=e}(n),function(t,e){function n(t){return t.toLowerCase()}function i(t){return r?r+t:n(t)}var r,o="",a={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},s=window.document,u=s.createElement("div"),c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,l={};t.each(a,function(t,i){if(u.style[t+"TransitionProperty"]!==e)return o="-"+n(t)+"-",r=i,!1}),l[o+"transition-property"]=l[o+"transition-duration"]=l[o+"transition-timing-function"]=l[o+"animation-name"]=l[o+"animation-duration"]="",t.fx={off:r===e&&u.style.transitionProperty===e,cssPrefix:o,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(e,n,i,r){return t.isObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n/=1e3),this.anim(e,n,i,r)},t.fn.anim=function(n,i,r,a){var s,u,f,h={},p=this,d=t.fx.transitionEnd;if(i===e&&(i=.4),t.fx.off&&(i=0),"string"==typeof n)h[o+"animation-name"]=n,h[o+"animation-duration"]=i+"s",d=t.fx.animationEnd;else{for(u in n)c.test(u)?(s||(s=[]),s.push(u+"("+n[u]+")")):h[u]=n[u];s&&(h[o+"transform"]=s.join(" ")),!t.fx.off&&"object"==typeof n&&(h[o+"transition-property"]=Object.keys(n).join(", "),h[o+"transition-duration"]=i+"s",h[o+"transition-timing-function"]=r||"linear")}return f=function(e){if(void 0!==e){if(e.target!==e.currentTarget)return;t(e.target).unbind(d,arguments.callee)}t(this).css(l),a&&a.call(this)},i>0&&this.bind(d,f),setTimeout(function(){p.css(h),i<=0&&setTimeout(function(){p.each(function(){f.call(this)})},0)},0),this},u=null}(n),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.defaultPrevented}function n(t,n,i,r){if(t.global)return e(n||y,i,r)}function i(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;if(!1===e.beforeSend.call(i,t,e)||!1===n(e,i,"ajaxBeforeSend",[t,e]))return!1;n(e,i,"ajaxSend",[t,e])}function a(t,e,i){var r=i.context,o="success";i.success.call(r,t,o,e),n(i,r,"ajaxSuccess",[e,i,t]),u(o,e,i)}function s(t,e,i,r){var o=r.context;r.error.call(o,i,e,t),n(r,o,"ajaxError",[i,r,t]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t==E?"html":t==b?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){g(e.data)&&(e.data=t.param(e.data)),e.data&&(!e.type||"GET"==e.type.toUpperCase())&&(e.url=f(e.url,e.data))}function p(e,n,i,r){var o=t.isArray(n);t.each(n,function(n,a){r&&(n=i?r:r+"["+(o?"":n)+"]"),!r&&o?e.add(a.name,a.value):(i?t.isArray(a):g(a))?p(e,a,i,n):e.add(n,a)})}var d,m,v=0,g=t.isObject,y=window.document,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,b="application/json",E="text/html",T=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){var n,i="jsonp"+ ++v,r=y.createElement("script"),o=function(){t(r).remove(),i in window&&(window[i]=c),u("abort",s,e)},s={abort:o};return e.error&&(r.onerror=function(){s.abort(),e.error()}),window[i]=function(o){clearTimeout(n),t(r).remove(),delete window[i],a(o,s,e)},h(e),r.src=e.url.replace(/=\?/,"="+i),t("head").append(r),e.timeout>0&&(n=setTimeout(function(){s.abort(),u("timeout",s,e)},e.timeout)),s},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:b,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0},t.ajax=function(e){var n=t.extend({},e||{});for(d in t.ajaxSettings)void 0===n[d]&&(n[d]=t.ajaxSettings[d]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host);var r=n.dataType,u=/=\?/.test(n.url);if("jsonp"==r||u)return u||(n.url=f(n.url,"callback=?")),t.ajaxJSONP(n);n.url||(n.url=window.location.toString()),h(n);var p,v=n.accepts[r],g={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,w=t.ajaxSettings.xhr();n.crossDomain||(g["X-Requested-With"]="XMLHttpRequest"),v&&(g.Accept=v,v.indexOf(",")>-1&&(v=v.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(v)),(n.contentType||n.data&&"GET"!=n.type.toUpperCase())&&(g["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(g,n.headers||{}),w.onreadystatechange=function(){if(4==w.readyState){clearTimeout(p);var t,e=!1;if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==y){r=r||l(w.getResponseHeader("content-type")),t=w.responseText;try{"script"==r?(0,eval)(t):"xml"==r?t=w.responseXML:"json"==r&&(t=T.test(t)?null:JSON.parse(t))}catch(t){e=t}e?s(e,"parsererror",w,n):a(t,w,n)}else s(null,"error",w,n)}};var x=!("async"in n)||n.async;w.open(n.type,n.url,x);for(m in n.headers)w.setRequestHeader(m,n.headers[m]);return!1===o(w,n)?(w.abort(),!1):(n.timeout>0&&(p=setTimeout(function(){w.onreadystatechange=c,w.abort(),s(null,"timeout",w,n)},n.timeout)),w.send(n.data?n.data:null),w)},t.get=function(e,n){return t.ajax({url:e,success:n})},t.post=function(e,n,i,r){return t.isFunction(n)&&(r=r||i,i=n,n=null),t.ajax({type:"POST",url:e,data:n,success:i,dataType:r})},t.getJSON=function(e,n){return t.ajax({url:e,success:n,dataType:"json"})},t.fn.load=function(e,n){if(!this.length)return this;var i,r=this,o=e.split(/\s/);return o.length>1&&(e=o[0],i=o[1]),t.get(e,function(e){r.html(i?t(y.createElement("div")).html(e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")).find(i).html():e),n&&n.call(r)}),this};var j=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(j(t)+"="+j(e))},p(n,t,e),n.join("&").replace("%20","+")}}(n),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(n),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){a=null,s.last&&(s.el.trigger("longTap"),s={})}function r(){a&&clearTimeout(a),a=null}var o,a,s={};t(document).ready(function(){var u,c;t(document.body).bind("touchstart",function(n){u=Date.now(),c=u-(s.last||u),s.el=t(e(n.touches[0].target)),o&&clearTimeout(o),s.x1=n.touches[0].pageX,s.y1=n.touches[0].pageY,c>0&&c<=250&&(s.isDoubleTap=!0),s.last=u,a=setTimeout(i,750)}).bind("touchmove",function(t){r(),s.x2=t.touches[0].pageX,s.y2=t.touches[0].pageY}).bind("touchend",function(t){r(),s.isDoubleTap?(s.el.trigger("doubleTap"),s={}):s.x2&&Math.abs(s.x1-s.x2)>30||s.y2&&Math.abs(s.y1-s.y2)>30?(s.el.trigger("swipe")&&s.el.trigger("swipe"+n(s.x1,s.x2,s.y1,s.y2)),s={}):"last"in s&&(s.el.trigger("tap"),o=setTimeout(function(){o=null,s.el.trigger("singleTap"),s={}},250))}).bind("touchcancel",function(){o&&clearTimeout(o),a&&clearTimeout(a),a=o=null,s={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(n)},74:function(t,e,n){var i=n(15)(n(123),n(77),null,null);t.exports=i.exports},75:function(t,e,n){var i=n(15)(n(124),n(78),null,null);t.exports=i.exports},76:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",[n("router-view")],1)},staticRenderFns:[]}},77:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},78:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},80:function(t,e){},81:function(t,e){}},[126]);
//# sourceMappingURL=app.e83ff81bfe4dda433efa.js.map