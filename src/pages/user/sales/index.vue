<template>
  <div>
    <section class="page-group">
      <step :step="steps"></step>
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

        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
  import step from '@/components/step'
  export default {
    name: "UserOrderSales",
    components: {
      step
    },
    data() {
      return {

      }
    },
    computed:{
      steps(){
        if(this.$route.name=='UserSalesStep2'){
          return 1;
        }else if(this.$route.name=='UserSalesStep3'){
          return 2;
        }
        return 0;
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css">
  @import '../../../assets/css/salesApply.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
