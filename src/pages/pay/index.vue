<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="text-center">
          <p class="f30 mt40">订单总额</p>
          <p class="mt40">
            <i class="tp"></i>
            <span class="f40 orange">{{orderInfo.goods_order_tcion}}</span>
            <span class="f32 gray ml20 mr20">或</span>
            <span class="f40">¥{{orderInfo.goods_order_price}}</span>
          </p>
          <p class="mt60 mb40 gray">*您可以选择用团票兑换或者人民币支付</p>
        </div>
      </div>

      <h2 class="h2">选择支付方式</h2>
      <div class="pay-list">
        <label class="item">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay1.svg" alt="">
            <div class="pull-left">
              <p class="p">团票兑换</p>
              <p class="p">节省{{orderInfo.goods_order_price}}元</p>
            </div>
          </div>
          <div class="cell">
            <span class="f28 mr10">剩余团票</span>
            <i class="tp"></i>
            <span class="f28 mr10 orange">{{pay_user.user_tcion}}</span>

            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay2.svg" alt="">
            <div class="pull-left">
              <p class="p">余额支付</p>
              <p class="p">赠送0.10物业券</p>
            </div>
          </div>
          <div>
            <span class="f28 mr10">我的余额</span>
            <span class="f16 gray">¥</span>
            <span class="f28 mr10">{{pay_user.user_money}}</span>
            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item" v-for="(item,key) in pay_list">
          <div>
            <img class="img pull-left" v-lazy="item.img" alt="" />
            <div class="pull-left">
              <p class="p">{{item.title}}</p>
              <p class="p">赠送0.10物业券</p>
            </div>
          </div>
          <div>
            <input type="radio" name="pay" >
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
      </div>
    </section>

    <footer>
      <div class="bottom-fixed cell">
        <div class="pay-money">微信支付：<span class="orange">¥1592.59</span></div>
        <div class="btn btn-orange" @click="orderPay">结算</div>
      </div>
    </footer>

    <!--popup 输入支付密码-->
    <popup v-model="popshow" style="background: #fff;">
      <span class="pop-close"  @click="popshow=!popshow">X</span>
      <EnterPassword></EnterPassword>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {Popup} from 'vux'
  import {mapState} from 'vuex'
  import EnterPassword from '@/components/enterPassword'
  export default {
    name: "OrderPay",
    components:{
      Popup,
      EnterPassword
    },
    data(){
      return {
        popshow:false,
        orderInfo:[],
        pay_user:[],
        pay_list:{
          0:{
              img:"/static/img/c_pay3.svg",
              title:"支付宝支付",
              type:"alipay",
          },
          1:{
              img:"/static/img/c_pay4.svg",
              title:"微信支付",
              type:"wxpay",
          },
          2:{
              img:"/static/img/c_pay5.svg",
              title:"线下支付",
              type:"lixian",
          }
        }
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getOrderInfo();
    },
    methods:{
      /*结算*/
      orderPay(){
        this.popshow=true;
      },

      /**
       * 获取订单信息
       */
      getOrderInfo:function () {
//获取店铺配置信息
        let param={
          goods_order_id:this.$route.query.order_id,
          user_id:this.userInfo.user_id
        };
        this.$axios.get('/index/Goods_order/getOrder',{
          params:param
        }).then(res=>{
          res=res.data;

          console.table(res.data);

          if(res.status!=0){

          }else{
            this.orderInfo=res.data.order;
            this.pay_user=res.data.user;
          }

        }).catch(err=>{
          console.log('my err:'+ err);
        });
      },


    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/orderPay.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
