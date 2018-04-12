<template>
  <div class="reg-wrap">
    <h1 class="form-title">输入密码</h1>

    <form action="">
      <div class="input-group">
        <input class="input" type="password" name="password" v-model="password" autocomplete="off" placeholder="请输入您的密码">
      </div>
      <button class="form-btn mt60" @click.prevent="submit()">确定加入</button>
    </form>

    <div class="form-link">
      我已阅读并同意
      <a href="#" class="link">用户协议</a>
    </div>
  </div>
</template>
<script>
  const qs = require("querystring")
  const storeJs = require('storejs');
  export default {
    name: "Password",
    data(){
      return {
        phone:this.$route.params.phone,
        code:this.$route.params.code,
        password:'',
        tips:''
      }
    },
    methods:{
      submit:function () {
          if(this.password==''){
            this.$vux.toast.show('请输入密码')
            return;
          }

          let params={
            'mobile':this.phone,
            'password':this.password,
            'repassword':this.password,
            'code':this.code,
            'rule':1
          }

        this.$axios.post('/index/index/registration',qs.stringify(params)).then(res=>{
          res=res.data;

          this.$vux.toast.show({
            text: res.msg
          })

          if(res.status==0){
            this.login();
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      login:function(){
        let loginParams={
          'mobile':this.phone,
          'password':this.password,
        }

        this.$axios.post('/index/index/login',qs.stringify(loginParams)).then(res=>{
          res=res.data;
          console.log(res);

          if(res.status==1){
            this.$vux.toast.show(res.msg);
            return;
          }

          storeJs({
            'userInfo':res.data.ret
          });
          this.$router.push('/');
        }).catch(err=>{
          console.log('my err:'+err);
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/form.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
