<template>
  <div>
    <section class="page-group">
      <ul class="arrow-cell-list">
        <li class="item">
          <a href="#" class="cell link">
            <span>招商银行储蓄卡(6321)</span>
          </a>
        </li>
      </ul>
      <ul class="content user-recharge mt20">
        <li class="item">
          提现金额
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
      <div class="tx-tips">
        金额已超过可提现余额
      </div>
      <a href="#" class="btn btn-orange disabled">预计24小时内到账，确认提现</a>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Withdraw",
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
<style lang="scss" scoped>
  @import "../../core/base";

</style>
