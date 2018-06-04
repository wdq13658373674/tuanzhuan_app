<template>
  <div>
    <section class="page-group">
      <ul class="content user-recharge mt20">
        <li class="item">
          充值金额
        </li>
        <li class="item">
          <div class="pay-input">
            <span class="span">￥</span>
            <label class="label"  @click="popshow=true">
              <input class="input" type="text" v-model="val" placeholder="输入充值金额" disabled>
              <i class="icon close" v-show="val!=''" @click="empty"></i>
            </label>
          </div>
        </li>
      </ul>
      <div class="btn btn-orange" :class="val=='' ? 'disabled' : ''" @click="next">下一步</div>
    </section>

    <!--popup 键盘-->
    <popup v-model="popshow" :show-mask="false">
      <div class="popup1">
        <PassKeyBord @run="enterMoney" ref="keyBord" :paslength="9999999"></PassKeyBord>
      </div>
    </popup>
    <!--popup-->

    <!--popup 确认付款-->
    <popup v-model="popshow2" height="60%" style="background: #fff;">
      <span class="pop-close" @click="popshow2=!popshow2">X</span>
      <div class="user-confirm-pay">
        <h1 class="title">
          确认付款
        </h1>
        <div class="con">
          <p class="money">￥{{val}}</p>
          <div class="type cell">
            <span>订单信息</span>
            <span>团转到家充值</span>
          </div>
          <div class="arrow-cell-list">
            <div class="item">
              <a class="link cell" @click="selectPay">
                <span>付款方式</span>
                <span>{{paymentType}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="bottom-fixed btn-orange-fixed" @click="confirmPayment">立即付款</div>
      </footer>
    </popup>
    <!--popup-->

    <!--popup 输入支付密码-->
    <popup v-model="popshow3" style="background: #fff;">
      <span class="pop-close"  @click="popshow3=!popshow3">X</span>
      <EnterPassword @run="payment"></EnterPassword>
    </popup>
    <!--popup-->

    <!-- 选择支付方式-->
    <popup v-model="popshow4" style="background: #fff;">
      <span class="pop-close"  @click="popshow4=!popshow4">X</span>
      <SelectPayment @showPayment="updataPayment"></SelectPayment>
    </popup>
    <!-- 选择支付方式-->

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
  import Qrcode from 'vue-qrcode'
  import PassKeyBord from '@/components/passKeyBord'
  import EnterPassword from '@/components/enterPassword'
  import SelectPayment from '@/components/selectPayment'
  import gopay from '@/assets/js/payment/gopay'
  export default {
    name: "Recharge",
    components: {
      PassKeyBord,
      EnterPassword,
      Popup,
      SelectPayment,
      Qrcode
    },
    computed:{
      ...mapState(['userInfo']),
    },
    data() {
      return {
        val:[],
        popshow:true,
        popshow2:false,
        popshow3:false,
        popshow4:false,
        paymentType:'支付宝',
        type:'alipay',
        qrcodeUrl:''
      }
    },
    mounted(){

    },
    methods:{
      /**输入金额*/
      enterMoney(value){
        if(value[0] != 0){
          this.val=value.join('');
        }else {
          this.val='';
          this.$refs.keyBord.empty();
        }
      },
      /**清空金额*/
      empty(){
        this.val='';
        this.$refs.keyBord.empty();
      },
      /**输入金额后下一步*/
      next(){
        this.popshow=false;
        this.popshow2=true;
      },
      selectPay(){
        this.popshow2=false;
        this.popshow3=false;
        this.popshow4=true;
      },
      updataPayment(type){
        this.popshow2=true;
        this.popshow3=false;
        this.popshow4=false;
        if(type == 'weixin'){
          this.paymentType = '微信';
          this.type = 'weixin';
        }else {
          this.paymentType = '支付宝';
          this.type = 'alipay';
        }
      },
      confirmPayment(){
        this.popshow2=false;
        this.popshow3=true;
      },
      //支付第三方接口
      payment(val){
        if(val == 1){
          let _this = this;
          let type = this.type;                             //支付类型
          let user_id = this.userInfo.user_id;              //用户ID
          let total = (this.val);                           //金额
          let subject = this.paymentType+'充值';             //支付消息
          let out_trade_no = '';                            //订单编号
          gopay(subject,total,user_id,type,out_trade_no,function(result,source){
            if(source=='wap') {
              location.href = result;
            }else if(source=='app'){
              console.log(result);
            }else if(source=='wap') {
              //生成二维码
              _this.popshow3=false;
              _this.qrcodeUrl = result;
            }else{
              if(type=='alipay'){
                //支付宝跳转
                location.href = result;
              }else if(type=='weixin'){
                //微信跳转
                location.href = result;
              }
            }
          });
        }else{
          this.$vux.toast.text('支付密码输入错误，请重新输入','top');
        }
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userRecharge.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
