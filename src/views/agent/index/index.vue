<template>
    <div class="wrapper"> 
        <div class="agent-intro">
            代理好友店铺的商品，卖一件赚一件，上不封顶。机会难得，赶快代理吧！   
        </div>
        <div class="emputy" v-if="!isShowGood">
            <img src="../../../assets/images/emputy.png" alt="">
            <p>加载失败，请稍后再试</p>
        </div>
        <div v-else>
            <div class="agent-title">
                请选择你要代理的商品   
            </div>
            <div class="product-list" v-for="(item,key) in agentData">
                <div class="check-list">
                    <input class="checkItem" type="checkbox" :id="'checkItem'+key" :value="item.skuid" v-model="checkData">
                    <label class="icon-round" :for="'checkItem'+key"></label>
                </div>
                <div class="product-pic">
                    <img :src="item.picuri" alt="">    
                </div>   
                <div class="product-info">
                    <p class="goods-info-tit">{{item.title}}</p>
                    <p class="goods-info-spec">规格：{{item.skuattrnames}}</p>
                    <p class="goods-info-price">零售价：<span>¥ {{item.saleprice.toFixed(2)}}</span></p>
                    <p class="goods-info-price">你能赚：<span>¥ {{item.agentamount.toFixed(2)}}</span></p>
                </div> 
            </div>   
        </div>            
        <div class="agent-ft">
            <input type="checkbox" class="agent-agree" id="agent-agree" v-model="agentAgree" value="true">
            <label for="agent-agree">代理即视为遵守<a href="agreement.html">《代理服务协议》</a></label>
        </div>
        <div class="agent-bot">
            <div class="all-select">
                <input id="quan" class="check-all" type="checkbox" v-model="isAllChecked">
                <label for="quan">
                    全选
                </label>
            </div>
            <a class="agent-sure" @click="openLink">
                立刻代理
            </a>
        </div>  
    </div>
</template>

<script>
    import { Agent } from '@/apis/';
    import { getQueryParam, throttle ,InitBridge, setupWebViewJavascriptBridge} from '@/utils/common';
    import { fetch } from '@/utils/fetch';
    import Indicator from '@/components/common/indicator';
    import Toast from '@/components/common/toast';
    import confirmBox from "@/components/common/confirm-box";
    import '@/assets/styles/common';
    
    export default {
        data(){
            return {
                isLogined: !0,
                isShowGood: !0,
                shareData: {
                    title: '这里有一个躺着赚钱的秘籍',
                    desc: '0元开店，甩手掌柜，分享就能赚钱，每天都有现金进账~',
                    url: ''
                },
                checkData:[],
                agentData:[],
                agentAgree:'true',
                shareid:null,
                supplierid:null,
                shopid:null,
                agentInfo:null
            }
        },
        computed:{
            isAllChecked:{
                set(bool){
                    if (!bool) {
						this.checkData.splice(0);
						return;
					}
                    this.agentData.forEach((item, idx) => {
						if (this.checkData.indexOf(item.skuid) < 0) {
							this.checkData.push(item.skuid);
						}
					});
                },
                get(){
                    return this.checkData.length === this.agentData.length;
                }
            }
        },
        watch:{
            checkData:{
                handler(e){
                    if(this.agentData.length){
                        var allLength = this.agentData.length
                    }   
                }
            },
            deep:true
        },
        methods: {
            checkAll(e){
                var checkObj = document.querySelectorAll('.checkItem')
                if(e.target.checked){
                    for(var i=0;i<checkObj.length;i++){
                        if(!checkObj[i].checked){
                            this.checkData.push(checkObj[i].value)
                        }
                    }
                }else{
                    this.checkData = []
                }
            },
            getAgentGoods(){
                Indicator.show('加载中...');
                Agent.agentShare(this.shareid).then((res) => {
                    Indicator.close();
                    if (res.code === 1) { 
                        this.agentData = res.data
                        this.initCheckItems(res.data)
                    }else{
                        this.isShowGood = !1
                    }
                }).catch((err)=>{
                    console.log(err);
                });
            },
            getAgentInfo(){
                 Agent.agentInfo(this.shopid).then((res) => {
                    if (res.code === 1) { 
                        this.agentInfo = res.data
                        this.agentInfo['supplierid'] = this.supplierid
                    }
                }).catch((err)=>{
                    console.log(err);
                });
            },
            openLink(){
                let agentInfoJson = JSON.stringify( this.agentInfo );
                if(!this.agentAgree){
                    Toast('请勾选代理服务协议')
                }else if(this.checkData && this.checkData.length == 0){
                    Toast('请选择至少一款商品代理')
                }else{
                    Indicator.show('加载中...');
                    Agent.agentGoods(this.shareid,this.checkData).then((res) => {
                        Indicator.close();
                        if (res.code === 1) { 
                            Toast('代理成功')
                            setTimeout(()=>{
                                if (this.isAndroid) {
                                    InitBridge((bridge) => {
                                        bridge.pushAgentAcceptInvitationMethod(agentInfoJson);
                                    }); 
                                }else{
                                    setupWebViewJavascriptBridge((bridge) => {
                                        bridge.callHandler('pushAgentAcceptInvitationMethod',this.agentInfo,()=>{})
                                    }); 
                                }
                            },1000)
                        }else if(res.code === 700){
                            confirmBox.open({
                                'message' : `<p>您已经代理过商品，是否立即查看</p>`,
                                'cnfrmBtnTxt': '是',
                                'cancelBtnTxt': '否'
                            }).then(
                                (resolve) => {
                                    if (this.isAndroid) {
                                        InitBridge((bridge) => {
                                            bridge.pushAgentAcceptInvitationMethod(agentInfoJson);
                                        }); 
                                    }else{
                                        setupWebViewJavascriptBridge((bridge) => {
                                            bridge.callHandler('pushAgentAcceptInvitationMethod',this.agentInfo,()=>{})
                                        }); 
                                    }
                                }, 
                                reject => {
                                    if (this.isAndroid) {
                                        InitBridge((bridge) => {
                                            bridge.goToHomeMethod();
                                        }); 
                                    }else{
                                        setupWebViewJavascriptBridge((bridge) => {
                                            bridge.callHandler('goToHomeMethod',()=>{})
                                        }); 
                                    }
                                }
                            ).catch((err) => {
                                console.log(err);
                            });
                        }else{
                            Toast(res.message)
                            setTimeout(()=>{
                                if (this.isAndroid) {
                                    InitBridge((bridge) => {
                                        bridge.pushAgentAcceptInvitationMethod(agentInfoJson);
                                    }); 
                                }else{
                                    setupWebViewJavascriptBridge((bridge) => {
                                        bridge.callHandler('pushAgentAcceptInvitationMethod',this.agentInfo,()=>{})
                                    }); 
                                }
                            },1000);
                        }
                    }).catch((err)=>{

                    });   
                }
            },
            initCheckItems(listData){
                
				if(!listData){
					return;
				}
				if(listData.length<=0){
					return ;
				}
				listData.forEach((item, idx) => {
					if (this.checkData.indexOf(item.skuid)<0) {
						this.checkData.push(item.skuid);
					}
                });
                
			},
            init(){
                let qs = getQueryParam(location.search);
                let shopId = qs('shopid') 
                let shareId = qs('shareId') 
                let sharesource = qs('mjd_from')
                this.supplierid = qs('supplierId')
                this.shareid = shareId
                this.shopid = shopId
                localStorage.setItem('shopId',shopId);
                localStorage.setItem('shareId',shareId);
                localStorage.setItem('sharesource',sharesource);
                this.isAndroid = window.navigator.userAgent.toLowerCase().indexOf('android') > -1;
            }
        },
        mounted(){
            this.init()
            this.getAgentGoods()
            this.getAgentInfo()
        }
    }
</script>
<style scoped>
    .emputy{
        width:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        color: #E2A481;
        font-size:0.28rem;
    }
    .emputy img{
        width:2.8rem;
        height:2.4rem;
        margin-top:2rem;
    }
    .wrapper{
        overflow: hidden;
        padding-bottom:2.1rem;
    }
    .agent-agree{
        display:inline-block;
        width:0.28rem;
        height:0.28rem;
        border:0.02rem solid #ccc;
        border-radius:1rem;
        position:absolute;
        left:1.43rem;
        top:0.33rem;
    }
     .agent-agree:checked{
        width:0.28rem;
        height:0.28rem;
        background: url(../../../assets/images/agent.png) 0 0/ cover;
        position:absolute;
        left:1.43rem;
        top:0.33rem;
        z-index:2;
        border:none;
    }
    .agent-ft{
        width:100%;
        height:1rem;
        line-height:1rem;
        text-align:center;
        font-size:0.26rem;
        float:left;
        position:fixed;
        bottom:1rem;
        background:#fff;
        border-top:1px solid #E5E5E5;
    }
    .agent-ft a{
        color:#4D7BFE;
    }
    .agent-title{
        width:100%;
        height:1rem;
        line-height:1rem;
        font-size:0.3rem;
        color:#333;
        background:#F5F5F5;
        text-align:center;
        margin-bottom:0.46rem;
    }
    .agent-intro{
        background:linear-gradient(90deg,#FC8329 0%,#F46918 100%);
        padding:0.39rem 0.54rem;
        font-size:0.28rem;
        line-height:0.4rem;
        color:#fff;
    }
    .container {
        padding-bottom: .5rem;
        background-color: #ffeedf;
        font-size:0.3rem;
    } 
    input[type=checkbox]{
		display: ;
	}
    .check-list{
        display:block;
        width:0.92rem;
        height:2rem;
        float:left;
        line-height:0.92rem;
        position:relative;
    }
    .product-list{
        margin-bottom:0.45rem;
        float:left;
    }
    .product-pic{
        width:2rem;
        height:2rem;
        float:left;
    }
    .product-pic img{
        width:2rem;
        height:2rem;
    }
    .product-info{
        width:4rem;
        float:left;
        margin-left:0.24rem;
        line-height:0.37rem;
    }
    .goods-info-tit{
        font-family:PingFangSC-Light;
        font-size:0.26rem;
        color:#333;
    }
    .goods-info-spec{
        font-size:0.24rem;
        color:#999;
        margin-top:0.08rem;
        margin-bottom:0.4rem;
    }
    .goods-info-price{
        font-size:0.26rem;
        color:#666;
        margin-top:0.12rem
    }
    .goods-info-price span{
        color:#FF681D;
    }
    .icon-round{
        display:inline-block;
        width:0.36rem;
        height:0.36rem;
        border:0.02rem solid #ccc;
        border-radius:1rem;
        position:absolute;
        left:0.3rem;
        top:0.8rem;
    }
    .checkItem:checked{
        width:0.4rem;
        height:0.4rem;
        background: url(../../../assets/images/selected.png) 0 0/ cover;
        position:absolute;
        left:0.3rem;
        top:0.8rem;
        z-index:2;
    }
   
    .check-all{
        position:absolute;
        left:0.3rem;
        top:0.3rem;
        width:0.4rem;
        height:0.4rem;
        border:0.02rem solid #ccc;
        border-radius:1rem;
    }
    .check-all:checked{
        width:0.4rem;
        height:0.4rem;
        background: url(../../../assets/images/selected.png) 0 0/ cover;
        position:absolute;
        left:0.3rem;
        top:0.3rem;
        z-index:2;
        border:none;
     }
    .agent-bot{
        width:100%;
        height:1rem;
        line-height:1rem;
        box-shadow:0px -2px 8px 0px rgba(219,219,219,0.5);
        left:0;
        bottom:0;
        position:fixed;
        font-size:0.32rem;
        background:#fff;
    }
    .all-select{
        width:2.5rem;
        float:left;
        text-indent:0.92rem;
        position:relative;
        color:#333;
    }
    .agent-sure{
        width:4.9rem;
        text-align:center;
        float:right;
        border-left:1px solid #ccc;
        background:#FF681D;
        color:#fff;
        font-family:PingFangSC-Regular;
    }
</style>
