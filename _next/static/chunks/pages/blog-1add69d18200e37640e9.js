(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2167:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var i=o(n(7294)),s=n(9414),a=n(4651),c=n(7426),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=(0,a.useRouter)(),f=i.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,s.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),d=f.href,m=f.as,v=e.children,h=e.replace,p=e.shallow,x=e.scroll,_=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var j=(t=i.Children.only(v))&&"object"===typeof t&&t.ref,g=(0,c.useIntersection)({rootMargin:"200px"}),y=r(g,2),b=y[0],w=y[1],N=i.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);(0,i.useEffect)((function(){var e=w&&n&&(0,s.isLocalURL)(d),t="undefined"!==typeof _?_:o&&o.locale,r=l[d+"%"+m+(t?"%"+t:"")];e&&!r&&u(o,d,m,{locale:t})}),[m,d,w,_,n,o]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:a}))}(e,o,d,m,h,p,x,_)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof _?_:o&&o.locale,L=o&&o.isLocaleDomain&&(0,s.getDomainLocale)(m,k,o&&o.locales,o&&o.domainLocales);E.href=L||(0,s.addBasePath)((0,s.addLocale)(m,k,o&&o.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],m=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,s=r.elements;return s.set(e,t),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!s&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[m,f]};var o=n(7294),i=n(3447),s="undefined"!==typeof IntersectionObserver;var a=new Map},670:function(e,t,n){"use strict";n.d(t,{A:function(){return _}});var r=n(5893),o=n(7294),i=n(9008),s=n(9227),a=n(1664),c=n(9122),l=n.n(c),u=function(e){var t=e.show,n=e.icon,i=e.circle,s=(0,o.useState)({x:0,y:0}),a=s[0],c=s[1],u=(0,o.useCallback)((function(e){c({x:e.clientX,y:e.clientY})}),[]);return(0,o.useEffect)((function(){return document.addEventListener("mousemove",u),function(){document.removeEventListener("mousemove",u)}}),[u]),(0,r.jsx)("div",{className:[l().cursor,t?"":l().hide,i?l().circle:""].join(" "),style:{left:a.x,top:a.y},children:(0,r.jsx)("div",{className:l().icon,children:"\ud83d\udc4b"===n?(0,r.jsx)("div",{className:l().wave,children:n}):n})})},f={hi:{title:"say hi.",emoji:"\ud83d\udc4b",slug:"/hi"},work:{title:"working.",emoji:"\ud83d\udcbb",slug:"/work"},blog:{title:"writing.",emoji:"\ud83d\udcdd",slug:"/blog"}},d=function(e){var t=e.slug,n=e.title,i=e.emoji,s=e.effect,c=(0,o.useRef)(null),l=(0,o.useState)(!1),f=l[0],d=l[1],m=function(){return d(!0)},v=function(){return d(!1)};return(0,o.useEffect)((function(){var e=c.current;if(e)return e.addEventListener("mouseenter",m),e.addEventListener("mouseleave",v),function(){e&&(e.removeEventListener("mouseenter",m),e.removeEventListener("mouseleave",v))}}),[]),(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(a.default,{href:t,children:(0,r.jsx)("a",{ref:c,className:["text-base font-bold leading-6 rainbown",s?"cursor-none":"cursor-pointer"].join(" "),children:n})}),s&&(0,r.jsx)(u,{show:f,icon:i})]})},m=function(e){var t=e.active;return(0,r.jsxs)("nav",{className:"flex items-center justify-between leading-6",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d,{slug:"/",title:"home."}),t&&(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{className:"px-4 text-dark-muted",children:"/"}),(0,r.jsxs)("span",{className:"text-base font-bold leading-6",children:[f[t].title," ",f[t].emoji]})]})]}),(0,r.jsx)("div",{className:"flex items-center",children:Object.entries(f).map((function(e,n){var i=(0,s.Z)(e,2),a=i[0],c=i[1];return a!==t?(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{className:"w-12"}),(0,r.jsx)(d,{slug:c.slug,title:c.title,emoji:c.emoji,effect:!0})]},n):null}))})]})},v=n(4037),h=n(7763),p=n.n(h),x=function(e){return e.illustration?(0,r.jsxs)("footer",{className:"w-full h-[160px] relative overflow-hidden",children:[(0,r.jsx)("div",{className:p().ground}),(0,r.jsx)("div",{className:p().cloud}),(0,r.jsx)("div",{className:p().sun}),(0,r.jsx)("div",{className:p().me,children:"\ud83c\udf1d"})]}):(0,r.jsx)("footer",{className:"flex items-center justify-center w-full p-9",children:(0,r.jsxs)("div",{className:"text-center text-middle",children:["Hello, here the Monody's space!",(0,r.jsx)("br",{}),"You can"," ",(0,r.jsx)("a",{href:v.Ok.kofi,className:"underline",target:"_blank",rel:"noreferrer",children:"buy me a coffee"})," ","if you feel enjoy this blog."]})})},_=function(e){var t=e.title,n=void 0===t?"The Monody's Space":t,s=e.active,a=e.footer,c=e.children;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:n})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-between min-h-screen",children:[(0,r.jsxs)("div",{className:"container flex flex-col px-16 py-20 mx-auto",children:[(0,r.jsx)(m,{active:s}),(0,r.jsx)("div",{className:"h-16"}),(0,r.jsx)("div",{className:"flex-auto flex-shrink-0",children:c})]}),(0,r.jsx)(x,{illustration:a})]})]})}},8048:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(5893),o=n(1664),i=n(9643),s=n(670),a=n(7455),c=n.n(a),l=!0;t.default=function(e){var t=e.posts;return(0,r.jsx)(s.A,{active:"blog",children:t.map((function(e,t){return(0,r.jsxs)("div",{className:"mb-12",children:[(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[e.date&&(0,r.jsx)("span",{className:"text-middle",children:i.Z.getDateString(e.date)}),(0,r.jsx)("div",{className:"w-2"}),e.tags&&(0,r.jsx)("div",{className:"flex",children:e.tags.map((function(e,t){return(0,r.jsx)("span",{className:[c().tag,"opacity-50"].join(" "),children:e},t)}))})]}),(0,r.jsx)("h2",{className:"text-2xl font-bold",children:(0,r.jsx)(o.default,{href:"/blog/".concat(e.slug),children:(0,r.jsx)("a",{className:"rainbown",children:e.title})})})]},t)}))})}},9643:function(e,t){"use strict";var n=function(e){return new Date(e)},r={getDate:n,getDateString:function(e){return new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short",year:"numeric"}).format(n(e))}};t.Z=r},5423:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(8048)}])},9122:function(e){e.exports={cursor:"cursor_cursor__1ID5l",circle:"cursor_circle__2aR4h",hide:"cursor_hide__17TGI",icon:"cursor_icon__2mcpm",wave:"cursor_wave__1Tlmd"}},7763:function(e){e.exports={ground:"footer_ground__1pqdn","bg-forward":"footer_bg-forward__1Dhh4",cloud:"footer_cloud__3tOqq",sun:"footer_sun__2XIP1",me:"footer_me__3LF9e"}},7455:function(e){e.exports={article:"post_article__2w3XN",hero:"post_hero__3BSnJ",title:"post_title__3g4nB",time:"post_time__ih63X",tag:"post_tag__28ZFZ",content:"post_content__1tL7U",markdown:"post_markdown__38t3u",note:"post_note__2Xqna"}},1664:function(e,t,n){e.exports=n(2167)},9227:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[774,888,179],(function(){return t=5423,e(e.s=t);var t}));var t=e.O();_N_E=t}]);