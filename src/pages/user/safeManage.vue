<template>
  <div>
    <section class="page-group">
      <ul class="user-safety-list arrow-cell-list">
        <li class="item">
          <div class="link cell" @click="popshow=true">
            <span><i class="icon icon1"></i>修改支付密码</span>
          </div>
        </li>
        <li class="item">
          <a class="link cell" href="#">
            <span><i class="icon icon1"></i>忘记支付密码</span>
          </a>
        </li>
      </ul>
    </section>

    <!--popup 键盘-->
    <popup v-model="popshow" :show-mask="false" height="100%" style="background: #fff;">
      <span class="pop-close" @click="popshow=!popshow">X</span>
      <div class="user-pay-password">
        <p class="p1">设置支付密码</p>
        <p class="p2">请设置支付密码，用于支付验证。</p>
        <ul class="pay-password-box mt60">
          <li class="item" v-for="(key,i) in paslength" :key="i">
            <input class="input" type="password" :value="password[i]" disabled>
          </li>
        </ul>

        <PassKeyBord @run="enterPass" @sure="pay" class="pay-keybord"></PassKeyBord>
      </div>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import PassKeyBord from '@/components/passKeyBord'
  import {Popup} from 'vux'
  export default {
    name: "SafeManage",
    components: {
      PassKeyBord,
      Popup
    },
    data() {
      return {
        popshow:false,
        password:[],
        paslength:6,
      }
    },
    computed:{

    },
    mounted(){

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
<style lang="css">
  @import '../../assets/css/userSafety.css';
  @import '../../assets/css/userPayPassword.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .pay-keybord{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
  }

  .pop-close{
    z-index: 10;
  }
</style>
