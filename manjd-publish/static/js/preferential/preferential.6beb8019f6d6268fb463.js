webpackJsonp([21],{"06rK":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{ref:"wrapper",staticClass:"wrapper"},[e("section",{staticClass:"header"},[t._m(0),t._v(" "),e("div",{staticClass:"slogan"},[t._v("邀请好友开店，特惠好货1元起")]),t._v(" "),e("div",{staticClass:"note-btn",on:{click:t.toAnchorNote}},[e("span",[t._v("活动说明")]),t._v(" "),e("i",{staticClass:"icon-arrow"})])]),t._v(" "),t._m(1),t._v(" "),e("section",{staticClass:"sec goods"},[e("div",{staticClass:"sec__tit"},[e("p",{staticClass:"st--big"},[t._v(t._s(t.goodsList.length>0?"人气好货等你拿":"特惠商品敬请期待"))]),t._v(" "),e("p",{staticClass:"st--small"},[t._v("您现有"+t._s(t.count)+"次特惠购物权")])]),t._v(" "),e("div",{staticClass:"sec__cnt"},[e("div",{staticClass:"sc--goods"},[e("ul",{staticClass:"goods--box"},t._l(t.goodsList,function(n){return e("li",{key:n.spuid,staticClass:"goods--item",on:{click:function(e){t.navToAppDetail(n)}}},[e("div",{staticClass:"goods--pic"},[e("img",{attrs:{src:n.goodslistpicurl}}),t._v(" "),n.goodsstocks<=0?e("div",{staticClass:"goods--soldout"},[t._v("已抢完")]):t._e()]),t._v(" "),e("div",{staticClass:"goods--info"},[e("div",{staticClass:"goods--name"},[t._v(t._s(n.goodsname))]),t._v(" "),e("div",{staticClass:"goods--price"},[e("span",[t._v("¥ "+t._s(n.goodsprice.toFixed(2)))]),t._v(" "),e("del",[t._v("¥ "+t._s(n.marketprice.toFixed(2)))])])])])}))])])]),t._v(" "),t._m(2)]),t._v(" "),e("footer",{staticClass:"fixed-ft"},[e("div",{staticClass:"ft-lf"},[t._v("邀请好友开店享特惠")]),t._v(" "),e("div",{staticClass:"ft-rt",on:{click:t.callAppShare}},[t._v("立即邀请开店")])])])},s=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:e("MnKo")}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"sec step"},[e("div",{staticClass:"sec__tit"},[e("p",{staticClass:"st--big"},[t._v("如何获得购物机会")]),t._v(" "),e("p",{staticClass:"st--small"},[t._v("当好友通过您的邀请链接注册成为店主，在APP端登陆 即可获得特惠购物机会")])]),t._v(" "),e("div",{staticClass:"sec__cnt"},[e("ul",{staticClass:"sc--steps"},[e("li",{staticClass:"sc--step"},[e("p",{staticClass:"scs--tit"},[t._v("步骤一")]),t._v(" "),e("p",{staticClass:"scs--desc"},[t._v("点击“邀请开店”按钮分享链接给好友开店")])]),t._v(" "),e("li",{staticClass:"sc--step"},[e("p",{staticClass:"scs--tit"},[t._v("步骤二")]),t._v(" "),e("p",{staticClass:"scs--desc"},[t._v("好友打开邀请链接，完成注册，成为店主")])]),t._v(" "),e("li",{staticClass:"sc--step"},[e("p",{staticClass:"scs--tit"},[t._v("步骤三")]),t._v(" "),e("p",{staticClass:"scs--desc"},[t._v("好友首次登陆APP，您即可获得特惠购物权，最低1元买")])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"sec note"},[e("div",{staticClass:"sec__tit"},[e("p",{staticClass:"st--big"},[t._v("活动说明")])]),t._v(" "),e("div",{staticClass:"sec__cnt"},[e("div",{staticClass:"sc--notes"},[e("ul",{staticClass:"notes--box"},[e("li",{staticClass:"note-item"},[t._v("1. 每成功邀请一位好友开店，将获得一次特惠购物权，不限邀请次数。")]),t._v(" "),e("li",{staticClass:"note-item"},[t._v("2. 获得特惠购物权后方可购买活动商品。")]),t._v(" "),e("li",{staticClass:"note-item"},[t._v("3. 下单成功后可前往我的订单查看物情。")])])]),t._v(" "),e("div",{staticClass:"warning"},[t._v("注意：若发现作弊、刷奖等行为，以及任何未满足活动规则而获得特惠购物权均视为无效。最终解释权归满金店所有。")])])])}],o={render:i,staticRenderFns:s};n.a=o},"5+wb":function(t,n,e){"use strict";var i=e("Vo7i"),s=e("slWF"),o=(e.n(s),e("X2Oc"));n.a={data:function(){return{goodsList:[],isAndroid:null,count:0}},methods:{toAnchorNote:function(){var t=this.$refs.wrapper,n=t.scrollHeight-window.innerHeight,e=t.scrollTop,i=null;window.requestAnimationFrame||(requestAnimationFrame=function(t){return setTimeout(function(){t()},17)}),window.cancelAnimationFrame||(cancelAnimationFrame=function(t){clearTimeout(t)});!function s(){if((e+=(n-e)/4)>=n-1)return t.scrollTop=n,void cancelAnimationFrame(i);t.scrollTop=e,0==t.scrollTop&&(document.body.scrollTop=e,t=document.body),i=requestAnimationFrame(s)}()},navToAppDetail:function(t){var n=t.spuid;this.isAndroid?Object(o.a)(function(t){t.goToGoodsDetailMethod(n)}):Object(o.e)(function(t){t.callHandler("goToGoodsDetailMethod",n,function(){})})},pullGoodsData:function(){var t=this;Object(i.a)("goods/v1/app/discount/list").then(function(n){if(1===n.code){var e=n.data;e&&e.length%2!=0&&(e=e.slice(0,-1)),t.goodsList=e}}).catch(function(t){console.log(t)})},pullPerentailCount:function(){var t=this;Object(i.b)("activity/v1/app/frequency").then(function(n){1===n.code&&(t.count=n.data.num)}).catch(function(t){console.log(t)})},callAppShare:function(){var t=this;this.isAndroid?Object(o.a)(function(n){n.showSharedDialogForInviteSetupStore(t.count)}):Object(o.e)(function(n){n.callHandler("showSharedDialogForInviteSetupStore",t.count,function(){})})},init:function(){this.isAndroid=window.navigator.userAgent.toLowerCase().indexOf("android")>-1,this.pullGoodsData(),this.pullPerentailCount()}},mounted:function(){this.init()}}},BoIy:function(t,n,e){"use strict";function i(t){e("MSvi")}var s=e("5+wb"),o=e("06rK"),a=e("VU/8"),c=i,r=a(s.a,o.a,!1,c,null,null);n.a=r.exports},K7ft:function(t,n,e){"use strict";var i=e("7+uW"),s=e("cTzj"),o=e.n(s);i.a.use(o.a,{preLoad:1.3,attempt:1})},MSvi:function(t,n){},MnKo:function(t,n,e){t.exports=e.p+"static/img/logo.8422ebf.png"},UoMW:function(t,n){!function(t,n){function e(){var t=i.clientWidth;"number"==typeof t&&(i.style.fontSize=t/o*100+"px")}var i=t.documentElement,s="orientationchange"in window?"orientationchange":"resize",o=750;"function"==typeof t.addEventListener&&(n.addEventListener(s,e,!1),t.addEventListener("DOMContentLoaded",e,!1),e())}(document,window),function(){if(window.devicePixelRatio&&devicePixelRatio>=2){var t=document.createElement("div");t.style.border=".5px solid transparent",document.body.appendChild(t),1==t.offsetHeight&&document.querySelector("html").classList.add("hairlines"),document.body.removeChild(t)}}()},Vo7i:function(t,n,e){"use strict";function i(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new a.a(function(e,i){r.a.get(t,{params:n}).then(function(t){e(t.data)}).catch(function(t){i(t)})})}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new a.a(function(e,i){r.a.post(t,n).then(function(t){e(t.data)}).catch(function(t){i(t)})})}n.a=i,n.b=s;var o=e("//Fk"),a=e.n(o),c=(e("7+uW"),e("mtWM")),r=e.n(c),d=e("X2Oc");r.a.defaults.baseURL=API_BASE_URL,r.a.defaults.timeout=15e3,r.a.interceptors.request.use(function(t){var n=window.navigator.userAgent.toLowerCase().indexOf("android")>-1;t.headers.source="h5";var e="";if(n?n&&(e=window.androidHeaders):e=window.iOSHeaderInfo,""!=e)for(var i in e)t.headers[i]=e[i];return t},function(t){return a.a.reject(t)}),r.a.interceptors.response.use(function(t){return 401==t.data.code&&Object(d.d)(),t},function(t){return a.a.reject(t)})},X2Oc:function(t,n,e){"use strict";e.d(n,"c",function(){return i}),e.d(n,"b",function(){return s}),e.d(n,"a",function(){return o}),e.d(n,"e",function(){return a}),e.d(n,"d",function(){return c});var i=(function(){/(micromessenger|webbrowser)/g.test(window.navigator.userAgent.toLowerCase())}(),function(t){return function(n){var e=t.match(new RegExp(n+"=([^&]*)"));return e?e[1]:null}}),s=function(){return/(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent.toLowerCase())?"ios":"android"},o=function(t){try{if("ios"===s()){var n=function(n){t&&t(n)};window.WebViewJavascriptBridge?n(WebViewJavascriptBridge):document.addEventListener?document.addEventListener("WebViewJavascriptBridgeReady",function(){n(WebViewJavascriptBridge)},!1):document.attachEvent("onWebViewJavascriptBridgeReady",function(){n(WebViewJavascriptBridge)})}else t&&t(manjdSales)}catch(t){}},a=function(t){var n=window.navigator.userAgent.toLowerCase(),e=n.match(/iOS-\d*/),i=null;if(e&&(i=e.split("-")[1]),i<163&&o(),window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var s=document.createElement("iframe");s.style.display="none",s.src="https://__bridge_loaded__",document.documentElement.appendChild(s),setTimeout(function(){document.documentElement.removeChild(s)},0)},c=function(){o(function(t){"ios"===s()?t.callHandler("goToLogin",null,function(t){}):t.goToLogin()})}},pobs:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),s=e("BoIy"),o=e("v5o6"),a=e.n(o),c=e("qp8V"),r=(e.n(c),e("MU8w")),d=(e.n(r),e("UoMW"));e.n(d),e("K7ft");document.addEventListener("DOMContentLoaded",function(){a.a.attach(document.body)},!1),new i.a({el:"#app",render:function(t){return t(s.a)}})},qp8V:function(t,n){!function(){var t=navigator.userAgent.toLowerCase().indexOf("android")>-1,n=null;if(t){try{n=JSON.parse(window.manjdSales.getHeaderInfo())}catch(t){n=null}window.androidHeaders=n}}()},slWF:function(t,n){}},["pobs"]);
//# sourceMappingURL=preferential.6beb8019f6d6268fb463.js.map