webpackJsonp([5],{0:function(t,e){},"5UT3":function(t,e,a){"use strict";function n(t){a("8O4Q")}var s=a("67T8"),i=a("fTyK"),r=a("46Yf"),o=n,c=r(s.a,i.a,!1,o,"data-v-62941983",null);e.a=c.exports},"67T8":function(t,e,a){"use strict";e.a={name:"header",props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0,document.body.style="overflow:hidden"},hideDetail:function(){this.detailShow=!1,document.body.style="overflow:auto"}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},mounted:function(){}}},"8O4Q":function(t,e){},DICR:function(t,e,a){"use strict";var n=a("5UT3");e.a={name:"app",data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(e){e=e.body,0==e.error&&(t.seller=e.data)})},components:{"v-header":n.a}}},EWIa:function(t,e){},IcnI:function(t,e,a){"use strict";var n=a("MVSX"),s=a("HVJf");n.a.use(s.a);var i=new s.a.Store({state:{count:0},actions:{},mutations:{increment:function(t){return t.count++},decrement:function(t){return t.count--}},getters:{}});e.a=i},M93x:function(t,e,a){"use strict";function n(t){a("tV8r")}var s=a("DICR"),i=a("ahlj"),r=a("46Yf"),o=n,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZLEe"),s=a.n(n),i=a("MVSX"),r=a("IcnI"),o=a("M93x"),c=a("YaEn"),l=a("EWIa"),u=(a.n(l),a("iDdd")),d=a.n(u),v=a("pRcx"),p=a.n(v);i.a.config.productionTip=!1,i.a.config.debug=!0,d.a.attach(document.body),s()(p.a).forEach(function(t){i.a.filter(t,p.a[t])}),new i.a({el:"#app",store:r.a,router:c.a,template:"<App/>",render:function(t){return t(o.a)}}).$mount("#app")},YaEn:function(t,e,a){"use strict";(function(t){var n=a("MVSX"),s=a("cigS"),i=a("y0Fx");n.a.use(s.a),n.a.use(i.a);var r=[{path:"/",component:function(t){return a.e(0).then(function(){var e=[a("X2rT")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/goods",name:"goods",component:function(t){return a.e(0).then(function(){var e=[a("X2rT")];t.apply(null,e)}.bind(this)).catch(a.oe)},children:[{path:"/bar",name:"bar",component:function(t){return a.e(2).then(function(){var e=[a("RBrI")];t.apply(null,e)}.bind(this)).catch(a.oe)}}],meta:{requiresAuth:!1}},{path:"/seller",name:"seller",component:function(t){return a.e(1).then(function(){var e=[a("4GET")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{requiresAuth:!0}},{path:"*",name:"NotFoundComponent",component:function(t){return a.e(3).then(function(){var e=[a("s72X")];t.apply(null,e)}.bind(this)).catch(a.oe)},meta:{requiresAuth:!1}}],o=new s.a({base:t,routes:r});e.a=o}).call(e,"/")},ahlj:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-header",{attrs:{seller:t.seller}}),t._v(" "),a("nav",{staticClass:"border-1px",attrs:{id:"tab"}},[a("div",{staticClass:"tab-inner"},[t._v("\n      I am tab !\n      "),a("h1",[t._v("Basic")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("/")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/goods"}},[t._v("/goods")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/seller"}},[t._v("/seller")])],1),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/bar"}},[t._v("/bar")])],1)])]),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"main-inner"},[a("router-view")],1)]),t._v(" "),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"footer"}},[a("div",{staticClass:"footer-inner"},[t._v("\n      I am footer!\n    ")])])}],i={render:n,staticRenderFns:s};e.a=i},fTyK:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"header-inner"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.seller.avatar,alt:"logo"}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",{staticClass:"brand"}),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),a("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?a("div",{staticClass:"support"},[a("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?a("div",{staticClass:"supports-count",on:{click:t.showDetail}},[a("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),a("i",{staticClass:"icon iconfont icon-zuoyoujiantou"})]):t._e()]),t._v(" "),a("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[a("span",{staticClass:"bulletin-title"}),a("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),a("i",{staticClass:"icon iconfont icon-zuoyoujiantou"})]),t._v(" "),a("div",{staticClass:"backgroundImg"},[a("img",{attrs:{src:t.seller.avatar,alt:"",width:"100%",height:"100%"}})]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail",attrs:{transition:"fade"},on:{click:t.hideDetail}},[a("div",{staticClass:"detail-wrapper"},[a("div",{staticClass:"detail-inner"},[a("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),a("div",{staticClass:"star-wrapper"},[a("div",{attrs:{size:48,score:t.seller.score}})])]),t._v(" "),a("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[a("i",{staticClass:"iconfont icon-cha"})])])])],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},pRcx:function(t,e){t.exports={validPwd:function(t){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[\dA-Za-z]{6,}$/;return!!t.toString().match(e)},validMobile:function(t){var e=/^[1][3,4,5,7,8]\d{9}$/;return!!t.toString().match(e)},validIdCard:function(t){var e=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;return!!t.toString().match(e)}}},tV8r:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4995b323b6f931673be7.js.map