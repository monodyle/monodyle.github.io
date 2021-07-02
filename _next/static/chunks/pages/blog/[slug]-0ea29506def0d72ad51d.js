(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{3359:function(e,t,n){"use strict";var r=n(4575),i=n(3913),a=n(2205),l=n(8585),s=n(9754);function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}var c=n(5318);t.__esModule=!0,t.default=void 0;var u=c(n(7294)),d=c(n(2775)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){a(n,e);var t=o(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:m.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:m.h1},e):null,u.default.createElement("div",{style:m.desc},u.default.createElement("h2",{style:m.h2},this.props.title||e?t:u.default.createElement(u.default.Fragment,null,"Application error: a client-side exception has occurred (",u.default.createElement("a",{href:"https://nextjs.org/docs/messages/client-side-exception-occurred"},"developer guidance"),")"),"."))))}}]),n}(u.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},2748:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return m}});var r=n(5893),i=n(1163),a=n(2918),l=n(9008),s=n(670),o=n(6123),c=n(1664),u=n(9643),d=n(7455),f=n.n(d),p=function(e){var t=e.post;return(0,r.jsxs)("article",{className:f().article,children:[(0,r.jsx)("div",{className:"mb-6 font-bold",children:(0,r.jsx)(c.default,{href:"/blog",children:(0,r.jsx)("a",{className:"rainbown",children:"< Back"})})}),t.image&&(0,r.jsx)("div",{className:f().hero,children:(0,r.jsx)("img",{src:t.image,alt:t.title,title:t.title})}),(0,r.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,r.jsx)("span",{className:f().time,children:u.Z.getDateString(t.date)}),t.tags&&(0,r.jsx)("div",{className:"flex",children:t.tags.map((function(e,t){return(0,r.jsx)("span",{className:f().tag,children:e},t)}))})]}),(0,r.jsx)("h2",{className:f().title,children:t.title}),(0,r.jsx)("div",{id:"content",className:[f().content,f().markdown].join(" "),dangerouslySetInnerHTML:{__html:t.content}})]})},h=!0,m=function(e){var t=e.post,n=(0,i.useRouter)();return n.isFallback||null!==t&&void 0!==t&&t.slug?(0,r.jsxs)(s.A,{active:"blog",children:[(0,r.jsx)(o.Z,{title:t.title,description:t.excerpt,image:t.image,slug:"/blog/".concat(t.slug)}),(0,r.jsx)(l.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossOrigin:"anonymous"})}),n.isFallback?(0,r.jsx)("div",{children:"Loading\u2026"}):(0,r.jsx)(p,{post:t})]}):(0,r.jsx)(a.default,{statusCode:404})}},9643:function(e,t){"use strict";var n=function(e){return new Date(e)},r={getDate:n,getDateString:function(e){return new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short",year:"numeric"}).format(n(e))}};t.Z=r},3214:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(2748)}])},7455:function(e){e.exports={article:"post_article__2w3XN",hero:"post_hero__3BSnJ",title:"post_title__3g4nB",time:"post_time__ih63X",tag:"post_tag__28ZFZ",content:"post_content__1tL7U",markdown:"post_markdown__38t3u",note:"post_note__2Xqna"}},2918:function(e,t,n){e.exports=n(3359)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[670,774,888,179],(function(){return t=3214,e(e.s=t);var t}));var t=e.O();_N_E=t}]);