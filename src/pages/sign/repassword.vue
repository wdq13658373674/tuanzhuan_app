<template>
  <div class="reg-wrap">
    <RegNav></RegNav>
    <h1 class="form-title">输入新密码</h1>

    <form action="">
      <div class="input-group">
        <input class="input" type="password" name="password" v-model="password" autocomplete="off" placeholder="请输入您的新密码">
      </div>
      <button class="form-btn mt60" @click.prevent="submit()">确定修改</button>
    </form>

    <div class="form-link">
      我已阅读并同意
      <a href="#" class="link">用户协议</a>
    </div>
  </div>
</template>
<script>
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
          }

        this.$axios.post(global.API_HOST+'/index/index/newPassword',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==1){
            this.$vux.toast.show(res.msg);
            return;
          }

          this.$vux.toast.show('修改成功');
          this.$router.push('/login');
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
