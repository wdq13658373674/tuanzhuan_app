<template>
  <section class="page-group">
    <swiper class="tz-device-tips" height="100%" dots-position="center" :show-dots="true">
      <swiper-item>
        <div class="img-box">
          <img class="img" src="@/assets/images/img/m_img7.png" alt="">
        </div>
        <p class="con">检测到您的网关版本过低，需要手动打开加网模式，找到网关上的set键快速按四下。</p>
      </swiper-item>

      <swiper-item>
        <div class="img-box">
          <img class="img" src="@/assets/images/img/m_img7.png" alt="">
        </div>
        <p class="con">设备加网：设备set键快速按四下，如果没有set键请参考说明书</p>
      </swiper-item>

      <swiper-item>
        <div class="img-box">
          <img class="img" src="@/assets/images/img/m_img7.png" alt="">
        </div>
        <p class="con">加网成功：设备上的指示灯有闪烁变为常亮两秒后熄灭</p>
      </swiper-item>
    </swiper>
  </section>
</template>

<script>
  import { Swiper, SwiperItem } from 'vux'
  export default {
    name: "Zigbee",
    components:{
      Swiper,
      SwiperItem
    },
    data () {
      return {

      }
    },
    computed:{

    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="scss">
  @import "../../core/base";


  .tz-device-tips{
    background: #fff;
    overflow: hidden;

    &.vux-slider{
      @include wh(100%,100%);
      position:absolute;
      top:0;
      padding-top:rem(88);

      .vux-indicator{
        bottom:rem(80);
      }

      .vux-indicator > a > .vux-icon-dot{
        @include wh(rem(20),rem(20));
        @include border-radius(50%);
        margin:0 rem(10);
      }
    }

    .img-box{
      @include wh(rem(514),rem(460));
      border:1px solid $grayLight;
      margin:rem(100) auto 0;
      @include border-radius(rem(8));

      img{
        @include wh(100%,100%);
      }
    }

    .con{
      width:rem(514);
      text-align: center;
      margin:rem(60) auto;
    }
  }
</style>
