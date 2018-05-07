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
          商家正在备货 >
        </h1>

        <h5 class="h5">
          订单编号：33775628
        </h5>
        <ul class="order-detail-list">
          <li class="item">
            <a href="#" class="link">
              <div class="img-box">
                <img src="@/assets/images/test/img7.png" alt="">
              </div>
              <div class="con-box">
                <p class="p1 clearfix">
                  <span class="tit">团转制造小旋风风团转制造小旋风风扇团转制造小旋风风扇团转制造小旋风风扇团转制造小旋风风扇扇</span>
                  <span class="num">x1</span>
                </p>
                <p class="p2">磨砂白; 9寸</p>
                <p class="p3">
                  <i class="icon tp mr10"></i>
                  <em>85.00</em>
                  <span>¥170.66</span>
                  <span class="span">¥250.66</span>
                </p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <div class="img-box">
                <img src="@/assets/images/test/img7.png" alt="">
              </div>
              <div class="con-box">
                <p class="p1 clearfix">
                  <span class="tit">团转制造小旋风风团转制造小旋风风扇团转制造小旋风风扇团转制造小旋风风扇团转制造小旋风风扇扇</span>
                  <span class="num">x1</span>
                </p>
                <p class="p2">磨砂白; 9寸</p>
                <p class="p3">
                  <i class="icon tp mr10"></i>
                  <em>85.00</em>
                  <span>¥170.66</span>
                  <span class="span">¥250.66</span>
                </p>
              </div>
            </a>
          </li>
        </ul>

        <div class="order-total">
          实付:<i class="icon tp ml10"></i>
          <span class="orange f32">170.00</span>
        </div>

        <!--商家配送 start-->
        <h4 class="h4 bold mt20">配送信息</h4>
        <ul class="cell-list">
          <li class="item cell p27">
            <span>配送时间</span>
            <span>尽快送达</span>
          </li>
          <li class="item cell p27">
            <span>收货地址</span>
            <div>
              <p>龙山一路扬子江商务中心22楼</p>
              <p>小怪兽 18680722222</p>
            </div>
          </li>
          <li class="item cell p27">
            <span>配送服务</span>
            <span>由商家配送</span>
          </li>
        </ul>
        <!--商家配送 end-->

        <!--自提 start-->
        <h4 class="h4 bold mt20">配送信息</h4>
        <ul class="cell-list">
          <li class="item cell p27">
            <span>自提时间</span>
            <span>9:00-19:00</span>
          </li>
          <li class="item cell p27">
            <span>自提地址</span>
            <div>
              <p>龙山一路扬子江商务中心22楼</p>
              <p>小怪兽 18680722222</p>
            </div>
          </li>
          <li class="item cell p27">
            <span>配送服务</span>
            <span>自提</span>
          </li>
        </ul>
        <!--自提 end-->

        <h4 class="h4 bold mt20">订单信息</h4>
        <ul class="cell-list">
          <li class="item cell p27">
            <span>支付方式</span>
            <span>团票支付</span>
          </li>
          <li class="item cell p27">
            <span>下单时间</span>
            <span>2018.05.04 10:07</span>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <div class="bottom-fixed btn-orange-fixed">
        <a class="link" href="#">确认收货</a>
        <a class="link" href="#">联系商家</a>
        <a class="link" href="#">售后申请</a>
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
<style lang="css" scoped>
  @import '../../assets/css/userOrderDetail.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
