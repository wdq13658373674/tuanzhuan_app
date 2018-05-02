<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="text-center">
          <p class="f40 mt40 green">恭喜你支付成功</p>
          <p class="f30 mt40">订单总额</p>
          <p class="f40 mt15">¥1.99</p>
        </div>
        <hr class="line mt40"/>

        <ul class="msg-list">
          <li class="item cell">
            <span>交易单号</span>
            <span class="con">1665656411231254</span>
          </li>
          <li class="item cell">
            <span>交易时间</span>
            <span class="con">2014/01/28  15:33:56</span>
          </li>
          <li class="item cell">
            <span>当前状态</span>
            <span class="con">支付成功</span>
          </li>
          <li class="item cell">
            <span>支付方式</span>
            <span class="con">支付宝支付</span>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <a href="#" class="bottom-fixed btn-orange-fixed">返回</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "OrderPayDetail",
    components:{

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
  @import '../../assets/css/orderPay.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
