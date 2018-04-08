<template>
  <footer>
    <div class="footer">
      <router-link to="/" class="item">
        <i class="icon icon1"></i>
        首页
      </router-link>
      <router-link to="/service" class="item">
        <i class="icon icon2"></i>
        服务
      </router-link>
      <a href="#" class="item">
        <i class="door"></i>
        一键开门
      </a>
      <a href="#" class="item">
        <i class="icon icon3"></i>
        邻聚
      </a>
      <router-link to="/login" class="item">
        <i class="icon icon4"></i>
        我的
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>
