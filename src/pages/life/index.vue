<template>
  <section class="page-group">
    <h2 class="h2"><i class="icon address mr10"></i>{{roomInfo.village_name}}</h2>
    <div class="menu-property">
      <router-link class="menu" to="/life/electricity">
        <img class="img" src="@/assets/images/img/f_img1.jpg" alt="">
        <p class="p">电费</p>
      </router-link>
      <router-link class="menu" to="/life/water">
        <img class="img" src="@/assets/images/img/f_img2.png" alt="">
        <p class="p">水费</p>
      </router-link>
      <router-link class="menu" to="/life/gas">
        <img class="img" src="@/assets/images/img/f_img3.png" alt="">
        <p class="p">气费</p>
      </router-link>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Life",
    computed:{
      ...mapState(['roomInfo'])
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/property.css';
</style>
