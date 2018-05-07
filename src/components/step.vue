<!--退货申请进度-->
<template>
  <div class="tz-step">
    <ul class="step-list">
      <li class="item" v-for="(item,index) in steps" :class="{'active':step==index}">
        <div class="circle">
          <span class="dot"></span>
        </div>
        <p>{{item}}</p>
      </li>
    </ul>
    <div class="step-line"></div>
  </div>
</template>

<script>
  export default {
    name: "step",
    props:['step'],
    data () {
      return {
        steps:['申请退货','退货中','退货完成']
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
  @import "../core/base";

  .tz-step{
    height:rem(151);
    overflow: hidden;
    background: #fff;

    .step-list{
      @extend %flex;
      padding:rem(30) rem(83);
      .item{
        padding:0 rem(14);
        background: #fff;
        text-align: center;

        &.active{
          .circle{
            border-color:$primary;
            .dot{
              background: $primary;
            }
          }
          p{
            color:$primary;
          }
        }
      }

      .circle{
        border:1px solid $gray;
        @include border-radius(50%);
        @extend %inline-block;
        .dot{
          display:block;
          @include wh(rem(30),rem(30));
          @include border-radius(50%);
          background: $gray;
          border:rem(4) solid #fff;
        }
      }
      p{
        margin-top:rem(15);
      }
    }

    .step-line{
      @include wh(auto,rem(91));
      border-top:1px solid $gray;
      margin:rem(-106) rem(97);
    }
  }
</style>

