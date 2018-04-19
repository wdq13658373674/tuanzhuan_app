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

    <router-view></router-view>
  </div>
</template>

<script>
  import BarNav from './barNav'
  import {mapState} from 'vuex'
  const storeJs=require('storejs');

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
        if(this.$route.name=="ShopDetail"){
          return 'home';
        }
        if(this.$route.name=="ShopCategory"){
          return 'cart';
        }

        return false;
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
