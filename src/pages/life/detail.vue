<template>
  <section class="page-group">
    <div class="life-bill">
      <!--状态一:查询到缴费-->
      <div class="content text-center">
        <p class="p1">¥349.00</p>
        <p class="p2 mt20">待缴金额</p>
      </div>
      <!--状态一:查询到缴费-->

      <!--状态二:未查询到缴费-->
      <!--<div class="content text-center">
          <p class="p1">
              <img class="img" src="@/assets/images/img/life_empty.png" alt="">
          </p>
          <p class="p2 mt60">暂未查询到欠费</p>
      </div>-->
      <!--状态二:未查询到缴费-->

      <ul class="msg-list">
        <li class="item">
          <span>用户编号</span>
          <span class="gray">047578555</span>
        </li>
        <li class="item">
          <span>缴费单位</span>
          <span class="gray">重庆市中法电费</span>
        </li>
      </ul>
    </div>
    <router-link :to="{name:'LifePay',params:{
      type:1
    }}" class="btn btn-orange radius mt60">去缴费</router-link>
  </section>
</template>

<script>
  export default {
    name: "Detail",
    computed:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/bill.css';
</style>
