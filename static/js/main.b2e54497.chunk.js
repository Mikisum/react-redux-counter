(this["webpackJsonpreact-counter"]=this["webpackJsonpreact-counter"]||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"increment",(function(){return O})),n.d(r,"decrement",(function(){return E})),n.d(r,"reset",(function(){return x})),n.d(r,"fetchBackground",(function(){return g})),n.d(r,"requestBackground",(function(){return v})),n.d(r,"requestBackgroundFailed",(function(){return k})),n.d(r,"requestBackgroundSuccess",(function(){return m})),n.d(r,"enableButtons",(function(){return y})),n.d(r,"disableButtons",(function(){return N}));var c=n(4),u=(n(2),n(10)),o=n.n(u),a=(n(26),n(12)),s="INCREMENT",i="DECREMENT",d="RESET",l="FETCH_BACKGROUND",b="REQUEST_BACKGROUND",p="REQUEST_BACKGROUND_SUCCEEDED",j="REQUEST_BACKGROUND_FAILED",f="ENABLE_BUTTONS",h="DISABLE_BUTTONS";function O(){return{type:s}}function E(){return{type:i}}function x(){return function(e){e(N()),setTimeout((function(){e({type:d}),e(y())}),1e3)}}function g(){return{type:l}}function v(){return{type:b}}function k(){return{type:j}}function m(e){return{type:p,url:e}}function y(){return{type:f}}function N(){return{type:h}}var R=Object(a.b)((function(e){return console.log(e),{counter:e.counterReducer,disabled:e.buttonsReducer,url:e.backgroundReducer.url,loading:e.backgroundReducer.loading,error:e.backgroundReducer.error}}),r)((function(e){var t=e.counter,n=e.disabled,r=e.increment,u=e.decrement,o=e.reset,a=e.url,s=e.fetchBackground,i=e.loading,d=e.error;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"bg",style:{backgroundImage:"url(".concat(a,")")}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("h2",{className:"title",children:["\u0441\u0447\u0435\u0442\u0447\u0438\u043a: ",t,Object(c.jsx)("span",{id:"counter"})]}),Object(c.jsxs)("div",{className:"group-buttons",children:[Object(c.jsx)("button",{disabled:n,onClick:r,children:Object(c.jsxs)("span",{children:["+ (",t+1,")"]})}),Object(c.jsx)("button",{disabled:n,onClick:u,children:Object(c.jsxs)("span",{children:["- (",t-1,")"]})}),Object(c.jsx)("button",{disabled:n,onClick:o,children:Object(c.jsx)("span",{children:"\u0441\u0431\u0440\u043e\u0441"})}),Object(c.jsx)("button",{style:{width:"170px"},disabled:n,onClick:s,children:i?Object(c.jsx)("span",{className:"loading"}):d?Object(c.jsx)("span",{children:"Error"}):Object(c.jsx)("span",{children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c  \u0444\u043e\u043d"})})]})]})]})})),_=n(6);var B={url:"https://via.placeholder.com/600/a19891",loading:!1,error:!1};var T=Object(_.c)({counterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return t.type===s?e+1:t.type===i?e-1:t.type===d?0:e},buttonsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return!1;case h:return!0;default:return e}},backgroundReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{url:"",loading:!0,error:!1};case p:return{url:t.url,loading:!1,error:!1};case j:return{url:"",loading:!1,error:!0};default:return e}}}),w=n(18),C=n(20),D=n(19),S=n(8),U=n.n(S),A=n(9),I=U.a.mark(G),L=U.a.mark(K);function G(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.c)(l,K);case 2:case"end":return e.stop()}}),I)}function K(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(A.b)(v());case 3:return t.next=5,Object(A.a)(M);case 5:return e=t.sent,t.next=8,Object(A.b)(m(e));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(A.b)(k);case 14:case"end":return t.stop()}}),L,null,[[0,10]])}function M(){return X.apply(this,arguments)}function X(){return(X=Object(D.a)(U.a.mark((function e(){var t,n,r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.ceil(100*Math.random()),n="https://jsonplaceholder.typicode.com/photos/".concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c.url);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=Object(C.a)(),F=Object(_.e)(T,Object(_.d)(Object(_.a)(w.a,q),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));q.run(G),o.a.render(Object(c.jsx)(a.a,{store:F,children:Object(c.jsx)(R,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b2e54497.chunk.js.map