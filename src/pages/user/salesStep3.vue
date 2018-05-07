<template>
  <div>
    <!--退货申请审核中 start-->
    <h5 class="h5 mt20">退货申请审核中</h5>
    <!--退货申请审核中 end-->

    <!--退货申请审核成功 start-->
    <!-------说明：两种寄送状态提示-->
    <!-------1：快递寄回-->
    <h5 class="h5 mt20">快递已发出，等待商家确认收货</h5>
    <!-------1：快递寄回-->

    <!-------2：自行送往-->
    <h5 class="h5 mt20">已自送至送货点，等待商家已确认收货。</h5>
    <!-------2：自行送往-->

    <h5 class="h5 bold mt20">退货快递信息</h5>
    <ul class="cell-list sale-form">
      <li class="item cell p27">
        <label>快递公司</label>
        <input type="text" class="input" placeholder="圆通快递">
      </li>
      <li class="item cell p27">
        <label>快递单号</label>
        <input type="text" class="input" placeholder="102313123545645444">
      </li>
    </ul>
    <!--退货申请审核成功 end-->
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
  @import "../../core/base";
</style>
