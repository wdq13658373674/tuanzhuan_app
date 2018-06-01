<template>
  <div>
    <section class="page-group">
      <div class="tz-neighbor-detail">
        <div class="content">
          <div class="neighbor">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
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
        </div>

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
          <!--说明:
              单张图片添加class='simple'
          -->
          <!--<li class="img-box simple">
              <img class="img" src="@/assets/images/test/img7.png" alt="">
          </li>-->
        </ul>

        <div class="neighbor-bar">
          <div class="box">来自：<span class="orange">活动部落</span></div>
          <div class="box">
            <i class="icon thumbs1">
              <em class="orange">+1</em>
            </i>
            <i class="icon comment"></i>
          </div>
        </div>

        <div class="content total">
          <span class="mr20 gray">评论 25</span>
          <span>点赞 16</span>
        </div>

        <!--点赞-->
        <!--<ul class="thumbs-list">
            <li class="item">
                <div class="img-box">
                    <img src="@/assets/images/test/img6.png" alt="">
                </div>
                <p>全世界都会给你让路</p>
            </li>
            <li class="item">
                <div class="img-box">
                    <img src="@/assets/images/test/img6.png" alt="">
                </div>
                <p>全世界都会给你让路</p>
            </li>
            <li class="item">
                <div class="img-box">
                    <img src="@/assets/images/test/img6.png" alt="">
                </div>
                <p>全世界都会给你让路</p>
            </li>
        </ul>-->

        <!--评论-->
        <ul class="comment-list">
          <li class="item cell">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              <p class="blue">全世界都会给你让路</p>
              <p class="gray">1小时前</p>
              <p class="con">
                只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩
              </p>
            </div>
          </li>
          <li class="item cell">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              <p class="blue">全世界都会给你让路</p>
              <p class="gray">1小时前</p>
              <p class="con">
                只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩只能在公园玩玩
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <div class="footer tz-msg-send">
        <div class="input-group">
          <textarea name="" id="" cols="30" rows="10" class="input" placeholder="写评论"></textarea>
        </div>
        <div class="send">发送</div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    components:{

    },
    computed:{

    },
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css">
  @import '../../assets/css/ngbDetail.css';
</style>
