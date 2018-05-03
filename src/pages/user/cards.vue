<template>
  <div>
    <ColorNav color="black-bar"></ColorNav>
    <section class="page-group gray-bg">
      <ul class="user-bank-list">
        <li class="item">
          <div class="img-box">
            <img src="@/assets/images/test/img7.png" alt="">
          </div>
          <div class="msg-box">
            <div class="cell">
              <div class="name">
                <p>重庆银行</p>
                <p>储蓄卡</p>
              </div>
              <div class="link" @click="sheetShow=true">解除绑定</div>
            </div>
            <p class="card">****  ****  ****  1114</p>
          </div>
        </li>
      </ul>
      <div class="user-add-bank" @click="addCards">
        <span class="add">+</span>
        添加银行卡
      </div>

      <div class="connect-box">
        <p class="bank-connect">联系客户：400-000-0034</p>
      </div>
    </section>

    <!--银行卡解除绑定 actionSheet-->
    <actionsheet class="bank-sheet" v-model="sheetShow" :menus="delMenus" @on-click-menu="delCards" show-cancel></actionsheet>
  </div>
</template>

<script>
  import ColorNav from '@/pages/layout/colorNav'
  import {mapState} from 'vuex'
  import {Actionsheet} from 'vux'
  export default {
    name: "Cards",
    components: {
      ColorNav,
      Actionsheet
    },
    data() {
      return {
        sheetShow:false,
        cardsLists:[],
        userLists:[],
        delMenus:['解除绑定']
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getCardsLists()
    },
    methods:{
      /**获取银行卡列表*/
      getCardsLists(){
        let params={
          user_id:this.userInfo.user_id
        }

        this.$axios.get('/index/Bank/getUserBankAll',{
          params:params
        }).then(res=>{
          res=res.data;
          console.log(res);

          if(res.status==0){
            this.cardsLists=res.data.bank;
            this.userLists=res.data.user;
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      /**添加银行卡*/
      addCards(){
        const state=this.userLists.user_truename
          ,idCard=this.userLists.user_idcard
          ,realname=this.userLists.user_realname;

        /**验证是否实名认证*/
        /*if(state==1 && idCard && realname){
          this.$router.push('/user/cards/add');
        }else{
          console.log('请实名验证 ')
        }*/

        this.$router.push({name:'UserAddCards',params:{
            realname:realname
          }});
      },
      /**银行卡解除绑定*/
      delCards(key,value){
        if(value=='解除绑定'){
          alert('解除');
        }
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userBank.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .bank-sheet{
    .weui-actionsheet{
      background: none;
    }

    .weui-actionsheet__cell{
      padding:rem(31) 0 ;
      font-size:rem(30);
    }

    .weui-actionsheet__action{
      margin-top:rem(20);
    }
  }

</style>
