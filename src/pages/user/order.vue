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
            <span v-if="item.status === 0 && item.goods_order_is_pay === 1">
              <span class="pull-right orange">未接单</span>
            </span>
            <span v-else-if="item.status === 1 && item.goods_order_is_pay === 1">
              <span class="pull-right orange">已接单</span>
            </span>
            <span v-else-if="item.status === 2 && item.goods_order_is_pay === 1">
              <span class="pull-right orange">取货中</span>
            </span>
            <span v-else-if="item.status === 3 && item.goods_order_is_pay === 1">
              <span class="pull-right orange">配送中</span>
            </span>
            <span v-else-if="item.status === 4 && item.goods_order_is_pay === 1">
              <span class="pull-right green">已送达</span>
            </span>
            <span v-else="item.goods_order_is_pay === 0">
              <span class="pull-right orange">未支付</span>
            </span>
          </div>
          <a href="#"  class="pro">
            <div class="img-box">
              <img class="img" v-lazy="item.goods_info.goods_logo" alt="" />
            </div>
            <div class="con-box">
              <p class="p1">{{item.goods_info.goods_name}}</p>
              <p class="p2">{{item.goods_info.goods_spec_title}}; {{item.property.order_info_goods_property}}</p>
              <p class="p3">数量：x{{item.goods_order_goods_count}}</p>
            </div>
          </a>
          <div class="bottom2">
            <div>
              <span>应付:</span>
              <i class="icon tp ml20"></i>
              <span class="f32 orange">{{item.property.order_info_real_tcion}}</span>
              <span>或 ¥{{item.property.order_info_goods_price}}</span>
            </div>
            <div class="clearfix">
              <span v-if="item.goods_order_is_pay === 0">
                <router-link :to="{path: '/order/pay', query: {order_id: item.goods_order_id}
}" class="link">立即支付</router-link>
              </span>
              <span v-else>
                <a href="#" class="link">查看详情</a>
              </span>
              <span v-if="item.goods_order_status === 1">
                <a class="link" @click="cancelOrder(item.goods_order_id)">已取消</a>
              </span>
              <span v-else-if="item.goods_order_status !== 1">
                <a class="link" @click="cancelOrder(item.goods_order_id)">取消订单</a>
              </span>
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
        tabMenus:['全部','未完成','已完成','售后申请'],
        orderList:'',
        page: 0,
        type: 0,
        busy:false,
        load:false,
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getOrderList(this.type, this.flag);
      this.loadMore();
    },
    methods:{
      getOrderList(type){
        let params={
          user_id: this.userInfo.user_id,
          page: this.page,
          type: type
        };
        this.$axios.get('index/Goods_order/UserListOrder',{
          params:params
        }).then(res=>{
          res=res.data;
          console.log(res);
          if(type){
            //多次加载
            this.orderList = res.data;
            let currentPage = Math.ceil(this.orderList.length/10);
            if(this.page >= currentPage){
              this.busy=true;
              this.load=false;
            }else {
              this.busy=false;
              this.load=true;
            }
          }else {
            //第一次加载
            this.orderList=res.data;
            this.busy=false;
            this.load=false;
          }

        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      tab(type){
        /*选项卡切换*/
        this.getOrderList(type);
      },
      loadMore:function(){
        this.busy = true;
        this.load = true;
        this.page++;
        this.getOrderList(true);
      },
      cancelOrder(order_id) {
        let params={
          order_id: order_id,
          user_id: this.userInfo.user_id
        };

        this.$axios.get('index/Goods_order/cancelOrder',{
          params:params
        }).then(res=>{
          res=res.data;
          console.log(res);
          if(res.status === 0){
            this.getOrderList()
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userOrder.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
