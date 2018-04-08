<template>
  <section class="page-group">
    <search
      class="tz-search"
      placeholder="请输入商品名称"
      :auto-fixed="false"
      v-model="value"></search>

    <h2 class="h2">历史搜索</h2>
    <div class="content">
      <div class="search-history clearfix">
        <a href="#" class="link">可乐</a>
        <a href="#" class="link">短袖</a>
        <a href="#" class="link"> 男装</a>
        <a href="#" class="link">可乐</a>
        <a href="#" class="link">短袖 男装</a>
        <a href="#" class="link">可乐</a>
        <a href="#" class="link">养乐多</a>
      </div>
    </div>

    <h2 class="h2">热门搜索</h2>
    <div class="content">
      <div class="search-history clearfix">
        <a href="#" class="link">可乐</a>
        <a href="#" class="link">短袖</a>
        <a href="#" class="link"> 男装</a>
        <a href="#" class="link">可乐</a>
        <a href="#" class="link">短袖 男装</a>
        <a href="#" class="link">可乐</a>
        <a href="#" class="link">婴儿沐浴露</a>
      </div>
    </div>
  </section>
</template>

<script>
  import { Search } from 'vux'
  export default {
    name: "ShopSearch",
    components: {
      Search,
    },
    methods: {

    },
    data () {
      return {
        value: 'test'
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/search.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
