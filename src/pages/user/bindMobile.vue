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
          <timer-btn class="form-code" second="5" :phone="phone" type="1" @run="getCode"></timer-btn>
        </li>
        <li class="item p27">
          <input class="input" type="text" value="" placeholder="请输入短信验证码">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import timerBtn from '@/components/timerBtn'
  export default {
    name: "BindMobile",
    components: {
      timerBtn
    },
    data() {
      return {
        phone:this.$route.params.phone,
        verify:''
      }
    },
    mounted(){

    },
    methods:{
      getCode:function(verify){
        this.verify=verify;
      },
    }
  }
</script>
<style lang="css">
  @import '../../assets/css/userData.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .form-code.disabled{
    background: none;
  }
</style>
