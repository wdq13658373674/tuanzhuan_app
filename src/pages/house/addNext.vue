<template>
  <div>
    <section class="page-group">
      <div class="tz-getcode">
        <h2 class="h2">验证码已发送绑定手机号130****1010</h2>
        <ul class="cell-list">
          <li class="item cell p27">
            <label class="label">填写验证码</label>
            <input class="input" value="654983" type="text" placeholder="">
            <button class="form-code orange">获取验证码</button>
          </li>
        </ul>
        <router-link to="" class="btn btn-orange radius mt60 disabled">确认添加</router-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "AddHouse",
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
<style lang="css" scoped>
  @import '../../assets/css/getCode.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
