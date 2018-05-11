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
      <div class="btn btn-orange radius mt60" :class="{disabled:!this.phone || !this.code}" @click="next">下一步</div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import timerBtn from '@/components/timerBtn'
  import setPassword from '@/components/setPassword'
  import utils from '@/libs/util.js'
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
        if(this.code!=this.verify){
          this.$vux.toast.text('验证码输入错误');
          return;
        }else{
          this.payPassword_ajax();
        }
      },
      /**修改支付密码验证用户手机号码接口**/
      payPassword_ajax(){
        const params={
          user_id:this.userInfo.user_id,
          mobile:this.phone,
          code:this.code,
        }

        this.$axios.post(global.API_HOST+'/index/index/newPayPassword',qs.stringify(params)).then(res=>{
          res=res.data;
          if(res.status==0) {
            this.$router.push('/user/safe/setPayPassword');
          }else{
            this.$vux.toast.text('请使用当前登陆的电话号码');
            this.code='';
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
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
