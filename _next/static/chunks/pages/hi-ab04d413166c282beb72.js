(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{670:function(e,s,t){"use strict";t.d(s,{A:function(){return _}});var n=t(5893),r=t(7294),i=t(9008),a=t(9227),c=t(1664),l=t(9122),o=t.n(l),d=function(e){var s=e.show,t=e.icon,i=e.circle,a=(0,r.useState)({x:0,y:0}),c=a[0],l=a[1],d=(0,r.useCallback)((function(e){l({x:e.clientX,y:e.clientY})}),[]);return(0,r.useEffect)((function(){return document.addEventListener("mousemove",d),function(){document.removeEventListener("mousemove",d)}}),[d]),(0,n.jsx)("div",{className:[o().cursor,s?"":o().hide,i?o().circle:""].join(" "),style:{left:c.x,top:c.y},children:(0,n.jsx)("div",{className:o().icon,children:"\ud83d\udc4b"===t?(0,n.jsx)("div",{className:o().wave,children:t}):t})})},u={hi:{title:"say hi.",emoji:"\ud83d\udc4b",slug:"/hi"},work:{title:"working.",emoji:"\ud83d\udcbb",slug:"/work"},blog:{title:"writing.",emoji:"\ud83d\udcdd",slug:"/blog"}},f=function(e){var s=e.slug,t=e.title,i=e.emoji,a=e.effect,l=(0,r.useRef)(null),o=(0,r.useState)(!1),u=o[0],f=o[1],m=function(){return f(!0)},x=function(){return f(!1)};return(0,r.useEffect)((function(){var e=l.current;if(e)return e.addEventListener("mouseenter",m),e.addEventListener("mouseleave",x),function(){e&&(e.removeEventListener("mouseenter",m),e.removeEventListener("mouseleave",x))}}),[]),(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(c.default,{href:s,children:(0,n.jsx)("a",{ref:l,className:["text-base font-bold leading-6 rainbown",a?"cursor-none":"cursor-pointer"].join(" "),children:t})}),a&&(0,n.jsx)(d,{show:u,icon:i})]})},m=function(e){var s=e.active;return(0,n.jsxs)("nav",{className:"flex items-center justify-between leading-6",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(f,{slug:"/",title:"home."}),s&&(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)("div",{className:"px-4 text-dark-muted",children:"/"}),(0,n.jsxs)("span",{className:"text-base font-bold leading-6",children:[u[s].title," ",u[s].emoji]})]})]}),(0,n.jsx)("div",{className:"flex items-center",children:Object.entries(u).map((function(e,t){var i=(0,a.Z)(e,2),c=i[0],l=i[1];return c!==s?(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)("div",{className:"w-12"}),(0,n.jsx)(f,{slug:l.slug,title:l.title,emoji:l.emoji,effect:!0})]},t):null}))})]})},x=t(4037),h=t(7763),v=t.n(h),j=function(e){return e.illustration?(0,n.jsxs)("footer",{className:"w-full h-[160px] relative overflow-hidden",children:[(0,n.jsx)("div",{className:v().ground}),(0,n.jsx)("div",{className:v().cloud}),(0,n.jsx)("div",{className:v().sun}),(0,n.jsx)("div",{className:v().me,children:"\ud83c\udf1d"})]}):(0,n.jsx)("footer",{className:"flex items-center justify-center w-full p-9",children:(0,n.jsxs)("div",{className:"text-center text-middle",children:["Hello, here the Monody's space!",(0,n.jsx)("br",{}),"You can"," ",(0,n.jsx)("a",{href:x.Ok.kofi,className:"underline",target:"_blank",rel:"noreferrer",children:"buy me a coffee"})," ","if you feel enjoy this blog."]})})},_=function(e){var s=e.title,t=void 0===s?"The Monody's Space":s,a=e.active,c=e.footer,l=e.children;return(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:t})}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-between min-h-screen",children:[(0,n.jsxs)("div",{className:"container flex flex-col px-16 py-20 mx-auto",children:[(0,n.jsx)(m,{active:a}),(0,n.jsx)("div",{className:"h-16"}),(0,n.jsx)("div",{className:"flex-auto flex-shrink-0",children:l})]}),(0,n.jsx)(j,{illustration:c})]})]})}},9297:function(e,s,t){"use strict";t.d(s,{M:function(){return o}});var n=t(5893),r=t(7294),i=t(5675),a=t(2058),c=t.n(a),l=function(e,s,t,n,r){return n+(e-s)*(r-n)/(t-s)},o=function(){var e=(0,r.useRef)(null),s=(0,r.useState)({}),t=s[0],a=s[1],o=(0,r.useCallback)((function(s){if(e.current){var t=s.offsetX,n=s.offsetY,r={y:l(t,0,180,-25,25),x:l(n,0,250,25,-25)},i=l(n,0,250,1.5,.5);a({transform:"rotateX(".concat(r.x,"deg) rotateY(").concat(r.y,"deg)"),filter:"brightness(".concat(i,")")})}}),[]),d=(0,r.useCallback)((function(){a({transform:"rotateX(0deg) rotateY(0deg)",filter:"brightness(1)"})}),[]);return(0,r.useEffect)((function(){var s=e.current;if(s)return s.addEventListener("mousemove",o),s.addEventListener("mouseleave",d),function(){s&&(s.removeEventListener("mousemove",o),s.removeEventListener("mouseleave",d))}}),[d,o]),(0,n.jsx)(r.Fragment,{children:(0,n.jsx)("div",{className:c().card,ref:e,children:(0,n.jsx)("div",{className:c().effect,style:t,children:(0,n.jsx)(i.default,{src:"/assets/me.png",alt:"Look like this!",width:256,height:384})})})})}},9087:function(e,s,t){"use strict";t.r(s);var n=t(5893),r=t(9227),i=t(7294),a=t(670),c=t(9297),l=t(4037);s.default=function(){return(0,n.jsx)(a.A,{active:"hi",children:(0,n.jsxs)("div",{className:"flex justify-center pt-12 mx-24",children:[(0,n.jsx)(c.M,{}),(0,n.jsx)("div",{className:"w-16 h-16"}),(0,n.jsxs)("div",{className:"w-3/5",children:[(0,n.jsx)("h2",{className:"mb-4 text-2xl leading-9 tracking-wide uppercase font-display",children:"Having something to share? \ud83d\udc40"}),(0,n.jsx)("div",{children:"or want to have a chit chat, just drop me a message."}),(0,n.jsx)("div",{className:"h-12"}),(0,n.jsx)("div",{style:{transform:"rotate(-4deg)"},className:"mb-6",children:"email \u2709\ufe0f"}),(0,n.jsx)("a",{href:"mailto:monodylh@gmail.com",className:"text-2xl leading-9 tracking-wide uppercase font-display rainbown",children:l.vc.email}),(0,n.jsx)("div",{className:"h-12"}),(0,n.jsx)("div",{style:{transform:"rotate(2.5deg)"},children:"social network \ud83e\udd16"}),(0,n.jsx)("div",{className:"flex -mt-3",children:Object.entries(l.UY).map((function(e){var s=(0,r.Z)(e,2),t=s[0],a=s[1];return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("a",{href:a,target:"_blank",className:"text-2xl leading-9 tracking-wide uppercase font-display rainbown",rel:"noreferrer",children:t}),(0,n.jsx)("div",{className:"w-12"})]},t)}))})]})]})})}},1265:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hi",function(){return t(9087)}])},9122:function(e){e.exports={cursor:"cursor_cursor__1ID5l",circle:"cursor_circle__2aR4h",hide:"cursor_hide__17TGI",icon:"cursor_icon__2mcpm",wave:"cursor_wave__1Tlmd"}},7763:function(e){e.exports={ground:"footer_ground__1pqdn","bg-forward":"footer_bg-forward__1Dhh4",cloud:"footer_cloud__3tOqq",sun:"footer_sun__2XIP1",me:"footer_me__3LF9e"}},2058:function(e){e.exports={card:"look-like_card__1AlCD",effect:"look-like_effect__3mRdD"}}},function(e){e.O(0,[441,604,774,888,179],(function(){return s=1265,e(e.s=s);var s}));var s=e.O();_N_E=s}]);