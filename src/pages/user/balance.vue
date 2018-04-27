<template>
  <div>
    <OrangeNav>
      <router-link to="/user/income" class="link pull-right" slot="right" style="color:#fff;">
        明细
      </router-link>
    </OrangeNav>
    <section class="page-group">
      <div class="user-pay">
        <p class="p1">余额账户(元)</p>
        <p class="p2">6000.66</p>
      </div>
      <ul class="user-pay-list arrow-cell-list">
        <li class="item">
          <router-link to="/user/recharge" class="link cell">
            <span>充值</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/user/withdraw" class="link cell">
            <span>提现</span>
          </router-link>
        </li>
      </ul>
      <!--验证身份的时候显示-->
      <div class="content user-pay-check mt20">
        <p class="p1">验证身份后才能使用余额功能</p>
        <a href="#" class="btn btn-orange">去验证</a>
      </div>
    </section>
  </div>
</template>

<script>
  import OrangeNav from '@/pages/layout/orangeNav'
  export default {
    name: "Balance",
    components: {
      OrangeNav
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
  @import '../../assets/css/userPay.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
