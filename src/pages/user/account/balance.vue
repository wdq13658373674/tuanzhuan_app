<template>
  <div>
    <ColorNav color="orange-bar">
      <router-link to="/user/account/money/income" class="link pull-right" slot="right" style="color:#fff;">
        明细
      </router-link>
    </ColorNav>
    <section class="page-group">
      <div class="user-pay">
        <p class="p1">余额账户(元)</p>
        <p class="p2">{{total || '0.00'}}</p>
      </div>
      <ul class="user-pay-list arrow-cell-list">
        <li class="item">
          <router-link to="/user/account/recharge" class="link cell">
            <span><i class="icon icon1"></i>充值</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/user/account/withdraw" class="link cell">
            <span><i class="icon icon2"></i>提现</span>
          </router-link>
        </li>
      </ul>
      <!--验证身份的时候显示-->
      <div class="content user-pay-check mt20" v-if="!check">
        <p class="p1">验证身份后才能使用余额功能</p>
        <router-link to="/user/check/idCard" class="btn btn-orange">去验证</router-link>
      </div>

      <div class="connect-box">
        <p class="bank-connect">联系客服：400-135-6677</p>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ColorNav from '@/pages/layout/colorNav'
  export default {
    name: "Balance",
    components: {
      ColorNav
    },
    data() {
      return {
        total:this.$route.query.balance
      }
    },
    computed:{
      ...mapState(['userInfo']),
      /**验证是否实名认证*/
      check(){
        if(this.userInfo.user_idcard && this.userInfo.user_realname && this.userInfo.user_truename){
          return true;
        }
        return false;
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userPay.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
