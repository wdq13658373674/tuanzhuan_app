<!--提现充值选择银行卡-->
<template>
  <div class="user-select-bank">
    <h1 class="title">
      选择付款方式
    </h1>
    <ul class="cell-list">
      <!--<li v-for="(item,index) in cardsLists" :key="index" @click="selectPayment('bank', item)">-->
        <!--<label class="item cell p27">-->
          <!--<span>{{item.bank_name.split('-')[0]}}{{item.bank_name.split('-')[2]}} ({{item.bank_numb.substr(-4)}})</span>-->

          <!--<div>-->
            <!--<input type="radio" name="pay" :value="item.bank_id" >-->
            <!--<div class="radio">-->
              <!--<i class="check"></i>-->
            <!--</div>-->
          <!--</div>-->
        <!--</label>-->
      <!--</li>-->
      <li ref="alipay" @click="selectPayment('alipay', $refs.alipay)">
        <label class="item cell p27">
          <span>支付宝</span>
          <div class="checkBox">
            <input type="radio" name="pay" value="alipay" checked>
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
      </li>
      <li ref="wexin" @click="selectPayment('weixin', $refs.wexin)" >
        <label class="item cell p27">
          <span>微信</span>
          <div class="checkBox">
            <input type="radio" name="pay" value="wexin" >
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
      </li>


    </ul>
    <!--<ul class="arrow-cell-list">
      <li class="item">
        <router-link to="/user/cards" class="link cell">
          <div>
            <i class="icon add"></i>
            <span>添加银行卡</span>
          </div>
        </router-link>
      </li>
    </ul>-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "SelectBank",
    props:[''],
    components:{

    },
    data () {
      return {
        cardsLists:[]
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    watch:{
      /**监听选择的银行卡**/

    },
    mounted(){
      //this.getCardsLists();
    },
    methods: {
      /**获取银行卡列表*/
      /*getCardsLists(){
        let params={
          user_id:this.userInfo.user_id
        }
        this.$axios.get(global.API_HOST+'/index/Bank/getUserBankAll',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.cardsLists=res.data.bank;
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },*/
      selectPayment(type, item){
        let paymentType='';
        if(type == 'bank'){
          paymentType=item.bank_name.split('-')[0]+item.bank_name.split('-')[2]+item.bank_numb.substr(-4);
          this.$emit('showPayment',paymentType,item.bank_id);
        }else {
          if(type == 'weixin'){
            paymentType = 'weixin';
          }

          if(type == 'alipay'){
            paymentType = 'alipay';
          }
          this.$emit('showPayment',paymentType);
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../core/base";

  .user-select-bank{
    background: #fff;

    .title{
      @include wh(auto,rem(90),rem(90));
      font-size:rem(32);
      text-align: center;
      border-bottom:1px solid $grayLight;
    }
    .cell-list{
      @include wh(100%,rem(200));
      overflow-y: auto;
    }
    .icon{
      @include wh(rem(40),100%);
      @extend %inline-block;
      margin-right:rem(20);
      &.add{
        background: url("../assets/images/img/i_bank1.png") left center no-repeat;
        background-size: 100% auto;
      }
    }
  }
  .checkBox{
    display: flex;
    align-items: center;
  }
</style>

