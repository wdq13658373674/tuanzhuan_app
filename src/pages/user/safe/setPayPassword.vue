<template>
  <div class="tz-justify">
    <setPassword :value="password" :length="paslength">
      <div slot="title">
        <p class="p1">设置支付密码</p>
        <p class="p2">请设置支付密码，用于支付验证。</p>
      </div>
    </setPassword>

    <popup v-model="popshow1" :show-mask="false">
      <PassKeyBord @run="enterPass" @sure="refer" class="pay-keybord"></PassKeyBord>
    </popup>

   <!--支付密码确认-->
    <popup v-model="popshow2" :show-mask="false" height="100%" style="background: #fff;">
      <span class="pop-close" @click="close">X</span>
      <div class="tz-justify">
        <setPassword :value="repassword" :length="paslength">
          <div slot="title">
            <p class="p1">确认支付密码</p>
            <p class="p2">请再次填写以确认</p>
          </div>
        </setPassword>
        <PassKeyBord ref="keybord" @run="enterRePass" @sure="check" class="pay-keybord"></PassKeyBord>
      </div>
    </popup>
    <!--支付密码确认-->
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
        popshow1:true,
        popshow2:false,
        password:[],
        repassword:[],
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
          this.popshow2=true;
        }
        return;
      },
      /**确认密码*/
      enterRePass(value){
        this.repassword=value;
      },
      /**确认密码提交**/
      check(){
        if(this.repassword.join('')==this.password.join('')){
          this.password_ajax();
        }else{
          this.$vux.toast.text('两次密码设置不一致');
        }
      },
      /**设置密码接口**/
      password_ajax(){
        const params={
          user_id:this.userInfo.user_id,
          pay:this.password.join(''),
        }

        this.$axios.post('/index/user/setpaypwd',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0) {
            this.$vux.toast.text('设置密码成功');
            this.$router.back();
          }else{
            this.$vux.toast.text('与原密码相同,设置密码失败');
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      /**关闭确认密码弹层**/
      close(){
        this.popshow2=false;
        this.$refs.keybord.empty();
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userBindBank.css';
</style>
<style lang="scss">
  @import "../../../core/base";

  .tz-justify{
    @extend %flex;
    @include flex-direction();
    background: #fff;
    height:100%;
  }
</style>
