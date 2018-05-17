<template>
  <div>
    <BarNav title="修改姓名">
      <div class="link pull-right"  slot="right" @click="save">
        保存
      </div>
    </BarNav>
    <section class="page-group">
      <ul class="change-data cell-list mt20">
        <li class="item p27">
          <input class="input" type="text" v-model="realname" placeholder="请输入姓名">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BarNav from '@/pages/layout/barNav'
  import { updateMessage } from '@/assets/js/user/changeMessage'
  import utils from '@/libs/util.js'
  export default {
    name: "ChangeName",
    components: {
      BarNav
    },
    computed:{
      ...mapState(['userInfo']),
    },
    data() {
      return {
        realname:this.$route.query.realname,
        tips:''
      }
    },
    methods:{
      /**
       * 保存修改后的姓名
       * **/
      save(){
        if(!this.check()){
          return;
        }
        let data={
          type:5,
          value:this.realname
        }

        updateMessage(this,data);
        this.$router.replace('/user/message');
      },
      /**
       * 输入验证：
       * ---不能为空
       * ---输入长度不能超过8个字符
       * **/
      check(){
        this.tips='';

        if(!this.realname){
          this.tips='输入不能为空,修改失败';
        }else if(utils.getStrLength(this.realname) > 8){
          this.tips='姓名不能超过8个字符,修改失败';
        }

        if(this.tips!=''){
          this.$vux.toast.text(this.tips);
          return false
        }else{
          return true;
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

</style>
