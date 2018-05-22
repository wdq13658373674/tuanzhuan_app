<template>
  <div>
    <!--header-->
    <BarNav>
      <div class="title" slot="middle">
        <tab>
          <tabItem class="tab orange" v-for="(item,index) in tabMenus" :key="index+1" :selected="index===0" @on-item-click="tab">{{item}}</tabItem>
        </tab>
      </div>
      <a class="link pull-right" slot="right">
        <i class="icon camera"></i>
      </a>
    </BarNav>

    <section class="page-group">
      <div class="neighbor-menu clearfix">
        <a v-for="(item, index) in menuList" href="#" class="item">
          <div class="img-box">
            <img class="img" v-lazy="item.type_bbs_logo" alt="" />
          </div>
          <p class="txt">{{item.type_bbs_title}}</p>
        </a>
      </div>

      <ul class="neighbor-msg-list">
        <li class="item" v-for="(item, index) in bobList">
          <a href="#" class="link">
            <div class="neighbor">
              <div class="img-box">
                <!--<img class="img" src="@/assets/images/test/img6.png" alt="">-->
                <img class="img" v-lazy="item.user_logo" alt="" />
              </div>
              <div class="con">
                <p class="p1">{{item.user_nickname}}</p>
                <p class="p2">
                  <em>重庆市-沙坪坝区</em>
                  <span>{{item.add_time | stampToDate(true)}}</span>
                </p>
              </div>
            </div>

            <div class="neighbor-content">{{item.bbs_content}}</div>
            <p class="f28 orange mt20">全文</p>
          </a>

          <div class="content">
            <ul class="neighbor-thumbs clearfix">
              <li class="img-box" v-for="(item_image,index) in item.bbs_image" v-if="item_image.length!=''" :key="index">
                <img class="img" v-lazy="item_image" alt="" @click="show(index)">
              </li>
            </ul>
          </div>

          <div class="neighbor-bar">
            <div class="box">来自：<span class="orange">活动部落</span></div>
            <div class="box">
              <i class="icon thumbs1"></i>
              <i class="icon comment"></i>
            </div>
          </div>

          <div class="neighbor-comment">
            <p><i class="icon thumbs2"></i>{{item.bbs_nice}}人点赞</p>
            <ul class="comment-list mt20">
              <li class="cell" v-for="(item_reply, index) in item.reply">
                <em>{{item_reply.bbs_user.user_nickname}}:</em>
                <span>{{item_reply.reply_content}}</span>
              </li>
            </ul>
          </div>
        </li>




        <li v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <load-more class="load-more" tip="正在加载" v-show="load"></load-more>
          <h3 class="no-more mb40" v-show="!load">
            <span class="tit">- 没有更多记录了 -</span>
          </h3>
        </li>
      </ul>
    </section>
    <previewer :list="imgList" ref="previewer" :options="options"></previewer>
  </div>
</template>

<script>
  import {Tab, TabItem, Previewer,LoadMore } from 'vux'
  import {mapState} from 'vuex'
  import BarNav from '../layout/barNav'
  import infiniteScroll from 'vue-infinite-scroll'
  export default {
    name: "Neighbor",
    directives: {infiniteScroll},
    components:{
      Tab,
      TabItem,
      BarNav,
      Previewer,
      LoadMore
    },
    computed:{
    ...mapState(['roomInfo'])
    },
    data(){
      return {
        tabMenus:['精华','最新'],
        imgList:[{
          src: 'https://placekitten.com/800/400',
        },
          {
            src: 'https://placekitten.com/1200/900',
          }],
        options: {
          /**
           * 图片放大参数配置
           * **/
          getThumbBoundsFn (index) {
            let thumbnail = document.querySelectorAll('.img-box')[index];
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

            let rect = thumbnail.getBoundingClientRect();

            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            }
          }
        },
        bobList:[],
        menuList:[],
        page: 0,
        bbs_type: 1,
        busy:false,
        load:false,
        flag: false,
      }
    },
    mounted(){
      this.loadMore();
    },
    methods:{
      /**
       * 显示大图
       * **/
      show(index){
        this.$refs.previewer.show(index);
      },
      getBbsIndex(type){
        let params={
          village_id: this.roomInfo.village_id,
          type: type,
          page: this.page
        };

        this.$axios.get(global.API_HOST+'index/bbs/getBobIndex',{
          params:params
        }).then(res=>{
          res=res.data;
          /*菜单列表*/
          this.menuList = res.data.type;
          /*文章列表*/
          if(res.data!=undefined){
            if(this.flag){
              if(res.data.bbs.data.length != 0){
                this.bobList.push(res.data.bbs.data);
              }
              if(this.page >= res.data.bbs.last_page){
                this.busy=true;
                this.load=false;
              }else {
                this.busy=false;
                this.load=true;
              }
            }else {
              //第一次加载
              this.bobList=res.data.bbs.data;
              this.busy=false;
              this.load=false;
              this.flag = true;
            }
          }
          console.log(this.bobList);
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      tab(type){
        /*选项卡切换*/
        this.bbs_type = type+1;
        this.flag = false;
        this.page = 0;
        this.getBbsIndex(this.bbs_type);
      },
      /*下拉加载*/
      loadMore:function(){
        this.busy = true;
        this.load = true;
        this.page++;
        this.getBbsIndex(this.bbs_type);
      },
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/neighbor.css';
</style>
