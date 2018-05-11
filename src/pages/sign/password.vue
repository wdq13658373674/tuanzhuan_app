<template>
  <div class="reg-wrap">
    <RegNav></RegNav>
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
  import {mapMutations} from 'vuex'
  import RegNav from '@/pages/layout/regNav'
  const qs = require("querystring")
  export default {
    name: "Password",
    components:{
      RegNav
    },
    data(){
      return {
        phone:this.$route.params.phone,
        code:this.$route.params.code,
        password:'',
        tips:''
      }
    },
    methods:{
      /**注册表单提交*/
      submit:function () {
          if(this.password==''){
            this.$vux.toast.show('请输入密码')
            return;
          }

          const params={
            'mobile':this.phone,
            'password':this.password,
            'repassword':this.password,
            'code':this.code,
            'rule':1
          }

        this.$axios.post(global.API_HOST+'/index/index/registration',qs.stringify(params)).then(res=>{
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
      /**登陆*/
      ...mapMutations(['update_userInfo','update_roomInfo','update_token']),
      login:function(){
        const params={
          'mobile':this.$route.params.phone,
          'password':this.password,
        }

        this.$axios.post(global.API_HOST+'/index/index/login',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==1){
            this.$vux.toast.show(res.msg);
            return;
          }

          this.update_userInfo(res.data.user);
          this.update_token(res.data.token);
          if(res.data.room){
            this.update_roomInfo(res.data.room);
          }else{
            this.update_roomInfo({});
          }
          this.$vux.toast.show('注册成功');
          this.$router.replace('/user');
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
