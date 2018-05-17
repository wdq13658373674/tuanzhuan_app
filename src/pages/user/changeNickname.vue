<template>
  <div>
    <BarNav title="修改昵称">
      <div class="link pull-right"  slot="right" @click="save">
        保存
      </div>
    </BarNav>
    <section class="page-group">
      <ul class="change-data cell-list mt20">
        <li class="item p27">
          <input class="input" maxlength="16" type="text" v-model.trim="nickname" placeholder="请输入昵称">
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
    name: "ChangeNickname",
    components: {
      BarNav
    },
    data() {
      return {
        nickname:this.$route.query.nickname,
        tips:''
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    methods:{
      /**
       * 保存修改后的昵称
       * **/
      save(){
        if(!this.check()){
          return;
        }

        let data={
          type:4,
          value:this.nickname
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
        if(!this.nickname){
          this.tips='输入不能为空,修改失败';
        }else if(utils.getStrLength(this.nickname) > 8){
          this.tips='昵称不能超过8个字符';
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
