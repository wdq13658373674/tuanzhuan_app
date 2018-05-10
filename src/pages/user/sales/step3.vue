<template>
  <div>

    <!--退货申请审核中 start-->
    <h5 class="h5 mt20">商家已确认收货，<span class="green">退款成功。</span></h5>
    <!--退货申请审核中 end-->
  </div>
</template>

<script>
  import step from '@/components/step'
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserSalesStep3",
    components: {
      step
    },
    data() {
      return {

      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="scss">
  @import "../../../core/base";
</style>
