<template>
  <div>
    <section class="page-group">

      <step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <step-item title="申请退货"></step-item>
        <step-item title="退货中"></step-item>
        <step-item title="退货完成"></step-item>
      </step>

      <div class="user-after-sales">
        <h4 class="h4">订单编号：33775628</h4>

        <ul class="sales-list">
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
        <div class="sales-total">
          实付:<i class="icon tp ml10"></i>
          <span class="orange f32">170.00</span>
        </div>

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

        <h5 class="h5 mt20">退货原因 <span class="gray">（至少说明一个原因）</span></h5>
        <textarea name="" id="" rows="6" class="textarea" placeholder="请说明退货原因"></textarea>
      </div>
    </section>
    <footer>
      <a href="#" class="bottom-fixed btn-orange-fixed">提交</a>
    </footer>
  </div>
</template>

<script>
  import { Step, StepItem} from 'vux'
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserOrderSales",
    components: {
      Step,
      StepItem
    },
    data() {
      return {
        step2: 0
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
  @import '../../assets/css/salesApply.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
