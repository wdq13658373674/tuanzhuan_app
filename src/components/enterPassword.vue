<!--输入支付密码-->
<template>
  <div class="tz-password-pay">
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
    <PassKeyBord @run="enterPass" @sure="pay"></PassKeyBord>
  </div>
</template>

<script>
  import PassKeyBord from '@/components/passKeyBord'

  export default {
    name: "enterPassword",
    components:{
      PassKeyBord
    },
    data () {
      return {
        password:[],
        paslength:6,
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
  @import "../assets/css/keyboard.css";
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

