<template>
  <div>
    <section class="page-group">
      <tab>
        <tab-item v-for="(item,index) in tabMenus" :key="index+1" :selected="index===0" @on-item-click="tab">{{item}}</tab-item>
      </tab>
      <ul class="user-order-list">
        <li v-for="(item,index) in orderList" class="item">
          <div class="top">
            <span class="pull-left">订单编号：{{item.goods_order_numb}}</span>

            <span v-if="item.goods_order_is_pay == 0">
                <span class="pull-right orange">未支付</span>
              </span>
            <span v-else>
                <span v-if="item.goods_order_status === 4" class="pull-right" :class="item.goods_order_send_status === 4?'green':'orange'">{{sendStatus[item.goods_order_status][item.goods_order_send_status]}}</span>

              <span v-else class="pull-right" :class="item.goods_order_status === 5?'green':'orange'">{{sendStatus[item.goods_order_status]}}</span>
              </span>
          </div>
          <div v-for="(goods,i) in item.property" class="pro">
            <div class="img-box">
              <router-link :to="{name: 'ShopDetail', query: {id: goods.goods_info.goods_id}}"  ><img class="img" v-lazy="IMG_HOST+goods.goods_info.goods_logo" alt="" /></router-link>
            </div>
            <div class="con-box">
              <p class="p1">{{goods.goods_info.goods_name}}</p>
              <p class="p2">{{goods.goods_info.goods_spec_title}};{{goods.order_info_goods_property}}</p>
              <p class="p3">数量：x{{goods.order_info_goods_count}}</p>
            </div>
          </div>

          <div class="bottom2">
            <div>
              <span>应付:</span>
              <i class="icon tp ml20"></i>
              <span class="f32 orange">{{item.goods_order_tcion}}</span>
              <span>或 ¥{{item.goods_order_price}}</span>
            </div>
            <div class="clearfix">
              <span v-if="item.goods_order_status !== 1">
                <router-link v-if="item.goods_order_is_pay === 0" :to="{name: 'OrderPay', query: {order_id: item.goods_order_id}}" class="link">立即支付</router-link>

                <a v-if="item.goods_order_is_pay === 1 && item.goods_order_status === 4" class="link" @click="confirmGoods(item.goods_order_id,index)">确认收货</a>

                <a v-else-if="item.goods_order_is_pay === 0 && item.goods_order_status < 4" class="link" @click="cancelOrder(item.goods_order_id,index)">取消订单</a>
              </span>
              <router-link :to="{name: 'UserOrderDetail', query: {order_id: item.goods_order_id}}" class="link">查看详情</router-link>
            </div>
          </div>
        </li>

        <li v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <load-more class="load-more" tip="正在加载" v-show="load"></load-more>
          <h3 class="no-more mb40" v-show="!load">
            <span class="tit">- 没有更多记录了 -</span>
          </h3>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import { Tab, TabItem, LoadMore} from 'vux'
  import {mapState} from 'vuex'
  import infiniteScroll from 'vue-infinite-scroll'
  const qs = require("querystring")
  export default {
    name: "UserOrder",
    directives: {infiniteScroll},
    components: {
      Tab,
      TabItem,
      LoadMore
    },
    data() {
      return {
        IMG_HOST:global.IMG_HOST || "",
        tabMenus:['全部','未完成','已完成','售后申请'],
        orderList:{
          property:{
            goods_info:{
              goods_name: ''
            }
          }
        },
        page: 1,
        type: 0,
        busy:false,
        load:false,
        flag: false,
        sendStatus: {
          0:"等待商家确认",
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
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.loadMore();
    },
    methods:{
      /*获取订单列表*/
      getOrderList(type, flag){
        let params={
          user_id: this.userInfo.user_id,
          page: this.page,
          type: type
        };
        this.$axios.get(global.API_HOST+'Goods_order/UserListOrder',{
          params:params
        }).then(res=>{
          res=res.data;
          if(flag){
            //多次加载
            for(let i in res.data){
              this.orderList.push(res.data[i]);
            }
            this.busy=true;
            this.load=false;
            this.flag = false;
          }else {
            //第一次加载
            this.orderList=res.data;
            this.busy=false;
            this.load=false;
            this.flag = true;
          }

        }).catch(err=>{
          console.log('my err:'+err)
        });
        this.page++;
      },
      tab(type){
        /*选项卡切换*/
        this.type = type;
        this.page = 1;
        this.flag = false;
        this.orderList=[];
        this.getOrderList(type);
      },
      /*下拉加载*/
      loadMore:function(){
        this.busy = true;
        this.load = true;
        this.getOrderList(this.type, this.flag);
      },
      /*取消订单*/
      cancelOrder(order_id,index) {
        let _this = this;
        this.$vux.confirm.show({
          title: '提示',
          content: '你确定要取消该订单吗？',
          onConfirm(){
            let params={
              order_id: order_id,
              user_id: _this.userInfo.user_id
            };

            _this.$axios.get(global.API_HOST+'Goods_order/cancelOrder',{
              params:params
            }).then(res=>{
              res=res.data;

              if(res.status === 0){
                _this.orderList[index].goods_order_status = 1;
              }
            }).catch(err=>{
              console.log('my err:'+err)
            })
          }
        })

      },
      /*确认收货*/
      confirmGoods(order_id, index){
        let _this = this;
        _this.$vux.confirm.show({
          title: '提示',
          content: '请在收到快递后确认收货！',
          onConfirm(){
            let params={
              goods_order_id: order_id,
              user_id: _this.userInfo.user_id
            };

            _this.$axios.get(global.API_HOST+'goods_order/ConfirmGoods',{
              params:params
            }).then(res=>{
              res=res.data;
              if(res.status === 0){
                _this.orderList[index].goods_order_status = 5;
              }else {
                _this.$vux.toast.text(res.msg);
              }
            }).catch(err=>{
              console.log('my err:'+err)
            })
          }
        });
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userOrder.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
