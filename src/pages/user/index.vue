<template>
  <section class="page-group">
    个人中心首页
    <div>
      <button @click.prevent="exit()">退出</button>
    </div>
  </section>
</template>

<script>
  const storeJs = require('storejs');

  export default {
    name: "User",
    components:{

    },
    data(){
      return {

      }
    },
    methods:{
      exit:function(){
        storeJs.clear();
        this.$router.push('/');
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/shop.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
