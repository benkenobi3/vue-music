(function(e){function t(t){for(var n,c,i=t[0],u=t[1],o=t[2],h=0,p=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,o||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02a5":function(e,t,r){"use strict";var n=r("fa85"),a=r.n(n);a.a},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"3f07":function(e,t,r){"use strict";var n=r("4b96"),a=r.n(n);a.a},"473d":function(e,t,r){"use strict";var n=r("a661"),a=r.n(n);a.a},"4b96":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{attrs:{fluid:""}},[n("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"/"}},[n("img",{staticClass:"ml-3",staticStyle:{width:"60px",height:"56px"},attrs:{src:r("a5e9"),alt:"logo"}})]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e.isSearch?n("b-navbar-nav",{staticClass:"ml-auto",attrs:{"justify-content":"center","align-v":"center"}},[n("b-form-input",{attrs:{id:"search-form"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):n("b-navbar-nav",{staticClass:"ml-auto",attrs:{"justify-content":"center","align-v":"center"}},[n("b-nav-item",{staticClass:"mr-4",attrs:{active:""}},[n("router-link",{attrs:{to:"/"}},[e._v(" Главная ")])],1),n("b-nav-item",{staticClass:"mr-4"},[n("router-link",{attrs:{to:"/top"}},[e._v(" Топ-10 ")])],1),n("b-nav-item",{staticClass:"mr-4"},[n("router-link",{attrs:{to:"/library"}},[e._v(" Библиотека ")])],1)],1),n("b-navbar-nav",{staticClass:"mr-auto"},[n("b-nav-item",[n("b-button",{attrs:{id:"search",pill:"",variant:"dark"},on:{click:e.goSearch}},[n("b-icon",{attrs:{icon:"search"}}),e._v(" Поиск ")],1)],1)],1),n("b-navbar-nav",{staticStyle:{width:"56px"}},[n("p",[e._v("ACC")])])],1)],1),n("b-row",{staticClass:"content",on:{click:function(t){e.isSearch=!1}}},[n("b-col",{attrs:{cols:"12"}},[n("router-view",{key:e.$route.fullPath})],1)],1)],1)],1)},s=[],c=(r("ac1f"),r("841c"),{data:function(){return{isSearch:!1,search:""}},methods:{goSearch:function(){this.isSearch?""!=this.search?this.$router.push({name:"Поиск",params:{srch:this.search}}):this.isSearch=!1:(this.isSearch=!0,this.search="")}}}),i=c,u=(r("034f"),r("2877")),o=Object(u["a"])(i,a,s,!1,null,null,null),l=o.exports,h=r("5f5b"),p=r("b1e0"),f=(r("f9e3"),r("2dd8"),r("2f62")),m=(r("d3b7"),r("96cf"),r("1da1")),b={actions:{fetchNewRelease:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://musicsear4.herokuapp.com/api/v1/search/album/all/?page=last&limit=10");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t.commit("updateRelease",n.results);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),fetchAlbum:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://musicsear4.herokuapp.com/api/v1/search/album/"+r+"/");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.commit("updateAlbum",a);case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchTop:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://musicsear4.herokuapp.com/api/v1/search/album/top/");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t.commit("updateTop",n.results);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},mutations:{updateRelease:function(e,t){e.new_release=t},updateAlbum:function(e,t){e.album=t},updateTop:function(e,t){e.top_albums=t}},state:{new_release:[],top_albums:[],album:[]},getters:{newRelease:function(e){return e.new_release},currentAlbum:function(e){return e.album},topAlbums:function(e){return e.top_albums}}},d={actions:{fetchSearchAlbums:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://musicsear4.herokuapp.com/api/v1/search/album/all/?search="+r);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.commit("updateSearchAlbums",a.results);case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchSearchSongs:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://musicsear4.herokuapp.com/api/v1/search/song/all/?search="+r);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.commit("updateSearchSongs",a.results);case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchSearchSingers:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://musicsear4.herokuapp.com/api/v1/search/singer/all/?search="+r);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.commit("updateSearchSingers",a.results);case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},mutations:{updateSearchAlbums:function(e,t){e.search.albums=t},updateSearchSongs:function(e,t){e.search.songs=t},updateSearchSingers:function(e,t){e.search.singers=t}},state:{search:{albums:[],songs:[],singers:[]}},getters:{getSearchAlbums:function(e){return e.search.albums},getSearchSongs:function(e){return e.search.songs},getSearchSingers:function(e){return e.search.singers}}};n["default"].use(f["a"]);var v=new f["a"].Store({modules:{album:b,search:d}}),g=r("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"showcase"},[n("b-col",{attrs:{cols:"11",offset:"1"}},[n("h1",[e._v("Новые релизы")]),n("ul",e._l(e.newRelease,(function(t){return n("li",{key:t.id},[n("div",{staticClass:"album-card"},[n("div",{staticClass:"album-image"},[n("img",{attrs:{src:t.img_url,alt:"fail"}}),n("router-link",{attrs:{to:{name:"Альбом",params:{id:t.id}}}},[n("img",{staticClass:"more",attrs:{src:r("69f5"),alt:""}})])],1),n("h4",[e._v(" "+e._s(t.name)+" ")]),n("p",[e._v(" "+e._s(t.type)+" • "+e._s(t.date.slice(0,4)))])])])})),0)])],1)],1)],1)},_=[],S={computed:Object(f["c"])(["newRelease"]),methods:Object(f["b"])(["fetchNewRelease"]),created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchNewRelease();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},y=S,x=(r("accc"),Object(u["a"])(y,w,_,!1,null,null,null)),j=x.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"showcase"},[r("b-col",{attrs:{cols:"11",offset:"1"}},[r("h1",[e._v("Топ-10")]),r("b-table",{attrs:{striped:"",hover:"",items:e.topAlbums,fields:e.fields}})],1)],1)],1)],1)},O=[],C={data:function(){return{fields:[{key:"name",label:"Название",sortable:!0},{key:"singers",label:"Исполнители",sortable:!0},{key:"duration",label:"Продолжительность",sortable:!0},{key:"date",label:"Дата",sortable:!0},{key:"rate",label:"Рейтинг",sortable:!0}]}},computed:Object(f["c"])(["topAlbums"]),methods:Object(f["b"])(["fetchTop"]),created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchTop();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},R=C,A=(r("02a5"),Object(u["a"])(R,k,O,!1,null,null,null)),$=A.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},P=[],E={},T=E,M=Object(u["a"])(T,N,P,!1,null,null,null),F=M.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"not-found-content",attrs:{fluid:""}},[r("b-row",{staticClass:"not-found-content",attrs:{"align-h":"center"}},[r("b-col",{attrs:{cols:"3","align-self":"center"}},[r("div",{staticClass:"error"},[e._v(" 404 "),r("br"),e._v(" Not Found ")])])],1)],1)],1)},z=[],q={name:"404 Not Found"},B=q,D=(r("473d"),Object(u["a"])(B,J,z,!1,null,null,null)),G=D.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",[r("b-row",{staticClass:"album-page"},[r("b-col",{attrs:{cols:"6"}},[r("img",{attrs:{src:e.currentAlbum.img_url,alt:"fail"}})]),r("b-col",{attrs:{cols:"6"}},[r("div",{staticClass:"title"},[r("h1",[e._v(" "+e._s(e.currentAlbum.name)+" ")]),r("p",[e._v(" "+e._s(e.currentAlbum.type)+" • "+e._s(e.currentAlbum.duration)+" • "+e._s(e.currentAlbum.date))])]),r("ul",{staticClass:"songs"},e._l(e.currentAlbum.songs,(function(t){return r("li",{key:t.id},[r("div",{staticClass:"song"},[r("h5",[e._v(" "+e._s(t.name)+" ")]),r("p",[e._v(" "+e._s(t.duration)+" ")])])])})),0)])],1)],1)],1)},I=[],K={props:["id"],computed:Object(f["c"])(["currentAlbum"]),methods:Object(f["b"])(["fetchAlbum"]),created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchAlbum(this.id);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},L=K,Q=(r("842b"),Object(u["a"])(L,H,I,!1,null,null,null)),U=Q.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"search-page"},[r("b-col",{attrs:{cols:"11",offset:"1"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.getSearchAlbums.length,expression:"getSearchAlbums.length != 0"}]},[r("h2",[e._v("Альбомы")]),r("ul",{staticClass:"albums"},e._l(e.getSearchAlbums,(function(t){return r("li",{key:t.id},[r("div",{staticClass:"album"},[r("h5",[e._v(" "+e._s(t.name)+" ")]),r("p",[e._v(" "+e._s(t.duration)+" ")])])])})),0)]),r("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.getSearchSongs.length,expression:"getSearchSongs.length != 0"}]},[r("h2",[e._v("Композиции")]),r("ul",{staticClass:"songs"},e._l(e.getSearchSongs,(function(t){return r("li",{key:t.id},[r("div",{staticClass:"song"},[r("h5",[e._v(" "+e._s(t.name)+" ")]),r("p",[e._v(" "+e._s(t.duration)+" ")])])])})),0)]),r("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.getSearchSingers.length,expression:"getSearchSingers.length != 0"}]},[r("h2",[e._v("Исполнители")]),r("ul",{staticClass:"singers"},e._l(e.getSearchSingers,(function(t){return r("li",{key:t.id},[r("div",{staticClass:"singer"},[r("h5",[e._v(" "+e._s(t.name)+" ")])])])})),0)])])],1)],1)],1)},W=[],X={props:["srch"],computed:Object(f["c"])(["getSearchAlbums","getSearchSongs","getSearchSingers"]),methods:Object(f["b"])(["fetchSearchAlbums","fetchSearchSongs","fetchSearchSingers"]),created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchSearchAlbums(this.srch),this.fetchSearchSongs(this.srch),this.fetchSearchSingers(this.srch);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},Y=X,Z=(r("3f07"),Object(u["a"])(Y,V,W,!1,null,null,null)),ee=Z.exports;n["default"].use(g["a"]);var te=[{path:"/",name:"Главная",component:j},{path:"/top",name:"Топ-100",component:$},{path:"/search/:srch",name:"Поиск",component:ee,props:!0},{path:"/library",name:"Библиотека",component:F},{path:"/album/:id",name:"Альбом",component:U,props:!0},{path:"*",name:"404 Not Found",component:G}],re=new g["a"]({mode:"history",routes:te});n["default"].use(h["a"]),n["default"].use(p["a"]),new n["default"]({store:v,router:re,render:function(e){return e(l)}}).$mount("#app")},"69f5":function(e,t,r){e.exports=r.p+"img/more.d452dd80.png"},"7e9a":function(e,t,r){},"842b":function(e,t,r){"use strict";var n=r("9619"),a=r.n(n);a.a},"85ec":function(e,t,r){},9619:function(e,t,r){},a5e9:function(e,t,r){e.exports=r.p+"img/zik.de9d1c84.png"},a661:function(e,t,r){},accc:function(e,t,r){"use strict";var n=r("7e9a"),a=r.n(n);a.a},fa85:function(e,t,r){}});
//# sourceMappingURL=app.6017e8ca.js.map