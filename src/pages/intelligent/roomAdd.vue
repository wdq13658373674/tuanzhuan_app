<template>
  <div>
    <BarNav title="添加房间">
      <div class="link pull-right orange"  slot="right">
        添加
      </div>
    </BarNav>
    <section class="page-group">
      <ul class="cell-list">
        <li class="item p27 cell">
          <span>房间名称</span>
          <input class="input text-right" type="text" value="客厅">
        </li>
      </ul>

      <div class="tz-device-roomicon mt20">
        <ul class="roomicon-list clearfix">
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon1"></i>
            </div>
            <p class="mt20">客厅</p>
          </li>
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon2"></i>
            </div>
            <p class="mt20">卧室</p>
          </li>
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon3"></i>
            </div>
            <p class="mt20">餐厅</p>
          </li>
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon4"></i>
            </div>
            <p class="mt20">卫生间</p>
          </li>
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon5"></i>
            </div>
            <p class="mt20">浴室</p>
          </li>
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon1"></i>
            </div>
            <p class="mt20">客厅</p>
          </li>
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon1"></i>
            </div>
            <p class="mt20">客厅</p>
          </li>
          <li class="item">
            <div class="img-box">
              <i class="m_icon icon1"></i>
            </div>
            <p class="mt20">客厅</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import BarNav from '@/pages/layout/barNav'
  export default {
    name: "RoomAdd",
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
<style lang="css">
  @import "../../assets/css/intellicon.css";
</style>
<style lang="scss">
  @import "../../core/base";


  .tz-device-roomicon{
    .roomicon-list{
      background: #fff;
      padding:0 0 rem(40) rem(27);

      .item{
        width:rem(158);
        float: left;
        text-align: center;
        margin-top:rem(40);
        margin-right:rem(20);

        &:active{
          .img-box{
            background: $grayLight;
          }
        }
      }

      .img-box{
        @include wh(rem(158),rem(158),rem(158));
        background: $bg;

        .m_icon{
          @include wh(100%,100%);
          background-position: center;
          background-repeat: no-repeat;
          background-size: auto 30%;
        }
      }
    }
  }
</style>
