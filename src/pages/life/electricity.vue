<template>
  <section class="page-group">
    <ul class="arrow-cell-list">
      <li class="item">
        <span class="link cell">国网重庆市电力公司</span>
      </li>
    </ul>

    <div class="content mt20">
      <p class="mt20 f32">用户编号</p>
      <div class="tz-input-group mt60 mb30">
        <input type="text" class="input f40" placeholder="8位用户编号，请查看账单/短信">
      </div>
    </div>

    <router-link to="/life/check/detail" class="btn btn-orange radius mt60">查询账单</router-link>
    <p class="text-center mt20">点击即表示同意 <a href="#" class="green">《团转到家自助缴费协议》</a></p>
  </section>
</template>

<script>
  export default {
    name: "Check",
    computed:{

    }
  }
</script>
