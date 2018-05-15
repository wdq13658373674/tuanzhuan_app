<template>
  <div>
    <section class="page-group">
      <ul class="arrow-cell-list">
        <li class="item" @click="changePop">
          <div class="cell link">
            <span>{{selectBank}}</span>
          </div>
        </li>
      </ul>
      <ul class="content user-recharge mt20">
        <li class="item">
          提现金额
        </li>
        <li class="item" @click="popshow=true">
          <div class="pay-input">
            <span class="span">¥</span>
            <label class="label">
              <input class="input" type="text" v-model="val" placeholder="输入提现金额" disabled>
              <i class="icon close" v-show="val!=''" @click="empty"></i>
            </label>
          </div>
        </li>
      </ul>
      <div class="tx-tips" v-show="tips!=''">
        {{tips}}
      </div>
      <div class="user-recharge-rate" v-show="tips==''">
        <p>
          实际到账金额<span class="orange f32"> ¥{{parseFloat(this.val)-extra || '0.00'}} </span>
          ,额外扣除 ¥{{extra || '0.00'}} 手续费(手续费率 {{rates * 100}} %)
        </p>
        <p>到账时间 T+3</p>
      </div>
      <div class="btn btn-orange" :class="{disabled:!val}" @click="submit">确认提现</div>
    </section>

    <!--popup 选择银行卡-->
    <popup v-model="popshow2" :show-mask="true"  height="50%" style="background: #fff;">
      <SelectBank @run="getSelect"></SelectBank>
    </popup>
    <!--popup-->

    <!--popup 键盘-->
    <popup v-model="popshow" :show-mask="false">
      <MoneyKeyBord @run="enterMoney" @sure="next" ref="keyBord"></MoneyKeyBord>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {Popup} from 'vux'
  import MoneyKeyBord from '@/components/moneyKeyBord'
  import SelectBank from '@/components/selectBank'
  import {mapState,mapMutations} from 'vuex'
  import utils from '@/libs/util.js'
  const qs = require("querystring");
  export default {
    name: "Withdraw",
    components: {
      MoneyKeyBord,
      Popup,
      SelectBank,
    },
    data() {
      return {
        val:'',
        rates:'',
        extra:'',
        popshow:true,
        popshow2:false,
        selectBank:'请选择银行卡',
        bankId:'',
        tips:''
      }
    },
    mounted(){
      this.getRates();
    },
    computed:{
      ...mapState(['userInfo']),
    },
    watch:{
      /**监听val计算手续费**/
      val(){
        let res=parseFloat(this.val) * parseFloat(this.rates);
        this.extra=parseFloat(res);

        if(parseFloat(this.val) > parseFloat(this.userInfo.user_money)){
          this.tips='金额已超过可提现余额'
        }else{
          this.tips='';
        }
      }
    },
    methods:{
      /**输入金额
       * value : 子组件返回的金额
       * */
      enterMoney(value){
        this.val=value;
      },
      /**清空金额*/
      empty(){
        this.val='';
        this.$refs.keyBord.empty();
      },
      /**输入金额后下一步*/
      next(){
        this.submit();
      },
      /**获取提现费率**/
      getRates(){
        this.$axios.get('/index/user/getreplay').then(res=>{
          res=res.data;
          this.rates=res.data;
        })
      },
      /**获取选择的银行卡组件回调**/
      getSelect(name,id){
        if(name && id){
          this.popshow2=false;
          this.popshow=true;
          this.selectBank=name;
          this.bankId=id;
        }
      },
      /**切换pop组件**/
      changePop(){
        this.popshow=false;
        this.popshow2=true;
      },
      /**确认提现**/
      ...mapMutations(['update_userInfo']),
      submit(){
        if(this.tips==''){
          const params={
            user_id:this.userInfo.user_id,
            money:this.val,
            cardid:this.bankId
          }

          this.$axios.post('/index/user/withdraw',qs.stringify(params)).then(res=>{
            res=res.data;

            if(res.status==0){
              this.updateMoney();
              this.$vux.toast.text('提现成功');
              this.$router.replace('/user');
            }else{
              this.$vux.toast.text('提现失败');
            }
          })
        }
      },
      /**更新store中的用户余额**/
      updateMoney(){
        let money=parseFloat(this.userInfo.user_money) - parseFloat(this.val);
        this.userInfo.user_money=money;
        this.update_userInfo(this.userInfo);
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
