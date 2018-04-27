<template>
  <div>
    <section class="page-group">
      <ul class="change-data cell-list">
        <li class="item p27">
          当前手机号是：
          <span class="orange">18680722222</span>
        </li>
      </ul>
      <ul class="change-data cell-list mt20">
        <li class="item p27 cell">
          <input class="input" type="password" name="password" autocomplete="off" placeholder="请输入新的手机号">
          <button class="form-code">获取验证码</button>
        </li>
        <li class="item p27">
          <input class="input" type="text" value="" placeholder="请输入短信验证码">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: "BindMobile",
    components: {

    },
    data() {
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css">
  @import '../../assets/css/userData.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
