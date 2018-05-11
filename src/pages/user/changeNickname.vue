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
          <input class="input" type="text" v-model="nickname" placeholder="请输入昵称">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BarNav from '@/pages/layout/barNav'
  import { updateMessage } from '@/assets/js/user/changeMessage'
  export default {
    name: "ChangeNickname",
    components: {
      BarNav
    },
    data() {
      return {
        nickname:this.$route.query.nickname
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
        let data={
          type:4,
          value:this.nickname
        }

        updateMessage(this,data);
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

</style>
