(this.webpackJsonparound=this.webpackJsonparound||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(13),u=n.n(o),a=(n(18),n(6)),i=n.n(a),s=n(11),d=n(3),b=n(9),j=n(4),h=n(12),f=(n(20),n(1)),l=function(e){return Object(f.jsx)("ul",{className:"AsyncList",children:Object(d.a)(e.jobs).reverse().map((function(e){return Object(f.jsxs)("li",{children:[e.state[0]," | ",e.key]},e.key)}))})},O=n(2),p=function(){var e=Object(O.b)().loginWithRedirect;return Object(f.jsx)("button",{onClick:function(){return e()},children:"Log In"})},v=function(){var e=Object(O.b)().logout;return Object(f.jsx)("button",{onClick:function(){return e({returnTo:window.location.href})},children:"Log Out"})},y=function(e,t){return new Promise((function(n,r){setTimeout((function(){Math.random()<.5?n(e):r("E:"+e)}),t)}))},x=function(){var e=Object(r.useState)({ordered:[],byKey:{}}),t=Object(h.a)(e,2),n=t[0],c=t[1],o=function(e,t){return function(e,t,n,r,c){var o=(new Date).toISOString()+" | "+t;return n(o),e.then((function(e){return r(o),e}),(function(e){throw c(o),e}))}(t,e,(function(e){return c((function(t){return{byKey:Object(j.a)(Object(j.a)({},t.byKey),{},Object(b.a)({},e,t.ordered.length)),ordered:[].concat(Object(d.a)(t.ordered),[{key:e,state:"Pending"}])}}))}),(function(e){return c((function(t){var n=Object(d.a)(t.ordered);return n[t.byKey[e]]={key:e,state:"Done"},Object(j.a)(Object(j.a)({},t),{},{ordered:n})}))}),(function(e){return c((function(t){var n=Object(d.a)(t.ordered);return n[t.byKey[e]]={key:e,state:"Err"},Object(j.a)(Object(j.a)({},t),{},{ordered:n})}))}))},u=Object(r.useState)([]),a=Object(h.a)(u,2),x=a[0],g=a[1],m=Object(O.b)(),k=m.isLoading,w=m.isAuthenticated,A=m.user,C=m.getAccessTokenSilently,S=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("valueErrInMs",y("a",2e3));case 2:t=e.sent,g((function(e){return[].concat(Object(d.a)(e),[t+e.length])}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,r,c,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://".concat(t="dev-9vl71yeh.us.auth0.com","/api/v2/users/").concat(A.sub),e.next=4,o("getAT",C({audience:"https://".concat(t,"/api/v2/"),scope:"read:current_user"}));case 4:return r=e.sent,e.next=7,o("f$user",fetch(n,{headers:{Authorization:"Bearer ".concat(r)}}));case 7:return c=e.sent,e.next=10,o("j$user",c.json());case 10:u=e.sent,a=u.user_metadata,console.log(a);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)(l,{jobs:n.ordered}),Object(f.jsx)("button",{onClick:S,children:"X"}),Object(f.jsx)(p,{}),k?"loading":w?Object(f.jsx)("button",{onClick:E,children:A.email}):"unAuth",Object(f.jsx)(v,{}),Object(f.jsx)("p",{children:x.join(" | ")})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),o(e),u(e)}))};u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O.a,{domain:"dev-9vl71yeh.us.auth0.com",clientId:"pwqZUxVbMEoEOlJO7O3A7ZNR9dhmD2Xk",redirectUri:window.location.href,audience:"https://dev-9vl71yeh.us.auth0.com/api/v2/",scope:"read:current_user",children:Object(f.jsx)(x,{})})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.a7cb6bda.chunk.js.map