<template>
  <div class="login-wrap">
    <h1 class="form-title">欢迎回家</h1>

    <form action="">
      <div class="input-group no-border">
        <div class="area-num">
          <span class="add">+</span>
          <input class="input w100" type="text" value="86" autocomplete="off">
        </div>
        <input class="input border" type="text" name="phone" autocomplete="off" placeholder="手机号码">
      </div>

      <div class="input-group">
        <input class="input" type="password" name="password" autocomplete="off" placeholder="密码">
        <a href="#" class="forget">忘记密码</a>
      </div>
      <a href="#" class="form-btn mt60">登录</a>
    </form>

    <div class="form-link mt60">
      还没有账号？<router-link class="link" to="/register">立即注册</router-link>一个吧～
    </div>
    <div class="form-phone">客服电话：400-888-888</div>
  </div>
</template>
<script>
  export default {
    name: "Login",
    data(){
      return {

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
