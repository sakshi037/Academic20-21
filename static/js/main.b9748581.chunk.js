(this["webpackJsonplive-result"]=this["webpackJsonplive-result"]||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),o=t.n(c),s=(t(95),t(21)),i=t.n(s),l=t(27),u=t(17),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){if("serviceWorker"in navigator){if(new URL("/Academic20-24",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/Academic20-24","/service-worker.js");d?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("update available, waiting for refresh")}))):f(a,e)}))}}function f(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=t(72),j=t(39),p=t(14);function g(){return new Worker(t.p+"static/js/index.worker.1ab70259.worker.js")}var m=t(159),v=t(169),x=t(160),O=t(174),k=t(154),w=t(157),y=t(5),C=Object(k.a)((function(e){return{root:{width:"100%",position:"fixed"}}}));function E(){var e=C();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(w.a,{color:"secondary"})})}var S=t(172),N=t(171),M=t(173),T=t(168),I=t(76),W=t.n(I),D=t(77),A=t.n(D),L=[{value:"Choose",label:"Choose"},{value:"C S",label:"CSE"},{value:"CS(AIML)",label:"CS(AIML)"},{value:"ECE",label:"ECE"},{value:"EE",label:"EE"},{value:"CE",label:"CE"},{value:"ME",label:"ME"},{value:"ME(MANUF.)",label:"ME(MANUF.)"},{value:"BT",label:"BT"}],P=["dat/B. TECH. I SEM DEC 2020(COVID 19).xlsx","dat/B. TECH. II SEM JUNE 2021 (COVID 19).xlsx"],B=t(162),R=t(166),U=t(165),J=t(161),z=t(163),F=t(164),H=t(73),q=t.n(H),V=t(60),G=t.n(V),K=t(74),Z=t.n(K),$=t(53);$.a.register.apply($.a,Object(p.a)($.b));var _=function(e){var a=e.data,t=e.darkMode,n=r.a.createRef(),c=r.a.useRef();return r.a.useEffect((function(){if(void 0!==c.current){var e=c.current.options;t?(e.plugins.legend.labels.color="rgba(255, 255, 255, 0.8)",e.scales.x.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.y.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.x.grid.color="rgba(255, 255, 255, 0.2)",e.scales.y.grid.color="rgba(255, 255, 255, 0.2)",c.current.update()):(e.plugins.legend.labels.color="rgba(0, 0, 0, 0.8)",e.scales.x.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.y.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.x.grid.color="rgba(0, 0, 0, 0.2)",e.scales.y.grid.color="rgba(0, 0, 0, 0.2)",c.current.update())}}),[t]),r.a.useEffect((function(){if(void 0!==c.current){var e=a.map((function(e){return e.sem})),t=a.map((function(e){return e.percentage}));e.pop(),t.pop();var n=Object(p.a)(Array(a.length)).fill(a[a.length-1].percentage);c.current.data.labels=e,c.current.data.datasets[0].data=t,c.current.data.datasets[1].data=n,c.current.update()}}),[a]),r.a.useEffect((function(){var e=a.map((function(e){return e.sem})),r=a.map((function(e){return e.percentage}));e.pop(),r.pop();var o=Object(p.a)(Array(a.length)).fill(a[a.length-1].percentage);c.current=new $.a(n.current.getContext("2d"),{type:"line",data:{labels:e,datasets:[{label:"% in each sem",data:r,backgroundColor:["rgba(255, 99, 132, 0.3)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],fill:{target:"origin"},borderWidth:2,cubicInterpolationMode:"default",tension:.3},{label:"Total %",data:o,backgroundColor:["rgba(54, 162, 235, 0.3)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:2}]},options:{plugins:{legend:{display:!0,labels:{color:t?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"}}},scales:{x:{ticks:{color:t?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:t?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}},y:{min:0,beginAtZero:!0,ticks:{color:t?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:t?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}}}}})}),[]),Object(y.jsx)("div",{style:{marginTop:"35px"},children:Object(y.jsx)("canvas",{ref:n})})},Q=function(e){var a=e.name,t=e.data,n=e.load,r=e.reset,c=e.darkMode,o=e.savedLoad,s=e.handleFav,i=e.favDel,l=e.back;return Object(y.jsxs)(m.a,{maxWidth:"md",children:[Object(y.jsx)(x.a,{variant:"contained",color:"primary",style:{marginTop:6},startIcon:Object(y.jsx)(q.a,{}),onClick:function(){l(),r()},size:"small",children:"Home"}),"No"===o?Object(y.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)(G.a,{}),onClick:s,disabled:n,size:"small",children:"Save"}):Object(y.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)(Z.a,{}),onClick:function(){return i(o)},disabled:n,size:"small",children:"Del"}),Object(y.jsxs)("h2",{style:{marginTop:6},children:[" Hello ",a]}),Object(y.jsx)(J.a,{component:m.a,children:Object(y.jsxs)(B.a,{size:"small",children:[Object(y.jsx)(z.a,{children:Object(y.jsxs)(F.a,{children:[Object(y.jsx)(U.a,{align:"center",children:Object(y.jsx)("b",{children:"Sem"})}),Object(y.jsx)(U.a,{align:"center",children:Object(y.jsx)("b",{children:"Marks"})}),Object(y.jsx)(U.a,{align:"center",children:Object(y.jsx)("b",{children:"Percentage"})})]})}),Object(y.jsx)(R.a,{children:t.map((function(e,a){return Object(y.jsxs)(F.a,{children:[Object(y.jsx)(U.a,{component:"th",scope:"row",align:"center",children:e.sem}),Object(y.jsx)(U.a,{align:"center",children:e.marks}),Object(y.jsxs)(U.a,{align:"center",children:[e.percentage,"%"]})]},a)}))})]})}),Object(y.jsx)(_,{data:t,darkMode:c})]})},X=t(176),Y=t(175),ee=function(e){var a=e.saved,t=e.favShow,n=e.favDel;return Object(y.jsxs)("div",{children:[Object(y.jsx)(Y.a,{avatar:Object(y.jsx)(G.a,{}),label:"Saved :"}),Object(y.jsx)("ul",{children:0===a.length?"None, try saving for faster visits! (\xb0\u25bd\xb0)":a.map((function(e,a){return Object(y.jsx)("li",{children:Object(y.jsx)(Y.a,{avatar:Object(y.jsx)(X.a,{children:e.name[0]}),label:e.name,variant:"outlined",style:{marginBottom:8},onClick:function(){return t(a)},onDelete:function(){return n(a)}})},a)}))})]})},ae=function(e,a){var t=r.a.useState((function(){var t=window.localStorage.getItem(a);return null!==t?JSON.parse(t):e})),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.useEffect((function(){window.localStorage.setItem(a,JSON.stringify(c))}),[a,c]),[c,o]},te=t(20),ne=t(79),re=t(167),ce=Object(k.a)((function(e){return{beg:{marginTop:e.spacing(8),paddingTop:e.spacing(2)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3)}}})),oe=function(e){var a=e.darkMode,t=e.setDarkMode,n=e.update,c=r.a.useState([]),o=Object(u.a)(c,2),s=o[0],d=o[1],b=r.a.useState(!0),f=Object(u.a)(b,2),h=f[0],k=f[1],w=r.a.useState(!1),C=Object(u.a)(w,2),I=C[0],D=C[1],B=r.a.useState("Choose"),R=Object(u.a)(B,2),U=R[0],J=R[1],z=r.a.useState("Juniors"),F=Object(u.a)(z,2),H=F[0],q=F[1],V=r.a.useState(!1),G=Object(u.a)(V,2),K=G[0],Z=G[1],$=r.a.useState(!1),_=Object(u.a)($,2),X=_[0],Y=_[1],oe=ae([],"favourite"),se=Object(u.a)(oe,2),ie=se[0],le=se[1],ue=r.a.useState("No"),de=Object(u.a)(ue,2),be=de[0],fe=de[1],he=r.a.useRef([]),je=r.a.useRef(null),pe=r.a.useRef(new Promise((function(e){return je.current=e}))),ge=r.a.useRef(["","Choose"]),me=Object(te.d)(),ve=Object(te.e)(),xe=ce(),Oe=Object(ne.a)({palette:{type:a?"dark":"light"}}),ke=function(){var e=Object(l.a)(i.a.mark((function e(a){var t,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,a.preventDefault(),fe("No"),e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),fe(t=a);case 9:if(e.prev=9,"Choose"!==ge.current[1]){e.next=12;break}return e.abrupt("return");case 12:return Y(!0),d([]),k(!0),n=ge.current[0].toLowerCase(),r=0,c=0,e.next=20,pe.current;case 20:return o=new g,he.current.map(function(){var e=Object(l.a)(i.a.mark((function e(a,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.postMessage({name:n,branch:ge.current[1],file:a,command:"run",sem:t+1});case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),o.onmessage=function(){var e=Object(l.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("nf"!==a.data){e.next=11;break}if(r++,c++,3!==r){e.next=9;break}return Y(!1),e.next=7,k(!1);case 7:o.terminate(),setTimeout((function(){k(!0)}),4e3);case 9:e.next=17;break;case 11:return e.next=13,d((function(e){return[].concat(Object(p.a)(e),[a.data[0]])}));case 13:return e.next=15,D(!0);case 15:++c===P.length&&(n={sem:"Total :",marks:"".concat(a.data[1][0]," / ").concat(a.data[1][1]),percentage:(a.data[1][0]/a.data[1][1]*100).toFixed(4)},Y(!1),d((function(e){try{var a=Object(p.a)(ie);a[t].data=[].concat(Object(p.a)(e),[n]),le(a)}catch(r){}return[].concat(Object(p.a)(e),[n])})),o.terminate());case 17:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.finish(9);case 24:case"end":return e.stop()}}),e,null,[[0,5,9,24]])})));return function(a){return e.apply(this,arguments)}}(),we=function(){q(""),J("Choose"),D(!1),ge.current=["","Choose"]},ye=function(e){var a=Object(p.a)(ie);a.splice(e,1),le(a),fe("No")},Ce=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"update"===ie[a].data?(ge.current=[ie[a].name,ie[a].branch],ke(a)):(fe(a),d(ie[a].data),ge.current=[ie[a].name,ie[a].branch],q(ie[a].name),D(!0));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.useEffect((function(){I&&""===me.location.hash&&me.push({hash:"res"})}),[I]),r.a.useEffect((function(){"/local-res/"===ve.pathname&&"#res"!==ve.hash&&we()}),[ve]),r.a.useEffect((function(){if("update"===n&&0!==ie.length){var e=[];ie.map((function(a){var t=Object(j.a)(Object(j.a)({},a),{},{data:"update"});e.push(t)})),le(e)}}),[n]),r.a.useEffect((function(){(function(){var e=Object(l.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(P.map(function(){var e=Object(l.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));case 2:return t=e.sent,e.next=5,Promise.all(t.map(function(){var e=Object(l.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.arrayBuffer(),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));case 5:he.current=e.sent,a();case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}})()(je.current)}),[]),Object(y.jsxs)(re.a,{theme:Oe,children:[Object(y.jsx)(S.a,{control:Object(y.jsx)(N.a,{checked:a,onChange:function(){return t(!a)}}),label:"Dark Mode",color:"primary",style:{position:"absolute",right:0}}),Object(y.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:""!==n,children:Object(y.jsx)(T.a,{message:"".concat("fInstall"===n?"Now available for offline usage, can install/add to home screen from browser drawer.":"Update available, refresh page for updated content, can install/add to home screen from browser drawer.")})}),X&&Object(y.jsx)(E,{}),I?Object(y.jsx)(Q,{name:ge.current[0],data:s,load:X,reset:we,darkMode:a,savedLoad:be,handleFav:function(){var e={name:ge.current[0],branch:ge.current[1],data:s};le((function(a){return[].concat(Object(p.a)(a),[e])})),fe(ie.length)},favDel:ye,back:me.goBack}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(m.a,{maxWidth:"sm",children:[Object(y.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!h,children:Object(y.jsx)(T.a,{message:"The entered data didn't matched, please try again !"})}),Object(y.jsxs)("h2",{className:xe.beg,children:[" Hello ",H]}),Object(y.jsx)("p",{children:"This is a Web worker - Reactjs based PWA where anyone from the batch 2020-24 can have a quick reference of their academic performance."}),Object(y.jsxs)("form",{className:xe.form,onSubmit:ke,children:[Object(y.jsx)(v.a,{name:"branch",error:K,select:!0,label:"branch",fullWidth:!0,helperText:K?"please choose correct branch":"please choose your branch",value:U,onChange:function(e){J(e.target.value),ge.current[1]=e.target.value,"Choose"===e.target.value?Z(!0):Z(!1)},children:L.map((function(e){return Object(y.jsx)(O.a,{value:e.value,children:e.label},e.value)}))}),"Choose"!==U&&Object(y.jsx)(v.a,{style:{marginTop:"10px"},type:"CE"===U?"number":"text",required:!0,fullWidth:!0,name:"name",inputProps:"CE"===U?{min:"180500"}:{minLength:"2"},label:"CE"===U?"College-ID":"Name",helperText:"CE"===U?"Please enter your College-ID":"Please enter your full name",onInput:function(e){q(e.target.value),ge.current[0]=e.target.value}}),Object(y.jsx)("center",{children:Object(y.jsx)(x.a,{className:xe.submit,type:"submit",variant:"contained",color:"primary",disabled:X,startIcon:Object(y.jsx)(W.a,{}),children:X?"loading...":"Submit"})})]}),Object(y.jsx)(ee,{saved:ie,favShow:Ce,favDel:ye})]})}),Object(y.jsx)("a",{href:"https://forms.gle/mptg9KrGss3rgtPp7",className:"anomaly",target:"_blank",children:Object(y.jsx)(A.a,{})})]})},se=t(78),ie=function(){return Object(y.jsxs)("div",{className:"footer",children:["Tried making with care (\xb4\u25e1`), by : "," ",Object(y.jsx)("a",{className:"nav-link",href:"https://github.com/jatinsajwan3841",children:"Jatin"}),Object(y.jsx)("br",{}),"Contribution by "," ",Object(y.jsx)("a",{className:"nav-link",href:"https://github.com/sakshi037",children:"Sakshi Shankar"})," ",Object(y.jsx)("a",{className:"nav-link",href:"https://github.com/abhisheksingh7455",children:"Abhishek Singh"})]})},le=t(66),ue=(t(108),function(){var e=ae(!1,"darkMode"),a=Object(u.a)(e,2),t=a[0],n=a[1],c=r.a.useState(""),o=Object(u.a)(c,2),s=o[0],d=o[1],f=Object(h.a)();return r.a.useEffect((function(){b({onSuccess:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("fInstall");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onUpdate:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("update");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})}),[]),Object(y.jsxs)("div",{className:"main-container ".concat(t&&"dark"),style:{minHeight:f},children:[Object(y.jsx)("div",{className:"home",children:Object(y.jsx)(le.a,{children:Object(y.jsx)(oe,{darkMode:t,setDarkMode:n,update:s})})}),Object(y.jsx)(se.a,{type:"square",num:"20"}),Object(y.jsx)(ie,{})]})});o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(ue,{})}),document.getElementById("root"))},95:function(e,a,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.b9748581.chunk.js.map