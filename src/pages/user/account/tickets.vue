<template>
  <div>
    <ColorNav color="orange-bar">
      <router-link to="/user/account/tcion/income" class="link pull-right" slot="right" style="color:#fff;">
        明细
      </router-link>
    </ColorNav>
    <section class="page-group">
      <div class="user-pay">
        <p class="p1">团票余额(T)</p>
        <p class="p2">{{total || '0.00'}}</p>
      </div>
      <ul class="user-pay-list arrow-cell-list">
        <li class="item" @click="toBalance">
          <div class="link cell">
            <span><i class="icon icon2"></i>转为余额</span>
          </div>
        </li>
      </ul>

      <div class="connect-box">
        <p class="bank-connect">联系客服：400-135-6677</p>
      </div>
    </section>
  </div>
</template>

<script>
  import ColorNav from '@/pages/layout/colorNav'
  import {mapState} from 'vuex'
  export default {
    name: "Integral",
    components: {
      ColorNav
    },
    data() {
      return {
        total:this.$route.query.total
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    mounted(){

    },
    methods:{
      /**
       * 转为余额
       * **/
      toBalance(){
        this.$vux.confirm.show({
          title:'提示',
          content:'确定将团票全部转为余额么?'
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userPay.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
