<template>
  <section class="page-group">
    <div class="content post-detail">
      <p class="p1">
        <span class="mark-bg mr20" :style="{background:newsDetail.notic_style}" v-if="newsDetail.notic_sort!=''">{{newsDetail.notic_sort}}</span>
        <span>{{newsDetail.notic_title}}</span>
      </p>
      <p class="p2">
        <span class="date">{{newsDetail.add_time}}</span>
        <span>阅读量：{{newsDetail.notic_read}}</span>
      </p>
      <div class="con mt20 mb40">
        {{newsDetail.notic_content}}
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "ArticleDetail",
    data(){
      return {
        newsDetail:[]
      }
    },
    mounted:function(){
      this.getNewDetail();
    },
    methods:{
      getNewDetail:function(){
        const param = {
          'notic_id' : this.$route.query.id
        }

        this.$axios.get('/index/House_notic/getInfo',{
          params:param
        }).then(res=>{
          res=res.data
          this.newsDetail=res.data;
        }).catch(err=>{
          console.log("my error:"+err);
        });
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/post.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .post-detail{
    position: absolute;
    min-height:100%;
    width:100%;
    top:0;
    padding-top:rem(88);
  }
</style>
