<template>
  <div>
    <bar-nav :title="title">
      <router-link to="/" class="link pull-right" v-if="rightNav==='home'"  slot="right">
        <i class="icon home2"></i>
      </router-link>

      <a class="link pull-right" v-if="rightNav==='cart'"  slot="right">
        <i class="icon cart"></i>
      </a>

      <router-link to="/intelligent/search" class="link pull-right green" v-if="rightNav==='device'"  slot="right">
        搜素网关
      </router-link>

      <div class="link pull-right orange" v-if="rightNav==='default'"  slot="right" @click="setDefault">
        设为默认
      </div>
    </bar-nav>

    <div class="layout-page">
      <router-view v-transition></router-view>
    </div>
  </div>
</template>

<script>
  import BarNav from './barNav'
  import {mapState} from 'vuex'
  const qs = require("querystring")

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
      ...mapState(['userInfo']),
      title(){
        if(this.$route.query.title){
          return this.$route.query.title;
        }
        return this.$route.meta.title ? this.$route.meta.title : ' '
      },
      rightNav(){
        let routeName=this.$route.name;
        if(routeName=="ShopDetail"){
          return 'home';
        }
        if(routeName=="ShopCategory"){
          return 'cart';
        }
        if(routeName=="UserHouseHolders"){
          return 'default';
        }
        if(routeName=="IgtLogin"){
          return 'device';
        }
        return false;
      }
    },
    methods:{
      /**
       * 我的房屋设置默认值
       * **/
      setDefault(){
        const params={
          user_id:this.userInfo.user_id,
          room_id:this.$route.query.id
        }

        this.$axios.post(global.API_HOST+'/index/House_user_bind_info_view/set_default',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0){
            this.$vux.toast.text('设置成功');
          }else{
            this.$vux.toast.text('当前房屋已经设为默认');
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

  .layout-page{
    .animated{
      top:0;
      padding-top:rem(88);
    }
  }
</style>
