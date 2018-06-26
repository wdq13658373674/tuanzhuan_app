<template>
  <div>
    <section class="page-group">
      <div class="tz-communication">
        <div class="tz-communication-wrap" ref="msgbox" id="msg-centent">
          <scroller lock-x height="100%" ref="scrollerBottom">
            <ul class="tz-communication-list clearfix" id="msgbox">
              <!--<li>-->
              <!--<div class="tip">-->
              <!--<span>房计划管家<em>小雪</em>为您服务</span>-->
              <!--</div>-->
              <!--</li>-->
              <!--<li class="customer">-->
              <!--<div class="img-box">-->
              <!--<img src="@/assets/images/test/img6.png" alt="">-->
              <!--</div>-->
              <!--<div class="con-box">-->
              <!--你好，我家楼上漏水了，麻烦尽快-->
              <!--维修。-->
              <!--</div>-->
              <!--</li>-->
              <!--<li>-->
              <!--<div class="tip">-->
              <!--<span>10:24</span>-->
              <!--</div>-->
              <!--</li>-->
              <template v-for="(item,key) in myMsg">
                <li v-if="item.time">
                  <div class="tip">
                    <span>{{item.time | stampToDate(true)}}</span>
                  </div>
                </li>

                <li v-bind:class="listClass[item.status]">
                  <div class="img-box">
                    <img v-if="user_logo" :src="user_logo" alt="">
                    <img src="@/assets/images/icons/u_head.png" style="background: #fd4915" alt="" v-else>
                  </div>
                  <div class="con-box" style="position:relative;">
                    <inline-loading class="tz-msg-loading" v-if="item.type"></inline-loading>
                    <div class="text" v-if="!item.img">{{item.msg}}</div>
                    <div v-else>
                      <img width="100%" :id="previewer(key)" :src="item.msg" alt="" @click="show(key)">
                    </div>
                  </div>
                </li>
              </template>

            </ul>
          </scroller>
        </div>


        <div class="bottom">
          <div class="enter-box">
            <div class="input-group">
              <textarea name="" v-model="msgBox" cols="30" rows="10" class="input" style="z-index:99999;"></textarea>
            </div>
            <i class="icon icon2" @click="uitlshow=!uitlshow"></i>
            <div class="send" @click="sendMsg">发送</div>
          </div>

          <ul class="util-box-list clearfix" :class="{active:uitlshow}">
            <li class="item">
              <label for="file">
                <img class="img" src="@/assets/images/img/j_icon2.png" alt="">
                <p>照片</p>
                <input type="file" id="file" accept="image/*" @change="uploadImg"/>
              </label>
            </li>
            <!--<li class="item">-->
              <!--<img class="img" src="@/assets/images/img/j_icon1.png" alt="">-->
              <!--<p>拍摄</p>-->
            <!--</li>-->
            <li class="item">
              <a href="tel:400-135-6677">
                <img class="img" src="@/assets/images/img/j_icon3.png" alt="">
                <p>呼叫</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style="display: none" id="moban">
        <li class="customer">
          <div class="img-box">
            <img src="@/assets/images/test/img6.png" alt="">
          </div>
          <div class="con-box">{msg}</div>
        </li>
      </div>
      <div style="display: none" id="welcome">
        <li>
          <div class="tip">
            <span><em>房计划管家</em>为您服务</span>
          </div>
        </li>
      </div>
    </section>

    <previewer :list="myMsg" ref="previewer" :options="options"></previewer>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import { InlineLoading , Previewer } from 'vux'
  import lrz from 'lrz'
  const storeJs=require('storejs');
  const qs = require("querystring");
  import { uploadImg } from '@/assets/js/upload/upload'

  var svrMsg=[];

  export default {
    name: "Call",
    components:{
      InlineLoading,
      Previewer
    },
    data(){
      return {
        listClass:{
          0:'customer',
          1:''
        },
        uitlshow:false,
        user_logo:"",
        msgBox:"",
        myMsg:[],
        options: {
          getThumbBoundsFn (index) {
            let thumbnail = document.querySelector('#previewer'+index);
            console.log(thumbnail);
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
    computed: {
      ...mapState(['roomInfo','userInfo'])
    },
    mounted(){
      var that=this;
      that.user_logo=that.userInfo.user_logo;
      that.myMsg=storeJs("msgDB") || [];

      setTimeout(function(){
        $("#msgbox").append($("#welcome").html());
        that.scrollBottom();
      },100);

      /**
       * Scroller 组件重置
       * **/
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      });
    },
    methods: {
      /**
       * 发送消息
       * **/
      sendMsg:function(){
        var that=this;

        if(that.msgBox==""){
          return false;
        }
        var msg=that.msgBox;
        var arr={
          msg:msg,
          status:1,
          type:true,
        };

        that.myMsg.push(arr);
        that.msgBox="";

        wsocket.doSend({
          controller:'index',
          action:'sendToVillage',
          result:{
            message:msg,
            type:0,
            village_id:that.roomInfo.village_id
          }
        });

        this.scrollBottom();
      },
      /**
       * 发送消息后重置滚动条保持在底部
       * **/
      scrollBottom(){
        var that=this;
        setTimeout(function(){
          that.$refs.msgbox.scrollTop=that.$refs.msgbox.scrollHeight;
        },100);

      },
      /**
       * 上传图片
       * **/
      uploadImg(event){
        //公共方法 uploadImg 上传单张图片 url 上传后的图片地址
        uploadImg(event,this).then(url=>{
          var arr={
            src:url,
            msg:url,
            img:true,
            status:1,
            type:true,
          };
          this.myMsg.push(arr);

          const that=this;
          wsocket.doSend({
            controller:'index',
            action:'sendToVillage',
            result:{
              message:url,
              type:1,
              village_id:that.roomInfo.village_id
            }
          });
          this.scrollBottom();
        })
      },
      /**
       * 显示大图
       * **/
      show (index) {
        this.$refs.previewer.show(index);
        console.log(index);
      },
      /**
       * 动态添加图片id
       * **/
      previewer(key){
        return 'previewer' + key;
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/communication.css';
</style>
<style lang="scss" scoped>
  @import "../../core/base";

  .animated{
    margin-top:rem(-88);
    padding-top:rem(88);
  }

  /*加载图标*/
  .tz-msg-loading{
    position:absolute;
    left:rem(-50);
    top:50%;
    margin-top:rem(-20);
    @include wh(rem(40),rem(40));
  }
</style>
