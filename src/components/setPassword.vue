<!--输入设置支付密码-->
<template>
  <div>
    <div class="user-pay-password">
      <p class="p1">{{title}}</p>
      <p class="p2">请设置支付密码，用于支付验证。</p>
      <ul class="pay-password-box mt60">
        <li class="item" v-for="(key,i) in paslength" :key="i">
          <input class="input" type="password" :value="password[i]" disabled>
        </li>
      </ul>

      <popup v-model="popshow" :show-mask="false">
        <PassKeyBord @run="enterPass" @sure="pay" class="pay-keybord"></PassKeyBord>
      </popup>
    </div>
  </div>
</template>

<script>
  import PassKeyBord from '@/components/passKeyBord'
  import {Popup} from 'vux'
  export default {
    props:['title'],
    name: "setPassword",
    components:{
      Popup,
      PassKeyBord,
    },
    data () {
      return {
        password:[],
        paslength:6,
        popshow:true
      }
    },
    methods: {
      /**输入密码*/
      enterPass(value){
        this.password=value;
      },
      /**支付确定按钮*/
      pay(){
        if(this.password.length==this.paslength){
          console.log(this.password.join(''));
        }

        return;
      }
    }
  }
</script>

<style lang="css" scoped>
  @import '../assets/css/userPayPassword.css';
</style>
<style lang="scss" scoped>
  @import "../core/base";

  /*确认付款*/
  .tz-password-pay{
    background: #fff;

    .title{
      @include wh(auto,rem(90),rem(90));
      font-size:rem(32);
      text-align: center;
      border-bottom:1px solid $grayLight;
    }
    .link-box{
      text-align: right;
      padding:0 rem(27);
      margin-top:rem(20);
      margin-bottom:rem(173);

      .link{
        color:#5CB85C;
        font-size:rem(24);
      }
    }
  }
</style>

