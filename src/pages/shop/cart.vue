<template>
  <div>
    <section class="page-group">
      <!--购物车为空-->
      <!--<div class="cart-empty">
          <p class="p1"><img src="@/assets/images/icons/cart_empty.png" alt=""></p>
          <p class="p2">空空如也？快去挑选宝贝吧</p>
          <p>
              <a href="#" class="link">去逛逛</a>
          </p>
      </div>-->

      <ul class="cart-shop-list">
        <li class="item">
          <label>
            <input type="checkbox" name="pay" checked>
            <div class="radio">
              <i class="check"></i>
            </div>
          </label>
          <a href="#" class="link">
            <div class="product">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <div class="con-box">
                <p class="p1">秋冬折扣 zar女装垫肩装饰夹zar女装垫肩装饰夹克zar女装垫肩装饰夹克克zar女装垫肩装饰夹克zar女装垫肩装饰夹克zar女装垫肩装饰夹克 基本款外套 皮外套</p>
                <p class="p2">规格:黑色Black;155/76A/XS</p>
              </div>
            </div>
            <p class="bottom">
              <i class="icon tp mr10"></i>
              <span class="f32 orange mr20">2289.00</span>
              <span>¥4678.00</span>
              <x-number class="xnumber pull-right" title="" v-model="cartNum" :min="1" :fillable="false"></x-number>
            </p>
          </a>
        </li>
        <li class="item">
          <label>
            <input type="checkbox" name="pay" checked>
            <div class="radio">
              <i class="check"></i>
            </div>
          </label>
          <a href="#" class="link">
            <div class="product">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <div class="con-box">
                <p class="p1">zar女装垫肩装饰夹克zar女装垫肩装饰夹克 基本款外套 皮外套</p>
                <p class="p2">规格:黑色Black;155/76A/XS</p>
              </div>
            </div>
            <p class="bottom">
              <i class="icon tp mr10"></i>
              <span class="f32 orange mr20">2289.00</span>
              <span>¥4678.00</span>

              <x-number class="xnumber pull-right" title="" v-model="cartNum" :min="1" :fillable="false"></x-number>
            </p>
          </a>
        </li>
      </ul>
    </section>

    <footer>
      <div class="bottom-fixed cell">
        <label class="cart-radio">
          <input type="checkbox" name="pay" checked>
          <div class="radio">
            <i class="check"></i>
          </div>
          <span>全选</span>
        </label>
        <div class="cart-total">
          <p class="f32">合计:
            <i class="icon tp"></i>
            <span class="orange">8.00</span>
          </p>
          <p>¥16.00</p>
        </div>
        <a href="#" class="btn btn-orange">结算</a>
      </div>
    </footer>
  </div>
</template>

<script>
  import {XNumber} from 'vux'
  import cart from '@/assets/js/shop/cart'
  export default {
    name: "Cart",
    components: {
      XNumber
    },
    data () {
      return {

      }
    },
    methods: {

    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/cart.css';
</style>
<style lang="scss">
  @import "../../core/base";
  /*计数*/
  .weui-cell{
    padding:0;
  }
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
      min-width:rem(90);
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
      padding: 0 rem(15);
      margin-right:0;
      border-radius: 0;
    }
  }
</style>
