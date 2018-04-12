<template>
  <div>
    <section class="page-group">
      <swiper class="detail-swiper" :list="swiperList" height="100%" dots-class="dot" :show-desc-mask="false"></swiper>

      <div class="content">
        <div class="product-msg mt20 clearfix">
          <p class="title pull-left">秋冬折扣 zara女装 垫肩装饰夹克 基本款外套 皮外套 07894894712</p>
          <p class="share pull-right">分享</p>
        </div>
        <div class="product-total">
          <i class="mr10 icon tp"></i>
          <span class="f32 orange pull-left">8.00</span>
          <span class="ml29">¥36.00</span>
          <span class="pull-right gray">已售352</span>
        </div>
      </div>

      <h4 class="h4 mt20" @click="popControl=!popControl">
        <span class="txt">选择规格</span>
        <span class="f60 gray"> &rsaquo; </span>
      </h4>

      <p class="mt20 text-center f24">继续拖动，查看图文详情</p>
      <div class="product-content mt20">
        <p><img src="@/assets/images/test/img6.png" alt=""></p>
      </div>
    </section>
    <footer>
      <div class="bottom-fixed cell">
        <div class="shop-cart">
          <p>
                <span class="icon cart">
                    <i class="num">12</i>
                </span>
          </p>
          <p>
            购物车
          </p>
        </div>
        <a href="#" class="btn btn-yellow">加入购物车</a>
        <router-link to="/shop/order" class="btn btn-orange">立刻购买</router-link>
      </div>
    </footer>

    <!--popup-->
    <popup v-model="popControl">
      <div class="popup1">
        <span class="pop-close" @click="popControl=!popControl">X</span>
        <div class="content pop-shop-detail">
          <div class="product-detail clearfix">
            <div class="img-box">
              <img class="img" src="@/assets/images/test/img3.jpg" alt="">
            </div>
            <div class="con-box">
              <p class="p1">
                <i class="icon tp"></i>
                <span>8.00</span>
              </p>
              <p class="p2">¥36.00</p>
              <p class="p3">库存：223</p>
            </div>
          </div>
          <ul class="format-list mb70">
            <li class="item">
              <h5 class="tit">颜色分类</h5>
              <div class="clearfix">
                <label>
                  <input type="radio" name="color" checked>
                  <span class="span active">G01浅灰花纱色 NEW LIGHT GREY MEKLANGE</span>
                </label>
                <label>
                  <input type="radio" name="color">
                  <span class="span">S01 黑色Black</span>
                </label>
                <label>
                  <input type="radio" name="color">
                  <span class="span">02 新奶油色NEW CREME</span>
                </label>
              </div>
            </li>
            <li class="item">
              <h5 class="tit">尺码</h5>
              <div class="clearfix">
                <label>
                  <input type="radio" name="size" checked>
                  <span class="span">55/76A/XS</span>
                </label>
                <label>
                  <input type="radio" name="size">
                  <span class="span">55/76A/XS</span>
                </label>
                <label>
                  <input type="radio" name="size">
                  <span class="span">55/76A/XS</span>
                </label>
              </div>
            </li>
            <li class="item">
              <x-number class="mt20 xnumber" title="购买数量" :value="1" :min="1"></x-number>
            </li>
          </ul>
        </div>

        <footer>
          <div class="bottom-fixed cell">
            <div class="shop-cart">
              <p>
                <span class="icon cart">
                    <i class="num">12</i>
                </span>
              </p>
              <p>
                购物车
              </p>
            </div>
            <a href="#" class="btn btn-yellow">加入购物车</a>
            <a href="#" class="btn btn-orange">立刻购买</a>
          </div>
        </footer>
      </div>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {Swiper,Popup,XNumber} from 'vux'

  export default {
    name: "ShopDetail",
    components:{
      Swiper,
      Popup,
      XNumber
    },
    data(){
      return {
        swiperList:[{
          url: 'javascript:',
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
        popControl:false
      }
    },
    methods:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/shopDetail.css';
</style>
<style lang="scss">
  @import "../../core/base";
  /*swiper*/
  .detail-swiper{
    height:rem(750);
    background: #fff;

    .vux-img{
      background-size: auto !important;
    }

    .vux-icon-dot{
      background-color: #fff;
      border:rem(1) solid $primary;
    }
  }

  /*计数*/
  .xnumber{
    .vux-cell-primary>div{
      border:1px solid #BBBBBB;
      overflow: hidden;
      @include border-radius(rem(10));
    }
    .vux-number-selector {
      @include wh(auto,rem(50));
      font-size: 25px;
      border: none;

      svg {
        @include wh(rem(30),rem(30));
        margin-top:rem(10);
      }
    }

    .vux-number-input {
      min-width:rem(100);
      height: rem(50);
      font-size: rem(28);
      color: #000;
      border: none;
      text-align: center;
    }

    .vux-number-selector-sub {
      border-right: 1px solid #BBBBBB;
      padding: 0 rem(20);
      border-radius: 0;
    }
    .vux-number-selector-plus {
      border-left: 1px solid #BBBBBB;
      padding: 0 rem(20);
      margin-right:0;
      border-radius: 0;
    }
  }
</style>
