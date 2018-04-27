<template>
  <div>
    <bar-nav :title="title">
      <router-link to="/" class="link pull-right" v-if="rightNav==='home'"  slot="right">
        <i class="icon home2"></i>
      </router-link>

      <a class="link pull-right" v-if="rightNav==='cart'"  slot="right">
        <i class="icon cart"></i>
      </a>

      <div class="link pull-right" v-if="rightNav==='save'"  slot="right">
        保存
      </div>
    </bar-nav>

    <router-view></router-view>
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
        if(routeName=="UserName" || routeName=="UserNickname" || routeName=="BindMobile"){
          return 'save';
        }
        return false;
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
