<template>
  <div>
    <section class="page-group user-pay-password">
      <p class="p1">设置支付密码</p>
      <p class="p2">请设置微信支付密码，用于支付验证。</p>
      <ul class="pay-password-box mt60">
        <li class="item" v-for="(key,i) in paslength" :key="i">
          <input class="input" type="password" :value="password[i]" disabled>
        </li>
      </ul>
    </section>

    <!--popup 键盘-->
    <popup v-model="popshow" :show-mask="false">
      <div class="popup1">
        <PassKeyBord @run="enterPass" @sure="pay"></PassKeyBord>
      </div>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import PassKeyBord from '@/components/passKeyBord'
  import {Popup} from 'vux'
  export default {
    name: "ChangeNickname",
    components: {
      PassKeyBord,
      Popup
    },
    data() {
      return {
        popshow:true,
        password:[],
        paslength:6,
      }
    },
    computed:{

    },
    methods:{
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
  @import '../../assets/css/userPayPassword.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .user-pay-password{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    min-height:100%;
  }
</style>
