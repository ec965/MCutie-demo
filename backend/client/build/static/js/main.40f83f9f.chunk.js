(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{177:function(e,t,c){},316:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),i=c.n(s),a=c(79),r=c.n(a),o=(c(177),function(e){return Object(n.jsx)("div",{className:"nav-group",children:e.children})}),l=function(e){return Object(n.jsx)("div",{className:"nav-bar",children:e.children})},j=function(e){return Object(n.jsx)("div",{className:"nav-item",children:Object(n.jsx)("h2",{children:e.children})})},u=function(e){return Object(n.jsx)("div",{className:"nav-logo",children:Object(n.jsx)("h1",{children:e.children})})},b=c(44),h=c(17),d=c(11),O=function(e){return Object(n.jsx)("div",{className:"page",children:e.children})},f=function(e){return Object(n.jsx)("div",{className:"col "+e.className,children:e.children})},x=function(e){return Object(n.jsx)("div",{className:"row "+e.className,children:e.children})},p=function(e){return Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{children:e.children})})},m=function(e){return Object(n.jsx)("th",{className:"table-head "+e.className,children:e.children})},g=function(e){return Object(n.jsx)("td",{name:e.name,onClick:e.onClick,id:e.id,className:"table-item "+e.className,children:e.children})},v=function(e){return Object(n.jsx)("tr",{onClick:e.onClick,id:e.id,className:"table-row "+e.className,children:e.children})},w=function(e){if("undefined"!==typeof e&&e.length>0)return e[0].toUpperCase()+e.substr(1)},y="wss://".concat(window.location.host,"/live"),N="#93a1a1",S="#eee8d5",k="#d33682",C=function(e){var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())},E=c(322),D=c(166),q=c(321),M=c(85),T=c(158),A=c(159),W=function(e){var t=e.payload,c=e.label,s=e.active,i=e.unit;return s&&null!==t&&"undefined"!==typeof t&&t.length>0?Object(n.jsxs)("div",{className:"tool-tip",children:[Object(n.jsx)("p",{children:"".concat(t[0].value," ").concat(i)}),Object(n.jsx)("p",{children:C(c)})]}):Object(n.jsx)("p",{children:"placeholder"})},J=function(e){var t=Object(s.useState)(960),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)(540),o=Object(d.a)(r,2),l=o[0],j=o[1],u=e.unit;return Object(s.useEffect)((function(){window.innerWidth<1e3&&(a(640),j(360)),window.innerWidth<400&&(a(256),j(144))})),Object(n.jsxs)("div",{className:"chart",children:[Object(n.jsx)("h2",{children:e.topic}),Object(n.jsxs)(E.a,{width:i,height:l,data:e.data,margin:{top:15,bottom:15,left:15,right:15},children:[Object(n.jsx)(D.a,{type:"linear",dataKey:"message",dot:!1,stroke:k,strokeWidth:1.75}),Object(n.jsx)(q.a,{stroke:N}),Object(n.jsx)(M.a,{content:Object(n.jsx)(W,{}),unit:u}),Object(n.jsx)(T.a,{dataKey:"createdAt",scale:"time",type:"number",domain:["dataMin","dataMax"],interval:"preserveStartEnd",tickFormatter:function(e){return function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getHours(),":").concat(t.getMinutes())}(e)},label:{value:"Time (Date/HH:mm)",position:"insideBottom",offset:-8,fill:N},stroke:S,height:42,allowDataOverflow:!1}),Object(n.jsx)(A.a,{label:{value:"".concat(e.label," (").concat(e.unit,")"),position:"insideLeft",angle:-90,fill:N},stroke:S,dataKey:"message",type:"number",interval:0})]})]})},U=function(e){var t=e.data.reverse().map((function(t,c){var s=function(e){var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())}(t.createdAt);return Object(n.jsxs)(v,{children:[Object(n.jsx)(g,{children:e.data.length-c}),Object(n.jsx)(g,{children:t.message}),Object(n.jsx)(g,{children:s})]},c)}));return Object(n.jsxs)(p,{children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(m,{children:"Index"}),Object(n.jsx)(m,{children:"".concat(e.label," (").concat(e.unit,")")}),Object(n.jsx)(m,{children:"Time"})]}),t]})},F=function(e){var t=e.topics.map((function(e,t){return Object(n.jsx)(v,{children:Object(n.jsx)(g,{children:Object(n.jsx)(b.b,{to:e.routeUrl,children:e.topic})})},t)}));return Object(n.jsxs)(p,{children:[Object(n.jsx)(v,{children:Object(n.jsx)(m,{children:"Topics"})}),t]})},H=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1],r=w(e.topic.split("/")[e.topic.split("/").length-2]),o=e.topic.split("/")[e.topic.split("/").length-1];return Object(s.useEffect)((function(){fetch("/mqtt/m?topic="+e.topic).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)e[t].message=parseFloat(e[t].message),e[t].createdAt=Date.parse(e[t].createdAt);a(e)}))}),[e.topic]),Object(n.jsxs)(f,{children:[Object(n.jsx)(J,{topic:e.topic,unit:o,label:r,data:i}),Object(n.jsx)(U,{data:i,unit:o,label:r})]})},L=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1];Object(s.useEffect)((function(){fetch("/mqtt/t").then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)e[t].routeUrl="/t/"+e[t].topic.replaceAll("/","_").replaceAll("%","-");a(e)}))}),[]);var r=i.map((function(e,t){return Object(n.jsx)(h.a,{exact:!0,path:e.routeUrl,children:Object(n.jsx)(H,{topic:e.topic})},t)}));return Object(n.jsx)(O,{children:Object(n.jsxs)(f,{children:[Object(n.jsx)(x,{children:Object(n.jsx)(F,{routeUrl:"/t/",topics:i})}),Object(n.jsx)(x,{children:Object(n.jsx)(h.c,{children:r})})]})})},R=c(161),I=c(162),K=c(167),P=c(164),Q=function(e){return Object(n.jsx)("form",{onSubmit:e.onSubmit,children:e.children})},B=function(e){return Object(n.jsxs)("div",{className:"form-label",children:[Object(n.jsx)("label",{children:e.children}),Object(n.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange,type:e.type})]})},G=function(e){return Object(n.jsx)("input",{className:"form-button",type:"submit",value:e.label})},Y=c(66),_=c.n(Y),z=function(e){return Object(n.jsxs)("label",{className:"switch "+e.className,children:[Object(n.jsx)("input",{type:"checkbox",onClick:e.onClick}),Object(n.jsx)("span",{className:"slider"})]})},V=function(e){return Object(n.jsxs)(Q,{onSubmit:e.onSubmit,children:[Object(n.jsx)("h3",{children:"Subscribe"}),Object(n.jsx)(B,{type:"text",onChange:e.onChange,name:"sub",children:"Topic"}),Object(n.jsx)(B,{type:"text",onChange:e.onChange,placeholder:0,name:"qos",children:"QoS"}),Object(n.jsx)(G,{label:"Subscribe"})]})},X=function(e){var t=Object(s.useState)(!1),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)([]),o=Object(d.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1],w=Object(s.useState)(0),y=Object(d.a)(w,2),N=y[0],S=y[1],k=Object(s.useState)(!1),C=Object(d.a)(k,2),E=C[0],D=C[1];Object(s.useEffect)((function(){fetch("/mqtt/s").then((function(e){return e.json()})).then((function(e){j(e)}))}),[E]);var q=function(e){if(i){var t={method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:_.a.stringify({topic:e.target.id})};fetch("/mqtt/s",t).then((function(e){if(e.ok)return e;throw new Error(e.status)})).then((function(){return D(!E)})).catch((function(e){return console.log(e)}))}},M=l.map((function(e,t){return Object(n.jsxs)(v,{children:[Object(n.jsx)(g,{children:e.topic}),Object(n.jsx)(g,{children:e.qos}),Object(n.jsx)(g,{children:Object(n.jsx)("i",{onClick:q,name:e.topic,id:e.topic,className:"fas fa-times "+(i&&"link")})})]},t)}));return Object(n.jsxs)(f,{children:[Object(n.jsx)(V,{onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:_.a.stringify({topic:h,qos:N})};fetch("/mqtt/s",t).then((function(e){if(e.ok)return e;throw new Error(e.status)})).then((function(){return D(!E)})).catch((function(e){return console.log(e)}))},onChange:function(e){"sub"===e.target.name&&O(e.target.value),"qos"===e.target.name&&S(e.target.value)}}),Object(n.jsx)(x,{className:"top",children:Object(n.jsxs)(p,{children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(m,{children:"Subscription"}),Object(n.jsx)(m,{children:"QoS"}),Object(n.jsx)(m,{children:Object(n.jsx)(z,{onClick:function(e){a(e.target.checked)},className:"table-toggle"})})]}),M]})})]})},Z=c(165),$=function(e){var t=w(e.topic.split("/")[e.topic.split("/").length-2]),c=e.topic.split("/")[e.topic.split("/").length-1];return Object(n.jsx)(J,{topic:e.topic,unit:c,label:t,data:e.data})},ee=function(e){var t=Object(s.useState)(!1),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)([]),o=Object(d.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(s.useState)([]),w=Object(d.a)(x,2),y=w[0],N=w[1],S=function(e){var t=Object(s.useRef)();return Object(s.useEffect)((function(){t.current=e})),t.current}(h);Object(s.useEffect)((function(){e.ws.onmessage=function(e){var t=JSON.parse(e.data);if("newtopic"===t.response&&j(t.payload),"newdata"===t.response){var c=[];h===S&&(c=Object(Z.a)(y));for(var n=t.payload.messages,s=0;s<n.length;s++)n[s].message=parseFloat(n[s].message),n[s].createdAt=Date.parse(n[s].createdAt),c.push(n[s]);N(c)}}}));var k=function(t){if(i){var c={method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:_.a.stringify({topic:t.target.id})};fetch("/mqtt/t",c).then((function(e){if(e.ok)return e;throw new Error(e.status)})).then((function(){return e.ws.send(JSON.stringify({request:"delete"}))})).catch((function(e){return console.log(e)}))}},C=function(t){O(t.target.id);var c=JSON.stringify({request:"live",payload:{topic:t.target.id}});e.ws.send(c)},E=l.map((function(e,t){return Object(n.jsxs)(v,{children:[Object(n.jsx)(g,{className:"link",onClick:C,id:e.topic,children:e.topic}),Object(n.jsx)(g,{children:Object(n.jsx)("i",{onClick:k,name:e.topic,id:e.topic,className:"fas fa-times "+(i&&"link")})})]},t)}));return Object(n.jsxs)(f,{children:[h&&Object(n.jsx)($,{ws:e.ws,topic:h,data:y}),Object(n.jsxs)(p,{children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(m,{children:"Live Graph"}),Object(n.jsx)(m,{children:Object(n.jsx)(z,{onClick:function(e){a(e.target.checked)},className:"table-toggle"})})]}),E]})]})},te=function(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)(""),o=Object(d.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)(0),b=Object(d.a)(u,2),h=b[0],O=b[1];return Object(n.jsxs)(Q,{onSubmit:function(t){t.preventDefault();var c=JSON.stringify({request:"publish",payload:{topic:i,message:l,qos:h}});e.ws.send(c)},children:[Object(n.jsx)("h3",{children:"Publish"}),Object(n.jsx)(B,{type:"text",value:i,onChange:function(e){return a(e.target.value)},name:"topic",children:"Topic"}),Object(n.jsx)(B,{type:"text",value:l,onChange:function(e){return j(e.target.value)},name:"message",children:"Message"}),Object(n.jsx)(B,{type:"text",value:h,placeholder:0,onChange:function(e){return O(e.target.value)},name:"qos",children:"QoS"}),Object(n.jsx)(G,{label:"Publish"})]})},ce=function(e){Object(K.a)(c,e);var t=Object(P.a)(c);function c(){var e;return Object(R.a)(this,c),(e=t.call(this)).ws=new WebSocket(y),e.state={},e}return Object(I.a)(c,[{key:"componentDidMount",value:function(){this.ws.onopen=function(){console.log("websocket connected")},this.ws.onclose=function(){alert("Websocket Closed!"),console.log("websocket closed")}}},{key:"componentWillUnmount",value:function(){this.ws.close()}},{key:"render",value:function(){return Object(n.jsx)(O,{children:Object(n.jsxs)(f,{children:[Object(n.jsx)(x,{children:Object(n.jsx)(ee,{ws:this.ws})}),Object(n.jsxs)(x,{className:"top space",children:[Object(n.jsx)(x,{children:Object(n.jsxs)(f,{children:[Object(n.jsx)(te,{ws:this.ws}),Object(n.jsx)("p",{children:"Int Resolution: 1"}),Object(n.jsx)("p",{children:"Float Resolution: 0.1"}),Object(n.jsx)("a",{href:"https://github.com/ec965/MCutie/blob/master/README.md#float-resolution-and-int-resolution",children:"What's this?"})]})}),Object(n.jsx)(f,{className:"top",children:Object(n.jsx)(X,{})})]})]})})}}]),c}(i.a.Component),ne=function(e){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)(f,{children:Object(n.jsxs)("a",{href:"https://enochchau.com",children:[Object(n.jsx)("div",{children:"Enoch Chau"}),Object(n.jsx)("div",{children:"2021"})]})}),Object(n.jsx)("a",{href:"https://github.com/ec965/mcutie",children:Object(n.jsx)("i",{className:"fab fa-github"})})]})},se=function(e){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(l,{children:Object(n.jsxs)(o,{children:[Object(n.jsx)(u,{children:Object(n.jsx)(b.b,{to:"/",children:"MCutie"})}),Object(n.jsx)(j,{children:Object(n.jsx)(b.b,{to:"/t",children:Object(n.jsx)("i",{className:"fas fa-chart-line"})})})]})}),Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/t",children:Object(n.jsx)(L,{})}),Object(n.jsx)(h.a,{path:"/",children:Object(n.jsx)(ce,{})})]}),Object(n.jsx)(ne,{})]})},ie=function(e){return Object(n.jsx)(se,{})};r.a.render(Object(n.jsx)(ie,{}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.40f83f9f.chunk.js.map