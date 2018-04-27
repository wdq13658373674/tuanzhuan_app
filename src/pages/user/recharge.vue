<template>
  <div>
    <section class="page-group">
      <ul class="content user-recharge mt20">
        <li class="item">
          充值金额
        </li>
        <li class="item">
          <div class="pay-input">
            <span class="span">¥</span>
            <label class="label">
              <input class="input" type="text" value="" placeholder="输入充值金额">
              <i class="icon close"></i>
            </label>
          </div>
        </li>
      </ul>
      <a href="#" class="btn btn-orange disabled">下一步</a>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Recharge",
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
  @import '../../assets/css/userRecharge.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
