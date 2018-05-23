<template>
  <div>
    <BarNav title="房间设置">
      <div class="link pull-right orange"  slot="right">
        保存
      </div>
    </BarNav>
    <section class="page-group">
      <div class="tz-device-roomset">
        <ul class="arrow-cell-list">
          <li class="item">
            <div class="link cell">
              <span>房间名称</span>
              <input class="input text-right" type="text" value="客厅">
            </div>
          </li>
        </ul>
      </div>
      <div class="tz-link-device">
        <h2 class="h2 orange">已添加2台设备</h2>
        <ul class="cell-list auto">
          <li class="item link">
            <label class="cell">
              <i class="icon camera2"></i>
              <div class="name">智能摄像机
                <span class="gray"> 已添加 </span>
              </div>
              <input type="checkbox" name="pay" checked>
              <div class="radio align-self mr20">
                <i class="check"></i>
              </div>
            </label>
          </li>
          <li class="item link">
            <label class="cell">
              <i class="icon camera2"></i>
              <div class="name">智能吸顶灯
                <span class="gray"> 已添加 </span>
              </div>
              <input type="checkbox" name="pay" checked>
              <div class="radio align-self mr20">
                <i class="check"></i>
              </div>
            </label>
          </li>
          <li class="item link">
            <label class="cell">
              <i class="icon camera2"></i>
              <div class="name">
                智能电视机
                <span class="gray">「默认房间」</span>
              </div>
              <input type="checkbox" name="pay" checked>
              <div class="radio align-self mr20">
                <i class="check"></i>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </section>

    <!--footer-->
    <footer>
      <a href="#" class="bottom-fixed btn-orange-fixed">删除房间</a>
    </footer>
  </div>
</template>

<script>
  import BarNav from '@/pages/layout/barNav'
  export default {
    name: "Set",
    components:{
      BarNav
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
