(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2);function c(e){let[t,n]=Object(a.useState)(e.value?e.value:""),[r,c]=Object(a.useState)(30/e.gridSize);return console.log(e),l.a.createElement("td",null,l.a.createElement("input",{className:"block",type:"button",value:t,style:{height:r+"em",width:r+"em"},onClick:()=>{e.onClickEvent(e.i,e.j)}}))}function i(e){return l.a.createElement("tr",null,e.data.map((t,n)=>l.a.createElement(c,{key:t+":"+n,i:e.i,j:n,value:t,gridSize:e.gridSize,onClickEvent:e.onClickEvent})))}function u(e){let[t,n]=Object(a.useState)("X");const r=new Array(e.gridSize);for(var c=0;c<r.length;c++){r[c]=new Array(e.gridSize);for(var u=0;u<r[c].length;u++)r[c][u]=" "}let[o,m]=Object(a.useState)(r);const s=(e,a)=>{o[e][a]&&(o[e][a]=t),m(o),n("X"===t?"O":"X")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t,"'s Turn"),l.a.createElement("table",{className:"center-table"},l.a.createElement("tbody",null,o.map((t,n)=>l.a.createElement(i,{key:n,i:n,data:t,gridSize:e.gridSize,onClickEvent:s})))))}function o(e){let[t,n]=Object(a.useState)(3),[r,c]=Object(a.useState)(3);return l.a.createElement("div",{className:"center"},l.a.createElement("h1",null,"Play with grid size ",t,l.a.createElement("input",{min:3,max:7,type:"number",value:t,onChange:function(e){if(!e.target.value)return void n(3);let t=parseInt(e.target.value);t<3?t=3:t>7&&(t=7),n(t)}})),l.a.createElement("h1",null,"Connect ",r," to win"),l.a.createElement(u,{key:t,gridSize:t,winSize:r}))}var m=()=>l.a.createElement("div",{className:"App"},l.a.createElement(o,null));Object(r.render)(l.a.createElement(m,null),document.getElementById("root"))}},[[3,1,2]]]);