<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="order-mark clearfix">
          <label>
            <input type="radio" value="one" name="send" v-model="own">
            <span class="mark">商家配送</span>
          </label>
          <label>
            <input type="radio" value="two" name="send"  v-model="own">
            <span class="mark">到店自提</span>
          </label>
        </div>
      </div>

      <!--商家配送-->
      <div v-show="own=='one'">
        <h4 href="#" class="h4" @click="popControl=!popControl">
          <span class="txt">期望送达时间 [预计16:29]</span>
          <span class="f60 gray"> &rsaquo; </span>
        </h4>

        <router-link to="/shop/address" class="order-address">
          <p class="p">重庆 重庆 渝北区 扬子江商务中心扬子江商务中心扬子江商务中心扬子江商务中心 22楼</p>
          <p class="p">
            <span>小怪兽</span>
            <span>18680722507</span>
          </p>
        </router-link>
      </div>
      <!--商家配送-->

      <!--到店自提-->
      <h4 v-show="own=='two'" class="h4">
        <span class="txt">邻水县西城御府房计划售房部</span>
        <span class="f60 gray"> &rsaquo; </span>
      </h4>
      <!--到店自提-->

      <ul class="order-shop-list mt20">
        <li class="item">
          <a class="cell" href="#">
            <div class="img-box">
              <img class="img" src="@/assets/images/test/img4.png" alt="">
            </div>
            <div class="con-box">
              <p class="title">
                <span class="w388 pull-left">秋冬折扣 zara 女装 垫肩装饰夹克 基本款外套 皮外套 07894894712</span>
                <span class="gray pull-right">数量：99</span>
              </p>
              <p class="p2">
                规格:黑色Black;155/76A/XS
                规格:黑色Black;155/76A/XS
                规格:黑色Black;155/76A/XS
                规格:黑色Black;155/76A/XS
                规格:黑色Black;155/76A/XS
              </p>
              <p class="p3">
                <i class="icon tp mr10"></i>
                <span class="f32 orange"> 29.00 </span>
                <em>¥36.00</em>
              </p>
            </div>
          </a>
        </li>
        <li class="item">
          <a class="cell" href="#">
            <div class="img-box">
              <img class="img" src="@/assets/images/test/img4.png" alt="">
            </div>
            <div class="con-box">
              <p class="title">
                <span class="w388 pull-left">秋冬折扣 zara 女装 垫肩装饰夹克 基本款外套 皮外套 07894894712</span>
                <span class="gray pull-right">数量：99</span>
              </p>
              <p class="p2">
                规格:黑色Black;155/76A/XS
              </p>
              <p class="p3">
                <i class="icon tp mr10"></i>
                <span class="f32 orange"> 29.00 </span>
                <em>¥36.00</em>
              </p>
            </div>
          </a>
        </li>
      </ul>
      <ul class="order-money cell-list">
        <li class="item cell">
          <span>配送费</span>
          <span>¥ 0.00</span>
        </li>
        <li class="item cell">
          <span>优惠活动</span>
          <span class="orange">满100减50</span>
        </li>
      </ul>

      <div class="order-remark mt20">
        <p class="cell">
          <span class="span">订单备注</span>
          <input class="input" type="text" placeholder="击添加订单备注">
        </p>
      </div>
    </section>
    <footer>
      <div class="bottom-fixed cell">
        <div class="order-total">
          <p class="f32">合计:
            <i class="icon tp"></i>
            <span class="orange">8.00</span>
          </p>
          <p>¥16.00</p>
        </div>
        <a href="#" class="btn btn-orange">结算</a>
      </div>
    </footer>

    <!--popup-->
    <popup v-model="popControl">
      <div class="pop-order-time">
        <h5 class="tit">送达时间</h5>
        <div class="time-box">
          <div class="nav-list">
            <span class="item active">今日</span>
            <span class="item">明日</span>
          </div>

          <div class="con">
          <scroller height="100%" lock-x>
            <div>
              <p class="p">尽快送达17:15</p>
              <p class="p">尽快送达17:15 <span class="gray">(3元配送费)</span></p>
              <p class="p">尽快送达17:15</p>
              <p class="p">尽快送达17:15</p>
              <p class="p">尽快送达17:15</p>
              <p class="p">尽快送达17:15</p>
              <p class="p">尽快送达17:15</p>
              <p class="p">尽快送达17:15</p>
              <p class="p">尽快送达17:15</p>
            </div>
          </scroller>
          </div>
        </div>
      </div>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import { Popup , Scroller} from 'vux'
  export default {
    name: "ShopOrder",
    components: {
      Popup,
      Scroller,
    },
    data () {
      return {
        popControl:false,
        own:'one',
      }
    },
    methods: {

    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/order.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
