<template>
  <div>
    <div class="user-header">
      <div class="head-img">
        <div class="img-box">
          <img src="@/assets/images/icons/u_head.png" alt="">
        </div>
      </div>
      <p class="p1">小怪兽</p>
      <p class="p2">云鼎府邸12栋1-2</p>

      <!--波浪 start-->
      <div class="waveWrapper waveAnimation">
        <div class="wave waveTop"></div>
        <div class="wave waveMiddle"></div>
        <div class="wave waveBottom"></div>
      </div>
      <!--波浪 end-->
    </div>

    <section class="page-group">
      <div class="content user-menu">
        <a href="#">
          <div class="item">
            <p class="p1 orange">9999.9</p>
            <p class="p2">我的团票</p>
          </div>
        </a>
        <a href="#">
          <div class="item">
            <p class="p1">¥888.88</p>
            <p class="p2">账户余额</p>
          </div>
        </a>
        <a href="#">
          <div class="item">
            <p class="p1">777.77</p>
            <p class="p2">我的积分</p>
          </div>
        </a>
      </div>
      <div class="content mt20">
        <ul class="user-belong-list">
          <li class="item">
            <a href="#" class="link">
              <p class="p1">物业账单</p>
              <p class="p2">253.63元</p>
              <i class="icon arrow"></i>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <p class="p1">我的房屋</p>
              <p class="p2">西城御府3栋9-8</p>
              <i class="icon arrow"></i>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <p class="p1">优惠券</p>
              <p class="p2">共2张</p>
              <i class="icon arrow"></i>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <p class="p1">银行卡</p>
              <p class="p2">共1张</p>
              <i class="icon arrow"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="user-func mt20">
        <h4 class="h4">
          <span>常用功能</span>
        </h4>

        <ul class="user-func-list clearfix">
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon1.png" alt="">
              <p class="p1">我的订单</p>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon2.png" alt="">
              <p class="p1">我的预约</p>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon3.png" alt="">
              <p class="p1">我的收藏</p>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon4.png" alt="">
              <p class="p1">任务清单</p>
            </a>
          </li>
          <li class="item">
            <router-link to="/user/message" class="link">
              <img class="img" src="@/assets/images/icons/i_icon5.png" alt="">
              <p class="p1">账号管理</p>
            </router-link>
          </li>
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon6.png" alt="">
              <p class="p1">优惠券</p>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon7.png" alt="">
              <p class="p1">房屋住户</p>
            </a>
          </li>
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon8.png" alt="">
              <p class="p1">我的快递</p>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/pages/layout/footer'
  export default {
    name: "User",
    components:{
      Footer
    },
    data(){
      return {

      }
    },
    methods:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/user.css';
  @import '../../assets/css/wave.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
