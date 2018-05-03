<template>
  <div>
    <section class="page-group">
      <h2 class="h2">请输入您的手机号码</h2>
      <ul class="cell-list bind-bank">
        <li class="item cell p27">
          <label>手机号码</label>
          <input class="input" v-model="phone" type="text" placeholder="">
        </li>
        <li class="item cell p27">
          <label>验证码</label>
          <input class="input" v-model="code" type="text" placeholder="">
          <timer-btn class="form-code orange" second="5" :phone="phone" type="4" @run="getCode"></timer-btn>
        </li>
      </ul>
      <div class="btn btn-orange disabled" @click="popshow=true">下一步</div>
    </section>

    <!--popup 设置支付密码-->
    <popup v-model="popshow" :show-mask="false" height="100%" style="z-index:999999;background: #fff;">
      <span class="pop-close" @click="popshow=!popshow">X</span>
      <setPassword></setPassword>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import timerBtn from '@/components/timerBtn'
  import setPassword from '@/components/setPassword'
  import {Popup} from 'vux'
  const qs = require("querystring");
  export default {
    name: "ForgetPayPassword",
    components: {
      timerBtn,
      Popup,
      setPassword
    },
    data() {
      return {
        popshow:false,
        phone:'',
        code:'',
        verify:''
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    methods:{
      getCode:function(verify){
        this.verify=verify;
      },
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userBindBank.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .form-code.disabled{
    background: none;
  }

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
