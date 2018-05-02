<template>
  <div>
    <section class="page-group">
      <ul class="content user-recharge mt20">
        <li class="item">
          充值金额
        </li>
        <li class="item">
          <div class="pay-input">
            <span class="span">¥</span>
            <label class="label"  @click="popshow=true">
              <input class="input" type="text" v-model="val" placeholder="输入充值金额" disabled>
              <i class="icon close" v-show="val!=''" @click="empty"></i>
            </label>
          </div>
        </li>
      </ul>
      <div class="btn btn-orange" :class="val=='' ? 'disabled' : ''" @click="next">下一步</div>
    </section>

    <!--popup 键盘-->
    <popup v-model="popshow" :show-mask="false">
      <div class="popup1">
        <KeyBord @run="enterMoney" @sure="next" ref="keyBord"></KeyBord>
      </div>
    </popup>
    <!--popup-->

    <!--popup 确认付款-->
    <popup v-model="popshow2" height="60%" style="background: #fff;">
      <span class="pop-close" @click="popshow2=!popshow2">X</span>
      <div class="user-confirm-pay">
        <h1 class="title">
          确认付款
        </h1>
        <div class="con">
          <p class="money">¥{{val}}</p>
          <div class="type cell">
            <span>订单信息</span>
            <span>团转到家充值</span>
          </div>
          <div class="arrow-cell-list">
            <div class="item">
              <a href="#" class="link cell">
                <span>付款方式</span>
                <span>重庆银行卡储蓄卡(1114)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="bottom-fixed btn-orange-fixed" @click="next2">立即付款</div>
      </footer>
    </popup>
    <!--popup-->

    <!--popup 输入支付密码-->
    <popup v-model="popshow3" style="background: #fff;">
      <span class="pop-close"  @click="popshow3=!popshow3">X</span>
      <EnterPassword></EnterPassword>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {Popup} from 'vux'
  import KeyBord from '@/components/keybord'
  import EnterPassword from '@/components/enterPassword'
  export default {
    name: "Recharge",
    components: {
      KeyBord,
      EnterPassword,
      Popup
    },
    data() {
      return {
        val:[],
        popshow:true,
        popshow2:false,
        popshow3:false,
      }
    },
    mounted(){

    },
    methods:{
      /**输入金额*/
      enterMoney(value){
        this.val=value;
      },
      /**清空金额*/
      empty(){
        this.val='';
        this.$refs.keyBord.empty();
      },
      /**输入金额后下一步*/
      next(){
        this.popshow=false;
        this.popshow2=true;
      },
      next2(){
        this.popshow2=false;
        this.popshow3=true;
      },
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userRecharge.css';
</style>
<style lang="scss" scoped>
  @import "../../core/base";
</style>
