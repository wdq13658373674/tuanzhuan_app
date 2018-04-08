<template>
  <section class="page-group">
    <div class="content">
      <router-link to="search" class="search-link" append>请输入商品名称</router-link>
    </div>

    <swiper class="index-swiper" :list="swiperList" height="100%" dots-class="dot" :show-desc-mask="false"></swiper>

    <div class="menu-shop">
      <router-link :to="{ name: 'ShopCategory', params: { title: '休闲食品' }}" class="item">
        <img class="img" src="@/assets/images/img/d_menu1.png" alt="">
        <p class="txt">休闲食品</p>
      </router-link>
      <a href="#" class="item">
        <img class="img" src="@/assets/images/img/d_menu2.png" alt="">
        <p class="txt">蔬菜水果</p>
      </a>
      <a href="#" class="item">
        <img class="img" src="@/assets/images/img/d_menu3.png" alt="">
        <p class="txt">粮油调味</p>
      </a>
      <a href="#" class="item">
        <img class="img" src="@/assets/images/img/d_menu4.png" alt="">
        <p class="txt">饮料酒水</p>
      </a>
      <router-link to="categorys" class="item" append>
        <img class="img" src="@/assets/images/img/d_menu5.png" alt="">
        <p class="txt">全部分类</p>
      </router-link>
    </div>

    <div class="content mt20">
      <div class="shop-timer mt60">
        <span>限时购</span>
        <clocker  time="2018-03-31 16:37">
          <span class="timer m">%H</span>
          <span>:</span>
          <span class="timer s">%M</span>
          <span>:</span>
          <span class="timer s">%S</span>
        </clocker>
      </div>

      <ul class="shop-limit-list">
        <li class="item">
          <router-link to="detail" append>
            <div class="img-box">
              <img src="@/assets/images/test/img4.png" alt="" class="img">
            </div>
            <p class="p1">
              <i class="tp"></i>
              <span>5.00</span>
            </p>
            <p class="p2">
              ¥4.55
            </p>
          </router-link>
        </li>
      </ul>

      <p class="mt40 mb40 text-center">
        <a class="all" href="#">查看全部 <i class="arrow"></i></a>
      </p>
    </div>

    <div class="content mt20">
      <h3 class="h3 mt40">
        <span class="tit">团转精选</span>
        <span class="tit-line"></span>
      </h3>

      <div class="shop-list mb40">
        <a href="#" class="item">
          <div class="img-box">
            <img class="img" src="@/assets/images/test/img4.png" alt="">
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

    <div class="content mt20">
      <h3 class="h3 mt40">
        <span class="tit">新品首发</span>
        <span class="tit-line"></span>
      </h3>

      <div class="shop-list mb70">
        <a href="#" class="item">
          <div class="img-box">
            <img class="img" src="@/assets/images/test/img4.png" alt="">
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
</template>

<script>
  import {Clocker,Swiper} from 'vux'
  export default {
    name: "Shop",
    components:{
      Swiper,
      Clocker,
    },
    data(){
      return {
        swiperList:[{
          url: '/',
          img: 'https://static.vux.li/demo/1.jpg',
          title: ''
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: ''
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }],
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/shop.css';


</style>
<style lang="scss">
  @import "../../core/base";
  .index-swiper{
    height:rem(310);

    .vux-icon-dot{
      @include bgcolor-alpha(rgba(#000,.8));
    }
  }
</style>
