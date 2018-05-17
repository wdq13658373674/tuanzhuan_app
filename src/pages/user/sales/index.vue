<template>
  <div>
    <section class="page-group">
      <step :step="steps"></step>
      <div class="user-after-sales">
        <h4 class="h4">订单编号：{{getSalesData.order.goods_order_numb}}</h4>

        <ul class="sales-list">
          <li v-for="item in getSalesData.order_info" class="item">
            <router-link :to="{path: '/shop/detail', query: {id: item.goods.goods_id}}" class="link">
              <div class="img-box">
                <img class="img" v-lazy="item.goods.goods_logo" alt="" />
              </div>
              <div class="con-box">
                <p class="p1 clearfix">
                  <span class="tit">{{item.goods.goods_name}}</span>
                  <span class="num">x{{item.order_info_goods_count}}</span>
                </p>
                <p class="p2">{{item.goods.goods_spec_title}}; {{item.order_info_goods_property}}</p>
                <p class="p3">
                  <i class="icon tp mr10"></i>
                  <em>{{item.order_info_real_tcion}}</em>
                  <span>¥{{item.order_info_goods_price}}</span>
                  <span class="span">¥{{item.order_info_goods_money}}</span>
                </p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="sales-total">
          实付:<i class="icon tp ml10"></i>
          <span class="orange f32">{{total.toFixed(2)}}</span>
        </div>

        <h4 class="h4 bold mt20">订单信息</h4>
        <ul class="cell-list">
          <li class="item cell p27">
            <span>支付方式</span>
            <span v-if="getSalesData.order.goods_order_pay_type == 'tcion'">团票</span>
            <span v-else-if="getSalesData.order.goods_order_pay_type == 'alipay'">支付宝</span>
            <span v-else-if="getSalesData.order.goods_order_pay_type == 'weixin'">微信</span>
            <span v-else-if="getSalesData.order.goods_order_pay_type == 'balancce'">余额</span>
            <span v-else-if="getSalesData.order.goods_order_pay_type == 'arrival'">到付</span>
            <span v-else>线下</span>
          </li>
          <li class="item cell p27">
            <span>下单时间</span>
            <span>{{getSalesData.order.goods_order_create_time | stampToDate(true)}}</span>
          </li>
        </ul>

        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
  import step from '@/components/step'
  import {mapState} from 'vuex'
  export default {
    name: "UserOrderSales",
    components: {
      step
    },
    data() {
      return {
        getSalesData:{
          order: {
            goods_order_numb: 0,
            goods_order_create_time: 0
          },
          order_info: {}
        },
        total:0
      }
    },
    computed:{
      ...mapState(['userInfo']),
      steps(){
        if(this.$route.name=='UserSalesStep2'){
          return 1;
        }else if(this.$route.name=='UserSalesStep3'){
          return 2;
        }
        return 0;
      }
    },
    mounted(){
      this.getSales();
    },
    methods:{
      getSales(){
        let params={
          order_id: this.$route.query.order_id,
          user_id: this.userInfo.user_id
        };
        this.$axios.get(global.API_HOST+'index/goods_order/afterSale',{
          params:params
        }).then(res=>{
          res=res.data;
          this.getSalesData = res.data;
          for(let i in this.getSalesData.order_info){
            this.total += parseFloat(this.getSalesData.order_info[i].order_info_real_tcion);
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css">
  @import '../../../assets/css/salesApply.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
