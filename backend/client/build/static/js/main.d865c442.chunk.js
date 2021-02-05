(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{177:function(e,t,c){},316:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),i=c.n(s),a=c(79),r=c.n(a),o=(c(177),function(e){return Object(n.jsx)("div",{className:"nav-group",children:e.children})}),l=function(e){return Object(n.jsx)("div",{className:"nav-bar",children:e.children})},j=function(e){return Object(n.jsx)("div",{className:"nav-item",children:Object(n.jsx)("h2",{children:e.children})})},u=function(e){return Object(n.jsx)("div",{className:"nav-logo",children:Object(n.jsx)("h1",{children:e.children})})},b=c(44),h=c(17),d=c(13),O=function(e){return Object(n.jsx)("div",{className:"page",children:e.children})},f=function(e){return Object(n.jsx)("div",{className:"col "+e.className,children:e.children})},x=function(e){return Object(n.jsx)("div",{className:"row "+e.className,children:e.children})},p=function(e){return Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{children:e.children})})},m=function(e){return Object(n.jsx)("th",{className:"table-head "+e.className,children:e.children})},g=function(e){return Object(n.jsx)("td",{name:e.name,onClick:e.onClick,id:e.id,className:"table-item "+e.className,children:e.children})},v=function(e){return Object(n.jsx)("tr",{onClick:e.onClick,id:e.id,className:"table-row "+e.className,children:e.children})},w=function(e){if("undefined"!==typeof e&&e.length>0)return e[0].toUpperCase()+e.substr(1)},y=window.location.hostname,N="ws://".concat(y,"/live"),k="#93a1a1",S="#eee8d5",C="#d33682",E=function(e){var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())},D=c(322),q=c(166),T=c(321),M=c(85),A=c(158),U=c(159),H=function(e){var t=e.payload,c=e.label,s=e.active,i=e.unit;return s&&null!==t&&"undefined"!==typeof t&&t.length>0?Object(n.jsxs)("div",{className:"tool-tip",children:[Object(n.jsx)("p",{children:"".concat(t[0].value," ").concat(i)}),Object(n.jsx)("p",{children:E(c)})]}):Object(n.jsx)("p",{children:"placeholder"})},J=function(e){var t=Object(s.useState)(960),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)(540),o=Object(d.a)(r,2),l=o[0],j=o[1],u=e.unit;return Object(s.useEffect)((function(){window.innerWidth<1e3&&(a(640),j(360)),window.innerWidth<400&&(a(256),j(144))})),Object(n.jsxs)("div",{className:"chart",children:[Object(n.jsx)("h2",{children:e.topic}),Object(n.jsxs)(D.a,{width:i,height:l,data:e.data,margin:{top:15,bottom:15,left:15,right:15},children:[Object(n.jsx)(q.a,{type:"linear",dataKey:"message",dot:!1,stroke:C,strokeWidth:1.75}),Object(n.jsx)(T.a,{stroke:k}),Object(n.jsx)(M.a,{content:Object(n.jsx)(H,{}),unit:u}),Object(n.jsx)(A.a,{dataKey:"createdAt",scale:"time",type:"number",domain:["dataMin","dataMax"],interval:"preserveStartEnd",tickFormatter:function(e){return function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getHours(),":").concat(t.getMinutes())}(e)},label:{value:"Time (Date/HH:mm)",position:"insideBottom",offset:-8,fill:k},stroke:S,height:42,allowDataOverflow:!1}),Object(n.jsx)(U.a,{label:{value:"".concat(e.label," (").concat(e.unit,")"),position:"insideLeft",angle:-90,fill:k},stroke:S,dataKey:"message",type:"number",interval:0})]})]})},W=function(e){var t=e.data.reverse().map((function(t,c){var s=function(e){var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())}(t.createdAt);return Object(n.jsxs)(v,{children:[Object(n.jsx)(g,{children:e.data.length-c}),Object(n.jsx)(g,{children:t.message}),Object(n.jsx)(g,{children:s})]},c)}));return Object(n.jsxs)(p,{children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(m,{children:"Index"}),Object(n.jsx)(m,{children:"".concat(e.label," (").concat(e.unit,")")}),Object(n.jsx)(m,{children:"Time"})]}),t]})},F=function(e){var t=e.topics.map((function(e,t){return Object(n.jsx)(v,{children:Object(n.jsx)(g,{children:Object(n.jsx)(b.b,{to:e.routeUrl,children:e.topic})})},t)}));return Object(n.jsxs)(p,{children:[Object(n.jsx)(v,{children:Object(n.jsx)(m,{children:"Topics"})}),t]})},L=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1],r=w(e.topic.split("/")[e.topic.split("/").length-2]),o=e.topic.split("/")[e.topic.split("/").length-1];return Object(s.useEffect)((function(){fetch("/mqtt/m?topic="+e.topic).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)e[t].message=parseFloat(e[t].message),e[t].createdAt=Date.parse(e[t].createdAt);a(e)}))}),[e.topic]),Object(n.jsxs)(f,{children:[Object(n.jsx)(J,{topic:e.topic,unit:o,label:r,data:i}),Object(n.jsx)(W,{data:i,unit:o,label:r})]})},K=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1];Object(s.useEffect)((function(){fetch("/mqtt/t").then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)e[t].routeUrl="/t/"+e[t].topic.replaceAll("/","_").replaceAll("%","-");a(e)}))}),[]);var r=i.map((function(e,t){return Object(n.jsx)(h.a,{exact:!0,path:e.routeUrl,children:Object(n.jsx)(L,{topic:e.topic})},t)}));return Object(n.jsx)(O,{children:Object(n.jsxs)(f,{children:[Object(n.jsx)(x,{children:Object(n.jsx)(F,{routeUrl:"/t/",topics:i})}),Object(n.jsx)(x,{children:Object(n.jsx)(h.c,{children:r})})]})})},P=c(161),Q=c(162),B=c(167),I=c(164),G=function(e){return Object(n.jsx)("form",{onSubmit:e.onSubmit,children:e.children})},R=function(e){return Object(n.jsxs)("div",{className:"form-label",children:[Object(n.jsx)("label",{children:e.children}),Object(n.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange,type:e.type})]})},Y=function(e){return Object(n.jsx)("input",{className:"form-button",type:"submit",value:e.label})},_=c(66),z=c.n(_),V=function(e){return Object(n.jsxs)("label",{className:"switch "+e.className,children:[Object(n.jsx)("input",{type:"checkbox",onClick:e.onClick}),Object(n.jsx)("span",{className:"slider"})]})},X=function(e){return Object(n.jsxs)(G,{onSubmit:e.onSubmit,children:[Object(n.jsx)("h3",{children:"Subscribe"}),Object(n.jsx)(R,{type:"text",onChange:e.onChange,name:"sub",children:"Topic"}),Object(n.jsx)(R,{type:"text",onChange:e.onChange,placeholder:0,name:"qos",children:"QoS"}),Object(n.jsx)(Y,{label:"Subscribe"})]})},Z=function(e){var t=Object(s.useState)(!1),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)([]),o=Object(d.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1],w=Object(s.useState)(0),y=Object(d.a)(w,2),N=y[0],k=y[1],S=Object(s.useState)(!1),C=Object(d.a)(S,2),E=C[0],D=C[1];Object(s.useEffect)((function(){fetch("/mqtt/s").then((function(e){return e.json()})).then((function(e){j(e)}))}),[E]);var q=function(e){if(i){var t={method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:z.a.stringify({topic:e.target.id})};fetch("/mqtt/s",t).then((function(e){if(e.ok)return e;throw new Error(e.status)})).then((function(){return D(!E)})).catch((function(e){return console.log(e)}))}},T=l.map((function(e,t){return Object(n.jsxs)(v,{children:[Object(n.jsx)(g,{children:e.topic}),Object(n.jsx)(g,{children:e.qos}),Object(n.jsx)(g,{children:Object(n.jsx)("i",{onClick:q,name:e.topic,id:e.topic,className:"fas fa-times "+(i&&"link")})})]},t)}));return Object(n.jsxs)(f,{children:[Object(n.jsx)(X,{onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:z.a.stringify({topic:h,qos:N})};fetch("/mqtt/s",t).then((function(e){if(e.ok)return e;throw new Error(e.status)})).then((function(){return D(!E)})).catch((function(e){return console.log(e)}))},onChange:function(e){"sub"===e.target.name&&O(e.target.value),"qos"===e.target.name&&k(e.target.value)}}),Object(n.jsx)(x,{className:"top",children:Object(n.jsxs)(p,{children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(m,{children:"Subscription"}),Object(n.jsx)(m,{children:"QoS"}),Object(n.jsx)(m,{children:Object(n.jsx)(V,{onClick:function(e){a(e.target.checked)},className:"table-toggle"})})]}),T]})})]})},$=c(165),ee=function(e){var t=w(e.topic.split("/")[e.topic.split("/").length-2]),c=e.topic.split("/")[e.topic.split("/").length-1];return Object(n.jsx)(J,{topic:e.topic,unit:c,label:t,data:e.data})},te=function(e){var t=Object(s.useState)(!1),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)([]),o=Object(d.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(s.useState)([]),w=Object(d.a)(x,2),y=w[0],N=w[1],k=function(e){var t=Object(s.useRef)();return Object(s.useEffect)((function(){t.current=e})),t.current}(h);Object(s.useEffect)((function(){e.ws.onmessage=function(e){var t=JSON.parse(e.data);if("newtopic"===t.response&&j(t.payload),"newdata"===t.response){var c=[];h===k&&(c=Object($.a)(y));for(var n=t.payload.messages,s=0;s<n.length;s++)n[s].message=parseFloat(n[s].message),n[s].createdAt=Date.parse(n[s].createdAt),c.push(n[s]);N(c)}}}));var S=function(t){if(i){var c={method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:z.a.stringify({topic:t.target.id})};fetch("/mqtt/t",c).then((function(e){if(e.ok)return e;throw new Error(e.status)})).then((function(){return e.ws.send(JSON.stringify({request:"delete"}))})).catch((function(e){return console.log(e)}))}},C=function(t){O(t.target.id);var c=JSON.stringify({request:"live",payload:{topic:t.target.id}});e.ws.send(c)},E=l.map((function(e,t){return Object(n.jsxs)(v,{children:[Object(n.jsx)(g,{className:"link",onClick:C,id:e.topic,children:e.topic}),Object(n.jsx)(g,{children:Object(n.jsx)("i",{onClick:S,name:e.topic,id:e.topic,className:"fas fa-times "+(i&&"link")})})]},t)}));return Object(n.jsxs)(f,{children:[h&&Object(n.jsx)(ee,{ws:e.ws,topic:h,data:y}),Object(n.jsxs)(p,{children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(m,{children:"Live Graph"}),Object(n.jsx)(m,{children:Object(n.jsx)(V,{onClick:function(e){a(e.target.checked)},className:"table-toggle"})})]}),E]})]})},ce=function(e){return Object(n.jsxs)(G,{onSubmit:e.onSubmit,children:[Object(n.jsx)("h3",{children:"Publish"}),Object(n.jsx)(R,{type:"text",onChange:e.onChange,name:"topic",children:"Topic"}),Object(n.jsx)(R,{type:"text",onChange:e.onChange,name:"message",children:"Message"}),Object(n.jsx)(R,{type:"text",placeholder:0,onChange:e.onChange,name:"qos",children:"QoS"}),Object(n.jsx)(Y,{label:"Publish"})]})},ne=function(e){Object(B.a)(c,e);var t=Object(I.a)(c);function c(){var e;return Object(P.a)(this,c),(e=t.call(this)).ws=new WebSocket(N),e.state={},e}return Object(Q.a)(c,[{key:"componentDidMount",value:function(){this.ws.onopen=function(){console.log("websocket connected")},this.ws.onclose=function(){console.log("websocket closed")}}},{key:"componentWillUnmount",value:function(){this.ws.close()}},{key:"render",value:function(){return Object(n.jsx)(O,{children:Object(n.jsxs)(f,{children:[Object(n.jsx)(x,{children:Object(n.jsx)(te,{ws:this.ws})}),Object(n.jsxs)(x,{className:"top space",children:[Object(n.jsx)(x,{children:Object(n.jsx)(ce,{ws:this.ws})}),Object(n.jsx)(f,{className:"top",children:Object(n.jsx)(Z,{})})]})]})})}}]),c}(i.a.Component),se=function(e){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)(f,{children:Object(n.jsxs)("a",{href:"https://enochchau.com",children:[Object(n.jsx)("div",{children:"Enoch Chau"}),Object(n.jsx)("div",{children:"2021"})]})}),Object(n.jsx)("a",{href:"https://github.com/ec965/mcutie",children:Object(n.jsx)("i",{className:"fab fa-github"})})]})},ie=function(e){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(l,{children:Object(n.jsxs)(o,{children:[Object(n.jsx)(u,{children:Object(n.jsx)(b.b,{to:"/",children:"MCutie"})}),Object(n.jsx)(j,{children:Object(n.jsx)(b.b,{to:"/t",children:Object(n.jsx)("i",{className:"fas fa-chart-line"})})})]})}),Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/t",children:Object(n.jsx)(K,{})}),Object(n.jsx)(h.a,{path:"/",children:Object(n.jsx)(ne,{})})]}),Object(n.jsx)(se,{})]})},ae=function(e){return Object(n.jsx)(ie,{})};r.a.render(Object(n.jsx)(ae,{}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.d865c442.chunk.js.map