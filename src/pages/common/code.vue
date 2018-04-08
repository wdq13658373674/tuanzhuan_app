<template>
  <div class="reg-wrap">
    <div class="nav-bar">
      <a class="link pull-left">
        <i class="icon arrow4"></i>
      </a>
    </div>

    <h1 class="form-title">输入验证码</h1>

    <form action="">
      <div class="input-group">
        <input class="input" type="password" name="password" autocomplete="off" placeholder="验证码">
        <span class="form-code">获取验证码(5s)</span>
      </div>
      <button class="form-btn mt60">确定加入</button>
    </form>

    <div class="form-link">
      我已阅读并同意
      <a href="#" class="link">用户协议</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Code",
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
