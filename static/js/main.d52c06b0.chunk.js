(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),o=a.n(r),c=a(5),u=a(1),s=a(3),m={setFullName:null};var i=function(){var e=l.a.useState(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=l.a.useState(!1),o=Object(s.a)(r,2),u=o[0],i=o[1],p=l.a.useState(!1),E=Object(s.a)(p,2),b=E[0],d=E[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Hello ",a),l.a.createElement("input",{onChange:function(e){var t=e.target.value;m.setFullName=t,n(t)},name:"fullName",type:"text",placeholder:"What's your name?"}),l.a.createElement(c.b,{to:"/Register"},l.a.createElement("button",{style:{backgroundColor:u?"black":"white"},onMouseOver:function(){i(!0)},onMouseOut:function(){i(!1)},id:"register"},"Register")),l.a.createElement(c.b,{to:"/Login"},l.a.createElement("button",{style:{backgroundColor:b?"black":"white"},onMouseOver:function(){d(!0)},onMouseOut:function(){d(!1)},id:"login"},"Login")))};var p=function(){var e=l.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.createElement("form",{className:"form container"},l.a.createElement("h1",null,"Hello ",m.setFullName),l.a.createElement("input",{type:"text",placeholder:"Username"}),l.a.createElement("input",{type:"password",placeholder:"Password"}),l.a.createElement("input",{type:"password",placeholder:"Confirm Password"}),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{type:"submit",style:{backgroundColor:a?"black":"white"},onMouseOver:function(){n(!0)},onMouseOut:function(){n(!1)},onClick:function(){}},"Register")))};var E=function(){var e=l.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.createElement("form",{className:"form container"},l.a.createElement("h1",null,"Hello ",m.setFullName),l.a.createElement("input",{type:"text",placeholder:"Username"}),l.a.createElement("input",{type:"password",placeholder:"Password"}),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{type:"submit",style:{backgroundColor:a?"black":"white"},onMouseOver:function(){n(!0)},onMouseOut:function(){n(!1)}},"Login")))};var b=function(){return l.a.createElement(c.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",element:l.a.createElement(i,null)}),l.a.createElement(u.a,{path:"/Register",element:l.a.createElement(p,null)}),l.a.createElement(u.a,{path:"/Login",element:l.a.createElement(E,null)})))};o.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d52c06b0.chunk.js.map