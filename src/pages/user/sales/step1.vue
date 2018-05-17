<template>
  <div>
    <div v-if="status === 0">
      <h5 class="h5 mt20">退货原因 <span class="gray">（至少说明一个原因）</span></h5>
      <textarea name="" id="" rows="6" class="textarea" placeholder="请说明退货原因" v-model="reason"></textarea>
    <footer>
      <!--to="/user/order/sales/step2"-->
      <span class="bottom-fixed btn-orange-fixed" @click="postRefundOrder">提交申请</span>
    </footer>
  </div>
  <div v-else>
    <div class="content sales-back">
      <em>退货申请已提交等商家确认</em>
    </div>
  </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserSalesStep1",
    components: {

    },
    data() {
      return {
        reason:'',
        status: this.$route.query.status
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){

    },
    methods:{
      postRefundOrder(){
        let params={
          goods_order_id:this.$route.query.order_id,
          user_id:this.userInfo.user_id,
          goods_order_cancel_reason: this.reason
        };
        if(this.reason !== ''){
          this.$axios.get(global.API_HOST+'index/Goods_order/refundOrder',{
            params:params
          }).then(res=>{
            res=res.data;
            if(res.status === 0){
              this.$vux.toast.text("退货提交成功，等待商家处理");
              this.status = 1;
            }else {
              this.$vux.toast.text(res.msg);
            }
          }).catch(err=>{
            console.log('my err:'+err)
          })
        }else{
          this.$vux.toast.text("至少说明一个原因");
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../core/base";
</style>
