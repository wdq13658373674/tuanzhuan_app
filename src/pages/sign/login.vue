<template>
  <div class="login-wrap">
    <h1 class="form-title">欢迎回家</h1>

    <form action="">
      <div class="input-group no-border">
        <div class="area-num">
          <span class="add">+</span>
          <input class="input w100" type="text" v-model="area" autocomplete="off">
        </div>
        <div class="input-box">
          <input class="input" type="text" v-model="phone" autocomplete="off" placeholder="手机号码">
        </div>
      </div>

      <div class="input-group">
        <input class="input" type="password" v-model="password" autocomplete="off" placeholder="密码">
        <router-link to="/forgetPassword" class="forget">忘记密码</router-link>
      </div>
      <button @click.prevent="submit()" class="form-btn mt80">登录</button>
    </form>

    <div class="form-link mt60">
      还没有账号？<router-link class="link" to="/register">立即注册</router-link>一个吧～
    </div>
    <div class="form-phone">客服电话：400-888-888</div>
  </div>
</template>
<script>
  import utils from '@/libs/util.js'
  const qs = require("querystring")
  import {mapMutations} from 'vuex'

  export default {
    name: "Login",
    data(){
      return {
        area:86,
        phone:'',
        password:'',
      }
    },
    mounted(){
      this.update_userInfo('');
      this.update_roomInfo('');
    },
    methods:{
      ...mapMutations(['update_userInfo','update_roomInfo']),
      submit:function(){
        if(this.phone == ''){
          this.$vux.toast.show('请输入手机号码');
          return;
        }else if(!utils.is_mobile(this.phone)){
          this.$vux.toast.show('手机号码格式不正确');
          return;
        }else if(this.password== ''){
          this.$vux.toast.show('请输入密码');
          return;
        }

        let params={
          'mobile':this.phone,
          'password':this.password,
        }

        this.$axios.post('/index/index/login',qs.stringify(params)).then(res=>{
          res=res.data;
          console.log(res);
          if(res.status==1){
            this.$vux.toast.show(res.msg);
            return;
          }

          this.$store.commit('update_userInfo',res.data.user);
          this.$store.commit('update_roomInfo',res.data.room);

          this.$vux.toast.show('登陆成功');
          this.$router.push('/user')
        }).catch(err=>{
          console.log('my err:'+err)
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

  .form-btn{
    display:block;
  }
</style>
