<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="text-center">
          <p class="f30 mt40">订单总额</p>
          <p class="mt40">
            <i class="tp"></i>
            <span class="f40 orange">1.99</span>
            <span class="f32 gray ml20 mr20">或</span>
            <span class="f40">¥4.00</span>
          </p>
          <p class="mt60 mb40 gray">*您可以选择用团票兑换或者人民币支付</p>
        </div>
      </div>

      <h2 class="h2">选择支付方式</h2>
      <div class="pay-list">
        <label class="item">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay1.svg" alt="">
            <div class="pull-left">
              <p class="p">团票兑换</p>
              <p class="p">节省1.99元</p>
            </div>
          </div>
          <div class="cell">
            <span class="f28 mr10">剩余团票</span>
            <i class="tp"></i>
            <span class="f28 mr10 orange">500.00</span>

            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay2.svg" alt="">
            <div class="pull-left">
              <p class="p">余额支付</p>
              <p class="p">赠送0.10物业券</p>
            </div>
          </div>
          <div>
            <span class="f28 mr10">我的余额</span>
            <span class="f16 gray">¥</span>
            <span class="f28 mr10">10000.00</span>
            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay3.svg" alt="">
            <div class="pull-left">
              <p class="p">支付宝支付</p>
              <p class="p">赠送0.10物业券</p>
            </div>
          </div>
          <div>
            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay4.svg" alt="">
            <div class="pull-left">
              <p class="p">微信支付</p>
              <p class="p">赠送0.10物业券</p>
            </div>
          </div>
          <div>
            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay5.svg" alt="">
            <div class="pull-left">
              <p class="p">线下支付</p>
              <p class="p">赠送0.10物业券</p>
            </div>
          </div>
          <div>
            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
      </div>
    </section>

    <footer>
      <div class="bottom-fixed cell">
        <div class="pay-money">微信支付：<span class="orange">¥1592.59</span></div>
        <div class="btn btn-orange" @click="orderPay">结算</div>
      </div>
    </footer>

    <!--popup 输入支付密码-->
    <popup v-model="popshow" style="background: #fff;">
      <span class="pop-close"  @click="popshow=!popshow">X</span>
      <EnterPassword></EnterPassword>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {Popup} from 'vux'
  import EnterPassword from '@/components/enterPassword'
  export default {
    name: "OrderPay",
    components:{
      Popup,
      EnterPassword
    },
    data(){
      return {
        popshow:false
      }
    },
    methods:{
      /*结算*/
      orderPay(){
        this.popshow=true;
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/orderPay.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
