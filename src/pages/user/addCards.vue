<template>
  <div>
    <section class="page-group">
      <h2 class="h2">请绑定持卡人本人的银行卡</h2>
      <ul class="cell-list bind-bank">
        <li class="item cell p27">
          <label>持卡人</label>
          <input class="input" v-model.trim="realname" type="text" disabled>
        </li>
        <li class="item cell p27">
          <label>卡号</label>
          <input class="input" v-model.trim="cardsNum" maxlength="23" type="text" placeholder="请输入银行卡号" @keyup="formates">
        </li>
      </ul>
      <div @click="getBankType" class="btn btn-orange" :class="cardsNum.length>=16 ? '' : 'disabled'">下一步</div>
    </section>
  </div>
</template>

<script>
  import utils from '@/libs/util.js'
  const qs = require("querystring")
  export default {
    name: "AddCards",
    components: {

    },
    data() {
      return {
        realname:this.$route.params.realname,
        cardsNum:'',
        bankType:'',
        bankBranch:''
      }
    },
    computed:{

    },
    mounted(){

    },
    methods:{
      /**获取银行卡所属银行*/
      getBankType(){
        let params={
          bank_car:utils.Trim(this.cardsNum,true),
          address:'重庆'
        }

        this.$axios.post(global.API_HOST+'/index/Bank/bankType',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.data.bank_name){
            this.bankType=res.data.bank_name;
            this.bankBranch=res.data.bank_branch.data;
            this.next(this.bankType);
          }else{
            this.$vux.toast.text('银行卡号输入错误','top');
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      /**下一步
       * type : 银行卡所属银行
       * bankBranch : 银行支行
       * */
      next(type){
        if(type && this.realname && this.cardsNum){
          this.$router.push({
            name:'UserCardsMessage',
            params:{
              cardsNum:utils.Trim(this.cardsNum,true)
            }
          })
        }
        return;
      },
      /**格式化银行卡4位空一格*/
      formates(){
        this.cardsNum=utils.formates(this.cardsNum);
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userBindBank.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
