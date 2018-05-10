<template>
  <div>
    <!--同意售后申请 start-->
    <div v-if="this.$route.query.status !== 11">
      <!--<div class="content sales-back">-->
      <!--<em>商家已同意售后申请,请将商品寄往或者自行送往:</em>-->
      <!--<p>重庆市渝北区扬子江商务中心22楼 小怪兽收</p>-->
      <!--<p>联系电话：86954763</p>-->
      <!--</div>-->
      <div v-if="this.$route.query.refund_num === 0">
        <div v-if="flag">
          <div class="tab-box">
            <div class="tab" :class="active?'active':''" @click="tab">快递寄回</div>
            <div class="tab" :class="active?'':'active'" @click="tab">自行送往</div>
          </div>

          <h5 v-if="active" class="h5 bold">填写快递信息</h5>
          <ul v-if="active" class="cell-list sale-form">
            <!--<li class="item cell p27">-->
            <!--<label>快递公司</label>-->
            <!--<input type="text" class="input" placeholder="请填写快递公司名称，如顺丰等">-->
            <!--</li>-->
            <li  class="item cell p27">
              <label>快递单号</label>
              <input type="text" class="input" placeholder="请输入快递单号" v-on:input ="inputFunc" v-model="orderNums">
            </li>
          </ul>
        </div>
        <div v-else>
          <h5 class="h5 mt20">等待商家确认收货</h5>
          <div v-if="active">
            <h5 class="h5 bold mt20">退货快递信息</h5>
            <ul class="cell-list sale-form">
              <!--<li class="item cell p27">-->
              <!--<label>快递公司</label>-->
              <!--<input type="text" class="input" placeholder="圆通快递">-->
              <!--</li>-->
              <li class="item cell p27">
                <label>快递单号</label>
                <!--<span class="input">{{this.$route.query.order_num}}</span>-->
                <input type="text" class="input" v-model="orderNums" disabled >
              </li>
            </ul>
          </div>
        </div>
        <footer v-if="flag">
          <!--说明:添加 disabled 禁止点击  -->
          <a class="bottom-fixed btn-orange-fixed" :class="disable ?'disabled':''" @click="refundOrderInfo">确认退货</a>
        </footer>
      </div>
      <div v-else>
        <h5 class="h5 mt20">等待商家确认收货</h5>
        <h5 class="h5 bold mt20">退货快递信息</h5>
        <ul class="cell-list sale-form">
          <!--<li class="item cell p27">-->
          <!--<label>快递公司</label>-->
          <!--<input type="text" class="input" placeholder="圆通快递">-->
          <!--</li>-->
          <li class="item cell p27">
            <label>快递单号</label>
            <!--<span class="input">{{this.$route.query.order_num}}</span>-->
            <input type="text" class="input" v-model="this.$route.query.refund_num" disabled >
          </li>
        </ul>
      </div>

    </div>
    <!--同意售后申请 end-->

    <!--拒绝售后申请 start-->
    <div v-else>
      <div class="content sales-back mb40">
        <em>商家拒绝了您的售后申请</em>
        <p>拒绝原因:此商品没有退换货服务。</p>
      </div>
    </div>
    <!--拒绝售后申请 end-->


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
        active: true,
        disable: true,
        orderNums:'',
        flag: true
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
    },
    methods:{
      tab(){
        this.active = !this.active;
        if(this.active){
          this.disable = true;
        }else {
          this.disable = false;
        }
      },
      inputFunc(){
        if(this.orderNums !== ''){
          this.disable = false;
        }else{
          this.disable = true;
        }

      },
      refundOrderInfo(){
        let params={};
        if(this.orderNums !== ''){
          params={
            goods_order_id:this.$route.query.order_id,
            goods_order_refund_numb:this.orderNums
          };
        }else{
          params={
            goods_order_id:this.$route.query.order_id,
            goods_order_refund_numb:''
          };
        }
        console.log(params);
        this.disable = false;
        this.$axios.get(global.API_HOST+'index/goods_order/refundOrderInfo',{
          params:params
        }).then(res=>{
          res=res.data;
          this.getSalesData = res.data;
          this.flag = false;
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../core/base";
</style>
