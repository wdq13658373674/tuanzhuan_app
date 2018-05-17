<template>
  <div>
    <cartNav :select="select"></cartNav>
    <section class="page-group">
      <!--购物车为空-->
      <div class="cart-empty" v-if="!cart_lists.length">
          <p class="p1"><img src="@/assets/images/icons/cart_empty.png" alt=""></p>
          <p class="p2">空空如也？快去挑选宝贝吧</p>
          <p>
              <router-link to="/shop" class="link">去逛逛</router-link>
          </p>
      </div>
      <template v-else>
        <ul class="cart-shop-list">
          <li class="item" v-for="(item,key) in cart_lists">
            <label>
              <input type="checkbox" name="cart_goods" :value="key" v-model="select"/>
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
                <span class="f32 orange mr20">{{item.now_tcion}}</span>
                <span>¥{{item.now_price}}</span>

                <x-number class="cart-number pull-right" title="" v-model="item.cart_sum" :min="1" :fillable="false" @on-change="change_sum(item.cart_sum,key)"></x-number>

              </p>
            </div>
          </li>

        </ul>
        <footer>
          <div class="bottom-fixed cell">
            <label class="cart-radio">
              <input type="checkbox" name="all" v-model="allSelect"/>
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
            <a href="javascript:void(0);" class="btn btn-orange" @click="submitOrder">结算</a>
          </div>
        </footer>
      </template>
    </section>
  </div>
</template>

<script>
  import cartNav from '@/pages/layout/cartNav'
  import {XNumber} from 'vux'
  import cart from '@/assets/js/shop/cart'
  export default {
    name: "Cart",
    components: {
      XNumber,
      cartNav
    },
    data () {
      return {
        cart_lists:cart.cart_list,
        price:0,
        tcion:0,
        select:[]
      }
    },
    computed:{
      allSelect:{
        /**单选功能**/
        get(){
          if(this.select.length!=0){
            return this.select.length==this.cart_lists.length ? true : false;
          }
        },
        /**全选功能**/
        set(value){
          var selected=[];
          if(value){
            this.cart_lists.forEach(function(item,index){
              selected.push(index);
            })
          }
          this.select=selected;
        }
      }
    },
    mounted(){
      var selected=[];
      if(this.cart_lists.length>0){
        this.cart_lists.forEach(function(item,index){
          selected.push(index);
        });
      }
      this.select=selected;
    },
    methods: {
      /**
       * 操作商品数量
       * @param stock
       * @param key
         */
      change_sum(stock,key){
        if(stock<1){
          this.$vux.toast.text('该商品不能再减少了哟!','middle');
          return false;
        }
        cart.setCartStock(stock,key);
        this.cart_lists=cart.cart_list;
        var money=cart.getMoney(this.select);
        this.price=money.price;
        this.tcion=money.tcion;
      },

      /**
       * 订单提交
       */
      submitOrder(){
        if(this.select.length>0){
          var check=cart.setOrder(this.select);
          if(check){
            this.$router.push('/shop/order');
          }else{
            this.$vux.toast.text('亲！还没选择商品哟!','middle');
          }
        }else{
          this.$vux.toast.text('亲！还没选择商品哟!','middle');
        }
      }

    },
    watch:{
      select: function (val, oldVal) {
        var money=cart.getMoney(val);
        this.price=money.price;
        this.tcion=money.tcion;
      },
    }
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
  .cart-number{
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
