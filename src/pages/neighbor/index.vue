<template>
  <div>
    <!--header-->
    <BarNav>
      <div class="title" slot="middle">
        <a href="#" class="tab orange">精华</a>
        <a href="#" class="tab">最新</a>
      </div>
      <a class="link pull-right" slot="right">
        <i class="icon camera"></i>
      </a>
    </BarNav>
    <section class="page-group">
      <div class="neighbor-menu clearfix">
        <a href="#" class="item">
          <div class="img-box">
            <img class="img" src="@/assets/images/icons/menu6.png" alt="">
          </div>
          <p class="txt">邻里乐园</p>
        </a>
        <a href="#" class="item">
          <div class="img-box">
            <img class="img" src="@/assets/images/icons/menu6.png" alt="">
          </div>
          <p class="txt">活动部落</p>
        </a>
        <a href="#" class="item">
          <div class="img-box">
            <img class="img" src="@/assets/images/icons/menu6.png" alt="">
          </div>
          <p class="txt">二手闲置</p>
        </a>
        <a href="#" class="item">
          <div class="img-box">
            <img class="img" src="@/assets/images/icons/menu6.png" alt="">
          </div>
          <p class="txt">便民生活</p>
        </a>
        <a href="#" class="item">
          <div class="img-box">
            <img class="img" src="@/assets/images/icons/menu6.png" alt="">
          </div>
          <p class="txt">美食美刻</p>
        </a>
      </div>

      <ul class="neighbor-msg-list">
        <!--<li class="item">

          <a href="#" class="link">
            <div class="neighbor">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img6.png" alt="">
              </div>
              <div class="con">
                <p class="p1">Marsbaby</p>
                <p class="p2">
                  <em>重庆市-沙坪坝区</em>
                  <span>1小时前</span>
                </p>
              </div>
            </div>

            <div class="neighbor-content">
              #30天安利ninebot#
              +2017.12.28
              关于你的故事：
              每当这两个字划过，脑袋就像电影一样，往事也像流星一样。第一次，第二次。啦啦啦啦啦啦啦啦
            </div>
            <p class="f28 orange mt20">全文</p>
          </a>

          <div class="content">
            <ul class="neighbor-thumbs clearfix">
              <li class="img-box">
                <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>
              <li class="img-box">
                <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>
              <li class="img-box">
                <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>
              <li class="img-box">
                <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>
              &lt;!&ndash;说明:
                  单张图片添加class='simple'
              &ndash;&gt;
              &lt;!&ndash;<li class="img-box simple">
                  <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>&ndash;&gt;
            </ul>
          </div>

          <div class="neighbor-bar">
            <div class="box">来自：<span class="orange">活动部落</span></div>
            <div class="box">
              <i class="icon thumbs1">
                <em class="orange">+1</em>
              </i>
              <i class="icon comment"></i>
            </div>
          </div>

          <div class="neighbor-comment">
            <p><i class="icon thumbs2"></i>30人点赞</p>
            <ul class="comment-list mt20">
              <li class="cell">
                <em>yunxiao:</em>
                <span>很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队！</span>
              </li>
              <li class="cell">
                <em>全世界都会给你让路:</em>
                <span>很酷的团队！</span>
              </li>
              <li class="cell">
                <em>yunxiao:</em>
                <span>很酷的团队！</span>
              </li>
            </ul>
            <a href="#" class="block f28 gray mt20">查看全部4条评论</a>
          </div>
        </li>-->
        <li class="item">

          <a href="#" class="link">
            <div class="neighbor">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img6.png" alt="">
              </div>
              <div class="con">
                <p class="p1">Marsbaby</p>
                <p class="p2">
                  <em>重庆市-沙坪坝区</em>
                  <span>2018.05.28  16:54</span>
                </p>
              </div>
            </div>

            <div class="neighbor-content">
              #30天安利ninebot#
              +2017.12.28
              关于你的故事：
              每当这两个字划过，脑袋就像电影一样，往事也像流星一样。第一次，第二次。啦啦啦啦啦啦啦啦
            </div>
            <p class="f28 orange mt20">全文</p>
          </a>

          <div class="content">
            <ul class="neighbor-thumbs clearfix">
              <li class="img-box" v-for="(item,index) in imgList" :key="index">
                <img class="img" v-lazy="item.src" alt="" @click="show(index)">
              </li>
              <!--<li class="img-box">
                <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>
              <li class="img-box">
                <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>
              <li class="img-box">
                <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>-->
              <!--说明:
                  单张图片添加class='simple'
              -->
              <!--<li class="img-box simple">
                  <img class="img" src="@/assets/images/test/img7.png" alt="">
              </li>-->
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
            <p><i class="icon thumbs2"></i>30人点赞</p>
            <ul class="comment-list mt20">
              <li class="cell">
                <em>yunxiao:</em>
                <span>很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队很酷的团队！</span>
              </li>
              <li class="cell">
                <em>全世界都会给你让路:</em>
                <span>很酷的团队！</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
    <previewer :list="imgList" ref="previewer" :options="options"></previewer>
  </div>
</template>

<script>
  import { Previewer } from 'vux'
  import BarNav from '../layout/barNav'
  export default {
    name: "Neighbor",
    components:{
      BarNav,
      Previewer
    },
    data(){
      return {
        imgList:[{
          src: 'https://placekitten.com/800/400',
          w: 600,
          h: 400
        },
          {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
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
        }
      }
    },
    methods:{
      /**
       * 显示大图
       * **/
      show(index){
        this.$refs.previewer.show(index);
      },
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/neighbor.css';
</style>
