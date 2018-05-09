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
        <label class="item" title="团票兑换" @click="choose_pay('团票兑换','tcion')">
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

            <input type="radio" name="pay" v-model="payType" value="tcion" />
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item" @click="choose_pay('余额支付','money')">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay2.svg" alt="">
            <div class="pull-left">
              <p class="p">余额支付</p>
              <p class="p">赠送{{ticket}}物业券</p>
            </div>
          </div>
          <div>
            <span class="f28 mr10">我的余额</span>
            <span class="f16 gray">¥</span>
            <span class="f28 mr10">{{pay_user.user_money}}</span>
            <input type="radio" name="pay" v-model="payType" value="money" />
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item" v-for="(item,key) in pay_list"  @click="choose_pay(item.title,item.type)">
          <div>
            <img class="img pull-left" v-lazy="item.img" alt="" />
            <div class="pull-left">
              <p class="p">{{item.title}}</p>
              <p class="p">赠送{{ticket}}物业券</p>
            </div>
          </div>
          <div>
            <input type="radio" name="pay" v-model="payType" v-bind:value="item.type"/>
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
      </div>
    </section>

    <footer>
      <div class="bottom-fixed cell">
        <div class="pay-money">
          {{title}}：
          <span class="orange" v-if="payType!='tcion'">¥{{payMoney}}</span>
          <span class="orange" v-if="payType=='tcion'">{{payMoney}}</span>
        </div>
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
  const qs = require("querystring");

  export default {
    name: "OrderPay",
    components:{
      Popup,
      EnterPassword
    },
    data(){
      return {
        popshow:false,
        order_id:this.$route.query.order_id,
        orderInfo:[],
        pay_user:[],
        ticket_rate:0.5,
        ticket:0,
        title:"团票兑换",
        payType:"tcion",
        payMoney:0,
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
        var that=this;

        if(that.payType=="tcion"){
          if(parseFloat(that.pay_user.user_tcion)<parseFloat(that.orderInfo.goods_order_tcion)){
            this.$vux.toast.text('团票余额不足,请换一种支付方式!','middle');
            return false;
          }
        }

        if(that.payType=="money"){
          if(parseFloat(that.pay_user.user_money)<parseFloat(that.orderInfo.goods_order_price)){
            this.$vux.toast.text('我的余额不足,请换一种支付方式!','middle');
            return false;
          }
        }

        if(!that.userInfo.set_paypassword){
          const self=this;
          this.$vux.confirm.show({
            title: '提示',
            content: '您没有设置支付密码,是否现在设置!',
            onConfirm(){
              self.$router.push('/user/safe/setPayPassword');
            }
          });

          return false;
        }

        if(that.payType=="tcion" || that.payType=="money"){
          let param={
            user_id:that.userInfo.user_id,
            order_id:that.$route.query.order_id,
            type:that.payType
          };
          this.$axios.post('/index/user/pay_money',qs.stringify(param)).then(res=>{
            res=res.data;
            if(res.status==0){
              this.$router.push('/order/pay/detail?order_id='+that.order_id);
            }else {
              this.$vux.toast.text(res.msg);
            }
          }).catch(err=>{
              console.log('my err:'+err);
          });
        }

        //支付密码
        that.popshow=true;
      },

      /**
       * 选择支付方式
       */
      choose_pay(tit,type){
        this.title=tit;
        this.payType=type;
        if(type!="tcion"){
          this.payMoney=this.orderInfo.goods_order_price
        }else{
          this.payMoney=this.orderInfo.goods_order_tcion
        }
      },

      /**
       * 获取订单信息
       */
      getOrderInfo:function () {
      //获取店铺配置信息
        var that=this;
        let param={
          goods_order_id:that.$route.query.order_id,
          user_id:that.userInfo.user_id
        };
        this.$axios.get(global.API_HOST+'/index/Goods_order/getOrder',{
          params:param
        }).then(res=>{
          res=res.data;

          if(res.status!=0){
            this.$router.push('/shop/cart');
          }else{
            if(res.data.order.goods_order_is_pay==1){
              this.$router.push('/user/order');
              return false;
            }

            that.orderInfo=res.data.order;
            that.pay_user=res.data.user;

            that.payMoney=this.orderInfo.goods_order_tcion

            that.ticket=(res.data.order.goods_order_price*that.ticket_rate).toFixed(2);
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
