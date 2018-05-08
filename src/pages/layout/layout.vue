<template>
  <div>
    <bar-nav :title="title">
      <router-link to="/" class="link pull-right" v-if="rightNav==='home'"  slot="right">
        <i class="icon home2"></i>
      </router-link>

      <a class="link pull-right" v-if="rightNav==='cart'"  slot="right">
        <i class="icon cart"></i>
      </a>

      <router-link to="/user/house/community" class="link pull-right" v-if="rightNav==='add'"  slot="right">
        添加
      </router-link>
    </bar-nav>

    <router-view v-transition></router-view>
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
        if(routeName=="UserHouse"){
          return 'add';
        }
        return false;
      }
    },
  }
</script>
<style lang="less" scoped>

</style>
