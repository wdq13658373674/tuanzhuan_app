<template>
  <div>
    <section class="page-group">
      <h2 class="h2">请绑定持卡人本人的银行卡</h2>
      <ul class="cell-list bind-bank">
        <li class="item cell p27">
          <label>持卡人</label>
          <input class="input" v-model="realname" type="text" disabled>
        </li>
        <li class="item cell p27">
          <label>卡号</label>
          <input class="input" v-model="cardsNum" type="text" placeholder="请输入银行卡号">
        </li>
      </ul>
      <div @click="next" class="btn btn-orange" :class="cardsNum ? '' : 'disabled'">下一步</div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "AddCards",
    components: {

    },
    data() {
      return {
        realname:this.$route.params.realname,
        cardsNum:''
      }
    },
    computed:{

    },
    mounted(){

    },
    methods:{
      /**下一步*/
      next(){
        if(this.realname && this.cardsNum){
          this.$router.push({
            name:'UserCardsMessage',
            params:{
              realname:this.realname,
              cardsNum:this.cardsNum
            }
          })
        }

        return;
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
