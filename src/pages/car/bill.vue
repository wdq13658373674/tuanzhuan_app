<template>
  <div>
    <section class="page-group">
      <div class="tz-carInfo">
        <h2 class="h2">请确定您的停车信息无误后在进行支付</h2>

        <div class="content bill">
          <p>
            <span class="f32 mr10">车牌号：渝BG6854</span>
            <span class="pull-right">单位：元</span>
          </p>
          <p>未缴纳</p>
          <p>
            账单总金额
            <i class="icon tp2"></i>
            <span>6.00</span>
            <span class="ml29">¥8.00</span>
          </p>
        </div>

        <ul class="content cell-list auto">
          <li class="item">
            <span class="tit">入场时间</span>
            <span class="con">2018-06-20  12:00</span>
          </li>
          <li class="item">
            <span class="tit">停车时长</span>
            <span class="con">3小时25分钟</span>
          </li>
          <li class="item">
            <span class="tit">车 牌 照</span>
            <div class="img-box">
              <img src="@/assets/images/test/img1.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="no-more">
        - 没有更多记录了 -
      </div>
    </section>

    <footer>
      <a href="#" class="bottom-fixed btn-orange-fixed">我要缴费</a>
    </footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")

  export default {
    name: "Bill",
    data(){
      return {

      }
    },
  }
</script>
<style lang="css">
  @import '../../assets/css/car.css';
</style>
