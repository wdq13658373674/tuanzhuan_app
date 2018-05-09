<template>
  <div>
    <section class="page-group">
      <h2 class="h2">请输入您的手机号码</h2>
      <ul class="cell-list tz-getcode">
        <li class="item cell p27">
          <label class="label">手机号码</label>
          <input class="input" v-model="phone" type="text" placeholder="">
        </li>
        <li class="item cell p27">
          <label class="label">验证码</label>
          <input class="input" v-model="code" type="text" placeholder="">
          <timer-btn class="form-code orange" second="5" :phone="phone" type="4" @run="getCode"></timer-btn>
        </li>
      </ul>
      <div class="btn btn-orange radius mt60" :class="{'disabled':!finish}" @click="popshow=true">下一步</div>
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
        finish:false,
        phone:'',
        code:'',
        verify:''
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    methods:{
      /**获取验证码
       * verify：获取的验证码
       * **/
      getCode:function(verify){
        this.verify=verify;
      },
      /**下一步**/
      next(){

      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/getCode.css';
</style>
<style lang="scss" scoped>
  @import "../../../core/base";

  .form-code.disabled{
    background: none;
  }
</style>
