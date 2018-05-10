<!--输入支付密码弹层-->
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
      <router-link to="/user/safe/forgetPayPassword" class="link">忘记密码？</router-link>
    </div>
    <PassKeyBord @run="enterPass" @sure="pay"></PassKeyBord>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import PassKeyBord from '@/components/passKeyBord'
  const qs = require("querystring")

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
    computed:{
      ...mapState(['userInfo'])
    },
    methods: {
      /**输入密码*/
      enterPass(value){
        this.password=value;
      },
      /**支付确定按钮*/
      pay(){
        if(this.password.length==this.paslength){
          const params={
            user_id:this.userInfo.user_id,
            pay:this.password.join(''),
          }
          let result=0;

          this.$axios.post(global.API_HOST+'/index/user/getpaypwd',qs.stringify(params)).then(res=>{
            res=res.data;

            if(res.status==0) {
              result=1;
            }else{
              result=0;
            }

            //传递给父元素回调
            this.$emit('run',result);
          }).catch(err=>{
            console.log('my err:'+err);
          })
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

