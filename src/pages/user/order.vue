<template>
  <div>
    <section class="page-group">
      <tab>
        <tab-item v-for="(item,index) in tabMenus" :key="index+1" :selected="index===0" @on-item-click="tab">{{item}}</tab-item>
      </tab>
      <ul class="user-order-list">
        <li class="item">
          <div class="top">
            <span class="pull-left">订单编号：33775628</span>
            <span class="pull-right green">已接单</span>
          </div>
          <a href="#"  class="pro">
            <div class="img-box">
              <img src="@/assets/images/test/img7.png" alt="">
            </div>
            <div class="con-box">
              <p class="p1">团转制造小旋风风扇</p>
              <p class="p2">磨砂白; 9寸</p>
              <p class="p3">数量：x1</p>
            </div>
          </a>
          <div class="bottom">
            <div>
              <span>实付:</span>
              <i class="icon tp ml20"></i>
              <span class="f32 orange">85.00</span>
            </div>
            <div>
              <router-link to="/user/order/detail" class="link">查看详情</router-link>
              <a href="#" class="link">取消订单</a>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="top">
            <span class="pull-left">订单编号：33775628</span>
            <span class="pull-right orange">配送中</span>
          </div>
          <a href="#"  class="pro">
            <div class="img-box">
              <img src="@/assets/images/test/img7.png" alt="">
            </div>
            <div class="con-box">
              <p class="p1">团转制造小旋风风扇</p>
              <p class="p2">磨砂白; 9寸</p>
              <p class="p3">数量：x1</p>
            </div>
          </a>
          <div class="bottom">
            <div>
              <span>实付:</span>
              <i class="icon tp ml20"></i>
              <span class="f32 orange">85.00</span>
            </div>
            <div>
              <a href="#" class="link">查看详情</a>
              <a href="#" class="link">取消订单</a>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="top">
            <span class="pull-left">订单编号：33775628</span>
            <span class="pull-right orange">待接单</span>
          </div>
          <a href="#"  class="pro">
            <div class="img-box">
              <img src="@/assets/images/test/img7.png" alt="">
            </div>
            <div class="con-box">
              <p class="p1">团转制造小旋风风扇</p>
              <p class="p2">磨砂白; 9寸</p>
              <p class="p3">数量：x1</p>
            </div>
          </a>
          <div class="bottom">
            <div>
              <span>实付:</span>
              <i class="icon tp ml20"></i>
              <span class="f32 orange">85.00</span>
            </div>
            <div>
              <a href="#" class="link">查看详情</a>
              <a href="#" class="link">取消订单</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import { Tab, TabItem} from 'vux'
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserOrder",
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        tabMenus:['全部','未完成','已完成','售后申请']
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){

    },
    methods:{
      tab(index){
        console.log(index);
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
