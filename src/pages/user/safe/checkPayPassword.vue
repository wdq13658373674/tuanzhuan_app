<template>
  <div class="tz-justify">
    <setPassword :value="password" :length="paslength">
      <div slot="title">
        <p class="p1">修改支付密码</p>
        <p class="p2">请输入原支付密码</p>
      </div>
    </setPassword>

    <popup v-model="popshow" :show-mask="false">
      <PassKeyBord @run="enterPass" @sure="refer" class="pay-keybord"></PassKeyBord>
    </popup>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import SetPassword from '@/components/setPassword'
  import PassKeyBord from '@/components/passKeyBord'
  import {Popup} from 'vux'
  const qs = require("querystring")

  export default {
    name: "SetPayPassword",
    components: {
      Popup,
      SetPassword,
      PassKeyBord
    },
    data() {
      return {
        popshow:true,
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
      /**输入密码确定*/
      refer(){
        if(this.password.length==this.paslength){
          this.password_ajax();
        }
        return;
      },
      /**原密码接口**/
      password_ajax(){
        const params={
          user_id:this.userInfo.user_id,
          pay:this.password.join(''),
        }

        this.$axios.post(global.API_HOST+'user/getpaypwd',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0) {
            this.$router.push({
              name:'SetPayPassword'
            })
          }else{
            this.$vux.toast.text('原密码输入错误');
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
    }
  }
</script>
<style lang="scss">
  @import "../../../core/base";
</style>
