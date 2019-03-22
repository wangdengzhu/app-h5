<template>
  <div class="wrapper" ref="wrapper">
    <main class="container">
      <div class="first-page">
        <img src="../../../assets/images/share/firstpage.png" alt class="w100">
      </div>
			<img src="../../../assets/images/share/plat.png" alt class="w100">
			<div class="section advantage">
				<div class="item">
						<div class="item-title">
								<i class="icon icon1"></i>
								<p>货源保障</p>
						</div>
						<p class="item-desc">上万款商品均可任意挑选售卖，品牌商直供，100%正品行货</p>
				</div>
				<div class="item">
						<div class="item-title">
								<i class="icon icon3"></i>
								<p>一键分享</p>
						</div>
						<p class="item-desc">一键分享店铺、商品给好友，有人购买，即可获得相应收益</p>
				</div>
				<div class="item">
						<div class="item-title">
								<i class="icon icon2"></i>
								<p>无需进货发货</p>
						</div>
						<p class="item-desc">买家下单后，商家24小时极速发货，并负责所有售后问题</p>
				</div>
				<div class="item">
						<div class="item-title">
								<i class="icon icon4"></i>
								<p>极速到账</p>
						</div>
						<p class="item-desc">好友购买您分享的商品后，销售收益即可快速到账</p>
				</div>
			</div>
			<img src="../../../assets/images/share/free.png" alt class="w100">
      <div class="section advantage">
        <div class="item">
          <div class="item-title">
            <i class="icon icon1"></i>
            <p>自有商品</p>
          </div>
          <p class="item-desc">自主生产的新鲜食品、手工艺品、地方特色</p>
        </div>
        <div class="item">
          <div class="item-title">
            <i class="icon icon2"></i>
            <p>代理帮卖</p>
          </div>
          <p class="item-desc">发展下线代理，好货不愁卖</p>
        </div>
        <div class="item">
          <div class="item-title">
            <i class="icon icon3"></i>
            <p>极速到账</p>
          </div>
          <p class="item-desc">买家确认收货后，收益即可到账</p>
        </div>
        <div class="item">
          <div class="item-title">
            <i class="icon icon4"></i>
            <p>全场包邮</p>
          </div>
          <p class="item-desc">全场所有商品一件也包邮</p>
        </div>
      </div>
      <img src="../../../assets/images/share/title2.png" alt class="w100">
      <div class="section reason-wrap">
        <div class="reason">
          <div class="item item1">
            <p class="left">畅销
							<br>精品行货</p>
            <p class="right">专业团队专注品牌，关注性价比，通过调研、试用、对比等方式精选品牌</p>
          </div>
          <div class="item item2">
            <p class="left">1万+款
              <br>畅销商品
            </p>
            <p class="right">美妆、个护、食品、生鲜、数码等应有尽有，任您挑选</p>
          </div>
          <div class="item item3">
            <p class="left">7天
              <br>无忧退换
            </p>
            <p class="right">商品支持7天无理由退换，您可放心分享给好友购买</p>
          </div>
        </div>
        <div class="show-store">
          <div class="show-title">目前已有
            <span>36000人</span>成功开店
          </div>
          <div class="shopkeeper">
            <div class="item">
              <img src="../../../assets/images/share/avatar1.png" alt class="avatar">
              <p>月入¥2100</p>
              <p>明明的小店</p>
              <p>白领 | 天津</p>
            </div>
            <div class="item">
              <img src="../../../assets/images/share/avatar2.png" alt class="avatar">
              <p>月入¥2700</p>
              <p>大白专营店</p>
              <p>学生 | 昆明</p>
            </div>
            <div class="item">
              <img src="../../../assets/images/share/avatar3.png" alt class="avatar">
              <p>月入¥3600</p>
              <p>宝贝倾心店</p>
              <p>宝妈 | 北京</p>
            </div>
          </div>
        </div>
      </div>
      <img src="../../../assets/images/share/title3.png" alt class="w100">
      <div class="common-question">
        <div class="item">
          <div class="title" @click="showAnswer(0)">
            <span>您在满金店开店的好处是？</span>
            <i :class="showContentIdx == 0 ? 'rotate':''"></i>
          </div>
          <transition name="fade">
            <div
              class="content"
              v-show="showContentIdx == 0"
            >您开店后，可共享满金店上万款畅销商品，挑选任意您喜欢的商品，分享给好友购买，订单完成后，您将获得相应订单收益，满金店商家为您提供完善的发货、退（换）货、售后等服务，您可放心当甩手掌柜。</div>
          </transition>
        </div>
        <div class="item">
          <div class="title" @click="showAnswer(1)">
            <span>满金店如何保障您的收益？</span>
            <i :class="showContentIdx == 1 ? 'rotate':''"></i>
          </div>
          <transition name="fade">
            <div
              class="content"
              v-show="showContentIdx == 1"
            >通过您店铺销售出去的商品，您都可以获得相应订单收益，您可以在个人中心追踪每笔订单的进度，查看每件商品的详细收益，订单完成后，收益即可到账。</div>
          </transition>
        </div>
        <div class="item">
          <div class="title" @click="showAnswer(2)">
            <span>满金店如何确保正品承诺？</span>
            <i :class="showContentIdx == 2 ? 'rotate':''"></i>
          </div>
          <transition name="fade">
            <div
              class="content"
              v-show="showContentIdx == 2"
            >满金店坚持“诚信为本”的经营理念，我们保证所售商品均为正品，如果买家认为购买的商品是假货，并能提供国家相关质检机构的证明文件，我们会按照国家法律规定予以处理。</div>
          </transition>
        </div>
      </div>
			<div class="btn" @click="callAppShare">立即开店</div>
    </main>
  </div>
</template>

<script>
import "@/assets/styles/common";
import { InitBridge, setupWebViewJavascriptBridge } from '@/utils/common';

export default {
  data() {
    return {
      isAndroid: null,
      showContentIdx: null
    };
  },
  methods: {
    showAnswer: function(e) {
      this.showContentIdx = e == this.showContentIdx ? null : e;
    },
    callAppShare(){
      if (this.isAndroid) {
        InitBridge((bridge) => {
            bridge.goOpenStoreMethod();
        }); 
      }else{
        setupWebViewJavascriptBridge((bridge) => {
            bridge.callHandler('goOpenStoreMethod',()=>{})
        }); 
      }
    },
  },
  mounted() {
    this.isAndroid = window.navigator.userAgent.toLowerCase().indexOf('android') > -1;
    document.title = '开店介绍';
  }
};
</script>

<style scoped>
img {
  display: block;
}
.w100 {
  width: 100%;
}
.container {
  padding-bottom: 1.5rem;
  background-color: #ffeedf;
}
.first-page {
  width: 100%;
}
.first-text{
	position: absolute;
	top: 2.5rem;
	left: .55rem;
	font-size: .56rem;
	color: #FF681D;
}
.rotate {
  transform: rotate(180deg);
}
/* .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    } */
.advantage {
  display: flex;
  flex-wrap: wrap;
  padding: 0.38rem 0.4rem 0.7rem;
  margin-left: -0.3rem;
  box-sizing: border-box;
  .item {
    width: 3.2rem;
    margin: 0 0 0.3rem 0.3rem;
    padding: 0.3rem 0.2rem;
    border-radius: 0.2rem;
    border: 0.02rem solid rgba(245, 155, 110, 1);
    background-color: #fff;
    box-sizing: border-box;
    &-title {
      display: flex;
      align-items: center;
      margin-bottom: 0.16rem;
      font-size: 0.32rem;
      color: #4d4d4d;
    }
    &-desc {
      font-size: 0.26rem;
      line-height: 0.34rem;
      color: #808080;
    }
    .icon {
      width: 0.3rem;
      height: 0.32rem;
      margin-right: 0.12rem;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .icon1 {
      background-image: url(../../../assets/images/share/icon_goods.png);
    }
    .icon2 {
      background-image: url(../../../assets/images/share/icon_bag.png);
    }
    .icon3 {
      background-image: url(../../../assets/images/share/icon3.png);
    }
    .icon4 {
      background-image: url(../../../assets/images/share/icon_transport.png);
    }
  }
}
.reason-wrap {
  margin-bottom: 1rem;
}
.reason {
  padding: 0.33rem 0.3rem 0.1rem;
  font-size: 0.26rem;
  color: #808080;
  .item {
    display: flex;
    align-items: center;
    width: 6.9rem;
    height: 1.4rem;
    margin-bottom: 0.3rem;
    padding: 0 0.32rem 0 0.42rem;
    box-sizing: border-box;
    border-bottom: 0.1rem solid;
    border-radius: 0.08rem;
    background-color: #fff;
  }
  .left {
    margin-right: 0.48rem;
    font-size: 0.32rem;
    text-align: center;
  }
  .right {
    width: 4.4rem;
    line-height: 0.34rem;
  }
  .item1 {
    .left {
      color: #ff681d;
    }
    border-color: #f59b6e;
  }
  .item2 {
    .left {
      color: #c58a16;
    }
    border-color: #ffcd6b;
  }
  .item3 {
    .left {
      color: #6abb0d;
    }
    border-color: #91cf4a;
  }
  .item4 {
    .left {
      color: #ff732e;
    }
    border-color: #f59b6e;
  }
}
.show-store {
  width: 6.9rem;
  padding: 0.6rem 0.3rem 0.64rem;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.1rem;
  box-sizing: border-box;
  .show-title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 0.36rem;
    line-height: 0.46rem;
    span {
      display: inline-block;
      width: 1.6rem;
      height: 0.46rem;
      margin: 0 0.2rem;
      background: #ff681d;
      border-radius: 0.04rem;
      color: #fff;
      text-align: center;
    }
  }
  .shopkeeper {
    display: flex;
    margin-left: -0.3rem;
    margin-top: 0.97rem;
  }
  .item {
    position: relative;
    width: 1.9rem;
    height: 2.2rem;
    margin-left: 0.3rem;
    background-color: #f5f5f5;
    text-align: center;
    line-height: 1;
    box-sizing: border-box;
    .avatar {
      width: 1.2rem;
      height: 1.2rem;
      margin: -0.6rem auto 0.23rem;
    }
    p:nth-child(2) {
      margin-bottom: 0.25rem;
      color: #61aa0e;
      font-size: 0.26rem;
    }
    p:nth-child(3) {
      margin-bottom: 0.15rem;
      color: #666;
      font-size: 0.24rem;
    }
    p:last-child {
      color: #999;
      font-size: 0.22rem;
    }
  }
}
.common-question {
  width: 6.9rem;
  margin: 0.35rem auto 0;
  border-radius: 0.08rem;
  background-color: #fff;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1rem;
    padding-left: 0.3rem;
    padding-right: 0.22rem;
    font-size: 0.28rem;
    color: #333;
    line-height: 1rem;
    i {
      width: 0.24rem;
      height: 0.13rem;
      background-image: url(../../../assets/images/share/arrow.png);
      background-size: 100%;
      transition: all 0.3s linear;
    }
  }
  .item:not(:last-child) {
    .title {
      border-bottom: 0.02rem solid #e6e6e6;
    }
    .content {
      border-bottom: 0.2rem solid #f5f5ff;
    }
  }
  .content {
    padding: 0.3rem;
    box-sizing: border-box;
    font-size: 0.26rem;
    color: #999;
    line-height: 0.34rem;
  }
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 7.5rem;
  height: 1rem;
  background: rgba(255, 104, 29, 1);
  font-size: 0.36rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}

.bullet-screen {
  position: fixed;
  left: 0.32rem;
  top: 0.6rem;
  height: 0.54rem;
  line-height: 0.56rem;
  max-width: 4rem;
  padding: 0 0.3rem;
  border-radius: 0.06rem;
  color: #fff;
  font-size: 0.24rem;
  text-align: center;
  background-image: linear-gradient(90deg, #ff8c00 0, #ff5400 100%);
  z-index: 2000;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
}

.bullet-enter-active {
  opacity: 0.7;
  transform: translate3d(0, 0, 0);
  transition: all 0.5s ease-in-out;
}
.bullet-enter {
  opacity: 0;
  transform: translate3d(0, 150%, 0);
}

.bullet-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.bullet-leave-to {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}

</style>
