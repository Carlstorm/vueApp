(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9139095b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"e4290f1c"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1203:function(e,t,n){"use strict";var r=n("b6e0"),o=n.n(r);o.a},"17e1":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("59ca"),o=n.n(r),a=(n("e71f"),o.a.initializeApp({apiKey:"AIzaSyB0uZFZ3LEn-_QJ82g9i_6xd2VhWP0aB4A",authDomain:"vuefiretest-1b59a.firebaseapp.com",databaseURL:"https://vuefiretest-1b59a.firebaseio.com",projectId:"vuefiretest-1b59a",storageBucket:"vuefiretest-1b59a.appspot.com",messagingSenderId:"559508278704",appId:"1:559508278704:web:f9335dfcb3ee078df4da75",measurementId:"G-HSVYT48LGV"}).firestore()),i=o.a.firestore;i.Timestamp,i.GeoPoint},3945:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrap"},on:{mouseover:e.mouseoverfunk,load:function(t){return e.hehehe()}}})},a=[],i=(n("99af"),n("4160"),n("159b"),n("17e1")),u=n("a18c"),c=null,s=!1,l={name:"HelloWorld2222",methods:{hehehe:function(){s=!1,f()},mouseoverfunk:function(e){e.target!=e.currentTarget&&0==s&&(s=!0,e.target.style.transform="scale(1.2)",c=e.target,e.target.childNodes[1].style.opacity="1",e.target.childNodes[1].style.pointerEvents="initial",e.target.childNodes[3].style.opacity="0.5"),e.target==e.currentTarget&&null!=c&&(s=!1,c.style.transform="scale(1)",c.childNodes[1].style.opacity="0",c.childNodes[1].style.pointerEvents="none",c.childNodes[3].style.opacity="1")}},created:function(){this.hehehe()},watch:{$route:"hehehe"}},d=[];function f(){r=null,c=null,i["a"].collection("users").onSnapshot((function(e){d=[];var t="";e.forEach((function(e){var t=e.data();t.id=e.id,d.push(t)}));for(var n=0;n<d.length;n++)t+='<div class="opslag" id="'.concat(d[n].id,'">\n   <dIv id=""unlad"" class="optionwrap">\n   <div id="unlad" class="edite"><p>Edit</p></div>\n    <div id="unlad" class="delete"><p>Slet</p></div>\n    </div>\n    <div class="img"></div>\n    <p id="navn">').concat(d[n].navn,"</p>\n    </div>\n    ");document.getElementById("wrap").innerHTML=t;for(var r=function(e){document.getElementsByClassName("edite")[e].addEventListener("click",(function(){v(e)})),document.getElementsByClassName("delete")[e].addEventListener("click",(function(){p(e)})),document.getElementsByClassName("img")[e].style.backgroundImage="url("+d[e].img+")"},o=0;o<d.length;o++)r(o)}))}function p(){i["a"].collection("users").doc(""+c.id).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))}function v(e){u["a"].go(-1),r=new Object(e),r.navn=d[e].navn,r.img=d[e].img,r.id=d[e].id}var m=l,h=(n("1203"),n("2877")),g=Object(h["a"])(m,o,a,!1,null,null,null);t["b"]=g.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Se opslag")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("Lav opslag")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},c=Object(i["a"])(u,o,a,!1,null,null,null),s=c.exports,l=n("a18c"),d=n("2f62");r["a"].use(d["a"]);var f=new d["a"].Store({state:{},mutations:{},actions:{},modules:{}}),p=n("0ff2");r["a"].use(p["a"]),r["a"].config.productionTip=!1,new r["a"]({router:l["a"],store:f,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld2222")],1)},i=[],u=n("3945"),c={name:"seobslag",components:{HelloWorld2222:u["b"]}},s=c,l=n("2877"),d=Object(l["a"])(s,a,i,!1,null,null,null),f=d.exports;r["a"].use(o["a"]);var p=[{path:"/",name:"Home",component:f},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],v=new o["a"]({routes:p});t["a"]=v},b6e0:function(e,t,n){}});
//# sourceMappingURL=app.66453a20.js.map