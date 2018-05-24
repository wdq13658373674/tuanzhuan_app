<!--提现充值选择银行卡-->
<template>
  <div class="user-select-bank">
    <h1 class="title">
      选择银行卡
    </h1>
    <ul class="cell-list">
      <li v-for="(item,index) in cardsLists" :key="index">
        <label class="item cell p27">
          <span>{{item.bank_name.split('-')[0]}}{{item.bank_name.split('-')[2]}} ({{item.bank_numb.substr(-4)}})</span>

          <div>
            <input type="radio" name="pay" :value="item.bank_id" v-model="selectBank">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
        </label>
      </li>
    </ul>
    <ul class="arrow-cell-list">
      <li class="item">
        <router-link to="/user/cards" class="link cell">
          <div>
            <i class="icon add"></i>
            <span>添加银行卡</span>
          </div>
        </router-link>
      </li>
    </ul>
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
        cardsLists:[],
        selectBank:'',
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    watch:{
      /**监听选择的银行卡**/
      selectBank(value){
        let bank='';
        this.cardsLists.forEach(item=>{
          if(this.selectBank==item.bank_id){
            bank=item.bank_name.split('-')[0]+item.bank_name.split('-')[2]+item.bank_numb.substr(-4);
          }
        })

        //传递给父元素回调
        this.$emit('run',bank,this.selectBank);
      }
    },
    mounted(){
      this.getCardsLists();
    },
    methods: {
      /**获取银行卡列表*/
      getCardsLists(){
        let params={
          user_id:this.userInfo.user_id
        }

        this.$axios.get(global.API_HOST+'Bank/getUserBankAll',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.cardsLists=res.data.bank;
            this.selectBank=this.cardsLists[0].bank_id;
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
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
</style>

