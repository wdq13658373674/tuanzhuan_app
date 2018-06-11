<!--输入支付密码弹层-->
<template>
 <div>
    <div class="invoice" @click="isShow" v-if="Show">
      <div class="voucher">
        <p class="ipt name">{{name}}</p>
        <p class="ipt num">{{num}}</p>
        <p class="ipt time">{{time | stampToDate()}}</p>
        <p class="ipt phone">{{phone}}</p>
        <p class="ipt money_uppercase">{{money_uppercase}}</p>
        <p class="ipt money">{{money}}</p>
        <p class="ipt address">{{address}}</p>
      </div>
      <div class="watermark"></div>
    </div>
 </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {smalltobig} from '@/libs/smalltobig'
  const qs = require("querystring");

  export default {
    name: "Invoice",
    components:{

    },
    props: ['childData'],
    data () {
      return {
        Show: true,
        name: "",
        phone: "",
        money_uppercase: "",
        money: '',
        address: "",
        time: '',
        num: ''
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getData();
    },
    methods: {
      getData(){
        let _this = this;
        smalltobig(this.childData.user_money_change_money, function (chineseStr) {
          _this.money_uppercase = chineseStr;
        });
        this.money = this.childData.user_money_change_money;
        this.phone = this.childData.user_phone;
        this.time = this.childData.add_time;
        this.name = this.childData.user_realname;
        this.num = "FJH"+this.childData.add_time+this.childData.user_money_change_user_id
      },
      isShow(){
        this.isShow= false;
        this.$emit('childEvent', false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../core/base";
  .invoice{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    z-index: 99999;
  }
  .voucher{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../../src/assets/images/public/voucher.jpg") no-repeat center center;
    background-size: 100%;
  }
  .watermark{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../../src/assets/images/public/waterMark.png");
    background-size: 100%;
  }
  .ipt{
    position: absolute;
    font-size: rem(40);
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
  }
  .num{
    width: rem(420);
    font-size: rem(20);
    top: rem(490);
    right: rem(30);
  }
  .name{
    width: rem(300);
    top: rem(440);
    right: rem(190);
  }
  .phone{
    width: rem(300);
    right: rem(200);
    bottom: rem(320);
  }
  .money_uppercase{
    width: rem(500);
    left: rem(20);
    top: rem(640);
  }
  .money{
    width: rem(200);
    font-size: rem(30);
    left: rem(166);
    bottom: rem(260);
  }
  .address{
    width: rem(900);
    top: rem(780);
    left: rem(-270);
  }
  .time{
    width: rem(350);
    font-size: rem(20);
    bottom: rem(310);
    right: rem(66);
  }
</style>

