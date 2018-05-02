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
        <KeyBord @run="run"  @sure="sure" :money="val" ref="keyBord"></KeyBord>
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
        <div class="bottom-fixed btn-orange-fixed" @click="pay">立即付款</div>
      </footer>
    </popup>
    <!--popup-->

    <!--popup 输入支付密码-->
    <popup v-model="popshow3" style="background: #fff;">
      <span class="pop-close"  @click="popshow3=!popshow3">X</span>
      <div class="user-confirm-pay">
        <h1 class="title">
          请输入支付密码
        </h1>

        <ul class="pay-password-box mt60">
          <li class="item" v-for="(key,i) in paslength" :key="i">
            <input class="input" type="password" :value="password[i]" disabled>
          </li>
        </ul>
        <div class="link-box">
          <a href="" class="link">忘记密码？</a>
        </div>
        <PassKeyBord @enterPass="enterPass" @passDelete="passDelete"></PassKeyBord>
      </div>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {Popup} from 'vux'
  import KeyBord from '@/components/keybord'
  import PassKeyBord from '@/components/passKeyBord'
  export default {
    name: "Recharge",
    components: {
      KeyBord,
      PassKeyBord,
      Popup
    },
    data() {
      return {
        val:[],
        popshow:true,
        popshow2:false,
        popshow3:false,
        password:[],
        paslength:6,
      }
    },
    mounted(){

    },
    methods:{
      /*输入金额*/
      run(value){
        this.val=value;
      },
      /*确定*/
      sure(value){
        this.val=value;
        this.popshow=false;
        this.popshow2=true;
        console.log(value);
      },
      /*清空金额*/
      empty(){
        this.val='';
        this.$refs.keyBord.empty();
      },
      /*输入金额后下一步*/
      next(){
        this.popshow=false;
        this.popshow2=true;
      },
      /*输入密码*/
      enterPass(value){
          this.password=value;
          if(this.password.length==this.paslength){
            console.log(this.password.join(''));
            return;
          }
      },
      /*删除密码*/
      passDelete(value){
        this.password=value;
      },
      pay(){
        this.popshow2=false;
        this.popshow3=true;
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userRecharge.css';
</style>
<style lang="scss" scoped>
  @import "../../core/base";

  .link-box{
    margin-bottom:rem(173);
  }
</style>
