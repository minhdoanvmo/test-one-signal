(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),o=n(6),a=n.n(o),s=(n(13),n.p+"static/media/logo.6ce24c58.svg"),l=n(8),u=n(3),d=n(1),r=Object(i.createContext)(void 0),b=function(e){var t=e.children,n=Object(i.useState)(!1),c=Object(u.a)(n,2),o=c[0],a=c[1],s=Object(i.useState)(!1),b=Object(u.a)(s,2),j=b[0],f=b[1],g=Object(i.useState)([]),O=Object(u.a)(g,2),p=O[0],h=O[1],v=Object(i.useState)(0),m=Object(u.a)(v,2),w=m[0],S=m[1];window.OneSignal=window.OneSignal||[];var x=window.OneSignal;Object(i.useEffect)((function(){localStorage.getItem("TOKEN")&&a(!0)}),[]);var C=Object(i.useCallback)((function(){localStorage.setItem("TOKEN","123456"),a(!0)}),[]);Object(i.useEffect)((function(){j||(x.push((function(){x.init&&(x.init({appId:"105fb738-a5db-4037-a6b7-07fcc7cbdfb8",safari_web_id:"web.onesignal.auto.3437296f-1581-4c9c-99a7-ef947df2b18c",allowLocalhostAsSecureOrigin:!1,autoResubscribe:!0}).finally((function(){f(!0)})),x.showSlidedownPrompt())})),f(!0))}),[x,j]);var I=Object(i.useCallback)((function(e){var t;e&&!(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.__isOneSignalWelcomeNotification)&&(console.log(e),h((function(t){return t.find((function(t){return t.id===e.id}))?t:[{id:e.id,title:e.heading,detail:e.content,isRead:!1,date:new Date}].concat(Object(l.a)(t))})),S((function(e){return e+1})))}),[]),L=Object(i.useCallback)((function(e){console.log("userId: ",e)}),[]);Object(i.useEffect)((function(){o&&j&&x.push((function(){x.showNativePrompt(),x.setSubscription(!0),x.getUserId(L),x.on("subscriptionChange",(function(e){e&&x.getUserId(L)})),x.on("notificationDisplay",I)}))}),[o,j,I,L]);var N=Object(i.useMemo)((function(){return{initialized:j,notifications:p,numberUnread:w,isLogging:o,handleLogin:C}}),[j,p,w,o,C]);return Object(d.jsx)(r.Provider,{value:N,children:t})},j=n(7),f=n.n(j),g=function(){return Object(d.jsx)("div",{className:"Facebook-messenger",children:Object(d.jsx)(f.a,{pageId:"771400903577002",appId:"810978546253814"})})},O=(n(19),function(){var e,t=Object(i.useContext)(r);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),!(null===t||void 0===t?void 0:t.isLogging)&&Object(d.jsx)("button",{onClick:null===t||void 0===t?void 0:t.handleLogin,children:"Login"}),Object(d.jsx)("div",{children:null===t||void 0===t||null===(e=t.notifications)||void 0===e?void 0:e.map((function(e){return Object(d.jsxs)("p",{style:{color:"white"},children:[e.date.toString()," - ",e.detail]},e.id)}))})]}),Object(d.jsx)(g,{})]})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(O,{})})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.90043afb.chunk.js.map