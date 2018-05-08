<template>
  <div>
    <!--同意售后申请 start-->
    <div class="content sales-back">
      <em>商家已同意售后申请,请将商品寄往或者自行送往:</em>
      <p>重庆市渝北区扬子江商务中心22楼 小怪兽收</p>
      <p>联系电话：86954763</p>
    </div>

    <div class="tab-box">
      <div class="tab active">快递寄回</div>
      <div class="tab">自行送往</div>
    </div>

    <h5 class="h5 bold">填写快递信息</h5>
    <ul class="cell-list sale-form">
      <li class="item cell p27">
        <label>快递公司</label>
        <input type="text" class="input" placeholder="请填写快递公司名称，如顺丰等">
      </li>
      <li class="item cell p27">
        <label>快递单号</label>
        <input type="text" class="input" placeholder="请输入快递单号">
      </li>
    </ul>
    <!--同意售后申请 end-->

    <!--拒绝售后申请 start-->
    <div class="content sales-back mb40">
      <em>商家拒绝了您的售后申请</em>
      <p>拒绝原因:此商品没有退换货服务。</p>
    </div>
    <!--拒绝售后申请 end-->

    <footer>
      <!--说明:添加 disabled 禁止点击-->
      <router-link to="/user/order/sales/step3" class="bottom-fixed btn-orange-fixed">确认退货</router-link>
    </footer>
  </div>
</template>

<script>
  import step from '@/components/step'
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserSalesStep2",
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
