<template>
  <div>
    <ColorNav color="orange-bar">
      <router-link to="/user/account/tcion/income" class="link pull-right" slot="right" style="color:#fff;">
        明细
      </router-link>
    </ColorNav>
    <section class="page-group">
      <div class="user-pay">
        <p class="p1">团票余额(T)</p>
        <p class="p2">{{ticon.user_tcion || '0.00'}}</p>
      </div>
      <ul class="user-pay-list arrow-cell-list" v-if="list.tb_balance_radio!=0">
        <li class="item" @click="toBalance">
          <div class="link cell">
            <span><i class="icon icon2"></i>转为余额</span>
          </div>
        </li>
      </ul>

      <div class="connect-box">
        <p class="bank-connect">联系客服：400-135-6677</p>
      </div>
    </section>
  </div>
</template>

<script>
  import ColorNav from '@/pages/layout/colorNav'
  import {mapState} from 'vuex'
  const qs=require('querystring')
  export default {
    name: "Integral",
    components: {
      ColorNav
    },
    data() {
      return {
        ticon:'',
        list:''
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    mounted(){
      this.getTicon();
    },
    methods:{
      /**
       * 获取团票
       * **/
      getTicon(){
        const params={
          user_id : this.userInfo.user_id
        }

        this.$axios.get(global.API_HOST+'tcion_change/getUserTcion',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.list=res.data;
            this.ticon=res.data.user;
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      /**
       * 转为余额
       * **/
      toBalance(){
        const self=this;

        this.$vux.confirm.show({
          title:'提示',
          content:'确定将团票全部转为余额么?',
          onConfirm(){
            self.ticon_ajax();
          }
        })
      },
      /**
       * 团票转余额 ajax
       * **/
      ticon_ajax(){
        const params={
          user_id : this.userInfo.user_id
        }

        this.$axios.post(global.API_HOST+'tcion_change/tb_change_balance',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0){
            this.$vux.toast.text('转出成功');
          }else{
            this.$vux.toast.text(res.msg);
          }

        }).catch(err=>{
          console.log('my err:'+err);
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userPay.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
