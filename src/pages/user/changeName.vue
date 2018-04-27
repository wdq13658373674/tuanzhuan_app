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
          <input class="input" type="text" v-model="realname" placeholder="请输入昵称">
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
    name: "ChangeName",
    components: {
      BarNav
    },
    computed:{
      ...mapState(['userInfo']),
    },
    data() {
      return {
        realname:this.$route.params.realname
      }
    },
    methods:{
      /**
       * 保存修改后的姓名
       * **/
      save(){
        let data={
          type:5,
          value:this.realname
        }

        updateMessage(this,data);
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

</style>
