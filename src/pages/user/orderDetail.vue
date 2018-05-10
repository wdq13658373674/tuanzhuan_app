<template>
  <div>
    <section class="page-group">
      <div class="user-order-detail mb4065">
        <!--说明:状态
            1、配送中 >
            2、等待商家接单 >
            3、订单已送达 >
            4、待自提 >
            5、已自提 >
            6、商家正在备货 >
        -->
        <h1 class="state">
          <span v-if="orderDetail.order.goods_order_status === 4">
            {{sendStatus[orderDetail.order.goods_order_status][orderDetail.order.goods_order_send_status]}}
          </span>
          <span v-else>
            {{sendStatus[orderDetail.order.goods_order_status]}}
          </span>
          >
        </h1>

        <h5 class="h5">
          订单编号：{{orderDetail.order.goods_order_numb}}
        </h5>
        <ul class="order-detail-list">
          <li v-for="item in orderDetail.order_info" class="item">
            <router-link :to="{path: '/user/order/detail', query: {id: item.goods_order_id}}" class="link">
              <div class="img-box">
                <img class="img" v-lazy="item.goods_logo" alt="" />
              </div>
              <div class="con-box">
                <p class="p1 clearfix">
                  <span class="tit">{{item.goods_name}}</span>
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

        <div class="order-total">
          实付:<i class="icon tp ml10"></i>
          <span class="orange f32">{{total.toFixed(2)}}</span>
        </div>

        <div v-if="orderDetail.order.goods_order_send_type === 1">
          <!--商家配送 start-->
          <h4 class="h4 bold mt20">配送信息</h4>
          <ul class="cell-list auto">
            <li class="item cell p27">
              <span>配送时间</span>
              <span>{{orderDetail.order.goods_order_want_time | stampToDate(true)}}</span>
            </li>
            <li class="item cell p27">
              <span>收货地址</span>
              <div>
                <p>{{orderDetail.order.goods_order_user_address}}</p>
                <p>{{orderDetail.order.goods_order_user_realname}} {{orderDetail.order.goods_order_user_phone}}</p>
              </div>
            </li>
            <li class="item cell p27">
              <span>配送服务</span>
              <span>由商家配送</span>
            </li>
          </ul>
          <!--商家配送 end-->
        </div>

        <div v-else>
          <!--自提 start-->
          <h4 class="h4 bold mt20">配送信息</h4>
          <ul class="cell-list auto">
            <li class="item cell p27">
              <span>自提时间</span>
              <span>{{orderDetail.order.goods_order_want_time | stampToDate(true)}}</span>
            </li>
            <li class="item cell p27">
              <span>自提地址</span>
              <div>
                <p>{{orderDetail.order.pickup.pickup_address}}</p>
                <p>{{orderDetail.order.goods_order_user_realname}} {{orderDetail.order.goods_order_user_phone}}</p>
              </div>
            </li>
            <li class="item cell p27">
              <span>配送服务</span>
              <span>自提</span>
            </li>
          </ul>
          <!--自提 end-->
        </div>


        <h4 class="h4 bold mt20">订单信息</h4>
        <ul class="cell-list">
          <li class="item cell p27">
            <span>支付方式</span>
            <span v-if="orderDetail.order.goods_order_is_pay === 0">未支付</span>
            <span v-else>{{orderDetail.order.goods_order_pay_type}}</span>
          </li>
          <li class="item cell p27">
            <span>下单时间</span>
            <span>{{orderDetail.order.goods_order_create_time | stampToDate(true)}}</span>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <div class="bottom-fixed btn-orange-fixed">
        <a v-if="orderDetail.order.goods_order_status === 4" class="link" @click="collect">确认收货</a>
        <!--<a class="link" @click="collect">确认收货</a>-->
        <span v-if="orderDetail.order.goods_order_status !== 1">
          <router-link v-if="orderDetail.order.goods_order_is_pay === 0" class="link" :to="{path: '/order/pay', query: {order_id: this.$route.query.id}}">立即支付</router-link>

          <a class="link" href="#">联系商家</a>

          <a v-if="orderDetail.order.goods_order_status === 5 || orderDetail.order.goods_order_status === 9 || orderDetail.order.goods_order_status === 10" class="link" @click="tejected">申请退货</a>
        </span>

      </div>
    </footer>
  </div>
</template>

<script>
  import { Tab, TabItem} from 'vux'
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserOrderDetail",
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        orderDetail:{
          order:{
            goods_order_status:0,
            goods_order_refund_numb:0,
            pickup: {
              pickup_address: ''
            }
          },
          order_info:{}
        },
        sendStatus: {
          0:"未确认",
          1:"已取消",
          2:"已退款",
          3:"已退货",
          4:{
            0:"揽件中",
            1:"已揽件",
            2:"取货中",
            3:"配送中",
            4:"已送达"
          },
          5:"已收货",
          6:"自提点待收货",
          7:"自提点已提货",
          8:"已评论",
          9:"申请退货中",
          10:"正在退货",
          11:"拒绝退货"
        },
        total:0
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getGoodsDetail();
    },
    methods:{
      getGoodsDetail(){
        let params={
          goods_order_id:this.$route.query.order_id,
          user_id:this.userInfo.user_id
        };
        this.$axios.get(global.API_HOST+'index/Goods_order/order_info',{
          params:params
        }).then(res=>{
          res=res.data;
          this.orderDetail = res.data;
          console.log(this.orderDetail);
          for(let i in this.orderDetail.order_info){
            this.total += parseFloat(this.orderDetail.order_info[i].order_info_real_tcion);
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      tejected(){
        if(this.orderDetail.order.goods_order_status === 5 && this.orderDetail.order.goods_order_send_status === 4){
          this.$router.push({path: '/user/order/sales/step1', query: {order_id: this.$route.query.order_id, user_id: this.userInfo.user_id, status: 0}});
        }else if(this.orderDetail.order.goods_order_status === 9){
          this.$router.push({path: '/user/order/sales/step1', query: {order_id: this.$route.query.order_id, user_id: this.userInfo.user_id, status: 1}});
        }/*else if(this.orderDetail.order.goods_order_status === 10){
          this.$router.push({path: '/user/order/sales/step3',query: {order_id: this.$route.query.order_id, user_id: this.userInfo.user_id}});
        }*/else {
          this.$router.push({path: '/user/order/sales/step2', query: {order_id: this.$route.query.order_id, user_id: this.userInfo.user_id, status: this.orderDetail.order.goods_order_status,refund_num:this.orderDetail.order.goods_order_refund_time}});
        }
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userOrderDetail.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
