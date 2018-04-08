<template>
  <section class="page-group">
    <ul class="post-list">
        <li class="item" v-for="(item,index) in newsLists" :key="index">
        <p class="p1">
          <span class="mark-bg mr20" :style="{background:item.notic_style}" v-if="item.notic_sort!=''">{{item.notic_sort}}</span>
          <span>{{item.notic_title}}</span>
        </p>
        <p class="p2">
          <span class="date">{{item.add_time}}</span>
          <span>阅读量：{{item.notic_read}}</span>
        </p>
        <p class="p3">
          <router-link class="link" :to="{ path: 'detail', query: { id: item.id }}" append>
            查看详情
            <i class="icon arrow pull-right"></i>
          </router-link>
        </p>
      </li>

      <li v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
        <!--<load-more class="load-more" tip="正在加载" v-show="busy"></load-more>-->
        <h3 class="no-more" v-show="busy">
          <span class="tit">- 没有更多记录了 -</span>
        </h3>
      </li>
    </ul>
  </section>
</template>
<script>
  import infiniteScroll from 'vue-infinite-scroll'
  import { LoadMore} from 'vux'

  export default {
    name: "Article",
    directives: {infiniteScroll},
    components:{
      LoadMore
    },
    data(){
      return {
        busy:false,
        newsLists:[],
        page:1
      }
    },
    mounted:function(){
      this.getNewsLists();
    },
    methods:{
      getNewsLists(flag){
        const param = {
          'notic_village_id' : 1,
          'page':this.page
        }

        this.$axios.get('/index/House_notic/getMore',{
          params:param
        }).then(res=>{
          res=res.data.data;

          if(flag){
            //多次加载
            this.newsLists=this.newsLists.concat(res.data);

            if(res.data.length == 0){
              this.busy=true;
            }else {
              this.busy=false;
            }

          }else {
            //第一次加载
            this.newsLists=res.data;
            this.busy=false;
          }

        }).catch(err=>{
          console.log("my error:"+err);
        });
      },
      loadMore:function(){
        this.busy = true;
        this.page++;
        this.getNewsLists(true);
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/post.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .load-more{
    &.weui-loadmore{
      font-size:rem(24);
      margin: rem(20) auto rem(55);
    }

    .weui-loading{
      @include wh(rem(50),rem(50));
    }
  }
</style>
