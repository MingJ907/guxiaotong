(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/gu-xiaotong/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08e7":function(t,e,n){"use strict";n("bdc1")},2395:function(t,e,n){},"24bd":function(t,e,n){},"2c3b":function(t,e,n){"use strict";n("24bd")},"328b":function(t,e,n){},"3ea8":function(t,e,n){},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="4678"},"48fb":function(t,e,n){},"4fde":function(t,e,n){"use strict";n("7ce0")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"main"},[n("router-view"),t._v(" "),t.$route.path.includes("login")?t._e():n("Navigation")],1)],1)},r=[],o=n("1da1"),i=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("header",[n("img",{attrs:{src:t.logoUrl,alt:""}}),t._m(0)])])}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"header-likst"},[n("li",[t._v("首页")]),n("li",[t._v("新手入门")]),n("li",[t._v("API")]),n("li",[t._v("关于")]),n("li",[t._v("注册")])])}],u={name:"Header",data:function(){return{logoUrl:n("806a")}}},l=u,f=(n("a901"),n("2877")),p=Object(f["a"])(l,i,c,!1,null,null,null),m=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[t.isUser?n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("p",{staticClass:"title"},[t._v("个人信息")])]},proxy:!0},{key:"listMain",fn:function(){return[n("img",{staticClass:"loginImage",attrs:{src:t.isUser.avatar_url,alt:""},on:{click:t.showAuthor}}),n("span",{staticClass:"loginName",on:{click:t.showAuthor}},[t._v(t._s(t.isUser.loginname))]),n("span",{staticClass:"text"},[n("p",[t._v("积分：666")])]),n("span",{staticClass:"text"},[n("p",[t._v("这个人有点懒，啥子都莫得")])])]},proxy:!0}])}):n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("p",{staticClass:"title"},[t._v("网页信息")])]},proxy:!0},{key:"listMain",fn:function(){return[n("button",{staticClass:"post-topic",on:{click:t.tologin}},[t._v("登录")])]},proxy:!0}],null,!1,3822571252)}),t.login?n("NavgationList",{scopedSlots:t._u([{key:"listMain",fn:function(){return[n("button",{staticClass:"post-topic",on:{click:t.editText}},[t._v("发布话题")])]},proxy:!0}],null,!1,872183892)}):t._e(),n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("p",{staticClass:"title"},[t._v("无人回复的话题")])]},proxy:!0},{key:"listMain",fn:function(){return[n("span",{staticClass:"text"},[t._v("hello World")]),n("span",{staticClass:"text"},[t._v("hello World")]),n("span",{staticClass:"text"},[t._v("一天学习一个轮子，十天后变成轮子哥")]),n("span",{staticClass:"text"},[t._v("快速切换同一网站的多个已登录账号，支持知乎、豆瓣、微博、Twitter、Facebook 等等")]),n("span",{staticClass:"text"},[t._v("react源码分析及实战")])]},proxy:!0}])}),n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("p",{staticClass:"title"},[t._v("积分榜 TOP100 >>")])]},proxy:!0},{key:"listMain",fn:function(){return[n("span",{staticClass:"text"},[n("span",[t._v("22630 ")]),n("span",{staticClass:"tabtwo"},[t._v(" i5ting ")])]),n("span",{staticClass:"text"},[n("span",[t._v("15840 ")]),n("span",{staticClass:"tabtwo"},[t._v(" alsotang ")])]),n("span",{staticClass:"text"},[n("span",[t._v("10045 ")]),n("span",{staticClass:"tabtwo"},[t._v(" atian25 ")])]),n("span",{staticClass:"text"},[n("span",[t._v("9350 ")]),t._v(" "),n("span",{staticClass:"tabtwo"},[t._v(" leapon ")])]),n("span",{staticClass:"text"},[n("span",[t._v("8780 ")]),t._v(" "),n("span",{staticClass:"tabtwo"},[t._v(" jiyinyiyong")])]),n("span",{staticClass:"text"},[n("span",[t._v("7730 ")]),t._v(" "),n("span",{staticClass:"tabtwo"},[t._v(" yakczh ")])]),n("span",{staticClass:"text"},[n("span",[t._v("6855 ")]),t._v(" "),n("span",{staticClass:"tabtwo"},[t._v(" im-here ")])]),n("span",{staticClass:"text"},[n("span",[t._v("6135 ")]),t._v(" "),n("span",{staticClass:"tabtwo"},[t._v(" DevinXian ")])]),n("span",{staticClass:"text"},[n("span",[t._v("5815 ")]),t._v(" "),n("span",{staticClass:"tabtwo"},[t._v(" chapgaga ")])]),n("span",{staticClass:"text"},[n("span",[t._v("5375 ")]),t._v(" "),n("span",{staticClass:"tabtwo"},[t._v(" magicdawn ")])])]},proxy:!0}])}),n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("p",{staticClass:"title"},[t._v("友情社区")])]},proxy:!0},{key:"listMain",fn:function(){return[n("div",{staticClass:"image"},[n("img",{attrs:{src:"https://static2.cnodejs.org/public/images/ruby-china-20150529.png",alt:""}}),n("img",{attrs:{src:"https://static2.cnodejs.org/public/images/golangtc-logo.png",alt:""}}),n("img",{attrs:{src:"https://static2.cnodejs.org/public/images/phphub-logo.png",alt:""}})])]},proxy:!0}])})],1)},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navgation-list"},[t._t("header"),t._t("listMain")],2)},b=[],g={name:"NavgationList"},j=g,_=(n("9c64"),Object(f["a"])(j,v,b,!1,null,null,null)),k=_.exports,x={components:{NavgationList:k},computed:{isUser:function(){return this.$store.state.comment_userinfo?this.$store.state.comment_userinfo:this.$store.state.userInfo},login:function(){return sessionStorage.getItem("isLogin")}},methods:{tologin:function(){this.$router.push("/login")},editText:function(){this.$router.push("./textediting")},showAuthor:function(){var t=this.isUser.loginname;this.$router.push({path:"/authorpage",query:{loginname:t}})}}},y=x,w=(n("08e7"),Object(f["a"])(y,d,h,!1,null,null,null)),C=w.exports,O={components:{Header:m,Navigation:C},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!sessionStorage.getItem("isLogin")){e.next=3;break}return e.next=3,t.$store.dispatch("getToken",sessionStorage.getItem("isLogin"));case 3:case"end":return e.stop()}}),e)})))()}},$=O,L=(n("7c55"),Object(f["a"])($,a,r,!1,null,null,null)),z=L.exports,R=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ul",{staticClass:"home-list"},[n("li",[n("router-link",{attrs:{to:"all"}},[t._v("全部")])],1),n("li",[n("router-link",{attrs:{to:"ask"}},[t._v("精华")])],1),n("li",[n("router-link",{attrs:{to:"share"}},[t._v("分享")])],1),n("li",[n("router-link",{attrs:{to:"job"}},[t._v("问答")])],1),n("li",[n("router-link",{attrs:{to:"good"}},[t._v("招聘")])],1)]),n("router-view")],1)},S=[],N={name:"Home",components:{}},M=N,U=(n("de16"),Object(f["a"])(M,T,S,!1,null,null,null)),F=U.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main01"},[t.Topices.length?n("div",[t._l(t.Topices,(function(t,e){return[n("ArticleList",{key:e,attrs:{item:t}})]}))],2):t._e()])},I=[],q=n("5530"),A=n("2f62"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-list"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:t.imgurl,title:t.item.author.loginname},on:{click:t.showAuthor}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.item.visit_count,expression:"item.visit_count"}],staticClass:"count"},[n("span",{attrs:{title:"回复数"}},[t._v(t._s(t.item.reply_count))]),t._v("/"),n("span",{attrs:{title:"点击数"}},[t._v(t._s(t.item.visit_count))])]),n("div",{staticClass:"title"},[void 0===this.$route.params.mainpath||"all"===this.$route.params.mainpath||"ask"===this.$route.params.mainpath?n("span",{class:{btn:t.btn,tab:"ask"===this.item.tab||this.item.top}},[t._v(t._s(t.btn))]):t._e(),n("span",{attrs:{title:t.item.title},on:{click:t.showContext}},[t._v(t._s(t.item.title))])]),n("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(t.item.last_reply_at)))])])},P=[],H={name:"ArticleList",data:function(){return{imgurl:this.item.author.avatar_url}},computed:{btn:function(){return this.item.good?"招聘":this.item.top?"置顶":"share"===this.item.tab?"共享":"job"===this.item.tab?"问答":"ask"===this.item.tab?"精华":""}},props:{item:{type:Object,default:null}},methods:{showContext:function(){var t=this.item.id;console.log("开始跳转"),this.$router.push({path:"/context",query:{id:t}})},showAuthor:function(){var t=this.item.author.loginname;this.$router.push({path:"/authorpage",query:{loginname:t}})}}},J=H,W=(n("8805"),Object(f["a"])(J,D,P,!1,null,null,null)),B=W.exports,X={components:{ArticleList:B},name:"Main",created:function(){this.getTopice(this.path)},watch:{path:{handler:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=t||"all",n.next=3,e.getTopice(s);case 3:case"end":return n.stop()}}),n)})))()},immediate:!0}},computed:Object(q["a"])({path:function(){return this.$route.params.mainpath}},Object(A["c"])({Topices:function(t){return t.Topices.topice}})),methods:Object(q["a"])({},Object(A["b"])(["getTopice"]))},G=X,K=(n("58c6"),Object(f["a"])(G,E,I,!1,null,null,null)),Q=K.exports,V=n("bc3a"),Y=n.n(V);Y.a.defaults.baseURL="https://cnodejs.org/api/v1/",Y.a.interceptors.response.use((function(t){return t.data})),s["default"].prototype.$axios=Y.a;var Z=Y.a,tt={state:{topice:[]},mutations:{getTopice:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.topice=n.data,console.log(n.data);case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},actions:{getTopice:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.get("/topics?page=1&limit=40&tab=".concat(n));case 2:s=t.sent,e.commit("getTopice",s);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}},et=tt;s["default"].use(A["a"]);var nt=new A["a"].Store({state:{userInfo:null,comment_context:null,comment_userinfo:null},mutations:{getToken:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.userInfo=n;case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setComment:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.comment_context=n;case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),removeComment:function(t){t.comment_context=null},setCommentUserinfo:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.comment_userinfo=n;case 1:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),removeCommentUserinfo:function(t){t.comment_userinfo=null}},actions:{getToken:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.post("/accesstoken",{accesstoken:n}).then((function(t){e.commit("getToken",t)})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setCommentUserinfo:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.get("/user/".concat(n));case 2:s=t.sent,e.commit("setCommentUserinfo",s.data);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),setComment:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var s,a,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=sessionStorage.getItem("isLogin"),!s){t.next=12;break}return t.next=4,Z.get("/topic/".concat(n),{accesstoken:s});case 4:return a=t.sent,e.commit("setComment",a.data),t.next=8,Z.get("/user/".concat(a.data.author.loginname));case 8:r=t.sent,e.commit("setCommentUserinfo",r.data),t.next=20;break;case 12:return t.next=14,Z.get("/topic/".concat(n));case 14:return o=t.sent,e.commit("setComment",o.data),t.next=18,Z.get("/user/".concat(o.data.author.loginname));case 18:i=t.sent,e.commit("setCommentUserinfo",i.data);case 20:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},modules:{Topices:et}}),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Login"},[n("h2",[t._v("登录页面")]),n("el-row",[n("div",[t._v("用户名"),n("el-input",{attrs:{placeholder:"随便填，反正我不管"}})],1),n("div",[t._v("用户标识"),n("el-input",{attrs:{placeholder:"请输入您的token"},model:{value:t.token,callback:function(e){t.token="string"===typeof e?e.trim():e},expression:"token"}})],1),n("div",[n("el-button",{attrs:{type:"success"},on:{click:t.login}},[t._v("登录按钮")])],1),n("span",[t._v("57f2bddb-5561-4fac-ba22-7ed12b6d266b")])])],1)},at=[],rt={name:"Login",data:function(){return{token:""}},methods:{login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getToken",t.token);case 2:t.$store.state.userInfo?(console.log("登录成功,已经获取到用户信息"),sessionStorage.setItem("isLogin",t.token),console.log(sessionStorage.getItem("isLogin")),t.$router.push("/all")):console.log("token错误");case 3:case"end":return e.stop()}}),e)})))()}}},ot=rt,it=(n("4fde"),Object(f["a"])(ot,st,at,!1,null,null,null)),ct=it.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.context?n("div",{staticClass:"context"},[n("NavgationList",{staticClass:"context-main",scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",[t._v(t._s(t.context.title))]),n("p",[t._v("· 发布于"+t._s(t._f("formatDate")(t.context.create_at))+" · 作者"+t._s(t.context.author.loginname)+" · "+t._s(t.context.visit_count)+"次浏览")]),n("hr")]},proxy:!0},{key:"listMain",fn:function(){return[n("div",{domProps:{innerHTML:t._s(t.myContext)}})]},proxy:!0}],null,!1,1137259666)})],1):t._e()},lt=[],ft={name:"Context",created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("进入页面"),console.log(t.$route.query.id),t.$store.dispatch("setComment",t.id);case 3:case"end":return e.stop()}}),e)})))()},computed:{context:function(){return this.$store.state.comment_context},myContext:function(){return this.$store.state.comment_context.content},id:function(){return this.$route.query.id}},beforeDestroy:function(){this.$store.commit("removeComment")},components:{NavgationList:k}},pt=ft,mt=(n("9da2"),Object(f["a"])(pt,ut,lt,!1,null,null,null)),dt=mt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",{staticClass:"author-page"},[n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"author-page-nav"},[n("router-link",{attrs:{to:"/"}},[t._v("主页/")])],1)]},proxy:!0},{key:"listMain",fn:function(){return[n("div",{staticClass:"author-page-userinfo"},[n("img",{attrs:{src:t.user.avatar_url,alt:""}}),n("span",[t._v(t._s(t.user.loginname))])]),n("div",{staticClass:"author-page-userinfo"},[n("span",[t._v(t._s(t.user.score)+" 积分")])]),n("div",{staticClass:"author-page-userinfo"},[n("span",[t._v("@"+t._s(t.user.githubUsername))])]),n("div",{staticClass:"author-page-userinfo"},[n("span",[t._v("注册时间 "+t._s(t._f("formatDate")(t.user.create_at)))])])]},proxy:!0}],null,!1,582425353)}),n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"author-page-nav"},[t._v("最近参与的话题")])]},proxy:!0},{key:"listMain",fn:function(){return[t.user.recent_replies.length?n("div",[t._l(t.user.recent_replies,(function(t){return[n("ArticleList",{key:t.id,attrs:{item:t}})]}))],2):n("div",[n("span",[t._v("没有最近参与的话题")])])]},proxy:!0}],null,!1,1553455794)}),n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"author-page-nav"},[t._v("最近创建的话题")])]},proxy:!0},{key:"listMain",fn:function(){return[t.user.recent_topics.length?n("div",[t._l(t.user.recent_topics,(function(t){return[n("ArticleList",{key:t.id,attrs:{item:t}})]}))],2):n("div",[n("span",[t._v("最近没有创建话题")])])]},proxy:!0}],null,!1,4096070870)})],1):t._e()},vt=[],bt={components:{NavgationList:k,ArticleList:B},name:"AuthorPage",created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.user){e.next=5;break}return n=t.$route.query.loginname,e.next=4,t.$store.dispatch("setCommentUserinfo",n);case 4:console.log(t.user);case 5:case"end":return e.stop()}}),e)})))()},computed:{user:function(){return this.$store.state.comment_userinfo}}},gt=bt,jt=(n("2c3b"),Object(f["a"])(gt,ht,vt,!1,null,null,null)),_t=jt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-editing"},[n("NavgationList",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"author-page-nav"},[n("router-link",{attrs:{to:"/"}},[t._v("主页/")]),n("span",[t._v("发布话题")])],1)]},proxy:!0},{key:"listMain",fn:function(){return[n("el-row",[n("el-form",{ref:"form",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"title",label:"输入标题"}},[n("el-input",{attrs:{placeholder:"标题字数10字以上"},model:{value:t.ruleForm.title,callback:function(e){t.$set(t.ruleForm,"title","string"===typeof e?e.trim():e)},expression:"ruleForm.title"}})],1),n("el-form-item",{attrs:{label:"选择板块",prop:"tab"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.ruleForm.tab,callback:function(e){t.$set(t.ruleForm,"tab",e)},expression:"ruleForm.tab"}},[n("el-option",{attrs:{label:"分享",value:"share"}}),n("el-option",{attrs:{label:"问答",value:"ask"}}),n("el-option",{attrs:{label:"招聘",value:"job"}}),n("el-option",{attrs:{label:"测试.",value:"dev"}})],1)],1),n("el-form-item",{attrs:{label:"正文部分",prop:"content"}},[n("editor",{attrs:{"api-key":"9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754","model-events":"change keydown blur focus paste",init:{height:500,menubar:!0,language:"zh_CN",branding:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent |         styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat |         table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs"}},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("立刻发布")])],1)],1)],1)]},proxy:!0}])})],1)},xt=[],yt=n("ca72"),wt={name:"TextEditing",components:{editor:yt["a"],NavgationList:k},data:function(){return{ruleForm:{tab:"",title:"",content:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:10,message:"长度不能少于10个字符",trigger:"blur"}],tab:[{required:!0,message:"请选择发布板块",trigger:"change"}],content:[{required:!0,message:"请输入正文",trigger:"blur"},{min:5,message:"长度不能少于5个字符",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;console.log("到目前为止没有问题");var n=sessionStorage.getItem("isLogin");e.$axios.post("/topics",Object(q["a"])({accesstoken:n},e.ruleForm)),e.$router.push("/all")}))}}},Ct=wt,Ot=(n("8ab6"),Object(f["a"])(Ct,kt,xt,!1,null,null,null)),$t=Ot.exports;s["default"].use(R["a"]);var Lt=[{path:"",redirect:"/all"},{path:"/login",component:ct},{path:"/context",component:dt},{path:"/authorpage",component:_t},{path:"/textediting",component:$t},{path:"/",name:"Home",component:F,children:[{path:"/:mainpath",component:Q,beforeEnter:function(t,e,n){nt.state.Topices.topice=[],nt.commit("removeCommentUserinfo"),n()}}]}],zt=new R["a"]({mode:"hash",base:"/gu-xiaotong/",routes:Lt}),Rt=zt,Tt=(n("0fae"),n("5c96"));s["default"].use(Tt["Input"]),s["default"].use(Tt["Button"]),s["default"].use(Tt["Row"]),s["default"].use(Tt["Dropdown"]),s["default"].use(Tt["DropdownItem"]),s["default"].use(Tt["DropdownMenu"]),s["default"].use(Tt["Form"]),s["default"].use(Tt["FormItem"]),s["default"].use(Tt["Select"]),s["default"].use(Tt["Option"]);n("4de4");var St=n("c1df"),Nt=n.n(St);Nt.a.locale("zh-cn"),s["default"].filter("formatDate",(function(t){return Nt()(t).fromNow()})),s["default"].config.productionTip=!1,new s["default"]({router:Rt,store:nt,render:function(t){return t(z)}}).$mount("#app")},"58c6":function(t,e,n){"use strict";n("ae09")},"7c55":function(t,e,n){"use strict";n("2395")},"7ce0":function(t,e,n){},"806a":function(t,e,n){t.exports=n.p+"img/谷小桐.c7190fec.png"},8659:function(t,e,n){},8805:function(t,e,n){"use strict";n("9a76")},"8ab6":function(t,e,n){"use strict";n("48fb")},"8d91":function(t,e,n){},"9a76":function(t,e,n){},"9c64":function(t,e,n){"use strict";n("8659")},"9da2":function(t,e,n){"use strict";n("3ea8")},a901:function(t,e,n){"use strict";n("328b")},ae09:function(t,e,n){},bdc1:function(t,e,n){},de16:function(t,e,n){"use strict";n("8d91")}});
//# sourceMappingURL=app.b197edb1.js.map