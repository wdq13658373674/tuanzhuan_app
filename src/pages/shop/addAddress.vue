<template>
  <div>
    <!--section-->
    <section class="page-group">

      <ul class="cell-list address-add">
        <!--<li class="item cell">
          <p class="area">
            重庆
            <span class="f60 mr20">&rsaquo;</span>
          </p>
          <p class="area ml20">
            <span class="gray">请选择区域</span>
            <span class="f60">&rsaquo;</span>
          </p>
        </li>-->
        <li class="item">
          <x-address title="" value-text-align="left" :list="addressData" placeholder="请选择地址"></x-address>
        </li>
        <li class="item">
          <input class="input" type="text" placeholder="请输入小区名">
        </li>
        <li class="item">
          <input class="input" type="text" placeholder="请输入门牌号等详细地址">
        </li>
      </ul>
      <ul class="cell-list mt20 address-add">
        <li class="item">
          <input class="input" type="text" placeholder="您的姓名">
        </li>
        <li class="item">
          <label class="pull-left mr20">
            <span>女士</span>
            <input type="radio" value="ms" name="sex" v-model="sex">
            <div class="radio">
              <i class="check"></i>
            </div>
          </label>
          <label class="pull-left">
            <span>男士</span>
            <input type="radio" value="men" name="sex" v-model="sex">
            <div class="radio">
              <i class="check"></i>
            </div>
          </label>
        </li>
        <li class="item">
          <input class="input" type="text" placeholder="请输入你的电话号码">
        </li>
      </ul>
    </section>
    <!--footer-->
    <footer>
      <a href="#" class="bottom-fixed btn-orange-fixed">保存</a>
    </footer>
  </div>
</template>

<script>
  import { XAddress, ChinaAddressV4Data } from 'vux'
  export default {
    name: "ShopAddAddress",
    components: {
      XAddress
    },
    data () {
      return {
        sex:'ms',
        addressData:ChinaAddressV4Data
      }
    },
    methods: {

    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/address.css';
</style>
<style lang="scss">
  @import "../../core/base";

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
</style>
