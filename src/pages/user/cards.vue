<template>
  <div>
    <ColorNav color="black-bar"></ColorNav>
    <section class="page-group gray-bg">
      <ul class="user-bank-list">
        <li class="item" v-for="item in cardsLists">
          <div class="img-box">
            <img src="@/assets/images/public/bank.png" alt="">
          </div>
          <div class="msg-box">
            <div class="cell">
              <div class="name">
                <p>{{item.bank_name.split('-')[0]}}</p>
                <p>{{item.bank_name.split('-')[2]}}</p>
              </div>
              <div class="link" @click="getBankId(item.bank_id)">解除绑定</div>
            </div>
            <p class="card">{{item.bank_numb | formate}}</p>
          </div>
        </li>
      </ul>
      <div class="user-add-bank" @click="addCards">
        <span class="add">+</span>
        添加银行卡
      </div>

      <div class="connect-box">
        <p class="bank-connect">联系客服：400-135-6677</p>
      </div>
    </section>

    <!--银行卡解除绑定 actionSheet-->
    <actionsheet class="bank-sheet" v-model="sheetShow" :menus="delMenus" @on-click-menu="del" show-cancel></actionsheet>
  </div>
</template>

<script>
  import ColorNav from '@/pages/layout/colorNav'
  import {mapState} from 'vuex'
  import {Actionsheet} from 'vux'
  const qs = require("querystring")
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
        delMenus:['解除绑定'],
        bankId:''
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getCardsLists();
    },
    methods:{
      /**获取银行卡列表*/
      getCardsLists(){
        let params={
          user_id:this.userInfo.user_id
        }

        this.$axios.get(global.API_HOST+'/index/Bank/getUserBankAll',{
          params:params
        }).then(res=>{
          res=res.data;

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

        /*验证是否实名认证*/
        if(state==1 && idCard && realname){
          this.$router.push({name:'UserAddCards',params:{
              realname:realname
            }});
        }else{
          const self=this;
          this.$vux.confirm.show({
            title: '提示',
            content: '请实名认证',
            onConfirm(){
              self.$router.push('/user/check/idCard');
            }
          })
        }
      },
      /**获取银行卡号*/
      getBankId(id){
        this.sheetShow=true;
        this.bankId=id;
      },
      /**银行卡解除绑定*/
      del(key,value){
        const self=this;
        const bankId=this.bankId

        if(value=='解除绑定' && this.bankId){
          this.$vux.confirm.show({
            title:'提示',
            content:'确定要解除该银行卡',
            onConfirm(){
              let params={
                bank_id:bankId
              }

              self.$axios.post(global.API_HOST+'/index/Bank/delBank',qs.stringify(params)).then(res=>{
                res=res.data;

                if(res.status==0){
                  self.updateCards(bankId);
                  self.$vux.toast.text('解除绑定成功');
                }else{
                  self.$vux.toast.text('解除绑定失败');
                }
              }).catch(err=>{
                console.log('my err:'+err)
              })
            }
          })
        }
      },
      /**更新银行卡列表*/
      updateCards(id){
        let cardList=this.cardsLists;
        cardList.forEach(function(item,key){
          if(item.bank_id==id){
            cardList.pop(key,1);
          }
        })
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
