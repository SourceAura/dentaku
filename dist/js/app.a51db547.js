(function(t){function e(e){for(var o,c,s=e[0],a=e[1],u=e[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9d97dc91"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=c(t);var u=new Error;i=function(e){a.onerror=a.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("vs-icon",{attrs:{icon:"home",size:"small",color:"#FFF"}})],1),n("div"),n("a",{attrs:{href:"https://github.com/SourceAura/vue-calc"}},[n("vs-icon",{attrs:{icon:"code",size:"small",color:"#FFF"}})],1),n("div"),n("router-link",{attrs:{to:"/about"}},[n("vs-icon",{attrs:{icon:"info",size:"small",color:"#FFF"}})],1)],1),n("router-view")],1)},i=[],c=(n("034f"),n("2877")),s={},a=Object(c["a"])(s,r,i,!1,null,null,null),u=a.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Calculator")],1)},d=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator"},[n("div",{staticClass:"display"},[t._v(t._s(t.current||"0"))]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:t.clear}},[t._v("C")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:t.sign}},[t._v("+/-")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:t.percent}},[t._v("%")]),n("vs-button",{staticClass:"btn operator",attrs:{type:"line",color:"orange"},on:{click:t.divide}},[t._v("/")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("7")}}},[t._v("7")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("8")}}},[t._v("8")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("9")}}},[t._v("9")]),n("vs-button",{staticClass:"btn operator",attrs:{type:"line",color:"orange"},on:{click:t.multiply}},[t._v("x")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("4")}}},[t._v("4")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("5")}}},[t._v("5")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("6")}}},[t._v("6")]),n("vs-button",{staticClass:"btn operator",attrs:{type:"line",color:"orange"},on:{click:t.subtract}},[t._v("-")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("1")}}},[t._v("1")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("2")}}},[t._v("2")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("3")}}},[t._v("3")]),n("vs-button",{staticClass:"btn operator",attrs:{type:"line",color:"orange"},on:{click:t.add}},[t._v("+")]),n("vs-button",{staticClass:"btn zero",attrs:{type:"line",color:"white"},on:{click:function(e){return t.append("0")}}},[t._v("0")]),n("vs-button",{staticClass:"btn",attrs:{type:"line",color:"white"},on:{click:function(e){return t.dot(".")}}},[t._v(".")]),n("vs-button",{staticClass:"btn operator",attrs:{type:"line",color:"orange"},on:{click:t.compute}},[t._v("=")])],1)},h=[],b=(n("99af"),n("c975"),n("fb6a"),n("acd8"),{name:"Calculator",data:function(){return{current:"",previous:null,operator:null,executed:!1}},props:{},methods:{clear:function(){this.current=""},sign:function(){this.current="-"===this.current.charAt(0)?this.current.slice(1):"-".concat(this.current)},percent:function(){this.current="".concat(parseFloat(this.current)/100)},append:function(t){this.executed&&(this.current="",this.executed=!1),this.current="".concat(this.current).concat(t)},dot:function(){-1===this.current.indexOf(".")&&this.append(".")},setPrevious:function(){this.executed=!0,this.previous=this.current},divide:function(){this.operator=function(t,e){return t/e},this.setPrevious()},multiply:function(){this.operator=function(t,e){return t*e},this.setPrevious()},subtract:function(){this.operator=function(t,e){return t-e},this.setPrevious()},add:function(){this.operator=function(t,e){return t+e},this.setPrevious()},compute:function(){this.current=this.operator(parseFloat(this.current),parseFloat(this.previous)),this.previous=null}}}),m=b,y=(n("5b31"),Object(c["a"])(m,v,h,!1,null,"0a5d05fb",null)),g=y.exports,w={name:"home",components:{Calculator:g},data:function(){return{}}},_=w,k=Object(c["a"])(_,f,d,!1,null,null,null),C=k.exports;o["default"].use(p["a"]);var j=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new p["a"]({routes:j}),x=O,F=n("2f62");o["default"].use(F["a"]);var P=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("fb9a"),E=n.n(S);n("c789"),n("04f2");o["default"].use(E.a,{}),o["default"].config.productionTip=!1,new o["default"]({router:x,store:P,render:function(t){return t(u)}}).$mount("#app")},"5b31":function(t,e,n){"use strict";var o=n("8f3d"),r=n.n(o);r.a},"85ec":function(t,e,n){},"8f3d":function(t,e,n){}});
//# sourceMappingURL=app.a51db547.js.map