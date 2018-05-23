<template>
  <section class="page-group">
    <!--未搜索到 start-->
    <!--<div class="intelligent-empty">
        <img class="img2" src="../../images/img/m_img2.png" alt="">
        <p class="gray mt20">未搜索到设备请刷新重试</p>
    </div>-->
    <!--未搜索到 end-->

    <div class="tz-link-device">
      <h2 class="h2">选择链接的设备</h2>
      <ul class="cell-list auto">
        <li class="item link">
          <label class="cell">
            <div class="tit"><i class="icon camera2"></i>haixin123</div>
            <input type="radio" name="pay" checked>
            <div class="radio mr20">
              <i class="check"></i>
            </div>
          </label>
        </li>
        <li class="item link">
          <label class="cell">
            <div class="tit"><i class="icon camera2"></i>haixin123</div>
            <input type="radio" name="pay">
            <div class="radio mr20">
              <i class="check"></i>
            </div>
          </label>
        </li>
        <li class="item link">
          <label class="cell">
            <div class="tit"><i class="icon camera2"></i>haixin123</div>
            <input type="radio" name="pay">
            <div class="radio mr20">
              <i class="check"></i>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "SelectDevice",
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

  .tz-link-device{
    .cell-list{
      .cell{
        @include align-items(center);
      }
      .name{
        width:100%;
        margin-left:rem(20);
      }
    }
  }
</style>
