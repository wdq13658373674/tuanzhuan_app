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
      ...mapState(['loading'])
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="scss">
  @import './assets/css/common.css';
  @import "core/base";
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

  /****/
  .animated{
    position:absolute;
    width:100%;
    min-height:100%;
    background-color: #f4f4f4;
  }
</style>
