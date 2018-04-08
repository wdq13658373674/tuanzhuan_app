<template>
  <div class="reg-wrap">
    <div class="nav-bar">
      <a class="link pull-left">
        <i class="icon arrow4"></i>
      </a>
    </div>

    <h1 class="form-title">你的手机号码</h1>

    <form action="">
      <div class="input-group no-border">
        <div class="area-num">
          <span class="add">+</span>
          <input class="input w100" type="text" value="86" autocomplete="off">
        </div>
        <input class="input border" type="text" name="phone" autocomplete="off" placeholder="手机号码">
      </div>
      <div class="form-text">
        <span class="tip">*该手机已经注册</span>
        <a href="#" class="link">忘记密码?</a>
      </div>
      <router-link to="/code" class="form-btn mt60">下一步</router-link>
    </form>
  </div>
</template>
<script>
  export default {
    name: "Register",
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

</style>
