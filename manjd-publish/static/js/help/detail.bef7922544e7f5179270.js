webpackJsonp([9],{"0jnR":function(t,e,n){"use strict";n("Vo7i")},"5pF4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("bmDO"),o=n("v5o6"),r=n.n(o),s=n("MU8w"),c=(n.n(s),n("UoMW")),u=(n.n(c),n("qp8V"));n.n(u);document.addEventListener("DOMContentLoaded",function(){r.a.attach(document.body)},!1),new i.a({el:"#app",render:function(t){return t(a.a)}})},"5uUU":function(t,e,n){"use strict";function i(t){n("divp")}var a=n("etjn"),o=n("HRBX"),r=n("VU/8"),s=i,c=r(a.a,o.a,!1,s,"data-v-30442404",null);e.a=c.exports},Apws:function(t,e,n){"use strict";var i=(n("SsD8"),n("MMfn"),n("b9+a"),n("hGD4"),n("myns"),n("kwho"),n("mYfn"),n("MaFp"),n("v8oQ"),n("0jnR"),n("kWLG"),n("Ft6V"),n("rlkg")),a=n("Klx4"),o=n("o3Ny"),r=n("Uc7i"),s=n("gZZ8");n.d(e,"a",function(){return i.a}),n.d(e,"e",function(){return a.a}),n.d(e,"d",function(){return o.a}),n.d(e,"b",function(){return r.a}),n.d(e,"c",function(){return s.a})},C0ag:function(t,e,n){"use strict";e.a={data:function(){return{visible:!1}},props:{showCancelBtn:{type:Boolean,default:!0},title:{type:String,default:""},message:{type:String,default:""},cancelBtnTxt:{type:String,default:"取消"},cnfrmBtnTxt:{type:String,default:"确定"}},methods:{btnClickHandler:function(t){this.visible=!1,this.actionHander(t)}}}},F7NO:function(t,e,n){t.exports=n.p+"static/img/loading.b8d5a3f.gif"},Ft6V:function(t,e,n){"use strict";var i=n("pFYg");n.n(i),n("Vo7i")},HRBX:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"indicator-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"indicator-overlay"},[i("div",{staticClass:"indicator"},[i("img",{attrs:{src:n("F7NO")}})])])])},a=[],o={render:i,staticRenderFns:a};e.a=o},IBLO:function(t,e,n){"use strict";function i(t){n("ZA9d")}var a=n("C0ag"),o=n("whkc"),r=n("VU/8"),s=i,c=r(a.a,o.a,!1,s,"data-v-74b9fb2a",null);e.a=c.exports},JZI3:function(t,e,n){"use strict";var i=n("woOf"),a=n.n(i),o=n("fZjL"),r=n.n(o),s=n("//Fk"),c=n.n(s),u=n("7+uW"),d=n("IBLO"),l=u.a.extend(d.a),f=function(){var t=null;return function(){return t||(t=new l({el:document.createElement("div")})),t}}(),v={showCancelBtn:!0,type:2,message:"",title:"",cancelBtnTxt:"取消",cnfrmBtnTxt:"确定"},p=null,g=null,m=function(t){"confirm"==t?p&&p(t):"cancel"==t&&g&&g(t)},b=function(t){return new c.a(function(e,n){document.body.appendChild(t.$el),u.a.nextTick(function(){t.visible=!0,t.actionHander=m,p=e,g=n})})},h=function(t){var e=f();return r()(t).forEach(function(n){e[n]=t[n]}),b(e)},w=function(t){var e={};return"string"==typeof t?e.message=t:e=t,h(a()({},v,e,{type:1,showCancelBtn:!1}))},C=function(t){var e={};return"string"==typeof t?e.message=t:e=t,h(a()({},v,e,{type:2,showCancelBtn:!0}))};e.a={alert:w,open:C}},Klx4:function(t,e,n){"use strict";var i=n("Vo7i"),a={FIRSTCATE:"/help/v1/app/get/firstcate",PROBLEMLIST:"/help/v1/app/get/problemlist",COMMONPROBLEM:"/help/v1/app/get/commproblem",PROBLEMDETAILS:"/help/v1/app/get/problemdetails",PROBLEMVIEWS:"/help/v1/app/update/problemviews",PROBLEMSTATE:"/help/v1/app/update/problemstate"},o=function(t){return Object(i.b)(a.FIRSTCATE,t)},r=function(t){return Object(i.b)(a.PROBLEMLIST,t)},s=function(t){return Object(i.b)(a.COMMONPROBLEM,t)},c=function(t){return Object(i.b)(a.PROBLEMDETAILS,t)},u=function(t){return Object(i.b)(a.PROBLEMVIEWS,t)},d=function(t){return Object(i.b)(a.PROBLEMSTATE,t)};e.a={getFirstcate:o,getProblemList:r,getCommonProblem:s,getProblemDetails:c,updateProblemViews:u,updateProblemState:d}},MMfn:function(t,e,n){"use strict";var i=n("woOf"),a=(n.n(i),n("pFYg"));n.n(a),n("Vo7i")},MaFp:function(t,e,n){"use strict";var i=n("pFYg");n.n(i),n("Vo7i")},SsD8:function(t,e,n){"use strict";var i=n("pFYg");n.n(i),n("Vo7i")},Uc7i:function(t,e,n){"use strict";var i=n("Vo7i"),a={LIST:"/goods/v1/app/activities/goods",TABS:"/goods/v1/app/activities/tabs",TITLE:"/goods/m/activities/h5page",ALLGOODS:"/goods/v1/app/tabs/goods"},o=function(t){return Object(i.a)(a.LIST,t)},r=function(t){return Object(i.a)(a.TABS,t)},s=function(t){return Object(i.a)(a.TITLE,t)},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(i.a)(a.ALLGOODS,{tabid:t,pageindex:e,pagesize:n})};e.a={getGoodsList:o,getTabs:r,getTitle:s,getAllGoods:c}},UoMW:function(t,e){!function(t,e){function n(){var t=i.clientWidth;"number"==typeof t&&(i.style.fontSize=t/o*100+"px")}var i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",o=750;"function"==typeof t.addEventListener&&(e.addEventListener(a,n,!1),t.addEventListener("DOMContentLoaded",n,!1),n())}(document,window),function(){if(window.devicePixelRatio&&devicePixelRatio>=2){var t=document.createElement("div");t.style.border=".5px solid transparent",document.body.appendChild(t),1==t.offsetHeight&&document.querySelector("html").classList.add("hairlines"),document.body.removeChild(t)}}()},Vo7i:function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new r.a(function(n,i){c.a.get(t,{params:e}).then(function(t){n(t.data)}).catch(function(t){i(t)})})}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new r.a(function(n,i){c.a.post(t,e).then(function(t){n(t.data)}).catch(function(t){i(t)})})}e.a=i,e.b=a;var o=n("//Fk"),r=n.n(o),s=(n("7+uW"),n("mtWM")),c=n.n(s),u=n("X2Oc");c.a.defaults.baseURL=API_BASE_URL,c.a.defaults.timeout=15e3,c.a.interceptors.request.use(function(t){var e=window.navigator.userAgent.toLowerCase().indexOf("android")>-1;t.headers.source="h5";var n="";if(e?e&&(n=window.androidHeaders):n=window.iOSHeaderInfo,""!=n)for(var i in n)t.headers[i]=n[i];return t},function(t){return r.a.reject(t)}),c.a.interceptors.response.use(function(t){return 401==t.data.code&&Object(u.d)(),t},function(t){return r.a.reject(t)})},X2Oc:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return s});var i=(function(){/(micromessenger|webbrowser)/g.test(window.navigator.userAgent.toLowerCase())}(),function(t){return function(e){var n=t.match(new RegExp(e+"=([^&]*)"));return n?n[1]:null}}),a=function(){return/(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent.toLowerCase())?"ios":"android"},o=function(t){try{if("ios"===a()){var e=function(e){t&&t(e)};window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener?document.addEventListener("WebViewJavascriptBridgeReady",function(){e(WebViewJavascriptBridge)},!1):document.attachEvent("onWebViewJavascriptBridgeReady",function(){e(WebViewJavascriptBridge)})}else t&&t(manjdSales)}catch(t){}},r=function(t){var e=window.navigator.userAgent.toLowerCase(),n=e.match(/iOS-\d*/),i=null;if(n&&(i=n.split("-")[1]),i<163&&o(),window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var a=document.createElement("iframe");a.style.display="none",a.src="https://__bridge_loaded__",document.documentElement.appendChild(a),setTimeout(function(){document.documentElement.removeChild(a)},0)},s=function(){o(function(t){"ios"===a()?t.callHandler("goToLogin",null,function(t){}):t.goToLogin()})}},XPo6:function(t,e,n){"use strict";var i=n("7+uW"),a=n("5uUU"),o=i.a.extend(a.a),r=null,s=function(){return r||(r=new o({el:document.createElement("div")})),r},c=function(t){var e=s();e.visible||(e.title="string"==typeof t?t:t.title||"",document.body.appendChild(e.$el),i.a.nextTick(function(){e.visible=!0}))},u=function(){r&&(r.visible=!1)};e.a={show:c,close:u}},ZA9d:function(t,e){},ZjTf:function(t,e,n){"use strict";var i=n("Apws"),a=n("XPo6"),o=n("JZI3"),r=n("X2Oc");e.a={data:function(){return{pageLoaded:!1,flag:0,detailid:null,sortid:null,title:"",list:[],usefulFlag:0,question:"",answer:null}},methods:{init:function(){var t=this;this.title=this.getQueryVariable("title"),this.detailid=this.getQueryVariable("detailid"),this.sortid=this.getQueryVariable("sortid"),this.flag=this.getQueryVariable("flag"),document.title=decodeURIComponent(this.title),this.$nextTick(function(){t.getProblemDetails(),t.updateProblemViews()})},getProblemDetails:function(){var t=this;a.a.show("加载中..."),i.e.getProblemDetails({qa_detail_id:this.detailid,qa_sort_id:this.sortid,flag:this.flag}).then(function(e){t.pageLoaded=!0,a.a.close(),1===e.code?(t.list=e.data.other_problemlist,t.usefulFlag=e.data.useful_flag,t.question=e.data.qa_title_name,t.answer=e.data.qa_answer.replace(/(<img\b.*?)style=".*?"/g,"$1")):401===e.code?Object(r.d)():t.reqFailed()}).catch(function(t){a.a.close()})},updateProblemState:function(t){var e=this;2===t&&this.doCall("没有帮助到您"),i.e.updateProblemState({qa_detail_id:this.detailid,useful_flag:t}).then(function(n){1===n.code?e.usefulFlag=t:401===n.code&&Object(r.d)()}).catch(function(t){})},updateProblemViews:function(){i.e.updateProblemViews({qa_detail_id:this.detailid}).then(function(t){}).catch(function(t){})},doCall:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";o.a.open({cnfrmBtnTxt:"呼叫",message:"<p>"+t+"尝试联系客服</p><p>400-8988-111</p>"}).then(function(t){window.location.href="tel:400-8988-111"},function(t){}).catch(function(t){})},getQueryVariable:function(t){for(var e=decodeURIComponent(window.location.search.substring(1)),n=e.split("&"),i=0;i<n.length;i++){var a=n[i].split("=");if(a[0]==t)return a[1]}return!1},toDetailPage:function(t){var e=t.currentTarget,n=e.getAttribute("data-detailid"),i=e.getAttribute("data-sortid");window.location.href="./detail.html?detailid="+n+"&sortid="+i+"&title="+this.title}},watch:{$route:"init"},mounted:function(){this.init()}}},"b9+a":function(t,e,n){"use strict";n("Vo7i")},bmDO:function(t,e,n){"use strict";function i(t){n("uyTz")}var a=n("ZjTf"),o=n("vITq"),r=n("VU/8"),s=i,c=r(a.a,o.a,!1,s,null,null);e.a=c.exports},divp:function(t,e){},etjn:function(t,e,n){"use strict";e.a={data:function(){return{visible:!1}},props:{title:{type:String,default:""}}}},gZZ8:function(t,e,n){"use strict";var i=n("Vo7i"),a=function(t){return Object(i.a)("agent/v1/app/share",{shareId:t})},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(i.a)("store/v1/app/storename",{storeId:t,getCurrStore:e})},r=function(t,e){return Object(i.b)("agent/v1/app/goods",{shareId:t,goodsSkuIds:e})},s=function(t){return Object(i.a)("account/v1/app/iminfo",{storeId:t})};e.a={agentShare:a,agentAgree:o,agentGoods:r,agentInfo:s}},hGD4:function(t,e,n){"use strict";var i=n("pFYg");n.n(i),n("Vo7i")},kWLG:function(t,e,n){"use strict";n("Vo7i")},kwho:function(t,e,n){"use strict";n("Vo7i")},mYfn:function(t,e,n){"use strict";var i=n("pFYg");n.n(i),n("Vo7i")},myns:function(t,e,n){"use strict";var i=n("pFYg");n.n(i),n("Vo7i")},o3Ny:function(t,e,n){"use strict";var i=n("Vo7i"),a={GETPENDINGCOMMENT:"/goodsdetail/v1/app/getpendingcomment",GETCOMMENTED:"/goodsdetail/v1/app/getcommented",COMMITCOMMENT:"/goodsdetail/v1/app/commitcomment",UPLOADCOMMENTPIC:"/goodsdetail/v1/app/uploadcommentpic"},o=function(t){return Object(i.a)(a.GETPENDINGCOMMENT,t)},r=function(t){return Object(i.a)(a.GETCOMMENTED,t)},s=function(t){return Object(i.b)(a.COMMITCOMMENT,t)},c=function(t){return Object(i.b)(a.UPLOADCOMMENTPIC,t)};e.a={getPendingComment:o,getCommented:r,commitComment:s,uploadCommentPic:c}},qp8V:function(t,e){!function(){var t=navigator.userAgent.toLowerCase().indexOf("android")>-1,e=null;if(t){try{e=JSON.parse(window.manjdSales.getHeaderInfo())}catch(t){e=null}window.androidHeaders=e}}()},rlkg:function(t,e,n){"use strict";var i=n("Vo7i"),a="/college/v1/app/",o={BANNER:a+"getbanner",CATE:a+"getarticlesort",ARTICLE:a+"getarticle",DETAIL:a+"getarticledetail",PV:a+"editarticlepv",ISUSE:a+"isuseful",BANNER_HIT:a+"editbannerhits",DETAIL_RECOMMEND:a+"getarticlerecommend"},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return Object(i.a)(o.BANNER,{pageindex:t,pagesize:e})},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return Object(i.a)(o.CATE,{pageindex:t,pagesize:e})},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return Object(i.a)(o.ARTICLE,{type:t,sortid:e,pageindex:n,pagesize:a})},u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return Object(i.a)(o.DETAIL_RECOMMEND,{sortid:t,articleid:e,pageindex:n,pagesize:a})},d=function(t){return Object(i.a)(o.DETAIL,{id:t})},l=function(t){return Object(i.a)(o.PV,{articleid:t})},f=function(t){return Object(i.a)(o.BANNER_HIT,{bannerid:t})},v=function(t){return Object(i.b)(o.ISUSE,t)};e.a={getBanner:r,getCate:s,getRecommend:c,getArticleDetail:d,recordArticlePV:l,recordIsUseful:v,recordBannerHit:f,getDetailRecommend:u}},uyTz:function(t,e){},v8oQ:function(t,e,n){"use strict";n("Vo7i")},vITq:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pageLoaded?n("div",{staticClass:"help-detail-wrapper"},[n("div",{staticClass:"content"},[n("div",{staticClass:"question-wrap"},[n("p",[n("span",[t._v("问题：")]),t._v(t._s(t.question))])]),t._v(" "),n("div",{staticClass:"answer-wrap"},[n("span",{staticClass:"hd"},[t._v("回答：")]),t._v(" "),n("div",{staticClass:"answer",domProps:{innerHTML:t._s(t.answer)}})])]),t._v(" "),n("div",{staticClass:"userful-wrap"},[t._m(0),t._v(" "),0===t.usefulFlag?n("div",{staticClass:"operate-box"},[n("div",{staticClass:"useful-box tb1px",on:{click:function(e){t.updateProblemState(1)}}},[n("i"),t._v(" "),n("span",[t._v("有用")])]),t._v(" "),n("div",{staticClass:"unuseful-box tb1px",on:{click:function(e){t.updateProblemState(2)}}},[n("i"),t._v(" "),n("span",[t._v("无用")])])]):1===t.usefulFlag?n("div",{staticClass:"box thanks-feedback"},[t._v("\n\t\t\t\t感谢您的反馈~\n\t\t\t")]):n("div",{staticClass:"box have-question",on:{click:function(e){t.doCall("没有帮助到您")}}},[t._v("\n\t\t\t\t有问题联系客服\n\t\t\t")])]),t._v(" "),t.list.length>0?n("div",{staticClass:"similar-question"},[n("p",{staticClass:"hd"},[t._v("还有其它问题？")]),t._v(" "),n("ul",t._l(t.list,function(e){return n("li",{key:e.qa_detail_id,attrs:{"data-detailid":e.qa_detail_id,"data-sortid":e.qa_sort_id},on:{click:t.toDetailPage}},[n("span",[t._v(t._s(e.qa_detail_name))]),t._v(" "),n("i")])}))]):t._e(),t._v(" "),n("div",{staticClass:"contact",on:{click:function(e){t.doCall()}}},[n("span",[t._v("联系客服")]),t._v(" "),n("i"),t._v(" "),n("span",[t._v("400-8988-111")])])]):t._e()},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-wrap"},[n("em",{staticClass:"line tb1px"}),t._v(" "),n("span",[t._v("以上方案对您是否有用")])])}],o={render:i,staticRenderFns:a};e.a=o},whkc:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cnfrmbox-wrap",on:{touchmove:function(t){t.preventDefault()}}},[n("transition",{attrs:{name:"cnfrmbox-bg-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"cnfrmbox-bg"})]),t._v(" "),n("transition",{attrs:{name:"cnfrmbox-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"cnfrmbox"},[""!=t.title?n("div",{staticClass:"cnfrmbox-hd"},[n("span",{staticClass:"hd-txt"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),n("div",{staticClass:"cnfrmbox-bd"},[n("span",{staticClass:"bd-message",domProps:{innerHTML:t._s(t.message)}})]),t._v(" "),n("div",{staticClass:"cnfrmbox-ft"},[t.showCancelBtn?n("a",{staticClass:"btn cancel-btn",attrs:{href:"javascript:;"},on:{click:function(e){e.preventDefault(),t.btnClickHandler("cancel")}}},[t._v(t._s(t.cancelBtnTxt))]):t._e(),t._v(" "),n("a",{staticClass:"btn ok-btn",attrs:{href:"javascript:;"},on:{click:function(e){e.preventDefault(),t.btnClickHandler("confirm")}}},[t._v(t._s(t.cnfrmBtnTxt))])])])])],1)},a=[],o={render:i,staticRenderFns:a};e.a=o}},["5pF4"]);
//# sourceMappingURL=detail.bef7922544e7f5179270.js.map