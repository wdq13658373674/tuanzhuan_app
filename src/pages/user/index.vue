<template>
  <section class="page-group">
    个人中心首页
    <div>
      <button @click.prevent="exit()">退出</button>
    </div>
  </section>
</template>

<script>
  import {mapMutations,mapState} from 'vuex'

  export default {
    name: "User",
    components:{

    },
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
      ...mapMutations(['update_userInfo','update_roomInfo']),
      exit:function(){
        this.update_userInfo('');
        this.update_roomInfo('');
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
