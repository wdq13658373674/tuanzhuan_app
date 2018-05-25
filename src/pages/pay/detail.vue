<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="text-center">
          <p class="f40 mt40 green">恭喜你支付成功</p>
          <p class="f30 mt40">订单总额</p>
          <p class="f40 mt15">¥{{payMoney}}</p>
        </div>
        <hr class="line mt40"/>

        <ul class="msg-list">
          <li class="item cell">
            <span>交易单号</span>
            <span class="con">{{orderInfo.goods_order_numb}}</span>
          </li>
          <li class="item cell">
            <span>交易时间</span>
            <span class="con">{{orderInfo.goods_order_pay_time | stampToDate(true)}}</span>
          </li>
          <li class="item cell">
            <span>当前状态</span>
            <span class="con">支付成功</span>
          </li>
          <li class="item cell">
            <span>支付方式</span>
            <span class="con">
              {{payType[orderInfo.goods_order_pay_type]}}
            </span>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <router-link  :to="{name:'UserOrder'}" class="bottom-fixed btn-orange-fixed">返回</router-link>
    </footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "OrderPayDetail",
    components:{

    },
    data(){
      return {
        order_id:this.$route.query.order_id,
        orderInfo:[],
        payMoney:0.00,
        payType:{
          alipay:"支付宝支付",
          weixin:"微信支付",
          balance:"余额支付",
          tcion:"团票兑换",
          arrival:"货到付款",
          offline:"线下付款"
        },
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getOrderInfo();
    },
    methods:{
      /**
       * 获取订单信息
       */
      getOrderInfo:function () {
        //获取店铺配置信息
        var that=this;
        let param={
          goods_order_id:that.$route.query.order_id,
          user_id:that.userInfo.user_id
        };
        this.$axios.get(global.API_HOST+'Goods_order/getOrder',{
          params:param
        }).then(res=>{
          res=res.data;

          if(res.status!=0){
            this.$router.push('/shop/cart');
          }else{
            if(res.data.order.goods_order_is_pay==0){
              this.$router.push('/shop/cart');
              return false;
            }

            that.orderInfo=res.data.order;

            if(that.orderInfo.goods_order_pay_type=="tcion"){
              that.payMoney=this.orderInfo.goods_order_tcion
            }else{
              that.payMoney=this.orderInfo.goods_order_price
            }
          }

      }).catch(err=>{
          console.log('my err:'+ err);
      });
      },
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/orderPay.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
