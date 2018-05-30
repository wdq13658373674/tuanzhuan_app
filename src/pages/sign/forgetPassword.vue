<template>
  <div class="reg-wrap">
    <RegNav></RegNav>
    <h1 class="form-title">你的手机号码</h1>

    <form action="">
      <div class="input-group no-border">
        <div class="area-num">
          <span class="add">+</span>
          <input class="input w100" type="text" value="86" autocomplete="off">
        </div>
        <div class="input-box">
          <input class="input" type="text" v-model="phone" autocomplete="off" placeholder="手机号码">
        </div>
      </div>
      <div class="input-group">
        <input class="input" type="text" name="code" v-model="code" autocomplete="off" placeholder="请输入验证码">
        <timer-btn class="form-code" second="5" :phone="phone" type="3" @run="getCode"></timer-btn>
      </div>
      <button class="form-btn mt80" @click.prevent="next()">下一步</button>
    </form>
  </div>
</template>
<script>
  import RegNav from '@/pages/layout/regNav'
  import timerBtn from '@/components/timerBtn'
  const qs = require("querystring")
  export default {
    name: "ForgetPassword",
    components:{
      timerBtn,
      RegNav
    },
    data(){
      return {
        area:86,
        phone:'',
        code:'',
        verify:''
      }
    },
    methods:{
      getCode:function(verify){
        this.verify=verify;
      },
      next:function () {
        if(this.phone == ''){
          this.$vux.toast.show('请输入手机号码')
          return;
        }else if(!this.$utils.is_mobile(this.phone)){
          this.$vux.toast.show({
            text: '手机号码格式不正确'
          })
          return;
        }
        if(this.code=='' || this.code != this.verify){
          this.$vux.toast.show('验证码错误')
          return;
        }

        this.$router.push({ name: 'Repassword', params: { phone: this.phone,code:this.code }});
      },
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/form.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
