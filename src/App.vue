<template>
  <div id="app">
    <loading :show="loading"></loading>

    <router-view  class="router-view"></router-view>
  </div>
</template>

<script>
  import '@/assets/js/public.js'
  import {Loading} from 'vux'
  import {mapState} from 'vuex'

  export default {
    name: 'App',
    data(){
      return{

      }
    },
    components:{
      Loading
    },
    computed: {
      ...mapState(['loading'])
    }
  }
</script>
<style lang="scss">
  @import './assets/css/common.css';

  @import "core/base";
  .vux-loading{
    .weui-toast{
      top:50%;
      margin-top: rem(-190);

      .weui-icon_toast.weui-loading{
       @include wh(rem(70),rem(70));
      }
    }
  }
</style>
