<template>
  <div>
    <!--section-->
    <section class="page-group">
      <div class="content">
        <div class="banner" style="">
          <div class="clearfix">
            <div class="pull-left day">14</div>
            <div class="pull-left date">
              <p>
                <span class="mr10">星期三</span>
                <span>农历二月十六</span>
              </p>
              <p>2018年三月</p>
            </div>
          </div>
          <div class="temp">
            <span class="mr10">小雨</span>
            <span>气温24°C</span>
          </div>
        </div>

        <div class="menu-index">
          <router-link to="/property" class="item">
            <img class="img" src="@/assets/images/icons/menu1.svg" alt="">
            <p class="txt">物业缴费</p>
          </router-link>
          <a href="#" class="item">
            <img class="img" src="@/assets/images/icons/menu2.svg" alt="">
            <p class="txt">生活缴费</p>
          </a>
          <a href="#" class="item">
            <img class="img" src="@/assets/images/icons/menu3.svg" alt="">
            <p class="txt">投诉建议</p>
          </a>
          <a href="#" class="item">
            <img class="img" src="@/assets/images/icons/menu4.svg" alt="">
            <p class="txt">报事报修</p>
          </a>
          <a href="#" class="item">
            <img class="img" src="@/assets/images/icons/menu5.svg" alt="">
            <p class="txt">全部服务</p>
          </a>
        </div>

        <div class="tips">
          <i class="icon notice"></i>
          <a class="f24">通知： 关于团转到家植树节活动的通知</a>
          <a class="pull-right gray">更多<i class="ml10 icon arrow"></i></a>
        </div>

        <h1 class="h1">
          <em class="pull-left">生活服务</em>
          <a class="pull-right gray">更多<i class="ml10 icon arrow"></i></a>
        </h1>

        <div class="life-list">
          <a href="#" class="item">
            <div class="img-box">
              <img class="img" src="@/assets/images/test/img1.jpg" alt="">
            </div>
            <p class="txt">日常保洁日常保洁日常保洁</p>
          </a>
        </div>
      </div>

      <div class="content mt20">
        <h1 class="h1">
          <em class="pull-left">团转商城</em>
          <a class="pull-right gray">更多<i class="ml10 icon arrow"></i></a>
        </h1>

        <div class="shop-list mb70">
          <a href="#" class="item">
            <div class="img-box">
              <img class="img" src="@/assets/images/test/img1.jpg" alt="">
            </div>
            <p class="p1">每次章鱼陶瓷刀6寸1把(系列)每次章鱼陶瓷刀6寸1把(系列)</p>
            <p class="p2">
              <i class="icon tp mr10"></i>
              <span class="orange">29.00</span>
              <span class="shop-mark yellow-bg">满减</span>
              <span class="shop-mark pink-bg">五折</span>
            </p>
            <p class="p3">
              <span class="pull-left">¥170.00</span>
              <span class="gray pull-right">已售1096</span>
            </p>
          </a>
        </div>
      </div>
    </section>

    <!--pop-->
    <popup v-model="showPop">
      <div class="popup1">
        <p style="height:300px;">hahahahahahah</p>
      </div>
    </popup>
    <!--pop-->
  </div>
</template>

<script>
  import {Marquee, MarqueeItem ,Popup } from 'vux'

  export default {
    name: "Index",
    components:{
      Marquee,
      MarqueeItem,
      Popup,
    },
    data(){
      return{
        data:[],
        busy:false,
        showPop:false
      }
    },
    methods:{
      pop:function(){
        this.showPop=!this.showPop;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/index.css';

  .popup1{
    z-index: 99999;
  }
</style>
