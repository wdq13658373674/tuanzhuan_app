<template>
  <div>
    <section class="page-group">
      <ul class="cell-list bind-bank">
        <li class="item cell p27">
          <label>卡类型</label>
          <input class="input text-right" value="中信银行 储蓄卡" type="text" placeholder="">
        </li>
        <li class="item cell p27">
          <label>手机号码</label>
          <input class="input text-right" value="186807222222" type="text" placeholder="">
        </li>
      </ul>
      <a href="#" class="btn btn-orange disabled">下一步</a>
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

      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){

    },
    methods:{
      /**添加银行卡*/
      addCards(){
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
