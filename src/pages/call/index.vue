<template>
  <div>
    <section class="page-group">
      <div class="tz-communication">
        <div class="tz-communication-wrap" ref="msgbox" id="msg-centent">
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
                  <inline-loading class="tz-msg-loading" v-if="item.type"></inline-loading> {{item.msg}}
                </div>
              </li>
            </template>

          </ul>
        </div>


        <div class="bottom">
          <div class="enter-box">
            <div class="input-group">
              <textarea name="" v-model="msgBox" cols="30" rows="10" class="input"></textarea>
            </div>
            <i class="icon icon2" @click="uitlshow=!uitlshow"></i>
            <div class="send" @click="sendMsg">发送</div>
          </div>

          <ul class="util-box-list clearfix" :class="{active:uitlshow}">
            <li class="item">
              <label for="file">
                <img class="img" src="@/assets/images/img/j_icon2.png" alt="">
                <p>照片</p>
                <input type="file" id="file"/>
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
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import { InlineLoading } from 'vux'
  const storeJs=require('storejs');

  var svrMsg=[];

  export default {
    name: "Call",
    components:{
      InlineLoading
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
    },
    methods: {
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
    @include wh(rem(40),rem(40));
  }
</style>
