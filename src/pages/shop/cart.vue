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
  export default {
    name: "Cart",
    components: {

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
</style>
