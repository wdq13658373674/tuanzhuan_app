<template>
  <div>
    <setPassword :value="password" :length="paslength">
      <div slot="title">
        <p class="p1">设置支付密码</p>
        <p class="p2">请设置支付密码，用于支付验证。</p>
      </div>
    </setPassword>
    <PassKeyBord @run="enterPass" @sure="pay" class="pay-keybord"></PassKeyBord>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import SetPassword from '@/components/setPassword'
  import PassKeyBord from '@/components/passKeyBord'
  const qs = require("querystring")

  export default {
    name: "SetPayPassword",
    components: {
      SetPassword,
      PassKeyBord
    },
    data() {
      return {
        password:[],
        paslength:6,
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    methods:{
      /**输入密码*/
      enterPass(value){
        this.password=value;
      },
      /**支付确定按钮*/
      pay(){
        if(this.password.length==this.paslength){
          /*const params={
            user_id:this.userInfo.user_id,
            pay:this.password.join(''),
          }

          this.$axios.post('/index/user/setpaypwd',qs.stringify(params)).then(res=>{
            res=res.data;
            console.log(res);

            if(res.status==0) {
              this.$router.push('/user/safe/checkPayPassword');
            }else{
              this.$vux.toast.text('与原密码相同,设置密码失败');
            }
          }).catch(err=>{
            console.log('my err:'+err);
          })*/
        }

        return;
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userBindBank.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
