<template>
  <section class="page-group">
    <search
      class="tz-search"
      placeholder="请输入商品名称"
      cancel-text="搜索"
      :auto-fixed="false"
      v-model="search"
      @on-cancel="submit"
      ></search>

    <h2 class="h2">历史搜索</h2>
    <div class="content">
      <div class="search-history clearfix">
        <p v-if="history.length==0">暂无历史记录</p>
        <router-link :to="{name:'ShopCategory',query:{
          id:$route.query.id || 0,
          title:$route.query.title,
          keyword:item
        }}" class="link"  v-for="(item,index) in history" :key="index" replace>{{item}}</router-link>
      </div>
    </div>

    <!--<h2 class="h2">热门搜索</h2>
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
    </div>-->
  </section>
</template>

<script>
  import { mapState,mapMutations } from 'vuex'
  import { Search } from 'vux'
  export default {
    name: "ShopSearch",
    components: {
      Search,
    },
    data () {
      return {
        search: '',
      }
    },
    computed:{
      ...mapState(['historySearch']),
      history(){
        return this.historySearch;
      }
    },
    methods: {
      /**
       * 搜索按钮
       * **/
      ...mapMutations(['update_history_search']),
      submit:function(){
        let keyword=this.search;

        this.$router.replace({
          name:'ShopCategory',
          query:{
            id:this.$route.query.id || 0,
            title:this.$route.query.title,
            keyword:keyword
          }
        })
        //保存搜索历史记录
        if(keyword!=''){
          this.update_history_search(keyword);
        }
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
