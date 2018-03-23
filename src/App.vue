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
<style lang="less">
  @import './assets/css/common.css';
</style>
