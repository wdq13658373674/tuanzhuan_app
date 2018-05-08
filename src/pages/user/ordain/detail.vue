<template>
  <div>
    <section class="page-group">
      <div class="user-order-detail mb4065">
        <!--说明:状态
            1、未消费 >
            2、未付款 >
            3、已完成 >
        -->

        <!--状态一:未消费 start-->
        <h1 class="state">
          未消费 >
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

        <h4 class="h4 bold mt20">预约信息</h4>
        <ul class="cell-list auto">
          <li class="item cell p27">
            <span>预约时间</span>
            <span>2018.04.20 14:00</span>
          </li>
          <li class="item cell p27">
            <span>使用地址</span>
            <div  class="text-right">
              <p>龙山一路扬子江商务中心22楼</p>
              <p>小怪兽 18680722222</p>
            </div>
          </li>
          <li class="item cell p27">
            <span>验证编码</span>
            <span class="orange">068975458</span>
          </li>
        </ul>

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
        <!--未消费 end-->

        <!--状态二：未付款 start-->
        <h1 class="state">
          未付款 >
        </h1>

        <h4 class="h4 bold mt20">预约信息</h4>
        <ul class="cell-list auto">
          <li class="item cell p27">
            <span>预约时间</span>
            <span>2018.04.20 14:00</span>
          </li>
          <li class="item cell p27">
            <span>使用地址</span>
            <div  class="text-right">
              <p>龙山一路扬子江商务中心22楼</p>
              <p>小怪兽 18680722222</p>
            </div>
          </li>
          <li class="item cell p27">
            <span>验证编码</span>
            <a href="#" class="orange">等待付款</a>
          </li>
        </ul>
        <!--未付款 end-->

        <!--状态二：已完成 start-->
        <h1 class="state">
          已完成 >
        </h1>

        <h4 class="h4 bold mt20">预约信息</h4>
        <ul class="cell-list auto">
          <li class="item cell p27">
            <span>预约时间</span>
            <span>2018.04.20 14:00</span>
          </li>
          <li class="item cell p27">
            <span>使用地址</span>
            <div class="text-right">
              <p>龙山一路扬子江商务中心22楼</p>
              <p>小怪兽 18680722222</p>
            </div>
          </li>
          <li class="item cell p27">
            <span>验证编码</span>
            <span class="orange">已使用</span>
          </li>
        </ul>
        <!--未付款 end-->
      </div>
    </section>

    <footer>
      <div class="bottom-fixed btn-orange-fixed">
        <a class="link" href="#">取消申请</a>
        <a class="link" href="#">联系商家</a>
      </div>
    </footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Detail",
    components: {

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
  @import '../../../assets/css/userOrderDetail.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
