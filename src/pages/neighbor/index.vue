<template>
  <div>
    <!--header-->
    <BarNav>
      <div class="title" slot="middle">
        <tab>
          <tabItem class="tab orange" v-for="(item,index) in tabMenus" :key="index+1" :selected="index===0" @on-item-click="tab">{{item}}</tabItem>
        </tab>
      </div>
      <router-link :to="{name:'NeighborPost'}" class="link pull-right" slot="right">
        <i class="icon camera"></i>
      </router-link>
    </BarNav>

    <section class="page-group">
      <div class="neighbor-menu clearfix">
        <a v-for="(item, index) in menuList" href="#" class="item">
          <div class="img-box">
            <img class="img" v-lazy="IMG_HOST+item.type_bbs_logo" alt="" />
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
                <img class="img" v-lazy="IMG_HOST+item.user_logo" alt="" />
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
            <router-link :to="{name:'NeighborDetail',query:{id:item.bbs_id}}" class="f28 orange mt20">全文</router-link>
          </a>

          <div class="content" v-if="item.bbs_image.length != 0">
            <vue-preview :slides="imgList['slide'+index]" ></vue-preview>
          </div>

          <div class="neighbor-bar">
            <div class="box">来自：<span class="orange">活动部落</span></div>
            <div class="box">
              <i class="icon thumbs1" @click="nice(item)"></i>
              <i class="icon comment" @click="comment(item)"></i>
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

    <!--发表评论输入框-->
    <footer v-if="isComment">
      <div class="footer tz-msg-send">
        <div class="input-group">
          <textarea name="" id="" cols="30" rows="10" class="input" placeholder="写评论" v-model="bbsContent"></textarea>
        </div>
        <div class="send" @click="isComment = false">取消</div>
        <div class="send" @click="send">发送</div>
      </div>
    </footer>
  </div>
</template>

<script>
  import {Tab, TabItem,LoadMore } from 'vux'
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
      LoadMore
    },
    computed:{
      ...mapState(['userInfo','roomInfo'])
    },
    data(){
      return {
        IMG_HOST:global.IMG_HOST || "",
        tabMenus:['精华','最新'],
        imgList: {},
        bobList:[],
        menuList:[],
        page: 0,
        bbs_type: 1,
        busy:false,
        load:false,
        flag: false,
        goodsNum: 0,
        isComment: false,
        bbsId:0,
        bbsContent:''
      }
    },
    mounted(){
      this.loadMore();
    },
    methods: {
      /*获取初始内容*/
      getBbsIndex(type) {
        let params = {
          village_id: this.roomInfo.village_id,
          type: type,
          page: this.page
        };

        this.$axios.get(global.API_HOST + 'bbs/getBobIndex', {
          params: params
        }).then(res => {
          res = res.data;
          /*菜单列表*/
          this.menuList = res.data.type;

          /*获取图片*/
          res.data.bbs.data.map((item, index) => {
            let slide = [];
            let a = {};
            item.bbs_image.map((img, i) => {
              a = {
                src: img,
                msrc: img,
                w: 600,
                h: 400
              };
              slide.push(a);
            });

            this.imgList['slide' + index] = slide;
          });
          /*文章列表*/
          if (res.data != undefined) {

            if (this.flag) {

              if (res.data.bbs.data.length != 0 && res.data.bbs.data.length == undefined) {
                this.bobList.push(res.data.bbs.data);
              }
              if (this.page >= res.data.bbs.last_page) {
                this.busy = true;
                this.load = false;
              } else {
                this.busy = false;
                this.load = true;
              }
            } else {
              //第一次加载
              this.bobList = res.data.bbs.data;
              this.busy = false;
              this.load = false;
              this.flag = true;
            }
          }
          //console.log(this.bobList);
        }).catch(err => {
          console.log('my err:' + err)
        })
      },
      tab(type) {
        /*选项卡切换*/
        this.bbs_type = type + 1;
        this.flag = false;
        this.page = 0;
        this.getBbsIndex(this.bbs_type);
      },
      /*下拉加载*/
      loadMore: function () {
        this.busy = true;
        this.load = true;
        this.page++;
        this.getBbsIndex(this.bbs_type);
      },
      /*点赞*/
      nice(item) {
        let params = {
          user_id: this.userInfo.user_id,
          bbs_id: item.bbs_id
        };
        this.$axios.get(global.API_HOST + 'bbs/add_user_nice', {
          params: params
        }).then(res => {
          res = res.data;
          if (res.status == 1) {
            this.$vux.toast.text("您已经点过赞了！");
          } else {
            item.bbs_nice += 1;
            this.$vux.toast.text(res.msg);
          }
        }).catch(err => {
          console.log('my err:' + err)
        })
      },
      /*发送评论*/
      send() {
        let params={
          reply_user_id: this.userInfo.user_id,
          reply_bbs_id: this.bbsId,
          reply_content: this.bbsContent
        };


        this.$axios.get(global.API_HOST + 'bbs/add_user_reply', {
          params: params
        }).then(res => {
          res = res.data;
          if(res.status == 0){
            this.bobList.map((item, index)=>{
              if(item.bbs_id == this.bbsId){
                let bbsContent = {
                  reply_content:this.bbsContent,
                  bbs_user: {
                    user_nickname: this.userInfo.user_nickname
                  },
                  reply_user_id: this.userInfo.user_id,
                  status: 0
                };
                item.reply.push(bbsContent);
              }
            });
            this.bbsContent = '';
            this.isComment = false;
          }
        }).catch(err => {
          console.log('my err:' + err)
        })



      },
      comment(item){
        this.isComment = true;
        this.bbsId = item.bbs_id;
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/preview.css';
</style>

<style lang="scss">
  @import '../../assets/scss/neighbor.scss';

  .my-gallery figure{
    background: #fff;
    margin-top: .4rem;
    width: 4.32rem;
    height: 4.32rem;
    line-height: 4.28rem;
    border: 1px solid #e8e8e8;
    float: left;
    margin-right: .48rem;
    text-align: center;
  }
  .my-gallery figure img{
    max-width: 100%;
    max-height: 100%;
    min-width: 1.6rem;
  }
</style>
