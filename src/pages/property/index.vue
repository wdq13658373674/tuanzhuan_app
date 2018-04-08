<template>
  <div>
    <section class="page-group">
      <h2 class="h2"><i class="address pull-left mr10"></i>扬子江商务中心</h2>
      <div class="menu-property">
        <router-link class="menu" to="">
          <img class="img" src="@/assets/images/img/c_img3.svg" alt="">
          <p class="p">物业服务费</p>
        </router-link>
        <a class="menu" href="#">
          <img class="img" src="@/assets/images/img/c_img1.svg" alt="">
          <p class="p">预交停车费</p>
        </a>
        <a class="menu" href="#">
          <img class="img" src="@/assets/images/img/c_img2.svg" alt="">
          <p class="p">临停缴费</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Property",
  }
</script>
<style lang="css">
  @import '../../assets/css/property.css';
</style>
