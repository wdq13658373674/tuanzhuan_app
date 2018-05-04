<template>
  <div>
    <ColorNav color="orange-bar">
      <router-link to="/user/account/income" class="link pull-right" slot="right" style="color:#fff;">
        明细
      </router-link>
    </ColorNav>
    <section class="page-group">
      <div class="user-pay">
        <p class="p1">剩余积分(F)</p>
        <p class="p2">{{total || '0'}}</p>
      </div>
      <div class="connect-box">
        <p class="bank-connect">联系客户：400-000-0034</p>
      </div>
    </section>
  </div>
</template>

<script>
  import ColorNav from '@/pages/layout/colorNav'
  export default {
    name: "Integral",
    components: {
      ColorNav
    },
    data() {
      return {
        total:this.$route.query.integral
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
