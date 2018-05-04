<template>
  <div>
    <section class="page-group">
      <h2 class="h2">请仔细核对信息，提交后不能更改</h2>
      <ul class="cell-list bind-bank">
        <li class="item cell p27">
          <label>姓名</label>
          <input class="input" v-model="realname" type="text" placeholder="">
        </li>
        <li class="item cell p27">
          <label>身份证号码</label>
          <input class="input" v-model="idcard" type="text" placeholder="">
        </li>
      </ul>
      <div class="btn btn-orange" :class="check== true ? '' : 'disabled'" @click="refer">确定</div>
      <p class="bank-rule">点击“确定”代表你已阅读并同意<a href="#">《团转电子账户开通协议》</a></p>
    </section>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  const qs = require("querystring")
  import utils from '@/libs/util.js'

  export default {
    name: "CheckIdCard",
    components: {

    },
    data() {
      return {
        realname:'',
        idcard:'',
      }
    },
    computed:{
      ...mapState(['userInfo']),
      check(){
        if(this.realname!='' && utils.is_card(this.idcard)){
          return true;
        }
        return false;
      }
    },
    mounted(){

    },
    methods:{
      ...mapMutations(['update_userInfo']),
      /**确定*/
      refer(){
        if(this.realname!='' && utils.is_card(this.idcard)){
          const params={
            card_num:this.idcard,
            card_realname:this.realname,
            user_id:this.userInfo.user_id
          }

          this.$axios.post('/index/User/CheckUser',qs.stringify(params)).then(res=>{
            res=res.data;

            if(res.status==0){
              this.$vux.toast.text('身份认证成功');

              this.userInfo.user_realname=this.realname;
              this.userInfo.user_idcard=this.idcard;
              this.userInfo.user_truename=1;
              this.update_userInfo(this.userInfo);

              this.$router.back();
            }else{
              this.$vux.toast.text('身份认证失败');
            }
          }).catch(err=>{
            console.log('my err:'+err)
          })
        }
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
