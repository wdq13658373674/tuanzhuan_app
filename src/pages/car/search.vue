<template>
  <section class="page-group">
    <div class="tz-carInfo-list">
      <h2 class="h2">未找到您的车辆信息，请选择以下近似车牌</h2>

      <ul class="car-list">
        <li class="item">
          <div class="img-box">
            <img src="@/assets/images/test/img1.jpg" alt="">
          </div>

          <div class="con-box">
            <p class="p1">渝BG6854</p>
            <p class="p2">
              <span class="tit">入场时间</span>
              <span>2018-06-20  12:00:09</span>
            </p>
            <p>
              <span class="tit">停车时长</span>
              <span>3小时25分钟</span>
            </p>
          </div>
        </li>
        <li class="item">
          <div class="img-box">
            <img src="@/assets/images/test/img1.jpg" alt="">
          </div>

          <div class="con-box">
            <p class="p1">渝BG6854</p>
            <p class="p2">
              <span class="tit">入场时间</span>
              <span>2018-06-20  12:00:09</span>
            </p>
            <p>
              <span class="tit">停车时长</span>
              <span>3小时25分钟</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")

  export default {
    name: "Search",
    data(){
      return {

      }
    },
  }
</script>
<style lang="css">
  @import '../../assets/css/carList.css';
</style>
