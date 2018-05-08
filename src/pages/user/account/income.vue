<template>
  <div>
    <section class="page-group">
      <ul class="user-income-list">
        <li class="item">
          <p class="p1 cell">
            <span>消费</span>
            <span class="span gray">2018-04-23</span>
          </p>
          <p class="p2 cell">
            <span class="span">余额：0.00</span>
            <span>-5.01</span>
          </p>
        </li>
        <li class="item">
          <p class="p1 cell">
            <span>充值</span>
            <span class="span gray">2018-04-20</span>
          </p>
          <p class="p2 cell">
            <span class="span">余额：200.00</span>
            <span>+200.00</span>
          </p>
        </li>
        <li class="item">
          <p class="p1 cell">
            <span>提现</span>
            <span class="span gray">2018-04-23</span>
          </p>
          <p class="p2 cell">
            <span class="span">余额：400.00</span>
            <span>-200.00</span>
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Income",
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
  @import '../../../assets/css/userIncome.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
