(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7090:function(e){!function(t,n){var r=function(e,t,n){"use strict";var r,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var o=t.documentElement,i=e.HTMLPictureElement,s="addEventListener",c="getAttribute",u=e[s].bind(e),l=e.setTimeout,d=e.requestAnimationFrame||l,f=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],v={},y=Array.prototype.forEach,h=function(e,t){return v[t]||(v[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),v[t].test(e[c]("class")||"")&&v[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},C=function(e,t,n){var r=n?s:"removeEventListener";n&&C(e,t),m.forEach((function(n){e[r](n,t)}))},w=function(e,n,a,o,i){var s=t.createEvent("Event");return a||(a={}),a.instance=r,s.initEvent(n,!o,!i),s.detail=a,e.dispatchEvent(s),s},z=function(t,n){var r;!i&&(r=e.picturefill||a.pf)?(n&&n.src&&!t[c]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},O=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},M=function(){var e,n,r=[],a=[],o=r,i=function(){var t=o;for(o=r.length?a:r,e=!0,n=!1;t.length;)t.shift()();e=!1},s=function(r,a){e&&!a?r.apply(this,arguments):(o.push(r),n||(n=!0,(t.hidden?l:d)(i)))};return s._lsFlush=i,s}(),E=function(e,t){return t?function(){M(e)}:function(){var t=this,n=arguments;M((function(){e.apply(t,n)}))}},j=function(e){var t,r=0,o=a.throttleDelay,i=a.ricTimeout,s=function(){t=!1,r=n.now(),e()},c=f&&i>49?function(){f(s,{timeout:i}),i!==a.ricTimeout&&(i=a.ricTimeout)}:E((function(){l(s)}),!0);return function(e){var a;(e=!0===e)&&(i=33),t||(t=!0,(a=o-(n.now()-r))<0&&(a=0),e||a<9?c():l(c,a))}},x=function(e){var t,r,a=99,o=function(){t=null,e()},i=function(){var e=n.now()-r;e<a?l(i,a-e):(f||o)(o)};return function(){r=n.now(),t||(t=l(i,a))}},A=function(){var i,f,m,v,_,A,k,S,N,D,L,T,W=/^img$/i,H=/^iframe$/i,R="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),F=0,I=0,B=0,$=-1,q=function(e){B--,(!e||B<0||!e.target)&&(B=0)},U=function(e){return null==T&&(T="hidden"==O(t.body,"visibility")),T||!("hidden"==O(e.parentNode,"visibility")&&"hidden"==O(e,"visibility"))},X=function(e,n){var r,a=e,i=U(e);for(S-=n,L+=n,N-=n,D+=n;i&&(a=a.offsetParent)&&a!=t.body&&a!=o;)(i=(O(a,"opacity")||1)>0)&&"visible"!=O(a,"overflow")&&(r=a.getBoundingClientRect(),i=D>r.left&&N<r.right&&L>r.top-1&&S<r.bottom+1);return i},Z=function(){var e,n,s,u,l,d,p,m,y,h,g,b,C=r.elements;if((v=a.loadMode)&&B<8&&(e=C.length)){for(n=0,$++;n<e;n++)if(C[n]&&!C[n]._lazyRace)if(!R||r.prematureUnveil&&r.prematureUnveil(C[n]))te(C[n]);else if((m=C[n][c]("data-expand"))&&(d=1*m)||(d=I),h||(h=!a.expand||a.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:a.expand,r._defEx=h,g=h*a.expFactor,b=a.hFac,T=null,I<g&&B<1&&$>2&&v>2&&!t.hidden?(I=g,$=0):I=v>1&&$>1&&B<6?h:F),y!==d&&(A=innerWidth+d*b,k=innerHeight+d,p=-1*d,y=d),s=C[n].getBoundingClientRect(),(L=s.bottom)>=p&&(S=s.top)<=k&&(D=s.right)>=p*b&&(N=s.left)<=A&&(L||D||N||S)&&(a.loadHidden||U(C[n]))&&(f&&B<3&&!m&&(v<3||$<4)||X(C[n],d))){if(te(C[n]),l=!0,B>9)break}else!l&&f&&!u&&B<4&&$<4&&v>2&&(i[0]||a.preloadAfterLoad)&&(i[0]||!m&&(L||D||N||S||"auto"!=C[n][c](a.sizesAttr)))&&(u=i[0]||C[n]);u&&!l&&te(u)}},Q=j(Z),V=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(q(e),g(t,a.loadedClass),b(t,a.loadingClass),C(t,G),w(t,"lazyloaded"))},Y=E(V),G=function(e){Y({target:e.target})},J=function(e,t){var n=e.getAttribute("data-load-mode")||a.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},K=function(e){var t,n=e[c](a.srcsetAttr);(t=a.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ee=E((function(e,t,n,r,o){var i,s,u,d,f,v;(f=w(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?g(e,a.autosizesClass):e.setAttribute("sizes",r)),s=e[c](a.srcsetAttr),i=e[c](a.srcAttr),o&&(d=(u=e.parentNode)&&p.test(u.nodeName||"")),v=t.firesLoad||"src"in e&&(s||i||d),f={target:e},g(e,a.loadingClass),v&&(clearTimeout(m),m=l(q,2500),C(e,G,!0)),d&&y.call(u.getElementsByTagName("source"),K),s?e.setAttribute("srcset",s):i&&!d&&(H.test(e.nodeName)?J(e,i):e.src=i),o&&(s||d)&&z(e,{src:i})),e._lazyRace&&delete e._lazyRace,b(e,a.lazyClass),M((function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&g(e,a.fastLoadedClass),V(f),e._lazyCache=!0,l((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&B--}),!0)})),te=function(e){if(!e._lazyRace){var t,n=W.test(e.nodeName),r=n&&(e[c](a.sizesAttr)||e[c]("sizes")),o="auto"==r;(!o&&f||!n||!e[c]("src")&&!e.srcset||e.complete||h(e,a.errorClass)||!h(e,a.lazyClass))&&(t=w(e,"lazyunveilread").detail,o&&P.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,B++,ee(e,t,o,r,n))}},ne=x((function(){a.loadMode=3,Q()})),re=function(){3==a.loadMode&&(a.loadMode=2),ne()},ae=function(){f||(n.now()-_<999?l(ae,999):(f=!0,a.loadMode=3,Q(),u("scroll",re,!0)))};return{_:function(){_=n.now(),r.elements=t.getElementsByClassName(a.lazyClass),i=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),u("scroll",Q,!0),u("resize",Q,!0),u("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&d((function(){n.forEach((function(e){e.complete&&te(e)}))}))}})),e.MutationObserver?new MutationObserver(Q).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[s]("DOMNodeInserted",Q,!0),o[s]("DOMAttrModified",Q,!0),setInterval(Q,999)),u("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,Q,!0)})),/d$|^c/.test(t.readyState)?ae():(u("load",ae),t[s]("DOMContentLoaded",Q),l(ae,2e4)),r.elements.length?(Z(),M._lsFlush()):Q()},checkElems:Q,unveil:te,_aLSL:re}}(),P=function(){var e,n=E((function(e,t,n,r){var a,o,i;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(o=0,i=(a=t.getElementsByTagName("source")).length;o<i;o++)a[o].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)})),r=function(e,t,r){var a,o=e.parentNode;o&&(r=_(e,o,r),(a=w(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=a.detail.width)&&r!==e._lazysizesWidth&&n(e,o,a,r))},o=x((function(){var t,n=e.length;if(n)for(t=0;t<n;t++)r(e[t])}));return{_:function(){e=t.getElementsByClassName(a.autosizesClass),u("resize",o)},checkElems:o,updateElem:r}}(),k=function(){!k.i&&t.getElementsByClassName&&(k.i=!0,P._(),A._())};return l((function(){a.init&&k()})),r={cfg:a,autoSizer:P,loader:A,init:k,uP:z,aC:g,rC:b,hC:h,fire:w,gW:_,rAF:M}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},9505:function(e,t,n){var r,a,o;!function(i,s){if(i){s=s.bind(null,i,i.document),e.exports?s(n(7090)):(a=[n(7090)],void 0===(o="function"===typeof(r=s)?r.apply(t,a):r)||(e.exports=o))}}("undefined"!=typeof window?window:0,(function(e,t,n){"use strict";var r=function(){var a,o,i,s,c=n.cfg,u={"data-bgset":1,"data-include":1,"data-poster":1,"data-bg":1,"data-script":1},l="(\\s|^)("+c.loadedClass,d=t.documentElement,f=function(e){n.rAF((function(){n.rC(e,c.loadedClass),c.unloadedClass&&n.rC(e,c.unloadedClass),n.aC(e,c.lazyClass),("none"==e.style.display||e.parentNode&&"none"==e.parentNode.style.display)&&setTimeout((function(){n.loader.unveil(e)}),0)}))},p=function(e){var t,n,r,a;for(t=0,n=e.length;t<n;t++)(a=(r=e[t]).target).getAttribute(r.attributeName)&&("source"==a.localName&&a.parentNode&&(a=a.parentNode.querySelector("img")),a&&l.test(a.className)&&f(a))};c.unloadedClass&&(l+="|"+c.unloadedClass),l+="|"+c.loadingClass+")(\\s|$)",l=new RegExp(l),u[c.srcAttr]=1,u[c.srcsetAttr]=1,e.MutationObserver?(i=new MutationObserver(p),a=function(){s||(s=!0,i.observe(d,{subtree:!0,attributes:!0,attributeFilter:Object.keys(u)}))},o=function(){s&&(s=!1,i.disconnect())}):(d.addEventListener("DOMAttrModified",function(){var e,t=[],n=function(){p(t),t=[],e=!1};return function(r){s&&u[r.attrName]&&r.newValue&&(t.push({target:r.target,attributeName:r.attrName}),e||(setTimeout(n),e=!0))}}(),!0),a=function(){s=!0},o=function(){s=!1}),addEventListener("lazybeforeunveil",o,!0),addEventListener("lazybeforeunveil",a),addEventListener("lazybeforesizes",o,!0),addEventListener("lazybeforesizes",a),a(),removeEventListener("lazybeforeunveil",r)};addEventListener("lazybeforeunveil",r)}))},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2775:function(e,t,n){"use strict";var r=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),u=n(1165),l=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=m.length;c<u;c++){var l=m[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var y=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=y},3244:function(e,t,n){"use strict";var r=n(3115),a=n(2553),o=n(2012),i=(n(450),n(9807)),s=n(7690),c=n(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},6123:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(4037),o=n(9008);function i(e){var t=e.title,n=void 0===t?a.vc.title:t,i=e.description,s=void 0===i?a.vc.excerpt:i,c=e.image,u=void 0===c?a.vc.image:c,l=e.slug,d=void 0===l?"/":l,f="".concat(a.vc.url).concat(d),p="".concat(a.vc.url).concat(u);return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n},"title"),(0,r.jsx)("meta",{name:"description",content:s},"description"),(0,r.jsx)("meta",{name:"image",content:p},"image"),(0,r.jsx)("meta",{property:"og:url",content:f},"og:url"),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,r.jsx)("meta",{property:"og:title",content:n},"og:title"),(0,r.jsx)("meta",{property:"og:description",content:s},"og:description"),(0,r.jsx)("meta",{property:"og:image",content:p},"og:image"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,r.jsx)("meta",{name:"twitter:creator",content:a.vc.author},"twitter:creator"),(0,r.jsx)("meta",{name:"twitter:title",content:n},"twitter:title"),(0,r.jsx)("meta",{name:"twitter:description",content:s},"twitter:description"),(0,r.jsx)("meta",{name:"twitter:image",content:p},"twitter:image")]})}},4037:function(e,t,n){"use strict";n.d(t,{vc:function(){return r},UY:function(){return a},Ok:function(){return o}});var r={author:"Monody Le",url:"https://minhle.space",title:"The Monody's Space",excerpt:"Hello, just a simple guy.",image:"/assets/cover.png",email:"hi@minhle.space"},a={github:"https://github.com/monodyle",facebook:"https://fb.me/monodylh",twitter:"https://twitter.com/monodyle"},o={kofi:"https://ko-fi.com/monodyle"}},4086:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(7090),n(9505);var o=n(7294),i=(n(7430),n(6123));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(o.StrictMode,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(t,c({},n))]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4086)}])},7430:function(){},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),a=n(7381),o=n(3585),i=n(5725);e.exports=function(e){return r(e)||a(e)||o(e)||i()}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);