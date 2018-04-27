<template>
  <div>
    <bar-nav :title="title">
      <router-link to="/" class="link pull-right" v-if="rightNav==='home'"  slot="right">
        <i class="icon home2"></i>
      </router-link>

      <a class="link pull-right" v-if="rightNav==='cart'"  slot="right">
        <i class="icon cart"></i>
      </a>

      <div class="link pull-right" v-if="rightNav==='save'"  slot="right" @click="save">
        保存
      </div>
    </bar-nav>

    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { updateMessage } from '@/assets/js/user/changeMessage'
  import BarNav from './barNav'

  export default {
    name: 'Layout',
    components:{
      BarNav
    },
    data(){
      return {

      }
    },
    computed: {
      title(){
        if(this.$route.query.title){
          return this.$route.query.title;
        }
        return this.$route.meta.title ? this.$route.meta.title : ' '
      },
      ...mapState(['userInfo']),
      rightNav(){
        let routeName=this.$route.name;
        if(routeName=="ShopDetail"){
          return 'home';
        }
        if(routeName=="ShopCategory"){
          return 'cart';
        }
        if(routeName=="UserName" || routeName=="UserNickname" || routeName=="BindMobile"){
          return 'save';
        }
        return false;
      }
    },
    methods:{
      save(){
        let params=this.$route.params;
        let data='';

        if(params.realname){
          data={
            type:5,
            value:params.realname
          }
        }else if(params.nickname){
          data={
            type:4,
            value:params.nickname
          }
        }

        if(data){
          updateMessage(this,data);
        }

        return;
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
