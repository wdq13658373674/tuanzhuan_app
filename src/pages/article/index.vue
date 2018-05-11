<template>
  <div>
    <section class="page-group">
      <ul class="post-list">
        <li class="item" v-for="(item,index) in newsLists" :key="index">
          <router-link class="link" :to="{ path: 'detail', query: { id: item.id }}" append>

            <p class="p1">
              <span class="mark-bg mr20" :style="{background:item.notic_style}" v-if="item.notic_sort!=''">{{item.notic_sort}}</span>
              <span>{{item.notic_title}}</span>
            </p>
            <p class="p2">
              <span class="date">{{item.add_time}}</span>
              <span>阅读量：{{item.notic_read}}</span>
            </p>
            <p class="p3">
              查看详情
              <i class="icon arrow pull-right"></i>
            </p>
          </router-link>
        </li>

        <li v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <load-more class="load-more" tip="正在加载" v-show="load"></load-more>
          <h3 class="no-more mb40" v-show="!load">
            <span class="tit">- 没有更多记录了 -</span>
          </h3>
        </li>
      </ul>
    </section>
  </div>
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
        load:false,
        newsLists:[],
        page:0
      }
    },
    mounted:function(){
      this.loadMore();
    },
    methods:{
      /**
       * 获取公告列表
       * **/
      getNewsLists(flag){
        const param = {
          'notic_village_id' : 1,
          'page':this.page
        }

        this.$axios.get(global.API_HOST+'/index/House_notic/getMore',{
          params:param
        }).then(res=>{
          res=res.data;

          if(flag){
            //多次加载
            this.newsLists=this.newsLists.concat(res.data.data);
            if(this.page >= res.data.last_page){
              this.busy=true;
              this.load=false;
            }else {
              this.busy=false;
              this.load=true;
            }

          }else {
            //第一次加载
            this.newsLists=res.data;
            this.busy=false;
            this.load=false;
          }

        }).catch(err=>{
          console.log("my error:"+err);
        });
      },
      /**
       * 下拉加载更多
       * **/
      loadMore:function(){
        this.busy = true;
        this.load = true;
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
</style>
