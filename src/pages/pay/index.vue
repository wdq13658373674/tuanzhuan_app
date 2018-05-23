<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="text-center">
          <p class="f30 mt40">订单总额</p>
          <p class="mt40">
            <i class="tp"></i>
            <span class="f40 orange">{{orderType?orderInfo.goods_order_tcion:property_tcion}}</span>
            <span class="f32 gray ml20 mr20">或</span>
            <span class="f40">¥{{orderType?orderInfo.goods_order_price:property_money_sum}}</span>
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
              <p class="p">节省{{orderType?orderInfo.goods_order_price:property_money_sum}}元</p>
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
        <label v-if="this.$route.query.type" class="item" title="物业券兑换" @click="choose_pay('物业券兑换','ticket')">
          <div>
            <img class="img pull-left" src="@/assets/images/img/c_pay6.png" alt="">
            <div class="pull-left">
              <p class="p">物业券兑换</p>
              <p class="p">节省{{orderType?orderInfo.goods_order_price:property_money_sum}}元</p>
            </div>
          </div>
          <div class="cell">
            <span class="f28 mr10">剩余物业券</span>
            <i class="tp"></i>
            <span class="f28 mr10 orange">{{pay_user.user_ticket}}</span>

            <input type="radio" name="pay" v-model="payType" value="ticket" />
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
        <label class="item" @click="choose_pay('余额支付','balance')">
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
            <input type="radio" name="pay" v-model="payType" value="balance" />
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
          <span class="orange" v-if="payType=='balance'">¥{{payMoney}}</span>
          <span class="orange" v-else-if="payType=='tcion'">{{payMoney}}</span>
          <span class="orange" v-else>{{payMoney}}</span>
        </div>
        <div class="btn btn-orange" @click="orderPay">结算</div>
      </div>
    </footer>

    <!--popup 输入支付密码-->
    <popup v-model="popshow" style="background: #fff;">
      <span class="pop-close"  @click="popshow=!popshow">X</span>
      <EnterPassword @run="checkPwd"></EnterPassword>
    </popup>
    <!--popup-->
    <div v-show="qrcodeUrl" class="response">
      <qrcode
        :value="qrcodeUrl"
        v-if="qrcodeUrl"
        :options="{ size: 500 }">
      </qrcode>
      <p>请使用微信扫码支付</p>
    </div>
  </div>

</template>

<script>
  import {Popup} from 'vux'
  import {mapState} from 'vuex'
  import Qrcode from '@xkeshi/vue-qrcode'
  import EnterPassword from '@/components/enterPassword'
  import gopay from '@/assets/js/payment/gopay'
  const qs = require("querystring");

  export default {
    name: "OrderPay",
    components:{
      Popup,
      EnterPassword,
      Qrcode
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
              img:"./static/images/img/c_pay3.svg",
              title:"支付宝支付",
              type:"alipay",
          },
          1:{
              img:"./static/images/img/c_pay4.svg",
              title:"微信支付",
              type:"weixin",
          },
          2:{
              img:"./static/images/img/c_pay5.svg",
              title:"线下支付",
              type:"lixian",
          }
        },
        orderType: true,  //true:默认商品订单支付，false:物业服务费
        property_money_sum:0,
        property_tcion:0,
        property_ticket: 0,
        qrcodeUrl:''
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){

      if(this.$route.query.type){
        this.getProperty();
      }else{
        this.getOrderInfo();
      }
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

        if(that.payType=="ticket"){
          if(parseFloat(that.pay_user.user_ticket)<parseFloat(that.property_money_sum)){
            this.$vux.toast.text('物业券余额不足,请换一种支付方式!','middle');
            return false;
          }
        }

        if(that.payType=="balance"){
          if(parseFloat(that.pay_user.user_money)<parseFloat(that.orderInfo.goods_order_price)){
            this.$vux.toast.text('我的余额不足,请换一种支付方式!','middle');
            return false;
          }
        }

        if(that.userInfo.user_paypass!=1){
          const self=this;
          this.$vux.confirm.show({
            title: '提示',
            content: '您没有设置支付密码,是否现在设置!',
            onConfirm(){
              self.$router.replace('/user/safe/setPayPassword');
            }
          });

          return false;
        }
        //支付密码
        that.popshow=true;
      },

        /**
         * 支付密码回调
         */
      checkPwd(code){
        var that=this;

        if(code==1){
          if(this.payType=="tcion" || this.payType=="balance" || this.payType == "ticket"){
            if(this.orderType){
              /** 商品订单支付 **/
              let param={
                user_id:that.userInfo.user_id,
                order_id:that.$route.query.order_id,
                type:that.payType
              };
              console.log(param);
              this.$axios.post(global.API_HOST+'user/pay_money',qs.stringify(param)).then(res=>{
                res=res.data;
                if(res.status==0){
                  this.$router.push('/order/pay/detail?order_id='+that.order_id);
                }else {
                  this.$vux.toast.text(res.msg);
                }
              }).catch(err=>{
                console.log('my err:'+err);
              });
            }else {

              /** 物业支付 **/
              let param={
                user_id: this.userInfo.user_id,
                property: JSON.stringify( this.$route.query.property_id ),
                type: this.payType
              };
              console.log(param);
              this.$axios.post(global.API_HOST+'property/pay_money',qs.stringify(param)).then(res=>{
                res=res.data;
                if(res.status==0){
                  this.$router.push('/property/service');
                  this.$vux.toast.text("支付成功");
                }else {
                  this.$vux.toast.text(res.msg);
                }
              }).catch(err=>{
                console.log('my err:'+err);
              });
            }
          }else if(this.payType=="lixian"){
            console.log('线下支付')


          } else {
            console.log('支付接口');
            console.log(this.payType);
            let _this = this;
            let type = this.payType;
            let user_id = this.userInfo.user_id;
            let total = this.payMoney;
            let subject = this.paymentType+'充值';
            console.log(this.paymentType);
            gopay(subject,total,user_id,type,function(result,source){
              if(source=='wap') {
                location.href = result;
              }else if(source=='app'){
                console.log(result);
              }else if(source=='wap') {
                _this.popshow3=false;
                console.log('生成二维码成功');
                _this.qrcodeUrl = result;
              }else{
                if(type=='alipay'){
                  $("body").html(result);
                  console.log(result);
                }else if(type=='weixin'){
                  location.href = result;
                }
              }
            });

          }
        }else {
          this.$vux.toast.text("支付密码错误");
        }

      },

      /**
       * 选择支付方式
       */
      choose_pay(tit,type){
        this.title=tit;
        this.payType=type;
        if(type!="tcion"){
          if(this.orderInfo.goods_order_price){
            this.payMoney=this.orderInfo.goods_order_price;
          }else{
            this.payMoney = this.property_money_sum;
          }
        }else{
          if(this.orderInfo.goods_order_tcion){
            this.payMoney=this.orderInfo.goods_order_tcion;
          }else{
            this.payMoney=this.property_tcion;
          }
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
        this.$axios.get(global.API_HOST+'Goods_order/getOrder',{
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

            that.payMoney=this.orderInfo.goods_order_tcion;

            that.ticket=(res.data.order.goods_order_price*that.ticket_rate).toFixed(2);
          }

        }).catch(err=>{
          console.log('my err:'+ err);
        });
      },
      /** 物业服务费 **/
      getProperty(){
        this.orderType = false;
        let propertyId;
        //判断传过来的数据是否是数组
        if(this.$route.query.property_id instanceof Array){
          propertyId = {};
          for (let x in this.$route.query.property_id){
            propertyId[x] = this.$route.query.property_id[x];
          }
        }else{
          propertyId = this.$route.query.property_id;
        }
        let params={
          data:propertyId,
          user_id:this.userInfo.user_id
        };
        this.$axios.get(global.API_HOST+'property/getPropertyMoeny',{
          params:params
        }).then(res=>{
          res=res.data;
          this.orderInfo=res.data.order;
          this.property_money_sum = res.data.property_money_sum;
          this.property_tcion = res.data.property_tcion;
          this.pay_user=res.data.user;
          this.payMoney=this.property_tcion;
          this.ticket=(res.data.property_money_sum*this.ticket_rate).toFixed(2);
          this.property_ticket = res.data.property_ticket;
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/orderPay.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
