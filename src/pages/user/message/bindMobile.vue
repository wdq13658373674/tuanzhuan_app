<template>
  <div>
    <BarNav title="修改手机号">
      <div class="link pull-right"  slot="right" @click="save">
        保存
      </div>
    </BarNav>
    <section class="page-group">
      <ul class="change-data cell-list">
        <li class="item p27">
          当前手机号是：
          <span class="orange">{{old_phone}}</span>
        </li>
      </ul>
      <ul class="change-data cell-list mt20">
        <li class="item p27 cell">
          <input class="input" type="text" v-model="phone" autocomplete="off" placeholder="请输入新的手机号">
          <timer-btn class="form-code" second="4" :phone="phone" type="1" @run="getCode"></timer-btn>
        </li>
        <li class="item p27">
          <input class="input" type="text" v-model="code" placeholder="请输入短信验证码">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BarNav from '@/pages/layout/barNav'
  import timerBtn from '@/components/timerBtn'
  import utils from '@/libs/util.js'
  const qs = require("querystring");
  export default {
    name: "BindMobile",
    components: {
      timerBtn,
      BarNav
    },
    data() {
      return {
        old_phone:this.$route.query.old_phone,
        phone:'',
        code:'',
        verify:''
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    methods:{
      /**
       * 获取验证码
       * verify ：验证码
       * **/
      getCode:function(verify){
        this.verify=verify;
      },
      /**
       * 保存修改后的手机号
       * **/
      save(){
        let params={
          uid:this.userInfo.ucenter_id,
          mobile:this.phone,
          code:this.verify
        }

        if(this.phone == ''){
          this.$vux.toast.show('请输入手机号码')
          return;
        }else if(!utils.is_mobile(this.phone)){
          this.$vux.toast.show({
            text: '手机号码格式不正确'
          })
          return;
        }
        if(this.code=='' || this.code != this.verify){
          this.$vux.toast.show('验证码错误')
          return;
        }

        this.$axios.post(global.API_HOST+'index/setmobile',qs.stringify(params)).then(res=>{
          res=res.data;
          if(res.status==0){
            this.$vux.toast.show('修改成功,请重新登陆');
            this.$router.push('/login');
          }else{
            this.$vux.toast.show('修改失败');
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userData.css';
</style>
<style lang="scss">
  @import "../../../core/base";

  .form-code.disabled{
    background: none;
  }
</style>
