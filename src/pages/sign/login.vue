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
          <input class="input" type="tel" v-model="phone" autocomplete="off" placeholder="手机号码">
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
  const qs = require("querystring")
  import {mapState,mapMutations} from 'vuex'

  export default {
    name: "Login",
    data(){
      return {
        area:86,
        phone:'',
        password:'',
        tips:'',
        fromUrl:''
      }
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.fromUrl = from.name;
      })
    },
    computed:{
      ...mapState(['roomInfo'])
    },
    mounted(){
      this.$nextTick(()=>{
        this.update_userInfo({});
      })

      var that = this;
      /*用户自动登陆*/
      window.cdvfiletxt(function(status,msg,data){
        if(status && data.data.length>0){
          try{
            var login = JSON.parse(data.data);
            that.phone = login.mobile;
            that.password = login.password;
            that.submit();
          }catch(e){

          }
        }
      },'login.tz');
    },
    methods:{
      ...mapMutations(['update_userInfo','update_roomInfo','update_token']),
      /**登陆提交**/
      submit:function(){
        if(!this.check()){
          return;
        }
        const params=new FormData();
        params.append('mobile',this.phone);
        params.append('password',this.password);

        this.$axios.post(global.API_HOST+'index/login',params,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res=>{
          res=res.data;

          if(res.status==1){
            this.$vux.toast.show(res.msg);
            return;
          }

          /*登录成功后储存用户账户密码*/
          var logindata = JSON.stringify({mobile:this.phone,password:this.password});
          window.cdvfiletxt(function(status,msg){
            if(!status){console.log(msg)};
          },'login.tz',logindata);

          //更新vuex store
          this.update_userInfo(res.data.user);
          this.update_token(res.data.token);
          if(res.data.room){
            this.update_roomInfo(res.data.room);
          }

          this.$vux.toast.show('登陆成功');
          if(navigator.userAgent.indexOf('MicroMessenger')>-1){
            location.href = global.API_HOST+'index/wxlogin?user_id='+res.data.user.user_id+'&returns='+encodeURI('http://'+location.host+'/#/user');
            return;
          }

          if(this.checkUrl()){
            this.$router.go(-1);
          }else{
            this.$router.replace('/user');
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      /**表单验证**/
      check(){
        this.tips='';
        if(this.phone == ''){
          this.tips='请输入手机号码';
        }else if(!this.$utils.is_mobile(this.phone)){
          this.tips='手机号码格式不正确';
        }else if(this.password== ''){
          this.tips='请输入密码';
        }

        if(this.tips!=''){
          this.$vux.toast.text(this.tips);
          return false;
        }else{
          return true;
        }
      },
      /**
       * 判断来源地址
       * **/
      checkUrl(){
        const arrUrl=['Password','Repassword','Index'];//登陆后直接到user页面的url，否则直接返回上个页面
        if(arrUrl.indexOf(this.fromUrl)==-1){
          return true;
        }
        return false;
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
