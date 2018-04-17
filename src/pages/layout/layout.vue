<template>
  <div>
    <bar-nav :title="title">
     <!-- <router-link to="location" class="link pull-left" v-if="indexNav"  slot="left">
        <i class="icon address mr10"></i>
        <span class="name">{{village_name}}</span>
      </router-link>

      <div v-if="indexNav"  slot="right" class="pull-right">
        <a class="ml10 pull-right">
          <i class="icon phone"></i>
        </a>
        <a class="pull-right">
          <i class="icon ew"></i>
        </a>
      </div>-->

      <router-link to="/" class="link pull-right" v-if="rightNav==='home'"  slot="right">
        <i class="icon home2"></i>
      </router-link>

      <a class="link pull-right" v-if="rightNav==='cart'"  slot="right">
        <i class="icon cart"></i>
      </a>
    </bar-nav>

    <router-view v-transition></router-view>
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
      /*...mapState(['direction']),
      viewTransition () {
        if (!this.direction){
          return ''
        }

        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      },*/
      title(){
        if(this.$route.params.title){
          return this.$route.params.title;
        }
        return this.$route.meta.title ? this.$route.meta.title : ' '
      },
      /*indexNav(){
        if(this.$route.name=="Index" || this.$route.name=='Service'){
          return true;
        }

        return false;
      },*/
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
