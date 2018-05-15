<!--退货申请进度-->
<template>
  <popup-radio class="tz-select" title="" :options="options" v-model="option" value-align="left">
    <p slot="popup-header" class="tz-bank-title">选择银行卡</p>
    <template slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
      添加银行卡付款
    </template>
  </popup-radio>
</template>

<script>
  import {PopupRadio} from 'vux'
  export default {
    name: "SelectBank",
    props:['step'],
    components:{
      PopupRadio,
    },
    data () {
      return {
        option:'A',
        options: ['重庆银行储蓄卡(1114)', 'B', 'C'],
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  @import "../core/base";

  .tz-select{
    &.weui-cell{
      padding:0 rem(27);
    }

    .weui-cell__ft{
      width:100%;
    }
  }

  .tz-bank-title{
    padding:rem(27);
    text-align: center;
    font-size:rem(32);
    border-bottom:1px solid $grayLight;
  }

  .weui-cells_radio{
    font-size:rem(24);
    .weui-cell{
      padding:rem(40) rem(27);
    }

    &.weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
      font-size:rem(32);
    }
  }

</style>

