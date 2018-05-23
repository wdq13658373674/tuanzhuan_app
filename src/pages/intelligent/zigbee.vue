<template>
  <section class="page-group">
    <div class="tz-device-tips">
      <div class="img-box">
        <img class="img" src="@/assets/images/img/m_img7.png" alt="">
      </div>
      <p class="con">检测到您的网关版本过低，需要手动打开加网模式，找到网关上的set键快速按四下。</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Zigbee",
    components:{

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
