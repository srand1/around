(this.webpackJsonparound=this.webpackJsonparound||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(12),u=n.n(o),i=(n(18),n(10)),a=n.n(i),s=n(13),b=n(3),d=n(8),j=n(4),O=n(11),f=(n(20),n(1)),l=function(e){return Object(f.jsx)("ul",{className:"AsyncList",children:Object(b.a)(e.jobs).reverse().map((function(e){return Object(f.jsxs)("li",{children:[e.state[0]," | ",e.key]},e.key)}))})},h=n(2),y=function(){var e=Object(h.b)().loginWithRedirect;return Object(f.jsx)("button",{onClick:function(){return e()},children:"Log In"})},g=function(){var e=Object(h.b)().logout;return Object(f.jsx)("button",{onClick:function(){return e({returnTo:window.location.href})},children:"Log Out"})},v=function(e,t){return new Promise((function(n,r){setTimeout((function(){Math.random()<.5?n(e):r("E:"+e)}),t)}))},x=function(){var e=Object(r.useState)({ordered:[],byKey:{}}),t=Object(O.a)(e,2),n=t[0],c=t[1],o=function(e,t){return function(e,t,n,r,c){var o=(new Date).toISOString()+" | "+t;return n(o),e.then((function(e){return r(o),e}),(function(e){throw c(o),e}))}(e,t,(function(e){return c((function(t){return{byKey:Object(j.a)(Object(j.a)({},t.byKey),{},Object(d.a)({},e,t.ordered.length)),ordered:[].concat(Object(b.a)(t.ordered),[{key:e,state:"Pending"}])}}))}),(function(e){return c((function(t){var n=Object(b.a)(t.ordered);return n[t.byKey[e]]={key:e,state:"Done"},Object(j.a)(Object(j.a)({},t),{},{ordered:n})}))}),(function(e){return c((function(t){var n=Object(b.a)(t.ordered);return n[t.byKey[e]]={key:e,state:"Err"},Object(j.a)(Object(j.a)({},t),{},{ordered:n})}))}))},u=Object(r.useState)([]),i=Object(O.a)(u,2),x=i[0],p=i[1],k=Object(h.b)(),m=k.user,w=k.isAuthenticated,C=k.isLoading,E=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(v("a",2e3),"valueErrInMs");case 2:t=e.sent,p((function(e){return[].concat(Object(b.a)(e),[t+e.length])}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)(l,{jobs:n.ordered}),Object(f.jsx)("button",{onClick:E,children:"X"}),Object(f.jsx)(y,{}),C?"loading":w?m.email:"unAuth",Object(f.jsx)(g,{}),Object(f.jsx)("p",{children:x.join(" | ")})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),o(e),u(e)}))};u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(h.a,{domain:"dev-9vl71yeh.us.auth0.com",clientId:"pwqZUxVbMEoEOlJO7O3A7ZNR9dhmD2Xk",redirectUri:window.location.href,children:Object(f.jsx)(x,{})})}),document.getElementById("root")),p()}},[[29,1,2]]]);
//# sourceMappingURL=main.d6ac5346.chunk.js.map