<template>
  <div id="app">
    <loading :show="loading" text="加载中..." class="my-loading"></loading>

    <router-view v-transition></router-view>
  </div>
</template>

<script>
import '@/assets/js/public.js'
import {Loading} from 'vux'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Loading
  },
  computed: {
    ...mapState(['loading','userInfo','token'])
},

mounted(){
  //及时通信初始化
  var that=this;

  if(that.userInfo.user_id){
    wsocket.init(
      function(){
        /*websocket登录*/
        wsocket.doSend({controller:'index',action:'login',result:{user_phone:that.userInfo.user_phone,logintime:that.token.logintime}});
        /*websocket加入组*/
        wsocket.doSend({controller:'index',action:'joinGroup',result:{groupname:'house'}});
      },
      {url:'ws://svr.tuanzhuanw.com:8282',token:{token:that.token.token},jsdoc:'./static/wm/'}
    );
  }

  //vConsole
  //var vConsole = new VConsole();

  cordovaLoader(function () {
    that.load_cord();
  },"./static/cordova/");
},
methods:{
  load_cord(){
    //cordova.plugins.notification.local.schedule({title:'您好欢迎使用团转到家1'});

    cordova.plugins.notification.local.setDefaults({
      led: { color: '#FD4915', on: 500, off: 500 },
      vibrate: true
    });
    cordova.plugins.notification.local.on("click", function(notifications,eopt){
      if(typeof notifications.data.outurl != 'undefined' && notifications.data.outurl != ''){
        cordova.InAppBrowser.open(notifications.data.outurl, '_blank', 'location=yes,hideurlbar=yes');
      }else if(typeof notifications.data.url != 'undefined' && notifications.data.url != ''){
        location.href = notifications.data.url;
      }else{
        //其他逻辑
        console.log(notifications);
        //eopt.text为推送通知输入框提交内容
        console.log(eopt);
      }
    });

  }
}
}
</script>
<style lang="scss">
@import './assets/css/common.css';
@import "core/base";
/**转场动画 animated**/
.animated{
  position:absolute;
  width:100%;
  min-height:100%;
  background-color: #f4f4f4;
}

/*loading*/
.weui-loading_toast{
.weui-toast{
  top:50%;
  margin-top: rem(-190);

.weui-icon_toast.weui-loading{
@include wh(rem(70),rem(70));
}
}

.weui-toast__content{
  font-size:rem(24);
}
}

/*toast*/
.vux-toast{
.weui-toast_text{
.weui-toast__content{
  padding:rem(20) !important;
  font-size:rem(24);
}
}
}

/*alert*/
.vux-alert{
.weui-dialog{
  width:50%;
  max-width: 80%;
}

.weui-dialog__bd {
  padding: 0 1.6em 0.8em;
  min-height:rem(40);
  font-size:rem(28);
}

.weui-dialog__ft {
  line-height: rem(80);
  font-size:rem(28);
}
}

/*confirm*/
.vux-confirm{
.weui-dialog{
  width:60%;
  max-width: 80%;
}
.weui-dialog__title{
  font-size:rem(30);
}
.weui-dialog__hd{
  padding:rem(20) rem(20);
}
.weui-dialog__bd{
  padding: 0 rem(20) rem(30);
  min-height:rem(60);
  font-size:rem(30);
  line-height:normal;
  color:#000;
}
.weui-dialog__ft{
  line-height:rem(90);
  font-size:rem(30);
}
}

/*tab*/
.vux-tab-wrap{
  padding-top:rem(88) !important;

.vux-tab-container{
  height:rem(88);
}

.vux-tab{
  height:rem(88);

.vux-tab-item{
  line-height:rem(88);
  font-size:rem(30);
}
}

.scrollable{
  padding-bottom:0;
.vux-tab-ink-bar{
  bottom:0;
}
}
}

/*vux-popup-picker*/
.vux-popup-picker-select-box{
.vux-popup-picker-placeholder{
  color:#bbbbbb;
}
}
.vux-popup-picker-container{
.vux-popup-header {
  height: rem(90);
  line-height:rem(90);
  font-size: rem(34);
}

.scroller-component{
  height:rem(500);
}

.scroller-indicator{
  height:rem(74);
  top:rem(213);
}

.scroller-item {
  font-size: rem(34);
  height: rem(74);
  line-height: rem(74);
}

.scroller-mask{
  background-size: 100% rem(213);
}

.scroller-content{
  top:rem(-9);
}
}

/*vux-datetime*/
.dp-container{
.dp-header .dp-item {
  color: #000;
  font-size: rem(26);
  height: rem(90);
  line-height:rem(90);
  cursor: pointer;
}

.scroller-component{
  height:rem(518);
}

.scroller-indicator{
  height:rem(74);
  top:rem(222);
}

.scroller-item {
  font-size:rem(32);
  height:rem(74);
  line-height:rem(74);
}

.scroller-mask{
  background-size: 100% rem(222);
}
}

/*tz-x-number*/
.tz-xnumber{
&.weui-cell{
   padding:0;
 }
.vux-cell-primary>div{
  border:1px solid #BBBBBB;
  overflow: hidden;
@include border-radius(rem(10));
}
.vux-number-selector {
@include wh(auto,rem(50));
  font-size: 25px;
  border: none;

svg {
@include wh(rem(30),rem(30));
  margin-top:rem(10);
}
}

.vux-number-input {
  min-width:rem(100);
  height: rem(50);
  font-size: rem(28);
  color: #000;
  border: none;
  text-align: center;
}

.vux-number-selector-sub {
  border-right: 1px solid #BBBBBB;
  padding: 0 rem(20);
  border-radius: 0;
}
.vux-number-selector-plus {
  border-left: 1px solid #BBBBBB;
  padding: 0 rem(20);
  margin-right:0;
  border-radius: 0;
}
}

/*tz-sheet*/
.tz-sheet{
.weui-actionsheet{
  background: none;
}

.weui-actionsheet__cell{
  padding:rem(31) 0 ;
  font-size:rem(30);
}

.weui-actionsheet__action{
  margin-top:rem(20);
}
}

/*动画*/
.tz-animated {
  animation-duration:.6s;
  animation-fill-mode: both;
}

/*高度满屏幕,背景色为白色*/
.tz-justify{
@extend %flex;
@include flex-direction();
  background: #fff;
  height:100%;
}

/*搜索*/
.tz-search{
  .weui-search-bar{
    padding:rem(13) rem(27);
  }

  .weui-search-bar__form{
    border:none;
    @include wh(auto,rem(64),rem(64));
    font-size: rem(24);
    background-color: #fff;

    &:after{
      border:none;
    }
  }

  .weui-search-bar__box{
    padding-left:rem(60);
    padding-right:rem(60);
    @include border-radius(rem(200));
    border: 1px solid $grayLight;

    .weui-icon-search{
      line-height:rem(64);
      font-size:rem(30);
    }

    .weui-icon-clear{
      line-height:rem(64);
      font-size:rem(30);
    }

    .weui-search-bar__input{
      @include wh(100%,rem(62));
      font-size:rem(24);
      padding:0;
    }
  }

  .weui-search-bar__cancel-btn{
    line-height:rem(64);
    margin-left:rem(10);
  }

  .weui-search-bar__label {
    top:1px;
    right: 0;
    bottom:1px;
    left:0;
    border-radius:rem(200);
    color:$gray;
    background:$bg;
    display:block;

    .weui-icon-search{
      font-size:rem(30);
      margin-right:0;
    }

    span{
      font-size:rem(24);
      vertical-align: inherit;
    }
  }
}
</style>
