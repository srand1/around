(this.webpackJsonparound=this.webpackJsonparound||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(10),u=n.n(o),a=(n(16),n(8)),i=n.n(a),s=n(11),b=n(2),j=n(6),d=n(3),f=n(9),O=(n(18),n(0)),h=function(e){return Object(O.jsx)("ul",{className:"AsyncList",children:Object(b.a)(e.jobs).reverse().map((function(e){return Object(O.jsxs)("li",{children:[e.state[0]," | ",e.key]},e.key)}))})},y=function(e,t){return new Promise((function(n,r){setTimeout((function(){Math.random()<.5?n(e):r("E:"+e)}),t)}))},l=function(){var e=Object(r.useState)({ordered:[],byKey:{}}),t=Object(f.a)(e,2),n=t[0],c=t[1],o=function(e,t){return function(e,t,n,r,c){var o=(new Date).toISOString()+" | "+t;return n(o),e.then((function(e){return r(o),e}),(function(e){throw c(o),e}))}(e,t,(function(e){return c((function(t){return{byKey:Object(d.a)(Object(d.a)({},t.byKey),{},Object(j.a)({},e,t.ordered.length)),ordered:[].concat(Object(b.a)(t.ordered),[{key:e,state:"Pending"}])}}))}),(function(e){return c((function(t){var n=Object(b.a)(t.ordered);return n[t.byKey[e]]={key:e,state:"Done"},Object(d.a)(Object(d.a)({},t),{},{ordered:n})}))}),(function(e){return c((function(t){var n=Object(b.a)(t.ordered);return n[t.byKey[e]]={key:e,state:"Err"},Object(d.a)(Object(d.a)({},t),{},{ordered:n})}))}))},u=Object(r.useState)([]),a=Object(f.a)(u,2),l=a[0],p=a[1],v=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(y("a",2e3),"valueErrInMs");case 2:t=e.sent,p((function(e){return[].concat(Object(b.a)(e),[t+e.length])}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(h,{jobs:n.ordered}),Object(O.jsx)("button",{onClick:v,children:"X"}),Object(O.jsx)("p",{children:l.join(" | ")})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),o(e),u(e)}))};u.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(l,{})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.cfef9863.chunk.js.map