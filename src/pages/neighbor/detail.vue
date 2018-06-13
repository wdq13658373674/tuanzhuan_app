<template>
  <div>
    <section class="page-group">
      <div class="tz-neighbor-detail">
        <div class="content">
          <div class="neighbor">
            <div class="img-box">
              <img class="img" v-lazy="IMG_HOST+BobInfo.user_logo" alt="" />
            </div>
            <div class="con">
              <p class="p1">{{BobInfo.user_nickname}}</p>
              <p class="p2">
                <em>{{BobInfo.bbs_address}}</em>
                <span>{{BobInfo.add_time | stampToDate(true)}}</span>
              </p>
            </div>
          </div>

          <div class="neighbor-content">
            {{BobInfo.bbs_content}}
          </div>
        </div>

        <ul class="neighbor-thumbs clearfix">
          <vue-preview :slides="imgList" ></vue-preview>
          <!--<li class="img-box" v-for="(item, index) in imgList">-->
            <!--<img class="img" src="@/assets/images/test/img7.png" alt="">-->
            <!--<img class="img" v-lazy="IMG_HOST+BobInfo.user_logo" alt="" />-->

          <!--</li>-->
          <!--<li class="img-box">-->
            <!--<img class="img" src="@/assets/images/test/img7.png" alt="">-->
          <!--</li>-->
          <!--<li class="img-box">-->
            <!--<img class="img" src="@/assets/images/test/img7.png" alt="">-->
          <!--</li>-->
          <!--<li class="img-box">-->
            <!--<img class="img" src="@/assets/images/test/img7.png" alt="">-->
          <!--</li>-->
          <!--说明:
              单张图片添加class='simple'
          -->
          <!--<li class="img-box simple">
              <img class="img" src="@/assets/images/test/img7.png" alt="">
          </li>-->
        </ul>

        <div class="neighbor-bar">
          <div class="box">来自：<span class="orange">{{BobInfo.type_bbs_title}}</span></div>
          <div class="box">
            <i class="icon thumbs1" :class="BobInfo.nice_user_id == '' || BobInfo.nice_user_id == null?'':'active'" @click="nice(BobInfo)">
              <!--<em class="orange">+1</em>-->
            </i>
            <i class="icon comment" @click="isComment = true"></i>
          </div>
        </div>

        <div class="content total">
          <span class="mr20 gray">评论 {{replyNum}}</span>
          <span>点赞 {{BobInfo.bbs_nice}}</span>
        </div>


        <!--评论-->
        <ul class="comment-list">
          <li class="item cell" v-for="(item, index) in BobInfo.reply">
            <div class="img-box">
              <!--<img src="@/assets/images/test/img6.png" alt="">-->
              <img class="img" v-lazy="IMG_HOST+item.user_logo" alt="" />
            </div>
            <div class="con-box">
              <p class="blue">{{item.user_nickname}}</p>
              <p class="gray">{{item.add_time | stampToDate(true)}}</p>
              <p class="con">
                {{item.reply_content || ''}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
  import {mapState} from 'vuex'
  export default {
    name: "Detail",
    components:{

    },
    computed:{
      ...mapState(['userInfo','roomInfo'])
    },
    data(){
      return {
        IMG_HOST:global.IMG_HOST || "",
        BobInfo:{},
        isComment: false,
        replyNum:0,
        bbsContent:'',
        imgList: []
      }
    },
    mounted(){
      this.getBobInfo()
    },
    methods:{
      getBobInfo(){

        let params={
          user_id: this.userInfo.user_id,
          bbs_id: this.$route.query.id
        };
        this.$axios.get(global.API_HOST + 'bbs/getBobInfo', {
          params: params
        }).then(res => {
          res = res.data;
          /*获取图片*/
          if(res.data.bbs_image.length ){
            let a= {};

            res.data.bbs_image.map((item, index) => {
              let oImg = new Image();
              oImg.src = item;
              a = {
                src: item,
                msrc: item,
                w: oImg.width,
                h: oImg.height
              };
              this.imgList.push(a);
            });
          }
          this.BobInfo = res.data;
          this.replyNum = res.data.reply.length;
        }).catch(err => {
          console.log('my err:' + err)
        })
      },
      /*点赞*/
      nice(BobInfo){
        let _this = this;
        let params = {
          user_id: this.userInfo.user_id,
          bbs_id: BobInfo.bbs_id
        };

        if(BobInfo.nice_user_id == this.userInfo.user_id){

          _this.$vux.confirm.show({
            title: '提示',
            content: '您确定要取消点赞吗！',
            onConfirm(){
              _this.$axios.get(global.API_HOST+'bbs/add_user_nice',{
                params:params
              }).then(res=>{
                res=res.data;
                if(res.status === 0){
                  BobInfo.bbs_nice -= 1;
                  BobInfo.nice_user_id = null;
                  _this.$vux.toast.text(res.msg);
                }
              }).catch(err=>{
                console.log('my err:'+err)
              })
            }
          });

        }else{
          this.$axios.get(global.API_HOST + 'bbs/add_user_nice', {
            params: params
          }).then(res => {
            res = res.data;
            this.BobInfo.bbs_nice += 1;
            BobInfo.nice_user_id = this.userInfo.user_id;
            this.$vux.toast.text(res.msg);
          }).catch(err => {
            console.log('my err:' + err)
          })
        }
        //
        //
        // if(BobInfo.nice_user_id == '' || BobInfo.nice_user_id == null){
        //
        // }else{
        //   this.$vux.toast.text("您已经点过赞了！");
        // }

      },
      /*发送评论*/
      send() {
        let params={
          reply_user_id: this.userInfo.user_id,
          reply_bbs_id: this.$route.query.id,
          reply_content: this.bbsContent
        };
        this.$axios.get(global.API_HOST + 'bbs/add_user_reply', {
          params: params
        }).then(res => {
          res = res.data;
          if(res.status == 0){

            let bbsContent = {
              reply_content:this.bbsContent,
              bbs_user: {
                user_nickname: this.userInfo.user_nickname
              },
              reply_user_id: this.userInfo.user_id,
              status: 0,
              add_time: new Date().getTime()/1000
            };
            this.BobInfo.reply.push(bbsContent);
            console.log(this.BobInfo.reply);
            this.bbsContent = '';
            this.isComment = false;
          }
        }).catch(err => {
          console.log('my err:' + err)
        })
      }
    }
  }
</script>
<style lang="scss">
  @import '../../assets/scss/ngbDetail.scss';
</style>
<style lang="scss">
  @import '../../assets/scss/neighbor.scss';

  .my-gallery figure{
    background: #fff;
    margin-top: .4rem;
    width: 4.1rem;
    height: 4.1rem;
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
  .comment-list{
    -webkit-animation:none;
  }
</style>
