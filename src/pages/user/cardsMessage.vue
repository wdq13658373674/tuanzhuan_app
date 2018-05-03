<template>
  <div>
    <section class="page-group">
      <ul class="cell-list bind-bank">
        <li class="item cell p27">
          <label>卡类型</label>
          <input class="input text-right" v-model="bankType" type="text" disabled>
        </li>
      </ul>
      <div class="btn btn-orange" :class="bankType ? '' : 'disabled'" @click="next">下一步</div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "CardsMessage",
    components: {

    },
    data() {
      return {
          bankType:this.$route.params.bankType,
          cardsNum:this.$route.params.cardsNum,
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){

    },
    methods:{
      /**添加银行卡*/
      next(){
        let params={
          bank_numb:this.cardsNum,
          user_id:this.userInfo.user_id
        }

        this.$axios.post('/index/Bank/addBank',qs.stringify(params)).then(res=>{
          res=res.data;
          console.log(res);

          if(res.status==0){

          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
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
