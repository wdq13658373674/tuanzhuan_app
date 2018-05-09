<template>
  <div>
    <bar-nav :title="title">
      <router-link to="/" class="link pull-right" v-if="rightNav==='home'"  slot="right">
        <i class="icon home2"></i>
      </router-link>

      <a class="link pull-right" v-if="rightNav==='cart'"  slot="right">
        <i class="icon cart"></i>
      </a>
    </bar-nav>

    <div class="link pull-right orange" v-if="rightNav==='default'"  slot="right">
      设为默认
    </div>

    <div class="layout-page">
      <router-view v-transition></router-view>
    </div>
  </div>
</template>

<script>
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
        return false;
      }
    },
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
