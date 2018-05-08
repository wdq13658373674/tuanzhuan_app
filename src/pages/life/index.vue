<template>
  <section class="page-group">
    <h2 class="h2"><i class="icon address mr10"></i>{{roomInfo.village_name}}</h2>
    <div class="menu-property">
      <router-link class="menu" to="/life/check">
        <img class="img" src="@/assets/images/img/f_img1.jpg" alt="">
        <p class="p">电费</p>
      </router-link>
      <a class="menu" href="#">
        <img class="img" src="@/assets/images/img/f_img2.png" alt="">
        <p class="p">水费</p>
      </a>
      <a class="menu" href="#">
        <img class="img" src="@/assets/images/img/f_img3.png" alt="">
        <p class="p">气费</p>
      </a>
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
