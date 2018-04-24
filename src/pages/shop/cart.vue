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
        <li class="item" v-for="(item,key) in cart_list">
          <label>
            <input type="checkbox" name="cart_goods" :value="key" v-model="isCheck" />
            <div class="radio">
              <i class="check"></i>
            </div>
          </label>
          <div class="link">
            <div class="product">
              <div class="img-box">
                <router-link  :to="{path:'/shop/detail',query:{id:item.goods_id}}">
                <img class="img" v-lazy="item.goods_logo" alt="" />
                </router-link>
              </div>
              <div class="con-box">
                <p class="p1">{{item.goods_name}}</p>
                <p class="p2" v-if="item.goods_spec_title">规格：{{item.goods_spec_title}}；{{item.choose_prop}}</p>
              </div>
            </div>
            <p class="bottom">
              <i class="icon tp mr10"></i>
              <span class="f32 orange mr20">{{item.goods_tcion}}</span>
              <span>¥{{item.goods_price}}</span>

              <x-number class="xnumber pull-right" title="" :min="0" :fillable="false" :value="item.cart_sum" :id="key" @click="change_sum(this,key)"></x-number>

            </p>
          </div>
        </li>

      </ul>
    </section>

    <footer>
      <div class="bottom-fixed cell">
        <label class="cart-radio">
          <input type="checkbox" name="all" checked="checked" @change="allSelect()"/>
          <div class="radio">
            <i class="check"></i>
          </div>
          <span>全选</span>
        </label>
        <div class="cart-total">
          <p class="f32">合计:
            <i class="icon tp"></i>
            <span class="orange">{{tcion}}</span>
          </p>
          <p>¥{{price}}</p>
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
        cartNum:1,
        cart_list:cart.cart_list,
        price:cart.getMoney().price,
        tcion:cart.getMoney().tcion,
        isCheck:true,
      }
    },
    mounted(){
      console.log(cart.getMoney());
    },
    methods: {
      /**
       * 全选功能
       */
      allSelect() {
        if(this.isCheck){
          this.isCheck=false;
        }else{
          this.isCheck=true;
        }

      },
      /**
       * 单选操作
       */
      singleSelect() {

      },

      change_sum(stock,key){
        console.log(stock);
        console.log(key);
      },

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
