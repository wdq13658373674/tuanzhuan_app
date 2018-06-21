<template>
  <section class="page-group">
    <div class="tz-car-pay">
      <div class="h2">
        <div class="name">
          <i class="icon home pull-left"></i>
          <span class="ml10">停车场名称：房计划停车场</span>
        </div>
        <a href="#" class="change">切换</a>
      </div>

      <h5 class="h5">请输入车牌号缴费</h5>
      <ul class="car-num">
        <li class="item">
          <input class="input" type="text" value="渝">
        </li>
        <li class="item">
          <input class="input" type="text">
        </li>
        <li class="item">
          <input class="input" type="text">
        </li>
        <li class="item">
          <input class="input" type="text">
        </li>
        <li class="item">
          <input class="input" type="text">
        </li>
        <li class="item">
          <input class="input" type="text">
        </li>
        <li class="item">
          <input class="input" type="text">
        </li>
        <li class="item dashed">
          <p class="add">+</p>
          <p>新能源</p>
        </li>
      </ul>

      <!--说明
          禁止点击状态；disabled
      -->
      <div class="btn-box">
        <router-link :to="{name:'CarSearch'}" class="btn btn-orange mt60">查询我的车辆</router-link>
      </div>

      <div class="tips">
        <p>1.临牌、特殊车牌及识别有误的车辆，请到人工收费处缴费；</p>
        <p>2.缴费后请在免费出场时间内离场，超时需补缴停车费。</p>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")

  export default {
    name: "Pay",
    data(){
      return {

      }
    },
  }
</script>
<style lang="css">
  @import '../../assets/css/carPay.css';
</style>
