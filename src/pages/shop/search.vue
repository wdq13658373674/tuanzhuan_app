<template>
  <section class="page-group">
    <search
      class="tz-search"
      placeholder="请输入商品名称"
      cancel-text="搜索"
      :auto-fixed="false"
      v-model="search"
      @on-cancel="submit"
      @focus="handleFocus"
      ></search>

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
    data () {
      return {
        search: this.$route.query.title
      }
    },
    methods: {
      submit:function(){
        let keyword=this.search;
        const query=this.$route.query;

        this.$router.push({
          path:'/shop/category',
          query:{
            store_id:query.store_id,
            type_id:query.type_id,
            title:query.title,
            keyword:keyword,
          }
        })
      }
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/search.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
