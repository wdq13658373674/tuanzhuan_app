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
      ...mapMutations(['update_userInfo','update_roomInfo','update_token']),
      /**注册表单提交*/
      submit:function () {
        if(!this.check()){
          return;
        }

          const params={
            'mobile':this.phone,
            'password':this.password,
            'repassword':this.password,
            'code':this.code,
            'rule':1
          }

        this.$axios.post(global.API_HOST+'index/registration',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0){
            this.$vux.toast.text('注册成功,请登陆!');
            this.$router.replace('/login');
          }else{
            this.$vux.toast.show({
              text: res.msg
            })
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      /**表单验证**/
      check(){
        let tips='';

        if(this.password==''){
          tips='请输入密码';
        }else if(this.password.length < 6){
          tips='密码至少6位';
        }

        if(tips==''){
          return true;
        }else{
          this.$vux.toast.text(tips);
          return false;
        }
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
