<template>
  <div class="tz-justify">
    <section class="page-group">
      <div class="content">
        <div class="text-center">
          <p class="f30 mt40">订单总额</p>
          <p class="mt20 mb30">
            <i class="tp"></i>
            <span class="f40">¥4.00</span>
          </p>
        </div>

        <div class="tz-wx-box">
          <div class="ew-box">
            <img src="@/assets/images/test/img10.png" alt="">
          </div>
        </div>
      </div>
      <div class="btn-box cell">
        <button class="btn btn-gray mr20">取消支付</button>
        <button class="btn btn-orange ml20">完成支付</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "WX",
    components:{

    },
    data(){
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

  .tz-wx-box{
    border-top:1px solid $grayLight;

    .ew-box{
      @include wh(rem(366),rem(366));
      margin:rem(110) auto;
      img{
        @include wh(100%,100%);
      }
    }
  }
</style>
