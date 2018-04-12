<template>
  <button :class="{disabled : count>0}"  :disabled="count>0"  @click.prevent="getCode">{{text}}</button>
</template>

<script>
  import utils from '@/libs/util.js'
  const qs = require("querystring")
  export default {
    name: "timerBtn",
    props:{
      second:{
        default:60,
      },
      phone:{
        default:'',
      },
      type:{
        default:1,
      },
    },
    data(){
      return {
        count:0,
        timer:null,
      }
    },
    computed:{
      text:function(){
        return this.count > 0 ? '获取验证码('+this.count + ')' : '获取验证码';
      }
    },
    methods:{
      getCode(){
        if(this.phone == ''){
          this.$vux.toast.show('请输入手机号码');
          return;
        }else if(!utils.is_mobile(this.phone)){
          this.$vux.toast.show('手机号码格式不正确');
          return;
        }
        this.start();

        let params={
          'mobile':this.phone,
          'type':this.type
        }
        this.$axios.post('/index/index/sendVerify',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==1){
            this.$vux.toast.show(res.msg);
            return;
          }
          this.$emit('run',res.data);
          this.$vux.alert.show({
            content: res.data
          })
        }).catch(err=>{
          console.log(err);
        })
      },
      start(){
        if(!this.timer){
          this.count = parseInt(this.second);

          this.timer=setInterval(()=>{
            if(this.count > 0){
              this.count--;
            }else {
              clearInterval(this.timer);
              this.timer = null;
            }
          },1000)
        }
      }
    }
  }
</script>
