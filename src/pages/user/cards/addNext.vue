<template>
  <div>
    <section class="page-group">
      <ul class="cell-list bind-bank">
        <li class="item cell p27">
          <label>卡类型</label>
          <input class="input text-right" v-model="bankType" type="text" disabled>
        </li>
        <li class="item cell p27">
          <label>所属银行支行</label>
          <selector class="tz-selecter" direction="rtl" title="" v-model="branch" :options="bankBranch" placeholder="请选择所属银行支行"></selector>
        </li>
      </ul>
      <div class="btn btn-orange" :class="disabled ? '' : 'disabled'" @click="next">下一步</div>
    </section>
  </div>
</template>

<script>
  import { Selector } from 'vux'
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "CardsMessage",
    components: {
      Selector
    },
    data() {
      return {
        cardsNum:this.$route.params.cardsNum,
        bankType:'',
        bankBranch:[],
        branch:''
      }
    },
    computed:{
      ...mapState(['userInfo']),
      disabled(){
        if(this.bankType!='' && this.branch!=''){
          return true;
        }

        return false;
      }
    },
    mounted(){
      this.getBankType();
    },
    methods:{
      /**获取银行卡所属银行*/
      getBankType(){
        let params={
          bank_car:this.cardsNum,
          address:''/*例如；重庆*/
        }

        this.$axios.post(global.API_HOST+'/index/Bank/bankType',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0){
            this.bankType=res.data.bank_name;
            this.bankBranch=res.data.bank_branch.data.map(function(item){
              return item.name;
            });
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      /**添加银行卡*/
      next(){
        let params={
          bank_numb:this.cardsNum,
          user_id:this.userInfo.user_id,
          bank_branch:this.branch
        }

        this.$axios.post(global.API_HOST+'/index/Bank/addBank',qs.stringify(params)).then(res=>{
          res=res.data;
          console.log(res);

          if(res.status==0){
            this.$vux.toast.text('绑定成功');
            this.$router.go(-2);
          }else{
            this.$vux.toast.text(res.msg);
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userBindBank.css';
</style>
<style lang="scss">
  @import "../../../core/base";

  .tz-selecter{
    text-align: right;
  }
</style>
